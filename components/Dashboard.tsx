'use client';

import { curriculum } from '@/data/curriculum';
import { useProgress } from '@/hooks/useProgress';
import { Week } from '@/types/curriculum';
import { useState } from 'react';
import Checklist from './Checklist';
import DayCard from './DayCard';
import ProgressTracker from './ProgressTracker';
import ProTips from './ProTips';
import WeekCard from './WeekCard';

interface DashboardProps {
  weeks: Week[];
}

export default function Dashboard({ weeks }: DashboardProps) {
  const [selectedWeek, setSelectedWeek] = useState<number | null>(null);
  const { getWeekProgress } = useProgress();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            🎯 Coding Không Chuột
          </h1>
          <p className="text-gray-400 text-lg">
            Lộ trình học coding hoàn toàn bằng bàn phím trong 4 tuần
          </p>
        </div>

        {/* Progress Overview */}
        <ProgressTracker weeks={weeks} />

        {/* Weeks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {weeks.map((week) => (
            <WeekCard
              key={week.week}
              week={week}
              isSelected={selectedWeek === week.week}
              onClick={() => setSelectedWeek(selectedWeek === week.week ? null : week.week)}
            />
          ))}
        </div>

        {/* Selected Week Details */}
        {selectedWeek !== null && (
          <div className="mt-8 animate-fade-in">
            <WeekDetails week={weeks[selectedWeek - 1]} />
          </div>
        )}

        {/* Final Checklist */}
        <div className="mt-8">
          <Checklist items={curriculum.finalChecklist} title="🎯 Final Checklist" />
        </div>

        {/* Pro Tips */}
        <div className="mt-8">
          <ProTips />
        </div>
      </div>
    </div>
  );
}

function WeekDetails({ week }: { week: Week }) {
  const { getWeekProgress } = useProgress();
  
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-2 text-white">
          Tuần {week.week}: {week.title}
        </h2>
        {week.goals && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2 text-gray-300">Mục tiêu:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-400">
              {week.goals.map((goal, idx) => (
                <li key={idx}>{goal}</li>
              ))}
            </ul>
          </div>
        )}
        {week.metrics && (
          <div className="mt-4 grid grid-cols-3 gap-4">
            <div className="bg-gray-700/50 rounded-lg p-3">
              <div className="text-sm text-gray-400">Mouse Usage</div>
              <div className="text-xl font-bold text-red-400">{week.metrics.mouseUsage}</div>
            </div>
            <div className="bg-gray-700/50 rounded-lg p-3">
              <div className="text-sm text-gray-400">Shortcuts</div>
              <div className="text-xl font-bold text-blue-400">{week.metrics.shortcutsLearned}+</div>
            </div>
            <div className="bg-gray-700/50 rounded-lg p-3">
              <div className="text-sm text-gray-400">Comfort</div>
              <div className="text-xl font-bold text-green-400">{week.metrics.comfortLevel}</div>
            </div>
          </div>
        )}
      </div>

      {/* Week Progress */}
      {week.metrics && (
        <div className="mb-6">
          {(() => {
            const weekProgress = getWeekProgress(week.week, week.days.length);
            return (
              <div className="bg-gray-700/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-300">Tiến độ tuần {week.week}</span>
                  <span className="text-sm font-semibold text-white">
                    {weekProgress.completedDays}/{weekProgress.totalDays} ngày
                  </span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${weekProgress.progress}%` }}
                  />
                </div>
              </div>
            );
          })()}
        </div>
      )}

      <div className="space-y-6">
        {week.days.map((day, idx) => (
          <DayCard key={idx} day={day} week={week.week} />
        ))}
      </div>
    </div>
  );
}


