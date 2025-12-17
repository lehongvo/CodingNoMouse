import { Curriculum } from '@/types/curriculum';

// Helper functions
function createWeekendDay(day: string, title: string, content: any) {
  return {
    day, title, totalHours: 12,
    dailyGoals: content.dailyGoals || [],
    morning: { title: "Sáng (4h)", ...content.morning },
    afternoon: { title: "Chiều (4h)", ...content.afternoon },
    evening: { title: "Tối (4h)", ...content.evening },
    ...content
  };
}

function createDay(day: string, title: string, hours: number, content: any) {
  return {
    day, title, totalHours: hours,
    motivationalQuote: content.motivationalQuote || "",
    dailyGoals: content.dailyGoals || [],
    morning: content.morning || {},
    afternoon: content.afternoon || {},
    evening: content.evening || {},
    shortcuts: content.shortcuts || [],
    goals: content.goals || [],
    learningResources: content.learningResources || [],
    bestPractices: content.bestPractices || [],
    commonMistakes: content.commonMistakes || [],
    troubleshooting: content.troubleshooting || [],
    concepts: content.concepts || [],
    configFiles: content.configFiles || [],
    codeBlocks: content.codeBlocks || [],
    detailedSetup: content.detailedSetup || []
  };
}

// ============================================
// LỘ TRÌNH MANUAL TESTER 8 THÁNG (32 TUẦN)
// ============================================
// 2 tháng cơ bản (8 tuần) + 3 tháng nâng cao (12 tuần) 
// + 1 tháng thực hành (4 tuần) + 2 tháng final (8 tuần - 10 projects)

export const curriculumTesterComplete: Curriculum = {
  weeks: [
    // ============================================
    // PHẦN 1: 2 THÁNG CƠ BẢN (TUẦN 1-8)
    // ============================================
    
    // TUẦN 1: Giới thiệu Testing & SDLC
    {
      week: 1,
      title: "FOUNDATION - Introduction to Software Testing",
      goals: [
        "Hiểu rõ Software Testing là gì và tại sao cần Testing",
        "Nắm vững SDLC và vị trí của Testing",
        "Phân biệt các loại Testing: Functional, Non-functional",
        "Hiểu vai trò và trách nhiệm của Tester"
      ],
      metrics: { mouseUsage: "N/A", shortcutsLearned: 0, comfortLevel: "2/10" },
      finalProject: {
        title: "Test Plan cho Calculator App",
        description: "Tạo Test Plan và Test Cases cơ bản cho Calculator",
        requirements: ["Phân tích requirements", "Viết Test Plan", "Tạo 15-20 Test Cases"],
        deliverables: ["Test Plan", "Test Cases", "Test Scenarios"],
        estimatedHours: 8
      },
      days: [
        createDay("Thứ 2", "Software Testing Fundamentals", 4, {
          motivationalQuote: "🎯 Mỗi bug được tìm thấy là một bước tiến đến chất lượng tốt hơn!",
          dailyGoals: ["✅ Hiểu Testing là gì", "✅ Nắm khái niệm Bug, Defect", "✅ Hiểu vai trò Tester"],
          morning: {
            title: "Sáng (1.5h): Lý thuyết",
            content: ["Giới thiệu Software Testing", "Vai trò Tester", "Tầm quan trọng trong SDLC"],
            concepts: [
              "Testing: Quá trình kiểm tra phần mềm để tìm lỗi",
              "QA vs QC: Prevention vs Detection",
              "Cost of fixing bug tăng theo thời gian"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Thực hành",
            exercises: [{
              title: "BÀI TẬP: Phân tích Calculator",
              duration: "2h",
              tasks: ["Test Calculator app", "Tìm 3 bugs", "Viết bug reports"]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{ title: "REVIEW", duration: "30 phút", tasks: ["Summary", "Review bugs"] }]
          }
        }),
        createDay("Thứ 3", "SDLC & STLC", 4, {
          motivationalQuote: "📋 Hiểu quy trình là nền tảng của thành công!",
          dailyGoals: ["✅ Nắm SDLC models", "✅ Hiểu STLC", "✅ So sánh Waterfall vs Agile"],
          morning: {
            title: "Sáng (1.5h): SDLC",
            content: ["SDLC overview", "Waterfall", "V-Model", "Agile/Scrum"],
            concepts: ["SDLC: Quy trình phát triển", "Waterfall: Tuần tự", "Agile: Iterative"]
          },
          afternoon: {
            title: "Chiều (2h): STLC",
            exercises: [{
              title: "BÀI TẬP: Tạo Test Plan",
              duration: "2h",
              tasks: ["Chọn feature", "Viết Test Plan", "Include: Objective, Scope, Strategy"]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{ title: "REVIEW", duration: "30 phút", tasks: ["Review Test Plan"] }]
          }
        }),
        createDay("Thứ 4", "Types & Levels of Testing", 4, {
          motivationalQuote: "🔍 Hiểu các loại Testing giúp test toàn diện!",
          dailyGoals: ["✅ Phân biệt Functional vs Non-functional", "✅ Hiểu Unit, Integration, System, UAT"],
          morning: {
            title: "Sáng (1.5h): Types",
            content: ["Functional Testing", "Non-functional", "Testing Pyramid"],
            concepts: ["Functional: Test features", "Non-functional: Performance, Security"]
          },
          afternoon: {
            title: "Chiều (2h): Levels",
            exercises: [{
              title: "BÀI TẬP: Phân loại Testing",
              duration: "2h",
              tasks: ["Chọn app", "Liệt kê 10 loại Testing", "Phân loại"]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{ title: "REVIEW", duration: "30 phút", tasks: ["Review phân loại"] }]
          }
        }),
        createDay("Thứ 5", "Test Case Design Fundamentals", 4, {
          motivationalQuote: "✍️ Test Case tốt là nền tảng của Testing hiệu quả!",
          dailyGoals: ["✅ Hiểu cấu trúc Test Case", "✅ Viết Test Case đúng format", "✅ Tạo 10+ Test Cases"],
          morning: {
            title: "Sáng (1.5h): Structure",
            content: ["Test Case là gì", "Cấu trúc: ID, Description, Steps, Expected", "Best practices"],
            configFiles: [{
              name: "Test Case Template",
              description: "Template chuẩn",
              content: `Test Case ID: TC_001
Description: Verify login with valid credentials
Preconditions: User exists
Steps: 1. Navigate 2. Enter username 3. Enter password 4. Click Login
Expected: Redirect to dashboard
Status: Pass/Fail`
            }]
          },
          afternoon: {
            title: "Chiều (2h): Practice",
            exercises: [{
              title: "BÀI TẬP: Viết Test Cases",
              duration: "2h",
              tasks: ["10 Test Cases cho Login", "15 Test Cases cho Registration", "Review"]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{ title: "REVIEW", duration: "30 phút", tasks: ["Review Test Cases"] }]
          }
        }),
        createWeekendDay("Thứ 6", "Weekend Project - Calculator Test Plan", {
          dailyGoals: ["✅ Test Plan", "✅ 20+ Test Cases", "✅ Document"],
          morning: {
            exercises: [{
              title: "PHASE 1: Analysis & Planning",
              duration: "4h",
              tasks: ["Analyze requirements", "Create Test Plan", "Identify scenarios"]
            }]
          },
          afternoon: {
            exercises: [{
              title: "PHASE 2: Test Cases",
              duration: "4h",
              tasks: ["Write 20+ Test Cases", "Organize", "Review"]
            }]
          },
          evening: {
            exercises: [{
              title: "PHASE 3: Documentation",
              duration: "4h",
              tasks: ["Complete documentation", "Prepare presentation"]
            }]
          }
        })
      ]
    },

    // TUẦN 2: Test Design Techniques - EP & BVA
    {
      week: 2,
      title: "TEST DESIGN TECHNIQUES - EP & BVA",
      goals: [
        "Master Equivalence Partitioning",
        "Master Boundary Value Analysis",
        "Giảm số lượng Test Cases nhưng maintain coverage"
      ],
      metrics: { mouseUsage: "N/A", shortcutsLearned: 0, comfortLevel: "4/10" },
      finalProject: {
        title: "Test Design cho Form Validation",
        description: "Áp dụng EP và BVA cho form validation",
        requirements: ["Apply EP", "Apply BVA", "Reduce Test Cases"],
        deliverables: ["Test Cases với EP & BVA", "Comparison", "Coverage analysis"],
        estimatedHours: 8
      },
      days: [
        createDay("Thứ 2", "Equivalence Partitioning", 4, {
          motivationalQuote: "🧠 EP giúp test thông minh hơn!",
          dailyGoals: ["✅ Hiểu EP", "✅ Chia partitions", "✅ Áp dụng EP"],
          morning: {
            title: "Sáng (1.5h): EP Concepts",
            content: ["EP là gì", "Cách chia partitions", "Khi nào dùng"],
            concepts: ["EP: Chia input thành nhóm tương đương", "Chỉ test 1 giá trị mỗi partition"]
          },
          afternoon: {
            title: "Chiều (2h): Practice EP",
            exercises: [{
              title: "BÀI TẬP: EP Practice",
              duration: "2h",
              tasks: ["Age (18-65): Identify partitions", "Email: Identify partitions", "Write Test Cases"]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{ title: "REVIEW", duration: "30 phút", tasks: ["Review EP"] }]
          }
        }),
        createDay("Thứ 3", "Boundary Value Analysis", 4, {
          motivationalQuote: "📊 BVA tìm được nhiều bugs!",
          dailyGoals: ["✅ Hiểu BVA", "✅ Identify boundaries", "✅ Test min, max, min-1, max+1"],
          morning: {
            title: "Sáng (1.5h): BVA Concepts",
            content: ["BVA là gì", "Boundary values", "Khi nào dùng"],
            concepts: ["BVA: Test giá trị tại biên", "Test: min, min+1, max-1, max"]
          },
          afternoon: {
            title: "Chiều (2h): Practice BVA",
            exercises: [{
              title: "BÀI TẬP: BVA Practice",
              duration: "2h",
              tasks: ["Age: 17, 18, 19, 64, 65, 66", "Password: 7, 8, 9, 19, 20, 21", "Write Test Cases"]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{ title: "REVIEW", duration: "30 phút", tasks: ["Review BVA"] }]
          }
        }),
        createDay("Thứ 4", "Decision Table Testing", 4, {
          motivationalQuote: "📋 Decision Table test tất cả combinations!",
          dailyGoals: ["✅ Hiểu Decision Table", "✅ Tạo Decision Table", "✅ Convert thành Test Cases"],
          morning: {
            title: "Sáng (1.5h): Concepts",
            content: ["Decision Table là gì", "Cấu trúc: Conditions, Actions, Rules"],
            concepts: ["Decision Table: Bảng quyết định cho business rules"]
          },
          afternoon: {
            title: "Chiều (2h): Practice",
            exercises: [{
              title: "BÀI TẬP: Decision Table",
              duration: "2h",
              tasks: ["Login với Remember Me", "Shipping calculation", "Convert thành Test Cases"]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{ title: "REVIEW", duration: "30 phút", tasks: ["Review Decision Table"] }]
          }
        }),
        createDay("Thứ 5", "State Transition Testing", 4, {
          motivationalQuote: "🔄 State Transition test workflows!",
          dailyGoals: ["✅ Hiểu State Transition", "✅ Vẽ State Diagram", "✅ Identify test cases"],
          morning: {
            title: "Sáng (1.5h): Concepts",
            content: ["State Transition là gì", "States, Transitions, Events"],
            concepts: ["State: Trạng thái system", "Transition: Chuyển state"]
          },
          afternoon: {
            title: "Chiều (2h): Practice",
            exercises: [{
              title: "BÀI TẬP: State Transition",
              duration: "2h",
              tasks: ["Order status: Pending -> Confirmed -> Shipped", "Vẽ diagram", "Create Test Cases"]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{ title: "REVIEW", duration: "30 phút", tasks: ["Review State Diagram"] }]
          }
        }),
        createWeekendDay("Thứ 6", "Weekend Project - Form Validation Test Design", {
          dailyGoals: ["✅ Apply EP + BVA", "✅ Apply Decision Table", "✅ Apply State Transition"],
          morning: {
            exercises: [{
              title: "PHASE 1: EP + BVA",
              duration: "4h",
              tasks: ["Apply EP cho Email, Phone, Age", "Apply BVA cho boundaries"]
            }]
          },
          afternoon: {
            exercises: [{
              title: "PHASE 2: Decision Table + State",
              duration: "4h",
              tasks: ["Decision Table cho payment", "State Diagram cho registration"]
            }]
          },
          evening: {
            exercises: [{
              title: "PHASE 3: Consolidation",
              duration: "4h",
              tasks: ["Consolidate Test Cases", "Create comparison", "Calculate coverage"]
            }]
          }
        })
      ]
    },

    // TUẦN 3: Bug Tracking & Test Execution
    {
      week: 3,
      title: "BUG TRACKING & TEST EXECUTION",
      goals: [
        "Master Bug Life Cycle và Bug Reporting",
        "Sử dụng Jira để track bugs",
        "Thực hiện Test Execution",
        "Tạo Test Reports"
      ],
      metrics: { mouseUsage: "N/A", shortcutsLearned: 0, comfortLevel: "5/10" },
      finalProject: {
        title: "Complete Test Execution cho Login Feature",
        description: "Execute tests, log bugs trong Jira, tạo test report",
        requirements: ["Execute Test Cases", "Log 5+ bugs", "Track trong Jira", "Create report"],
        deliverables: ["Test results", "Bug reports", "Test Summary Report"],
        estimatedHours: 8
      },
      days: [
        createDay("Thứ 2", "Bug Life Cycle & Bug Reporting", 4, {
          motivationalQuote: "🐛 Mỗi bug được report đúng cách là một bước tiến!",
          dailyGoals: ["✅ Hiểu Bug Life Cycle", "✅ Nắm Bug Report structure", "✅ Viết Bug Report"],
          morning: {
            title: "Sáng (1.5h): Bug Life Cycle",
            content: ["Bug Life Cycle: New, Assigned, Open, Fixed, Retest, Closed", "Bug Report structure", "Severity vs Priority"],
            concepts: ["Bug Life Cycle: Track từ khi tìm thấy đến khi fix", "Severity: Mức độ nghiêm trọng", "Priority: Mức độ ưu tiên"]
          },
          afternoon: {
            title: "Chiều (2h): Practice Bug Reporting",
            exercises: [{
              title: "BÀI TẬP: Find & Report Bugs",
              duration: "2h",
              tasks: ["Test Login feature", "Find 5 bugs", "Write Bug Reports", "Classify severity/priority"]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{ title: "REVIEW", duration: "30 phút", tasks: ["Review Bug Reports"] }]
          }
        }),
        createDay("Thứ 3", "Jira Bug Tracking", 4, {
          motivationalQuote: "🛠️ Tools giúp bạn làm việc hiệu quả hơn!",
          dailyGoals: ["✅ Setup Jira", "✅ Tạo bugs trong Jira", "✅ Track bug status"],
          morning: {
            title: "Sáng (1.5h): Jira Setup",
            content: ["Giới thiệu Jira", "Setup account", "Create project", "Configure"],
            detailedSetup: ["Bước 1: Đăng ký Jira", "Bước 2: Tạo project", "Bước 3: Configure issue types"]
          },
          afternoon: {
            title: "Chiều (2h): Practice với Jira",
            exercises: [{
              title: "BÀI TẬP: Jira Practice",
              duration: "2h",
              tasks: ["Import bugs vào Jira", "Update status", "Add screenshots", "Create filters"]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{ title: "REVIEW", duration: "30 phút", tasks: ["Review Jira usage"] }]
          }
        }),
        createDay("Thứ 4", "Test Execution Process", 4, {
          motivationalQuote: "▶️ Test Execution là nơi bạn apply tất cả kiến thức!",
          dailyGoals: ["✅ Hiểu Test Execution", "✅ Execute Test Cases", "✅ Document results"],
          morning: {
            title: "Sáng (1.5h): Test Execution",
            content: ["Test Execution process", "Test Environment setup", "Test Data preparation"],
            concepts: ["Test Execution: Chạy Test Cases", "Test Results: Pass, Fail, Blocked"]
          },
          afternoon: {
            title: "Chiều (2h): Practice Execution",
            exercises: [{
              title: "BÀI TẬP: Execute Login Tests",
              duration: "2h",
              tasks: ["Setup environment", "Execute 20 Test Cases", "Document results", "Log bugs"]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{ title: "REVIEW", duration: "30 phút", tasks: ["Analyze results"] }]
          }
        }),
        createDay("Thứ 5", "Test Reporting & Metrics", 4, {
          motivationalQuote: "📊 Reporting giúp stakeholders hiểu chất lượng!",
          dailyGoals: ["✅ Tạo Test Summary Report", "✅ Calculate metrics", "✅ Present results"],
          morning: {
            title: "Sáng (1.5h): Test Reporting",
            content: ["Test Summary Report structure", "Test Metrics", "Charts và graphs"],
            concepts: ["Test Metrics: Pass rate, Coverage, Defect density"]
          },
          afternoon: {
            title: "Chiều (2h): Create Report",
            exercises: [{
              title: "BÀI TẬP: Test Summary Report",
              duration: "2h",
              tasks: ["Create report template", "Fill data", "Calculate metrics", "Create charts"]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{ title: "REVIEW", duration: "30 phút", tasks: ["Review report"] }]
          }
        }),
        createWeekendDay("Thứ 6", "Weekend Project - Complete Test Execution", {
          dailyGoals: ["✅ Execute all Test Cases", "✅ Log bugs trong Jira", "✅ Create report"],
          morning: {
            exercises: [{
              title: "PHASE 1: Test Execution",
              duration: "4h",
              tasks: ["Execute all Test Cases", "Document results", "Log bugs"]
            }]
          },
          afternoon: {
            exercises: [{
              title: "PHASE 2: Bug Tracking",
              duration: "4h",
              tasks: ["Track bugs trong Jira", "Update status", "Retest fixed bugs"]
            }]
          },
          evening: {
            exercises: [{
              title: "PHASE 3: Test Reporting",
              duration: "4h",
              tasks: ["Create comprehensive report", "Calculate metrics", "Prepare presentation"]
            }]
          }
        })
      ]
    },

    // TUẦN 4: Web Testing Basics
    {
      week: 4,
      title: "WEB TESTING - UI & Functionality",
      goals: [
        "Master Web Testing fundamentals",
        "Test UI elements",
        "Test forms và validations",
        "Test navigation"
      ],
      metrics: { mouseUsage: "N/A", shortcutsLearned: 0, comfortLevel: "6/10" },
      finalProject: {
        title: "Complete Web Testing cho E-commerce Site",
        description: "Test UI, Forms, Navigation cho E-commerce website",
        requirements: ["Test UI elements", "Test forms", "Test navigation", "Cross-browser"],
        deliverables: ["Test Cases", "Bug reports", "Test report"],
        estimatedHours: 8
      },
      days: [
        createDay("Thứ 2", "Web Testing Fundamentals", 4, {
          motivationalQuote: "🌐 Web là nền tảng của hầu hết applications!",
          dailyGoals: ["✅ Hiểu Web Testing", "✅ Test UI elements", "✅ Test interactions"],
          morning: {
            title: "Sáng (1.5h): Web Testing Overview",
            content: ["Web Testing overview", "UI Testing", "Functionality Testing", "Usability Testing"],
            concepts: ["Web Testing: Test web applications", "UI Testing: Layout, Colors, Fonts"]
          },
          afternoon: {
            title: "Chiều (2h): Practice UI Testing",
            exercises: [{
              title: "BÀI TẬP: UI Testing",
              duration: "2h",
              tasks: ["Test UI trên website", "Check layout, colors, fonts", "Test buttons, links", "Document issues"]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{ title: "REVIEW", duration: "30 phút", tasks: ["Review UI testing"] }]
          }
        }),
        createDay("Thứ 3", "Form Testing", 4, {
          motivationalQuote: "📝 Forms là nơi users tương tác nhiều nhất!",
          dailyGoals: ["✅ Test form validations", "✅ Test input fields", "✅ Test error messages"],
          morning: {
            title: "Sáng (1.5h): Form Testing",
            content: ["Form Testing overview", "Input field testing", "Validation testing", "Error messages"],
            concepts: ["Form Testing: Test tất cả aspects", "Validation: Format, Length, Required"]
          },
          afternoon: {
            title: "Chiều (2h): Practice Form Testing",
            exercises: [{
              title: "BÀI TẬP: Form Testing",
              duration: "2h",
              tasks: ["Test Registration form", "Test Login form", "Test Contact form", "Document issues"]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{ title: "REVIEW", duration: "30 phút", tasks: ["Review form testing"] }]
          }
        }),
        createDay("Thứ 4", "Navigation & Page Flow", 4, {
          motivationalQuote: "🧭 Navigation tốt là key của UX!",
          dailyGoals: ["✅ Test navigation", "✅ Test page flows", "✅ Test breadcrumbs"],
          morning: {
            title: "Sáng (1.5h): Navigation Testing",
            content: ["Navigation Testing", "Menu testing", "Breadcrumb testing", "Page flow"],
            concepts: ["Navigation: Cách users di chuyển", "Page Flow: Sequence of pages"]
          },
          afternoon: {
            title: "Chiều (2h): Practice Navigation",
            exercises: [{
              title: "BÀI TẬP: Navigation Testing",
              duration: "2h",
              tasks: ["Test main menu", "Test page flows", "Test breadcrumbs", "Test browser navigation"]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{ title: "REVIEW", duration: "30 phút", tasks: ["Review navigation"] }]
          }
        }),
        createDay("Thứ 5", "Cross-Browser Testing", 4, {
          motivationalQuote: "🌍 Users dùng nhiều browsers khác nhau!",
          dailyGoals: ["✅ Test trên Chrome, Firefox, Safari", "✅ Identify browser issues", "✅ Document differences"],
          morning: {
            title: "Sáng (1.5h): Cross-Browser Concepts",
            content: ["Cross-Browser Testing", "Browser differences", "Testing strategy"],
            concepts: ["Browser Compatibility", "Rendering Differences"]
          },
          afternoon: {
            title: "Chiều (2h): Practice Cross-Browser",
            exercises: [{
              title: "BÀI TẬP: Cross-Browser Testing",
              duration: "2h",
              tasks: ["Test trên Chrome", "Test trên Firefox", "Test trên Safari", "Compare results"]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{ title: "REVIEW", duration: "30 phút", tasks: ["Create compatibility report"] }]
          }
        }),
        createWeekendDay("Thứ 6", "Weekend Project - E-commerce Web Testing", {
          dailyGoals: ["✅ Complete web testing", "✅ Test UI, Forms, Navigation", "✅ Cross-browser"],
          morning: {
            exercises: [{
              title: "PHASE 1: UI & Form Testing",
              duration: "4h",
              tasks: ["Test UI elements", "Test all forms", "Document issues"]
            }]
          },
          afternoon: {
            exercises: [{
              title: "PHASE 2: Navigation & Cross-Browser",
              duration: "4h",
              tasks: ["Test navigation", "Cross-browser testing", "Compare results"]
            }]
          },
          evening: {
            exercises: [{
              title: "PHASE 3: Test Report",
              duration: "4h",
              tasks: ["Create comprehensive report", "Document all findings", "Prepare presentation"]
            }]
          }
        })
      ]
    },

    // TUẦN 5: Test Documentation & RTM
    {
      week: 5,
      title: "TEST DOCUMENTATION & RTM",
      goals: [
        "Master Test Documentation",
        "Tạo Requirements Traceability Matrix (RTM)",
        "Sử dụng Test Management Tools",
        "Maintain Test Documentation"
      ],
      metrics: { mouseUsage: "N/A", shortcutsLearned: 0, comfortLevel: "6/10" },
      finalProject: {
        title: "Complete Test Documentation cho Feature",
        description: "Tạo Test Plan, Test Cases, RTM cho một feature",
        requirements: ["Test Plan", "Test Cases", "RTM", "Test Summary Report"],
        deliverables: ["Test Plan", "Test Cases", "RTM", "Reports"],
        estimatedHours: 8
      },
      days: [
        createDay("Thứ 2", "Test Documentation Types", 4, {
          motivationalQuote: "📝 Documentation tốt giúp team làm việc hiệu quả!",
          dailyGoals: ["✅ Hiểu các loại Test Documentation", "✅ Tạo RTM", "✅ Maintain documentation"],
          morning: {
            title: "Sáng (1.5h): Documentation Types",
            content: ["Test Plan", "Test Cases", "Test Scripts", "Bug Reports", "Test Summary Report"],
            concepts: ["Test Documentation: Plan, Cases, Scripts, Reports", "RTM: Track requirements"]
          },
          afternoon: {
            title: "Chiều (2h): Practice RTM",
            exercises: [{
              title: "BÀI TẬP: Create RTM",
              duration: "2h",
              tasks: ["List requirements", "Map với Test Cases", "Create RTM", "Calculate coverage"]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{ title: "REVIEW", duration: "30 phút", tasks: ["Review RTM"] }]
          }
        }),
        createDay("Thứ 3", "Test Management Tools", 4, {
          motivationalQuote: "🛠️ Tools giúp quản lý Test Cases hiệu quả!",
          dailyGoals: ["✅ Sử dụng TestRail/Zephyr", "✅ Quản lý Test Cases", "✅ Track execution"],
          morning: {
            title: "Sáng (1.5h): TestRail Introduction",
            content: ["TestRail overview", "Setup", "Create test cases", "Organize"],
            concepts: ["Test Management: Organize và track Test Cases"]
          },
          afternoon: {
            title: "Chiều (2h): Practice với TestRail",
            exercises: [{
              title: "BÀI TẬP: TestRail Practice",
              duration: "2h",
              tasks: ["Setup TestRail", "Import Test Cases", "Organize", "Track execution"]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{ title: "REVIEW", duration: "30 phút", tasks: ["Review TestRail"] }]
          }
        }),
        createDay("Thứ 4", "Test Coverage & Metrics", 4, {
          motivationalQuote: "📊 Metrics giúp đo lường chất lượng testing!",
          dailyGoals: ["✅ Hiểu Test Coverage", "✅ Calculate metrics", "✅ Analyze coverage"],
          morning: {
            title: "Sáng (1.5h): Coverage Concepts",
            content: ["Test Coverage", "Requirements Coverage", "Code Coverage", "Metrics"],
            concepts: ["Coverage: % requirements được test", "Metrics: Pass rate, Defect density"]
          },
          afternoon: {
            title: "Chiều (2h): Practice Coverage",
            exercises: [{
              title: "BÀI TẬP: Calculate Coverage",
              duration: "2h",
              tasks: ["Calculate requirements coverage", "Calculate test coverage", "Analyze gaps"]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{ title: "REVIEW", duration: "30 phút", tasks: ["Review coverage"] }]
          }
        }),
        createDay("Thứ 5", "Test Summary Report", 4, {
          motivationalQuote: "📋 Report tốt giúp stakeholders hiểu kết quả!",
          dailyGoals: ["✅ Tạo Test Summary Report", "✅ Include metrics", "✅ Write recommendations"],
          morning: {
            title: "Sáng (1.5h): Report Structure",
            content: ["Test Summary Report structure", "Metrics", "Charts", "Recommendations"],
            concepts: ["Test Report: Summary, Results, Metrics, Recommendations"]
          },
          afternoon: {
            title: "Chiều (2h): Create Report",
            exercises: [{
              title: "BÀI TẬP: Test Summary Report",
              duration: "2h",
              tasks: ["Create report template", "Fill data", "Calculate metrics", "Create charts"]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{ title: "REVIEW", duration: "30 phút", tasks: ["Review report"] }]
          }
        }),
        createWeekendDay("Thứ 6", "Weekend Project - Complete Test Documentation", {
          dailyGoals: ["✅ Test Plan", "✅ Test Cases", "✅ RTM", "✅ Test Report"],
          morning: {
            exercises: [{
              title: "PHASE 1: Test Planning",
              duration: "4h",
              tasks: ["Create Test Plan", "Design Test Cases", "Create RTM"]
            }]
          },
          afternoon: {
            exercises: [{
              title: "PHASE 2: Documentation",
              duration: "4h",
              tasks: ["Complete Test Cases", "Update RTM", "Calculate coverage"]
            }]
          },
          evening: {
            exercises: [{
              title: "PHASE 3: Reporting",
              duration: "4h",
              tasks: ["Create Test Summary Report", "Include metrics", "Prepare presentation"]
            }]
          }
        })
      ]
    },

    // TUẦN 6: Use Case Testing & Error Guessing
    {
      week: 6,
      title: "USE CASE TESTING & ERROR GUESSING",
      goals: [
        "Master Use Case Testing",
        "Áp dụng Error Guessing",
        "Kết hợp các kỹ thuật",
        "Tạo comprehensive test suite"
      ],
      metrics: { mouseUsage: "N/A", shortcutsLearned: 0, comfortLevel: "7/10" },
      finalProject: {
        title: "Comprehensive Test Design",
        description: "Kết hợp EP, BVA, Decision Table, State Transition, Use Case, Error Guessing",
        requirements: ["Apply all techniques", "Create comprehensive suite", "Optimize Test Cases"],
        deliverables: ["Test Cases với all techniques", "Comparison", "Coverage analysis"],
        estimatedHours: 8
      },
      days: [
        createDay("Thứ 2", "Use Case Testing", 4, {
          motivationalQuote: "💡 Use Case Testing test theo user scenarios!",
          dailyGoals: ["✅ Hiểu Use Case Testing", "✅ Test theo use cases", "✅ Document scenarios"],
          morning: {
            title: "Sáng (1.5h): Use Case Concepts",
            content: ["Use Case là gì", "Use Case Testing", "User scenarios", "Examples"],
            concepts: ["Use Case: Mô tả cách user tương tác", "Use Case Testing: Test theo flow"]
          },
          afternoon: {
            title: "Chiều (2h): Practice Use Case",
            exercises: [{
              title: "BÀI TẬP: Use Case Testing",
              duration: "2h",
              tasks: ["Identify use cases", "Create test scenarios", "Write Test Cases", "Document"]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{ title: "REVIEW", duration: "30 phút", tasks: ["Review use cases"] }]
          }
        }),
        createDay("Thứ 3", "Error Guessing", 4, {
          motivationalQuote: "🎯 Error Guessing dựa vào kinh nghiệm!",
          dailyGoals: ["✅ Hiểu Error Guessing", "✅ Identify common errors", "✅ Apply Error Guessing"],
          morning: {
            title: "Sáng (1.5h): Error Guessing Concepts",
            content: ["Error Guessing là gì", "Common error patterns", "When to use"],
            concepts: ["Error Guessing: Dựa vào kinh nghiệm", "Common errors: Null, Empty, Special chars"]
          },
          afternoon: {
            title: "Chiều (2h): Practice Error Guessing",
            exercises: [{
              title: "BÀI TẬP: Error Guessing",
              duration: "2h",
              tasks: ["Identify common errors", "Test edge cases", "Document findings"]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{ title: "REVIEW", duration: "30 phút", tasks: ["Review error patterns"] }]
          }
        }),
        createDay("Thứ 4", "Combining Techniques", 4, {
          motivationalQuote: "🔗 Kết hợp kỹ thuật cho coverage tốt nhất!",
          dailyGoals: ["✅ Combine EP + BVA", "✅ Combine Decision Table + State", "✅ Combine all"],
          morning: {
            title: "Sáng (1.5h): Combining Strategies",
            content: ["When to combine", "EP + BVA", "Decision Table + State", "All techniques"],
            concepts: ["Combine techniques: EP + BVA + Decision Table + State + Use Case + Error Guessing"]
          },
          afternoon: {
            title: "Chiều (2h): Practice Combining",
            exercises: [{
              title: "BÀI TẬP: Combine Techniques",
              duration: "2h",
              tasks: ["Apply EP + BVA", "Apply Decision Table", "Apply State Transition", "Apply Use Case", "Apply Error Guessing"]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{ title: "REVIEW", duration: "30 phút", tasks: ["Review combination"] }]
          }
        }),
        createDay("Thứ 5", "Test Suite Optimization", 4, {
          motivationalQuote: "⚡ Optimize để giảm số lượng nhưng maintain coverage!",
          dailyGoals: ["✅ Optimize Test Cases", "✅ Remove duplicates", "✅ Maintain coverage"],
          morning: {
            title: "Sáng (1.5h): Optimization Strategies",
            content: ["Remove duplicates", "Combine similar cases", "Prioritize", "Maintain coverage"],
            concepts: ["Optimization: Giảm số lượng, maintain coverage"]
          },
          afternoon: {
            title: "Chiều (2h): Practice Optimization",
            exercises: [{
              title: "BÀI TẬP: Optimize Test Suite",
              duration: "2h",
              tasks: ["Review Test Cases", "Remove duplicates", "Combine similar", "Verify coverage"]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{ title: "REVIEW", duration: "30 phút", tasks: ["Review optimization"] }]
          }
        }),
        createWeekendDay("Thứ 6", "Weekend Project - Comprehensive Test Design", {
          dailyGoals: ["✅ Apply all techniques", "✅ Create comprehensive suite", "✅ Optimize"],
          morning: {
            exercises: [{
              title: "PHASE 1: Apply All Techniques",
              duration: "4h",
              tasks: ["EP + BVA", "Decision Table", "State Transition", "Use Case", "Error Guessing"]
            }]
          },
          afternoon: {
            exercises: [{
              title: "PHASE 2: Consolidate",
              duration: "4h",
              tasks: ["Consolidate Test Cases", "Remove duplicates", "Organize"]
            }]
          },
          evening: {
            exercises: [{
              title: "PHASE 3: Optimize & Report",
              duration: "4h",
              tasks: ["Optimize Test Cases", "Calculate coverage", "Create comparison", "Prepare presentation"]
            }]
          }
        })
      ]
    },

    // TUẦN 7: SQL Basics for Testing
    {
      week: 7,
      title: "SQL BASICS FOR TESTING",
      goals: [
        "Hiểu Database và SQL cơ bản",
        "Viết SELECT queries",
        "Verify data trong database",
        "Test CRUD operations"
      ],
      metrics: { mouseUsage: "N/A", shortcutsLearned: 0, comfortLevel: "7/10" },
      finalProject: {
        title: "Database Testing cho User Management",
        description: "Sử dụng SQL để verify data cho User Management",
        requirements: ["Write SQL queries", "Verify CRUD", "Test data integrity"],
        deliverables: ["SQL queries", "Verification results", "Test report"],
        estimatedHours: 8
      },
      days: [
        createDay("Thứ 2", "SQL Basics", 4, {
          motivationalQuote: "💾 Database là nơi lưu trữ data!",
          dailyGoals: ["✅ Hiểu Database", "✅ SQL syntax cơ bản", "✅ Viết SELECT queries"],
          morning: {
            title: "Sáng (1.5h): SQL Introduction",
            content: ["Database overview", "SQL basics", "SELECT, FROM, WHERE", "ORDER BY, LIMIT"],
            concepts: ["Database: Lưu trữ data", "SQL: Query language", "SELECT: Retrieve data"],
            codeBlocks: [
              `SELECT * FROM users;
SELECT id, name, email FROM users WHERE status = 'active';
SELECT * FROM users ORDER BY created_at DESC LIMIT 10;`
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice SQL",
            exercises: [{
              title: "BÀI TẬP: SQL Basics",
              duration: "2h",
              tasks: ["Setup database", "Practice SELECT", "Practice WHERE", "Practice ORDER BY"]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{ title: "REVIEW", duration: "30 phút", tasks: ["Review SQL basics"] }]
          }
        }),
        createDay("Thứ 3", "SQL Joins & Aggregations", 4, {
          motivationalQuote: "🔗 JOINs giúp combine data từ nhiều tables!",
          dailyGoals: ["✅ Hiểu JOINs", "✅ Sử dụng aggregate functions", "✅ Group data"],
          morning: {
            title: "Sáng (1.5h): JOINs & Aggregations",
            content: ["INNER JOIN", "LEFT JOIN", "COUNT, SUM, AVG", "GROUP BY"],
            concepts: ["JOIN: Combine tables", "Aggregate: Calculate trên nhiều rows"],
            codeBlocks: [
              `SELECT u.name, o.order_id FROM users u INNER JOIN orders o ON u.id = o.user_id;
SELECT COUNT(*) as total_users FROM users;
SELECT user_id, COUNT(*) as order_count FROM orders GROUP BY user_id;`
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice JOINs",
            exercises: [{
              title: "BÀI TẬP: JOINs & Aggregations",
              duration: "2h",
              tasks: ["Practice INNER JOIN", "Practice LEFT JOIN", "Practice COUNT, SUM", "Practice GROUP BY"]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{ title: "REVIEW", duration: "30 phút", tasks: ["Review JOINs"] }]
          }
        }),
        createDay("Thứ 4", "Data Verification", 4, {
          motivationalQuote: "✅ Verify data đảm bảo system hoạt động đúng!",
          dailyGoals: ["✅ Verify CREATE", "✅ Verify UPDATE", "✅ Verify DELETE"],
          morning: {
            title: "Sáng (1.5h): Data Verification",
            content: ["Verify CREATE", "Verify UPDATE", "Verify DELETE", "Data integrity"],
            concepts: ["Data Verification: Verify data trong DB match expected"]
          },
          afternoon: {
            title: "Chiều (2h): Practice Verification",
            exercises: [{
              title: "BÀI TẬP: Data Verification",
              duration: "2h",
              tasks: ["Test CREATE và verify", "Test UPDATE và verify", "Test DELETE và verify"]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{ title: "REVIEW", duration: "30 phút", tasks: ["Review verification"] }]
          }
        }),
        createDay("Thứ 5", "CRUD Testing", 4, {
          motivationalQuote: "🔄 CRUD là core của mọi application!",
          dailyGoals: ["✅ Test CREATE", "✅ Test READ", "✅ Test UPDATE", "✅ Test DELETE"],
          morning: {
            title: "Sáng (1.5h): CRUD Testing",
            content: ["CRUD overview", "Test CREATE", "Test READ", "Test UPDATE", "Test DELETE"],
            concepts: ["CRUD: Create, Read, Update, Delete"]
          },
          afternoon: {
            title: "Chiều (2h): Practice CRUD",
            exercises: [{
              title: "BÀI TẬP: CRUD Testing",
              duration: "2h",
              tasks: ["Test CREATE user", "Test READ user", "Test UPDATE user", "Test DELETE user", "Verify trong DB"]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{ title: "REVIEW", duration: "30 phút", tasks: ["Review CRUD"] }]
          }
        }),
        createWeekendDay("Thứ 6", "Weekend Project - Database Testing", {
          dailyGoals: ["✅ Complete CRUD testing", "✅ Verify data integrity", "✅ Create report"],
          morning: {
            exercises: [{
              title: "PHASE 1: CRUD Testing",
              duration: "4h",
              tasks: ["Test all CRUD operations", "Verify trong database"]
            }]
          },
          afternoon: {
            exercises: [{
              title: "PHASE 2: Data Integrity",
              duration: "4h",
              tasks: ["Test foreign keys", "Test constraints", "Test relationships"]
            }]
          },
          evening: {
            exercises: [{
              title: "PHASE 3: Report",
              duration: "4h",
              tasks: ["Create database test report", "Document SQL queries", "Prepare presentation"]
            }]
          }
        })
      ]
    },

    // TUẦN 8: Review & Consolidation (Cơ bản)
    {
      week: 8,
      title: "REVIEW & CONSOLIDATION - Cơ bản",
      goals: [
        "Review tất cả kiến thức cơ bản",
        "Consolidate skills",
        "Practice comprehensive testing",
        "Prepare cho phần nâng cao"
      ],
      metrics: { mouseUsage: "N/A", shortcutsLearned: 0, comfortLevel: "8/10" },
      finalProject: {
        title: "Complete Testing cho Todo App",
        description: "Áp dụng tất cả kiến thức cơ bản vào Todo App",
        requirements: ["Test Plan", "Test Cases (all techniques)", "Test Execution", "Bug Reporting", "Test Report"],
        deliverables: ["Complete Test Plan", "Test Cases", "Bug reports", "Test Summary Report"],
        estimatedHours: 12
      },
      days: [
        createDay("Thứ 2", "Review Testing Fundamentals", 4, {
          motivationalQuote: "🔄 Review giúp củng cố kiến thức!",
          dailyGoals: ["✅ Review Testing basics", "✅ Review SDLC/STLC", "✅ Review Test Cases"],
          morning: {
            title: "Sáng (1.5h): Review Basics",
            content: ["Testing fundamentals", "SDLC/STLC", "Types & Levels", "Test Cases"],
            concepts: ["Review: Củng cố kiến thức đã học"]
          },
          afternoon: {
            title: "Chiều (2h): Practice Review",
            exercises: [{
              title: "BÀI TẬP: Review Exercises",
              duration: "2h",
              tasks: ["Review concepts", "Practice exercises", "Identify gaps"]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{ title: "REVIEW", duration: "30 phút", tasks: ["Review gaps"] }]
          }
        }),
        createDay("Thứ 3", "Review Test Design Techniques", 4, {
          motivationalQuote: "🧠 Review kỹ thuật giúp master hơn!",
          dailyGoals: ["✅ Review EP, BVA", "✅ Review Decision Table", "✅ Review State Transition"],
          morning: {
            title: "Sáng (1.5h): Review Techniques",
            content: ["EP & BVA", "Decision Table", "State Transition", "Use Case", "Error Guessing"],
            concepts: ["Review techniques: Master tất cả"]
          },
          afternoon: {
            title: "Chiều (2h): Practice Techniques",
            exercises: [{
              title: "BÀI TẬP: Practice All Techniques",
              duration: "2h",
              tasks: ["Practice EP + BVA", "Practice Decision Table", "Practice State Transition"]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{ title: "REVIEW", duration: "30 phút", tasks: ["Review techniques"] }]
          }
        }),
        createDay("Thứ 4", "Review Tools & Documentation", 4, {
          motivationalQuote: "🛠️ Review tools giúp làm việc hiệu quả!",
          dailyGoals: ["✅ Review Jira", "✅ Review TestRail", "✅ Review SQL"],
          morning: {
            title: "Sáng (1.5h): Review Tools",
            content: ["Jira", "TestRail", "SQL", "Test Documentation"],
            concepts: ["Review tools: Master usage"]
          },
          afternoon: {
            title: "Chiều (2h): Practice Tools",
            exercises: [{
              title: "BÀI TẬP: Practice Tools",
              duration: "2h",
              tasks: ["Practice Jira", "Practice TestRail", "Practice SQL"]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{ title: "REVIEW", duration: "30 phút", tasks: ["Review tools"] }]
          }
        }),
        createDay("Thứ 5", "Comprehensive Practice", 4, {
          motivationalQuote: "💪 Practice comprehensive giúp master skills!",
          dailyGoals: ["✅ Practice comprehensive testing", "✅ Apply all knowledge", "✅ Identify improvements"],
          morning: {
            title: "Sáng (1.5h): Comprehensive Practice",
            content: ["Apply all techniques", "Use all tools", "Create complete test suite"],
            concepts: ["Comprehensive: Apply tất cả kiến thức"]
          },
          afternoon: {
            title: "Chiều (2h): Practice Comprehensive",
            exercises: [{
              title: "BÀI TẬP: Comprehensive Testing",
              duration: "2h",
              tasks: ["Choose feature", "Apply all techniques", "Use all tools", "Create complete suite"]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{ title: "REVIEW", duration: "30 phút", tasks: ["Review comprehensive"] }]
          }
        }),
        createWeekendDay("Thứ 6", "Weekend Project - Complete Testing cho Todo App", {
          dailyGoals: ["✅ Complete Test Plan", "✅ Test Cases (all techniques)", "✅ Test Execution", "✅ Bug Reporting", "✅ Test Report"],
          morning: {
            exercises: [{
              title: "PHASE 1: Test Planning & Design",
              duration: "4h",
              tasks: ["Analyze Todo App", "Create Test Plan", "Design Test Cases (all techniques)", "Create RTM"]
            }]
          },
          afternoon: {
            exercises: [{
              title: "PHASE 2: Test Execution & Bug Reporting",
              duration: "4h",
              tasks: ["Execute Test Cases", "Log bugs trong Jira", "Track bugs", "Retest fixed bugs"]
            }]
          },
          evening: {
            exercises: [{
              title: "PHASE 3: Test Reporting & SQL",
              duration: "4h",
              tasks: ["Verify data với SQL", "Create Test Summary Report", "Calculate metrics", "Prepare presentation"]
            }]
          }
        })
      ]
    },

    // ============================================
    // PHẦN 2: 3 THÁNG NÂNG CAO (TUẦN 9-20)
    // ============================================
    
    // TUẦN 9: API Testing với Postman
    {
      week: 9,
      title: "API TESTING - Postman & REST",
      goals: [
        "Master API Testing fundamentals",
        "Sử dụng Postman để test APIs",
        "Test REST APIs",
        "Test API authentication"
      ],
      metrics: { mouseUsage: "N/A", shortcutsLearned: 0, comfortLevel: "8/10" },
      finalProject: {
        title: "Complete API Testing cho REST API",
        description: "Test tất cả API endpoints với Postman",
        requirements: ["Setup Postman", "Test all endpoints", "Test authentication", "Create collection"],
        deliverables: ["Postman collection", "API Test Cases", "API Test Report"],
        estimatedHours: 8
      },
      days: [
        createDay("Thứ 2", "API Testing Fundamentals", 4, {
          motivationalQuote: "🔌 APIs là backbone của modern applications!",
          dailyGoals: ["✅ Hiểu API Testing", "✅ Nắm REST API", "✅ Setup Postman"],
          morning: {
            title: "Sáng (1.5h): API Concepts",
            content: ["API Testing overview", "REST API", "HTTP Methods", "Status Codes", "Postman"],
            concepts: ["API: Application Programming Interface", "REST: Representational State Transfer", "HTTP Methods: GET, POST, PUT, DELETE"]
          },
          afternoon: {
            title: "Chiều (2h): Practice với Postman",
            exercises: [{
              title: "BÀI TẬP: Postman Basics",
              duration: "2h",
              tasks: ["Setup Postman", "Test GET request", "Test POST request", "View responses"]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{ title: "REVIEW", duration: "30 phút", tasks: ["Review Postman"] }]
          }
        }),
        createDay("Thứ 3", "API Request Methods", 4, {
          motivationalQuote: "📡 Mỗi HTTP method có mục đích riêng!",
          dailyGoals: ["✅ Master GET, POST, PUT, DELETE", "✅ Test với parameters", "✅ Test request body"],
          morning: {
            title: "Sáng (1.5h): Request Methods",
            content: ["GET: Retrieve data", "POST: Create", "PUT: Update", "DELETE: Remove", "Parameters"],
            concepts: ["GET: Read data", "POST: Create resource", "PUT: Update resource"]
          },
          afternoon: {
            title: "Chiều (2h): Practice Methods",
            exercises: [{
              title: "BÀI TẬP: All Request Methods",
              duration: "2h",
              tasks: ["Test GET với query params", "Test POST với body", "Test PUT với body", "Test DELETE"]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{ title: "REVIEW", duration: "30 phút", tasks: ["Review methods"] }]
          }
        }),
        createDay("Thứ 4", "API Authentication", 4, {
          motivationalQuote: "🔐 Authentication bảo vệ APIs!",
          dailyGoals: ["✅ Test với API Keys", "✅ Test với Bearer Token", "✅ Test headers"],
          morning: {
            title: "Sáng (1.5h): Authentication",
            content: ["API Key", "Bearer Token", "Headers", "Authorization"],
            concepts: ["Authentication: Verify user identity", "Bearer Token: Token-based auth"]
          },
          afternoon: {
            title: "Chiều (2h): Practice Authentication",
            exercises: [{
              title: "BÀI TẬP: API Authentication",
              duration: "2h",
              tasks: ["Test với API Key", "Test với Bearer Token", "Test authenticated endpoints", "Test invalid auth"]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{ title: "REVIEW", duration: "30 phút", tasks: ["Review authentication"] }]
          }
        }),
        createDay("Thứ 5", "API Response Validation", 4, {
          motivationalQuote: "✅ Validation đảm bảo API hoạt động đúng!",
          dailyGoals: ["✅ Validate responses", "✅ Test status codes", "✅ Create Collections"],
          morning: {
            title: "Sáng (1.5h): Response Validation",
            content: ["Response Validation", "Status codes", "JSON structure", "Postman Collections"],
            concepts: ["Response Validation: Verify response format", "Status Codes: 200, 201, 400, 404, 500"]
          },
          afternoon: {
            title: "Chiều (2h): Practice Validation",
            exercises: [{
              title: "BÀI TẬP: Response Validation",
              duration: "2h",
              tasks: ["Validate responses", "Test status codes", "Create Postman Collection", "Setup Environment"]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{ title: "REVIEW", duration: "30 phút", tasks: ["Review collection"] }]
          }
        }),
        createWeekendDay("Thứ 6", "Weekend Project - Complete API Testing", {
          dailyGoals: ["✅ Test all endpoints", "✅ Test authentication", "✅ Create collection"],
          morning: {
            exercises: [{
              title: "PHASE 1: API Testing",
              duration: "4h",
              tasks: ["Test all endpoints", "Test với different methods", "Test authentication"]
            }]
          },
          afternoon: {
            exercises: [{
              title: "PHASE 2: Response Validation & Collection",
              duration: "4h",
              tasks: ["Validate all responses", "Create Postman Collection", "Setup Environment"]
            }]
          },
          evening: {
            exercises: [{
              title: "PHASE 3: API Test Report",
              duration: "4h",
              tasks: ["Create API test report", "Document endpoints", "Export collection", "Prepare presentation"]
            }]
          }
        })
      ]
    },

    // TUẦN 10: Mobile Testing
    {
      week: 10,
      title: "MOBILE TESTING - iOS & Android",
      goals: [
        "Master Mobile Testing fundamentals",
        "Test trên iOS và Android",
        "Test mobile-specific features",
        "Test responsive design"
      ],
      metrics: { mouseUsage: "N/A", shortcutsLearned: 0, comfortLevel: "8/10" },
      finalProject: {
        title: "Complete Mobile Testing cho Mobile App",
        description: "Test functionality, UI, features cho mobile app",
        requirements: ["Test trên iOS", "Test trên Android", "Test mobile features", "Test performance"],
        deliverables: ["Mobile Test Cases", "Bug reports", "Mobile Test Report"],
        estimatedHours: 8
      },
      days: [
        createDay("Thứ 2", "Mobile Testing Fundamentals", 4, {
          motivationalQuote: "📱 Mobile là tương lai!",
          dailyGoals: ["✅ Hiểu Mobile Testing", "✅ Phân biệt Native vs Web", "✅ Setup mobile testing"],
          morning: {
            title: "Sáng (1.5h): Mobile Concepts",
            content: ["Mobile Testing overview", "Native App vs Mobile Web", "iOS vs Android", "Challenges"],
            concepts: ["Mobile Testing: Test trên mobile devices", "Native: Platform-specific", "Mobile Web: Optimized website"]
          },
          afternoon: {
            title: "Chiều (2h): Setup & Basic Testing",
            exercises: [{
              title: "BÀI TẬP: Mobile Setup",
              duration: "2h",
              tasks: ["Setup iOS device/simulator", "Setup Android device/emulator", "Install test app", "Test basic functionality"]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{ title: "REVIEW", duration: "30 phút", tasks: ["Review setup"] }]
          }
        }),
        createDay("Thứ 3", "Mobile UI & Functionality", 4, {
          motivationalQuote: "🎨 Mobile UI khác biệt với desktop!",
          dailyGoals: ["✅ Test mobile UI", "✅ Test touch interactions", "✅ Test navigation"],
          morning: {
            title: "Sáng (1.5h): Mobile UI",
            content: ["Mobile UI Testing", "Touch interactions", "Mobile navigation", "Responsive design"],
            concepts: ["Mobile UI: Optimized cho small screens", "Touch Targets: Phải đủ lớn"]
          },
          afternoon: {
            title: "Chiều (2h): Practice Mobile UI",
            exercises: [{
              title: "BÀI TẬP: Mobile UI Testing",
              duration: "2h",
              tasks: ["Test UI trên iOS", "Test UI trên Android", "Test touch: Tap, Swipe, Pinch", "Test navigation"]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{ title: "REVIEW", duration: "30 phút", tasks: ["Review mobile UI"] }]
          }
        }),
        createDay("Thứ 4", "Mobile-Specific Features", 4, {
          motivationalQuote: "📲 Mobile có nhiều features đặc biệt!",
          dailyGoals: ["✅ Test device features", "✅ Test app lifecycle", "✅ Test network conditions"],
          morning: {
            title: "Sáng (1.5h): Mobile Features",
            content: ["Device features: Camera, GPS, Notifications", "App lifecycle", "Network conditions", "Interruptions"],
            concepts: ["Device Features: Hardware features", "App Lifecycle: Active, Background, Terminated"]
          },
          afternoon: {
            title: "Chiều (2h): Practice Features",
            exercises: [{
              title: "BÀI TẬP: Mobile Features",
              duration: "2h",
              tasks: ["Test Camera", "Test GPS", "Test Notifications", "Test App Lifecycle", "Test Network"]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{ title: "REVIEW", duration: "30 phút", tasks: ["Review features"] }]
          }
        }),
        createDay("Thứ 5", "Mobile Performance", 4, {
          motivationalQuote: "⚡ Performance là key của mobile!",
          dailyGoals: ["✅ Test performance", "✅ Test trên different devices", "✅ Test battery usage"],
          morning: {
            title: "Sáng (1.5h): Performance Testing",
            content: ["Mobile Performance", "Load time", "Response time", "Battery usage", "Compatibility"],
            concepts: ["Performance: App phải nhanh", "Compatibility: Nhiều devices và OS versions"]
          },
          afternoon: {
            title: "Chiều (2h): Practice Performance",
            exercises: [{
              title: "BÀI TẬP: Mobile Performance",
              duration: "2h",
              tasks: ["Test Load Time", "Test Response Time", "Test trên different devices", "Test Battery Usage"]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{ title: "REVIEW", duration: "30 phút", tasks: ["Create performance report"] }]
          }
        }),
        createWeekendDay("Thứ 6", "Weekend Project - Complete Mobile Testing", {
          dailyGoals: ["✅ Complete mobile testing", "✅ Test trên iOS và Android", "✅ Test all features"],
          morning: {
            exercises: [{
              title: "PHASE 1: UI & Functionality",
              duration: "4h",
              tasks: ["Test UI trên iOS", "Test UI trên Android", "Test functionality", "Test navigation"]
            }]
          },
          afternoon: {
            exercises: [{
              title: "PHASE 2: Features & Performance",
              duration: "4h",
              tasks: ["Test device features", "Test app lifecycle", "Test performance", "Test compatibility"]
            }]
          },
          evening: {
            exercises: [{
              title: "PHASE 3: Mobile Test Report",
              duration: "4h",
              tasks: ["Create mobile test report", "Document compatibility", "Prepare presentation"]
            }]
          }
        })
      ]
    },

    // ============================================
    // TÓM TẮT CẤU TRÚC LỘ TRÌNH (ĐÃ ĐƯỢC KHAI BÁO Ở PHẦN TRÊN)
    // ============================================
    //
    // PHẦN 1: 2 THÁNG CƠ BẢN (TUẦN 1–8)
    // - Fundamentals, Test Design, Bug Tracking, Test Execution
    // - Web Testing, Documentation/RTM, Use Case & Error Guessing, SQL cơ bản, Consolidation
    //
    // PHẦN 2: 3 THÁNG NÂNG CAO (TUẦN 9–20)
    // - API nâng cao, Mobile, Performance, Security, Exploratory & Risk-based
    // - Usability/Accessibility, Integration & E2E, Advanced API + DB, Localization/Compliance
    //
    // PHẦN 3: 1 THÁNG THỰC HÀNH (TUẦN 21–24)
    // - SQL nâng cao, Tools deep dive (Jira/TestRail/Postman/Proxy)
    // - Test Case nâng cao, Practice Sprint tổng hợp
    //
    // PHẦN 4: 2 THÁNG FINAL (TUẦN 25–32) - 10 PROJECTS THỰC TẾ
    // - Projects theo domain: E-commerce, Banking, Healthcare, Social, Food Delivery,
    //   Hotel Booking, LMS, CRM, Inventory, Real Estate
    // - Mỗi project bao gồm: Requirements, Planning, Test Design, Execution,
    //   Bug Reporting, (SQL/API/Mobile) nếu có, Reporting, Presentation
    
  ],
  finalChecklist: [
    "Hiểu rõ Software Testing và vai trò của Tester",
    "Nắm vững SDLC và STLC",
    "Viết Test Cases đúng format",
    "Master EP, BVA, Decision Table, State Transition",
    "Sử dụng Bug Tracking Tools",
    "Test Execution và Reporting",
    "Test Web, Mobile, API",
    "Sử dụng SQL để verify data",
    "Áp dụng vào real projects",
    "Soft skills và interview prep"
  ],
  proTips: {
    ifStuck: [
      "Quay lại basics",
      "Tìm ví dụ thực tế",
      "Practice với examples đơn giản",
      "Hỏi mentor hoặc community"
    ],
    ifTooHard: [
      "Chia nhỏ thành bước nhỏ hơn",
      "Focus vào 1 topic",
      "Practice nhiều hơn",
      "Tìm thêm resources"
    ],
    ifTooEasy: [
      "Thử scenarios phức tạp hơn",
      "Kết hợp nhiều kỹ thuật",
      "Tối ưu Test Cases",
      "Mentor người khác"
    ]
  }
};

