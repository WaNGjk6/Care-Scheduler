import { useEffect, useState } from 'react';
import { getUserId } from '../utils/user';

export default function Schedule() {
  const [scheduleMap, setScheduleMap] = useState({});

  useEffect(() => {
    const uid = getUserId();
    const data = JSON.parse(localStorage.getItem(`schedule_${uid}`) || '{}');
    setScheduleMap(data);
  }, []);

  const fmt = dt => dt.toLocaleTimeString('zh-CN', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  });

  return (
    <div className="overflow-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">排班计划</h1>
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-3 text-left">日期</th>
            <th className="p-3 text-left">执勤时间段</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(scheduleMap).map(([date, slots]) => (
            <tr key={date} className="bg-white even:bg-gray-50">
              <td className="p-3">{date.replace('-', '月') + '日'}</td>
              <td className="p-3">
                {slots.map(slot => {
                  const [s, e] = slot.split('~');
                  const sd = new Date(`${date.split('-')[0]}/${date.split('-')[1]}/${new Date().getFullYear()} ${s}`);
                  const ed = new Date(`${date.split('-')[0]}/${date.split('-')[1]}/${new Date().getFullYear()} ${e}`);
                  return fmt(sd) + '~' + fmt(ed);
                }).join(' 、 ')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
