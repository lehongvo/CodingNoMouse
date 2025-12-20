'use client';

import { useState } from 'react';

interface ExerciseStep {
  stepNumber: string;
  title: string;
  subSteps?: Array<{
    number: string;
    content: string;
    examples?: string[];
  }>;
  content?: string;
}

interface ExerciseDisplayProps {
  title: string;
  duration?: string;
  tasks: string[];
}

// Parse exercise text into structured format
function parseExercise(tasks: string[]): ExerciseStep[] {
  const steps: ExerciseStep[] = [];
  
  tasks.forEach(task => {
    // Match pattern: "BƯỚC X - Title" (with optional colon)
    const stepMatch = task.match(/BƯỚC\s*(\d+)\s*[-–]\s*([^:]+?)(?:\s*:\s*|$)/i);
    
    if (stepMatch) {
      const stepNumber = stepMatch[1];
      const title = stepMatch[2].trim();
      const rest = task.substring(stepMatch[0].length).trim();
      
      const step: ExerciseStep = {
        stepNumber,
        title,
      };
      
      // Try to find numbered sub-steps: (1), (2), (3)
      // Improved regex to handle multiline content better
      const subStepRegex = /\((\d+)\)\s*([\s\S]+?)(?=\((\d+)\)|$)/g;
      const subStepMatches: Array<{num: string; content: string; index: number}> = [];
      let match;
      
      while ((match = subStepRegex.exec(rest)) !== null) {
        subStepMatches.push({
          num: match[1],
          content: match[2].trim(),
          index: match.index,
        });
      }
      
      if (subStepMatches.length > 0) {
        step.subSteps = subStepMatches.map(m => {
          let content = m.content;
          const examples: string[] = [];
          
          // Check for examples in content (Ví dụ:, Example:, etc.)
          // Handle multiple examples
          const exampleRegex = /(?:Ví dụ:|Example:|ví dụ:|example:)\s*([^Ví dụExampleví dụexample]+?)(?=(?:Ví dụ:|Example:|ví dụ:|example:)|$)/gi;
          let exampleMatch;
          let lastIndex = 0;
          
          while ((exampleMatch = exampleRegex.exec(content)) !== null) {
            // Extract text before example
            if (exampleMatch.index > lastIndex) {
              const beforeExample = content.substring(lastIndex, exampleMatch.index).trim();
              if (beforeExample && !content.substring(0, exampleMatch.index).includes('Ví dụ')) {
                content = beforeExample;
              }
            }
            examples.push(exampleMatch[1].trim());
            lastIndex = exampleRegex.lastIndex;
          }
          
          // If no examples found but content contains "ví dụ" or "example", try simpler match
          if (examples.length === 0) {
            const simpleExampleMatch = content.match(/(.+?)(?:Ví dụ:|Example:|ví dụ:|example:)\s*(.+)/i);
            if (simpleExampleMatch) {
              content = simpleExampleMatch[1].trim();
              examples.push(simpleExampleMatch[2].trim());
            }
          }
          
          return {
            number: m.num,
            content: content.trim(),
            examples: examples.length > 0 ? examples : undefined,
          };
        });
        
        // Check if there's intro text before first numbered item
        if (subStepMatches[0].index > 0) {
          const introText = rest.substring(0, subStepMatches[0].index).trim();
          if (introText && introText.length > 10) {
            step.content = introText;
          }
        }
      } else if (rest) {
        // No sub-steps, but has content
        step.content = rest;
      }
      
      steps.push(step);
    } else {
      // Not a step format, treat as simple content
      if (steps.length === 0) {
        steps.push({
          stepNumber: '0',
          title: '',
          content: task,
        });
      } else {
        // Append to last step
        const lastStep = steps[steps.length - 1];
        if (!lastStep.content) {
          lastStep.content = '';
        }
        lastStep.content += (lastStep.content ? '\n\n' : '') + task;
      }
    }
  });
  
  return steps;
}

function ExerciseStepCard({ step, index }: { step: ExerciseStep; index: number }) {
  const [isExpanded, setIsExpanded] = useState(index === 0); // First step expanded by default

  return (
    <div className="bg-gray-800/50 rounded-xl border border-gray-700/50 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
      {/* Step Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left focus:outline-none focus:ring-2 focus:ring-orange-500/50 rounded-t-xl"
      >
        <div className={`bg-gradient-to-r from-orange-500/20 to-amber-500/20 border-b border-orange-500/30 px-6 py-4 transition-colors ${
          isExpanded ? 'bg-orange-500/25' : 'hover:bg-orange-500/15'
        }`}>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <div className="bg-orange-500/30 rounded-lg px-4 py-2 border border-orange-500/40 flex-shrink-0">
                <span className="text-orange-300 font-bold text-lg">BƯỚC {step.stepNumber}</span>
              </div>
              <h3 className="text-lg font-bold text-white leading-tight truncate">
                {step.title}
              </h3>
            </div>
            <span className={`text-orange-400 text-xl transition-transform flex-shrink-0 ${
              isExpanded ? 'rotate-90' : ''
            }`}>
              ▶
            </span>
          </div>
        </div>
      </button>

      {/* Expandable Content */}
      {isExpanded && (
        <div className="animate-fade-in p-6 space-y-5">
          {/* Intro content before sub-steps */}
          {step.content && step.subSteps && step.subSteps.length > 0 && (
            <div className="bg-gray-900/40 rounded-lg p-4 border border-gray-700/30 mb-2">
              <p className="text-gray-200 text-sm leading-relaxed">{step.content}</p>
            </div>
          )}
          
          {/* Sub-steps */}
          {step.subSteps && step.subSteps.length > 0 && (
            <div className="space-y-4">
              {step.subSteps.map((subStep, subIdx) => (
                <div 
                  key={subIdx}
                  className={`bg-gray-900/50 rounded-lg p-4 border border-gray-700/40 ${
                    subIdx > 0 ? 'border-t-2 border-t-gray-700/60' : ''
                  }`}
                >
                  {/* Sub-step Number and Content */}
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500/20 rounded-md px-3 py-1.5 border border-orange-500/30 flex-shrink-0">
                      <span className="text-orange-300 font-bold text-sm">({subStep.number})</span>
                    </div>
                    <div className="flex-1 space-y-2">
                      <p className="text-gray-200 text-sm leading-relaxed">
                        {subStep.content}
                      </p>
                      
                      {/* Examples */}
                      {subStep.examples && subStep.examples.length > 0 && (
                        <div className="mt-3 bg-blue-500/10 border-l-4 border-blue-500/50 rounded-r-lg p-3 space-y-2">
                          <div className="text-xs font-semibold text-blue-400 flex items-center gap-2">
                            <span>💡</span>
                            <span>Ví dụ:</span>
                          </div>
                          {subStep.examples.map((example, exIdx) => (
                            <div key={exIdx} className="bg-gray-800/50 rounded p-2 border border-gray-700/30">
                              <p className="text-gray-300 text-xs leading-relaxed">
                                <span className="text-blue-400 font-semibold">→</span>{' '}
                                <span className="italic">{example}</span>
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Simple content without sub-steps */}
          {step.content && (!step.subSteps || step.subSteps.length === 0) && (
            <div className="bg-gray-900/50 rounded-lg p-4 border border-gray-700/40">
              <p className="text-gray-200 text-sm leading-relaxed whitespace-pre-wrap">
                {step.content}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function ExerciseDisplay({ title, duration, tasks }: ExerciseDisplayProps) {
  const steps = parseExercise(tasks);

  return (
    <div className="bg-orange-500/5 border border-orange-500/20 rounded-xl p-5">
      {/* Exercise Header */}
      <div className="flex items-center justify-between gap-4 mb-5">
        <div className="flex items-center gap-3">
          <span className="text-2xl">📝</span>
          <h5 className="font-bold text-white text-base">{title}</h5>
        </div>
        {duration && (
          <span className="text-xs text-orange-300 bg-orange-500/20 px-3 py-1.5 rounded-md border border-orange-500/30 font-semibold flex-shrink-0">
            ⏱️ {duration}
          </span>
        )}
      </div>

      {/* Exercise Steps */}
      {steps.length > 0 ? (
        <div className="space-y-4">
          {steps.map((step, idx) => (
            <ExerciseStepCard key={idx} step={step} index={idx} />
          ))}
        </div>
      ) : (
        // Fallback: show tasks as simple list if parsing fails
        <div className="space-y-2.5">
          {tasks.map((task, taskIdx) => (
            <div key={taskIdx} className="flex items-start gap-3 text-gray-300 text-sm">
              <span className="text-orange-400 mt-1 font-bold flex-shrink-0">▸</span>
              <span className="leading-relaxed">{task}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

