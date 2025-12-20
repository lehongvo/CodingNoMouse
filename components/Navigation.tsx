'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/check');
        const data = await response.json();
        setIsAuthenticated(data.authenticated === true);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, []);

  if (!isAuthenticated || pathname === '/login' || pathname === '/select') {
    return null;
  }

  const handleLogout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/login');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a
              href="/"
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                pathname === '/'
                  ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              ⌨️ Coding No Mouse
            </a>
            <a
              href="/tester"
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                pathname === '/tester'
                  ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                  : 'text-gray-400 hover:text-white hover:bg-gray-800'
              }`}
            >
              🧪 Manual Tester
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="/select"
              className="text-gray-400 hover:text-white text-sm"
            >
              Chọn lộ trình
            </a>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
            >
              Đăng xuất
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}









