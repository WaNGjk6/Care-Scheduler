// src/utils/schedule.js
export function getDailySchedule(startDateTime, shiftH, restH, targetDate) {
  const msPerHour = 3600 * 1000;
  const period = (shiftH + restH) * msPerHour;
  const shiftLen = shiftH * msPerHour;

  const dayStart = new Date(targetDate);
  dayStart.setHours(0, 0, 0, 0);
  const dayEnd = new Date(dayStart.getTime() + 24 * msPerHour);

  let current = new Date(startDateTime);
  while (current > dayStart) {
    current = new Date(current.getTime() - period);
  }

  const slots = [];
  while (current < dayEnd) {
    const end = new Date(current.getTime() + shiftLen);
    if (end > dayStart && current < dayEnd) {
      const sliceStart = new Date(Math.max(current, dayStart));
      const sliceEnd = new Date(Math.min(end, dayEnd));
      const fmt = dt => dt.toTimeString().slice(0,5);
      slots.push(fmt(sliceStart) + '~' + fmt(sliceEnd));
    }
    current = new Date(current.getTime() + period);
  }

  const key = `${dayStart.getMonth()+1}-${dayStart.getDate()}`;
  return { [key]: slots };
}
