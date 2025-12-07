'use client';

import { DayContent } from '@/types/curriculum';
import { useProgress } from '@/hooks/useProgress';
import ShortcutDisplay from './ShortcutDisplay';

interface DayCardProps {
  day: DayContent;
  week: number;
}

export default function DayCard({ day, week }: DayCardProps) {
  const { getDayProgress, toggleDayComplete } = useProgress();
  const dayProgress = getDayProgress(week, day.day);
  const isCompleted = dayProgress?.completed || false;

  return (
    <div className={`bg-gray-900/50 rounded-xl p-5 border transition-all ${
      isCompleted 
        ? 'border-green-500/50 bg-green-500/5' 
        : 'border-gray-700/50 hover:border-gray-600'
    }`}>
      {/* Header với checkbox */}
      <div className="flex items-center gap-3 mb-4">
        <button
          onClick={() => toggleDayComplete(week, day.day)}
          className={`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${
            isCompleted
              ? 'bg-green-500 border-green-500'
              : 'border-gray-500 hover:border-green-500'
          }`}
        >
          {isCompleted && <span className="text-white text-sm">✓</span>}
        </button>
        <span className={`px-4 py-1 rounded-full font-semibold ${
          isCompleted
            ? 'bg-green-500/20 text-green-400'
            : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
        }`}>
          Ngày {day.day}
        </span>
        <h3 className="text-xl font-bold text-white flex-1">{day.title}</h3>
        {day.totalHours && (
          <span className="text-sm text-gray-400 bg-gray-800 px-3 py-1 rounded">
            {day.totalHours}h
          </span>
        )}
      </div>

      {/* Daily Goals */}
      {day.dailyGoals && day.dailyGoals.length > 0 && (
        <div className="mb-4 bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
          <h4 className="text-sm font-semibold text-blue-400 mb-2">🎯 Mục tiêu ngày:</h4>
          <ul className="space-y-2">
            {day.dailyGoals.map((goal, idx) => (
              <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">•</span>
                <span>{goal}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Morning */}
      {day.morning && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-blue-400 mb-2">
            {day.morning.title || 'Sáng'}
          </h4>
          <div className="bg-gray-800/50 rounded-lg p-3 space-y-4">
            {/* Detailed Setup */}
            {day.morning.detailedSetup && day.morning.detailedSetup.length > 0 && (
              <div>
                <h5 className="text-xs font-semibold text-cyan-400 mb-2">📋 Setup Chi Tiết:</h5>
                <ol className="list-decimal list-inside space-y-1 text-gray-300 text-sm">
                  {day.morning.detailedSetup.map((step: string, idx: number) => (
                    <li key={idx}>{step}</li>
                  ))}
                </ol>
              </div>
            )}

            {/* Concepts */}
            {day.morning.concepts && day.morning.concepts.length > 0 && (
              <div>
                <h5 className="text-xs font-semibold text-purple-400 mb-2">💡 Concepts Cần Hiểu:</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                  {day.morning.concepts.map((concept: string, idx: number) => (
                    <li key={idx}>{concept}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Content */}
            {day.morning.content && day.morning.content.length > 0 && (
              <div>
                <h5 className="text-xs font-semibold text-blue-300 mb-2">📝 Nội Dung:</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                  {day.morning.content.map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Config Files */}
            {day.morning.configFiles && day.morning.configFiles.length > 0 && (
              <div>
                <h5 className="text-xs font-semibold text-yellow-400 mb-2">⚙️ Config Files:</h5>
                {day.morning.configFiles.map((config: any, idx: number) => (
                  <div key={idx} className="mb-3 last:mb-0">
                    <div className="text-xs text-gray-400 mb-1">
                      <span className="font-mono text-yellow-400">{config.name}</span>
                      <span className="ml-2">{config.description}</span>
                    </div>
                    <pre className="bg-black rounded p-2 text-xs text-green-400 overflow-x-auto">
                      <code>{config.content}</code>
                    </pre>
                  </div>
                ))}
              </div>
            )}

            {/* Code Blocks */}
            {day.morning.codeBlocks && day.morning.codeBlocks.map((code: string, idx: number) => (
              <div key={idx}>
                <h5 className="text-xs font-semibold text-green-400 mb-2">💻 Commands:</h5>
                <pre className="bg-black rounded p-3 text-xs text-green-400 overflow-x-auto">
                  <code>{code}</code>
                </pre>
              </div>
            ))}

            {/* Troubleshooting */}
            {day.morning.troubleshooting && day.morning.troubleshooting.length > 0 && (
              <div>
                <h5 className="text-xs font-semibold text-red-400 mb-2">🔧 Troubleshooting:</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                  {day.morning.troubleshooting.map((issue: string, idx: number) => (
                    <li key={idx}>{issue}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Afternoon */}
      {day.afternoon && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-orange-400 mb-2">
            {day.afternoon.title || 'Chiều'}
          </h4>
          <div className="bg-gray-800/50 rounded-lg p-3">
            {day.afternoon.exercises && day.afternoon.exercises.map((exercise: any, idx: number) => (
              <div key={idx} className="mb-4 last:mb-0">
                <div className="flex items-center gap-2 mb-2">
                  <h5 className="font-semibold text-white">{exercise.title}</h5>
                  {exercise.duration && (
                    <span className="text-xs text-gray-400 bg-gray-700 px-2 py-0.5 rounded">
                      {exercise.duration}
                    </span>
                  )}
                </div>
                <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm ml-2">
                  {exercise.tasks.map((task: string, taskIdx: number) => (
                    <li key={taskIdx}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Evening */}
      {day.evening && (
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-purple-400 mb-2">
            {day.evening.title || 'Tối'}
          </h4>
          <div className="bg-gray-800/50 rounded-lg p-3">
            {day.evening.content && day.evening.content.length > 0 && (
              <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm mb-2">
                {day.evening.content.map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
            {day.evening.exercises && day.evening.exercises.map((exercise: any, idx: number) => (
              <div key={idx} className="mb-3 last:mb-0">
                <h5 className="font-semibold text-white mb-2">{exercise.title}</h5>
                <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                  {exercise.tasks.map((task: string, taskIdx: number) => (
                    <li key={taskIdx}>{task}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Shortcuts */}
      {day.shortcuts && day.shortcuts.length > 0 && (
        <div className="mt-4">
          <ShortcutDisplay shortcuts={day.shortcuts} />
        </div>
      )}

      {/* Goals */}
      {day.goals && day.goals.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-semibold text-green-400 mb-2">Mục tiêu:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
            {day.goals.map((goal: string, idx: number) => (
              <li key={idx}>{goal}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Best Practices */}
      {day.bestPractices && day.bestPractices.length > 0 && (
        <div className="mt-4 bg-green-500/10 border border-green-500/30 rounded-lg p-3">
          <h4 className="text-sm font-semibold text-green-400 mb-2">✨ Best Practices:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
            {day.bestPractices.map((practice: string, idx: number) => (
              <li key={idx}>{practice}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Common Mistakes */}
      {day.commonMistakes && day.commonMistakes.length > 0 && (
        <div className="mt-4 bg-red-500/10 border border-red-500/30 rounded-lg p-3">
          <h4 className="text-sm font-semibold text-red-400 mb-2">⚠️ Common Mistakes:</h4>
          <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
            {day.commonMistakes.map((mistake: string, idx: number) => (
              <li key={idx}>{mistake}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Learning Resources */}
      {day.learningResources && day.learningResources.length > 0 && (
        <div className="mt-4 bg-blue-500/10 border border-blue-500/30 rounded-lg p-3">
          <h4 className="text-sm font-semibold text-blue-400 mb-2">📚 Learning Resources:</h4>
          <ul className="space-y-2">
            {day.learningResources.map((resource: any, idx: number) => (
              <li key={idx} className="text-gray-300 text-sm">
                <span className="font-semibold">{resource.title}</span>
                {resource.url && (
                  <a href={resource.url} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline ml-2">
                    (Link)
                  </a>
                )}
                {resource.description && (
                  <div className="text-gray-400 text-xs mt-1">{resource.description}</div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

