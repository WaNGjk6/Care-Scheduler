import { useState } from 'react';
import SettingsModal from '../components/SettingsModal';

export default function DateCalculator() {
  const today = new Date().toISOString().slice(0, 10);
  const [startDate, setStartDate] = useState(today);
  const [startHour, setStartHour] = useState('12');
  const [endHour, setEndHour] = useState('14');
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">日期计算</h1>
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <div className="flex-1">
            <label className="block mb-1">起始日期</label>
            <input
              type="date"
              value={startDate}
              onChange={e => setStartDate(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="flex-1">
            <label className="block mb-1">开始时间（小时）</label>
            <select
              value={startHour}
              onChange={e => setStartHour(e.target.value)}
              className="w-full p-2 border rounded"
            >
              {Array.from({ length: 24 }, (_, i) => (
                <option key={i} value={i.toString().padStart(2, '0')}>
                  {i.toString().padStart(2, '0')}
                </option>
              ))}
            </select>
            <span className="block text-sm text-gray-500 mt-1"></span>
          </div>
          <div className="flex-1">
            <label className="block mb-1">结束时间（小时）</label>
            <select
              value={endHour}
              onChange={e => setEndHour(e.target.value)}
              className="w-full p-2 border rounded"
            >
              {Array.from({ length: 24 }, (_, i) => (
                <option key={i} value={i.toString().padStart(2, '0')}>
                  {i.toString().padStart(2, '0')}
                </option>
              ))}
            </select>
            <span className="block text-sm text-gray-500 mt-1"></span>
          </div>
        </div>
        <div className="text-center">
          <button onClick={() => setShowSettings(true)} className="px-6 py-2 bg-green-500 text-white rounded">设置计算天数</button>
        </div>
      </div>
      {showSettings && (
        <SettingsModal
          startDate={startDate}
          start={`${startHour}:00`}
          end={`${endHour}:00`}
          onClose={() => setShowSettings(false)}
        />
      )}
    </div>
  );
}
