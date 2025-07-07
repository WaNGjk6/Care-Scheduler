import React, { useEffect } from 'react';
import { Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import DateCalculator from './pages/DateCalculator';
import Schedule        from './pages/Schedule';
import About           from './pages/About';
import NotFound        from './pages/NotFound';
import RedirectToStatic404 from './pages/RedirectToStatic404';

export default function App() {
  const location = useLocation();

  useEffect(() => {
    if (!localStorage.getItem('cs_user_id')) {
      localStorage.setItem('cs_user_id', uuidv4());
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">   q
      <nav className="p-4 bg-white shadow flex justify-center space-x-4">
        <Link
          to="/calculate"
          className={`px-4 py-2 rounded ${location.pathname === '/calculate' ? 'bg-blue-500 text-white' : ''}`}
        >
          日期计算
        </Link>
        <Link
          to="/schedule"
          className={`px-4 py-2 rounded ${location.pathname === '/schedule' ? 'bg-blue-500 text-white' : ''}`}
        >
          排班计划
        </Link>
        <Link
          to="/about"
          className={`px-4 py-2 rounded ${location.pathname === '/about' ? 'bg-blue-500 text-white' : ''}`}
        >
          关于
        </Link>
      </nav>

      <main className="flex-grow container mx-auto p-4">
        <Routes>
          {/* 根路径自动跳转到 /calculate */}
          <Route path="/" element={<Navigate replace to="/calculate" />} />

          {/* 业务路由 */}
          <Route path="/calculate" element={<DateCalculator />} />
          <Route path="/schedule"   element={<Schedule />} />
          <Route path="/about"      element={<About />} />

          {/* 通配符路由：404 页面 */}
          <Route path="*" element={<RedirectToStatic404 />} />
        </Routes>
      </main>
    </div>
  );
}
