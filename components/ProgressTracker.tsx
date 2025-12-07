'use client';

import { Week } from '@/types/curriculum';

interface ProgressTrackerProps {
  weeks: Week[];
}

export default function ProgressTracker({ weeks }: ProgressTrackerProps) {
  // Calculate overall progress (simplified - you can enhance this with actual tracking)
  const totalDays = weeks.reduce((sum, week) => sum + week.days.length, 0);
  const totalShortcuts = weeks.reduce((sum, week) => sum + (week.metrics?.shortcutsLearned || 0), 0);

  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-gray-700">
      <h2 className="text-2xl font-bold mb-6 text-white">📊 Tổng quan tiến độ</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Days */}
        <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-5 border border-blue-500/30">
          <div className="text-3xl font-bold text-blue-400 mb-2">{totalDays}</div>
          <div className="text-gray-300 text-sm">Tổng số ngày học</div>
        </div>

        {/* Total Shortcuts */}
        <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-5 border border-purple-500/30">
          <div className="text-3xl font-bold text-purple-400 mb-2">{totalShortcuts}+</div>
          <div className="text-gray-300 text-sm">Phím tắt đã học</div>
        </div>

        {/* Weeks Progress */}
        <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-5 border border-green-500/30">
          <div className="text-3xl font-bold text-green-400 mb-2">{weeks.length}/4</div>
          <div className="text-gray-300 text-sm">Tuần hoàn thành</div>
        </div>
      </div>

      {/* Weekly Progress Bars */}
      <div className="mt-6 space-y-4">
        <h3 className="text-lg font-semibold text-gray-300 mb-3">Tiến độ từng tuần</h3>
        {weeks.map((week) => (
          <div key={week.week} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-300">Tuần {week.week}: {week.title}</span>
              <span className="text-gray-400">{week.metrics?.mouseUsage || 'N/A'}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
                style={{
                  width: `${((week.week / 4) * 100)}%`
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

