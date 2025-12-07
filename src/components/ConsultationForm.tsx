"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Send, CheckCircle2, Loader2 } from "lucide-react";

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    date: "",
    time: "",
    message: "",
  });
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

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
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          budget: "",
          date: "",
          time: "",
          message: "",
        });
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
          Consultation Booked Successfully! 🎉
        </h3>
        <p className="text-white/70 mb-6">
          Thank you for booking a consultation with us. We'll send you a confirmation email shortly and reach out within 24 hours to confirm your appointment.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="px-6 py-3 bg-white/10 text-white border-2 border-white/30 rounded-xl font-bold hover:bg-white/20 hover:border-white/50 transition-all duration-300"
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
      <h2 className="text-2xl font-bold text-white mb-6">
        Book Your Free Consultation
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
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
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300"
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
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300"
            placeholder="john@example.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
            Phone Number <span className="text-primary">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300"
            placeholder="Your Company"
          />
        </div>

        {/* Service Interested In */}
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
            Service Interested In <span className="text-primary">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300"
          >
            <option value="" className="bg-[#00040F]">Select a service</option>
            <option value="ai-automation" className="bg-[#00040F]">AI Automation</option>
            <option value="custom-development" className="bg-[#00040F]">Custom Development</option>
            <option value="process-optimization" className="bg-[#00040F]">Process Optimization</option>
            <option value="data-solutions" className="bg-[#00040F]">Data Solutions</option>
            <option value="api-integration" className="bg-[#00040F]">API Integration</option>
            <option value="consulting" className="bg-[#00040F]">Consulting & Support</option>
            <option value="other" className="bg-[#00040F]">Other</option>
          </select>
        </div>

        {/* Budget Range */}
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-white mb-2">
            Budget Range
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300"
          >
            <option value="" className="bg-[#00040F]">Select budget range</option>
            <option value="under-1k" className="bg-[#00040F]">Under $1,000</option>
            <option value="1k-5k" className="bg-[#00040F]">$1,000 - $5,000</option>
            <option value="5k-10k" className="bg-[#00040F]">$5,000 - $10,000</option>
            <option value="10k-25k" className="bg-[#00040F]">$10,000 - $25,000</option>
            <option value="25k-50k" className="bg-[#00040F]">$25,000 - $50,000</option>
            <option value="50k-plus" className="bg-[#00040F]">$50,000+</option>
            <option value="not-sure" className="bg-[#00040F]">Not Sure Yet</option>
          </select>
        </div>

        {/* Preferred Date & Time */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-white mb-2">
              <Calendar size={16} className="inline mr-1" />
              Preferred Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300"
            />
          </div>
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-white mb-2">
              <Clock size={16} className="inline mr-1" />
              Preferred Time
            </label>
            <select
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300"
            >
              <option value="" className="bg-[#00040F]">Select time</option>
              <option value="9am" className="bg-[#00040F]">9:00 AM</option>
              <option value="10am" className="bg-[#00040F]">10:00 AM</option>
              <option value="11am" className="bg-[#00040F]">11:00 AM</option>
              <option value="12pm" className="bg-[#00040F]">12:00 PM</option>
              <option value="1pm" className="bg-[#00040F]">1:00 PM</option>
              <option value="2pm" className="bg-[#00040F]">2:00 PM</option>
              <option value="3pm" className="bg-[#00040F]">3:00 PM</option>
              <option value="4pm" className="bg-[#00040F]">4:00 PM</option>
              <option value="5pm" className="bg-[#00040F]">5:00 PM</option>
            </select>
          </div>
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
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all duration-300 resize-none"
            placeholder="Describe your business challenges, goals, and what you'd like to discuss..."
          />
        </div>

        {/* Error Message */}
        {status === "error" && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 text-red-400 text-sm">
            {errorMessage}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full px-6 py-4 bg-primary text-dark rounded-xl font-bold text-base hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center gap-2 shadow-lg shadow-primary/30"
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
