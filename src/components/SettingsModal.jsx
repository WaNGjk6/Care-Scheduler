import { useState } from 'react';
import ConfirmDialog from './ConfirmDialog';
import { useNavigate } from 'react-router-dom';
import { getUserId } from '../utils/user';
import { getDailySchedule } from '../utils/schedule';

export default function SettingsModal({ startDate, start, end, onClose }) {
  const [days, setDays] = useState(7);
  const [confirm, setConfirm] = useState(false);
  const navigate = useNavigate();

  const handleCalculate = () => setConfirm(true);

  const onConfirm = () => {
    const uid = getUserId();
    let scheduleMap = {};
    const startDateTime = new Date(`${startDate}T${start}`);
    for (let d = 0; d < days; d++) {
      const day = new Date(startDateTime.getFullYear(), startDateTime.getMonth(), startDateTime.getDate() + d);
      Object.assign(scheduleMap, getDailySchedule(startDateTime, 2, 8, day));
    }
    localStorage.setItem(`schedule_${uid}`, JSON.stringify(scheduleMap));
    setConfirm(false);
    onClose();
    navigate('/schedule');
  };

  return <>
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-xl mb-4 text-center">选择计算天数</h2>
        <div className="flex justify-center mb-4">
          <input type="number" min={1} value={days} onChange={e => setDays(e.target.value)} className="p-2 border rounded w-24 text-center" /> 天
        </div>
        <div className="flex justify-end space-x-2">
          <button onClick={onClose} className="px-4 py-2">取消</button>
          <button onClick={handleCalculate} className="px-4 py-2 bg-green-500 text-white rounded">开始计算</button>
        </div>
      </div>
    </div>
    {confirm && <ConfirmDialog text="确定要计算吗？这将清除排班计划页面中的内容。" onConfirm={onConfirm} onCancel={() => setConfirm(false)} />}
  </>;
}
