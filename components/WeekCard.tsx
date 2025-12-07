'use client';

import { Week } from '@/types/curriculum';
import { useProgress } from '@/hooks/useProgress';

interface WeekCardProps {
  week: Week;
  isSelected: boolean;
  onClick: () => void;
}

export default function WeekCard({ week, isSelected, onClick }: WeekCardProps) {
  const { getWeekProgress } = useProgress();
  const weekProgress = getWeekProgress(week.week, week.days.length);
  
  const progressColors = [
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-pink-500',
    'from-orange-500 to-red-500',
    'from-green-500 to-emerald-500'
  ];

  const colorClass = progressColors[(week.week - 1) % progressColors.length];

  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden rounded-2xl p-6 text-left transition-all duration-300 cursor-pointer ${
        isSelected
          ? 'ring-2 ring-purple-500 scale-105 shadow-2xl'
          : 'hover:scale-[1.02] hover:shadow-xl'
      } bg-gradient-to-br ${colorClass} bg-opacity-10 border border-gray-700 hover:border-gray-600`}
    >
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-3">
          <span className="text-4xl font-bold text-white">Tuần {week.week}</span>
          {isSelected && (
            <span className="text-2xl">✓</span>
          )}
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{week.title}</h3>
        <p className="text-gray-300 text-sm mb-2">{week.days.length} ngày học</p>
        
        {/* Progress Bar */}
        <div className="w-full bg-gray-700/50 rounded-full h-1.5 mb-3">
          <div
            className="bg-gradient-to-r from-green-400 to-emerald-400 h-1.5 rounded-full transition-all duration-500"
            style={{ width: `${weekProgress.progress}%` }}
          />
        </div>
        <p className="text-xs text-gray-400">
          {weekProgress.completedDays}/{weekProgress.totalDays} ngày hoàn thành
        </p>
        
        {week.metrics && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-300">Mouse Usage</span>
              <span className="font-semibold text-red-300">{week.metrics.mouseUsage}</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-300">Shortcuts</span>
              <span className="font-semibold text-blue-300">{week.metrics.shortcutsLearned}+</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-300">Comfort</span>
              <span className="font-semibold text-green-300">{week.metrics.comfortLevel}</span>
            </div>
          </div>
        )}
      </div>
      
      {/* Decorative gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colorClass} opacity-5 pointer-events-none`} />
    </button>
  );
}

