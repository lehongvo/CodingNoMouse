'use client';

import { useProgress } from '@/hooks/useProgress';
import { DayContent } from '@/types/curriculum';
import ShortcutDisplay from './ShortcutDisplay';
import ConceptDisplay from './ConceptDisplay';
import { useState } from 'react';

interface DayCardProps {
  day: DayContent;
  week: number;
}

interface CollapsibleSectionProps {
  title: string;
  icon: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  colorClass?: string;
}

function CollapsibleSection({ title, icon, children, defaultOpen = false, colorClass = 'text-blue-400' }: CollapsibleSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-3 rounded-lg transition-all ${
          isOpen 
            ? 'bg-gray-800/70 border border-gray-700' 
            : 'bg-gray-800/40 border border-gray-700/50 hover:bg-gray-800/60'
        }`}
      >
        <div className="flex items-center gap-3">
          <span className={`text-xl ${colorClass}`}>{icon}</span>
          <span className={`font-semibold ${isOpen ? 'text-white' : 'text-gray-300'}`}>
            {title}
          </span>
        </div>
        <span className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="mt-2 pl-4 border-l-2 border-gray-700">
          {children}
        </div>
      )}
    </div>
  );
}

export default function DayCard({ day, week }: DayCardProps) {
  const { getDayProgress, toggleDayComplete } = useProgress();
  const dayProgress = getDayProgress(week, day.day);
  const isCompleted = dayProgress?.completed || false;

  return (
    <div className={`bg-gray-900/60 backdrop-blur-sm rounded-2xl border-2 transition-all duration-300 ${
      isCompleted 
        ? 'border-green-500/40 bg-green-500/5 shadow-lg shadow-green-500/10' 
        : 'border-gray-700/50 hover:border-gray-600/70 hover:shadow-xl'
    }`}>
      {/* Header Section - Clean and Prominent */}
      <div className="p-6 border-b border-gray-700/50">
        <div className="flex items-start gap-4 mb-4">
          <button
            onClick={() => toggleDayComplete(week, day.day)}
            className={`flex-shrink-0 w-7 h-7 rounded-lg border-2 flex items-center justify-center transition-all shadow-md ${
              isCompleted
                ? 'bg-green-500 border-green-500 shadow-green-500/30'
                : 'border-gray-500 hover:border-green-500 hover:bg-green-500/10'
            }`}
          >
            {isCompleted && <span className="text-white text-base font-bold">✓</span>}
          </button>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <span className={`px-3 py-1 rounded-lg font-bold text-sm ${
                isCompleted
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                  : 'bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30'
              }`}>
                {day.day}
              </span>
              {day.totalHours && (
                <span className="text-xs text-gray-400 bg-gray-800/70 px-2.5 py-1 rounded-md border border-gray-700/50">
                  ⏱️ {day.totalHours}h
                </span>
              )}
            </div>
            <h3 className={`text-2xl font-bold mb-1 ${
              isCompleted ? 'text-green-300' : 'text-white'
            }`}>
              {day.title}
            </h3>
          </div>
        </div>

        {/* Motivational Quote - Prominent but not overwhelming */}
        {day.motivationalQuote && (
          <div className="mt-4 bg-gradient-to-r from-purple-500/15 via-pink-500/15 to-purple-500/15 border-l-4 border-purple-500/50 rounded-r-lg p-4">
            <p className="text-gray-200 text-sm leading-relaxed italic">
              💝 {day.motivationalQuote}
            </p>
          </div>
        )}

        {/* Daily Goals - Clear checklist style */}
        {day.dailyGoals && day.dailyGoals.length > 0 && (
          <div className="mt-4 bg-blue-500/10 border-l-4 border-blue-500/60 rounded-r-lg p-4">
            <h4 className="text-sm font-bold text-blue-400 mb-3 flex items-center gap-2">
              <span>🎯</span>
              <span>Mục tiêu ngày</span>
            </h4>
            <div className="space-y-2.5">
              {day.dailyGoals.map((goal, idx) => (
                <div key={idx} className="flex items-start gap-3 text-gray-200 text-sm">
                  <span className="text-blue-400 mt-0.5 font-bold">▸</span>
                  <span className="leading-relaxed">{goal}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Content Sections - Better organized with collapsible */}
      <div className="p-6 space-y-4">

        {/* Morning Section */}
        {day.morning && (
          <div className="bg-gray-800/40 rounded-xl border border-gray-700/50 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border-b border-blue-500/30 px-5 py-3">
              <h4 className="text-base font-bold text-blue-300 flex items-center gap-2">
                <span>🌅</span>
                <span>{day.morning.title || 'Sáng'}</span>
              </h4>
            </div>
            <div className="p-5 space-y-5">
              {/* Concepts - Most Important, Show First - With Hierarchical Structure */}
              {day.morning.concepts && day.morning.concepts.length > 0 && (
                <div className="mb-4">
                  <div className="mb-4">
                    <h4 className="text-base font-bold text-purple-400 flex items-center gap-2 mb-3">
                      <span className="text-xl">💡</span>
                      <span>Concepts Cần Hiểu</span>
                    </h4>
                  </div>
                  <ConceptDisplay concepts={day.morning.concepts} />
                </div>
              )}

              {/* Content */}
              {day.morning.content && day.morning.content.length > 0 && (
                <CollapsibleSection title="Nội Dung Học" icon="📝" colorClass="text-blue-400">
                  <div className="bg-blue-500/5 border border-blue-500/20 rounded-lg p-4 mt-2">
                    <ul className="space-y-2.5">
                      {day.morning.content.map((item: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                          <span className="text-blue-400 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CollapsibleSection>
              )}

              {/* Detailed Setup */}
              {day.morning.detailedSetup && day.morning.detailedSetup.length > 0 && (
                <CollapsibleSection title="Setup Chi Tiết" icon="📋" colorClass="text-cyan-400">
                  <div className="bg-cyan-500/5 border border-cyan-500/20 rounded-lg p-4 mt-2">
                    <ol className="space-y-2.5">
                      {day.morning.detailedSetup.map((step: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                          <span className="text-cyan-400 font-bold flex-shrink-0 w-6">{idx + 1}.</span>
                          <span className="leading-relaxed">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </CollapsibleSection>
              )}

              {/* Config Files */}
              {day.morning.configFiles && day.morning.configFiles.length > 0 && (
                <CollapsibleSection title="Config Files" icon="⚙️" colorClass="text-yellow-400">
                  <div className="space-y-3 mt-2">
                    {day.morning.configFiles.map((config: any, idx: number) => (
                      <div key={idx} className="bg-yellow-500/5 border border-yellow-500/20 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-mono text-yellow-400 text-sm font-bold">{config.name}</span>
                          <span className="text-gray-400 text-xs">{config.description}</span>
                        </div>
                        <pre className="bg-black/60 rounded-md p-3 text-xs text-green-400 overflow-x-auto border border-gray-700/50">
                          <code>{config.content}</code>
                        </pre>
                      </div>
                    ))}
                  </div>
                </CollapsibleSection>
              )}

              {/* Code Blocks */}
              {day.morning.codeBlocks && day.morning.codeBlocks.length > 0 && (
                <CollapsibleSection title="Commands" icon="💻" colorClass="text-green-400">
                  <div className="space-y-3 mt-2">
                    {day.morning.codeBlocks.map((code: string, idx: number) => (
                      <div key={idx} className="bg-green-500/5 border border-green-500/20 rounded-lg p-4">
                        <pre className="bg-black/60 rounded-md p-3 text-xs text-green-400 overflow-x-auto border border-gray-700/50">
                          <code>{code}</code>
                        </pre>
                      </div>
                    ))}
                  </div>
                </CollapsibleSection>
              )}

              {/* Troubleshooting */}
              {day.morning.troubleshooting && day.morning.troubleshooting.length > 0 && (
                <CollapsibleSection title="Troubleshooting" icon="🔧" colorClass="text-red-400">
                  <div className="bg-red-500/5 border border-red-500/20 rounded-lg p-4 mt-2">
                    <ul className="space-y-2.5">
                      {day.morning.troubleshooting.map((issue: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                          <span className="text-red-400 mt-1">⚠️</span>
                          <span className="leading-relaxed">{issue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CollapsibleSection>
              )}
            </div>
          </div>
        )}

        {/* Afternoon Section */}
        {day.afternoon && (
          <div className="bg-gray-800/40 rounded-xl border border-gray-700/50 overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500/20 to-amber-500/20 border-b border-orange-500/30 px-5 py-3">
              <h4 className="text-base font-bold text-orange-300 flex items-center gap-2">
                <span>☀️</span>
                <span>{day.afternoon.title || 'Chiều'}</span>
              </h4>
            </div>
            <div className="p-5 space-y-4">
              {day.afternoon.exercises && day.afternoon.exercises.map((exercise: any, idx: number) => (
                <div key={idx} className="bg-orange-500/5 border border-orange-500/20 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <h5 className="font-bold text-white text-sm flex-1">{exercise.title}</h5>
                    {exercise.duration && (
                      <span className="text-xs text-orange-300 bg-orange-500/20 px-2.5 py-1 rounded-md border border-orange-500/30 font-semibold">
                        ⏱️ {exercise.duration}
                      </span>
                    )}
                  </div>
                  <div className="space-y-2.5">
                    {exercise.tasks.map((task: string, taskIdx: number) => (
                      <div key={taskIdx} className="flex items-start gap-3 text-gray-300 text-sm">
                        <span className="text-orange-400 mt-1 font-bold flex-shrink-0">▸</span>
                        <span className="leading-relaxed">{task}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Evening Section */}
        {day.evening && (
          <div className="bg-gray-800/40 rounded-xl border border-gray-700/50 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border-b border-purple-500/30 px-5 py-3">
              <h4 className="text-base font-bold text-purple-300 flex items-center gap-2">
                <span>🌙</span>
                <span>{day.evening.title || 'Tối'}</span>
              </h4>
            </div>
            <div className="p-5 space-y-4">
              {day.evening.content && day.evening.content.length > 0 && (
                <div className="bg-purple-500/5 border border-purple-500/20 rounded-lg p-4">
                  <ul className="space-y-2.5">
                    {day.evening.content.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                        <span className="text-purple-400 mt-1">•</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {day.evening.exercises && day.evening.exercises.map((exercise: any, idx: number) => (
                <div key={idx} className="bg-purple-500/5 border border-purple-500/20 rounded-lg p-4">
                  <h5 className="font-bold text-white text-sm mb-3">{exercise.title}</h5>
                  <div className="space-y-2.5">
                    {exercise.tasks.map((task: string, taskIdx: number) => (
                      <div key={taskIdx} className="flex items-start gap-3 text-gray-300 text-sm">
                        <span className="text-purple-400 mt-1 font-bold flex-shrink-0">▸</span>
                        <span className="leading-relaxed">{task}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Additional Resources Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {/* Shortcuts */}
          {day.shortcuts && day.shortcuts.length > 0 && (
            <div className="bg-gray-800/40 rounded-xl border border-gray-700/50 p-4">
              <ShortcutDisplay shortcuts={day.shortcuts} />
            </div>
          )}

          {/* Goals */}
          {day.goals && day.goals.length > 0 && (
            <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-4">
              <h4 className="text-sm font-bold text-green-400 mb-3 flex items-center gap-2">
                <span>🎯</span>
                <span>Mục tiêu</span>
              </h4>
              <ul className="space-y-2">
                {day.goals.map((goal: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Best Practices & Common Mistakes - Side by Side */}
        {(day.bestPractices || day.commonMistakes) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {/* Best Practices */}
            {day.bestPractices && day.bestPractices.length > 0 && (
              <div className="bg-green-500/5 border-l-4 border-green-500/60 rounded-lg p-4">
                <h4 className="text-sm font-bold text-green-400 mb-3 flex items-center gap-2">
                  <span>✨</span>
                  <span>Best Practices</span>
                </h4>
                <ul className="space-y-2.5">
                  {day.bestPractices.map((practice: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                      <span className="text-green-400 mt-1 font-bold">✓</span>
                      <span className="leading-relaxed">{practice}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Common Mistakes */}
            {day.commonMistakes && day.commonMistakes.length > 0 && (
              <div className="bg-red-500/5 border-l-4 border-red-500/60 rounded-lg p-4">
                <h4 className="text-sm font-bold text-red-400 mb-3 flex items-center gap-2">
                  <span>⚠️</span>
                  <span>Common Mistakes</span>
                </h4>
                <ul className="space-y-2.5">
                  {day.commonMistakes.map((mistake: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                      <span className="text-red-400 mt-1 font-bold">✗</span>
                      <span className="leading-relaxed">{mistake}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Learning Resources */}
        {day.learningResources && day.learningResources.length > 0 && (
          <div className="mt-4 bg-blue-500/5 border-l-4 border-blue-500/60 rounded-lg p-4">
            <h4 className="text-sm font-bold text-blue-400 mb-3 flex items-center gap-2">
              <span>📚</span>
              <span>Learning Resources</span>
            </h4>
            <div className="space-y-3">
              {day.learningResources.map((resource: any, idx: number) => (
                <div key={idx} className="bg-gray-800/40 rounded-lg p-3 border border-gray-700/50">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <span className="font-semibold text-white text-sm">{resource.title}</span>
                      {resource.description && (
                        <div className="text-gray-400 text-xs mt-1 leading-relaxed">{resource.description}</div>
                      )}
                    </div>
                    {resource.url && (
                      <a 
                        href={resource.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-400 hover:text-blue-300 text-xs font-semibold px-2 py-1 bg-blue-500/10 rounded-md border border-blue-500/30 hover:bg-blue-500/20 transition-colors flex-shrink-0"
                      >
                        🔗 Link
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

