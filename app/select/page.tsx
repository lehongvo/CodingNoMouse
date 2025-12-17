'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SelectPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check authentication
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/check');
        const data = await response.json();
        setIsAuthenticated(data.authenticated === true);
      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/login');
    }
  }, [loading, isAuthenticated, router]);

  const handleSelect = (path: string) => {
    router.push(path);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 p-4">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Chọn Lộ Trình Học Tập
          </h1>
          <p className="text-gray-400 text-lg">
            Chọn một trong hai lộ trình phù hợp với mục tiêu của bạn
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Coding No Mouse Option */}
          <button
            onClick={() => handleSelect('/')}
            className="group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-2 border-blue-500/30 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative z-10">
              <div className="text-6xl mb-4">⌨️</div>
              <h2 className="text-2xl font-bold text-white mb-3">
                Coding No Mouse
              </h2>
              <p className="text-gray-300 mb-4">
                Lộ trình học coding hoàn toàn bằng bàn phím trong 8 tuần. 
                Master keyboard-only workflow và tăng năng suất làm việc.
              </p>
              <div className="flex items-center text-blue-400 font-semibold group-hover:text-blue-300 transition-colors">
                <span>Bắt đầu học</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </button>

          {/* Manual Tester Option */}
          <button
            onClick={() => handleSelect('/tester')}
            className="group relative overflow-hidden rounded-2xl p-8 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="relative z-10">
              <div className="text-6xl mb-4">🧪</div>
              <h2 className="text-2xl font-bold text-white mb-3">
                Manual Tester
              </h2>
              <p className="text-gray-300 mb-4">
                Lộ trình học Manual Testing từ cơ bản đến nâng cao. 
                Xây dựng kỹ năng kiểm thử phần mềm chuyên nghiệp.
              </p>
              <div className="flex items-center text-purple-400 font-semibold group-hover:text-purple-300 transition-colors">
                <span>Bắt đầu học</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </button>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={async () => {
              await fetch('/api/auth/logout', { method: 'POST' });
              router.push('/login');
            }}
            className="text-gray-400 hover:text-gray-300 text-sm underline"
          >
            Đăng xuất
          </button>
        </div>
      </div>
    </div>
  );
}


