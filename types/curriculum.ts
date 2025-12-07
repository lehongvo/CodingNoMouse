export interface Shortcut {
  key: string;
  description: string;
}

export interface Exercise {
  title: string;
  duration?: string;
  tasks: string[];
}

export interface DayContent {
  day: string;
  title: string;
  totalHours?: number;
  motivationalQuote?: string; // Câu động lực cho ngày này
  morning?: {
    title?: string;
    duration?: string;
    content: string[];
    codeBlocks?: string[];
    detailedSetup?: string[]; // Hướng dẫn setup chi tiết
    configFiles?: { name: string; content: string; description: string }[]; // Config files đầy đủ
    concepts?: string[]; // Concepts cần hiểu
    troubleshooting?: string[]; // Common issues và cách fix
  };
  afternoon?: {
    title?: string;
    duration?: string;
    content: string[];
    exercises?: Exercise[];
  };
  evening?: {
    title?: string;
    duration?: string;
    content: string[];
    exercises?: Exercise[];
  };
  shortcuts?: Shortcut[];
  goals?: string[];
  dailyGoals?: string[]; // Mục tiêu cụ thể cho ngày này
  learningResources?: { title: string; url?: string; description: string }[]; // Tài liệu tham khảo
  bestPractices?: string[]; // Best practices
  commonMistakes?: string[]; // Common mistakes và cách tránh
}

export interface Week {
  week: number;
  title: string;
  days: DayContent[];
  goals?: string[];
  metrics?: {
    mouseUsage: string;
    shortcutsLearned: number;
    comfortLevel: string;
  };
  finalProject?: {
    title: string;
    description: string;
    requirements: string[];
    deliverables: string[];
    estimatedHours: number;
  };
}

export interface Curriculum {
  weeks: Week[];
  finalChecklist: string[];
  proTips: {
    ifStuck: string[];
    ifTooHard: string[];
    ifTooEasy: string[];
  };
}

