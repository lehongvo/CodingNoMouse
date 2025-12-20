'use client';

import { useState } from 'react';

interface ConceptItem {
  mainTitle: string;
  subItems?: Array<{
    title?: string;
    content: string;
    items?: string[];
  }>;
}

interface ConceptDisplayProps {
  concepts: string[] | ConceptItem[];
}

// Helper function to parse concept string into structured format
function parseConcept(concept: string): ConceptItem {
  // Pattern 1: "Title → Description" or "Title: Description"
  const arrowMatch = concept.match(/^(.+?)\s*[→:]\s*([\s\S]+)$/);
  if (arrowMatch) {
    const mainTitle = arrowMatch[1].trim();
    const rest = arrowMatch[2].trim();

    // Try to find numbered items: (1), (2), etc.
    const numberedRegex = /\((\d+)\)\s*([^()]+?)(?=\((\d+)\)|$)/g;
    const matches: Array<{num: string; content: string}> = [];
    let match;

    while ((match = numberedRegex.exec(rest)) !== null) {
      matches.push({
        num: match[1],
        content: match[2].trim(),
      });
    }

    if (matches.length > 0) {
      // Has numbered items - structure them
      const subItems: ConceptItem['subItems'] = [];
      
      // Check if there's intro text before first numbered item
      const firstMatchIndex = rest.indexOf(`(${matches[0].num})`);
      if (firstMatchIndex > 0) {
        const introText = rest.substring(0, firstMatchIndex).trim();
        if (introText) {
          subItems.push({
            content: introText,
          });
        }
      }

      // Process numbered items
      matches.forEach(m => {
        const content = m.content.trim();
        // Check for nested bullet points or sub-sections in content
        const lines = content.split(/\n/).map(l => l.trim()).filter(l => l.length > 0);
        const mainContent: string[] = [];
        const nestedItems: string[] = [];

        lines.forEach(line => {
          // Check for bullet points
          const bulletMatch = line.match(/^[-•]\s*(.+)/);
          if (bulletMatch) {
            nestedItems.push(bulletMatch[1]);
          } else {
            mainContent.push(line);
          }
        });

        const mainText = mainContent.join(' ').trim();
        
        // Check if content has bold text (sub-headings)
        const boldMatch = content.match(/\*\*(.+?)\*\*/);
        if (boldMatch && mainText.includes('**')) {
          // Has bold sub-heading
          const parts = content.split(/\*\*(.+?)\*\*/);
          if (parts.length >= 3) {
            subItems.push({
              title: `(${m.num}) ${parts[1]}`,
              content: parts[0].trim() + (parts[2] || '').trim(),
              items: nestedItems.length > 0 ? nestedItems : undefined,
            });
          } else {
            subItems.push({
              title: `(${m.num})`,
              content: mainText,
              items: nestedItems.length > 0 ? nestedItems : undefined,
            });
          }
        } else {
          subItems.push({
            title: `(${m.num})`,
            content: mainText || content,
            items: nestedItems.length > 0 ? nestedItems : undefined,
          });
        }
      });

      return {
        mainTitle,
        subItems,
      };
    }

    // No numbered items, but has arrow - treat as simple structure
    const lines = rest.split(/\n/).map(l => l.trim()).filter(l => l.length > 0);
    
    if (lines.length > 1) {
      // Multiple lines - first is intro, rest might be items
      const subItems: ConceptItem['subItems'] = [];
      const intro = lines[0];
      const restLines = lines.slice(1);

      // Check if rest lines are bullet points
      const bulletItems = restLines
        .filter(l => l.match(/^[-•]/))
        .map(l => l.replace(/^[-•]\s*/, ''));

      if (bulletItems.length > 0) {
        subItems.push({
          content: intro,
          items: bulletItems,
        });
      } else {
        subItems.push({
          content: rest,
        });
      }

      return {
        mainTitle,
        subItems,
      };
    }

    // Single line after arrow
    return {
      mainTitle,
      subItems: [{
        content: rest,
      }],
    };
  }

  // Pattern 2: Simple concept with colon
  const colonIndex = concept.indexOf(':');
  if (colonIndex > 0 && colonIndex < concept.length - 10) {
    // Only split if colon is not at the end
    const mainTitle = concept.substring(0, colonIndex).trim();
    const rest = concept.substring(colonIndex + 1).trim();

    if (rest.length > 20) {
      // Has substantial content after colon
      return {
        mainTitle,
        subItems: [{
          content: rest,
        }],
      };
    }
  }

  // Pattern 3: Simple concept without structure
  return {
    mainTitle: concept,
  };
}

function ConceptCard({ concept, index }: { concept: ConceptItem; index: number }) {
  const [isExpanded, setIsExpanded] = useState(index === 0); // First concept expanded by default

  const hasContent = concept.subItems && concept.subItems.length > 0;

  return (
    <div className="bg-gray-800/50 rounded-xl border border-gray-700/50 overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
      {/* Collapsible Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full text-left focus:outline-none focus:ring-2 focus:ring-purple-500/50 rounded-t-xl"
      >
        <div className={`bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 border-b border-purple-500/30 px-6 py-4 transition-colors ${
          isExpanded ? 'bg-purple-500/25' : 'hover:bg-purple-500/15'
        }`}>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <span className={`text-purple-400 text-xl transition-transform flex-shrink-0 ${
                isExpanded ? 'rotate-90' : ''
              }`}>
                ▶
              </span>
              <h3 className="text-lg font-bold text-white leading-tight truncate">
                {concept.mainTitle}
              </h3>
            </div>
            {hasContent && (
              <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-1 rounded flex-shrink-0">
                {concept.subItems?.length || 0} phần
              </span>
            )}
          </div>
        </div>
      </button>

      {/* Expandable Content */}
      {isExpanded && (
        <div className="animate-fade-in">
          {hasContent ? (
            <div className="p-6 space-y-6">
              {concept.subItems!.map((subItem, subIdx) => (
                <div 
                  key={subIdx} 
                  className={`space-y-3 ${
                    subIdx > 0 ? 'border-t border-gray-700/40 pt-6' : ''
                  }`}
                >
                  {/* Sub-title - Medium size, clear hierarchy */}
                  {subItem.title && (
                    <div className="mb-4">
                      <div className="inline-flex items-center gap-2 bg-purple-500/20 rounded-lg px-4 py-2 border border-purple-500/30">
                        <span className="text-purple-400 font-bold">{subItem.title}</span>
                      </div>
                    </div>
                  )}

                  {/* Sub-content - Well-spaced paragraphs */}
                  {subItem.content && subItem.content.trim() && (
                    <div className={`${subItem.title ? 'ml-1' : ''} text-gray-200 text-sm leading-relaxed mb-4`}>
                      <p className="whitespace-pre-wrap">{subItem.content}</p>
                    </div>
                  )}

                  {/* Nested items - Clear bullet points */}
                  {subItem.items && subItem.items.length > 0 && (
                    <div className={`${subItem.title ? 'ml-1' : ''} bg-gray-900/50 rounded-lg p-4 border border-gray-700/40`}>
                      <ul className="space-y-2.5">
                        {subItem.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-3 group">
                            <span className="text-purple-400 mt-1 flex-shrink-0 font-bold group-hover:text-purple-300 transition-colors">▸</span>
                            <span className="text-gray-300 text-sm leading-relaxed flex-1">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="p-6">
              <p className="text-gray-200 text-sm leading-relaxed whitespace-pre-wrap">
                {concept.mainTitle}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function ConceptDisplay({ concepts }: ConceptDisplayProps) {
  if (!concepts || concepts.length === 0) return null;

  // Check if concepts are already structured objects
  const isStructured = concepts.length > 0 && typeof concepts[0] === 'object' && 'mainTitle' in concepts[0];
  
  const structuredConcepts: ConceptItem[] = isStructured
    ? (concepts as ConceptItem[])
    : (concepts as string[]).map(parseConcept);

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-2xl">💡</span>
        <h2 className="text-xl font-bold text-white">Concepts Cần Hiểu</h2>
        <div className="flex-1 border-t border-gray-700/50"></div>
        <span className="text-sm text-gray-400">{structuredConcepts.length} concepts</span>
      </div>

      {/* Concept Cards */}
      {structuredConcepts.map((concept, idx) => (
        <ConceptCard key={idx} concept={concept} index={idx} />
      ))}
    </div>
  );
}

