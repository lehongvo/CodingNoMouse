import { Curriculum } from '@/types/curriculum';

// Helper function để tạo weekend day (12h)
function createWeekendDay(day: string, title: string, content: any) {
  return {
    day,
    title,
    totalHours: 12,
    dailyGoals: content.dailyGoals || [],
    morning: {
      title: "Sáng (4h)",
      ...content.morning
    },
    afternoon: {
      title: "Chiều (4h)",
      ...content.afternoon
    },
    evening: {
      title: "Tối (4h)",
      ...content.evening
    },
    ...content
  };
}

export const curriculumTester: Curriculum = {
  weeks: [
    {
      week: 1,
      title: "FOUNDATION - Testing Fundamentals",
      goals: [
        "Hiểu rõ vai trò và tầm quan trọng của Testing",
        "Nắm vững SDLC và vị trí của Testing trong quy trình",
        "Phân biệt được các loại và mức độ Testing",
        "Viết được Test Case cơ bản đúng format"
      ],
      metrics: {
        mouseUsage: "N/A",
        shortcutsLearned: 0,
        comfortLevel: "3/10"
      },
      finalProject: {
        title: "Test Plan cho ứng dụng Todo List",
        description: "Tạo Test Plan và Test Cases hoàn chỉnh cho một ứng dụng Todo List đơn giản, áp dụng tất cả kiến thức đã học trong tuần 1",
        requirements: [
          "Phân tích requirements của ứng dụng",
          "Viết Test Plan document",
          "Tạo ít nhất 20 Test Cases",
          "Phân loại Test Cases theo priority",
          "Document test scenarios"
        ],
        deliverables: [
          "Test Plan document",
          "Test Cases trong Excel/Google Sheets",
          "Test Scenarios documentation",
          "Requirements traceability matrix"
        ],
        estimatedHours: 8
      },
      days: [
        {
          day: "Thứ 2",
          title: "Introduction to Software Testing",
          totalHours: 4,
          motivationalQuote: "🎯 Mỗi bug được tìm thấy là một cơ hội để tạo ra sản phẩm tốt hơn. Bạn đang học cách bảo vệ chất lượng phần mềm!",
          dailyGoals: [
            "✅ Hiểu được Testing là gì và tại sao cần Testing",
            "✅ Nắm được vai trò của Tester trong dự án",
            "✅ Phân biệt được các loại Testing cơ bản",
            "✅ Hoàn thành bài tập thực hành đầu tiên"
          ],
          morning: {
            title: "Sáng (1.5h)",
            content: [
              "Giới thiệu về Software Testing",
              "Vai trò và trách nhiệm của Tester",
              "Tầm quan trọng của Testing trong SDLC",
              "Các khái niệm cơ bản: Bug, Defect, Error, Failure"
            ],
            concepts: [
              "Software Testing: Quá trình kiểm tra phần mềm để tìm lỗi",
              "Quality Assurance (QA) vs Quality Control (QC)",
              "Testing không thể chứng minh phần mềm không có lỗi, chỉ có thể tìm lỗi",
              "Testing giúp giảm rủi ro và tăng độ tin cậy của phần mềm",
              "Cost of fixing bug tăng theo thời gian (early testing = cheaper)"
            ],
            learningResources: [
              {
                title: "ISTQB Foundation Syllabus",
                description: "Tài liệu chuẩn quốc tế về Testing",
                url: "https://www.istqb.org"
              },
              {
                title: "Software Testing Basics - Guru99",
                description: "Hướng dẫn Testing cơ bản"
              }
            ]
          },
          afternoon: {
            title: "Chiều (2h): Types & Levels of Testing",
            content: [
              "Các loại Testing: Functional, Non-functional",
              "Các mức độ Testing: Unit, Integration, System, Acceptance",
              "Testing Pyramid và Testing Quadrant",
              "Thực hành phân loại Testing"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (1h): Phân loại Testing",
                duration: "1h",
                tasks: [
                  "Chọn 1 ứng dụng web quen thuộc (Facebook, Gmail, etc.)",
                  "Liệt kê 10 loại Testing có thể áp dụng",
                  "Phân loại theo Functional/Non-functional",
                  "Phân loại theo Unit/Integration/System/Acceptance",
                  "Giải thích tại sao chọn phân loại đó"
                ]
              },
              {
                title: "BÀI TẬP 2 (1h): Research & Document",
                duration: "1h",
                tasks: [
                  "Research về Testing Pyramid",
                  "Vẽ sơ đồ Testing Pyramid",
                  "Giải thích từng tầng",
                  "Tìm ví dụ thực tế cho mỗi tầng"
                ]
              }
            ],
            concepts: [
              "Functional Testing: Kiểm tra chức năng có hoạt động đúng không",
              "Non-functional Testing: Performance, Security, Usability, etc.",
              "Unit Testing: Test từng component riêng lẻ",
              "Integration Testing: Test sự tương tác giữa các components",
              "System Testing: Test toàn bộ hệ thống",
              "Acceptance Testing: Test để xác nhận đáp ứng yêu cầu người dùng"
            ]
          },
          evening: {
            title: "Tối (0.5h): Review & Reflection",
            content: [
              "Review lại kiến thức đã học",
              "Ghi chú những điểm quan trọng",
              "Chuẩn bị cho ngày mai"
            ],
            exercises: [
              {
                title: "REVIEW (30 phút)",
                duration: "30 phút",
                tasks: [
                  "Viết summary về Testing là gì",
                  "Liệt kê 5 điều quan trọng nhất học được hôm nay",
                  "Chuẩn bị câu hỏi cho ngày mai"
                ]
              }
            ]
          },
          bestPractices: [
            "Luôn ghi chú khi học lý thuyết",
            "Tìm ví dụ thực tế cho mỗi khái niệm",
            "Đặt câu hỏi và tìm câu trả lời",
            "Practice ngay sau khi học lý thuyết"
          ]
        },
        {
          day: "Thứ 3",
          title: "SDLC & Testing Life Cycle",
          totalHours: 4,
          motivationalQuote: "📋 Hiểu quy trình là nền tảng của mọi thành công. Bạn đang xây dựng tư duy hệ thống!",
          dailyGoals: [
            "✅ Nắm vững các mô hình SDLC",
            "✅ Hiểu STLC (Software Testing Life Cycle)",
            "✅ Biết vị trí của Testing trong từng giai đoạn",
            "✅ So sánh được Waterfall vs Agile"
          ],
          morning: {
            title: "Sáng (1.5h)",
            content: [
              "Software Development Life Cycle (SDLC)",
              "Các mô hình SDLC: Waterfall, V-Model, Agile, DevOps",
              "Vị trí của Testing trong từng mô hình",
              "Software Testing Life Cycle (STLC)"
            ],
            concepts: [
              "SDLC: Quy trình phát triển phần mềm từ đầu đến cuối",
              "Waterfall: Tuần tự, Testing ở cuối",
              "V-Model: Testing song song với development",
              "Agile: Iterative, Testing liên tục trong mỗi sprint",
              "STLC: Quy trình Testing gồm Planning, Design, Execution, Reporting"
            ],
            detailedSetup: [
              "Bước 1: Research về SDLC models",
              "Bước 2: Tìm hiểu ưu/nhược điểm mỗi model",
              "Bước 3: So sánh Waterfall vs Agile",
              "Bước 4: Hiểu Testing trong từng model"
            ]
          },
          afternoon: {
            title: "Chiều (2h): STLC Deep Dive",
            content: [
              "STLC Phases: Requirement Analysis, Test Planning, Test Design, Test Execution, Test Closure",
              "Test Planning: Mục tiêu, scope, resources, schedule",
              "Test Design: Test cases, test data, test environment",
              "Thực hành tạo Test Plan cơ bản"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (1h): Tạo Test Plan",
                duration: "1h",
                tasks: [
                  "Chọn 1 feature đơn giản (Login page)",
                  "Viết Test Plan document",
                  "Bao gồm: Objective, Scope, Test Strategy, Resources, Schedule",
                  "Sử dụng template chuẩn"
                ]
              },
              {
                title: "BÀI TẬP 2 (1h): STLC Mapping",
                duration: "1h",
                tasks: [
                  "Vẽ sơ đồ STLC",
                  "Mô tả từng phase",
                  "Liệt kê deliverables của mỗi phase",
                  "Tìm ví dụ thực tế"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (0.5h): Agile Testing",
            content: [
              "Testing trong Agile",
              "Sprint planning và Testing",
              "Daily standup và Testing updates",
              "Retrospective và cải thiện"
            ],
            exercises: [
              {
                title: "RESEARCH (30 phút)",
                duration: "30 phút",
                tasks: [
                  "Research về Agile Testing",
                  "Tìm hiểu về Test Pyramid trong Agile",
                  "Đọc về Continuous Testing",
                  "Ghi chú những điểm quan trọng"
                ]
              }
            ]
          },
          learningResources: [
            {
              title: "Agile Testing - Lisa Crispin",
              description: "Sách về Testing trong môi trường Agile"
            },
            {
              title: "STLC Tutorial - TutorialsPoint",
              description: "Hướng dẫn chi tiết về STLC"
            }
          ]
        },
        {
          day: "Thứ 4",
          title: "Test Case Design Fundamentals",
          totalHours: 4,
          motivationalQuote: "✍️ Test Case tốt là nền tảng của Testing hiệu quả. Bạn đang học cách tư duy như một Tester chuyên nghiệp!",
          dailyGoals: [
            "✅ Hiểu cấu trúc của Test Case",
            "✅ Viết được Test Case đúng format",
            "✅ Phân biệt được Test Case vs Test Scenario",
            "✅ Tạo được ít nhất 10 Test Cases"
          ],
          morning: {
            title: "Sáng (1.5h)",
            content: [
              "Test Case là gì và tại sao cần Test Case",
              "Cấu trúc Test Case: Test ID, Description, Preconditions, Test Steps, Expected Result, Actual Result, Status",
              "Test Case vs Test Scenario vs Test Script",
              "Best practices khi viết Test Case"
            ],
            concepts: [
              "Test Case: Bộ các điều kiện để verify một chức năng",
              "Test Scenario: Mô tả tổng quan về test",
              "Test Script: Chi tiết từng bước thực hiện",
              "Good Test Case: Clear, Complete, Traceable, Reusable",
              "Test Case phải có Expected Result rõ ràng"
            ],
            configFiles: [
              {
                name: "Test Case Template",
                description: "Template chuẩn cho Test Case",
                content: `Test Case ID: TC_001
Test Case Description: Verify user can login with valid credentials
Module: Authentication
Priority: High
Test Type: Functional
Preconditions:
- User account exists
- Application is accessible

Test Steps:
1. Navigate to login page
2. Enter valid username
3. Enter valid password
4. Click Login button

Expected Result:
- User is redirected to dashboard
- Welcome message is displayed
- User session is created

Actual Result: [To be filled during execution]
Status: [Pass/Fail/Blocked]`
              }
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice Writing Test Cases",
            content: [
              "Thực hành viết Test Cases cho Login feature",
              "Viết Test Cases cho các scenarios: Valid, Invalid, Boundary",
              "Review và cải thiện Test Cases",
              "Sử dụng Excel/Google Sheets để quản lý"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (1h): Login Test Cases",
                duration: "1h",
                tasks: [
                  "Viết 10 Test Cases cho Login feature",
                  "Bao gồm: Valid login, Invalid credentials, Empty fields, Special characters",
                  "Sử dụng template chuẩn",
                  "Priority: High/Medium/Low"
                ]
              },
              {
                title: "BÀI TẬP 2 (1h): Registration Test Cases",
                duration: "1h",
                tasks: [
                  "Viết 15 Test Cases cho Registration feature",
                  "Test validation rules, password strength, email format",
                  "Test boundary conditions",
                  "Review và optimize"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (0.5h): Test Case Review",
            content: [
              "Review Test Cases đã viết",
              "Tìm và sửa lỗi",
              "Cải thiện clarity và completeness",
              "Chuẩn bị cho ngày mai"
            ],
            exercises: [
              {
                title: "REVIEW (30 phút)",
                duration: "30 phút",
                tasks: [
                  "Review tất cả Test Cases đã viết",
                  "Check: Clear, Complete, Traceable",
                  "Fix các lỗi tìm được",
                  "Optimize format và structure"
                ]
              }
            ]
          },
          bestPractices: [
            "Test Case phải độc lập và có thể chạy riêng",
            "Sử dụng ngôn ngữ rõ ràng, dễ hiểu",
            "Mỗi Test Case chỉ test 1 điều",
            "Expected Result phải cụ thể và đo lường được"
          ],
          commonMistakes: [
            "Viết Test Case quá chung chung",
            "Thiếu Expected Result",
            "Test Case phụ thuộc vào nhau",
            "Không có Test ID hoặc Test ID không unique"
          ]
        },
        {
          day: "Thứ 5",
          title: "Test Documentation & Traceability",
          totalHours: 4,
          motivationalQuote: "📝 Documentation tốt giúp team hiểu rõ và làm việc hiệu quả hơn. Bạn đang xây dựng kỹ năng quan trọng!",
          dailyGoals: [
            "✅ Hiểu các loại Test Documentation",
            "✅ Tạo được Requirements Traceability Matrix (RTM)",
            "✅ Biết cách maintain Test Documentation",
            "✅ Sử dụng tools để quản lý Test Cases"
          ],
          morning: {
            title: "Sáng (1.5h)",
            content: [
              "Các loại Test Documentation: Test Plan, Test Cases, Test Scripts, Bug Reports, Test Summary Report",
              "Requirements Traceability Matrix (RTM)",
              "Test Coverage và cách đo lường",
              "Tools quản lý Test Cases: Excel, TestRail, Jira, Zephyr"
            ],
            concepts: [
              "RTM: Ma trận theo dõi mối quan hệ giữa Requirements và Test Cases",
              "Test Coverage: Phần trăm requirements được test",
              "100% coverage không có nghĩa là không có bug",
              "Documentation giúp maintain và reuse Test Cases",
              "Version control cho Test Documentation"
            ],
            learningResources: [
              {
                title: "TestRail Tutorial",
                description: "Hướng dẫn sử dụng TestRail để quản lý Test Cases"
              },
              {
                title: "Jira Test Management",
                description: "Quản lý Testing trong Jira"
              }
            ]
          },
          afternoon: {
            title: "Chiều (2h): Create RTM & Test Documentation",
            content: [
              "Tạo RTM cho Login feature",
              "Map Requirements với Test Cases",
              "Tính Test Coverage",
              "Tạo Test Summary Report template"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (1h): Create RTM",
                duration: "1h",
                tasks: [
                  "Liệt kê Requirements cho Login feature",
                  "Map mỗi Requirement với Test Cases",
                  "Tạo RTM trong Excel",
                  "Tính Coverage percentage"
                ]
              },
              {
                title: "BÀI TẬP 2 (1h): Test Summary Report",
                duration: "1h",
                tasks: [
                  "Tạo Test Summary Report template",
                  "Bao gồm: Summary, Test Results, Defects, Recommendations",
                  "Fill data mẫu",
                  "Review format"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (0.5h): Tools Research",
            content: [
              "Research về Test Management Tools",
              "So sánh Excel vs TestRail vs Jira",
              "Setup TestRail trial (nếu có)",
              "Practice với tool"
            ],
            exercises: [
              {
                title: "RESEARCH (30 phút)",
                duration: "30 phút",
                tasks: [
                  "Research TestRail, Zephyr, qTest",
                  "So sánh features và pricing",
                  "Chọn 1 tool để practice",
                  "Setup và import Test Cases"
                ]
              }
            ]
          }
        },
        createWeekendDay("Thứ 6", "Weekend Practice - Test Plan Project", {
          dailyGoals: [
            "✅ Hoàn thành Test Plan cho Todo List app",
            "✅ Viết ít nhất 20 Test Cases",
            "✅ Tạo RTM",
            "✅ Review và cải thiện"
          ],
          morning: {
            title: "Sáng (4h): Analysis & Planning",
            content: [
              "Phân tích requirements của Todo List app",
              "Tạo Test Plan document",
              "Define test strategy và approach",
              "Identify test scenarios"
            ],
            exercises: [
              {
                title: "PROJECT PHASE 1 (4h)",
                duration: "4h",
                tasks: [
                  "Read và analyze requirements cho Todo List app",
                  "Viết Test Plan: Objective, Scope, Strategy, Resources",
                  "Identify test scenarios (ít nhất 10)",
                  "Define test environment và test data requirements"
                ]
              }
            ]
          },
          afternoon: {
            title: "Chiều (4h): Test Case Creation",
            content: [
              "Viết Test Cases cho tất cả scenarios",
              "Phân loại theo priority",
              "Link với requirements trong RTM",
              "Review và optimize"
            ],
            exercises: [
              {
                title: "PROJECT PHASE 2 (4h)",
                duration: "4h",
                tasks: [
                  "Viết ít nhất 20 Test Cases",
                  "Cover: Functional, UI, Validation, Error handling",
                  "Tạo RTM mapping Requirements với Test Cases",
                  "Review Test Cases với checklist"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (4h): Documentation & Review",
            content: [
              "Hoàn thiện Test Documentation",
              "Tạo Test Summary Report",
              "Review toàn bộ project",
              "Chuẩn bị presentation"
            ],
            exercises: [
              {
                title: "PROJECT PHASE 3 (4h)",
                duration: "4h",
                tasks: [
                  "Complete Test Plan document",
                  "Tạo Test Summary Report",
                  "Review và fix tất cả issues",
                  "Prepare presentation cho tuần sau"
                ]
              }
            ]
          }
        })
      ]
    },
    {
      week: 2,
      title: "TEST DESIGN TECHNIQUES - Black Box Testing",
      goals: [
        "Master các kỹ thuật Test Design",
        "Áp dụng Equivalence Partitioning và Boundary Value Analysis",
        "Sử dụng Decision Table và State Transition",
        "Viết Test Cases hiệu quả với các kỹ thuật này"
      ],
      metrics: {
        mouseUsage: "N/A",
        shortcutsLearned: 0,
        comfortLevel: "5/10"
      },
      finalProject: {
        title: "Test Design cho E-commerce Checkout",
        description: "Áp dụng tất cả kỹ thuật Test Design để tạo Test Cases cho quy trình Checkout của E-commerce website",
        requirements: [
          "Sử dụng Equivalence Partitioning cho form validation",
          "Áp dụng Boundary Value Analysis cho quantity input",
          "Tạo Decision Table cho payment methods",
          "Sử dụng State Transition cho order status",
          "Tối ưu số lượng Test Cases"
        ],
        deliverables: [
          "Test Cases với các kỹ thuật khác nhau",
          "Documentation giải thích kỹ thuật sử dụng",
          "Comparison: Traditional vs Technique-based Test Cases",
          "Test Coverage analysis"
        ],
        estimatedHours: 8
      },
      days: [
        {
          day: "Thứ 2",
          title: "Equivalence Partitioning & Boundary Value Analysis",
          totalHours: 4,
          motivationalQuote: "🧠 Kỹ thuật Test Design giúp bạn test thông minh hơn, không phải test nhiều hơn. Bạn đang học cách tối ưu hóa!",
          dailyGoals: [
            "✅ Hiểu Equivalence Partitioning (EP)",
            "✅ Master Boundary Value Analysis (BVA)",
            "✅ Áp dụng EP và BVA cho form validation",
            "✅ Giảm số lượng Test Cases nhưng tăng coverage"
          ],
          morning: {
            title: "Sáng (1.5h)",
            content: [
              "Equivalence Partitioning: Khái niệm và cách áp dụng",
              "Boundary Value Analysis: Test các giá trị biên",
              "Khi nào dùng EP, khi nào dùng BVA",
              "Kết hợp EP và BVA"
            ],
            concepts: [
              "Equivalence Partitioning: Chia input thành các nhóm tương đương",
              "Mỗi partition có cùng behavior, chỉ cần test 1 giá trị",
              "Boundary Value: Test giá trị tại biên (min, max, min-1, max+1)",
              "EP giúp giảm số lượng Test Cases",
              "BVA tìm được nhiều bugs hơn vì bugs thường ở boundary"
            ],
            learningResources: [
              {
                title: "Equivalence Partitioning Tutorial",
                description: "Hướng dẫn chi tiết về EP"
              }
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice EP & BVA",
            content: [
              "Thực hành EP cho Age input (18-65)",
              "Thực hành BVA cho Password length (8-20 characters)",
              "Áp dụng cho Email validation",
              "So sánh số lượng Test Cases trước và sau"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (1h): Age Validation",
                duration: "1h",
                tasks: [
                  "Xác định partitions cho Age (18-65)",
                  "Viết Test Cases cho mỗi partition",
                  "Áp dụng BVA: 17, 18, 19, 64, 65, 66",
                  "So sánh: Traditional (100 cases) vs EP+BVA (8 cases)"
                ]
              },
              {
                title: "BÀI TẬP 2 (1h): Password Validation",
                duration: "1h",
                tasks: [
                  "Password: 8-20 characters, có chữ hoa, chữ thường, số",
                  "Áp dụng EP cho length",
                  "Áp dụng BVA: 7, 8, 9, 19, 20, 21",
                  "Áp dụng EP cho character types",
                  "Tối ưu Test Cases"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (0.5h): Review & Optimization",
            content: [
              "Review Test Cases đã tạo",
              "Tối ưu số lượng",
              "Đảm bảo coverage đầy đủ",
              "Chuẩn bị cho ngày mai"
            ],
            exercises: [
              {
                title: "REVIEW (30 phút)",
                duration: "30 phút",
                tasks: [
                  "Review tất cả Test Cases",
                  "Check coverage",
                  "Optimize nếu có thể",
                  "Document lessons learned"
                ]
              }
            ]
          }
        },
        {
          day: "Thứ 3",
          title: "Decision Table Testing",
          totalHours: 4,
          motivationalQuote: "📊 Decision Table giúp bạn test tất cả combinations một cách có hệ thống. Bạn đang học cách tư duy logic!",
          dailyGoals: [
            "✅ Hiểu Decision Table là gì",
            "✅ Tạo Decision Table cho business rules",
            "✅ Convert Decision Table thành Test Cases",
            "✅ Áp dụng cho payment methods"
          ],
          morning: {
            title: "Sáng (1.5h)",
            content: [
              "Decision Table: Khái niệm và cấu trúc",
              "Khi nào nên dùng Decision Table",
              "Cách tạo Decision Table: Conditions, Actions, Rules",
              "Ví dụ: Discount calculation"
            ],
            concepts: [
              "Decision Table: Bảng quyết định cho business rules phức tạp",
              "Conditions: Các điều kiện đầu vào",
              "Actions: Các hành động/kết quả",
              "Rules: Mỗi cột là 1 combination",
              "Giúp test tất cả combinations một cách có hệ thống"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice Decision Table",
            content: [
              "Tạo Decision Table cho Login với Remember Me",
              "Decision Table cho Shipping calculation",
              "Decision Table cho Discount rules",
              "Convert thành Test Cases"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (1h): Login Decision Table",
                duration: "1h",
                tasks: [
                  "Conditions: Valid credentials, Remember Me checked",
                  "Actions: Login success, Set cookie, Redirect",
                  "Tạo Decision Table với 4 rules",
                  "Convert thành 4 Test Cases"
                ]
              },
              {
                title: "BÀI TẬP 2 (1h): Shipping Decision Table",
                duration: "1h",
                tasks: [
                  "Conditions: Order amount, Member type, Location",
                  "Actions: Shipping fee, Free shipping, Express shipping",
                  "Tạo Decision Table",
                  "Convert thành Test Cases"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (0.5h): Advanced Decision Table",
            content: [
              "Decision Table với nhiều conditions",
              "Tối ưu Decision Table (reduce rules)",
              "Don't care conditions",
              "Chuẩn bị cho ngày mai"
            ],
            exercises: [
              {
                title: "RESEARCH (30 phút)",
                duration: "30 phút",
                tasks: [
                  "Research về optimizing Decision Tables",
                  "Tìm hiểu về don't care conditions",
                  "Practice với complex scenario",
                  "Ghi chú best practices"
                ]
              }
            ]
          }
        },
        {
          day: "Thứ 4",
          title: "State Transition Testing",
          totalHours: 4,
          motivationalQuote: "🔄 State Transition giúp bạn test workflow phức tạp. Bạn đang học cách tư duy về states và transitions!",
          dailyGoals: [
            "✅ Hiểu State Transition là gì",
            "✅ Vẽ State Transition Diagram",
            "✅ Identify test cases từ diagram",
            "✅ Áp dụng cho order status workflow"
          ],
          morning: {
            title: "Sáng (1.5h)",
            content: [
              "State Transition: Khái niệm",
              "States, Transitions, Events, Actions",
              "Cách vẽ State Transition Diagram",
              "Ví dụ: ATM machine, Order status"
            ],
            concepts: [
              "State: Trạng thái hiện tại của system",
              "Transition: Chuyển từ state này sang state khác",
              "Event: Sự kiện trigger transition",
              "Valid transitions vs Invalid transitions",
              "Test tất cả valid transitions và một số invalid"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice State Transition",
            content: [
              "Vẽ State Diagram cho Order status",
              "Vẽ State Diagram cho User account status",
              "Identify test cases từ diagrams",
              "Test valid và invalid transitions"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (1h): Order Status",
                duration: "1h",
                tasks: [
                  "States: Pending, Confirmed, Processing, Shipped, Delivered, Cancelled",
                  "Vẽ State Transition Diagram",
                  "Identify tất cả valid transitions",
                  "Tạo Test Cases cho mỗi transition",
                  "Test invalid transitions (e.g., Cancelled -> Shipped)"
                ]
              },
              {
                title: "BÀI TẬP 2 (1h): User Account",
                duration: "1h",
                tasks: [
                  "States: Active, Suspended, Deactivated, Banned",
                  "Vẽ State Diagram",
                  "Identify transitions",
                  "Tạo Test Cases"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (0.5h): Review & Documentation",
            content: [
              "Review State Diagrams",
              "Document test coverage",
              "Chuẩn bị cho ngày mai"
            ],
            exercises: [
              {
                title: "REVIEW (30 phút)",
                duration: "30 phút",
                tasks: [
                  "Review State Diagrams",
                  "Check coverage",
                  "Document best practices",
                  "Prepare for tomorrow"
                ]
              }
            ]
          }
        },
        {
          day: "Thứ 5",
          title: "Use Case Testing & Error Guessing",
          totalHours: 4,
          motivationalQuote: "💡 Kinh nghiệm và intuition cũng quan trọng như kỹ thuật. Bạn đang phát triển tư duy Tester!",
          dailyGoals: [
            "✅ Hiểu Use Case Testing",
            "✅ Áp dụng Error Guessing",
            "✅ Kết hợp các kỹ thuật",
            "✅ Tạo comprehensive test suite"
          ],
          morning: {
            title: "Sáng (1.5h)",
            content: [
              "Use Case Testing: Test theo user scenarios",
              "Error Guessing: Dựa vào kinh nghiệm để đoán lỗi",
              "Common error patterns",
              "Kết hợp kỹ thuật: EP + BVA + Decision Table + State Transition"
            ],
            concepts: [
              "Use Case: Mô tả cách user tương tác với system",
              "Use Case Testing: Test theo flow của use case",
              "Error Guessing: Kinh nghiệm về nơi bugs thường xuất hiện",
              "Common errors: Null values, Empty fields, Special characters, Large numbers",
              "Kết hợp nhiều kỹ thuật cho coverage tốt nhất"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Comprehensive Test Design",
            content: [
              "Áp dụng tất cả kỹ thuật cho Checkout feature",
              "EP + BVA cho form inputs",
              "Decision Table cho payment methods",
              "State Transition cho order flow",
              "Error Guessing cho edge cases"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (2h): Checkout Feature",
                duration: "2h",
                tasks: [
                  "Design Test Cases cho Checkout sử dụng EP + BVA",
                  "Tạo Decision Table cho payment methods và discounts",
                  "Vẽ State Diagram cho checkout process",
                  "Apply Error Guessing cho edge cases",
                  "Tổng hợp tất cả Test Cases",
                  "Review và optimize"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (0.5h): Test Design Review",
            content: [
              "Review comprehensive test design",
              "So sánh với traditional approach",
              "Document lessons learned",
              "Chuẩn bị project"
            ],
            exercises: [
              {
                title: "REVIEW (30 phút)",
                duration: "30 phút",
                tasks: [
                  "Review tất cả Test Cases",
                  "Compare: Traditional vs Technique-based",
                  "Document improvements",
                  "Prepare for weekend project"
                ]
              }
            ]
          }
        },
        createWeekendDay("Thứ 6", "Weekend Project - E-commerce Checkout", {
          dailyGoals: [
            "✅ Hoàn thành Test Design cho Checkout",
            "✅ Áp dụng tất cả kỹ thuật đã học",
            "✅ Tạo comprehensive test suite",
            "✅ Document và present"
          ],
          morning: {
            title: "Sáng (4h): Analysis & EP/BVA",
            content: [
              "Phân tích Checkout requirements",
              "Áp dụng EP và BVA cho tất cả inputs",
              "Tạo Test Cases cho form validation",
              "Document kỹ thuật sử dụng"
            ],
            exercises: [
              {
                title: "PROJECT PHASE 1 (4h)",
                duration: "4h",
                tasks: [
                  "Analyze Checkout feature requirements",
                  "Apply EP cho: Email, Phone, Address, Quantity",
                  "Apply BVA cho: Quantity (1-10), Card number (16 digits)",
                  "Create Test Cases",
                  "Document EP partitions và BVA values"
                ]
              }
            ]
          },
          afternoon: {
            title: "Chiều (4h): Decision Table & State Transition",
            content: [
              "Tạo Decision Table cho payment methods",
              "Vẽ State Diagram cho checkout process",
              "Convert thành Test Cases",
              "Test valid và invalid transitions"
            ],
            exercises: [
              {
                title: "PROJECT PHASE 2 (4h)",
                duration: "4h",
                tasks: [
                  "Create Decision Table: Payment method + Discount + Shipping",
                  "Vẽ State Diagram: Cart -> Checkout -> Payment -> Confirmation",
                  "Identify tất cả transitions",
                  "Create Test Cases từ Decision Table và State Diagram",
                  "Test invalid transitions"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (4h): Error Guessing & Documentation",
            content: [
              "Apply Error Guessing",
              "Tổng hợp tất cả Test Cases",
              "Tạo comprehensive documentation",
              "Prepare presentation"
            ],
            exercises: [
              {
                title: "PROJECT PHASE 3 (4h)",
                duration: "4h",
                tasks: [
                  "Apply Error Guessing: Null, Empty, Special chars, SQL injection",
                  "Consolidate tất cả Test Cases",
                  "Create comparison: Traditional vs Technique-based",
                  "Calculate test coverage",
                  "Create presentation document"
                ]
              }
            ]
          }
        })
      ]
    },
    {
      week: 3,
      title: "BUG TRACKING & TEST EXECUTION",
      goals: [
        "Master Bug Life Cycle và Bug Reporting",
        "Sử dụng Bug Tracking Tools (Jira, Bugzilla)",
        "Thực hành Test Execution và Test Reporting",
        "Phát triển kỹ năng communication với Dev team"
      ],
      metrics: {
        mouseUsage: "N/A",
        shortcutsLearned: 0,
        comfortLevel: "6/10"
      },
      finalProject: {
        title: "Complete Test Execution cho Login Feature",
        description: "Thực hiện test execution hoàn chỉnh, log bugs, và tạo test report cho Login feature",
        requirements: [
          "Execute tất cả Test Cases",
          "Log ít nhất 5 bugs với proper format",
          "Track bugs trong Jira/Bugzilla",
          "Tạo Test Execution Report",
          "Communicate với Dev team về bugs"
        ],
        deliverables: [
          "Test Execution results",
          "Bug reports (5+)",
          "Test Summary Report",
          "Bug tracking screenshots"
        ],
        estimatedHours: 8
      },
      days: [
        {
          day: "Thứ 2",
          title: "Bug Life Cycle & Bug Reporting",
          totalHours: 4,
          motivationalQuote: "🐛 Mỗi bug được report đúng cách là một bước tiến đến chất lượng tốt hơn. Bạn đang học cách communicate hiệu quả!",
          dailyGoals: [
            "✅ Hiểu Bug Life Cycle",
            "✅ Nắm cấu trúc Bug Report",
            "✅ Viết Bug Report đúng format",
            "✅ Phân loại bugs theo severity và priority"
          ],
          morning: {
            title: "Sáng (1.5h)",
            content: [
              "Bug Life Cycle: New, Assigned, Open, Fixed, Retest, Closed, Rejected",
              "Bug Report structure: Title, Description, Steps to Reproduce, Expected vs Actual, Severity, Priority",
              "Severity vs Priority",
              "Best practices khi viết Bug Report"
            ],
            concepts: [
              "Bug: Lỗi trong phần mềm",
              "Severity: Mức độ nghiêm trọng của bug (Critical, High, Medium, Low)",
              "Priority: Mức độ ưu tiên fix (P1, P2, P3, P4)",
              "Good Bug Report: Clear, Reproducible, Complete",
              "Bug Life Cycle: Track status của bug từ khi tìm thấy đến khi fix"
            ],
            configFiles: [
              {
                name: "Bug Report Template",
                description: "Template chuẩn cho Bug Report",
                content: `Bug ID: BUG_001
Title: [Clear, concise title]
Severity: [Critical/High/Medium/Low]
Priority: [P1/P2/P3/P4]
Status: New
Assigned To: [Developer name]
Reported By: [Tester name]
Reported Date: [Date]
Environment: [OS, Browser, Version]

Description:
[Clear description of the bug]

Steps to Reproduce:
1. [Step 1]
2. [Step 2]
3. [Step 3]

Expected Result:
[What should happen]

Actual Result:
[What actually happens]

Screenshots/Videos:
[Attach if applicable]

Additional Info:
[Any other relevant information]`
              }
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice Bug Reporting",
            content: [
              "Thực hành viết Bug Reports",
              "Test Login feature và tìm bugs",
              "Viết 5 Bug Reports với các severity khác nhau",
              "Review và cải thiện Bug Reports"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (2h): Find & Report Bugs",
                duration: "2h",
                tasks: [
                  "Test Login feature thoroughly",
                  "Find ít nhất 5 bugs",
                  "Viết Bug Report cho mỗi bug",
                  "Phân loại severity và priority",
                  "Review với checklist"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (0.5h): Bug Report Review",
            content: [
              "Review Bug Reports",
              "Check clarity và completeness",
              "Chuẩn bị cho ngày mai"
            ],
            exercises: [
              {
                title: "REVIEW (30 phút)",
                duration: "30 phút",
                tasks: [
                  "Review tất cả Bug Reports",
                  "Check: Clear, Reproducible, Complete",
                  "Fix issues nếu có",
                  "Prepare for tomorrow"
                ]
              }
            ]
          }
        },
        {
          day: "Thứ 3",
          title: "Bug Tracking Tools - Jira",
          totalHours: 4,
          motivationalQuote: "🛠️ Tools giúp bạn làm việc hiệu quả hơn. Bạn đang học cách sử dụng công cụ chuyên nghiệp!",
          dailyGoals: [
            "✅ Setup Jira account",
            "✅ Tạo và quản lý bugs trong Jira",
            "✅ Sử dụng Jira workflows",
            "✅ Track bug status và communicate với team"
          ],
          morning: {
            title: "Sáng (1.5h)",
            content: [
              "Giới thiệu Jira",
              "Setup Jira account (free tier)",
              "Tạo project và configure",
              "Jira interface và navigation"
            ],
            concepts: [
              "Jira: Tool quản lý bugs và tasks",
              "Issue: Bug, Task, Story, Epic",
              "Workflow: States và transitions",
              "Components: Phân loại issues",
              "Filters và Dashboards"
            ],
            detailedSetup: [
              "Bước 1: Đăng ký Jira account tại atlassian.com",
              "Bước 2: Tạo project mới (Software Development template)",
              "Bước 3: Configure issue types",
              "Bước 4: Setup workflow",
              "Bước 5: Tạo components",
              "Bước 6: Invite team members (optional)"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice với Jira",
            content: [
              "Tạo bugs trong Jira",
              "Update bug status",
              "Add comments và attachments",
              "Use filters và search",
              "Create dashboard"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (2h): Jira Practice",
                duration: "2h",
                tasks: [
                  "Import 5 bugs từ ngày hôm qua vào Jira",
                  "Update bug status qua workflow",
                  "Add screenshots và comments",
                  "Create filter: My Bugs, High Priority Bugs",
                  "Create dashboard với bug metrics"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (0.5h): Jira Advanced",
            content: [
              "Jira queries (JQL)",
              "Reports và metrics",
              "Integration với other tools",
              "Chuẩn bị cho ngày mai"
            ],
            exercises: [
              {
                title: "RESEARCH (30 phút)",
                duration: "30 phút",
                tasks: [
                  "Research JQL (Jira Query Language)",
                  "Practice với basic queries",
                  "Explore Jira reports",
                  "Ghi chú useful features"
                ]
              }
            ]
          }
        },
        {
          day: "Thứ 4",
          title: "Test Execution Process",
          totalHours: 4,
          motivationalQuote: "▶️ Test Execution là nơi bạn apply tất cả kiến thức. Bạn đang học cách test thực tế!",
          dailyGoals: [
            "✅ Hiểu Test Execution process",
            "✅ Prepare test environment",
            "✅ Execute Test Cases systematically",
            "✅ Document test results"
          ],
          morning: {
            title: "Sáng (1.5h)",
            content: [
              "Test Execution process",
              "Test Environment setup",
              "Test Data preparation",
              "Test Execution checklist"
            ],
            concepts: [
              "Test Execution: Chạy Test Cases và ghi nhận kết quả",
              "Test Environment: Môi trường để test (Dev, QA, Staging, Production)",
              "Test Data: Dữ liệu cần để test",
              "Test Results: Pass, Fail, Blocked, Skipped",
              "Systematic execution: Theo thứ tự và không bỏ sót"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice Test Execution",
            content: [
              "Setup test environment",
              "Prepare test data",
              "Execute Test Cases cho Login feature",
              "Document results",
              "Log bugs khi tìm thấy"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (2h): Execute Login Tests",
                duration: "2h",
                tasks: [
                  "Setup test environment (browser, test data)",
                  "Execute 20 Test Cases cho Login",
                  "Document results: Pass/Fail/Blocked",
                  "Log bugs cho Failed Test Cases",
                  "Update Test Cases status trong tracking tool"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (0.5h): Test Results Analysis",
            content: [
              "Analyze test results",
              "Identify patterns",
              "Prepare test summary",
              "Chuẩn bị cho ngày mai"
            ],
            exercises: [
              {
                title: "ANALYSIS (30 phút)",
                duration: "30 phút",
                tasks: [
                  "Analyze test results",
                  "Calculate pass/fail rate",
                  "Identify areas with nhiều bugs",
                  "Prepare summary"
                ]
              }
            ]
          }
        },
        {
          day: "Thứ 5",
          title: "Test Reporting & Metrics",
          totalHours: 4,
          motivationalQuote: "📊 Reporting giúp stakeholders hiểu được chất lượng phần mềm. Bạn đang học cách communicate kết quả!",
          dailyGoals: [
            "✅ Tạo Test Summary Report",
            "✅ Calculate test metrics",
            "✅ Present test results",
            "✅ Recommend next steps"
          ],
          morning: {
            title: "Sáng (1.5h)",
            content: [
              "Test Summary Report structure",
              "Test Metrics: Pass rate, Fail rate, Coverage, Defect density",
              "Charts và graphs",
              "Best practices cho reporting"
            ],
            concepts: [
              "Test Summary Report: Tổng hợp kết quả test",
              "Test Metrics: Đo lường chất lượng testing",
              "Pass Rate: % Test Cases passed",
              "Defect Density: Số bugs per module",
              "Coverage: % requirements được test"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Create Test Report",
            content: [
              "Tạo Test Summary Report cho Login testing",
              "Calculate metrics",
              "Create charts",
              "Write recommendations"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (2h): Test Summary Report",
                duration: "2h",
                tasks: [
                  "Tạo Test Summary Report template",
                  "Fill data từ test execution",
                  "Calculate: Pass rate, Fail rate, Coverage",
                  "Create charts: Pass/Fail, Bug distribution",
                  "Write summary, findings, recommendations"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (0.5h): Report Review",
            content: [
              "Review Test Report",
              "Check completeness",
              "Chuẩn bị presentation",
              "Chuẩn bị project"
            ],
            exercises: [
              {
                title: "REVIEW (30 phút)",
                duration: "30 phút",
                tasks: [
                  "Review Test Report",
                  "Check metrics accuracy",
                  "Prepare presentation",
                  "Prepare for weekend project"
                ]
              }
            ]
          }
        },
        createWeekendDay("Thứ 6", "Weekend Project - Complete Test Execution", {
          dailyGoals: [
            "✅ Execute tất cả Test Cases cho Login",
            "✅ Log ít nhất 5 bugs trong Jira",
            "✅ Tạo Test Summary Report",
            "✅ Present results"
          ],
          morning: {
            title: "Sáng (4h): Test Execution",
            content: [
              "Setup test environment",
              "Execute Test Cases",
              "Document results",
              "Log bugs"
            ],
            exercises: [
              {
                title: "PROJECT PHASE 1 (4h)",
                duration: "4h",
                tasks: [
                  "Setup complete test environment",
                  "Prepare all test data",
                  "Execute tất cả Test Cases cho Login feature",
                  "Document results: Pass/Fail/Blocked",
                  "Log bugs trong Jira cho Failed cases"
                ]
              }
            ]
          },
          afternoon: {
            title: "Chiều (4h): Bug Tracking & Analysis",
            content: [
              "Track bugs trong Jira",
              "Analyze bug patterns",
              "Communicate với Dev team",
              "Retest fixed bugs"
            ],
            exercises: [
              {
                title: "PROJECT PHASE 2 (4h)",
                duration: "4h",
                tasks: [
                  "Update bug status trong Jira",
                  "Add screenshots và detailed steps",
                  "Analyze: Which areas have nhiều bugs?",
                  "Communicate bugs với Dev (comments)",
                  "Retest bugs marked as Fixed"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (4h): Test Reporting",
            content: [
              "Tạo Test Summary Report",
              "Calculate metrics",
              "Create presentation",
              "Review project"
            ],
            exercises: [
              {
                title: "PROJECT PHASE 3 (4h)",
                duration: "4h",
                tasks: [
                  "Create comprehensive Test Summary Report",
                  "Calculate all metrics",
                  "Create charts và visualizations",
                  "Write recommendations",
                  "Prepare presentation"
                ]
              }
            ]
          }
        })
      ]
    },
    {
      week: 4,
      title: "WEB TESTING - UI & Functionality",
      goals: [
        "Master Web Testing fundamentals",
        "Test UI elements và user interactions",
        "Test form validations và submissions",
        "Test navigation và page flows",
        "Cross-browser testing"
      ],
      metrics: {
        mouseUsage: "N/A",
        shortcutsLearned: 0,
        comfortLevel: "7/10"
      },
      finalProject: {
        title: "Complete Web Testing cho E-commerce Site",
        description: "Thực hiện testing hoàn chỉnh cho một E-commerce website, bao gồm UI, functionality, forms, và navigation",
        requirements: [
          "Test tất cả UI elements",
          "Test form validations",
          "Test navigation flows",
          "Cross-browser testing (Chrome, Firefox, Safari)",
          "Create comprehensive test report"
        ],
        deliverables: [
          "Test Cases cho web testing",
          "Bug reports",
          "Cross-browser test results",
          "Test Summary Report"
        ],
        estimatedHours: 8
      },
      days: [
        {
          day: "Thứ 2",
          title: "Web Testing Fundamentals",
          totalHours: 4,
          motivationalQuote: "🌐 Web là nền tảng của hầu hết applications. Bạn đang học cách test thế giới web!",
          dailyGoals: [
            "✅ Hiểu Web Testing là gì",
            "✅ Nắm các aspects của Web Testing",
            "✅ Test UI elements",
            "✅ Test user interactions"
          ],
          morning: {
            title: "Sáng (1.5h)",
            content: [
              "Web Testing overview",
              "UI Testing: Layout, Colors, Fonts, Images",
              "Functionality Testing: Links, Buttons, Forms",
              "Usability Testing: Navigation, User experience"
            ],
            concepts: [
              "Web Testing: Test web applications trên browsers",
              "UI Testing: Test giao diện người dùng",
              "Functionality Testing: Test chức năng hoạt động",
              "Usability Testing: Test trải nghiệm người dùng",
              "Responsive Testing: Test trên các screen sizes"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice UI Testing",
            content: [
              "Test UI elements trên một website",
              "Check layout, colors, fonts",
              "Test buttons và links",
              "Document UI issues"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (2h): UI Testing",
                duration: "2h",
                tasks: [
                  "Chọn 1 website (Amazon, eBay, etc.)",
                  "Test UI: Layout, Colors, Fonts, Spacing",
                  "Test buttons: Hover, Click, Disabled states",
                  "Test links: Internal, External, Broken links",
                  "Document tất cả UI issues"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (0.5h): UI Testing Checklist",
            content: [
              "Tạo UI Testing checklist",
              "Review findings",
              "Chuẩn bị cho ngày mai"
            ],
            exercises: [
              {
                title: "CHECKLIST (30 phút)",
                duration: "30 phút",
                tasks: [
                  "Create UI Testing checklist",
                  "Review UI issues found",
                  "Categorize issues",
                  "Prepare for form testing"
                ]
              }
            ]
          }
        },
        {
          day: "Thứ 3",
          title: "Form Testing",
          totalHours: 4,
          motivationalQuote: "📝 Forms là nơi users tương tác nhiều nhất. Bạn đang học cách test forms một cách toàn diện!",
          dailyGoals: [
            "✅ Test form validations",
            "✅ Test input fields",
            "✅ Test form submission",
            "✅ Test error messages"
          ],
          morning: {
            title: "Sáng (1.5h)",
            content: [
              "Form Testing overview",
              "Input field testing: Text, Email, Password, Number, Date",
              "Validation testing: Required, Format, Length, Range",
              "Error message testing",
              "Form submission testing"
            ],
            concepts: [
              "Form Testing: Test tất cả aspects của forms",
              "Validation: Kiểm tra input đúng format",
              "Error Messages: Phải clear và helpful",
              "Form Submission: Test với valid và invalid data",
              "Auto-fill và browser autocomplete"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice Form Testing",
            content: [
              "Test Registration form",
              "Test Login form",
              "Test Contact form",
              "Document form issues"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (2h): Form Testing",
                duration: "2h",
                tasks: [
                  "Test Registration form: All fields, Validations, Error messages",
                  "Test Login form: Valid/Invalid credentials, Remember me",
                  "Test Contact form: Required fields, Email format, Message length",
                  "Test form submission với valid và invalid data",
                  "Document tất cả issues"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (0.5h): Form Testing Best Practices",
            content: [
              "Review form testing checklist",
              "Document best practices",
              "Chuẩn bị cho ngày mai"
            ],
            exercises: [
              {
                title: "REVIEW (30 phút)",
                duration: "30 phút",
                tasks: [
                  "Review form testing results",
                  "Create form testing checklist",
                  "Document best practices",
                  "Prepare for navigation testing"
                ]
              }
            ]
          }
        },
        {
          day: "Thứ 4",
          title: "Navigation & Page Flow Testing",
          totalHours: 4,
          motivationalQuote: "🧭 Navigation tốt là key của user experience. Bạn đang học cách test navigation flows!",
          dailyGoals: [
            "✅ Test website navigation",
            "✅ Test page flows",
            "✅ Test breadcrumbs và menus",
            "✅ Test back/forward buttons"
          ],
          morning: {
            title: "Sáng (1.5h)",
            content: [
              "Navigation Testing overview",
              "Menu testing: Main menu, Sub-menu, Dropdown",
              "Breadcrumb testing",
              "Page flow testing",
              "Browser navigation: Back, Forward, Refresh"
            ],
            concepts: [
              "Navigation: Cách users di chuyển trong website",
              "Page Flow: Sequence of pages users visit",
              "Breadcrumbs: Show current location",
              "Menu: Navigation structure",
              "Browser Navigation: Back, Forward, History"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice Navigation Testing",
            content: [
              "Test main navigation",
              "Test page flows",
              "Test breadcrumbs",
              "Test browser navigation"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (2h): Navigation Testing",
                duration: "2h",
                tasks: [
                  "Test main menu: All links work, Active state, Hover effects",
                  "Test page flows: Home -> Product -> Cart -> Checkout",
                  "Test breadcrumbs: Display correctly, Links work",
                  "Test browser: Back button, Forward button, Direct URL access",
                  "Document navigation issues"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (0.5h): Navigation Checklist",
            content: [
              "Create navigation testing checklist",
              "Review findings",
              "Chuẩn bị cho cross-browser testing"
            ],
            exercises: [
              {
                title: "CHECKLIST (30 phút)",
                duration: "30 phút",
                tasks: [
                  "Create navigation testing checklist",
                  "Review navigation issues",
                  "Document best practices",
                  "Prepare for cross-browser testing"
                ]
              }
            ]
          }
        },
        {
          day: "Thứ 5",
          title: "Cross-Browser Testing",
          totalHours: 4,
          motivationalQuote: "🌍 Users dùng nhiều browsers khác nhau. Bạn đang học cách đảm bảo compatibility!",
          dailyGoals: [
            "✅ Hiểu Cross-Browser Testing",
            "✅ Test trên Chrome, Firefox, Safari, Edge",
            "✅ Identify browser-specific issues",
            "✅ Document cross-browser results"
          ],
          morning: {
            title: "Sáng (1.5h)",
            content: [
              "Cross-Browser Testing overview",
              "Browser differences: Rendering, JavaScript, CSS",
              "Popular browsers: Chrome, Firefox, Safari, Edge",
              "Browser testing strategy",
              "Tools: BrowserStack, CrossBrowserTesting (optional)"
            ],
            concepts: [
              "Cross-Browser Testing: Test trên nhiều browsers",
              "Browser Compatibility: App hoạt động giống nhau trên mọi browser",
              "Rendering Differences: Browsers render HTML/CSS khác nhau",
              "JavaScript Compatibility: Một số features không support trên old browsers",
              "Mobile Browsers: Safari iOS, Chrome Android"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice Cross-Browser Testing",
            content: [
              "Test website trên Chrome",
              "Test trên Firefox",
              "Test trên Safari",
              "Compare results",
              "Document differences"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (2h): Cross-Browser Testing",
                duration: "2h",
                tasks: [
                  "Test Login feature trên Chrome",
                  "Test Login feature trên Firefox",
                  "Test Login feature trên Safari",
                  "Compare: UI, Functionality, Performance",
                  "Document browser-specific issues",
                  "Create comparison table"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (0.5h): Cross-Browser Report",
            content: [
              "Create cross-browser test report",
              "Document compatibility issues",
              "Chuẩn bị project"
            ],
            exercises: [
              {
                title: "REPORT (30 phút)",
                duration: "30 phút",
                tasks: [
                  "Create cross-browser test report",
                  "Document compatibility matrix",
                  "List browser-specific issues",
                  "Prepare for weekend project"
                ]
              }
            ]
          }
        },
        createWeekendDay("Thứ 6", "Weekend Project - E-commerce Web Testing", {
          dailyGoals: [
            "✅ Complete web testing cho E-commerce site",
            "✅ Test UI, Forms, Navigation",
            "✅ Cross-browser testing",
            "✅ Create comprehensive report"
          ],
          morning: {
            title: "Sáng (4h): UI & Form Testing",
            content: [
              "Test UI elements",
              "Test all forms",
              "Document issues"
            ],
            exercises: [
              {
                title: "PROJECT PHASE 1 (4h)",
                duration: "4h",
                tasks: [
                  "Test UI: Layout, Colors, Fonts, Buttons, Links",
                  "Test Registration form: All validations",
                  "Test Login form",
                  "Test Search form",
                  "Test Checkout form",
                  "Document tất cả UI và form issues"
                ]
              }
            ]
          },
          afternoon: {
            title: "Chiều (4h): Navigation & Cross-Browser",
            content: [
              "Test navigation flows",
              "Cross-browser testing",
              "Compare results"
            ],
            exercises: [
              {
                title: "PROJECT PHASE 2 (4h)",
                duration: "4h",
                tasks: [
                  "Test navigation: Menu, Breadcrumbs, Page flows",
                  "Test trên Chrome, Firefox, Safari",
                  "Compare results across browsers",
                  "Document browser-specific issues",
                  "Test responsive design (mobile view)"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (4h): Test Report",
            content: [
              "Create comprehensive test report",
              "Document all findings",
              "Create recommendations"
            ],
            exercises: [
              {
                title: "PROJECT PHASE 3 (4h)",
                duration: "4h",
                tasks: [
                  "Create comprehensive Web Testing Report",
                  "Include: UI issues, Form issues, Navigation issues, Cross-browser issues",
                  "Create compatibility matrix",
                  "Write recommendations",
                  "Prepare presentation"
                ]
              }
            ]
          }
        })
      ]
    },
    {
      week: 5,
      title: "MOBILE TESTING - iOS & Android",
      goals: [
        "Master Mobile Testing fundamentals",
        "Test trên iOS và Android devices",
        "Test mobile-specific features",
        "Test responsive design",
        "Test mobile apps vs mobile web"
      ],
      metrics: {
        mouseUsage: "N/A",
        shortcutsLearned: 0,
        comfortLevel: "8/10"
      },
      finalProject: {
        title: "Complete Mobile Testing cho Mobile App",
        description: "Thực hiện testing hoàn chỉnh cho một mobile app, bao gồm functionality, UI, và mobile-specific features",
        requirements: [
          "Test trên iOS device",
          "Test trên Android device",
          "Test mobile-specific features",
          "Test responsive design",
          "Create mobile test report"
        ],
        deliverables: [
          "Mobile Test Cases",
          "Bug reports",
          "iOS vs Android comparison",
          "Mobile Test Report"
        ],
        estimatedHours: 8
      },
      days: [
        {
          day: "Thứ 2",
          title: "Mobile Testing Fundamentals",
          totalHours: 4,
          motivationalQuote: "📱 Mobile là tương lai. Bạn đang học cách test trên platform quan trọng nhất!",
          dailyGoals: [
            "✅ Hiểu Mobile Testing",
            "✅ Phân biệt Native App vs Mobile Web",
            "✅ Nắm mobile testing challenges",
            "✅ Setup mobile testing environment"
          ],
          morning: {
            title: "Sáng (1.5h)",
            content: [
              "Mobile Testing overview",
              "Native App vs Mobile Web vs Hybrid App",
              "iOS vs Android differences",
              "Mobile testing challenges: Screen sizes, OS versions, Devices"
            ],
            concepts: [
              "Mobile Testing: Test trên mobile devices",
              "Native App: App được build cho specific platform",
              "Mobile Web: Website optimized cho mobile",
              "Hybrid App: Combination of native và web",
              "Fragmentation: Nhiều devices, OS versions, screen sizes"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Mobile Testing Setup",
            content: [
              "Setup iOS testing (iPhone/iPad)",
              "Setup Android testing (Phone/Tablet)",
              "Install test apps",
              "Practice basic testing"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (2h): Mobile Setup & Basic Testing",
                duration: "2h",
                tasks: [
                  "Setup iOS device (hoặc simulator)",
                  "Setup Android device (hoặc emulator)",
                  "Install test app trên cả 2 platforms",
                  "Test basic functionality: Launch, Navigation, Basic features",
                  "Document setup process"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (0.5h): Mobile Testing Checklist",
            content: [
              "Create mobile testing checklist",
              "Review setup",
              "Chuẩn bị cho ngày mai"
            ],
            exercises: [
              {
                title: "CHECKLIST (30 phút)",
                duration: "30 phút",
                tasks: [
                  "Create mobile testing checklist",
                  "Review setup process",
                  "Document device info",
                  "Prepare for UI testing"
                ]
              }
            ]
          }
        },
        {
          day: "Thứ 3",
          title: "Mobile UI & Functionality Testing",
          totalHours: 4,
          motivationalQuote: "🎨 Mobile UI khác biệt với desktop. Bạn đang học cách test mobile user experience!",
          dailyGoals: [
            "✅ Test mobile UI elements",
            "✅ Test touch interactions",
            "✅ Test mobile navigation",
            "✅ Test responsive design"
          ],
          morning: {
            title: "Sáng (1.5h)",
            content: [
              "Mobile UI Testing: Layout, Buttons, Icons, Typography",
              "Touch interactions: Tap, Swipe, Pinch, Long press",
              "Mobile navigation: Bottom nav, Hamburger menu, Gestures",
              "Responsive design: Portrait, Landscape, Different screen sizes"
            ],
            concepts: [
              "Mobile UI: Optimized cho small screens",
              "Touch Targets: Phải đủ lớn (min 44x44px)",
              "Gestures: Swipe, Pinch, Long press",
              "Navigation: Bottom navigation, Drawer menu",
              "Responsive: Adapt to different screen sizes"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice Mobile UI Testing",
            content: [
              "Test mobile UI trên iOS",
              "Test mobile UI trên Android",
              "Test touch interactions",
              "Test responsive design"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (2h): Mobile UI Testing",
                duration: "2h",
                tasks: [
                  "Test UI trên iOS: Layout, Buttons, Icons, Colors",
                  "Test UI trên Android: Compare với iOS",
                  "Test touch: Tap, Swipe, Pinch, Long press",
                  "Test navigation: Bottom nav, Menu, Back button",
                  "Test responsive: Portrait, Landscape, Different devices",
                  "Document UI issues"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (0.5h): Mobile UI Best Practices",
            content: [
              "Review mobile UI testing",
              "Document best practices",
              "Chuẩn bị cho mobile-specific features"
            ],
            exercises: [
              {
                title: "REVIEW (30 phút)",
                duration: "30 phút",
                tasks: [
                  "Review mobile UI test results",
                  "Document best practices",
                  "Create mobile UI checklist",
                  "Prepare for mobile-specific features"
                ]
              }
            ]
          }
        },
        {
          day: "Thứ 4",
          title: "Mobile-Specific Features Testing",
          totalHours: 4,
          motivationalQuote: "📲 Mobile có nhiều features đặc biệt. Bạn đang học cách test những features này!",
          dailyGoals: [
            "✅ Test device features: Camera, GPS, Notifications",
            "✅ Test app lifecycle: Background, Foreground, Kill",
            "✅ Test network conditions",
            "✅ Test interruptions"
          ],
          morning: {
            title: "Sáng (1.5h)",
            content: [
              "Device features: Camera, GPS, Contacts, Calendar, Notifications",
              "App lifecycle: Launch, Background, Foreground, Kill",
              "Network conditions: WiFi, 4G, 3G, Offline",
              "Interruptions: Calls, Messages, Notifications, Low battery"
            ],
            concepts: [
              "Device Features: Hardware features apps có thể sử dụng",
              "App Lifecycle: States của app (Active, Background, Terminated)",
              "Network Conditions: Different network speeds và connectivity",
              "Interruptions: Events có thể interrupt app usage",
              "Permissions: Apps cần permission để access device features"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice Mobile Features Testing",
            content: [
              "Test device features",
              "Test app lifecycle",
              "Test network conditions",
              "Test interruptions"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (2h): Mobile Features Testing",
                duration: "2h",
                tasks: [
                  "Test Camera: Take photo, Select from gallery",
                  "Test GPS: Location services, Maps integration",
                  "Test Notifications: Push notifications, In-app notifications",
                  "Test App Lifecycle: Background, Foreground, Kill app",
                  "Test Network: WiFi, 4G, Offline mode",
                  "Test Interruptions: Incoming call, Message, Low battery",
                  "Document issues"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (0.5h): Mobile Features Checklist",
            content: [
              "Create mobile features checklist",
              "Review findings",
              "Chuẩn bị cho performance testing"
            ],
            exercises: [
              {
                title: "CHECKLIST (30 phút)",
                duration: "30 phút",
                tasks: [
                  "Create mobile features testing checklist",
                  "Review mobile features issues",
                  "Document best practices",
                  "Prepare for performance testing"
                ]
              }
            ]
          }
        },
        {
          day: "Thứ 5",
          title: "Mobile Performance & Compatibility",
          totalHours: 4,
          motivationalQuote: "⚡ Performance là key của mobile experience. Bạn đang học cách test performance!",
          dailyGoals: [
            "✅ Test mobile app performance",
            "✅ Test trên different devices",
            "✅ Test trên different OS versions",
            "✅ Test battery usage"
          ],
          morning: {
            title: "Sáng (1.5h)",
            content: [
              "Mobile Performance Testing: Load time, Response time, Battery usage",
              "Device compatibility: Different devices, Screen sizes, Hardware",
              "OS compatibility: Different iOS và Android versions",
              "Performance metrics: Memory usage, CPU usage, Network usage"
            ],
            concepts: [
              "Performance: App phải nhanh và responsive",
              "Load Time: Thời gian app launch",
              "Response Time: Thời gian respond to user actions",
              "Battery Usage: App không nên drain battery quá nhanh",
              "Compatibility: App hoạt động trên nhiều devices và OS versions"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice Performance Testing",
            content: [
              "Test app performance",
              "Test trên different devices",
              "Test trên different OS versions",
              "Measure metrics"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (2h): Mobile Performance Testing",
                duration: "2h",
                tasks: [
                  "Test Load Time: Measure app launch time",
                  "Test Response Time: Measure time to respond to taps",
                  "Test trên 2-3 different devices",
                  "Test trên different OS versions (iOS 15, 16, 17)",
                  "Test Battery Usage: Monitor battery drain",
                  "Test Memory Usage: Check memory consumption",
                  "Document performance issues"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (0.5h): Performance Report",
            content: [
              "Create performance test report",
              "Document compatibility matrix",
              "Chuẩn bị project"
            ],
            exercises: [
              {
                title: "REPORT (30 phút)",
                duration: "30 phút",
                tasks: [
                  "Create mobile performance report",
                  "Document compatibility matrix",
                  "List performance issues",
                  "Prepare for weekend project"
                ]
              }
            ]
          }
        },
        createWeekendDay("Thứ 6", "Weekend Project - Complete Mobile Testing", {
          dailyGoals: [
            "✅ Complete mobile testing cho app",
            "✅ Test trên iOS và Android",
            "✅ Test all mobile features",
            "✅ Create comprehensive report"
          ],
          morning: {
            title: "Sáng (4h): UI & Functionality",
            content: [
              "Test mobile UI",
              "Test functionality",
              "Test navigation"
            ],
            exercises: [
              {
                title: "PROJECT PHASE 1 (4h)",
                duration: "4h",
                tasks: [
                  "Test UI trên iOS: Layout, Buttons, Icons, Colors",
                  "Test UI trên Android: Compare với iOS",
                  "Test functionality: All features work correctly",
                  "Test navigation: Menu, Back button, Gestures",
                  "Document UI và functionality issues"
                ]
              }
            ]
          },
          afternoon: {
            title: "Chiều (4h): Mobile Features & Performance",
            content: [
              "Test mobile-specific features",
              "Test performance",
              "Test compatibility"
            ],
            exercises: [
              {
                title: "PROJECT PHASE 2 (4h)",
                duration: "4h",
                tasks: [
                  "Test device features: Camera, GPS, Notifications",
                  "Test app lifecycle: Background, Foreground",
                  "Test network conditions: WiFi, 4G, Offline",
                  "Test performance: Load time, Response time, Battery",
                  "Test compatibility: Different devices, OS versions",
                  "Document all issues"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (4h): Test Report",
            content: [
              "Create comprehensive mobile test report",
              "Document all findings",
              "Create recommendations"
            ],
            exercises: [
              {
                title: "PROJECT PHASE 3 (4h)",
                duration: "4h",
                tasks: [
                  "Create comprehensive Mobile Testing Report",
                  "Include: UI issues, Functionality issues, Features issues, Performance issues",
                  "Create compatibility matrix: iOS vs Android",
                  "Create device compatibility matrix",
                  "Write recommendations",
                  "Prepare presentation"
                ]
              }
            ]
          }
        })
      ]
    },
    {
      week: 6,
      title: "API TESTING - Postman & REST",
      goals: [
        "Master API Testing fundamentals",
        "Sử dụng Postman để test APIs",
        "Test REST APIs",
        "Test API responses và status codes",
        "Test API authentication"
      ],
      metrics: {
        mouseUsage: "N/A",
        shortcutsLearned: 0,
        comfortLevel: "8/10"
      },
      finalProject: {
        title: "Complete API Testing cho REST API",
        description: "Thực hiện testing hoàn chỉnh cho một REST API, sử dụng Postman",
        requirements: [
          "Setup Postman",
          "Test tất cả API endpoints",
          "Test với different request methods",
          "Test authentication",
          "Create API test collection"
        ],
        deliverables: [
          "Postman collection",
          "API Test Cases",
          "API Test Report",
          "API documentation"
        ],
        estimatedHours: 8
      },
      days: [
        {
          day: "Thứ 2",
          title: "API Testing Fundamentals",
          totalHours: 4,
          motivationalQuote: "🔌 APIs là backbone của modern applications. Bạn đang học cách test APIs!",
          dailyGoals: [
            "✅ Hiểu API Testing",
            "✅ Nắm REST API concepts",
            "✅ Setup Postman",
            "✅ Test first API request"
          ],
          morning: {
            title: "Sáng (1.5h)",
            content: [
              "API Testing overview",
              "REST API: GET, POST, PUT, DELETE",
              "HTTP Status Codes: 200, 201, 400, 401, 404, 500",
              "Request và Response structure",
              "Postman introduction"
            ],
            concepts: [
              "API: Application Programming Interface",
              "REST: Representational State Transfer",
              "HTTP Methods: GET (read), POST (create), PUT (update), DELETE (remove)",
              "Status Codes: 2xx (success), 4xx (client error), 5xx (server error)",
              "Request: URL, Method, Headers, Body",
              "Response: Status, Headers, Body"
            ],
            detailedSetup: [
              "Bước 1: Download và install Postman",
              "Bước 2: Create Postman account (free)",
              "Bước 3: Explore Postman interface",
              "Bước 4: Create first request",
              "Bước 5: Send request và view response"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice với Postman",
            content: [
              "Setup Postman",
              "Create GET request",
              "Create POST request",
              "View responses",
              "Test với public APIs"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (2h): Postman Basics",
                duration: "2h",
                tasks: [
                  "Install và setup Postman",
                  "Test GET request: https://jsonplaceholder.typicode.com/posts",
                  "Test GET với ID: /posts/1",
                  "Test POST request: Create new post",
                  "View responses: Status, Headers, Body",
                  "Practice với different status codes"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (0.5h): API Testing Checklist",
            content: [
              "Create API testing checklist",
              "Review Postman basics",
              "Chuẩn bị cho advanced testing"
            ],
            exercises: [
              {
                title: "CHECKLIST (30 phút)",
                duration: "30 phút",
                tasks: [
                  "Create API testing checklist",
                  "Review Postman interface",
                  "Document useful features",
                  "Prepare for request methods"
                ]
              }
            ]
          }
        },
        {
          day: "Thứ 3",
          title: "API Request Methods & Parameters",
          totalHours: 4,
          motivationalQuote: "📡 Mỗi HTTP method có mục đích riêng. Bạn đang học cách sử dụng đúng method!",
          dailyGoals: [
            "✅ Master GET, POST, PUT, DELETE",
            "✅ Test với query parameters",
            "✅ Test với path parameters",
            "✅ Test request body"
          ],
          morning: {
            title: "Sáng (1.5h)",
            content: [
              "GET: Retrieve data, Query parameters",
              "POST: Create data, Request body",
              "PUT: Update data, Request body",
              "DELETE: Remove data",
              "Path parameters vs Query parameters"
            ],
            concepts: [
              "GET: Read data, không modify data",
              "POST: Create new resource",
              "PUT: Update existing resource (full update)",
              "PATCH: Partial update",
              "DELETE: Remove resource",
              "Query Parameters: ?key=value",
              "Path Parameters: /users/{id}"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice Request Methods",
            content: [
              "Test GET với query parameters",
              "Test POST với request body",
              "Test PUT với request body",
              "Test DELETE",
              "Test path parameters"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (2h): All Request Methods",
                duration: "2h",
                tasks: [
                  "Test GET: /users?page=1&limit=10",
                  "Test GET: /users/{id}",
                  "Test POST: Create user với JSON body",
                  "Test PUT: Update user với JSON body",
                  "Test DELETE: /users/{id}",
                  "Test với different data types: String, Number, Boolean, Array",
                  "Document all requests"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (0.5h): Request Methods Review",
            content: [
              "Review request methods",
              "Document best practices",
              "Chuẩn bị cho authentication"
            ],
            exercises: [
              {
                title: "REVIEW (30 phút)",
                duration: "30 phút",
                tasks: [
                  "Review all request methods",
                  "Document when to use each method",
                  "Create request methods checklist",
                  "Prepare for authentication"
                ]
              }
            ]
          }
        },
        {
          day: "Thứ 4",
          title: "API Authentication & Headers",
          totalHours: 4,
          motivationalQuote: "🔐 Authentication bảo vệ APIs. Bạn đang học cách test security!",
          dailyGoals: [
            "✅ Hiểu API Authentication",
            "✅ Test với API Keys",
            "✅ Test với Bearer Token",
            "✅ Test với Headers"
          ],
          morning: {
            title: "Sáng (1.5h)",
            content: [
              "API Authentication: API Key, Bearer Token, Basic Auth",
              "Headers: Authorization, Content-Type, Accept",
              "Token-based authentication",
              "Testing authenticated endpoints"
            ],
            concepts: [
              "Authentication: Verify user identity",
              "API Key: Simple authentication method",
              "Bearer Token: Token-based authentication (JWT)",
              "Headers: Additional information in request",
              "Authorization Header: Bearer {token}",
              "Content-Type: application/json"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice API Authentication",
            content: [
              "Test với API Key",
              "Test với Bearer Token",
              "Test authenticated endpoints",
              "Test invalid authentication"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (2h): API Authentication",
                duration: "2h",
                tasks: [
                  "Get API key từ test API service",
                  "Test với API Key trong header",
                  "Get Bearer Token (login API)",
                  "Test với Bearer Token trong Authorization header",
                  "Test authenticated endpoints: GET /users/me",
                  "Test invalid token: Wrong token, Expired token",
                  "Test missing authentication",
                  "Document authentication issues"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (0.5h): Authentication Best Practices",
            content: [
              "Review authentication testing",
              "Document best practices",
              "Chuẩn bị cho response validation"
            ],
            exercises: [
              {
                title: "REVIEW (30 phút)",
                duration: "30 phút",
                tasks: [
                  "Review authentication testing",
                  "Document authentication best practices",
                  "Create authentication checklist",
                  "Prepare for response validation"
                ]
              }
            ]
          }
        },
        {
          day: "Thứ 5",
          title: "API Response Validation & Collections",
          totalHours: 4,
          motivationalQuote: "✅ Validation đảm bảo API hoạt động đúng. Bạn đang học cách validate responses!",
          dailyGoals: [
            "✅ Validate API responses",
            "✅ Test status codes",
            "✅ Test response structure",
            "✅ Create Postman Collections"
          ],
          morning: {
            title: "Sáng (1.5h)",
            content: [
              "Response Validation: Status code, Response body, Headers",
              "JSON structure validation",
              "Status code validation: Expected vs Actual",
              "Postman Collections: Organize requests",
              "Postman Environments: Variables"
            ],
            concepts: [
              "Response Validation: Verify response đúng format và data",
              "Status Code: 200 (OK), 201 (Created), 400 (Bad Request), 404 (Not Found)",
              "JSON Validation: Structure, Data types, Required fields",
              "Collections: Group related requests",
              "Environments: Variables cho different environments (Dev, QA, Prod)"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice Response Validation",
            content: [
              "Validate responses",
              "Create Postman Collection",
              "Setup Postman Environment",
              "Test với variables"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (2h): Response Validation & Collections",
                duration: "2h",
                tasks: [
                  "Validate responses: Status code, JSON structure, Data",
                  "Test status codes: 200, 201, 400, 401, 404, 500",
                  "Create Postman Collection: User Management APIs",
                  "Add all requests to collection",
                  "Setup Environment: base_url, token",
                  "Use variables trong requests",
                  "Test collection",
                  "Document validation issues"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (0.5h): Collection Review",
            content: [
              "Review Postman Collection",
              "Document collection structure",
              "Chuẩn bị project"
            ],
            exercises: [
              {
                title: "REVIEW (30 phút)",
                duration: "30 phút",
                tasks: [
                  "Review Postman Collection",
                  "Check collection organization",
                  "Document collection structure",
                  "Prepare for weekend project"
                ]
              }
            ]
          }
        },
        createWeekendDay("Thứ 6", "Weekend Project - Complete API Testing", {
          dailyGoals: [
            "✅ Complete API testing cho REST API",
            "✅ Test all endpoints",
            "✅ Test authentication",
            "✅ Create comprehensive collection"
          ],
          morning: {
            title: "Sáng (4h): API Testing",
            content: [
              "Test all API endpoints",
              "Test with different methods",
              "Test authentication"
            ],
            exercises: [
              {
                title: "PROJECT PHASE 1 (4h)",
                duration: "4h",
                tasks: [
                  "Identify all API endpoints",
                  "Test GET endpoints: With và without parameters",
                  "Test POST endpoints: Create resources",
                  "Test PUT endpoints: Update resources",
                  "Test DELETE endpoints: Remove resources",
                  "Test authentication: API Key, Bearer Token",
                  "Document all API tests"
                ]
              }
            ]
          },
          afternoon: {
            title: "Chiều (4h): Response Validation & Collection",
            content: [
              "Validate all responses",
              "Create Postman Collection",
              "Setup Environment"
            ],
            exercises: [
              {
                title: "PROJECT PHASE 2 (4h)",
                duration: "4h",
                tasks: [
                  "Validate all responses: Status codes, JSON structure, Data",
                  "Test error responses: 400, 401, 404, 500",
                  "Create comprehensive Postman Collection",
                  "Organize requests by modules",
                  "Setup Environment với variables",
                  "Add descriptions cho requests",
                  "Test collection"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (4h): API Test Report",
            content: [
              "Create API test report",
              "Document all findings",
              "Create API documentation"
            ],
            exercises: [
              {
                title: "PROJECT PHASE 3 (4h)",
                duration: "4h",
                tasks: [
                  "Create comprehensive API Test Report",
                  "Include: Test results, Status codes, Response validation, Authentication issues",
                  "Document API endpoints",
                  "Create API test cases document",
                  "Export Postman Collection",
                  "Write recommendations",
                  "Prepare presentation"
                ]
              }
            ]
          }
        })
      ]
    },
    {
      week: 7,
      title: "DATABASE & SQL FOR TESTING",
      goals: [
        "Hiểu Database và SQL cơ bản",
        "Viết SQL queries để verify data",
        "Test data integrity",
        "Test database operations",
        "Sử dụng SQL trong testing"
      ],
      metrics: {
        mouseUsage: "N/A",
        shortcutsLearned: 0,
        comfortLevel: "7/10"
      },
      finalProject: {
        title: "Database Testing cho User Management",
        description: "Sử dụng SQL để test database operations cho User Management system",
        requirements: [
          "Setup database connection",
          "Write SQL queries để verify data",
          "Test CRUD operations",
          "Test data integrity",
          "Create database test report"
        ],
        deliverables: [
          "SQL queries",
          "Database test cases",
          "Data verification results",
          "Database test report"
        ],
        estimatedHours: 8
      },
      days: [
        {
          day: "Thứ 2",
          title: "SQL Basics for Testing",
          totalHours: 4,
          motivationalQuote: "💾 Database là nơi lưu trữ data. Bạn đang học cách verify data trong database!",
          dailyGoals: [
            "✅ Hiểu Database và SQL",
            "✅ Nắm SQL syntax cơ bản",
            "✅ Viết SELECT queries",
            "✅ Filter và sort data"
          ],
          morning: {
            title: "Sáng (1.5h)",
            content: [
              "Database overview: Tables, Rows, Columns",
              "SQL basics: SELECT, FROM, WHERE",
              "Filtering: WHERE clause, Operators (=, >, <, LIKE)",
              "Sorting: ORDER BY",
              "Limiting: LIMIT"
            ],
            concepts: [
              "Database: Lưu trữ data",
              "Table: Collection of data",
              "Row: Một record",
              "Column: Một field",
              "SQL: Ngôn ngữ để query database",
              "SELECT: Retrieve data",
              "WHERE: Filter data"
            ],
            codeBlocks: [
              `-- Basic SELECT
SELECT * FROM users;

-- SELECT specific columns
SELECT id, name, email FROM users;

-- Filter với WHERE
SELECT * FROM users WHERE status = 'active';

-- Sort với ORDER BY
SELECT * FROM users ORDER BY created_at DESC;

-- Limit results
SELECT * FROM users LIMIT 10;`
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice SQL Queries",
            content: [
              "Setup database (MySQL/PostgreSQL)",
              "Practice SELECT queries",
              "Practice WHERE clause",
              "Practice ORDER BY và LIMIT"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (2h): SQL Basics",
                duration: "2h",
                tasks: [
                  "Setup database (use online SQL playground nếu không có local DB)",
                  "Create sample table: users",
                  "Insert sample data",
                  "Practice SELECT: All users, Specific columns",
                  "Practice WHERE: Active users, Users by email",
                  "Practice ORDER BY: Sort by name, Sort by date",
                  "Practice LIMIT: First 5 users, Last 10 users"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (0.5h): SQL Review",
            content: [
              "Review SQL basics",
              "Document SQL queries",
              "Chuẩn bị cho advanced queries"
            ],
            exercises: [
              {
                title: "REVIEW (30 phút)",
                duration: "30 phút",
                tasks: [
                  "Review SQL basics",
                  "Document useful queries",
                  "Create SQL cheat sheet",
                  "Prepare for JOINs"
                ]
              }
            ]
          }
        },
        {
          day: "Thứ 3",
          title: "SQL Joins & Aggregations",
          totalHours: 4,
          motivationalQuote: "🔗 JOINs giúp bạn combine data từ nhiều tables. Bạn đang học cách query phức tạp hơn!",
          dailyGoals: [
            "✅ Hiểu JOINs",
            "✅ Sử dụng INNER JOIN, LEFT JOIN",
            "✅ Sử dụng aggregate functions",
            "✅ Group data"
          ],
          morning: {
            title: "Sáng (1.5h)",
            content: [
              "JOINs: INNER JOIN, LEFT JOIN, RIGHT JOIN",
              "Aggregate functions: COUNT, SUM, AVG, MAX, MIN",
              "GROUP BY: Group data",
              "HAVING: Filter grouped data"
            ],
            concepts: [
              "JOIN: Combine data từ nhiều tables",
              "INNER JOIN: Chỉ rows match trong cả 2 tables",
              "LEFT JOIN: Tất cả rows từ left table",
              "Aggregate: Tính toán trên nhiều rows",
              "GROUP BY: Group rows by column value",
              "HAVING: Filter sau khi group"
            ],
            codeBlocks: [
              `-- INNER JOIN
SELECT u.name, o.order_id, o.total
FROM users u
INNER JOIN orders o ON u.id = o.user_id;

-- LEFT JOIN
SELECT u.name, COUNT(o.order_id) as order_count
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
GROUP BY u.id;

-- Aggregate functions
SELECT 
  COUNT(*) as total_users,
  AVG(age) as avg_age,
  MAX(created_at) as latest_user
FROM users;`
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice JOINs & Aggregations",
            content: [
              "Practice INNER JOIN",
              "Practice LEFT JOIN",
              "Practice aggregate functions",
              "Practice GROUP BY"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (2h): JOINs & Aggregations",
                duration: "2h",
                tasks: [
                  "Create tables: users, orders, order_items",
                  "Insert sample data",
                  "Practice INNER JOIN: Users với Orders",
                  "Practice LEFT JOIN: Users với Orders (include users without orders)",
                  "Practice COUNT: Count orders per user",
                  "Practice SUM: Total order amount per user",
                  "Practice GROUP BY: Group by user, Group by status",
                  "Practice HAVING: Users with > 5 orders"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (0.5h): JOINs Review",
            content: [
              "Review JOINs và aggregations",
              "Document complex queries",
              "Chuẩn bị cho data verification"
            ],
            exercises: [
              {
                title: "REVIEW (30 phút)",
                duration: "30 phút",
                tasks: [
                  "Review JOINs và aggregations",
                  "Document useful query patterns",
                  "Create JOINs cheat sheet",
                  "Prepare for data verification"
                ]
              }
            ]
          }
        },
        {
          day: "Thứ 4",
          title: "Data Verification trong Testing",
          totalHours: 4,
          motivationalQuote: "✅ Verify data đảm bảo system hoạt động đúng. Bạn đang học cách test data integrity!",
          dailyGoals: [
            "✅ Verify data sau khi create",
            "✅ Verify data sau khi update",
            "✅ Verify data sau khi delete",
            "✅ Test data integrity"
          ],
          morning: {
            title: "Sáng (1.5h)",
            content: [
              "Data Verification: Verify data trong database sau khi test",
              "Verify CREATE: Check new record được insert",
              "Verify UPDATE: Check data được update đúng",
              "Verify DELETE: Check record được delete",
              "Data Integrity: Foreign keys, Constraints, Validations"
            ],
            concepts: [
              "Data Verification: Verify data trong DB match với expected",
              "After CREATE: Check new record exists với đúng data",
              "After UPDATE: Check record được update với đúng values",
              "After DELETE: Check record không còn trong DB",
              "Data Integrity: Data consistent và valid",
              "Foreign Keys: Relationships giữa tables"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice Data Verification",
            content: [
              "Test CREATE operation",
              "Verify data trong database",
              "Test UPDATE operation",
              "Verify updated data",
              "Test DELETE operation",
              "Verify deletion"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (2h): Data Verification",
                duration: "2h",
                tasks: [
                  "Test CREATE user: Create user qua UI/API",
                  "Verify trong DB: SELECT * FROM users WHERE email = 'test@example.com'",
                  "Check all fields: name, email, status, created_at",
                  "Test UPDATE user: Update user info",
                  "Verify trong DB: SELECT * FROM users WHERE id = 1",
                  "Check updated fields",
                  "Test DELETE user: Delete user",
                  "Verify trong DB: SELECT * FROM users WHERE id = 1 (should return empty)",
                  "Test data integrity: Check foreign keys, Check constraints"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (0.5h): Data Verification Checklist",
            content: [
              "Create data verification checklist",
              "Document verification queries",
              "Chuẩn bị cho CRUD testing"
            ],
            exercises: [
              {
                title: "CHECKLIST (30 phút)",
                duration: "30 phút",
                tasks: [
                  "Create data verification checklist",
                  "Document verification queries",
                  "Create query templates",
                  "Prepare for CRUD testing"
                ]
              }
            ]
          }
        },
        {
          day: "Thứ 5",
          title: "Database Testing cho CRUD Operations",
          totalHours: 4,
          motivationalQuote: "🔄 CRUD là core của mọi application. Bạn đang học cách test database operations!",
          dailyGoals: [
            "✅ Test CREATE operations",
            "✅ Test READ operations",
            "✅ Test UPDATE operations",
            "✅ Test DELETE operations"
          ],
          morning: {
            title: "Sáng (1.5h)",
            content: [
              "CRUD Testing: Create, Read, Update, Delete",
              "Test CREATE: Insert new records",
              "Test READ: Retrieve data",
              "Test UPDATE: Modify existing records",
              "Test DELETE: Remove records"
            ],
            concepts: [
              "CRUD: Create, Read, Update, Delete",
              "CREATE: Insert new record vào database",
              "READ: Retrieve data từ database",
              "UPDATE: Modify existing record",
              "DELETE: Remove record từ database",
              "Test each operation và verify trong database"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice CRUD Testing",
            content: [
              "Test CREATE user",
              "Verify trong database",
              "Test READ user",
              "Test UPDATE user",
              "Verify update",
              "Test DELETE user",
              "Verify deletion"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (2h): CRUD Testing",
                duration: "2h",
                tasks: [
                  "Test CREATE: Create user qua API/UI",
                  "Verify: SELECT * FROM users WHERE email = 'new@example.com'",
                  "Test READ: Get user details",
                  "Verify: Compare API response với DB data",
                  "Test UPDATE: Update user name, email",
                  "Verify: SELECT * FROM users WHERE id = 1",
                  "Check updated fields",
                  "Test DELETE: Delete user",
                  "Verify: SELECT * FROM users WHERE id = 1 (empty)",
                  "Test edge cases: Duplicate email, Invalid data, Null values"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (0.5h): CRUD Testing Review",
            content: [
              "Review CRUD testing",
              "Document test cases",
              "Chuẩn bị project"
            ],
            exercises: [
              {
                title: "REVIEW (30 phút)",
                duration: "30 phút",
                tasks: [
                  "Review CRUD testing",
                  "Document CRUD test cases",
                  "Create CRUD testing checklist",
                  "Prepare for weekend project"
                ]
              }
            ]
          }
        },
        createWeekendDay("Thứ 6", "Weekend Project - Database Testing", {
          dailyGoals: [
            "✅ Complete database testing",
            "✅ Test all CRUD operations",
            "✅ Verify data integrity",
            "✅ Create database test report"
          ],
          morning: {
            title: "Sáng (4h): CRUD Testing",
            content: [
              "Test all CRUD operations",
              "Verify data trong database"
            ],
            exercises: [
              {
                title: "PROJECT PHASE 1 (4h)",
                duration: "4h",
                tasks: [
                  "Test CREATE: Create users, orders, products",
                  "Verify trong DB: Check all fields, Check relationships",
                  "Test READ: Retrieve users, orders, products",
                  "Verify: Compare với DB data",
                  "Test UPDATE: Update users, orders, products",
                  "Verify: Check updated fields",
                  "Test DELETE: Delete records",
                  "Verify: Check deletion, Check cascade deletes"
                ]
              }
            ]
          },
          afternoon: {
            title: "Chiều (4h): Data Integrity & Advanced Queries",
            content: [
              "Test data integrity",
              "Test with complex queries",
              "Test relationships"
            ],
            exercises: [
              {
                title: "PROJECT PHASE 2 (4h)",
                duration: "4h",
                tasks: [
                  "Test Foreign Keys: Create order với invalid user_id",
                  "Test Constraints: Unique email, Not null fields",
                  "Test Relationships: Users -> Orders -> Order Items",
                  "Write complex queries: Users với order count, Total sales per user",
                  "Test Data Integrity: Orphan records, Inconsistent data",
                  "Document all findings"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (4h): Database Test Report",
            content: [
              "Create database test report",
              "Document all findings",
              "Create SQL queries document"
            ],
            exercises: [
              {
                title: "PROJECT PHASE 3 (4h)",
                duration: "4h",
                tasks: [
                  "Create comprehensive Database Test Report",
                  "Include: CRUD test results, Data verification results, Data integrity issues",
                  "Document all SQL queries used",
                  "Create SQL queries reference document",
                  "Write recommendations",
                  "Prepare presentation"
                ]
              }
            ]
          }
        })
      ]
    },
    {
      week: 8,
      title: "REAL PROJECT & SOFT SKILLS",
      goals: [
        "Áp dụng tất cả kiến thức vào real project",
        "Phát triển soft skills",
        "Communication với team",
        "Time management",
        "Prepare cho job interview"
      ],
      metrics: {
        mouseUsage: "N/A",
        shortcutsLearned: 0,
        comfortLevel: "10/10"
      },
      finalProject: {
        title: "Complete Testing cho Real Application",
        description: "Thực hiện testing hoàn chỉnh cho một real application, áp dụng tất cả kiến thức đã học",
        requirements: [
          "Complete test planning",
          "Execute comprehensive testing",
          "Report bugs và communicate với team",
          "Create final test report",
          "Present results"
        ],
        deliverables: [
          "Complete Test Plan",
          "Test Execution results",
          "Bug reports",
          "Final Test Summary Report",
          "Presentation"
        ],
        estimatedHours: 20
      },
      days: [
        {
          day: "Thứ 2",
          title: "Real Project - Test Planning",
          totalHours: 4,
          motivationalQuote: "🎯 Planning tốt là 50% thành công. Bạn đang apply tất cả kiến thức vào real project!",
          dailyGoals: [
            "✅ Analyze real application requirements",
            "✅ Create comprehensive Test Plan",
            "✅ Design Test Cases",
            "✅ Prepare test environment"
          ],
          morning: {
            title: "Sáng (1.5h)",
            content: [
              "Select real application để test (có thể là open source project)",
              "Analyze requirements",
              "Identify test scenarios",
              "Create Test Plan"
            ],
            concepts: [
              "Real Project: Apply kiến thức vào thực tế",
              "Requirements Analysis: Hiểu rõ application cần test gì",
              "Test Planning: Plan testing approach",
              "Test Scenarios: Identify what to test",
              "Test Environment: Setup môi trường test"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Test Case Design",
            content: [
              "Design comprehensive Test Cases",
              "Apply test design techniques",
              "Create RTM",
              "Prepare test data"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (2h): Test Planning & Design",
                duration: "2h",
                tasks: [
                  "Create Test Plan document",
                  "Design Test Cases: Functional, UI, API, Database",
                  "Apply EP, BVA, Decision Table, State Transition",
                  "Create RTM",
                  "Prepare test data",
                  "Setup test environment"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (0.5h): Planning Review",
            content: [
              "Review Test Plan",
              "Review Test Cases",
              "Chuẩn bị cho execution"
            ],
            exercises: [
              {
                title: "REVIEW (30 phút)",
                duration: "30 phút",
                tasks: [
                  "Review Test Plan",
                  "Review Test Cases",
                  "Check completeness",
                  "Prepare for test execution"
                ]
              }
            ]
          }
        },
        {
          day: "Thứ 3",
          title: "Real Project - Test Execution",
          totalHours: 4,
          motivationalQuote: "▶️ Execution là nơi bạn apply tất cả skills. Bạn đang test như một professional!",
          dailyGoals: [
            "✅ Execute Test Cases",
            "✅ Log bugs",
            "✅ Document results",
            "✅ Track progress"
          ],
          morning: {
            title: "Sáng (1.5h)",
            content: [
              "Start test execution",
              "Execute Test Cases systematically",
              "Document results",
              "Log bugs"
            ],
            concepts: [
              "Test Execution: Chạy Test Cases",
              "Systematic: Theo thứ tự, không bỏ sót",
              "Documentation: Ghi lại tất cả results",
              "Bug Logging: Report bugs ngay khi tìm thấy",
              "Progress Tracking: Track execution progress"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Continue Execution",
            content: [
              "Continue test execution",
              "Execute more Test Cases",
              "Log more bugs",
              "Update test status"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (3.5h): Test Execution",
                duration: "3.5h",
                tasks: [
                  "Execute Test Cases: Functional, UI, API",
                  "Document results: Pass/Fail/Blocked",
                  "Log bugs trong Jira/Bug tracking tool",
                  "Add screenshots và detailed steps",
                  "Update Test Cases status",
                  "Track execution progress",
                  "Retest fixed bugs"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (0.5h): Execution Review",
            content: [
              "Review execution progress",
              "Analyze results",
              "Chuẩn bị cho reporting"
            ],
            exercises: [
              {
                title: "REVIEW (30 phút)",
                duration: "30 phút",
                tasks: [
                  "Review execution progress",
                  "Calculate metrics: Pass rate, Coverage",
                  "Analyze bug patterns",
                  "Prepare for reporting"
                ]
              }
            ]
          }
        },
        {
          day: "Thứ 4",
          title: "Soft Skills - Communication",
          totalHours: 4,
          motivationalQuote: "💬 Communication tốt là key của thành công. Bạn đang phát triển kỹ năng quan trọng!",
          dailyGoals: [
            "✅ Hiểu tầm quan trọng của communication",
            "✅ Practice writing clear bug reports",
            "✅ Practice communicating với Dev team",
            "✅ Practice presenting test results"
          ],
          morning: {
            title: "Sáng (1.5h)",
            content: [
              "Communication trong Testing",
              "Writing clear bug reports",
              "Communicating với Developers",
              "Presenting test results",
              "Handling conflicts"
            ],
            concepts: [
              "Communication: Key skill của Tester",
              "Clear Bug Reports: Developers hiểu và fix nhanh",
              "Professional Tone: Respectful và constructive",
              "Presenting Results: Clear và concise",
              "Conflict Resolution: Handle disagreements professionally"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice Communication",
            content: [
              "Practice writing bug reports",
              "Practice email communication",
              "Practice presenting",
              "Role play với Dev team"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (2h): Communication Practice",
                duration: "2h",
                tasks: [
                  "Write 3 bug reports với different styles: Good, Bad, Excellent",
                  "Compare và identify improvements",
                  "Write email to Dev team về critical bug",
                  "Practice presenting test results (5 min presentation)",
                  "Role play: Tester vs Developer discussion",
                  "Practice handling: 'It works on my machine' situation"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (0.5h): Communication Review",
            content: [
              "Review communication practice",
              "Document best practices",
              "Chuẩn bị cho time management"
            ],
            exercises: [
              {
                title: "REVIEW (30 phút)",
                duration: "30 phút",
                tasks: [
                  "Review communication practice",
                  "Document communication best practices",
                  "Create communication checklist",
                  "Prepare for time management"
                ]
              }
            ]
          }
        },
        {
          day: "Thứ 5",
          title: "Soft Skills - Time Management & Interview Prep",
          totalHours: 4,
          motivationalQuote: "⏰ Time management giúp bạn làm việc hiệu quả. Bạn đang chuẩn bị cho career!",
          dailyGoals: [
            "✅ Hiểu time management trong Testing",
            "✅ Prioritize testing tasks",
            "✅ Prepare cho job interview",
            "✅ Create testing portfolio"
          ],
          morning: {
            title: "Sáng (1.5h)",
            content: [
              "Time Management trong Testing",
              "Prioritizing test cases",
              "Estimating test effort",
              "Job Interview preparation",
              "Common interview questions"
            ],
            concepts: [
              "Time Management: Plan và prioritize tasks",
              "Test Prioritization: Test critical features first",
              "Effort Estimation: Estimate time cho testing",
              "Interview Prep: Prepare cho job interviews",
              "Portfolio: Showcase testing skills"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Interview Prep & Portfolio",
            content: [
              "Practice interview questions",
              "Create testing portfolio",
              "Prepare resume",
              "Practice mock interview"
            ],
            exercises: [
              {
                title: "BÀI TẬP 1 (2h): Interview Prep",
                duration: "2h",
                tasks: [
                  "Research common testing interview questions",
                  "Prepare answers cho: Testing process, Bug lifecycle, Test design techniques",
                  "Create testing portfolio: Test Plans, Test Cases, Bug Reports",
                  "Update resume với testing skills",
                  "Practice mock interview với friend/mentor",
                  "Prepare questions để hỏi interviewer"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (0.5h): Final Preparation",
            content: [
              "Review interview prep",
              "Finalize portfolio",
              "Chuẩn bị final project presentation"
            ],
            exercises: [
              {
                title: "REVIEW (30 phút)",
                duration: "30 phút",
                tasks: [
                  "Review interview prep",
                  "Finalize portfolio",
                  "Prepare final project presentation",
                  "Prepare for weekend final project"
                ]
              }
            ]
          }
        },
        createWeekendDay("Thứ 6", "Final Project - Complete Testing & Presentation", {
          dailyGoals: [
            "✅ Complete final testing project",
            "✅ Create comprehensive test report",
            "✅ Prepare presentation",
            "✅ Celebrate achievement!"
          ],
          morning: {
            title: "Sáng (4h): Final Testing",
            content: [
              "Complete remaining test execution",
              "Final bug verification",
              "Complete test documentation"
            ],
            exercises: [
              {
                title: "FINAL PROJECT PHASE 1 (4h)",
                duration: "4h",
                tasks: [
                  "Complete remaining test execution",
                  "Retest all fixed bugs",
                  "Final verification: All critical features tested",
                  "Complete test documentation",
                  "Update all test results"
                ]
              }
            ]
          },
          afternoon: {
            title: "Chiều (4h): Final Report & Analysis",
            content: [
              "Create final test summary report",
              "Analyze test results",
              "Calculate final metrics",
              "Write recommendations"
            ],
            exercises: [
              {
                title: "FINAL PROJECT PHASE 2 (4h)",
                duration: "4h",
                tasks: [
                  "Create comprehensive Final Test Summary Report",
                  "Include: Test execution summary, Bug summary, Metrics, Coverage",
                  "Analyze: Pass rate, Bug distribution, Areas of concern",
                  "Calculate: Test coverage, Defect density, Test efficiency",
                  "Write: Summary, Findings, Recommendations, Next steps",
                  "Create visualizations: Charts, Graphs, Metrics dashboard"
                ]
              }
            ]
          },
          evening: {
            title: "Tối (4h): Presentation & Celebration",
            content: [
              "Prepare final presentation",
              "Practice presentation",
              "Celebrate 8 weeks achievement!",
              "Plan next steps"
            ],
            exercises: [
              {
                title: "FINAL PROJECT PHASE 3 (4h)",
                duration: "4h",
                tasks: [
                  "Prepare final presentation: Overview, Test approach, Results, Learnings",
                  "Practice presentation (10-15 minutes)",
                  "Create presentation slides",
                  "Prepare Q&A answers",
                  "Celebrate 8 weeks of learning!",
                  "Reflect on journey",
                  "Plan next steps: Job search, Advanced courses, Certifications",
                  "Share achievements với community"
                ]
              }
            ]
          }
        })
      ]
    }
  ],
  finalChecklist: [
    "Hiểu rõ vai trò và tầm quan trọng của Testing",
    "Nắm vững SDLC và STLC",
    "Viết Test Cases đúng format và chất lượng",
    "Master Test Design Techniques (EP, BVA, Decision Table, State Transition)",
    "Sử dụng Bug Tracking Tools (Jira)",
    "Thực hiện Test Execution và Reporting",
    "Test Web Applications (UI, Forms, Navigation, Cross-browser)",
    "Test Mobile Applications (iOS, Android, Features, Performance)",
    "Test APIs (REST, Postman, Authentication, Response Validation)",
    "Sử dụng SQL để verify data trong database",
    "Áp dụng tất cả kiến thức vào real project",
    "Phát triển soft skills (Communication, Time Management)",
    "Chuẩn bị cho job interview"
  ],
  proTips: {
    ifStuck: [
      "Quay lại basics, đọc lại concepts",
      "Tìm ví dụ thực tế để hiểu rõ hơn",
      "Practice với examples đơn giản trước",
      "Hỏi mentor hoặc tham gia testing community",
      "Watch video tutorials",
      "Join testing forums và groups"
    ],
    ifTooHard: [
      "Chia nhỏ thành các bước nhỏ hơn",
      "Focus vào 1 topic tại một thời điểm",
      "Practice nhiều hơn với examples",
      "Tìm thêm resources và tutorials",
      "Take breaks và không căng thẳng",
      "Celebrate small wins"
    ],
    ifTooEasy: [
      "Thử với scenarios phức tạp hơn",
      "Kết hợp nhiều kỹ thuật cùng lúc",
      "Tối ưu Test Cases để giảm số lượng",
      "Mentor người khác để reinforce kiến thức",
      "Explore advanced topics: Automation, Performance Testing",
      "Contribute to open source testing projects"
    ]
  }
};

