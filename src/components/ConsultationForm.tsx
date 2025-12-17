"use client";
import { useState, useEffect, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2, Globe, Clock, MapPin, RefreshCw } from "lucide-react";
import Dropdown from "./ui/Dropdown";
import DatePicker from "./ui/DatePicker";
import ClockPicker from "./ui/ClockPicker";
import { getTimezoneOffset } from "@/lib/timezones";

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    date: "",
    time: "",
    // Start empty on first render to match server HTML and avoid hydration mismatch.
    timezone: "",
    timezoneOffset: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [isDetecting, setIsDetecting] = useState(false);
  const [locationStatus, setLocationStatus] = useState<"idle" | "requesting" | "success" | "denied">("idle");
  
  // Booked times - empty for now since API doesn't exist
  const [bookedTimes] = useState<string[]>([]);

  const localTime = useMemo(() => {
    if (!formData.timezone) return '';
    try {
      return new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
        timeZone: formData.timezone,
      }).format(new Date());
    } catch (e) {
      return new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
    }
  }, [formData.timezone]);

  const detectTimezone = useCallback(() => {
    setIsDetecting(true);

    // Get timezone from browser
    const browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const offset = getTimezoneOffset(browserTimezone);

    setFormData(prev => ({
      ...prev,
      timezone: browserTimezone,
      timezoneOffset: offset,
    }));

    setIsDetecting(false);
  }, [setFormData]);

  // Detect timezone after client mount to avoid SSR/client hydration mismatch
  useEffect(() => {
    try {
      detectTimezone();
    } catch (e) {
      // swallow any detection errors; we'll keep timezone empty instead of causing mismatch
      console.warn('Timezone detection failed on mount', e);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const requestLocationPermission = useCallback(() => {
    setLocationStatus("requesting");

    // If geolocation isn't supported, fall back to browser timezone
    if (!navigator.geolocation) {
      detectTimezone();
      setLocationStatus("success");
      return;
    }

    // Use Permissions API if available to provide friendlier UX
    const handleDetect = () => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // We don't need coordinates for timezone detection; calling detectTimezone is enough
          detectTimezone();
          setLocationStatus("success");
        },
        (error) => {
          // If user denies, mark denied; otherwise fall back to browser timezone
          detectTimezone();
          setLocationStatus(error.code === 1 ? "denied" : "success");
        },
        { timeout: 8000 }
      );
    };

    if (navigator.permissions && (navigator.permissions as any).query) {
      // @ts-ignore - permissions types vary by browser
      navigator.permissions.query({ name: 'geolocation' }).then((permStatus: any) => {
        if (permStatus.state === 'granted') {
          // Already granted — still call to ensure consistent state
          handleDetect();
        } else if (permStatus.state === 'prompt') {
          // Will trigger browser prompt
          handleDetect();
        } else {
          // denied
          detectTimezone();
          setLocationStatus('denied');
        }
      }).catch(() => {
        // Permissions API not reliable — fallback to direct prompt
        handleDetect();
      });
    } else {
      // Fallback: directly request position which triggers prompt
      handleDetect();
    }
  }, [detectTimezone]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDropdownChange = (e: { target: { name: string; value: string } }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    
    // Simple client-side validation: ensure required fields are filled
    const requiredFields: Array<{ key: keyof typeof formData; label: string }> = [
      { key: 'name', label: 'Full Name' },
      { key: 'email', label: 'Email' },
      { key: 'phone', label: 'WhatsApp Number' },
      { key: 'service', label: 'Service Interested In' },
      { key: 'budget', label: 'Budget Range' },
      { key: 'date', label: 'Preferred Date' },
      { key: 'time', label: 'Preferred Time' },
      { key: 'message', label: 'Project Details' },
    ];

    for (const field of requiredFields) {
      if (!formData[field.key] || String(formData[field.key]).trim() === "") {
        setStatus("error");
        setErrorMessage(`${field.label} is required. Please fill it before scheduling.`);
        return;
      }
    }

    // FINAL VALIDATION: Check if the selected time is in the bookedTimes array just before submission
    if (bookedTimes.includes(formData.time)) {
      setStatus("error");
      setErrorMessage(`The selected time slot is no longer available. Please select another time.`);
      return;
    }

    // Console log for testing - shows what data will be sent to backend
    console.log('📤 Submitting Consultation Data:');
    console.log('Name:', formData.name);
    console.log('Email:', formData.email);
    console.log('Phone:', formData.phone);
    console.log('Service:', formData.service);
    console.log('Date:', formData.date);
    console.log('Time:', formData.time);
    console.log('Timezone:', formData.timezone);
    console.log('UTC Offset:', formData.timezoneOffset);
    console.log('-------------------');

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        const browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const offset = getTimezoneOffset(browserTimezone);

        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          budget: "",
          date: "",
          time: "",
          timezone: browserTimezone,
          timezoneOffset: offset,
          message: "",
        });
        // Refetch booked times after successful submission to update the list
        // The useEffect hook will handle this since formData.date will likely be cleared or changed.
      } else {
        setStatus("error");
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error('Consultation booking error:', error);
      setStatus("error");
      setErrorMessage("Network error. Please check your connection.");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-linear-to-br from-primary/20 to-primary/5 backdrop-blur-sm border border-primary/30 rounded-2xl p-8 sm:p-10 text-center"
      >
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-6"
        >
          <CheckCircle2 size={40} className="text-primary" />
        </motion.div>
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Consultation Booked! 🎉
        </h3>
        <p className="text-white/70 mb-8 max-w-md mx-auto">
          Thank you for booking a consultation with us. We&apos;ll send you a confirmation email shortly and reach out within 24 hours to confirm your appointment.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-xl text-base font-bold transition-all duration-300 hover:scale-105 active:scale-95 bg-white/10 text-white border-2 border-white/30 hover:bg-white/20 hover:border-white/50 h-12 px-8 py-3"
        >
          Book Another Consultation
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-linear-to-br from-white/8 to-white/2 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl"
    >
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          Book Your Free Consultation
        </h2>
        <p className="text-white/60 text-sm">
          Tell us about your project and we&apos;ll get back to you within 24 hours
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
            Full Name <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300 hover:border-white/20"
            placeholder="John Doe"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
            Email Address <span className="text-primary">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300 hover:border-white/20"
            placeholder="john@example.com"
          />
        </div>

        {/* WhatsApp */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
            WhatsApp Number <span className="text-primary">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300 hover:border-white/20"
            placeholder="+1 (555) 123-4567"
          />
          <p className="text-xs text-white/50 mt-1.5">Please include country code (e.g., +1 for USA, +44 for UK)</p>
        </div>

        {/* Service Interested In */}
        <Dropdown
          id="service"
          name="service"
          value={formData.service}
          onChange={handleDropdownChange}
          required
          label="Service Interested In"
          placeholder="Select a service"
          options={[
            { value: "not-sure", label: "Not Sure / Need Guidance" },
            { value: "custom-package", label: "Create My Own Package" },
            { value: "website-development", label: "Website Development" },
            { value: "ai-automation-setup", label: "AI Automation Setup" },
            { value: "ai-chatbot-integration", label: "AI Chatbot Integration" },
            { value: "full-brand-creation", label: "Full Brand Creation" },
            { value: "motion-graphics", label: "Motion Graphics" },
            { value: "video-editing-short", label: "Video Editing (Short Form)" },
            { value: "video-editing-long", label: "Video Editing (Long Form)" },
            { value: "ai-automation-maintenance", label: "AI Automation Maintenance" },
            { value: "seo-optimization", label: "SEO Optimization" },
            { value: "social-media-ads", label: "Social Media Ads" },
            { value: "graphic-design", label: "Graphic Design" },
            { value: "website-maintenance", label: "Website Maintenance" },
            { value: "3d-modeling", label: "3D Modeling & Rendering" },
            { value: "api-integration", label: "API Integration" },
            { value: "custom-software", label: "Custom Software Development" },
          ]}
        />

        {/* Budget Range */}
        <Dropdown
          id="budget"
          name="budget"
          value={formData.budget}
          onChange={handleDropdownChange}
          required
          label="Budget Range"
          placeholder="Select budget range"
          options={[
            { value: "not-sure", label: "Not Sure Yet" },
            { value: "under-1k", label: "Under $1,000" },
            { value: "1k-5k", label: "$1,000 - $5,000" },
            { value: "5k-10k", label: "$5,000 - $10,000" },
            { value: "10k-25k", label: "$10,000 - $25,000" },
            { value: "25k-50k", label: "$25,000 - $50,000" },
            { value: "50k-plus", label: "$50,000+" },
          ]}
        />

        {/* Preferred Date & Time */}
        <div className="grid sm:grid-cols-2 gap-6">
          <DatePicker
            id="date"
            name="date"
            value={formData.date}
            onChange={handleDropdownChange}
            label="Preferred Date"
            required
            minDate={new Date().toISOString().split('T')[0]}
          />
          <ClockPicker
            id="time"
            name="time"
            value={formData.time}
            onChange={handleDropdownChange}
            label="Preferred Time of Consultation"
            disabled={false}
            bookedTimes={bookedTimes}
            required
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
            Tell Us About Your Project <span className="text-primary">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300 resize-none hover:border-white/20"
            placeholder="Describe your business challenges, goals, and what you'd like to discuss..."
          />
        </div>

        {/* Error Message */}
        {status === "error" && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-red-400 text-sm"
          >
            ⚠️ {errorMessage}
          </motion.div>
        )}

        {/* Auto-Detected Timezone Display */}
        <div className="bg-linear-to-r from-primary/10 to-primary/5 border border-primary/30 rounded-xl p-4">
          <div className="flex flex-row flex-wrap items-center justify-between gap-3">
            {/* Left: timezone label + value */}
            <div className="flex items-center gap-3 min-w-0">
              <div className="p-2 bg-primary/20 rounded-lg flex-shrink-0">
                <Globe className="w-5 h-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-white/50 mb-0.5">Your Timezone</p>
                {formData.timezone ? (
                  <p className="text-white font-semibold text-sm sm:text-base max-w-[180px] truncate">{formData.timezone}</p>
                ) : (
                  <p className="text-white/50 text-sm">Detecting...</p>
                )}
              </div>
            </div>

            {/* Right: time + UTC + button (keeps compact on mobile) */}
            <div className="flex items-center gap-3 ml-2">
              {formData.timezone && (
                <div className="flex flex-col sm:flex-row items-start sm:items-center text-left">
                    <div className="flex items-center gap-2 text-primary font-bold text-base sm:text-lg">
                    <Clock className="w-4 h-4" />
                    <span className="inline-block">{localTime}</span>
                  </div>
                  <p className="text-xs text-white/50 sm:ml-3">UTC {formData.timezoneOffset}</p>
                </div>
              )}

              <button
                type="button"
                onClick={requestLocationPermission}
                disabled={locationStatus === "requesting" || isDetecting}
                aria-label="Auto-sync timezone"
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all duration-300 text-sm text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {locationStatus === "requesting" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="inline text-xs">Auto-syncing...</span>
                  </>
                ) : (
                  <>
                    <MapPin className="w-4 h-4" />
                    {/* Show short label on mobile, fuller label on larger screens */}
                    <span className="inline sm:hidden text-xs">Auto-sync</span>
                    <span className="hidden sm:inline">Re-detect</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
          {locationStatus === "denied" && (
            <p className="text-xs text-amber-400/80 mt-3 flex items-center gap-2">
              <RefreshCw className="w-3 h-3" />
              Location access was denied. We&apos;re using your browser&apos;s timezone instead.
            </p>
          )}
          
          {!formData.timezone && locationStatus !== "requesting" && (
            <p className="text-xs text-white/50 mt-3">
              Allow location access for accurate timezone detection, or we&apos;ll use your browser settings.
            </p>
          )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-base font-bold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 px-5 py-3 bg-white/10 text-white border-2 border-white/30 hover:bg-white/20 hover:border-white/50"
        >
          {status === "loading" ? (
            <>
              <Loader2 size={20} className="animate-spin" />
              Scheduling...
            </>
          ) : (
            <>
              <Send size={20} />
              Schedule My Free Consultation
            </>
          )}
        </button>

        <p className="text-xs text-white/50 text-center">
          By submitting this form, you agree to our{" "}
          <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>
        </p>
      </form>
    </motion.div>
  );
}