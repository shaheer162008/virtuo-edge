"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

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

  useEffect(() => {
    if (!value) return;
    const [start, end] = value.split("-");
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
    <div className="relative w-full">
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
        {value || "Select time"}
        <ChevronDown className={`transition ${open ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            className="
              absolute z-50 mt-4
              left-1/2 -translate-x-1/2
              w-[720px] max-w-[95vw]
              bg-[#0b0b0b]
              border border-white/10
              rounded-3xl
              p-8
              shadow-2xl
            "
          >
            <h3 className="text-white text-xl font-semibold mb-6">
              Book Your Consultation
            </h3>

            {/* Time selectors */}
            <div className="grid md:grid-cols-2 gap-5 mb-6">
              <div>
                <p className="text-sm text-white/60 mb-2">Start Time</p>
                <select
                  value={startTime}
                  onChange={e => setStartTime(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white"
                >
                  {TIME_OPTIONS.map(t => (
                    <option key={t} value={t} className="text-black">
                      {t}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <p className="text-sm text-white/60 mb-2">AM / PM</p>
                <select
                  value={period}
                  onChange={e => setPeriod(e.target.value as "AM" | "PM")}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white"
                >
                  <option value="AM" className="text-black">AM</option>
                  <option value="PM" className="text-black">PM</option>
                </select>
              </div>
            </div>

            {/* Duration */}
            <div className="mb-6">
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
              className="w-full py-4 rounded-xl bg-primary text-white cursor-pointer border font-bold hover:opacity-90 transition text-lg"
            >
              Confirm Booking
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
