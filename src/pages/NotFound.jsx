import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="mb-6 text-lg">抱歉，你要访问的页面不存在。</p>
      <Link to="/calculate" className="px-4 py-2 bg-blue-500 text-white rounded">
        返回首页
      </Link>
    </div>
  );
}
