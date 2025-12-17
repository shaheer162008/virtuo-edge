"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Check } from "lucide-react";

interface ClockPickerProps {
  id?: string;
  name: string;
  value: string;
  onChange: (e: { target: { name: string; value: string } }) => void;
  label?: string;
  required?: boolean;
  disabled: boolean;
  bookedTimes: string[];
}

const TIME_OPTIONS = Array.from({ length: 12 }, (_, i) =>
  ["00", "30"].map(m => `${(i + 1).toString().padStart(2, "0")}:${m}`)
).flat();

const DURATIONS = [30, 45, 60];

export default function ClockPicker({
  id,
  name,
  value,
  onChange,
  label,
  required,
}: ClockPickerProps) {
  const [open, setOpen] = useState(false);
  const [startTime, setStartTime] = useState("09:00");
  const [period, setPeriod] = useState<"AM" | "PM">("AM");
  const [duration, setDuration] = useState(60);
  const [timeDropdownOpen, setTimeDropdownOpen] = useState(false);
  const [periodDropdownOpen, setPeriodDropdownOpen] = useState(false);

  const clockPickerRef = useRef<HTMLDivElement>(null);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (clockPickerRef.current && !clockPickerRef.current.contains(event.target as Node)) {
        setOpen(false);
        setTimeDropdownOpen(false);
        setPeriodDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (!value) return;
    const [start] = value.split("-");
    let hour = parseInt(start.slice(0, 2));
    setPeriod(hour >= 12 ? "PM" : "AM");
    hour = hour % 12 || 12;
    setStartTime(`${hour.toString().padStart(2, "0")}:${start.slice(3)}`);
  }, [value]);

  const to24Hour = () => {
    let h = parseInt(startTime.slice(0, 2));
    if (period === "PM" && h !== 12) h += 12;
    if (period === "AM" && h === 12) h = 0;
    return h * 60 + parseInt(startTime.slice(3));
  };

  // Format time for display in AM/PM format
  const formatDisplayTime = (timeValue: string) => {
    if (!timeValue) return "Select time";
    const [start, end] = timeValue.split("-");
    
    const formatPart = (part: string) => {
      let hour = parseInt(part.slice(0, 2));
      const min = part.slice(3);
      const ampm = hour >= 12 ? "PM" : "AM";
      hour = hour % 12 || 12;
      return `${hour}:${min} ${ampm}`;
    };
    
    return `${formatPart(start)} - ${formatPart(end)}`;
  };

  const handleConfirm = () => {
    const start24 = to24Hour();
    const end24 = start24 + duration;

    const startH = Math.floor(start24 / 60);
    const startM = start24 % 60;
    const endH = Math.floor(end24 / 60) % 24;
    const endM = end24 % 60;

    onChange({
      target: {
        name,
        value: `${startH.toString().padStart(2, "0")}:${startM
          .toString()
          .padStart(2, "0")}-${endH
          .toString()
          .padStart(2, "0")}:${endM.toString().padStart(2, "0")}`,
      },
    });

    setOpen(false);
  };

  return (
    <div className="relative w-full" ref={clockPickerRef}>
      {label && (
        <label htmlFor={id} className="block text-sm text-white mb-2">
          {label} {required && <span className="text-primary">*</span>}
        </label>
      )}

      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white flex justify-between items-center hover:border-primary/50 transition"
      >
        {formatDisplayTime(value)}
        <ChevronDown className={`transition ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            className="
              absolute z-50 mt-2
              w-full sm:w-[350px]
              bg-[#00040F]
              border border-white/10
              rounded-xl
              p-5
              shadow-2xl
            "
          >
            <h3 className="text-white text-base font-semibold mb-4">
              Select Time
            </h3>

            {/* Time selectors */}
            <div className="flex flex-col gap-4 mb-5">
              {/* Start Time Dropdown */}
              <div className="relative">
                <p className="text-sm text-white/60 mb-2">Start Time</p>
                <button
                  type="button"
                  onClick={() => {
                    setTimeDropdownOpen(!timeDropdownOpen);
                    setPeriodDropdownOpen(false);
                  }}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white flex justify-between items-center hover:border-primary/50 transition"
                >
                  <span>{startTime}</span>
                  <ChevronDown className={`w-5 h-5 transition ${timeDropdownOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {timeDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute z-50 w-full mt-2 py-2 bg-[#00040F] border border-white/10 rounded-xl shadow-2xl backdrop-blur-xl max-h-60 overflow-y-auto custom-scrollbar"
                    >
                      {TIME_OPTIONS.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => {
                            setStartTime(t);
                            setTimeDropdownOpen(false);
                          }}
                          className={`w-full px-4 py-3 text-left flex items-center justify-between transition-all duration-200 ${
                            startTime === t
                              ? 'bg-primary/20 text-white'
                              : 'text-white/70 hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          <span>{t}</span>
                          {startTime === t && (
                            <Check size={16} className="text-primary" />
                          )}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* AM/PM Dropdown */}
              <div className="relative">
                <p className="text-sm text-white/60 mb-2">AM / PM</p>
                <button
                  type="button"
                  onClick={() => {
                    setPeriodDropdownOpen(!periodDropdownOpen);
                    setTimeDropdownOpen(false);
                  }}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white flex justify-between items-center hover:border-primary/50 transition"
                >
                  <span>{period}</span>
                  <ChevronDown className={`w-5 h-5 transition ${periodDropdownOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {periodDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute z-50 w-full mt-2 py-2 bg-[#00040F] border border-white/10 rounded-xl shadow-2xl backdrop-blur-xl"
                    >
                      {(["AM", "PM"] as const).map((p) => (
                        <button
                          key={p}
                          type="button"
                          onClick={() => {
                            setPeriod(p);
                            setPeriodDropdownOpen(false);
                          }}
                          className={`w-full px-4 py-3 text-left flex items-center justify-between transition-all duration-200 ${
                            period === p
                              ? 'bg-primary/20 text-white'
                              : 'text-white/70 hover:bg-white/5 hover:text-white'
                          }`}
                        >
                          <span>{p}</span>
                          {period === p && (
                            <Check size={16} className="text-primary" />
                          )}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Duration */}
            <div className="mb-5">
              <p className="text-sm text-white/60 mb-2">Duration</p>
              <div className="grid grid-cols-3 gap-3">
                {DURATIONS.map(d => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDuration(d)}
                    className={`rounded-xl py-3 border transition ${
                      duration === d
                        ? "bg-primary/20 border-primary text-primary"
                        : "bg-white/5 border-white/10 text-white hover:border-primary/40"
                    }`}
                  >
                    <div className="text-lg font-semibold">{d}</div>
                    <div className="text-xs opacity-70">min</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Confirm */}
            <button
              type="button"
              onClick={handleConfirm}
              className="w-full py-3 rounded-xl bg-primary text-white cursor-pointer border font-bold hover:opacity-90 transition text-base"
            >
              Confirm
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(51, 187, 207, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(51, 187, 207, 0.7);
        }
      `}</style>
    </div>
  );
}
