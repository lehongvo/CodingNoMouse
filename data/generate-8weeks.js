// Script để generate 8 tuần curriculum
// Mỗi tuần: Thứ 2-6 (4h/ngày), Thứ 7-CN (12h/ngày)

const fs = require('fs');
const original = require('./curriculum.ts');

// Helper để tạo weekend day
function createWeekendDay(day, title, content) {
  return {
    day,
    title,
    totalHours: 12,
    dailyGoals: content.dailyGoals || [],
    morning: { title: "Sáng (4h)", ...content.morning },
    afternoon: { title: "Chiều (4h)", ...content.afternoon },
    evening: { title: "Tối (4h)", ...content.evening },
    ...content
  };
}

console.log("Generating 8 weeks curriculum...");
