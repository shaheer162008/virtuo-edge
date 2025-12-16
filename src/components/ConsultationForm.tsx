"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Loader2, MapPin, RefreshCw } from "lucide-react";
import Dropdown from "./ui/Dropdown";
import DatePicker from "./ui/DatePicker";
import ClockPicker from "./ui/ClockPicker";
import { TIMEZONES, getTimezoneOffset } from "@/lib/timezones";

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    date: "",
    time: "",
    timezone: "",
    timezoneOffset: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [isDetecting, setIsDetecting] = useState(false);
  
  // Booked times - empty for now since API doesn't exist
  const [bookedTimes] = useState<string[]>([]);

  // Auto-detect user's timezone on component mount
  useEffect(() => {
    detectTimezone();
  }, []);

  const detectTimezone = () => {
    setIsDetecting(true);

    // Get timezone from browser
    const browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const offset = getTimezoneOffset(browserTimezone);

    setFormData(prev => ({ 
      ...prev, 
      timezone: browserTimezone,
      timezoneOffset: offset
    }));

    setIsDetecting(false);
  };

  const handleManualTimezoneChange = (e: { target: { name: string; value: string } }) => {
    const selectedTimezone = e.target.value;
    const offset = getTimezoneOffset(selectedTimezone);

    setFormData(prev => ({
      ...prev,
      timezone: selectedTimezone,
      timezoneOffset: offset
    }));
  };

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
    
    // FINAL VALIDATION: Check if the selected time is in the bookedTimes array just before submission
    if (bookedTimes.includes(formData.time)) {
        setStatus("error");
        setErrorMessage(`The time slot ${formData.time} is no longer available. Please select another time.`);
        return;
    }

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
        className="bg-white/5 backdrop-blur-sm border border-primary/30 rounded-2xl p-8 text-center"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-6">
          <CheckCircle2 size={32} className="text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">
          Consultation Booked Successfully! 
        </h3>
        <p className="text-white/70 mb-6">
          Thank you for booking a consultation with us. We'll send you a confirmation email shortly and reach out within 24 hours to confirm your appointment.
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
      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8"
    >
      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          Book Your Free Consultation
        </h2>
        <p className="text-white/60 text-sm">
          Fill out the form below and we'll get back to you within 24 hours
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
            { value: "ai-automation", label: "AI Automation" },
            { value: "custom-development", label: "Custom Development" },
            { value: "process-optimization", label: "Process Optimization" },
            { value: "data-solutions", label: "Data Solutions" },
            { value: "api-integration", label: "API Integration" },
            { value: "consulting", label: "Consulting & Support" },
            { value: "other", label: "Other" },
          ]}
        />

        {/* Budget Range */}
        <Dropdown
          id="budget"
          name="budget"
          value={formData.budget}
          onChange={handleDropdownChange}
          label="Budget Range"
          placeholder="Select budget range"
          options={[
            { value: "under-1k", label: "Under $1,000" },
            { value: "1k-5k", label: "$1,000 - $5,000" },
            { value: "5k-10k", label: "$5,000 - $10,000" },
            { value: "10k-25k", label: "$10,000 - $25,000" },
            { value: "25k-50k", label: "$25,000 - $50,000" },
            { value: "50k-plus", label: "$50,000+" },
            { value: "not-sure", label: "Not Sure Yet" },
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
            label="Preferred Time"
            disabled={false}
            bookedTimes={bookedTimes}
            required
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
            Tell Us About Your Project
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
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

        {/* Timezone Selection */}
        <div className="space-y-3">
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium text-white">
              Your Timezone <span className="text-primary">*</span>
            </label>
            <button
              type="button"
              onClick={detectTimezone}
              disabled={isDetecting}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/20 text-white text-xs font-medium hover:bg-white/10 hover:border-primary/50 transition-all duration-300 disabled:opacity-50"
            >
              {isDetecting ? (
                <>
                  <Loader2 size={14} className="animate-spin" />
                  Detecting...
                </>
              ) : (
                <>
                  <RefreshCw size={14} />
                  Auto-Detect
                </>
              )}
            </button>
          </div>

          <Dropdown
            id="timezone"
            name="timezone"
            value={formData.timezone}
            onChange={handleManualTimezoneChange}
            placeholder="Select your timezone"
            required
            options={TIMEZONES.map(tz => ({ value: tz.value, label: tz.label }))}
          />

          {/* Current Time Display */}
          {formData.timezone && formData.timezoneOffset && (
            <div className="bg-white/5 border border-white/10 rounded-xl p-3">
              <div className="flex items-center gap-2 text-sm text-white/70">
                <MapPin size={16} className="text-primary" />
                <span>
                  Your Time: <strong className="text-white">{new Date().toLocaleTimeString('en-US', { 
                    hour: '2-digit', 
                    minute: '2-digit',
                    hour12: true,
                    timeZone: formData.timezone 
                  })}</strong> <span className="text-primary">({formData.timezoneOffset})</span>
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-base font-bold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 bg-white/10 text-white border-2 border-white/30 hover:bg-white/20 hover:border-white/50 hover:scale-105 active:scale-95 w-full h-12 px-6 py-3"
        >
          {status === "loading" ? (
            <>
              <Loader2 size={20} className="animate-spin" />
              Booking...
            </>
          ) : (
            <>
              <Send size={20} />
              Schedule Free Consultation
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