"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, ChevronDown, Zap } from "lucide-react";

interface ClockPickerProps {
  id?: string;
  name: string;
  value: string;
  onChange: (e: { target: { name: string; value: string } }) => void;
  label?: string;
  required?: boolean;
}

// Generate time slots
const generateTimeSlots = () => {
  const slots = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const hourStr = hour.toString().padStart(2, '0');
      const minuteStr = minute.toString().padStart(2, '0');
      const nextMinute = minute + 30;
      const nextHour = nextMinute >= 60 ? hour + 1 : hour;
      const nextMinuteStr = (nextMinute % 60).toString().padStart(2, '0');
      const nextHourStr = nextHour.toString().padStart(2, '0');
      
      const value = `${hourStr}:${minuteStr}-${nextHourStr}:${nextMinuteStr}`;
      
      slots.push({ 
        value, 
        hour, 
        minute
      });
    }
  }
  return slots;
};

const TIME_SLOTS = generateTimeSlots();

// Get next available slot (current time + 1 hour, rounded to next 30 min)
const getNextAvailableSlot = () => {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  
  // Add 1 hour buffer
  let nextHour = currentHour + 1;
  let nextMinute = currentMinute >= 30 ? 0 : 30;
  
  if (currentMinute >= 30) {
    nextHour += 1;
  }
  
  // Handle day overflow
  if (nextHour >= 24) {
    nextHour = 0;
  }
  
  const slot = TIME_SLOTS.find(s => s.hour === nextHour && s.minute === nextMinute);
  return slot?.value || TIME_SLOTS[0].value;
};

export default function ClockPicker({
  id,
  name,
  value,
  onChange,
  label,
  required = false,
}: ClockPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedHour, setSelectedHour] = useState(7);
  const [selectedMinute, setSelectedMinute] = useState(0);
  const [selectedPeriod, setSelectedPeriod] = useState<"AM" | "PM">("AM");
  const [mode, setMode] = useState<"manual" | "quick">("manual");
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Initialize from value
  useEffect(() => {
    if (value) {
      const [start] = value.split('-');
      const [hourStr, minuteStr] = start.split(':');
      const hour = parseInt(hourStr);
      const minute = parseInt(minuteStr);
      
      if (hour >= 12) {
        setSelectedPeriod("PM");
        setSelectedHour(hour === 12 ? 12 : hour - 12);
      } else {
        setSelectedPeriod("AM");
        setSelectedHour(hour === 0 ? 12 : hour);
      }
      setSelectedMinute(minute);
    }
  }, [value]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Get display label for selected value
  const getDisplayValue = () => {
    if (!value) return "Select consultation time";
    const [start] = value.split('-');
    const [hourStr, minuteStr] = start.split(':');
    const hour = parseInt(hourStr);
    const minute = parseInt(minuteStr);
    
    const displayHour = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
    const period = hour < 12 ? 'AM' : 'PM';
    
    return `${displayHour}:${minuteStr} ${period}`;
  };

  const handleQuickBook = () => {
    const nextSlot = getNextAvailableSlot();
    onChange({
      target: {
        name,
        value: nextSlot,
      },
    });
    setIsOpen(false);
  };

  const handleApply = () => {
    // Convert 12-hour to 24-hour
    let hour24 = selectedHour;
    if (selectedPeriod === "PM" && selectedHour !== 12) {
      hour24 = selectedHour + 12;
    } else if (selectedPeriod === "AM" && selectedHour === 12) {
      hour24 = 0;
    }
    
    const hourStr = hour24.toString().padStart(2, '0');
    const minuteStr = selectedMinute.toString().padStart(2, '0');
    
    const nextMinute = selectedMinute + 30;
    const nextHour = nextMinute >= 60 ? hour24 + 1 : hour24;
    const nextMinuteStr = (nextMinute % 60).toString().padStart(2, '0');
    const nextHourStr = nextHour.toString().padStart(2, '0');
    
    const timeValue = `${hourStr}:${minuteStr}-${nextHourStr}:${nextMinuteStr}`;
    
    onChange({
      target: {
        name,
        value: timeValue,
      },
    });
    setIsOpen(false);
  };

  // Calculate clock hand position
  const getClockHandRotation = () => {
    const hourAngle = (selectedHour % 12) * 30 + (selectedMinute / 60) * 30;
    return hourAngle;
  };

  const handleClockClick = (hour: number) => {
    setSelectedHour(hour);
  };

  return (
    <div className="w-full" ref={dropdownRef}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-200 mb-2">
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}

      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-left text-gray-200 hover:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all duration-200 flex items-center justify-between group"
      >
        <span className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-primary-400" />
          <span className={value ? "text-gray-200" : "text-gray-500"}>
            {getDisplayValue()}
          </span>
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Clock Picker Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-xl overflow-hidden"
            style={{ width: "min(400px, 90vw)" }}
          >
            {/* Mode Toggle */}
            <div className="flex border-b border-gray-700">
              <button
                type="button"
                onClick={() => setMode("manual")}
                className={`flex-1 py-3 px-4 text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                  mode === "manual"
                    ? "bg-primary-500 text-white"
                    : "bg-gray-800/50 text-gray-400 hover:text-gray-200 hover:bg-gray-700/50"
                }`}
              >
                <Clock className="w-4 h-4" />
                Select Time
              </button>
              <button
                type="button"
                onClick={() => setMode("quick")}
                className={`flex-1 py-3 px-4 text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 ${
                  mode === "quick"
                    ? "bg-primary-500 text-white"
                    : "bg-gray-800/50 text-gray-400 hover:text-gray-200 hover:bg-gray-700/50"
                }`}
              >
                <Zap className="w-4 h-4" />
                Quick Book
              </button>
            </div>

            {/* Content */}
            {mode === "manual" ? (
              <div className="p-6">
                {/* Time Display */}
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedHour(h => h === 12 ? 1 : h + 1)}
                      className="w-20 h-24 bg-primary-500/20 hover:bg-primary-500/30 border-2 border-primary-500 rounded-lg flex items-center justify-center text-4xl font-bold text-primary-400 transition-all"
                    >
                      {selectedHour.toString().padStart(2, '0')}
                    </button>
                    <span className="text-3xl font-bold text-gray-400">:</span>
                    <button
                      type="button"
                      onClick={() => setSelectedMinute(m => m === 30 ? 0 : 30)}
                      className="w-20 h-24 bg-gray-700/50 hover:bg-gray-700 border-2 border-gray-600 rounded-lg flex items-center justify-center text-4xl font-bold text-gray-300 transition-all"
                    >
                      {selectedMinute.toString().padStart(2, '0')}
                    </button>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedPeriod("AM")}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedPeriod === "AM"
                          ? "bg-primary-500 text-white"
                          : "bg-gray-700/50 text-gray-400 hover:bg-gray-700"
                      }`}
                    >
                      AM
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedPeriod("PM")}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        selectedPeriod === "PM"
                          ? "bg-primary-500 text-white"
                          : "bg-gray-700/50 text-gray-400 hover:bg-gray-700"
                      }`}
                    >
                      PM
                    </button>
                  </div>
                </div>

                {/* Analog Clock */}
                <div className="relative w-64 h-64 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full bg-gray-700/30 border-4 border-gray-600"></div>
                  
                  {/* Clock Numbers */}
                  {[12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((hour, index) => {
                    const angle = (index * 30 - 90) * (Math.PI / 180);
                    const x = 50 + 38 * Math.cos(angle);
                    const y = 50 + 38 * Math.sin(angle);
                    const isSelected = selectedHour === hour;
                    
                    return (
                      <button
                        key={hour}
                        type="button"
                        onClick={() => handleClockClick(hour)}
                        className={`absolute w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all transform -translate-x-1/2 -translate-y-1/2 ${
                          isSelected
                            ? "bg-primary-500 text-white scale-110 shadow-lg"
                            : "text-gray-300 hover:bg-gray-600/50 hover:scale-105"
                        }`}
                        style={{ left: `${x}%`, top: `${y}%` }}
                      >
                        {hour}
                      </button>
                    );
                  })}

                  {/* Center Dot */}
                  <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-primary-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10 shadow-lg"></div>

                  {/* Clock Hand */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 w-1 bg-primary-500 origin-bottom rounded-full shadow-lg"
                    style={{
                      height: "35%",
                      transformOrigin: "bottom center",
                    }}
                    animate={{
                      rotate: getClockHandRotation(),
                      y: "-100%",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                </div>

                {/* Apply Button */}
                <button
                  type="button"
                  onClick={handleApply}
                  className="w-full py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-primary-500/30"
                >
                  Apply Time
                </button>
              </div>
            ) : (
              <div className="p-6">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500/20 rounded-full mb-4">
                    <Zap className="w-8 h-8 text-primary-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-200 mb-2">
                    Next Available Slot
                  </h3>
                  <p className="text-sm text-gray-400">
                    Book the earliest available consultation slot
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleQuickBook}
                  className="w-full py-4 bg-linear-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-lg font-medium transition-all duration-200 shadow-lg hover:shadow-primary-500/30 flex items-center justify-center gap-2"
                >
                  <Zap className="w-5 h-5" />
                  Book Now
                </button>
              </div>
            )}

            {/* Footer Info */}
            <div className="px-4 py-3 bg-gray-900/50 border-t border-gray-700">
              <p className="text-xs text-gray-400 text-center">
                30-minute consultation slots • Available 24/7
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
