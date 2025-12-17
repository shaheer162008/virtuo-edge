export const TIMEZONES = [
  // Popular Timezones - Simplified for Easy Selection
  { value: "Asia/Karachi", label: "🇵🇰 Pakistan (UTC+5)", offset: 5 },
  { value: "Asia/Dubai", label: "🇦🇪 UAE - Dubai (UTC+4)", offset: 4 },
  { value: "Asia/Riyadh", label: "🇸🇦 Saudi Arabia (UTC+3)", offset: 3 },
  { value: "Europe/London", label: "🇬🇧 UK - London (UTC+0)", offset: 0 },
  { value: "America/New_York", label: "🇺🇸 USA - New York (UTC-5)", offset: -5 },
  { value: "America/Los_Angeles", label: "🇺🇸 USA - Los Angeles (UTC-8)", offset: -8 },
  { value: "America/Chicago", label: "🇺🇸 USA - Chicago (UTC-6)", offset: -6 },
  { value: "Asia/Kolkata", label: "🇮🇳 India (UTC+5:30)", offset: 5.5 },
  { value: "Asia/Shanghai", label: "🇨🇳 China (UTC+8)", offset: 8 },
  { value: "Asia/Tokyo", label: "🇯🇵 Japan (UTC+9)", offset: 9 },
  { value: "Australia/Sydney", label: "🇦🇺 Australia - Sydney (UTC+11)", offset: 11 },
  { value: "Europe/Paris", label: "🇫🇷 France - Paris (UTC+1)", offset: 1 },
  { value: "Europe/Berlin", label: "🇩🇪 Germany - Berlin (UTC+1)", offset: 1 },
  { value: "Asia/Singapore", label: "🇸🇬 Singapore (UTC+8)", offset: 8 },
  { value: "Asia/Bangkok", label: "🇹🇭 Thailand - Bangkok (UTC+7)", offset: 7 },
  { value: "Europe/Istanbul", label: "🇹🇷 Turkey - Istanbul (UTC+3)", offset: 3 },
  { value: "America/Toronto", label: "🇨🇦 Canada - Toronto (UTC-5)", offset: -5 },
  { value: "Asia/Hong_Kong", label: "🇭🇰 Hong Kong (UTC+8)", offset: 8 },
  { value: "Europe/Moscow", label: "🇷🇺 Russia - Moscow (UTC+3)", offset: 3 },
  { value: "Africa/Cairo", label: "🇪🇬 Egypt - Cairo (UTC+2)", offset: 2 },
];

export function getTimezoneOffset(timezone: string): string {
  // First check predefined list
  const tz = TIMEZONES.find(t => t.value === timezone);
  if (tz) {
    const offset = tz.offset;
    const hours = Math.floor(Math.abs(offset));
    const minutes = Math.abs((offset % 1) * 60);
    const sign = offset >= 0 ? '+' : '-';
    return `UTC${sign}${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  }
  
  // Dynamically calculate offset for any timezone using browser APIs
  try {
    const now = new Date();
    // Get UTC time
    const utcDate = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' }));
    // Get time in target timezone
    const tzDate = new Date(now.toLocaleString('en-US', { timeZone: timezone }));
    // Calculate difference in minutes
    const diffMinutes = (tzDate.getTime() - utcDate.getTime()) / (1000 * 60);
    
    const hours = Math.floor(Math.abs(diffMinutes) / 60);
    const minutes = Math.abs(diffMinutes) % 60;
    const sign = diffMinutes >= 0 ? '+' : '-';
    
    return `UTC${sign}${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  } catch {
    // Fallback: calculate from local timezone offset
    const offsetMinutes = -new Date().getTimezoneOffset();
    const hours = Math.floor(Math.abs(offsetMinutes) / 60);
    const minutes = Math.abs(offsetMinutes) % 60;
    const sign = offsetMinutes >= 0 ? '+' : '-';
    return `UTC${sign}${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  }
}
