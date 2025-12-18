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
            content: [
              "Giới thiệu Software Testing: Giải thích testing là gì, tại sao sản phẩm phần mềm luôn có lỗi dù được developer giỏi viết code, testing giúp giảm rủi ro như thế nào.",
              "Vai trò Tester trong team: Mô tả cụ thể nhiệm vụ hằng ngày của Manual Tester (đọc yêu cầu, phân tích, viết test case, thực thi test, report bug, trao đổi với Dev/PO).",
              "Tầm quan trọng của Testing trong SDLC: Làm rõ Testing nằm ở những giai đoạn nào của vòng đời phát triển phần mềm, nếu thiếu testing thì chuyện gì có thể xảy ra với người dùng/doanh nghiệp."
            ],
            concepts: [
              "Testing là gì? → Là quá trình có kế hoạch nhằm đánh giá xem phần mềm có hoạt động đúng với yêu cầu, phát hiện lỗi (bug), rủi ro và điểm chưa phù hợp trước khi đến tay người dùng.",
              "QA vs QC: QA (Quality Assurance) là các hoạt động mang tính phòng ngừa lỗi từ sớm (quy trình, tiêu chuẩn, review tài liệu), QC (Quality Control) là hoạt động kiểm tra/phát hiện lỗi trên sản phẩm đã được build (test, review kết quả chạy).",
              "Bug, Defect, Error: Bug/Defect là sự sai khác giữa hành vi thực tế (Actual Result) và hành vi mong đợi (Expected Result); Error thường là sai sót của con người (developer, tester, BA) dẫn đến bug trong phần mềm.",
              "Cost of fixing bug tăng theo thời gian: Cùng một lỗi nếu được phát hiện ở giai đoạn requirement/design thì chi phí sửa rất thấp; nếu lọt đến production sẽ tốn chi phí sửa code, kiểm thử lại, hỗ trợ khách hàng, ảnh hưởng uy tín – đây là lý do cần testing sớm và liên tục.",
              "Tester không chỉ 'bấm bấm click click': Tester cần tư duy phân tích, đặt câu hỏi 'nếu... thì sao?', nhìn sản phẩm từ góc nhìn người dùng, và giao tiếp rõ ràng với team để phòng ngừa và phát hiện lỗi hiệu quả."
            ]
          },
          afternoon: {
            title: "Chiều (2h): Thực hành",
            exercises: [{
              title: "BÀI TẬP: Phân tích Calculator",
              duration: "2h",
              tasks: [
                "Phân tích nhanh yêu cầu của Calculator app: Xác định những chức năng cơ bản mà một ứng dụng máy tính đơn giản cần có (cộng, trừ, nhân, chia, AC/Clear, +/- , %, hiển thị kết quả, xử lý số nhiều chữ số...). Ghi lại thành 5–10 gạch đầu dòng mô tả hành vi mong đợi cho từng chức năng.",
                "Lên danh sách ý tưởng test (test scenarios) cho Calculator: Bao gồm cả trường hợp normal (2 + 3 = 5), boundary (số rất lớn/nhỏ), chia cho 0, nhập nhiều phép toán liên tiếp, bấm liên tục một nút, xóa kết quả rồi tính lại,... Mục tiêu là thấy được Tester không chỉ test 1–2 case đơn giản.",
                "Thực thi test trên Calculator app: Dựa trên các scenarios đã liệt kê, lần lượt thao tác trên ứng dụng, quan sát kỹ UI (màn hình hiển thị), giá trị input, kết quả sau mỗi thao tác. Ghi lại những điểm bất thường, kể cả khi chưa chắc đó là bug hay chỉ là yêu cầu chưa rõ.",
                "Tìm và phân loại ít nhất 3 bug: Với mỗi hành vi không đúng kỳ vọng, xác định rõ đó là bug về logic tính toán, bug về UI/UX (hiển thị, căn lề, font, màu), hay bug về xử lý lỗi (không chặn chia cho 0, không hiện thông báo phù hợp). Mục tiêu: hiểu khái niệm bug/defect qua ví dụ cụ thể.",
                "Viết bug report chi tiết cho từng bug: Mỗi bug cần có các phần: Title (ngắn gọn, rõ vấn đề), Environment (web/mobile, browser, version nếu có), Preconditions (trạng thái ban đầu), Steps to Reproduce (các bước cụ thể, đánh số 1,2,3,...), Expected Result (mô tả rõ ràng), Actual Result (mô tả chính xác những gì thấy), Attachment (screenshot/video nếu có).",
                "Tự review lại bug report: Kiểm tra xem nếu đưa bug report cho 1 developer chưa từng dùng Calculator này, họ có thể hiểu và reproduce được hay không. Nếu còn mơ hồ, chỉnh sửa lại câu chữ cho rõ hơn (đây là kỹ năng cực quan trọng của Manual Tester)."
              ]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{
              title: "REVIEW",
              duration: "30 phút",
              tasks: [
                "Tóm tắt lại bằng lời của chính bạn: Testing là gì, bug/defect là gì, sự khác nhau giữa QA và QC. Viết ngắn gọn 5–7 dòng nhưng phải đúng ý nghĩa.",
                "Xem lại toàn bộ bug report đã viết: kiểm tra lỗi chính tả, câu quá dài hoặc mơ hồ, thiếu thông tin quan trọng. Chọn 1 bug report và cải thiện nó để trở nên ngắn gọn, rõ ràng, dễ hiểu hơn.",
                "Tự đánh giá buổi học: Bạn hiểu bao nhiêu % về Testing Fundamentals (tự chấm trên thang 1–10), còn chỗ nào mơ hồ thì ghi ra 2–3 câu hỏi để hỏi mentor hoặc tìm hiểu thêm vào ngày hôm sau."
              ]
            }]
          }
        }),
        createDay("Thứ 3", "SDLC & STLC", 4, {
          motivationalQuote: "📋 Hiểu quy trình là nền tảng của thành công!",
          dailyGoals: ["✅ Nắm SDLC models", "✅ Hiểu STLC", "✅ So sánh Waterfall vs Agile"],
          morning: {
            title: "Sáng (1.5h): SDLC",
            content: [
              "SDLC overview: Giải thích SDLC (Software Development Life Cycle) là gì - một quy trình có hệ thống để phát triển phần mềm từ ý tưởng ban đầu đến khi release và maintain. Các giai đoạn chính: Requirements, Design, Development, Testing, Deployment, Maintenance. Tester cần hiểu SDLC để biết mình đang ở giai đoạn nào và làm việc phù hợp với team.",
              "Waterfall Model: Mô tả mô hình Waterfall - quy trình tuần tự, mỗi giai đoạn phải hoàn thành trước khi chuyển sang giai đoạn tiếp theo. Ưu điểm: rõ ràng, dễ quản lý; nhược điểm: khó thay đổi yêu cầu, testing đến muộn. Vai trò của Tester trong Waterfall: tham gia từ giai đoạn Design (review), chính thức test ở giai đoạn Testing sau khi Development xong.",
              "V-Model: Giải thích V-Model - mỗi giai đoạn phát triển có một giai đoạn test tương ứng (Unit Test ↔ Unit Design, Integration Test ↔ Integration Design, System Test ↔ System Design, UAT ↔ Requirements). Tester tham gia sớm hơn, test được thiết kế song song với development.",
              "Agile/Scrum: Mô tả Agile là phương pháp linh hoạt, phát triển theo sprint (thường 2-4 tuần), có Daily Standup, Sprint Planning, Sprint Review, Retrospective. Tester trong Agile: tham gia từ đầu sprint, test song song với development, giao tiếp thường xuyên với Dev/PO. Khác biệt chính: thay vì test một lần lớn ở cuối, test liên tục trong mỗi sprint."
            ],
            concepts: [
              "SDLC là gì? → Là vòng đời phát triển phần mềm, bao gồm các giai đoạn từ khi có ý tưởng đến khi sản phẩm được release và maintain. Mỗi giai đoạn có đầu vào, đầu ra và mục tiêu riêng. Testing là một phần quan trọng trong SDLC, không phải là bước cuối cùng mà nên được tích hợp vào từng giai đoạn.",
              "Waterfall Model: Quy trình tuần tự, tuyến tính. Giai đoạn sau chỉ bắt đầu khi giai đoạn trước hoàn thành. Phù hợp với dự án có yêu cầu rõ ràng, ít thay đổi. Trong Waterfall, Tester thường chỉ tham gia ở giai đoạn Testing, dễ dẫn đến phát hiện bug muộn và tốn kém để sửa.",
              "V-Model: Mô hình chữ V, mỗi giai đoạn development có giai đoạn test tương ứng. Test được thiết kế song song với development, giúp phát hiện lỗi sớm hơn. Tester tham gia từ giai đoạn thiết kế để chuẩn bị test cases.",
              "Agile/Scrum: Phương pháp linh hoạt, phát triển theo sprint ngắn (2-4 tuần), có thể thay đổi yêu cầu nhanh chóng. Tester trong Agile làm việc song song với Developer, test liên tục, giao tiếp thường xuyên. Ưu điểm: phản ứng nhanh với thay đổi, phát hiện bug sớm; thách thức: cần tốc độ và khả năng thích ứng cao.",
              "STLC (Software Testing Life Cycle): Là quy trình testing riêng, bao gồm: Requirement Analysis → Test Planning → Test Case Development → Test Environment Setup → Test Execution → Test Cycle Closure. STLC chạy song song hoặc sau SDLC, tùy theo mô hình phát triển."
            ]
          },
          afternoon: {
            title: "Chiều (2h): STLC",
            exercises: [{
              title: "BÀI TẬP: Tạo Test Plan",
              duration: "2h",
              tasks: [
                "Chọn một feature đơn giản để làm bài tập: Ví dụ: Login feature, Registration feature, hoặc Search feature của một website/app. Ghi lại tên feature, mô tả ngắn gọn chức năng chính của feature đó (3-5 dòng).",
                "Phân tích yêu cầu (Requirement Analysis): Đọc kỹ hoặc quan sát feature đã chọn, liệt kê các yêu cầu chức năng (functional requirements) và yêu cầu phi chức năng (non-functional requirements) nếu có. Ví dụ: Login phải có validation, phải có 'Remember me', phải có forgot password link, v.v.",
                "Viết Test Plan document: Tạo một file Word/Google Docs với các phần sau: (1) Test Plan ID và tên, (2) Introduction (giới thiệu feature, mục đích test plan), (3) Test Scope (phạm vi test - test gì, không test gì), (4) Test Objectives (mục tiêu test - ví dụ: verify login với valid/invalid credentials, verify UI elements, verify error messages), (5) Test Strategy (cách tiếp cận test - manual, các loại test sẽ thực hiện), (6) Test Environment (môi trường test - browser, OS, device nếu có), (7) Entry/Exit Criteria (điều kiện bắt đầu/kết thúc test), (8) Schedule (thời gian ước tính - có thể giả lập), (9) Risks & Mitigation (rủi ro và cách giảm thiểu).",
                "Review Test Plan: Đọc lại Test Plan đã viết, kiểm tra xem có đủ thông tin, có rõ ràng không. Tự hỏi: Nếu đưa Test Plan này cho một Tester khác, họ có hiểu và thực hiện được không? Chỉnh sửa các phần còn mơ hồ hoặc thiếu thông tin."
              ]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{
              title: "REVIEW",
              duration: "30 phút",
              tasks: [
                "Tóm tắt lại bằng lời của bạn: SDLC là gì, các mô hình Waterfall/V-Model/Agile khác nhau như thế nào, STLC có những giai đoạn nào. Viết ngắn gọn 7-10 dòng.",
                "Xem lại Test Plan đã viết: Kiểm tra xem có thiếu phần nào quan trọng không (Scope, Objectives, Strategy, Environment). So sánh với template Test Plan chuẩn (có thể tìm trên Google) để học hỏi thêm.",
                "Tự đánh giá: Bạn hiểu bao nhiêu % về SDLC/STLC (1-10), còn câu hỏi gì về quy trình phát triển phần mềm không? Ghi lại 2-3 câu hỏi để tìm hiểu thêm."
              ]
            }]
          }
        }),
        createDay("Thứ 4", "Types & Levels of Testing", 4, {
          motivationalQuote: "🔍 Hiểu các loại Testing giúp test toàn diện!",
          dailyGoals: ["✅ Phân biệt Functional vs Non-functional", "✅ Hiểu Unit, Integration, System, UAT"],
          morning: {
            title: "Sáng (1.5h): Types",
            content: [
              "Functional Testing: Giải thích Functional Testing là test các chức năng của phần mềm - xem phần mềm có làm đúng những gì được yêu cầu không. Ví dụ: test Login có đăng nhập được không, test Search có tìm được kết quả không, test Payment có thanh toán được không. Functional Testing tập trung vào 'WHAT' - phần mềm làm gì. Các kỹ thuật: Equivalence Partitioning, Boundary Value Analysis, Decision Table, State Transition, Use Case Testing.",
              "Non-functional Testing: Mô tả Non-functional Testing là test các thuộc tính chất lượng của phần mềm, không phải chức năng cụ thể. Ví dụ: Performance (tốc độ load, response time), Security (bảo mật, authentication, authorization), Usability (dễ sử dụng, UI/UX), Compatibility (tương thích browser, OS, device), Reliability (độ tin cậy, ít crash), Scalability (khả năng mở rộng). Non-functional tập trung vào 'HOW WELL' - phần mềm hoạt động tốt như thế nào.",
              "Testing Pyramid: Giải thích Testing Pyramid - mô hình kim tự tháp với 3 tầng: Unit Test (đáy - nhiều nhất, test từng function/component nhỏ, thường do Developer viết), Integration Test (giữa - test sự tương tác giữa các component/module), E2E/System Test (đỉnh - ít nhất, test toàn bộ hệ thống từ đầu đến cuối, thường do Manual Tester thực hiện). Ý nghĩa: nên có nhiều test ở tầng dưới (nhanh, rẻ) và ít test ở tầng trên (chậm, đắt)."
            ],
            concepts: [
              "Functional Testing là gì? → Là test các chức năng (features) của phần mềm để đảm bảo chúng hoạt động đúng theo yêu cầu. Functional Testing trả lời câu hỏi: 'Phần mềm có làm được những gì người dùng cần không?' Ví dụ: test Login, test Search, test Add to Cart, test Checkout. Manual Tester thường tập trung vào Functional Testing.",
              "Non-functional Testing là gì? → Là test các thuộc tính chất lượng của phần mềm, không phải chức năng cụ thể. Non-functional Testing trả lời câu hỏi: 'Phần mềm hoạt động tốt như thế nào?' Bao gồm: Performance (tốc độ), Security (bảo mật), Usability (dễ dùng), Compatibility (tương thích), Reliability (tin cậy), Scalability (mở rộng).",
              "Levels of Testing (Các cấp độ test): (1) Unit Testing - test từng đơn vị code nhỏ nhất (function, method), thường do Developer viết; (2) Integration Testing - test sự tương tác giữa các module/component; (3) System Testing - test toàn bộ hệ thống như một thể thống nhất; (4) UAT (User Acceptance Testing) - test bởi end-user hoặc stakeholder để xác nhận phần mềm đáp ứng yêu cầu business. Manual Tester thường làm Integration, System, và hỗ trợ UAT.",
              "Testing Pyramid: Mô hình kim tự tháp thể hiện số lượng test nên có ở mỗi cấp độ. Đáy (Unit Test) - nhiều nhất, nhanh, rẻ; Giữa (Integration Test) - vừa phải; Đỉnh (E2E/System Test) - ít nhất, chậm, đắt. Nguyên tắc: có nhiều test ở tầng dưới để bắt lỗi sớm, giảm số lượng test ở tầng trên để tiết kiệm thời gian và chi phí.",
              "Manual Tester thường làm gì? → Manual Tester chủ yếu thực hiện System Testing và Integration Testing ở mức manual. Họ cũng có thể tham gia UAT, test Non-functional (như Usability, Compatibility cơ bản), và hỗ trợ test Performance/Security ở mức cơ bản. Functional Testing là trọng tâm của Manual Tester."
            ]
          },
          afternoon: {
            title: "Chiều (2h): Levels",
            exercises: [{
              title: "BÀI TẬP: Phân loại Testing",
              duration: "2h",
              tasks: [
                "Chọn một ứng dụng để phân tích: Có thể là website E-commerce, app Mobile, hoặc bất kỳ ứng dụng nào bạn quen thuộc. Ghi lại tên ứng dụng và mô tả ngắn gọn (2-3 dòng) về ứng dụng đó làm gì.",
                "Liệt kê ít nhất 10 loại Testing có thể áp dụng cho ứng dụng đã chọn: Ví dụ: Functional Testing (test chức năng Login, Search, Add to Cart), Performance Testing (test tốc độ load trang), Security Testing (test SQL injection, XSS), Usability Testing (test UI/UX, dễ sử dụng), Compatibility Testing (test trên Chrome, Firefox, Safari), Regression Testing (test lại sau khi có thay đổi), Smoke Testing (test nhanh các chức năng chính), Sanity Testing (test nhanh sau khi fix bug), Integration Testing (test tương tác giữa các module), UAT (test bởi end-user). Với mỗi loại, viết 1-2 dòng mô tả sẽ test như thế nào cho ứng dụng của bạn.",
                "Phân loại các loại Testing đã liệt kê: Chia thành 2 nhóm: (1) Functional Testing - các loại test chức năng; (2) Non-functional Testing - các loại test chất lượng. Sau đó, xác định xem loại nào thuộc cấp độ nào (Unit/Integration/System/UAT) nếu có thể.",
                "Tạo bảng tổng hợp: Tạo một bảng Excel/Google Sheets với các cột: Tên loại Testing, Functional/Non-functional, Level (nếu có), Mô tả ngắn, Ví dụ cụ thể cho ứng dụng của bạn. Bảng này sẽ giúp bạn nhớ và áp dụng sau này.",
                "Tự đánh giá: Xem lại danh sách, kiểm tra xem có thiếu loại Testing quan trọng nào không. Nếu có thể, tìm hiểu thêm về các loại Testing bạn chưa biết (ví dụ: Alpha Testing, Beta Testing, Ad-hoc Testing, Exploratory Testing) và thêm vào danh sách."
              ]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{
              title: "REVIEW",
              duration: "30 phút",
              tasks: [
                "Tóm tắt lại: Functional Testing là gì, Non-functional Testing là gì, 4 cấp độ Testing (Unit, Integration, System, UAT) khác nhau như thế nào. Viết ngắn gọn 8-10 dòng bằng lời của bạn.",
                "Xem lại bảng phân loại đã tạo: Kiểm tra xem phân loại có đúng không, có loại nào bị nhầm lẫn giữa Functional và Non-functional không. Chỉnh sửa nếu cần.",
                "Tự đánh giá: Bạn hiểu bao nhiêu % về Types & Levels of Testing (1-10)? Còn loại Testing nào bạn muốn tìm hiểu sâu hơn không? Ghi lại 2-3 câu hỏi."
              ]
            }]
          }
        }),
        createDay("Thứ 5", "Test Case Design Fundamentals", 4, {
          motivationalQuote: "✍️ Test Case tốt là nền tảng của Testing hiệu quả!",
          dailyGoals: ["✅ Hiểu cấu trúc Test Case", "✅ Viết Test Case đúng format", "✅ Tạo 10+ Test Cases"],
          morning: {
            title: "Sáng (1.5h): Structure",
            content: [
              "Test Case là gì: Giải thích Test Case là một bộ các điều kiện hoặc biến số mà Tester sử dụng để xác định xem một ứng dụng phần mềm có hoạt động đúng như mong đợi hay không. Test Case giúp Tester có kế hoạch test rõ ràng, không bỏ sót, và có thể tái sử dụng. Một Test Case tốt phải: rõ ràng, dễ hiểu, có thể thực thi độc lập, có mục tiêu cụ thể, có thể tái sử dụng.",
              "Cấu trúc Test Case chuẩn: Một Test Case thường bao gồm: (1) Test Case ID - mã định danh duy nhất (ví dụ: TC_LOGIN_001), (2) Test Case Description/Title - mô tả ngắn gọn mục đích test (ví dụ: 'Verify login with valid credentials'), (3) Preconditions - điều kiện cần có trước khi test (ví dụ: User đã được tạo trong hệ thống, đang ở trang Login), (4) Test Steps - các bước thực hiện chi tiết, đánh số 1, 2, 3... (ví dụ: '1. Navigate to login page', '2. Enter username: testuser', '3. Enter password: Test123!', '4. Click Login button'), (5) Test Data - dữ liệu test cụ thể (username, password, v.v.), (6) Expected Result - kết quả mong đợi (ví dụ: 'User is redirected to dashboard page', 'Welcome message displays'), (7) Actual Result - kết quả thực tế (điền khi thực thi), (8) Status - Pass/Fail/Blocked/Not Executed, (9) Priority - High/Medium/Low, (10) Author và Date.",
              "Best practices khi viết Test Case: (1) Mỗi Test Case chỉ test một mục tiêu cụ thể - không gộp nhiều check vào một case, (2) Test Steps phải rõ ràng, chi tiết, ai đọc cũng hiểu và thực hiện được, (3) Sử dụng ngôn ngữ đơn giản, tránh thuật ngữ phức tạp không cần thiết, (4) Test Case phải có thể thực thi độc lập - không phụ thuộc vào thứ tự thực thi, (5) Test Data nên được chuẩn bị sẵn hoặc mô tả rõ cách tạo, (6) Expected Result phải cụ thể, đo lường được - tránh mơ hồ như 'should work correctly', (7) Đặt tên Test Case ID theo quy tắc nhất quán (ví dụ: TC_MODULE_FEATURE_NUMBER), (8) Review Test Case trước khi thực thi để đảm bảo không thiếu sót."
            ],
            concepts: [
              "Test Case là gì? → Là một bộ các điều kiện, bước thực hiện, và kết quả mong đợi để kiểm tra xem một chức năng cụ thể của phần mềm có hoạt động đúng hay không. Test Case giúp Tester có kế hoạch test có hệ thống, không bỏ sót, và có thể tái sử dụng cho các lần test sau.",
              "Cấu trúc Test Case chuẩn bao gồm: Test Case ID (mã định danh), Description (mô tả mục đích), Preconditions (điều kiện ban đầu), Test Steps (các bước thực hiện), Test Data (dữ liệu test), Expected Result (kết quả mong đợi), Actual Result (kết quả thực tế), Status (Pass/Fail), Priority (ưu tiên). Mỗi phần đều quan trọng và cần điền đầy đủ.",
              "Test Steps phải rõ ràng và chi tiết: Mỗi bước phải mô tả cụ thể hành động cần thực hiện (ví dụ: 'Click Login button' thay vì 'Login'), bao gồm cả dữ liệu input nếu có (ví dụ: 'Enter username: testuser'). Test Steps tốt là khi một người khác đọc có thể thực hiện được mà không cần hỏi thêm.",
              "Expected Result phải cụ thể và đo lường được: Thay vì viết 'should work correctly', hãy viết cụ thể như 'User is redirected to dashboard page', 'Success message 'Login successful' is displayed', 'User profile icon appears in top right corner'. Expected Result cụ thể giúp dễ dàng xác định Pass/Fail.",
              "Best practices: (1) Mỗi Test Case chỉ test một mục tiêu - không gộp nhiều check, (2) Test Case phải độc lập - không phụ thuộc vào thứ tự thực thi, (3) Sử dụng ngôn ngữ đơn giản, dễ hiểu, (4) Review Test Case trước khi thực thi, (5) Cập nhật Test Case khi có thay đổi yêu cầu."
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice",
            exercises: [{
              title: "BÀI TẬP: Viết Test Cases",
              duration: "2h",
              tasks: [
                "Viết 10 Test Cases cho Login feature: Sử dụng template Test Case đã học, viết 10 test cases bao gồm: (1) TC_LOGIN_001: Login với valid credentials - Expected: thành công, redirect to dashboard; (2) TC_LOGIN_002: Login với invalid username - Expected: hiển thị error message; (3) TC_LOGIN_003: Login với invalid password - Expected: hiển thị error message; (4) TC_LOGIN_004: Login với empty username - Expected: validation error; (5) TC_LOGIN_005: Login với empty password - Expected: validation error; (6) TC_LOGIN_006: Login với username chứa special characters - Expected: validation error hoặc không cho phép; (7) TC_LOGIN_007: Login với password quá ngắn - Expected: validation error; (8) TC_LOGIN_008: Login với 'Remember me' checked - Expected: lần sau vẫn login được; (9) TC_LOGIN_009: Login với account đã bị lock - Expected: hiển thị message account locked; (10) TC_LOGIN_010: Click 'Forgot Password' link - Expected: redirect to forgot password page. Mỗi test case phải có đầy đủ: ID, Description, Preconditions, Steps (chi tiết), Test Data, Expected Result.",
                "Viết 15 Test Cases cho Registration feature: Tương tự, viết 15 test cases cho chức năng đăng ký, bao gồm: Positive cases (đăng ký thành công với valid data), Negative cases (validation errors cho các field: email không đúng format, password không đủ mạnh, confirm password không khớp, phone number sai format, v.v.), Boundary cases (email quá dài, password đúng minimum length, password đúng maximum length), Edge cases (copy-paste special characters, spaces ở đầu/cuối, v.v.). Mỗi test case phải rõ ràng, có thể thực thi độc lập.",
                "Tổ chức Test Cases: Sắp xếp các test cases theo nhóm: Positive Test Cases, Negative Test Cases, Boundary Test Cases, Edge Cases. Đánh Priority (High/Medium/Low) cho mỗi test case. High Priority thường là các test case cho happy path và các validation quan trọng.",
                "Review Test Cases: Đọc lại tất cả test cases đã viết, kiểm tra: (1) Test Steps có đủ chi tiết không? (2) Expected Result có cụ thể không? (3) Có test case nào trùng lặp không? (4) Có thiếu test case quan trọng nào không? (5) Test Case ID có nhất quán không? Chỉnh sửa các test case còn mơ hồ hoặc thiếu thông tin.",
                "Tạo Test Case Template riêng: Dựa trên những gì đã học, tạo một template Test Case (Excel/Google Sheets) với các cột: Test Case ID, Module, Feature, Description, Preconditions, Test Steps, Test Data, Expected Result, Actual Result, Status, Priority, Author, Date Created, Date Executed. Template này sẽ dùng cho các bài tập sau."
              ]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{
              title: "REVIEW",
              duration: "30 phút",
              tasks: [
                "Tóm tắt lại: Test Case là gì, cấu trúc Test Case gồm những phần nào, best practices khi viết Test Case. Viết ngắn gọn 7-10 dòng bằng lời của bạn.",
                "Xem lại các Test Cases đã viết: Chọn 2-3 test cases và tự hỏi: 'Nếu đưa test case này cho một Tester khác, họ có thể thực hiện được không mà không cần hỏi thêm?' Nếu còn mơ hồ, chỉnh sửa lại cho rõ ràng hơn.",
                "Tự đánh giá: Bạn đã viết được bao nhiêu test cases (mục tiêu là 25 test cases cho Login + Registration)? Chất lượng test cases của bạn như thế nào (tự chấm 1-10)? Còn điều gì cần cải thiện không? Ghi lại 2-3 điểm cần lưu ý cho lần sau."
              ]
            }]
          }
        }),
        createWeekendDay("Thứ 6", "Weekend Project - Calculator Test Plan", {
          dailyGoals: ["✅ Test Plan", "✅ 20+ Test Cases", "✅ Document"],
          morning: {
            exercises: [{
              title: "PHASE 1: Analysis & Planning",
              duration: "4h",
              tasks: [
                "Phân tích yêu cầu của Calculator app: (1) Liệt kê tất cả các chức năng mà Calculator cần có: số học cơ bản (cộng, trừ, nhân, chia), các phép toán đặc biệt (%, +/-), các nút điều khiển (AC/Clear, Delete/Backspace), hiển thị kết quả, xử lý số thập phân, xử lý số âm, xử lý chia cho 0, v.v. (2) Xác định các yêu cầu phi chức năng: UI phải rõ ràng, dễ sử dụng, responsive trên mobile/desktop. (3) Ghi lại thành document 'Requirements Analysis' với ít nhất 15-20 chức năng/điểm cần test.",
                "Tạo Test Plan document cho Calculator: Sử dụng template Test Plan đã học ở Thứ 3, viết một Test Plan đầy đủ bao gồm: (1) Introduction - giới thiệu Calculator app và mục đích test plan, (2) Test Scope - liệt kê những gì sẽ test (tất cả các chức năng số học, UI elements, error handling) và những gì không test (không test trên nhiều browser/device nếu không có yêu cầu), (3) Test Objectives - mục tiêu test: verify tất cả phép toán hoạt động đúng, verify UI hiển thị đúng, verify error handling (chia cho 0, v.v.), (4) Test Strategy - cách tiếp cận: manual testing, test theo chức năng (functional), test UI/UX, test error cases, (5) Test Environment - môi trường test (web browser hoặc mobile app, OS, device nếu có), (6) Entry Criteria - điều kiện bắt đầu test (Calculator app đã được deploy, test environment sẵn sàng), (7) Exit Criteria - điều kiện kết thúc test (tất cả test cases đã được thực thi, tất cả bugs critical/high đã được fix), (8) Test Schedule - ước tính thời gian (có thể giả lập: 2 ngày cho test design, 3 ngày cho test execution), (9) Risks & Mitigation - rủi ro (ví dụ: không có đủ test data, không hiểu rõ yêu cầu) và cách giảm thiểu.",
                "Xác định Test Scenarios chính: Dựa trên requirements đã phân tích, liệt kê các test scenarios chính cần cover: (1) Happy path scenarios: thực hiện các phép toán cơ bản thành công, (2) Boundary scenarios: test với số rất lớn, số rất nhỏ, số thập phân nhiều chữ số, (3) Error scenarios: chia cho 0, nhập ký tự không hợp lệ, (4) UI scenarios: test layout, màu sắc, font chữ, responsive, (5) Edge cases: bấm liên tục một nút, xóa rồi tính lại, nhập nhiều phép toán liên tiếp. Tổng cộng nên có ít nhất 10-15 test scenarios chính."
              ]
            }]
          },
          afternoon: {
            exercises: [{
              title: "PHASE 2: Test Cases",
              duration: "4h",
              tasks: [
                "Viết ít nhất 20+ Test Cases cho Calculator: Sử dụng template Test Case đã học, viết test cases chi tiết cho các scenarios đã xác định. Phân bổ như sau: (1) 5-7 test cases cho phép cộng (số dương, số âm, số thập phân, số lớn), (2) 5-7 test cases cho phép trừ (tương tự), (3) 5-7 test cases cho phép nhân, (4) 5-7 test cases cho phép chia (bao gồm chia cho 0), (5) 3-5 test cases cho các phép toán đặc biệt (%, +/-), (6) 3-5 test cases cho các nút điều khiển (AC, Delete), (7) 3-5 test cases cho UI/UX (hiển thị, layout, responsive). Mỗi test case phải có đầy đủ: Test Case ID (theo format TC_CALC_001, TC_CALC_002...), Description, Preconditions, Test Steps (chi tiết từng bước), Test Data (số cụ thể sẽ nhập), Expected Result (kết quả cụ thể mong đợi).",
                "Tổ chức Test Cases: Sắp xếp test cases theo nhóm chức năng: (1) Addition Test Cases, (2) Subtraction Test Cases, (3) Multiplication Test Cases, (4) Division Test Cases, (5) Special Operations Test Cases (%, +/-), (6) Control Buttons Test Cases (AC, Delete), (7) UI/UX Test Cases. Đánh Priority cho mỗi test case: High (các phép toán cơ bản, error handling), Medium (các phép toán đặc biệt), Low (UI/UX nếu không critical).",
                "Review và cải thiện Test Cases: (1) Đọc lại tất cả test cases, kiểm tra xem Test Steps có đủ chi tiết không - một người khác đọc có thể thực hiện được không? (2) Kiểm tra Expected Result có cụ thể không - có số cụ thể, không mơ hồ? (3) Kiểm tra có test case nào trùng lặp không? (4) Kiểm tra có thiếu test case quan trọng nào không (ví dụ: chia cho 0, số âm, số thập phân)? (5) Kiểm tra Test Case ID có nhất quán không? Chỉnh sửa các test case còn mơ hồ hoặc thiếu thông tin. Mục tiêu: có ít nhất 20 test cases chất lượng cao, rõ ràng, có thể thực thi được."
              ]
            }]
          },
          evening: {
            exercises: [{
              title: "PHASE 3: Documentation",
              duration: "4h",
              tasks: [
                "Hoàn thiện tài liệu Test Plan: Xem lại Test Plan đã viết ở Phase 1, bổ sung thêm các phần còn thiếu: (1) Test Deliverables - danh sách các tài liệu sẽ tạo ra (Test Plan, Test Cases, Test Results, Bug Reports, Test Summary Report), (2) Defect Management - quy trình quản lý bug (sẽ log bug ở đâu, format bug report như thế nào), (3) Test Metrics - các chỉ số sẽ theo dõi (số test cases, số test cases pass/fail, số bugs tìm được, test coverage), (4) Approvals - ai sẽ approve test plan này (có thể giả lập: Team Lead, QA Manager). Đảm bảo Test Plan đầy đủ, chuyên nghiệp, có thể trình bày cho stakeholder.",
                "Tạo Test Case Document: Tổng hợp tất cả test cases đã viết vào một document (Word/Excel/Google Sheets) với format nhất quán. Document nên có: (1) Cover page với tên project, tên document, ngày tạo, tác giả, (2) Table of Contents (nếu có nhiều phần), (3) Test Cases được tổ chức theo nhóm chức năng, (4) Summary table ở cuối: tổng số test cases, số test cases theo priority (High/Medium/Low), số test cases theo module. Đảm bảo document dễ đọc, dễ tìm kiếm.",
                "Chuẩn bị presentation: Tạo một slide deck ngắn (5-7 slides) để trình bày về Test Plan và Test Cases cho Calculator: (1) Slide 1: Giới thiệu Calculator app và mục đích test, (2) Slide 2: Test Scope và Test Objectives, (3) Slide 3: Test Strategy và Test Environment, (4) Slide 4: Test Scenarios chính, (5) Slide 5: Test Cases summary (số lượng, phân bổ theo chức năng, priority), (6) Slide 6: Test Schedule và Risks, (7) Slide 7: Kết luận và next steps. Presentation giúp bạn luyện kỹ năng trình bày, một kỹ năng quan trọng của Tester khi làm việc với team."
              ]
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
            content: [
              "EP (Equivalence Partitioning) là gì: Giải thích EP là kỹ thuật chia tập hợp input thành các nhóm (partitions) mà các giá trị trong cùng một nhóm được kỳ vọng sẽ có hành vi tương tự nhau. Ví dụ: nếu field Age chỉ chấp nhận 18-65, ta có thể chia thành 3 partitions: < 18 (invalid), 18-65 (valid), > 65 (invalid). Thay vì test tất cả các giá trị từ 0 đến 100, ta chỉ cần test 1 giá trị đại diện cho mỗi partition. EP giúp giảm số lượng test cases nhưng vẫn đảm bảo coverage tốt.",
              "Cách chia partitions: (1) Xác định range/điều kiện của input (ví dụ: Age 18-65, Password 8-20 ký tự), (2) Chia thành Valid Partition (các giá trị hợp lệ) và Invalid Partitions (các giá trị không hợp lệ), (3) Với Invalid Partitions, có thể chia nhỏ hơn nếu có nhiều loại invalid khác nhau (ví dụ: quá nhỏ, quá lớn, null, empty, special characters). Nguyên tắc: các giá trị trong cùng partition phải có cùng expected behavior.",
              "Khi nào dùng EP: EP phù hợp khi (1) có nhiều input values có thể test, (2) input có range/điều kiện rõ ràng (ví dụ: số, độ dài, format), (3) muốn giảm số lượng test cases nhưng vẫn cover đủ các trường hợp. EP thường được kết hợp với BVA (Boundary Value Analysis) để test kỹ hơn ở các giá trị biên. EP không phù hợp khi input không có pattern rõ ràng hoặc mỗi giá trị có behavior khác nhau."
            ],
            concepts: [
              "Equivalence Partitioning (EP) là gì? → Là kỹ thuật chia tập hợp input thành các nhóm (partitions) mà các giá trị trong cùng nhóm có cùng expected behavior. Thay vì test tất cả giá trị, ta chỉ test 1 giá trị đại diện cho mỗi partition. EP giúp giảm số lượng test cases nhưng vẫn đảm bảo coverage.",
              "Cách chia partitions: (1) Valid Partition - các giá trị hợp lệ, (2) Invalid Partitions - các giá trị không hợp lệ (có thể chia nhỏ: quá nhỏ, quá lớn, null, empty, sai format). Nguyên tắc: các giá trị trong cùng partition phải có cùng expected behavior. Ví dụ: Age 18-65 → Valid: 25, Invalid: 10 (< 18), Invalid: 70 (> 65).",
              "Chỉ test 1 giá trị mỗi partition: Vì các giá trị trong cùng partition có cùng behavior, ta chỉ cần test 1 giá trị đại diện. Ví dụ: với partition Age 18-65 (valid), ta chỉ cần test 1 giá trị như 25, không cần test 18, 19, 20, ..., 65. Điều này giúp giảm số lượng test cases đáng kể.",
              "Khi nào dùng EP: (1) Khi có nhiều input values có thể test, (2) Input có range/điều kiện rõ ràng (số, độ dài, format), (3) Muốn giảm số lượng test cases nhưng vẫn cover đủ. EP thường kết hợp với BVA để test kỹ hơn ở các giá trị biên.",
              "Lợi ích của EP: (1) Giảm số lượng test cases, tiết kiệm thời gian, (2) Vẫn đảm bảo coverage tốt, (3) Dễ áp dụng, dễ hiểu, (4) Có thể áp dụng cho nhiều loại input khác nhau (số, text, date, v.v.)."
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice EP",
            exercises: [{
              title: "BÀI TẬP: EP Practice",
              duration: "2h",
              tasks: [
                "Xác định partitions cho Age field (18-65): (1) Phân tích yêu cầu: Age chỉ chấp nhận từ 18 đến 65. (2) Chia partitions: Valid Partition (18-65), Invalid Partition 1 (< 18, ví dụ: 0, 10, 17), Invalid Partition 2 (> 65, ví dụ: 66, 70, 100). (3) Chọn giá trị đại diện cho mỗi partition: Valid → 25 (hoặc bất kỳ số nào trong 18-65), Invalid < 18 → 10, Invalid > 65 → 70. (4) Viết test cases: TC_AGE_001: Age = 25 (valid) → Expected: accepted; TC_AGE_002: Age = 10 (invalid < 18) → Expected: validation error; TC_AGE_003: Age = 70 (invalid > 65) → Expected: validation error. Ghi lại partitions và test cases vào document.",
                "Xác định partitions cho Email field: (1) Phân tích yêu cầu: Email phải có format hợp lệ (có @, có domain, v.v.). (2) Chia partitions: Valid Partition (email đúng format, ví dụ: test@example.com), Invalid Partition 1 (không có @, ví dụ: testexample.com), Invalid Partition 2 (không có domain, ví dụ: test@), Invalid Partition 3 (không có local part, ví dụ: @example.com), Invalid Partition 4 (empty/null, ví dụ: ''), Invalid Partition 5 (sai format khác, ví dụ: test@.com, test@@example.com). (3) Chọn giá trị đại diện: Valid → 'test@example.com', Invalid → 'testexample.com' (không có @), 'test@' (không có domain), '@example.com' (không có local part), '' (empty). (4) Viết test cases cho mỗi partition. Ghi lại partitions và test cases.",
                "Xác định partitions cho Password field (8-20 ký tự, phải có chữ hoa, chữ thường, số): (1) Phân tích yêu cầu: Password phải từ 8-20 ký tự, có chữ hoa, chữ thường, số. (2) Chia partitions: Valid Partition (đáp ứng tất cả yêu cầu, ví dụ: 'Password123'), Invalid Partition 1 (< 8 ký tự, ví dụ: 'Pass123'), Invalid Partition 2 (> 20 ký tự, ví dụ: 'VeryLongPassword1234567890'), Invalid Partition 3 (thiếu chữ hoa, ví dụ: 'password123'), Invalid Partition 4 (thiếu chữ thường, ví dụ: 'PASSWORD123'), Invalid Partition 5 (thiếu số, ví dụ: 'Password'), Invalid Partition 6 (empty/null). (3) Chọn giá trị đại diện và viết test cases. Ghi lại partitions và test cases.",
                "Áp dụng EP cho một form thực tế: Chọn một form đăng ký/đăng nhập trên website/app bất kỳ, xác định các field cần test (ví dụ: Username, Email, Password, Phone, Date of Birth). Với mỗi field, áp dụng EP để chia partitions và viết test cases. Tổng hợp thành một bảng: Field Name | Valid Partition | Invalid Partitions | Test Cases. Mục tiêu: có ít nhất 15-20 test cases sử dụng EP.",
                "So sánh số lượng test cases: (1) Tính số lượng test cases nếu test tất cả giá trị có thể (ví dụ: Age từ 0-100 → 101 test cases), (2) Tính số lượng test cases khi dùng EP (ví dụ: Age → 3 test cases), (3) So sánh và ghi nhận sự khác biệt. Điều này giúp bạn thấy rõ lợi ích của EP trong việc giảm số lượng test cases."
              ]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{
              title: "REVIEW",
              duration: "30 phút",
              tasks: [
                "Tóm tắt lại: EP là gì, cách chia partitions như thế nào, khi nào nên dùng EP. Viết ngắn gọn 7-10 dòng bằng lời của bạn.",
                "Xem lại các partitions đã chia: Kiểm tra xem partitions có hợp lý không, có thiếu partition nào không (ví dụ: có quên test empty/null không?). Chỉnh sửa nếu cần.",
                "Tự đánh giá: Bạn đã áp dụng EP thành công cho bao nhiêu fields? Bạn hiểu bao nhiêu % về EP (1-10)? Còn câu hỏi gì về EP không? Ghi lại 2-3 câu hỏi."
              ]
            }]
          }
        }),
        createDay("Thứ 3", "Boundary Value Analysis", 4, {
          motivationalQuote: "📊 BVA tìm được nhiều bugs!",
          dailyGoals: ["✅ Hiểu BVA", "✅ Identify boundaries", "✅ Test min, max, min-1, max+1"],
          morning: {
            title: "Sáng (1.5h): BVA Concepts",
            content: [
              "BVA (Boundary Value Analysis) là gì: Giải thích BVA là kỹ thuật test các giá trị tại biên (boundary) của input range. Lý do: bugs thường xuất hiện ở các giá trị biên (min, max, min-1, max+1) vì đây là nơi logic thay đổi. Ví dụ: nếu Age chấp nhận 18-65, ta cần test: 17 (min-1, invalid), 18 (min, valid), 19 (min+1, valid), 64 (max-1, valid), 65 (max, valid), 66 (max+1, invalid). BVA thường được kết hợp với EP để có coverage tốt hơn.",
              "Boundary values cần test: Với range [min, max], ta test: (1) min-1 (ngay dưới min, invalid), (2) min (giá trị nhỏ nhất hợp lệ, valid), (3) min+1 (ngay trên min, valid), (4) max-1 (ngay dưới max, valid), (5) max (giá trị lớn nhất hợp lệ, valid), (6) max+1 (ngay trên max, invalid). Tổng cộng 6 giá trị. Với range mở (min, max) hoặc đóng một đầu, số lượng giá trị test có thể khác.",
              "Khi nào dùng BVA: BVA phù hợp khi (1) input có range rõ ràng (số, độ dài, date range), (2) muốn tìm bugs ở các giá trị biên (thường là nơi dễ có lỗi logic), (3) kết hợp với EP để có coverage tốt. BVA không phù hợp khi input không có range hoặc range không rõ ràng. BVA thường được dùng cùng EP: EP để giảm số lượng test cases, BVA để test kỹ ở các giá trị biên."
            ],
            concepts: [
              "Boundary Value Analysis (BVA) là gì? → Là kỹ thuật test các giá trị tại biên (boundary) của input range. Lý do: bugs thường xuất hiện ở các giá trị biên vì đây là nơi logic thay đổi. BVA giúp tìm được nhiều bugs hơn so với chỉ test giá trị ở giữa range.",
              "Boundary values cần test: Với range [min, max], test 6 giá trị: min-1 (invalid), min (valid), min+1 (valid), max-1 (valid), max (valid), max+1 (invalid). Ví dụ: Age 18-65 → test 17, 18, 19, 64, 65, 66.",
              "Tại sao test boundary values? → Vì bugs thường xuất hiện ở biên do: (1) Logic thay đổi tại biên (ví dụ: if age >= 18), (2) Developer dễ mắc lỗi khi xử lý biên (ví dụ: dùng > thay vì >=), (3) Off-by-one errors phổ biến ở biên. Test boundary values giúp phát hiện những lỗi này.",
              "BVA kết hợp với EP: EP giúp giảm số lượng test cases bằng cách chia partitions, BVA giúp test kỹ ở các giá trị biên. Kết hợp cả hai: dùng EP để xác định partitions, sau đó dùng BVA để test các giá trị biên của mỗi partition. Điều này vừa giảm số lượng test cases, vừa đảm bảo coverage tốt.",
              "Khi nào dùng BVA: (1) Input có range rõ ràng (số, độ dài, date range), (2) Muốn tìm bugs ở biên, (3) Kết hợp với EP. BVA không phù hợp khi input không có range hoặc range không rõ ràng."
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice BVA",
            exercises: [{
              title: "BÀI TẬP: BVA Practice",
              duration: "2h",
              tasks: [
                "Áp dụng BVA cho Age field (18-65): (1) Xác định boundary values: min = 18, max = 65. (2) Liệt kê 6 giá trị cần test: 17 (min-1, invalid), 18 (min, valid), 19 (min+1, valid), 64 (max-1, valid), 65 (max, valid), 66 (max+1, invalid). (3) Viết test cases chi tiết cho mỗi giá trị: TC_AGE_BVA_001: Age = 17 → Expected: validation error 'Age must be at least 18'; TC_AGE_BVA_002: Age = 18 → Expected: accepted; TC_AGE_BVA_003: Age = 19 → Expected: accepted; TC_AGE_BVA_004: Age = 64 → Expected: accepted; TC_AGE_BVA_005: Age = 65 → Expected: accepted; TC_AGE_BVA_006: Age = 66 → Expected: validation error 'Age must not exceed 65'. (4) Ghi lại test cases vào document. Lưu ý: Expected Result phải cụ thể, không mơ hồ.",
                "Áp dụng BVA cho Password field (8-20 ký tự): (1) Xác định boundary values: min length = 8, max length = 20. (2) Liệt kê 6 giá trị cần test: 7 ký tự (min-1, invalid), 8 ký tự (min, valid), 9 ký tự (min+1, valid), 19 ký tự (max-1, valid), 20 ký tự (max, valid), 21 ký tự (max+1, invalid). (3) Tạo test data cụ thể cho mỗi độ dài: 7 ký tự → 'Pass123', 8 ký tự → 'Pass1234', 9 ký tự → 'Pass12345', 19 ký tự → 'VeryLongPass12345', 20 ký tự → 'VeryLongPass123456', 21 ký tự → 'VeryLongPass1234567'. (4) Viết test cases chi tiết cho mỗi độ dài, đảm bảo password đáp ứng các yêu cầu khác (chữ hoa, chữ thường, số) nếu có. Ghi lại test cases.",
                "Áp dụng BVA cho một field khác: Chọn một field khác từ form (ví dụ: Phone number có độ dài cố định 10 số, hoặc Date range từ 01/01/2000 đến 31/12/2023). Áp dụng BVA để xác định boundary values và viết test cases. Với Date range, boundary values sẽ là: min date - 1 day, min date, min date + 1 day, max date - 1 day, max date, max date + 1 day.",
                "Kết hợp EP và BVA: Chọn một form có nhiều fields (ví dụ: Registration form với Username, Email, Password, Age, Phone). Với mỗi field: (1) Dùng EP để chia partitions, (2) Dùng BVA để test các giá trị biên của mỗi partition. Ví dụ: Age → EP chia thành 3 partitions (< 18, 18-65, > 65), sau đó BVA test boundary của partition 18-65 (17, 18, 19, 64, 65, 66). Tổng hợp thành bảng: Field | Partitions (EP) | Boundary Values (BVA) | Test Cases.",
                "So sánh coverage: (1) Tính số lượng test cases nếu chỉ dùng EP (ví dụ: Age → 3 test cases), (2) Tính số lượng test cases nếu dùng EP + BVA (ví dụ: Age → 6 test cases cho boundary), (3) So sánh và đánh giá: EP + BVA có coverage tốt hơn, tìm được nhiều bugs hơn, nhưng số lượng test cases nhiều hơn một chút. Ghi nhận trade-off này."
              ]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{
              title: "REVIEW",
              duration: "30 phút",
              tasks: [
                "Tóm tắt lại: BVA là gì, boundary values cần test là những giá trị nào, tại sao cần test boundary values. Viết ngắn gọn 7-10 dòng bằng lời của bạn.",
                "Xem lại các boundary values đã xác định: Kiểm tra xem có đủ 6 giá trị không (min-1, min, min+1, max-1, max, max+1)? Có giá trị nào bị thiếu không? Chỉnh sửa nếu cần.",
                "Tự đánh giá: Bạn đã áp dụng BVA thành công cho bao nhiêu fields? Bạn hiểu bao nhiêu % về BVA (1-10)? Bạn có thể giải thích sự khác biệt giữa EP và BVA không? Ghi lại 2-3 câu hỏi nếu còn."
              ]
            }]
          }
        }),
        createDay("Thứ 4", "Decision Table Testing", 4, {
          motivationalQuote: "📋 Decision Table test tất cả combinations!",
          dailyGoals: ["✅ Hiểu Decision Table", "✅ Tạo Decision Table", "✅ Convert thành Test Cases"],
          morning: {
            title: "Sáng (1.5h): Concepts",
            content: [
              "Decision Table là gì: Giải thích Decision Table là một bảng thể hiện các quy tắc nghiệp vụ (business rules) dưới dạng các điều kiện (conditions) và hành động (actions) tương ứng. Decision Table giúp test tất cả các combinations có thể của các điều kiện, đảm bảo không bỏ sót trường hợp nào. Ví dụ: Login với Remember Me có 2 điều kiện (Valid credentials? Yes/No, Remember Me checked? Yes/No) → 4 combinations cần test. Decision Table phù hợp khi có nhiều điều kiện và các điều kiện này kết hợp với nhau tạo ra các hành động khác nhau.",
              "Cấu trúc Decision Table: (1) Conditions (Điều kiện) - các điều kiện đầu vào, mỗi điều kiện có các giá trị Yes/No hoặc True/False, (2) Actions (Hành động) - các hành động/kết quả tương ứng với mỗi combination, (3) Rules (Quy tắc) - mỗi cột trong bảng là một rule, thể hiện một combination cụ thể của các điều kiện và hành động tương ứng. Ví dụ: Condition 1: Valid credentials (Y/N), Condition 2: Remember Me (Y/N) → 4 rules (Y-Y, Y-N, N-Y, N-N).",
              "Khi nào dùng Decision Table: Decision Table phù hợp khi (1) có nhiều điều kiện (conditions) kết hợp với nhau, (2) mỗi combination của điều kiện tạo ra hành động/kết quả khác nhau, (3) muốn đảm bảo test tất cả các combinations có thể, (4) business rules phức tạp, có nhiều nhánh logic. Decision Table không phù hợp khi chỉ có 1-2 điều kiện đơn giản (có thể dùng EP/BVA thay thế)."
            ],
            concepts: [
              "Decision Table là gì? → Là một bảng thể hiện các quy tắc nghiệp vụ dưới dạng các điều kiện (conditions) và hành động (actions) tương ứng. Decision Table giúp test tất cả các combinations có thể của các điều kiện, đảm bảo không bỏ sót trường hợp nào.",
              "Cấu trúc Decision Table: (1) Conditions - các điều kiện đầu vào (ví dụ: Valid credentials? Y/N, Remember Me? Y/N), (2) Actions - các hành động/kết quả (ví dụ: Login successful, Show error, Save cookie), (3) Rules - mỗi cột là một rule, thể hiện một combination cụ thể. Ví dụ: 2 điều kiện, mỗi điều kiện có 2 giá trị → 2^2 = 4 rules.",
              "Tại sao dùng Decision Table? → (1) Đảm bảo test tất cả combinations, không bỏ sót, (2) Dễ hiểu, dễ review với stakeholder, (3) Dễ convert thành test cases, (4) Phù hợp với business rules phức tạp có nhiều điều kiện kết hợp.",
              "Cách tạo Decision Table: (1) Liệt kê tất cả conditions (điều kiện), (2) Xác định các giá trị có thể của mỗi condition (thường là Y/N hoặc True/False), (3) Tính số lượng rules: nếu có n conditions, mỗi condition có 2 giá trị → 2^n rules, (4) Vẽ bảng với conditions ở trên, actions ở dưới, mỗi cột là một rule, (5) Điền Y/N cho mỗi condition trong mỗi rule, (6) Xác định action tương ứng cho mỗi rule.",
              "Convert Decision Table thành Test Cases: Mỗi rule trong Decision Table tương ứng với một test case. Test case sẽ có: (1) Test Case ID, (2) Description (mô tả rule, ví dụ: 'Login with valid credentials and Remember Me checked'), (3) Test Steps (thực hiện các điều kiện của rule), (4) Expected Result (hành động tương ứng của rule)."
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice",
            exercises: [{
              title: "BÀI TẬP: Decision Table",
              duration: "2h",
              tasks: [
                "Tạo Decision Table cho Login với Remember Me: (1) Xác định conditions: Condition 1: Valid credentials? (Y/N), Condition 2: Remember Me checked? (Y/N). (2) Tính số rules: 2 conditions × 2 values = 4 rules. (3) Vẽ bảng với 4 cột (Rule 1-4), điền Y/N cho mỗi condition trong mỗi rule: Rule 1: Valid=Y, RememberMe=Y; Rule 2: Valid=Y, RememberMe=N; Rule 3: Valid=N, RememberMe=Y; Rule 4: Valid=N, RememberMe=N. (4) Xác định actions cho mỗi rule: Rule 1 → Login successful + Save cookie; Rule 2 → Login successful + No cookie; Rule 3 → Show error 'Invalid credentials'; Rule 4 → Show error 'Invalid credentials'. (5) Ghi lại Decision Table vào document.",
                "Tạo Decision Table cho Shipping calculation: (1) Xác định conditions: Condition 1: Order amount >= $100? (Y/N), Condition 2: Is member? (Y/N), Condition 3: Express shipping? (Y/N). (2) Tính số rules: 3 conditions × 2 values = 8 rules. (3) Vẽ bảng với 8 cột, điền Y/N cho mỗi condition. (4) Xác định actions (shipping fee) cho mỗi rule: Ví dụ: Rule 1 (Amount>=100, Member, Express) → Free shipping; Rule 2 (Amount>=100, Member, Standard) → Free shipping; Rule 3 (Amount>=100, Not Member, Express) → $5; Rule 4 (Amount>=100, Not Member, Standard) → Free shipping; Rule 5-8 (Amount<100) → tính tương tự. (5) Ghi lại Decision Table.",
                "Convert Decision Table thành Test Cases: Với Decision Table Login với Remember Me đã tạo, convert mỗi rule thành một test case chi tiết: (1) TC_LOGIN_DT_001: Rule 1 (Valid=Y, RememberMe=Y) → Steps: Enter valid username, Enter valid password, Check 'Remember Me', Click Login; Expected: Login successful, redirect to dashboard, cookie saved. (2) TC_LOGIN_DT_002: Rule 2 (Valid=Y, RememberMe=N) → Steps: Enter valid username, Enter valid password, Don't check 'Remember Me', Click Login; Expected: Login successful, redirect to dashboard, no cookie. (3) TC_LOGIN_DT_003: Rule 3 (Valid=N, RememberMe=Y) → Steps: Enter invalid username/password, Check 'Remember Me', Click Login; Expected: Show error 'Invalid credentials'. (4) TC_LOGIN_DT_004: Rule 4 (Valid=N, RememberMe=N) → Tương tự. Ghi lại tất cả test cases.",
                "Tạo Decision Table cho một tính năng khác: Chọn một tính năng có nhiều điều kiện (ví dụ: Discount calculation dựa trên: Is VIP member? Y/N, Order amount >= $200? Y/N, Use coupon? Y/N). Tạo Decision Table với 3 conditions → 8 rules, xác định actions (discount %) cho mỗi rule, sau đó convert thành test cases. Ghi lại Decision Table và test cases.",
                "Review Decision Tables: Xem lại tất cả Decision Tables đã tạo, kiểm tra: (1) Có đủ tất cả combinations không? (2) Actions có đúng logic business không? (3) Có rule nào không cần thiết hoặc không thể xảy ra không? (4) Test cases đã convert có đầy đủ và rõ ràng không? Chỉnh sửa nếu cần."
              ]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{
              title: "REVIEW",
              duration: "30 phút",
              tasks: [
                "Tóm tắt lại: Decision Table là gì, cấu trúc Decision Table gồm những phần nào, cách tạo Decision Table như thế nào. Viết ngắn gọn 7-10 dòng bằng lời của bạn.",
                "Xem lại các Decision Tables đã tạo: Kiểm tra xem có đủ tất cả combinations không? Có rule nào bị thiếu không? Actions có đúng logic không? Chỉnh sửa nếu cần.",
                "Tự đánh giá: Bạn đã tạo được bao nhiêu Decision Tables? Bạn hiểu bao nhiêu % về Decision Table (1-10)? Bạn có thể giải thích khi nào nên dùng Decision Table không? Ghi lại 2-3 câu hỏi nếu còn."
              ]
            }]
          }
        }),
        createDay("Thứ 5", "State Transition Testing", 4, {
          motivationalQuote: "🔄 State Transition test workflows!",
          dailyGoals: ["✅ Hiểu State Transition", "✅ Vẽ State Diagram", "✅ Identify test cases"],
          morning: {
            title: "Sáng (1.5h): Concepts",
            content: [
              "State Transition là gì: Giải thích State Transition là kỹ thuật test các trạng thái (states) và sự chuyển đổi (transitions) giữa các trạng thái của hệ thống. Một hệ thống có thể ở nhiều trạng thái khác nhau (ví dụ: Order có thể ở trạng thái Pending, Confirmed, Shipped, Delivered, Cancelled), và chuyển từ trạng thái này sang trạng thái khác thông qua các sự kiện (events) hoặc hành động (actions). State Transition Testing giúp test tất cả các đường đi có thể từ trạng thái này sang trạng thái khác, đảm bảo workflow hoạt động đúng.",
              "States, Transitions, Events: (1) State (Trạng thái) - là trạng thái hiện tại của hệ thống/object tại một thời điểm (ví dụ: Order Pending, Order Confirmed, Order Shipped). (2) Transition (Chuyển đổi) - là sự chuyển từ trạng thái này sang trạng thái khác (ví dụ: Pending → Confirmed khi user confirm order). (3) Event (Sự kiện) - là hành động hoặc điều kiện gây ra transition (ví dụ: Click 'Confirm Order' button, Payment successful, Shipment sent). State Diagram là cách biểu diễn trực quan các states và transitions bằng các hình tròn (states) và mũi tên (transitions).",
              "Khi nào dùng State Transition: State Transition phù hợp khi (1) hệ thống có nhiều trạng thái rõ ràng (ví dụ: Order status, User account status, Payment status), (2) có workflow phức tạp với nhiều đường đi giữa các trạng thái, (3) muốn test tất cả các đường đi có thể, (4) muốn test các trường hợp invalid transition (ví dụ: không thể chuyển từ Cancelled về Pending). State Transition không phù hợp khi hệ thống không có trạng thái rõ ràng hoặc workflow quá đơn giản."
            ],
            concepts: [
              "State Transition là gì? → Là kỹ thuật test các trạng thái (states) và sự chuyển đổi (transitions) giữa các trạng thái của hệ thống. State Transition Testing giúp test tất cả các đường đi có thể từ trạng thái này sang trạng thái khác, đảm bảo workflow hoạt động đúng.",
              "State (Trạng thái) là gì? → Là trạng thái hiện tại của hệ thống/object tại một thời điểm. Ví dụ: Order có thể ở trạng thái Pending, Confirmed, Shipped, Delivered, Cancelled. Mỗi state có các thuộc tính và hành vi riêng.",
              "Transition (Chuyển đổi) là gì? → Là sự chuyển từ trạng thái này sang trạng thái khác. Ví dụ: Pending → Confirmed khi user confirm order, Confirmed → Shipped khi admin ship order. Mỗi transition được kích hoạt bởi một event (sự kiện) hoặc action (hành động).",
              "Event (Sự kiện) là gì? → Là hành động hoặc điều kiện gây ra transition. Ví dụ: Click 'Confirm Order' button, Payment successful, Shipment sent, User cancel order. Event có thể là user action, system event, hoặc điều kiện business.",
              "State Diagram: Là cách biểu diễn trực quan các states và transitions bằng các hình tròn (states) và mũi tên (transitions). State Diagram giúp dễ hiểu workflow, dễ xác định test cases, và dễ review với stakeholder. Cách vẽ: (1) Vẽ hình tròn cho mỗi state, (2) Vẽ mũi tên từ state này sang state khác, (3) Ghi event/action trên mũi tên, (4) Xác định initial state (trạng thái ban đầu) và final state (trạng thái kết thúc) nếu có."
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice",
            exercises: [{
              title: "BÀI TẬP: State Transition",
              duration: "2h",
              tasks: [
                "Vẽ State Diagram cho Order status: (1) Xác định các states: Pending (đơn hàng mới tạo, chờ xác nhận), Confirmed (đã xác nhận, chờ ship), Shipped (đã ship, đang giao), Delivered (đã giao thành công), Cancelled (đã hủy). (2) Xác định các transitions và events: Pending → Confirmed (event: Admin confirm order), Confirmed → Shipped (event: Admin ship order), Shipped → Delivered (event: Delivery successful), Pending → Cancelled (event: User/Admin cancel), Confirmed → Cancelled (event: User/Admin cancel before ship). (3) Vẽ State Diagram: Vẽ 5 hình tròn (states), vẽ mũi tên giữa các states với event ghi trên mũi tên. (4) Xác định initial state (Pending) và final states (Delivered, Cancelled). Ghi lại State Diagram vào document.",
                "Xác định test cases từ State Diagram: Với State Diagram Order status đã vẽ, xác định các test cases: (1) Happy path: Pending → Confirmed → Shipped → Delivered (test case cho toàn bộ workflow thành công), (2) Valid transitions: Pending → Confirmed, Confirmed → Shipped, Shipped → Delivered, Pending → Cancelled, Confirmed → Cancelled (test case cho mỗi transition hợp lệ), (3) Invalid transitions: Không thể chuyển từ Delivered về Shipped, không thể chuyển từ Cancelled về Pending, không thể chuyển từ Shipped về Confirmed (test case cho các transition không hợp lệ). Ghi lại tất cả test cases.",
                "Viết test cases chi tiết: Với mỗi test case đã xác định, viết chi tiết: (1) TC_ORDER_ST_001: Happy path Pending → Confirmed → Shipped → Delivered → Steps: Create order (state: Pending), Admin confirm order (state: Confirmed), Admin ship order (state: Shipped), Delivery successful (state: Delivered); Expected: Order chuyển đúng state ở mỗi bước, UI hiển thị đúng status. (2) TC_ORDER_ST_002: Invalid transition Delivered → Shipped → Steps: Order ở state Delivered, Admin cố gắng chuyển về Shipped; Expected: Không cho phép, hiển thị error message. Viết tương tự cho các test cases khác. Ghi lại tất cả test cases.",
                "Tạo State Diagram cho một tính năng khác: Chọn một tính năng có nhiều trạng thái (ví dụ: User account status: Active, Suspended, Deactivated, hoặc Payment status: Pending, Processing, Success, Failed). Vẽ State Diagram với các states, transitions, events. Sau đó xác định và viết test cases. Ghi lại State Diagram và test cases.",
                "Review State Diagrams: Xem lại tất cả State Diagrams đã tạo, kiểm tra: (1) Có đủ tất cả states không? (2) Có đủ tất cả valid transitions không? (3) Có xác định invalid transitions không? (4) Test cases đã cover tất cả transitions chưa? Chỉnh sửa nếu cần."
              ]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{
              title: "REVIEW",
              duration: "30 phút",
              tasks: [
                "Tóm tắt lại: State Transition là gì, State/Transition/Event là gì, cách vẽ State Diagram như thế nào. Viết ngắn gọn 7-10 dòng bằng lời của bạn.",
                "Xem lại các State Diagrams đã vẽ: Kiểm tra xem có đủ tất cả states và transitions không? Có thiếu transition nào không? Chỉnh sửa nếu cần.",
                "Tự đánh giá: Bạn đã vẽ được bao nhiêu State Diagrams? Bạn hiểu bao nhiêu % về State Transition (1-10)? Bạn có thể giải thích sự khác biệt giữa State Transition và Decision Table không? Ghi lại 2-3 câu hỏi nếu còn."
              ]
            }]
          }
        }),
        createWeekendDay("Thứ 6", "Weekend Project - Form Validation Test Design", {
          dailyGoals: ["✅ Apply EP + BVA", "✅ Apply Decision Table", "✅ Apply State Transition"],
          morning: {
            exercises: [{
              title: "PHASE 1: EP + BVA",
              duration: "4h",
              tasks: [
                "Áp dụng EP cho Email, Phone, Age fields: (1) Email field: Chia partitions - Valid (email đúng format, ví dụ: test@example.com), Invalid 1 (không có @, ví dụ: testexample.com), Invalid 2 (không có domain, ví dụ: test@), Invalid 3 (không có local part, ví dụ: @example.com), Invalid 4 (empty/null). Chọn giá trị đại diện cho mỗi partition và viết test cases. (2) Phone field (10 số): Chia partitions - Valid (10 số, ví dụ: 0123456789), Invalid 1 (< 10 số, ví dụ: 123456789), Invalid 2 (> 10 số, ví dụ: 01234567890), Invalid 3 (có ký tự không phải số, ví dụ: 0123abc567), Invalid 4 (empty/null). Chọn giá trị đại diện và viết test cases. (3) Age field (18-65): Chia partitions - Valid (18-65, ví dụ: 25), Invalid 1 (< 18, ví dụ: 10), Invalid 2 (> 65, ví dụ: 70). Chọn giá trị đại diện và viết test cases. Tổng hợp thành bảng: Field | Partitions | Test Cases.",
                "Áp dụng BVA cho boundaries của các fields: (1) Email: Không có range rõ ràng, nhưng có thể test boundary của độ dài nếu có giới hạn (ví dụ: email tối đa 100 ký tự → test 99, 100, 101 ký tự). (2) Phone (10 số): Boundary values - 9 số (min-1, invalid), 10 số (min=max, valid), 11 số (max+1, invalid). Viết test cases cho mỗi boundary value. (3) Age (18-65): Boundary values - 17 (min-1, invalid), 18 (min, valid), 19 (min+1, valid), 64 (max-1, valid), 65 (max, valid), 66 (max+1, invalid). Viết test cases chi tiết cho mỗi boundary value. Tổng hợp thành bảng: Field | Boundary Values | Test Cases.",
                "Kết hợp EP và BVA: Với mỗi field, sử dụng EP để chia partitions, sau đó dùng BVA để test các giá trị biên của partition valid. Ví dụ: Age → EP chia thành 3 partitions (< 18, 18-65, > 65), sau đó BVA test boundary của partition 18-65 (17, 18, 19, 64, 65, 66). Tổng hợp thành document với format: Field | EP Partitions | BVA Boundary Values | Total Test Cases. Mục tiêu: có ít nhất 20-25 test cases sử dụng EP + BVA."
              ]
            }]
          },
          afternoon: {
            exercises: [{
              title: "PHASE 2: Decision Table + State",
              duration: "4h",
              tasks: [
                "Tạo Decision Table cho payment method selection: (1) Xác định conditions: Condition 1: Payment method? (Credit Card / Bank Transfer / Cash on Delivery), Condition 2: Order amount >= $100? (Y/N), Condition 3: Is VIP member? (Y/N). (2) Tính số rules: 3 conditions, nhưng Condition 1 có 3 giá trị → cần xử lý cẩn thận. Có thể tách thành 3 Decision Tables nhỏ hoặc tạo 1 bảng lớn với nhiều rules. (3) Xác định actions (shipping fee, discount) cho mỗi rule. Ví dụ: Credit Card + Amount>=100 + VIP → Free shipping + 10% discount; Bank Transfer + Amount>=100 + Not VIP → Free shipping; Cash on Delivery + Amount<100 + VIP → $5 shipping + 5% discount. (4) Vẽ Decision Table và ghi lại. (5) Convert mỗi rule thành test case chi tiết. Ghi lại Decision Table và test cases.",
                "Tạo State Diagram cho registration workflow: (1) Xác định các states: Not Started (chưa bắt đầu), Filling Form (đang điền form), Form Submitted (đã submit form), Email Verified (đã verify email), Registration Complete (hoàn thành đăng ký), Registration Failed (đăng ký thất bại). (2) Xác định transitions và events: Not Started → Filling Form (event: User click 'Sign Up'), Filling Form → Form Submitted (event: User click 'Submit'), Form Submitted → Email Verified (event: User click verification link), Email Verified → Registration Complete (event: System activate account), Form Submitted → Registration Failed (event: Validation error hoặc email đã tồn tại), Filling Form → Not Started (event: User cancel). (3) Vẽ State Diagram với các states (hình tròn) và transitions (mũi tên với event). (4) Xác định initial state (Not Started) và final states (Registration Complete, Registration Failed). Ghi lại State Diagram.",
                "Xác định test cases từ State Diagram registration: (1) Happy path: Not Started → Filling Form → Form Submitted → Email Verified → Registration Complete (test case cho toàn bộ workflow thành công). (2) Valid transitions: Test mỗi transition hợp lệ một cách riêng biệt. (3) Invalid transitions: Không thể chuyển từ Registration Complete về Filling Form, không thể chuyển từ Registration Failed về Email Verified (test case cho các transition không hợp lệ). (4) Viết test cases chi tiết cho mỗi test case đã xác định. Ghi lại tất cả test cases.",
                "Review và cải thiện: Xem lại Decision Table và State Diagram đã tạo, kiểm tra: (1) Decision Table có đủ tất cả combinations không? (2) State Diagram có đủ tất cả states và transitions không? (3) Test cases đã cover đủ chưa? (4) Có test case nào trùng lặp không? Chỉnh sửa nếu cần."
              ]
            }]
          },
          evening: {
            exercises: [{
              title: "PHASE 3: Consolidation",
              duration: "4h",
              tasks: [
                "Tổng hợp tất cả Test Cases: (1) Tổng hợp test cases từ EP + BVA (20-25 test cases), (2) Tổng hợp test cases từ Decision Table (8-12 test cases), (3) Tổng hợp test cases từ State Diagram (10-15 test cases). (4) Tổng cộng: ít nhất 40-50 test cases. (5) Tổ chức test cases theo nhóm: EP+BVA Test Cases, Decision Table Test Cases, State Transition Test Cases. (6) Đánh Priority cho mỗi test case: High (happy path, critical validations), Medium (boundary values, valid transitions), Low (invalid transitions, edge cases). Ghi lại vào một document tổng hợp.",
                "Tạo bảng so sánh: Tạo một bảng so sánh các kỹ thuật đã sử dụng: Kỹ thuật | Số Test Cases | Coverage | Ưu điểm | Nhược điểm | Khi nào dùng. Ví dụ: EP → Giảm số lượng test cases, cover partitions; BVA → Tìm bugs ở biên; Decision Table → Cover tất cả combinations; State Transition → Test workflow đầy đủ. Bảng này giúp bạn hiểu rõ khi nào nên dùng kỹ thuật nào.",
                "Tính Test Coverage: (1) Xác định tổng số test scenarios có thể có (nếu test tất cả combinations không dùng kỹ thuật) - ví dụ: 100+ scenarios, (2) Số test cases đã tạo (40-50 test cases), (3) Coverage = (Số test cases / Tổng số scenarios) × 100%. (4) Đánh giá: Coverage có đủ không? Có cần thêm test cases không? Ghi lại coverage analysis.",
                "Tạo Test Design Document: Tổng hợp tất cả vào một document chuyên nghiệp bao gồm: (1) Introduction - giới thiệu form và mục đích test design, (2) Test Techniques Used - EP, BVA, Decision Table, State Transition, (3) Test Cases Summary - tổng số test cases, phân bổ theo kỹ thuật, phân bổ theo priority, (4) Test Cases Detail - tất cả test cases chi tiết, (5) Coverage Analysis - phân tích coverage, (6) Comparison Table - so sánh các kỹ thuật. Document này sẽ là một artifact tốt cho portfolio."
              ]
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
            content: [
              "Bug Life Cycle: Giải thích Bug Life Cycle là quy trình theo dõi bug từ khi được phát hiện đến khi được fix và đóng. Các trạng thái chính: (1) New - bug mới được tìm thấy và report, (2) Assigned - bug được assign cho developer cụ thể, (3) Open - developer đang xử lý bug, (4) Fixed - developer đã fix bug, (5) Retest - tester đang test lại để verify fix, (6) Closed - bug đã được fix và verify thành công, (7) Reopened - bug bị reopen nếu fix không đúng hoặc bug xuất hiện lại, (8) Deferred/Postponed - bug bị hoãn lại, (9) Rejected/Duplicate - bug bị reject hoặc trùng lặp. Hiểu Bug Life Cycle giúp Tester biết bug đang ở trạng thái nào và cần làm gì tiếp theo.",
              "Bug Report structure: Một Bug Report tốt phải có đầy đủ các phần: (1) Bug ID/Title - mã định danh và tiêu đề ngắn gọn, rõ ràng (ví dụ: 'Login button không hoạt động khi click'), (2) Description - mô tả chi tiết bug, (3) Environment - môi trường test (OS, Browser, Version, Device nếu có), (4) Preconditions - điều kiện ban đầu cần có, (5) Steps to Reproduce - các bước chi tiết để reproduce bug (đánh số 1, 2, 3...), (6) Expected Result - kết quả mong đợi, (7) Actual Result - kết quả thực tế (mô tả chính xác những gì xảy ra), (8) Severity - mức độ nghiêm trọng của bug, (9) Priority - mức độ ưu tiên fix bug, (10) Attachments - screenshot, video, log files nếu có. Bug Report tốt giúp developer hiểu và fix bug nhanh chóng.",
              "Severity vs Priority: Severity (Mức độ nghiêm trọng) đo lường tác động của bug lên hệ thống/người dùng: Critical (hệ thống crash, mất dữ liệu), High (chức năng chính không hoạt động), Medium (chức năng phụ không hoạt động hoặc có workaround), Low (UI/UX issues nhỏ, typos). Priority (Mức độ ưu tiên) đo lường mức độ cần thiết phải fix bug ngay: P1 (fix ngay lập tức), P2 (fix trong sprint này), P3 (fix trong sprint sau), P4 (fix khi có thời gian). Severity và Priority có thể khác nhau: ví dụ bug Low Severity nhưng High Priority nếu ảnh hưởng đến demo cho khách hàng quan trọng."
            ],
            concepts: [
              "Bug Life Cycle là gì? → Là quy trình theo dõi bug từ khi được phát hiện đến khi được fix và đóng. Các trạng thái chính: New → Assigned → Open → Fixed → Retest → Closed. Bug có thể bị Reopened nếu fix không đúng, hoặc bị Deferred/Rejected tùy tình huống. Hiểu Bug Life Cycle giúp Tester biết bug đang ở đâu và cần làm gì.",
              "Bug Report structure: Một Bug Report tốt phải có: Bug ID/Title (ngắn gọn, rõ ràng), Description (mô tả chi tiết), Environment (OS, Browser, Version), Preconditions (điều kiện ban đầu), Steps to Reproduce (chi tiết, đánh số), Expected Result (rõ ràng), Actual Result (chính xác), Severity (Critical/High/Medium/Low), Priority (P1/P2/P3/P4), Attachments (screenshot, video, logs). Bug Report tốt giúp developer fix bug nhanh chóng.",
              "Severity vs Priority: Severity đo lường tác động của bug lên hệ thống/người dùng (Critical/High/Medium/Low). Priority đo lường mức độ cần thiết phải fix ngay (P1/P2/P3/P4). Severity và Priority có thể khác nhau. Ví dụ: bug Low Severity nhưng High Priority nếu ảnh hưởng đến demo quan trọng. Tester cần đánh giá cả hai để bug được xử lý đúng thứ tự ưu tiên.",
              "Tại sao Bug Report quan trọng? → Bug Report là cách giao tiếp chính giữa Tester và Developer. Bug Report tốt giúp: (1) Developer hiểu và reproduce bug nhanh, (2) Fix bug đúng và nhanh hơn, (3) Giảm thời gian trao đổi, (4) Tăng chất lượng sản phẩm. Bug Report tệ dẫn đến: developer không hiểu, không reproduce được, fix sai, tốn thời gian.",
              "Best practices khi viết Bug Report: (1) Title ngắn gọn nhưng đủ thông tin, (2) Steps to Reproduce chi tiết, ai đọc cũng làm được, (3) Expected vs Actual rõ ràng, không mơ hồ, (4) Có screenshot/video nếu cần, (5) Mô tả chính xác, không suy đoán, (6) Đánh Severity và Priority đúng, (7) Review bug report trước khi submit."
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice Bug Reporting",
            exercises: [{
              title: "BÀI TẬP: Find & Report Bugs",
              duration: "2h",
              tasks: [
                "Test Login feature để tìm bugs: (1) Chọn một website/app có chức năng Login (có thể là demo app hoặc website thật). (2) Thực hiện test Login feature một cách có hệ thống: test với valid credentials, invalid credentials, empty fields, special characters, SQL injection cơ bản, XSS cơ bản, v.v. (3) Quan sát kỹ UI, behavior, error messages, response time. (4) Ghi lại tất cả những điểm bất thường, kể cả khi chưa chắc đó là bug hay chỉ là yêu cầu chưa rõ. Mục tiêu: tìm được ít nhất 5 bugs hoặc observations.",
                "Phân loại và đánh giá bugs: Với mỗi bug tìm được, (1) Xác định loại bug: Functional bug (chức năng không hoạt động đúng), UI/UX bug (hiển thị, layout, màu sắc), Security bug (SQL injection, XSS), Performance bug (chậm, timeout), Compatibility bug (không hoạt động trên browser/device khác). (2) Đánh Severity: Critical (hệ thống crash, không login được), High (login được nhưng có vấn đề nghiêm trọng), Medium (có vấn đề nhưng có workaround), Low (UI/UX nhỏ). (3) Đánh Priority: P1 (fix ngay), P2 (fix trong sprint), P3 (fix sau), P4 (fix khi có thời gian). Ghi lại phân loại cho mỗi bug.",
                "Viết Bug Report chi tiết cho 5 bugs: Với mỗi bug, viết một Bug Report đầy đủ theo cấu trúc đã học: (1) Bug ID/Title - ví dụ: 'BUG-001: Login button không hoạt động khi click', (2) Description - mô tả chi tiết bug, (3) Environment - OS (Windows 10), Browser (Chrome 120), Version (nếu có), (4) Preconditions - User đã có account, đang ở trang Login, (5) Steps to Reproduce - chi tiết từng bước: '1. Navigate to login page', '2. Enter username: testuser', '3. Enter password: Test123!', '4. Click Login button', (6) Expected Result - 'User should be redirected to dashboard page', (7) Actual Result - 'Login button không phản hồi, không có gì xảy ra', (8) Severity - High, (9) Priority - P1, (10) Attachments - screenshot/video nếu có. Viết 5 bug reports đầy đủ.",
                "Review và cải thiện Bug Reports: (1) Đọc lại tất cả bug reports đã viết, tự hỏi: 'Nếu đưa bug report này cho một developer chưa từng test Login feature này, họ có thể hiểu và reproduce được không?' (2) Kiểm tra: Steps to Reproduce có đủ chi tiết không? Expected vs Actual có rõ ràng không? Có thiếu thông tin quan trọng không? (3) Chỉnh sửa các bug reports còn mơ hồ, thiếu thông tin. (4) Đảm bảo mỗi bug report đều có đầy đủ các phần cần thiết. Mục tiêu: có 5 bug reports chất lượng cao, rõ ràng, dễ hiểu.",
                "Tạo Bug Report Template: Dựa trên những gì đã học, tạo một template Bug Report (Word/Excel/Google Docs) với các phần: Bug ID, Title, Description, Environment, Preconditions, Steps to Reproduce, Expected Result, Actual Result, Severity, Priority, Attachments, Reporter, Date, Status. Template này sẽ dùng cho các bài tập sau."
              ]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{
              title: "REVIEW",
              duration: "30 phút",
              tasks: [
                "Tóm tắt lại: Bug Life Cycle có những trạng thái nào, cấu trúc Bug Report gồm những phần nào, sự khác biệt giữa Severity và Priority. Viết ngắn gọn 8-10 dòng bằng lời của bạn.",
                "Xem lại các Bug Reports đã viết: Kiểm tra xem có bug report nào còn thiếu thông tin quan trọng không? Steps to Reproduce có đủ chi tiết không? Expected vs Actual có rõ ràng không? Chỉnh sửa nếu cần.",
                "Tự đánh giá: Bạn đã viết được bao nhiêu bug reports (mục tiêu là 5)? Chất lượng bug reports của bạn như thế nào (tự chấm 1-10)? Bạn có thể giải thích sự khác biệt giữa Severity và Priority không? Ghi lại 2-3 điểm cần cải thiện cho lần sau."
              ]
            }]
          }
        }),
        createDay("Thứ 3", "Jira Bug Tracking", 4, {
          motivationalQuote: "🛠️ Tools giúp bạn làm việc hiệu quả hơn!",
          dailyGoals: ["✅ Setup Jira", "✅ Tạo bugs trong Jira", "✅ Track bug status"],
          morning: {
            title: "Sáng (1.5h): Jira Setup",
            content: [
              "Giới thiệu Jira: Jira là công cụ quản lý dự án và theo dõi issues (bugs, tasks, stories) phổ biến nhất trong ngành phần mềm. Jira giúp: (1) Tạo và quản lý bugs một cách có hệ thống, (2) Theo dõi trạng thái bugs (Bug Life Cycle), (3) Assign bugs cho developers, (4) Tạo reports và dashboards, (5) Tích hợp với các tools khác (Confluence, Bitbucket, v.v.). Jira có nhiều loại: Jira Software (cho development teams), Jira Service Management (cho IT support), Jira Core (cho business teams). Manual Tester thường dùng Jira Software để track bugs.",
              "Setup Jira account: (1) Truy cập jira.atlassian.com hoặc Jira instance của công ty, (2) Đăng ký tài khoản (có thể dùng free trial 7 ngày), (3) Chọn loại Jira phù hợp (Jira Software), (4) Hoàn tất setup profile. Nếu dùng Jira của công ty, liên hệ admin để được cấp quyền truy cập.",
              "Create project trong Jira: (1) Click 'Create project', (2) Chọn template (Scrum, Kanban, hoặc Bug tracking), (3) Đặt tên project (ví dụ: 'Web App Testing'), (4) Chọn project key (ví dụ: 'WEB'), (5) Chọn project lead và permissions. Project key sẽ được dùng trong Bug ID (ví dụ: WEB-1, WEB-2).",
              "Configure issue types: Jira có nhiều issue types: Bug, Task, Story, Epic, v.v. Với Manual Tester, quan trọng nhất là Bug. (1) Vào Project Settings → Issue Types, (2) Đảm bảo có Bug type, (3) Configure fields cho Bug: Summary, Description, Environment, Steps to Reproduce, Expected Result, Actual Result, Severity, Priority, Attachments, v.v. (4) Tạo custom fields nếu cần (ví dụ: Browser, OS Version)."
            ],
            concepts: [
              "Jira là gì? → Là công cụ quản lý dự án và theo dõi issues (bugs, tasks) phổ biến nhất. Jira giúp Tester: tạo bugs, track bug status, assign bugs, tạo reports. Jira có nhiều loại: Jira Software (cho dev teams), Jira Service Management (cho IT support).",
              "Setup Jira: (1) Đăng ký tài khoản tại jira.atlassian.com hoặc dùng Jira của công ty, (2) Tạo project với template phù hợp (Scrum/Kanban/Bug tracking), (3) Configure issue types và fields cho Bug. Project key sẽ dùng trong Bug ID (ví dụ: WEB-1).",
              "Issue types trong Jira: Bug (lỗi), Task (công việc), Story (user story), Epic (tập hợp stories), v.v. Manual Tester chủ yếu dùng Bug type. Có thể tạo custom fields cho Bug: Browser, OS, Steps to Reproduce, Expected/Actual Result, v.v.",
              "Bug ID format: Jira tự động tạo Bug ID theo format PROJECT-KEY-NUMBER (ví dụ: WEB-1, WEB-2). Bug ID là unique identifier, dùng để reference bug trong communication, commit messages, test reports.",
              "Jira workflow: Jira có workflow mặc định cho Bug: Open → In Progress → Resolved → Closed. Có thể customize workflow theo Bug Life Cycle của team: New → Assigned → Open → Fixed → Retest → Closed → Reopened."
            ],
            detailedSetup: [
              "Bước 1: Đăng ký Jira - Truy cập jira.atlassian.com, click 'Get started for free', điền thông tin (email, tên, password), chọn 'Jira Software', hoàn tất đăng ký. Nếu dùng Jira của công ty, liên hệ admin để được cấp quyền.",
              "Bước 2: Tạo project - Sau khi đăng nhập, click 'Create project', chọn template 'Bug tracking' hoặc 'Scrum', đặt tên project (ví dụ: 'Web App Testing'), chọn project key (ví dụ: 'WEB'), chọn project lead, click 'Create'. Project key sẽ dùng trong Bug ID.",
              "Bước 3: Configure issue types - Vào Project Settings → Issue Types, đảm bảo có 'Bug' type. Vào Issue Type Scheme, thêm 'Bug' vào scheme nếu chưa có. Vào Fields → Configure, thêm các fields cần thiết cho Bug: Summary, Description, Environment, Steps to Reproduce, Expected Result, Actual Result, Severity, Priority, Attachments.",
              "Bước 4: Tạo custom fields (nếu cần) - Vào Project Settings → Fields → Custom Fields, tạo các fields: Browser (dropdown: Chrome, Firefox, Safari), OS (dropdown: Windows, Mac, Linux), Version (text field). Assign custom fields vào Bug screen.",
              "Bước 5: Test tạo bug đầu tiên - Click 'Create' → chọn 'Bug', điền thông tin: Summary, Description, Environment, Steps, Expected/Actual, Severity, Priority. Click 'Create' để tạo bug. Kiểm tra Bug ID được tạo (ví dụ: WEB-1)."
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice với Jira",
            exercises: [{
              title: "BÀI TẬP: Jira Practice",
              duration: "2h",
              tasks: [
                "Import 5 bugs vào Jira: Sử dụng 5 bug reports đã viết ở ngày Thứ 2, tạo bugs trong Jira: (1) Click 'Create' → chọn 'Bug', (2) Điền đầy đủ thông tin: Summary (title của bug), Description (mô tả chi tiết), Environment (OS, Browser, Version), Steps to Reproduce (copy từ bug report), Expected Result, Actual Result, Severity, Priority. (3) Attach screenshot/video nếu có (click 'Attach files'). (4) Click 'Create' để tạo bug. (5) Lặp lại cho 5 bugs. Ghi lại Bug ID của mỗi bug (ví dụ: WEB-1, WEB-2, ...).",
                "Update bug status: (1) Mở bug WEB-1, click '...' → 'Transition', chọn 'In Progress' (giả lập developer đang fix), click 'Transition'. (2) Mở bug WEB-2, transition sang 'Resolved' (giả lập developer đã fix), thêm comment 'Fixed in commit abc123', click 'Resolve'. (3) Mở bug WEB-3, transition sang 'Closed' (giả lập đã verify fix), thêm comment 'Verified, bug is fixed', click 'Close'. (4) Mở bug WEB-4, transition sang 'Reopen' (giả lập bug xuất hiện lại), thêm comment 'Bug still occurs after fix', click 'Reopen'. Ghi lại các thao tác đã thực hiện.",
                "Add screenshots và attachments: (1) Mở bug WEB-1, click 'Attach files', chọn screenshot đã chụp (nếu có), upload. (2) Thêm comment với screenshot inline: click 'Insert image' trong comment editor, chọn screenshot. (3) Thêm video nếu có (screen recording). (4) Thêm log files nếu có (console logs, error logs). Ghi lại cách attach files.",
                "Create filters và search: (1) Tạo filter 'My Bugs': Vào 'Issues' → 'Search for issues', chọn filters: Reporter = Current User, Type = Bug, click 'Save as' → đặt tên 'My Bugs'. (2) Tạo filter 'High Priority Bugs': Priority = High, Type = Bug, Status != Closed, save as 'High Priority Bugs'. (3) Tạo filter 'Open Bugs': Status = Open, Type = Bug, save as 'Open Bugs'. (4) Test JQL (Jira Query Language): Vào 'Issues' → 'Advanced', nhập JQL: 'project = WEB AND type = Bug AND status = Open', click 'Search'. Ghi lại các filters đã tạo.",
                "Tạo dashboard (nếu có quyền): (1) Vào 'Dashboards' → 'Create dashboard', đặt tên 'Bug Tracking Dashboard'. (2) Add gadgets: 'Created vs Resolved Chart' (biểu đồ bugs được tạo vs được fix), 'Issue Statistics' (thống kê bugs theo status), 'Assigned to Me' (bugs được assign cho bạn). (3) Save dashboard. Dashboard giúp theo dõi bug metrics một cách trực quan."
              ]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{
              title: "REVIEW",
              duration: "30 phút",
              tasks: [
                "Tóm tắt lại: Jira là gì, cách setup Jira như thế nào, cách tạo bug trong Jira, cách update bug status. Viết ngắn gọn 7-10 dòng bằng lời của bạn.",
                "Xem lại các bugs đã tạo trong Jira: Kiểm tra xem bugs có đầy đủ thông tin không? Bug ID có đúng format không? Có thể tìm bugs bằng filters không? Chỉnh sửa nếu cần.",
                "Tự đánh giá: Bạn đã tạo được bao nhiêu bugs trong Jira (mục tiêu là 5)? Bạn có thể sử dụng Jira để track bugs không (tự chấm 1-10)? Bạn có thể tạo filters và search bugs không? Ghi lại 2-3 câu hỏi nếu còn."
              ]
            }]
          }
        }),
        createDay("Thứ 4", "Test Execution Process", 4, {
          motivationalQuote: "▶️ Test Execution là nơi bạn apply tất cả kiến thức!",
          dailyGoals: ["✅ Hiểu Test Execution", "✅ Execute Test Cases", "✅ Document results"],
          morning: {
            title: "Sáng (1.5h): Test Execution",
            content: [
              "Test Execution process: Test Execution là giai đoạn thực thi các test cases đã được thiết kế. Quy trình: (1) Chuẩn bị Test Environment - đảm bảo môi trường test sẵn sàng (server, database, test data), (2) Chuẩn bị Test Data - tạo dữ liệu test cần thiết (users, orders, products, v.v.), (3) Thực thi Test Cases - chạy từng test case theo đúng steps, quan sát kỹ kết quả, (4) Ghi nhận kết quả - đánh dấu Pass/Fail/Blocked cho mỗi test case, ghi lại Actual Result, (5) Log bugs - nếu test case Fail, tạo bug report chi tiết, (6) Retest - sau khi bug được fix, test lại để verify, (7) Tổng hợp kết quả - tạo test execution report. Test Execution đòi hỏi sự cẩn thận, tỉ mỉ, và khả năng quan sát tốt.",
              "Test Environment setup: Test Environment là môi trường nơi test được thực thi. Cần chuẩn bị: (1) Server/Application - đảm bảo app đã được deploy và chạy ổn định, (2) Database - có test data sẵn sàng, (3) Browser/Device - cài đặt các browser/device cần test (Chrome, Firefox, Safari, mobile devices), (4) Test Accounts - tạo các tài khoản test với các quyền khác nhau (admin, user, guest), (5) Test Data - chuẩn bị dữ liệu test (products, orders, v.v.), (6) Tools - cài đặt tools cần thiết (Jira, TestRail, Postman, v.v.). Test Environment phải giống Production càng nhiều càng tốt để phát hiện bugs sớm.",
              "Test Data preparation: Test Data là dữ liệu dùng để test. Cần chuẩn bị: (1) Valid data - dữ liệu hợp lệ để test happy path (ví dụ: valid username, valid email, valid order), (2) Invalid data - dữ liệu không hợp lệ để test negative cases (ví dụ: invalid email, invalid phone, invalid order), (3) Boundary data - dữ liệu ở biên (ví dụ: age = 18, password = 8 ký tự), (4) Edge cases - dữ liệu đặc biệt (ví dụ: email rất dài, số rất lớn), (5) Test accounts - các tài khoản với roles khác nhau (admin, user, guest). Test Data có thể được tạo thủ công hoặc tự động (scripts, SQL). Test Data phải được quản lý tốt để dễ tái sử dụng."
            ],
            concepts: [
              "Test Execution là gì? → Là giai đoạn thực thi các test cases đã được thiết kế. Quy trình: Chuẩn bị environment → Chuẩn bị test data → Thực thi test cases → Ghi nhận kết quả (Pass/Fail/Blocked) → Log bugs → Retest → Tổng hợp kết quả.",
              "Test Results: Mỗi test case sau khi thực thi sẽ có kết quả: (1) Pass - test case chạy thành công, kết quả đúng như mong đợi, (2) Fail - test case chạy nhưng kết quả không đúng như mong đợi (có bug), (3) Blocked - test case không thể chạy được do bug khác hoặc môi trường chưa sẵn sàng, (4) Not Executed - test case chưa được chạy. Tester phải ghi nhận chính xác kết quả cho mỗi test case.",
              "Test Environment: Là môi trường nơi test được thực thi, bao gồm: server/app, database, browser/device, test accounts, test data, tools. Test Environment phải giống Production càng nhiều càng tốt. Cần đảm bảo environment sẵn sàng trước khi bắt đầu test execution.",
              "Test Data: Là dữ liệu dùng để test, bao gồm: valid data (happy path), invalid data (negative cases), boundary data (biên), edge cases (đặc biệt), test accounts (với roles khác nhau). Test Data phải được chuẩn bị sẵn và quản lý tốt để dễ tái sử dụng.",
              "Best practices khi thực thi test: (1) Thực thi test cases theo đúng thứ tự và steps, (2) Quan sát kỹ kết quả, không bỏ qua chi tiết nhỏ, (3) Ghi nhận kết quả ngay sau mỗi test case, (4) Log bugs ngay khi phát hiện, không chờ đến cuối, (5) Retest bugs đã fix để verify, (6) Tổng hợp kết quả thường xuyên để theo dõi tiến độ."
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice Execution",
            exercises: [{
              title: "BÀI TẬP: Execute Login Tests",
              duration: "2h",
              tasks: [
                "Setup test environment: (1) Chọn một website/app có chức năng Login (có thể là demo app hoặc website thật). (2) Đảm bảo app đã được deploy và chạy ổn định. (3) Xác định browser/device sẽ test (ví dụ: Chrome trên Windows). (4) Tạo test accounts nếu cần: một account valid, một account invalid, một account bị lock. (5) Chuẩn bị test data: danh sách usernames/passwords sẽ dùng (valid, invalid, empty, special characters). (6) Mở Jira để sẵn sàng log bugs. Ghi lại environment setup.",
                "Thực thi 20 Test Cases cho Login: Sử dụng 20 test cases đã viết ở tuần 1 (hoặc viết mới nếu chưa có), thực thi từng test case một cách có hệ thống: (1) Đọc test case, hiểu rõ steps và expected result. (2) Thực hiện các steps một cách chính xác, không bỏ qua bước nào. (3) Quan sát kỹ kết quả: UI có đúng không? Error message có đúng không? Response time có chấp nhận được không? (4) So sánh Actual Result với Expected Result. (5) Đánh dấu Pass/Fail/Blocked cho test case. (6) Ghi lại Actual Result chi tiết nếu Fail. (7) Lặp lại cho 20 test cases. Mục tiêu: thực thi đầy đủ, không bỏ sót, ghi nhận chính xác.",
                "Document kết quả test: Tạo một bảng Test Execution Results (Excel/Google Sheets) với các cột: Test Case ID, Test Case Description, Status (Pass/Fail/Blocked), Actual Result, Bug ID (nếu Fail), Notes, Date Executed, Executed By. Điền đầy đủ thông tin cho mỗi test case đã thực thi. Tính toán: Tổng số test cases, Số Pass, Số Fail, Số Blocked, Pass Rate = (Pass / Total) × 100%. Ghi lại bảng kết quả.",
                "Log bugs cho các test cases Fail: Với mỗi test case Fail, (1) Tạo bug report chi tiết trong Jira (sử dụng template đã học), (2) Link bug với test case (ghi Test Case ID trong bug description), (3) Attach screenshot/video nếu có, (4) Đánh Severity và Priority. (5) Assign bug cho developer (hoặc để Unassigned nếu chưa biết). Ghi lại Bug ID của mỗi bug. Mục tiêu: có ít nhất 3-5 bugs được log trong Jira.",
                "Phân tích kết quả: (1) Tính Pass Rate: (Số Pass / Tổng số) × 100%. (2) Phân tích các test cases Fail: có pattern nào không? (ví dụ: nhiều test cases Fail liên quan đến validation). (3) Phân tích các test cases Blocked: tại sao bị block? Có thể unblock không? (4) Đánh giá chất lượng: có test cases nào cần cải thiện không? (5) Ghi lại phân tích và recommendations. Phân tích này sẽ dùng cho Test Summary Report."
              ]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{
              title: "REVIEW",
              duration: "30 phút",
              tasks: [
                "Tóm tắt lại: Test Execution là gì, quy trình Test Execution gồm những bước nào, Test Results có những loại nào. Viết ngắn gọn 7-10 dòng bằng lời của bạn.",
                "Xem lại kết quả test execution: Kiểm tra xem có test case nào bị bỏ sót không? Kết quả có được ghi nhận đầy đủ không? Bugs có được log đầy đủ không? Chỉnh sửa nếu cần.",
                "Tự đánh giá: Bạn đã thực thi được bao nhiêu test cases (mục tiêu là 20)? Pass Rate là bao nhiêu %? Bạn có thể thực thi test cases một cách có hệ thống không (tự chấm 1-10)? Ghi lại 2-3 điểm cần cải thiện."
              ]
            }]
          }
        }),
        createDay("Thứ 5", "Test Reporting & Metrics", 4, {
          motivationalQuote: "📊 Reporting giúp stakeholders hiểu chất lượng!",
          dailyGoals: ["✅ Tạo Test Summary Report", "✅ Calculate metrics", "✅ Present results"],
          morning: {
            title: "Sáng (1.5h): Test Reporting",
            content: [
              "Test Summary Report structure: Test Summary Report là tài liệu tổng hợp kết quả test execution để trình bày cho stakeholders (PM, PO, Dev Lead, Management). Cấu trúc chuẩn: (1) Executive Summary - tóm tắt ngắn gọn (1-2 đoạn) về kết quả test, chất lượng sản phẩm, recommendations, (2) Test Scope - phạm vi test (test gì, không test gì), (3) Test Environment - môi trường test (OS, Browser, Version, Server), (4) Test Execution Summary - tổng hợp kết quả: tổng số test cases, số Pass/Fail/Blocked, Pass Rate, (5) Defect Summary - tổng hợp bugs: tổng số bugs, phân bổ theo Severity (Critical/High/Medium/Low), phân bổ theo Priority (P1/P2/P3/P4), phân bổ theo Status (Open/Fixed/Closed), (6) Test Metrics - các chỉ số: Pass Rate, Test Coverage, Defect Density, Defect Rejection Rate, (7) Charts và Graphs - biểu đồ trực quan (pie chart, bar chart), (8) Risks và Issues - rủi ro và vấn đề gặp phải, (9) Recommendations - đề xuất cải thiện, (10) Appendix - test cases detail, bug list, screenshots nếu cần.",
              "Test Metrics: Test Metrics là các chỉ số đo lường chất lượng testing và sản phẩm. Các metrics quan trọng: (1) Pass Rate = (Số Pass / Tổng số Test Cases) × 100% - tỷ lệ test cases pass, (2) Test Coverage = (Số Requirements được test / Tổng số Requirements) × 100% - độ bao phủ test, (3) Defect Density = Số Bugs / Kích thước (KLOC, features, modules) - mật độ bugs, (4) Defect Rejection Rate = (Số Bugs bị Reject / Tổng số Bugs) × 100% - tỷ lệ bugs bị reject, (5) Defect Leakage = (Số Bugs tìm thấy ở Production / Tổng số Bugs) × 100% - tỷ lệ bugs lọt ra production, (6) Test Execution Rate = (Số Test Cases đã thực thi / Tổng số Test Cases) × 100% - tỷ lệ test cases đã chạy. Metrics giúp đánh giá chất lượng và cải thiện quy trình testing.",
              "Charts và graphs: Biểu đồ giúp trình bày dữ liệu một cách trực quan, dễ hiểu. Các biểu đồ thường dùng: (1) Pie Chart - phân bổ test results (Pass/Fail/Blocked), phân bổ bugs theo Severity, (2) Bar Chart - số bugs theo module, số test cases theo priority, (3) Line Chart - xu hướng bugs theo thời gian, xu hướng pass rate theo thời gian, (4) Table - chi tiết test cases, chi tiết bugs. Có thể tạo bằng Excel, Google Sheets, hoặc tools như Jira Dashboard, TestRail Reports."
            ],
            concepts: [
              "Test Summary Report là gì? → Là tài liệu tổng hợp kết quả test execution để trình bày cho stakeholders. Cấu trúc: Executive Summary, Test Scope, Test Environment, Test Execution Summary, Defect Summary, Test Metrics, Charts, Risks, Recommendations. Report phải rõ ràng, dễ hiểu, có số liệu cụ thể.",
              "Test Metrics: Các chỉ số quan trọng: (1) Pass Rate = (Pass / Total) × 100% - tỷ lệ test pass, (2) Test Coverage = (Requirements tested / Total requirements) × 100% - độ bao phủ, (3) Defect Density = Bugs / Size - mật độ bugs, (4) Defect Rejection Rate = (Rejected bugs / Total bugs) × 100% - tỷ lệ bugs bị reject, (5) Defect Leakage = (Production bugs / Total bugs) × 100% - tỷ lệ bugs lọt ra production. Metrics giúp đánh giá chất lượng.",
              "Charts và Graphs: Biểu đồ giúp trình bày dữ liệu trực quan: Pie Chart (phân bổ), Bar Chart (so sánh), Line Chart (xu hướng), Table (chi tiết). Có thể tạo bằng Excel, Google Sheets, Jira Dashboard, TestRail Reports.",
              "Executive Summary: Là phần quan trọng nhất, tóm tắt ngắn gọn (1-2 đoạn) về: kết quả test tổng thể, chất lượng sản phẩm (tốt/tạm/chưa tốt), số bugs chính, recommendations chính. Stakeholders thường chỉ đọc phần này, nên phải viết rõ ràng, có số liệu cụ thể.",
              "Best practices khi viết report: (1) Viết rõ ràng, dễ hiểu, tránh thuật ngữ kỹ thuật quá nhiều, (2) Có số liệu cụ thể, không mơ hồ, (3) Có biểu đồ trực quan, (4) Có recommendations cụ thể, (5) Review report trước khi gửi, (6) Gửi đúng đối tượng (PM, PO, Dev Lead, Management)."
            ]
          },
          afternoon: {
            title: "Chiều (2h): Create Report",
            exercises: [{
              title: "BÀI TẬP: Test Summary Report",
              duration: "2h",
              tasks: [
                "Tạo Test Summary Report template: Tạo một document (Word/Google Docs) với cấu trúc: (1) Cover page - Tên project, Tên report, Ngày tạo, Tác giả, Version, (2) Table of Contents, (3) Executive Summary - section để tóm tắt, (4) Test Scope - section để mô tả scope, (5) Test Environment - section để mô tả environment, (6) Test Execution Summary - section với bảng tổng hợp, (7) Defect Summary - section với bảng tổng hợp bugs, (8) Test Metrics - section với các metrics, (9) Charts và Graphs - section để chèn biểu đồ, (10) Risks và Issues - section để liệt kê, (11) Recommendations - section để đề xuất, (12) Appendix - section cho chi tiết. Template này sẽ dùng cho các bài tập sau.",
                "Điền dữ liệu vào report: Sử dụng kết quả test execution từ ngày Thứ 4, điền đầy đủ thông tin: (1) Executive Summary - viết 1-2 đoạn tóm tắt: 'Đã thực thi 20 test cases cho Login feature, Pass Rate 75% (15 Pass, 5 Fail). Tìm thấy 5 bugs, trong đó 2 High Severity, 3 Medium Severity. Sản phẩm chưa sẵn sàng release, cần fix các bugs High trước.', (2) Test Scope - 'Test scope: Login feature bao gồm validation, authentication, error handling. Out of scope: Password reset, Remember me functionality.', (3) Test Environment - 'OS: Windows 10, Browser: Chrome 120, Server: Test environment v1.2.3', (4) Test Execution Summary - tạo bảng: Total Test Cases: 20, Pass: 15, Fail: 5, Blocked: 0, Pass Rate: 75%, (5) Defect Summary - tạo bảng: Total Bugs: 5, Critical: 0, High: 2, Medium: 3, Low: 0, Open: 5, Fixed: 0, Closed: 0. Điền đầy đủ các section.",
                "Tính toán Test Metrics: (1) Pass Rate = (15 / 20) × 100% = 75%, (2) Test Coverage = (1 feature tested / 1 feature total) × 100% = 100% (nếu chỉ test Login feature), (3) Defect Density = 5 bugs / 1 feature = 5 bugs per feature, (4) Defect Rejection Rate = (0 / 5) × 100% = 0% (giả sử chưa có bug nào bị reject), (5) Test Execution Rate = (20 / 20) × 100% = 100%. Ghi lại các metrics vào report.",
                "Tạo Charts và Graphs: Sử dụng Excel/Google Sheets để tạo biểu đồ: (1) Pie Chart cho Test Results - Pass (75%), Fail (25%), Blocked (0%), (2) Bar Chart cho Bugs theo Severity - High (2), Medium (3), Low (0), (3) Bar Chart cho Bugs theo Status - Open (5), Fixed (0), Closed (0), (4) Table chi tiết Test Cases - Test Case ID, Description, Status, Actual Result, Bug ID, (5) Table chi tiết Bugs - Bug ID, Summary, Severity, Priority, Status. Chèn các biểu đồ vào report. Biểu đồ giúp report trực quan, dễ hiểu hơn.",
                "Viết Recommendations: Dựa trên kết quả test, viết recommendations cụ thể: (1) 'Cần fix 2 bugs High Severity trước khi release (BUG-001, BUG-002)', (2) 'Cần cải thiện validation cho email và password fields (BUG-003, BUG-004)', (3) 'Cần test lại sau khi fix bugs để verify', (4) 'Cần thêm test cases cho edge cases (password với special characters)', (5) 'Cần cải thiện error messages để user-friendly hơn'. Recommendations phải cụ thể, có thể thực hiện được. Hoàn thiện report và review lại."
              ]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{
              title: "REVIEW",
              duration: "30 phút",
              tasks: [
                "Tóm tắt lại: Test Summary Report có cấu trúc như thế nào, các Test Metrics quan trọng là gì, cách tạo Charts và Graphs. Viết ngắn gọn 7-10 dòng bằng lời của bạn.",
                "Xem lại Test Summary Report đã tạo: Kiểm tra xem report có đầy đủ các phần không? Có số liệu cụ thể không? Có biểu đồ trực quan không? Recommendations có cụ thể không? Chỉnh sửa nếu cần.",
                "Tự đánh giá: Bạn đã tạo được Test Summary Report chưa? Chất lượng report như thế nào (tự chấm 1-10)? Bạn có thể trình bày report cho stakeholders không? Ghi lại 2-3 điểm cần cải thiện."
              ]
            }]
          }
        }),
        createWeekendDay("Thứ 6", "Weekend Project - Complete Test Execution", {
          dailyGoals: ["✅ Execute all Test Cases", "✅ Log bugs trong Jira", "✅ Create report"],
          morning: {
            exercises: [{
              title: "PHASE 1: Test Execution",
              duration: "4h",
              tasks: [
                "Chuẩn bị Test Suite: (1) Tổng hợp tất cả test cases đã viết cho Login feature (từ tuần 1–3) vào một tài liệu hoặc Test Management tool (Excel, Google Sheets, TestRail,...). (2) Đảm bảo mỗi test case có đầy đủ: ID, Description, Preconditions, Steps, Expected Result, Priority. (3) Nhóm test cases theo loại: Positive, Negative, Boundary, Security (nếu có), UI/UX. (4) Đánh dấu các test cases quan trọng cần chạy trong Weekend Project (mục tiêu: tối thiểu 30 test cases).",
                "Chuẩn bị Test Environment & Test Data: (1) Xác nhận environment: URL test, server status, version build. (2) Chuẩn bị browser/device: Chrome (bắt buộc), thêm 1 browser khác nếu có (Firefox/Safari). (3) Chuẩn bị test accounts: ít nhất 1 account valid, 1 account invalid (locked/disabled), 1 account với role khác (nếu có). (4) Chuẩn bị test data cho các cases: danh sách usernames/passwords, data cho invalid cases (chuỗi đặc biệt, SQLi đơn giản, XSS đơn giản). Ghi lại cấu hình environment và test data đã dùng.",
                "Thực thi toàn bộ Test Suite: (1) Lần lượt chạy từng test case theo thứ tự ưu tiên: bắt đầu từ Smoke/Critical, sau đó đến các cases khác. (2) Với mỗi test case: đọc kỹ Steps & Expected Result, thực thi cẩn thận, quan sát UI, messages, behavior. (3) Ghi lại kết quả ngay sau khi chạy: Pass/Fail/Blocked, Actual Result ngắn gọn nhưng rõ ràng. (4) Nếu gặp bug, dừng lại vài phút để chụp screenshot/video và ghi chú chi tiết cho bug report. (5) Tiếp tục cho đến khi chạy xong toàn bộ test cases đã chọn. Mục tiêu: thực thi tối thiểu 30 test cases.",
                "Ghi log kết quả test execution: (1) Trong bảng Test Execution Results, điền đầy đủ: Test Case ID, Description, Status, Actual Result, Bug ID (nếu Fail), Notes. (2) Tính sơ bộ số lượng Pass/Fail/Blocked sau pha này. (3) Xác định các khu vực có nhiều Fail (module, loại test). (4) Ghi lại những quan sát tổng quan: phần nào của Login feature có nhiều lỗi nhất? Có pattern chung nào không?"
              ]
            }]
          },
          afternoon: {
            exercises: [{
              title: "PHASE 2: Bug Tracking",
              duration: "4h",
              tasks: [
                "Log tất cả bugs vào Jira: (1) Sử dụng danh sách test cases Fail từ buổi sáng, tạo bug report tương ứng trong Jira cho từng bug (hoặc gộp nếu cùng root cause, nhưng phải ghi rõ). (2) Mỗi bug phải có: Summary, Description, Environment, Preconditions, Steps to Reproduce, Expected vs Actual, Severity, Priority, Attachments. (3) Kiểm tra lại mỗi bug sau khi tạo: có đủ thông tin để developer reproduce không? (4) Mục tiêu: log tối thiểu 5–10 bugs chất lượng cao.",
                "Tổ chức & cập nhật trạng thái bugs: (1) Gắn labels/module cho bugs (ví dụ: 'Login', 'Validation', 'Security'), (2) Tạo filters trong Jira để xem nhanh: All Login Bugs, High Severity Bugs, Open Bugs. (3) Giả lập workflow: chuyển một số bugs sang trạng thái Assigned/In Progress/Resolved/Closed để hiểu rõ dòng đời bug. (4) Ghi lại JQL hoặc filters đã tạo để dùng lại sau.",
                "Retest bugs đã được 'Resolved' (giả lập): (1) Chọn 2–3 bugs và giả lập rằng developer đã fix (có thể tự 'Resolve' trong Jira). (2) Thực thi lại các test cases tương ứng, quan sát behavior. (3) Nếu bug không còn, chuyển trạng thái sang Closed và cập nhật comment 'Verified, fixed in build XYZ'. (4) Nếu bug vẫn còn, chuyển sang Reopened, cập nhật comment với chi tiết mới. (5) Ghi lại số bugs Verified vs Reopened.",
                "Dọn dẹp & chuẩn hóa bug list: (1) Kiểm tra lại các bugs đã log: có bug nào trùng lặp không? Có bug nào thiếu thông tin không? (2) Merge hoặc link các bugs trùng lặp, bổ sung thông tin còn thiếu. (3) Sắp xếp bugs theo Priority để chuẩn bị cho phần Reporting. (4) Ghi lại tổng số bugs, phân bổ theo Severity/Priority/Status."
              ]
            }]
          },
          evening: {
            exercises: [{
              title: "PHASE 3: Test Reporting",
              duration: "4h",
              tasks: [
                "Tổng hợp số liệu (metrics): (1) Từ bảng Test Execution, tính: Tổng Test Cases đã chạy, số Pass, số Fail, số Blocked, Pass Rate. (2) Từ Jira, tính: Tổng Bugs, số bugs theo Severity (Critical/High/Medium/Low), số bugs theo Status (Open/Resolved/Closed/Reopened). (3) Ước lượng Test Coverage cho Login feature (dựa trên số lượng requirements hoặc scenarios đã được test). (4) Ghi lại tất cả metrics này vào một bảng tóm tắt.",
                "Viết Test Summary Report cho Weekend Project: Sử dụng template ngày Thứ 5, tạo một report thực tế cho Login feature: (1) Executive Summary – mô tả ngắn gọn tình hình: chất lượng hiện tại, có thể release chưa, rủi ro chính. (2) Test Scope – liệt kê phạm vi cụ thể đã test trong weekend này. (3) Test Environment – ghi rõ environment đã dùng. (4) Test Execution Summary – bảng số liệu với Test Cases & Pass Rate. (5) Defect Summary – bảng số liệu bugs & phân bổ. (6) Test Metrics – trình bày các metrics chính. (7) Risks & Issues – liệt kê những vấn đề còn lại. (8) Recommendations – đề xuất cụ thể cho team (fix gì, test thêm gì).",
                "Tạo slides trình bày nhanh (3–5 slides): (1) Slide 1 – Mục tiêu Weekend Project & Scope, (2) Slide 2 – Kết quả test chính (Pass Rate, số bugs, module bị ảnh hưởng nhiều), (3) Slide 3 – Bugs chính (liệt kê 3–5 bugs quan trọng với ảnh hưởng business), (4) Slide 4 – Risks & Recommendations (cần làm gì tiếp theo). Mục tiêu: nếu phải trình bày với PM/PO trong 5 phút, bạn có thể dùng bộ slides này.",
                "Tự đánh giá & retrospective: (1) Viết 5–7 dòng về cảm nhận khi chạy một mini test cycle end-to-end (plan → execution → bug tracking → reporting). (2) Liệt kê 3 điều bạn làm tốt (ví dụ: viết bug report rõ, quản lý test cases tốt) và 3 điều cần cải thiện (ví dụ: mất nhiều thời gian tạo test data, dễ quên log Actual Result). (3) Ghi lại 2–3 hành động cụ thể bạn sẽ làm khác đi ở lần test cycle tiếp theo (ví dụ: chuẩn bị test data sớm hơn, dùng template tốt hơn, checklists)."
              ]
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
            content: [
              "Web Testing overview: Giải thích Web Testing là hoạt động kiểm thử dành cho các ứng dụng web (websites, web apps). Mục tiêu: đảm bảo web hoạt động đúng chức năng, hiển thị đẹp và nhất quán trên các trình duyệt/device khác nhau, trải nghiệm người dùng tốt, không có lỗi nghiêm trọng. Các nhóm chính: Functional Testing (chức năng), UI/UX Testing (giao diện & trải nghiệm), Compatibility Testing (trình duyệt/device), Performance Testing (tốc độ, tải), Security Testing (bảo mật cơ bản).",
              "UI Testing: Kiểm tra giao diện người dùng – layout, màu sắc, font, khoảng cách, căn lề, kích thước các thành phần (buttons, inputs, labels, icons), responsive (trên mobile/tablet/desktop), trạng thái hover/focus/active, hiển thị trên các kích thước màn hình khác nhau. UI Testing đảm bảo web 'nhìn' đẹp, chuyên nghiệp và nhất quán với design (Figma, mockup).",
              "Functionality Testing: Kiểm tra các chức năng của web – ví dụ: login, registration, search, filter, add to cart, checkout, profile update. Tester cần kiểm tra happy path (luồng chuẩn) và negative cases (input sai, thiếu, lỗi server, v.v.). Functional Testing trả lời câu hỏi: 'Web có làm đúng những gì business yêu cầu không?'.",
              "Usability Testing: Kiểm tra web có dễ sử dụng với người dùng hay không: navigation có rõ ràng không, nút bấm có dễ thấy không, text có dễ đọc không, lỗi hiển thị có rõ ràng không, form có hướng dẫn đầy đủ không. Usability Testing không chỉ tìm bug functional mà còn tìm 'pain points' trong trải nghiệm người dùng."
            ],
            concepts: [
              "Web Testing là gì? → Là hoạt động kiểm thử tập trung vào ứng dụng web (websites, web apps) để đảm bảo chức năng đúng, giao diện chuẩn, trải nghiệm tốt, hoạt động ổn định trên nhiều trình duyệt/device.",
              "UI Testing tập trung vào giao diện: layout, màu sắc, font, icon, spacing, responsive, trạng thái hover/focus/active. Mục tiêu: web trông đẹp, dễ nhìn, nhất quán với design.",
              "Functional Testing tập trung vào hành vi: web có thực hiện đúng nghiệp vụ không (login, register, search, add to cart, v.v.). Tester cần test cả positive (dữ liệu hợp lệ) và negative (dữ liệu không hợp lệ).",
              "Usability Testing tập trung vào trải nghiệm: người dùng có dễ hiểu, dễ thao tác, dễ hoàn thành mục tiêu không? Lỗi hiển thị có thân thiện không? Navigation có rõ không?",
              "Web Tester cần kết hợp cả Functional, UI và Usability Testing để nhìn web từ góc nhìn người dùng thật, không chỉ 'web chạy được là xong'."
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice UI Testing",
            exercises: [{
              title: "BÀI TẬP: UI Testing",
              duration: "2h",
              tasks: [
                "Chọn một website để test UI: (1) Có thể chọn một trang E-commerce (Shopee/Lazada/Tiki bản web), hoặc một landing page bất kỳ. (2) Xác định trang cụ thể sẽ test (ví dụ: Homepage, Product Listing page, Product Detail page). (3) Chụp screenshot toàn trang để làm reference.",
                "Kiểm tra layout & cấu trúc: (1) Kiểm tra header (logo, menu, search bar, icons) – có căn thẳng hàng, khoảng cách đều không? (2) Kiểm tra body (cards, hình ảnh, text) – các phần có căn lề đúng không, có bị chồng chéo không? (3) Kiểm tra footer – thông tin có đầy đủ và căn chỉnh đẹp không? (4) Ghi lại mọi điểm bất thường: lệch layout, text tràn, element bị che mất.",
                "Kiểm tra colors & fonts: (1) Quan sát màu sắc: background, text, buttons, links – có nhất quán với nhau không (ví dụ: màu brand)? (2) Kiểm tra font: size, weight (bold/regular), line-height – text quan trọng có đủ nổi bật không? (3) Kiểm tra contrast: text trên background có đủ dễ đọc không (đặc biệt là text nhỏ)? (4) Ghi lại issues: text khó đọc, màu sắc chói/lệch, font không nhất quán.",
                "Kiểm tra buttons & links: (1) Kiểm tra tất cả buttons và links chính trên trang: text có rõ ràng không? (2) Hover state: khi hover, button/link có thay đổi màu/underline/focus state phù hợp không? (3) Disabled state (nếu có): có hiển thị rõ ràng không? (4) Click behavior: khi click, có feedback (loading, state change) không? (5) Ghi lại issues: button không phản hồi, link chết, hover/focus không rõ ràng.",
                "Kiểm tra responsive (nếu có thể): (1) Resize cửa sổ browser hoặc dùng DevTools để test ở độ rộng mobile/tablet/desktop. (2) Quan sát: layout có bị vỡ không? Menu có chuyển sang hamburger menu không? Text/images có bị cắt/tràn không? (3) Ghi lại issues: element chồng chéo, nội dung bị che, scroll ngang không cần thiết.",
                "Tổng hợp & document issues: (1) Tạo bảng 'UI Issues List' với các cột: ID, Vị trí (URL + phần UI), Mô tả issue, Expected UI, Screenshot, Severity (UI-Low/Medium/High). (2) Điền tất cả issues đã tìm được. (3) Đánh giá: issue nào ảnh hưởng mạnh đến UX (ví dụ: nút CTA khó nhìn, text khó đọc) → đánh severity cao hơn."
              ]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{
              title: "REVIEW",
              duration: "30 phút",
              tasks: [
                "Tóm tắt lại: Web Testing gồm những loại nào (Functional, UI, Usability), UI Testing tập trung vào những điểm gì (layout, colors, fonts, responsive, buttons/links). Viết ngắn gọn 7-10 dòng bằng lời của bạn.",
                "Xem lại danh sách UI issues đã document: Kiểm tra xem mỗi issue có mô tả rõ ràng không, có screenshot không, Expected UI có cụ thể không. Chọn 1-2 issue và viết lại mô tả/expected cho rõ ràng hơn.",
                "Tự đánh giá: Bạn thấy mình quan sát UI tốt đến mức nào (tự chấm 1-10)? Lần sau test UI, bạn muốn cải thiện điều gì (ví dụ: dùng checklist, so với design, chú ý responsive hơn)? Ghi lại 2-3 ý."
              ]
            }]
          }
        }),
        createDay("Thứ 3", "Form Testing", 4, {
          motivationalQuote: "📝 Forms là nơi users tương tác nhiều nhất!",
          dailyGoals: ["✅ Test form validations", "✅ Test input fields", "✅ Test error messages"],
          morning: {
            title: "Sáng (1.5h): Form Testing",
            content: [
              "Form Testing overview: Form là nơi người dùng nhập dữ liệu (login, registration, contact, checkout, search, v.v.), nên nếu form lỗi sẽ ảnh hưởng trực tiếp đến trải nghiệm và business. Form Testing tập trung vào: cấu trúc form (fields, labels, buttons), validations (required, format, length, rules), error messages (nội dung, vị trí, màu sắc), focus/keyboard behavior, default values, security cơ bản (không cho input nguy hiểm).",
              "Input field testing: Kiểm tra từng field trên form: label có rõ ràng không, placeholder/help text có dễ hiểu không, loại input có đúng không (email, password, number, date), độ dài tối đa, ký tự cho phép, behavior khi focus/blur, behavior khi paste. Cần test cả valid và invalid inputs cho mỗi field.",
              "Validation testing: Mỗi field thường có các validations: required (bắt buộc nhập), format (email, phone, URL), length (min/max), range (age 18-65), uniqueness (email chưa tồn tại), dependencies (nếu chọn A thì phải nhập thêm B). Tester cần test: (1) Không nhập → error required, (2) Nhập sai format → error format, (3) Nhập quá ngắn/dài → error length, (4) Nhập giá trị ngoài range → error range, (5) Các rules đặc biệt khác. Cần đảm bảo validations hoạt động cả trên UI (client-side) và server-side (nếu có).",
              "Error messages: Error message phải: (1) Rõ ràng, dễ hiểu, không technical (ví dụ: 'Email không hợp lệ' thay vì 'Regex failed'), (2) Gần field bị lỗi (dưới field hoặc tooltip), (3) Có màu/dấu hiệu nổi bật (đỏ, icon) nhưng không quá chói, (4) Không tiết lộ thông tin nhạy cảm (nhất là ở login). Tester cần kiểm tra nội dung, vị trí, style, và behavior khi lỗi được sửa (error phải biến mất)."
            ],
            concepts: [
              "Form Testing là gì? → Là hoạt động kiểm thử tập trung vào tất cả khía cạnh của form: cấu trúc fields, validations, error messages, behavior khi submit, reset, focus/keyboard. Form Testing rất quan trọng vì forms thường là nơi user tạo tài khoản, login, gửi contact, checkout.",
              "Validation trong form: Bao gồm required, format, length, range, uniqueness, dependencies. Mỗi validation phải có test cases rõ ràng: valid/invalid, boundary, combinations.",
              "Error messages tốt: Rõ ràng, ngắn gọn, đúng chỗ, đúng màu, không technical, không lộ thông tin nhạy cảm (nhất là với login/password).",
              "Positive vs Negative Testing trên form: Positive – nhập dữ liệu hợp lệ, form submit thành công, điều hướng/feedback đúng; Negative – nhập dữ liệu sai, form không submit, error message hiển thị đúng.",
              "Tester cần vừa test functional (submit thành công/thất bại đúng) vừa test UX (user hiểu được mình sai ở đâu và sửa như thế nào)."
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice Form Testing",
            exercises: [{
              title: "BÀI TẬP: Form Testing",
              duration: "2h",
              tasks: [
                "Chọn 3 forms để test: (1) Registration form (đăng ký tài khoản), (2) Login form, (3) Contact/Feedback form trên một website bất kỳ (có thể là demo hoặc site thật). Ghi lại URL và chụp screenshot mỗi form.",
                "Thiết kế nhanh test ideas cho từng form: (1) Liệt kê tất cả fields trên form (username, email, password, confirm password, phone, message, v.v.), (2) Với mỗi field, viết 2–3 test ideas cho valid input và 3–5 test ideas cho invalid input (format, length, empty, special chars, copy-paste), (3) Viết 2–3 test ideas cho behavior khi submit (submit thành công, submit khi có lỗi, submit khi thiếu field). Không cần viết full test case, chỉ cần list idea rõ ràng.",
                "Thực thi test cho Registration form: (1) Chạy các positive cases: đăng ký với dữ liệu hợp lệ, kiểm tra redirect, email xác nhận (nếu có), trạng thái account, (2) Chạy các negative cases: email sai format, password quá ngắn/dài, confirm password không khớp, bỏ trống required fields, (3) Quan sát error messages: nội dung, vị trí, style, behavior khi sửa lỗi. Ghi lại tất cả issues (functional + UX).",
                "Thực thi test cho Login form: (1) Positive: login với credentials hợp lệ, kiểm tra redirect và UI sau login, (2) Negative: login với username/password sai, empty fields, account locked/disabled (nếu có), (3) Kiểm tra error messages: có phân biệt 'User không tồn tại' vs 'Password sai' không (lưu ý security), hiển thị ở đâu, khi nào biến mất. Ghi lại issues.",
                "Thực thi test cho Contact form: (1) Positive: gửi message với dữ liệu hợp lệ, kiểm tra feedback (thank you message, email confirmation), (2) Negative: để trống required fields, email sai format, message quá ngắn/dài, (3) Kiểm tra behavior sau submit: form reset hay giữ data? Có chặn double submit không? Ghi lại issues.",
                "Document tất cả issues: (1) Tạo bảng 'Form Issues List' với các cột: ID, Form (Registration/Login/Contact), Field, Input used, Expected Behavior, Actual Behavior, Type (Functional/Validation/UX), Severity. (2) Điền tất cả issues đã tìm được. (3) Đánh giá: issues nào là Critical/High (ví dụ: form không submit được dù data hợp lệ), Medium, Low."
              ]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{
              title: "REVIEW",
              duration: "30 phút",
              tasks: [
                "Tóm tắt lại: Form Testing tập trung vào những gì (fields, validations, error messages, submit behavior), phân biệt Positive vs Negative testing trên form. Viết ngắn gọn 7–10 dòng bằng lời của bạn.",
                "Xem lại 'Form Issues List': Kiểm tra xem mỗi issue có đủ thông tin (Form, Field, Input, Expected, Actual, Type, Severity) chưa. Chọn 1–2 issues quan trọng và viết lại Expected/Actual cho rõ hơn như bug report.",
                "Tự đánh giá: Bạn thấy mình hiểu validations trên form đến mức nào (tự chấm 1–10)? Lần sau test form, bạn muốn cải thiện điều gì (ví dụ: viết test ideas rõ hơn, chú ý error messages hơn)? Ghi lại 2–3 ý."
              ]
            }]
          }
        }),
        createDay("Thứ 4", "Navigation & Page Flow", 4, {
          motivationalQuote: "🧭 Navigation tốt là key của UX!",
          dailyGoals: ["✅ Test navigation", "✅ Test page flows", "✅ Test breadcrumbs"],
          morning: {
            title: "Sáng (1.5h): Navigation Testing",
            content: [
              "Navigation Testing: Mục tiêu là đảm bảo người dùng có thể di chuyển (navigate) mượt mà giữa các trang/màn hình trong website: menu chính, menu phụ, breadcrumbs, links trong nội dung, buttons điều hướng (Next/Previous), pagination, logo (về Home), footer links, v.v. Navigation tốt giúp user dễ dàng tìm được thứ họ cần, không bị lạc.",
              "Menu testing: Kiểm tra menu trên desktop (horizontal/vertical) và mobile (hamburger menu): cấu trúc menu (mục chính, submenu), labels (tên mục), trạng thái active/hover, dropdown behavior, phản hồi khi click (đi đúng trang không, có bị double-click mới hoạt động không). Cần test cả behavior khi scroll (sticky header hay không).",
              "Breadcrumb testing: Breadcrumb là đường dẫn hiển thị vị trí hiện tại của user trong cấu trúc site (ví dụ: Home > Category > Product). Cần kiểm tra: breadcrumb hiển thị đúng cấp bậc, mỗi phần breadcrumb là link đúng, không dẫn sai trang, breadcrumb cập nhật đúng khi chuyển trang, style dễ thấy nhưng không gây rối.",
              "Page Flow: Là chuỗi các trang mà user đi qua để hoàn thành một task (ví dụ: Browse → Product Detail → Cart → Checkout → Confirmation). Cần kiểm tra: flow có logic không, có bước nào dư hoặc thiếu không, có thể quay lại bước trước mà không mất data quan trọng, lỗi ở giữa flow được xử lý như thế nào (ví dụ: mất mạng, session hết hạn)."
            ],
            concepts: [
              "Navigation là gì? → Là cách người dùng di chuyển giữa các trang/màn hình trong website/app. Navigation tốt giúp user không bị lạc, dễ tìm thông tin, hoàn thành task nhanh.",
              "Menu Testing: Kiểm tra cấu trúc, labels, behavior (hover, click, dropdown) của menu chính/phụ trên desktop và mobile. Đảm bảo links đúng, không có menu 'chết'.",
              "Breadcrumb Testing: Đảm bảo breadcrumb phản ánh đúng vị trí hiện tại, links trong breadcrumb dẫn đúng, hỗ trợ user 'lùi lại' nhanh chóng.",
              "Page Flow: Chuỗi steps (trang) để hoàn thành 1 task. Tester cần vẽ/hiểu flow trước (ví dụ: Checkout flow) và kiểm tra tất cả các nhánh chính (success, cancelled, error).",
              "Best practices: Navigation nên nhất quán trên mọi trang, rõ ràng, không thay đổi vị trí liên tục. Tester cần nhìn website như một user mới: có dễ tìm được thứ mình cần không?"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice Navigation",
            exercises: [{
              title: "BÀI TẬP: Navigation Testing",
              duration: "2h",
              tasks: [
                "Chọn một website có nhiều trang (ưu tiên E-commerce hoặc tin tức): (1) Ghi lại URL chính và các module chính (Home, Category, Search, Product Detail, Cart, Checkout, Account, v.v.). (2) Vẽ sơ bộ sơ đồ site map hoặc page flow cho 1–2 luồng chính (ví dụ: duyệt sản phẩm và checkout).",
                "Test main menu: (1) Click từng item trong menu chính, kiểm tra trang đích có đúng không, tiêu đề/trang có phù hợp với label menu không, (2) Nếu có submenu/dropdown, hover/click để mở, kiểm tra tất cả links bên trong, (3) Kiểm tra behavior trên mobile (nếu có): hamburger menu có mở/đóng đúng không, có che nội dung hay gây khó thao tác không, (4) Ghi lại tất cả issues: link sai, không phản hồi, dropdown bị che, v.v.",
                "Test page flows chính: (1) Chọn một flow quan trọng, ví dụ: Home → Category → Product Detail → Add to Cart → Cart → Checkout → Confirmation, (2) Thực hiện flow với dữ liệu hợp lệ, kiểm tra mỗi bước: nội dung có đúng ngữ cảnh không, thông tin có được giữ liên tục không (ví dụ: sản phẩm đã chọn vẫn đúng trong Cart/Checkout), (3) Thử quay lại trang trước bằng Back button hoặc link 'Back', kiểm tra state (dữ liệu) có được giữ không, (4) Ghi lại issues: mất state, nhảy sai trang, không quay lại được, loop navigation.",
                "Test breadcrumbs (nếu có): (1) Đi sâu vào 2–3 mức (Home → Category → Subcategory → Detail), kiểm tra breadcrumb hiển thị đầy đủ các mức, (2) Click từng phần của breadcrumb, đảm bảo dẫn đúng trang và breadcrumb cập nhật đúng, (3) Kiểm tra style: breadcrumb dễ thấy, không bị lẫn với nội dung khác, (4) Ghi lại issues: link sai, cấp bậc sai, breadcrumb không cập nhật.",
                "Test browser navigation (Back/Forward/Refresh): (1) Thực hiện 1 flow, sau đó dùng nút Back/Forward của browser để di chuyển, kiểm tra UI và state có nhất quán không (ví dụ: form data, cart items), (2) Thử Refresh giữa flow (ví dụ: ở Cart/Checkout), kiểm tra có lỗi bất thường không, user có bị mất dữ liệu/redirect lạ không, (3) Ghi lại issues: lỗi state, lỗi session, crash, thông báo lỗi khó hiểu.",
                "Tổng hợp findings: (1) Tạo bảng 'Navigation Issues' với các cột: ID, Flow/Area (Menu/Breadcrumb/Page Flow/Browser Nav), Step, Expected Navigation, Actual Navigation, Impact (Low/Medium/High), (2) Điền tất cả issues, (3) Đánh giá flow nào có rủi ro cao nhất (nhiều issues, ảnh hưởng business)."
              ]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{
              title: "REVIEW",
              duration: "30 phút",
              tasks: [
                "Tóm tắt lại: Navigation Testing gồm những phần nào (menu, breadcrumbs, page flows, browser navigation), tại sao navigation tốt lại quan trọng với UX. Viết ngắn gọn 7–10 dòng bằng lời của bạn.",
                "Xem lại 'Navigation Issues': Chọn 2–3 issues quan trọng, thử viết lại chúng như bug report (có Steps to Reproduce, Expected, Actual). Kiểm tra xem bug report có đủ thông tin để developer fix không.",
                "Tự đánh giá: Bạn cảm thấy mình đã hiểu các flow chính của website đến mức nào (tự chấm 1–10)? Lần sau test navigation, bạn muốn cải thiện điều gì (ví dụ: vẽ flow trước khi test, chú ý Back/Refresh hơn)? Ghi lại 2–3 ý."
              ]
            }]
          }
        }),
        createDay("Thứ 5", "Cross-Browser Testing", 4, {
          motivationalQuote: "🌍 Users dùng nhiều browsers khác nhau!",
          dailyGoals: ["✅ Test trên Chrome, Firefox, Safari", "✅ Identify browser issues", "✅ Document differences"],
          morning: {
            title: "Sáng (1.5h): Cross-Browser Concepts",
            content: [
              "Cross-Browser Testing: Mục tiêu là đảm bảo website hiển thị và hoạt động đúng trên nhiều trình duyệt khác nhau (Chrome, Firefox, Safari, Edge, v.v.) và trên nhiều phiên bản nếu cần. Mỗi browser có engine render khác nhau (Blink, Gecko, WebKit,...), nên cùng một code có thể hiển thị khác nhau. Tester cần tìm ra các issues về layout, CSS, JavaScript, fonts, performance,... giữa các browsers.",
              "Browser differences: Các trình duyệt khác nhau ở: (1) Engine render HTML/CSS/JS, (2) Hỗ trợ tiêu chuẩn web (HTML5, CSS3, ES6), (3) Cách xử lý cookies/storage, (4) Cách xử lý security (CORS, mixed content), (5) Hỗ trợ extensions/plugins. Các khác biệt này có thể dẫn đến: layout vỡ trên một browser, script không chạy, font không load, behavior khác nhau (ví dụ: scroll, focus).",
              "Testing strategy: Vì không thể test mọi browser + mọi version, cần có chiến lược: (1) Xác định target browsers dựa trên user analytics (Chrome, Safari trên iOS, v.v.), (2) Chọn danh sách browsers 'must support' (ví dụ: Chrome last 2 versions, Firefox latest, Safari latest), (3) Với mỗi browser, test trước Smoke/critical flows (login, main navigation, checkout), sau đó test thêm UI chi tiết nếu cần, (4) Sử dụng tools (BrowserStack, Sauce Labs) nếu không có đủ devices/browsers thật."
            ],
            concepts: [
              "Cross-Browser Testing là gì? → Là việc test website trên nhiều browsers/versions/devices khác nhau để đảm bảo tính tương thích (compatibility).",
              "Browser Compatibility: Website 'compatible' khi layout, chức năng, interactions hoạt động đúng và nhất quán trên các browsers/versions tối thiểu mà team cam kết support.",
              "Rendering Differences: Do khác biệt engine, có thể xảy ra: margin/padding khác, font rendering khác, flexbox/grid behavior khác, JS APIs không support trên browser cũ.",
              "Chiến lược Cross-Browser: Không test tất cả, mà chọn danh sách target dựa trên data (analytics) và business (thị trường, khách hàng). Ưu tiên test flows critical trước.",
              "Best practices: Luôn test trên ít nhất 2–3 browsers phổ biến, ghi rõ browser/version/device khi report bug, dùng screenshot/video để minh hoạ differences."
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice Cross-Browser",
            exercises: [{
              title: "BÀI TẬP: Cross-Browser Testing",
              duration: "2h",
              tasks: [
                "Chọn website & flows: (1) Chọn một website (ưu tiên E-commerce hoặc ứng dụng web có nhiều interactions), (2) Xác định 2–3 flows critical để test cross-browser: ví dụ: Login, Search + View Product, Add to Cart + Checkout. (3) Ghi lại flows cụ thể sẽ test.",
                "Chuẩn bị browsers/devices: (1) Dùng ít nhất 3 browsers: Chrome (desktop), Firefox (desktop), Safari (macOS hoặc iOS). Nếu không có Mac/iOS, có thể xem video/demo hoặc dùng online service nếu có. (2) Ghi lại version của mỗi browser. (3) Chuẩn bị sẵn test data (accounts, products, v.v.).",
                "Thực thi flows trên từng browser: (1) Với mỗi flow, chạy trên từng browser theo cùng một bộ steps, (2) Quan sát và so sánh: layout, fonts, buttons, interactions (hover, click, focus), behavior sau submit. (3) Ghi lại mọi differences: ví dụ: layout ổn trên Chrome nhưng vỡ trên Firefox, button bị lệch trên Safari, scroll behavior khác, JS error trên một browser.",
                "Kiểm tra UI chi tiết trên các browsers: (1) So sánh header/footer, forms, tables, modals, popups, (2) Kiểm tra responsive trên mỗi browser (nếu có thể), (3) Ghi lại differences về CSS (padding, margin, alignment, overflow), (4) Dùng DevTools (hoặc screenshot) để minh hoạ.",
                "Tạo compatibility report: (1) Tạo bảng 'Cross-Browser Issues' với các cột: ID, Browser/Version, Page/Flow, Element, Expected (behavior trên browser chuẩn, ví dụ: Chrome), Actual (behavior trên browser gặp lỗi), Type (UI/Functional/Performance), Severity, Screenshot, (2) Điền tất cả differences đã phát hiện. (3) Đánh giá: issues nào ảnh hưởng mạnh đến user (ví dụ: checkout không chạy trên Safari) → Severity cao.",
                "Đề xuất chiến lược support: Dựa trên findings, viết 5–7 dòng về: (1) Browsers nào hiện tại support tốt, (2) Browsers nào có nhiều issues, (3) Đề xuất: nên fix issues nào trước, có cần điều chỉnh danh sách browsers 'officially supported' không, (4) Cần thu thập thêm analytics gì để ra quyết định tốt hơn."
              ]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{
              title: "REVIEW",
              duration: "30 phút",
              tasks: [
                "Tóm tắt lại: Cross-Browser Testing là gì, tại sao không thể test tất cả browsers/versions, cách chọn danh sách browsers mục tiêu. Viết ngắn gọn 7–10 dòng bằng lời của bạn.",
                "Xem lại 'Cross-Browser Issues': Kiểm tra xem mỗi issue có ghi rõ browser/version, Expected vs Actual, impact chưa. Chọn 1–2 issues quan trọng và viết lại như bug report chi tiết.",
                "Tự đánh giá: Bạn cảm thấy tự tin đến mức nào khi đi test một flow trên nhiều browsers (tự chấm 1–10)? Bạn muốn cải thiện điều gì (ví dụ: dùng tools remote browsers, ghi chú differences tốt hơn)? Ghi lại 2–3 ý."
              ]
            }]
          }
        }),
        createWeekendDay("Thứ 6", "Weekend Project - E-commerce Web Testing", {
          dailyGoals: ["✅ Complete web testing", "✅ Test UI, Forms, Navigation", "✅ Cross-browser"],
          morning: {
            exercises: [{
              title: "PHASE 1: UI & Form Testing",
              duration: "4h",
              tasks: [
                "Chọn một E-commerce site (thật hoặc demo): Ví dụ: một site bán hàng đơn giản (có Home, Category, Product Detail, Cart, Checkout). Ghi lại URL và mô tả ngắn về site (2–3 dòng).",
                "Thiết lập phạm vi UI & Form cần test: (1) UI: Header, Footer, Homepage sections, Product listing cards, Product detail area, Cart summary, Checkout form. (2) Forms: Login/Registration, Search, Add to Cart/Quantity, Checkout (shipping/billing), Contact/Support (nếu có).",
                "Thực hiện UI Testing chi tiết: Áp dụng checklist ngày Thứ 2 – kiểm tra layout, colors, fonts, buttons/links, responsive cho các trang chính (Home, Category, Product Detail, Cart, Checkout). Ghi lại tất cả UI issues vào 'UI Issues List' với Severity ước lượng.",
                "Thực hiện Form Testing chi tiết: Áp dụng checklist ngày Thứ 3 – test validations & error messages cho các forms quan trọng (Login, Registration, Checkout). Bao gồm positive/negative/boundary cases. Ghi lại tất cả form issues vào 'Form Issues List' với Type & Severity."
              ]
            }]
          },
          afternoon: {
            exercises: [{
              title: "PHASE 2: Navigation & Cross-Browser",
              duration: "4h",
              tasks: [
                "Thiết kế và test 2–3 E2E page flows chính: (1) Browse → View Product → Add to Cart → Cart → Checkout (có/không login), (2) Search → Filter → View Product, (3) Login → View Order History (nếu có). Vẽ sơ bộ flow cho mỗi luồng, sau đó test Navigation & Page Flow chi tiết (Back/Forward, breadcrumbs, menu, giữ state). Ghi lại issues vào 'Navigation Issues'.",
                "Thực hiện Cross-Browser Testing cho flows chính: (1) Chạy lại các flows E2E trên ít nhất 3 browsers: Chrome, Firefox, Safari (hoặc tương đương), (2) Ghi lại mọi differences về UI/behavior, bổ sung vào 'Cross-Browser Issues'.",
                "Ưu tiên hóa issues: Gộp các bảng 'UI Issues', 'Form Issues', 'Navigation Issues', 'Cross-Browser Issues' thành một bảng tổng (Issue Backlog) với các cột: ID, Area (UI/Form/Nav/Cross-Browser), Page/Flow, Severity, Priority. Đánh Priority cho từng issue (High/Medium/Low) dựa trên impact và tần suất.",
                "Chuẩn bị dữ liệu metrics sơ bộ: Đếm số issues theo Area (UI/Form/Nav/Cross), theo Severity (High/Medium/Low), theo Page/Flow (Home, Category, Cart, Checkout). Các số liệu này sẽ dùng cho report buổi tối."
              ]
            }]
          },
          evening: {
            exercises: [{
              title: "PHASE 3: Test Report",
              duration: "4h",
              tasks: [
                "Tạo Web Test Summary Report cho E-commerce site: Sử dụng template đã học ở tuần 3, viết report tập trung vào: (1) Scope – các trang/flows đã test, (2) Approach – loại test đã làm (UI, Form, Navigation, Cross-Browser), (3) Kết quả tổng quan – số issues tìm được, phân bổ theo Severity/Area, cảm nhận về chất lượng tổng thể, (4) Risks – các rủi ro chính (ví dụ: checkout flow có nhiều issues trên Safari), (5) Recommendations – đề xuất fix/ưu tiên.",
                "Tạo 1–2 biểu đồ minh hoạ: (1) Pie Chart hoặc Bar Chart cho issues theo Severity, (2) Bar Chart cho issues theo Area (UI/Form/Nav/Cross), (3) (Optional) Bảng cho issues High Priority với mô tả ngắn & page/flow tương ứng.",
                "Chuẩn bị mini-presentation (3–5 slides): (1) Slide 1 – Giới thiệu site & scope testing, (2) Slide 2 – Kết quả chính & metrics, (3) Slide 3 – Top issues & ảnh hưởng business, (4) Slide 4 – Recommendations & next steps. Mục tiêu: bạn có thể thuyết trình 5–7 phút về kết quả testing của mình.",
                "Retrospective cá nhân: Viết 5–10 dòng trả lời: (1) Điều gì bạn làm tốt trong Weekend Project này? (2) Điều gì gặp khó khăn nhất (ví dụ: ghi chép issues, so sánh browsers, quản lý thời gian)? (3) Nếu lặp lại project tương tự, bạn sẽ chuẩn bị khác đi như thế nào (checklist tốt hơn, chọn scope nhỏ hơn, dùng tool hỗ trợ,...). Lưu lại notes này để dùng khi viết portfolio/phỏng vấn."
              ]
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
            content: [
              "Tổng quan Test Documentation: Documentation trong testing là tất cả các tài liệu dùng để lập kế hoạch, mô tả, thực thi và báo cáo testing. Bao gồm: Test Plan, Test Cases, Test Scripts, Bug Reports, Test Summary Report, RTM, Test Data docs, Checklists, v.v. Documentation tốt giúp team align, tránh bỏ sót, dễ review/audit và dễ onboard thành viên mới.",
              "Test Plan: Tài liệu mô tả chiến lược và kế hoạch testing cho một scope cụ thể (project/module/feature). Nội dung: Scope, Objectives, Approach, Test Levels/Types, Environment, Schedule, Resources, Risks, Entry/Exit Criteria, Deliverables. Test Plan giúp mọi người hiểu 'chúng ta sẽ test cái gì, như thế nào, trong bao lâu'.",
              "Test Cases & Test Scripts: Test Case là mô tả logic test (ID, Title, Preconditions, Steps, Expected). Test Script (trong manual context) có thể hiểu là tập hợp các test cases theo thứ tự để thực thi, hoặc các script cụ thể để lặp lại (checklist step-by-step). Trong automation, Test Script là code auto. Tester cần viết test cases đủ rõ để người khác chạy được.",
              "Bug Reports & Test Summary Report: Bug Report là tài liệu mô tả từng bug cụ thể (như đã học tuần 3). Test Summary Report là tài liệu tổng hợp kết quả test cuối một phase/sprint/release, trình bày metrics, defects, risks, recommendations. Cả hai đều là documentation quan trọng khi làm việc với stakeholders.",
              "RTM (Requirements Traceability Matrix): RTM là bảng mapping giữa Requirements (yêu cầu) và Test Cases. Mục tiêu: đảm bảo mỗi requirement đều có test coverage và có thể truy vết từ requirement → test cases → defects → results. RTM thường được dùng trong audit, review chất lượng, hoặc các domain cần tuân thủ (finance, healthcare)."
            ],
            concepts: [
              "Test Documentation bao gồm: Test Plan, Test Cases/Scripts, Bug Reports, Test Summary Reports, RTM, Test Data docs, Checklists,... Mỗi loại phục vụ một mục đích khác nhau.",
              "Test Plan trả lời: 'Chúng ta sẽ test cái gì, như thế nào, ai làm, khi nào xong, rủi ro là gì?'.",
              "Test Cases giúp đảm bảo coverage chi tiết và khả năng tái sử dụng khi regression.",
              "Bug Reports và Test Summary Reports là cầu nối thông tin giữa QA và các bên liên quan.",
              "RTM (Traceability) đảm bảo không bỏ sót requirement nào và giúp nhanh chóng biết requirement nào bị ảnh hưởng khi test case fail hoặc bug xuất hiện."
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice RTM",
            exercises: [{
              title: "BÀI TẬP: Create RTM",
              duration: "2h",
              tasks: [
                "Liệt kê requirements cho một feature đơn giản: Chọn 1 feature (ví dụ: Login hoặc Registration). Viết 5–10 requirements dạng đơn giản, đánh số ID: REQ-01, REQ-02,... Ví dụ: REQ-01: Hệ thống cho phép login với email + password hợp lệ; REQ-02: Hệ thống hiển thị error message khi email/password không hợp lệ; REQ-03: Hệ thống hỗ trợ 'Remember me'; ...",
                "Mapping requirements → test cases: Lấy bộ test cases đã viết cho feature đó (từ các tuần trước hoặc viết nhanh 8–15 test cases). Với mỗi test case, xác định requirement(s) mà nó cover. Ví dụ: TC_LOGIN_001 (valid login) cover REQ-01; TC_LOGIN_002 (invalid password) cover REQ-02; TC_LOGIN_008 (Remember me) cover REQ-03,...",
                "Tạo bảng RTM: Tạo một bảng Excel/Google Sheets với các cột tối thiểu: Requirement ID, Requirement Description, Test Case IDs, Coverage Status. Mỗi dòng là một requirement, ô Test Case IDs liệt kê các test case tương ứng (phân tách bằng dấu phẩy). Thêm cột 'Remarks' để ghi chú (ví dụ: 'Need more negative tests').",
                "Tính Coverage: Thêm một ô tổng kết: (1) Đếm tổng số requirements, (2) Đếm số requirements có ít nhất 1 test case (Covered), (3) Đếm số requirements chưa có test case (Not Covered), (4) Coverage% = (Covered / Total) × 100%. Đánh dấu màu đỏ cho các requirements Not Covered – đây là chỗ cần bổ sung test cases.",
                "Refine Test Cases dựa trên RTM: Dựa vào RTM, viết thêm hoặc chỉnh sửa test cases để cover các requirements còn thiếu. Cập nhật lại bảng RTM cho đến khi tất cả requirements quan trọng đều được cover tối thiểu 1 test case."
              ]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{
              title: "REVIEW",
              duration: "30 phút",
              tasks: [
                "Tóm tắt lại: Các loại Test Documentation chính là gì (Test Plan, Test Cases, Bug Reports, Test Summary Report, RTM), RTM dùng để làm gì. Viết ngắn gọn 7–10 dòng bằng lời của bạn.",
                "Xem lại bảng RTM đã tạo: Kiểm tra xem có requirement nào chưa được cover không? Có requirement nào được cover bởi quá nhiều test case trùng lặp không? Ghi chú lại 1–2 chỗ cần tối ưu.",
                "Tự đánh giá: Bạn thấy mình hiểu RTM đến mức nào (tự chấm 1–10)? Bạn có thấy việc giữ RTM hữu ích cho việc chứng minh coverage và làm việc với khách hàng/audit không? Ghi lại 2–3 ý tưởng để áp dụng RTM trong project thực tế."
              ]
            }]
          }
        }),
        createDay("Thứ 3", "Test Management Tools", 4, {
          motivationalQuote: "🛠️ Tools giúp quản lý Test Cases hiệu quả!",
          dailyGoals: ["✅ Sử dụng TestRail/Zephyr", "✅ Quản lý Test Cases", "✅ Track execution"],
          morning: {
            title: "Sáng (1.5h): TestRail Introduction",
            content: [
              "Test Management là gì: Là việc tổ chức, lưu trữ, thực thi và theo dõi Test Cases/Test Runs một cách có hệ thống bằng tools chuyên dụng (TestRail, Zephyr, Xray, qTest,...). So với dùng Excel, tools giúp: dễ tìm kiếm, phân quyền, history, traceability, report/metrics tự động.",
              "TestRail overview: TestRail là một trong những Test Management tools phổ biến. Các khái niệm chính: Project (dự án), Test Suite (nhóm test cases), Section (nhóm nhỏ trong suite), Test Case, Test Run (lần chạy), Milestone, Report. Tester chủ yếu làm việc với Test Cases, Test Runs và Reports.",
              "Setup cơ bản trong TestRail: (1) Tạo Project mới (ví dụ: 'WebApp Testing'), (2) Chọn kiểu suite (single/multiple), (3) Tạo Sections cho các modules (Login, Registration, Checkout,...), (4) Tạo Test Cases trong từng section với fields chuẩn: Title, Preconditions, Steps, Expected Result, Priority, Type. Có thể custom thêm fields nếu cần.",
              "Tổ chức & best practices: Nên tổ chức Test Cases theo module/feature, dùng naming rõ ràng, dùng tags/Type/Priority để filter, tránh tạo quá nhiều test giống nhau. Nên link Test Cases với Requirements/RTM (nếu tool hỗ trợ) để giữ traceability."
            ],
            concepts: [
              "Test Management = Quản lý toàn bộ vòng đời Test Cases và Test Runs bằng tools, không chỉ lưu file Excel.",
              "TestRail cung cấp: Project, Test Suites, Sections, Test Cases, Test Runs, Milestones, Reports.",
              "Tổ chức tốt (structure rõ, naming chuẩn, tags) giúp team dễ tìm, dễ reuse, dễ report.",
              "Tools không thay thế tư duy test, nhưng giúp tiết kiệm thời gian và giảm lỗi trong quản lý.",
              "Tester nên nắm được ít nhất một Test Management tool phổ biến để quen với môi trường doanh nghiệp."
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice với TestRail",
            exercises: [{
              title: "BÀI TẬP: TestRail Practice",
              duration: "2h",
              tasks: [
                "Giả lập hoặc sử dụng TestRail (hoặc tool tương đương / template Notion/Google Sheets nếu không có tool thật): (1) Tạo Project 'Login Feature', (2) Tạo Test Suite 'Login', (3) Tạo Sections 'Positive', 'Negative', 'Security' (nếu có).",
                "Import/nhập Test Cases: (1) Lấy 15–20 test cases Login đã viết ở các tuần trước, nhập vào TestRail (hoặc bảng quản lý test tương đương) với đầy đủ fields: Title, Preconditions, Steps, Expected Result, Priority, Type. (2) Đảm bảo ID/Test Case Reference rõ ràng (ví dụ: LOGIN-001,...).",
                "Tạo Test Run & track execution: (1) Tạo Test Run mới 'Login Regression Run #1', add tất cả test cases Login, (2) Đánh dấu kết quả giả lập cho mỗi case: Pass/Fail/Blocked/Not Run, (3) Với các case Fail, link Bug ID (giả lập Jira ID) vào field tương ứng hoặc comment, (4) Quan sát TestRail hiển thị progress (số case Pass/Fail,...).",
                "Tổ chức & filter: (1) Thử tạo filter/nhóm hiển thị: test cases Priority = High, Type = Regression, hoặc chỉ các test Fail trong run, (2) Thử clone Test Run cho đợt test mới (Regression Run #2) và thay đổi kết quả để thấy history, (3) Ghi lại cách filter/run giúp bạn quản lý execution dễ hơn như thế nào.",
                "Tự thiết kế 'mini Test Management' nếu không có tool: (1) Tạo Google Sheet với các sheet: 'TestCases', 'TestRuns', 'Reports', (2) Thiết kế cột tương tự TestRail: ID, Title, Preconditions, Steps, Expected, Priority, Status, RunID, BugID, (3) Thử nhập vài cases và simulate 1 Test Run. Mục tiêu: hiểu concept Test Management ngay cả khi không có tool thương mại."
              ]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{
              title: "REVIEW",
              duration: "30 phút",
              tasks: [
                "Tóm tắt lại: Test Management là gì, TestRail (hoặc tool tương đương) dùng để làm gì, khác Excel ở đâu. Viết ngắn gọn 7–10 dòng bằng lời của bạn.",
                "Xem lại cấu trúc project/test suite bạn đã tạo: Sections và naming đã rõ ràng chưa? Có test cases nào nên được gom/đổi tên không? Ghi lại 2–3 cải tiến bạn sẽ áp dụng lần tới.",
                "Tự đánh giá: Bạn cảm thấy tự tin đến mức nào khi phải học nhanh một Test Management tool mới (tự chấm 1–10)? Bạn muốn cải thiện kỹ năng gì (ví dụ: tổ chức test tree, dùng filters, đọc reports)? Ghi lại 2–3 ý."
              ]
            }]
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

    // TUẦN 11: Performance Testing Fundamentals
    {
      week: 11,
      title: "PERFORMANCE TESTING FUNDAMENTALS",
      goals: [
        "Hiểu Performance Testing (Load, Stress, Spike)",
        "Biết các KPIs cơ bản: response time, throughput, error rate",
        "Thiết kế kịch bản nhỏ cho Login/Search"
      ],
      metrics: { mouseUsage: "N/A", shortcutsLearned: 0, comfortLevel: "8/10" },
      finalProject: {
        title: "Mini Load Test cho Login/Search",
        description: "Thiết kế và phân tích 1 kịch bản load đơn giản cho 1–2 flow quan trọng",
        requirements: [
          "Xác định KPIs cần theo dõi",
          "Thiết kế scenario với user load nhỏ",
          "Đọc và tóm tắt được report cơ bản"
        ],
        deliverables: ["Test scenario", "Ghi chú chạy test", "Mini performance report"],
        estimatedHours: 8
      },
      days: [
        createDay("Thứ 2", "Perf Concepts & KPIs", 4, {
          motivationalQuote: "⚡ Performance tốt giữ chân người dùng!",
          dailyGoals: [
            "✅ Phân biệt Load/Stress/Spike",
            "✅ Nhớ 3 KPIs chính: response time, throughput, error rate"
          ],
          morning: {
            title: "Sáng (1.5h): Lý thuyết",
            content: [
              "Sự khác nhau giữa Load, Stress, Spike",
              "Response time percentiles (P90/P95/P99)",
              "Error rate & throughput (TPS/RPS)"
            ],
            concepts: [
              "Không bắn tải cực lớn ngay từ đầu",
              "Performance test là để tìm giới hạn và bottleneck, không chỉ để 'pass/fail'"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Thiết kế kịch bản mini",
            exercises: [{
              title: "Design scenario cho Login hoặc Search",
              duration: "2h",
              tasks: [
                "Chọn 1 flow (Login hoặc Search) quan trọng trong sản phẩm",
                "Xác định dữ liệu cần dùng (account, query, ...)",
                "Ước lượng user đồng thời (VD: 10–20 users) và thời gian chạy (VD: 10–15 phút)",
                "Ghi lại mục tiêu: P95 response time mong muốn, error rate tối đa chấp nhận"
              ]
            }]
          }
        }),
        createDay("Thứ 4", "Tool & Report Reading", 4, {
          motivationalQuote: "📈 Đọc report đúng giúp ra quyết định đúng!",
          dailyGoals: [
            "✅ Hiểu cấu trúc basic của 1 test plan trong tool (JMeter/ tương đương)",
            "✅ Đọc được report đơn giản từ 1 lần chạy test"
          ],
          morning: {
            title: "Sáng (1.5h): Tool overview (mức conceptual)",
            content: [
              "Thread Group: số user, ramp‑up, duration",
              "Sampler vs Listener (request vs cách hiển thị kết quả)",
              "Ý nghĩa một số biểu đồ phổ biến (Response Times Over Time, Transactions per Second)"
            ],
            concepts: [
              "Mỗi lần đổi cấu hình (user, ramp‑up, duration) đều phải ghi lại để so sánh",
              "Report chỉ hữu ích khi biết mình đang nhìn chỉ số nào"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Đọc 1 report mẫu",
            exercises: [{
              title: "Mini report review",
              duration: "2h",
              tasks: [
                "Lấy 1 báo cáo mẫu (hoặc report export từ lần chạy thử)",
                "Xác định P95 response time, TPS trung bình, error rate tổng",
                "Ghi chú đoạn thời gian nào có spike (nếu có)",
                "Viết 3–5 dòng kết luận: tình hình hiện tại, câu hỏi cần hỏi Dev/Infra"
              ]
            }]
          }
        })
      ]
    },

    // TUẦN 12: Security Testing Fundamentals
    {
      week: 12,
      title: "SECURITY TESTING FUNDAMENTALS",
      goals: [
        "Nắm OWASP Top 10 ở mức khái niệm",
        "Thực hành XSS/SQLi đơn giản trên form",
        "Viết được 2–3 security finding rõ ràng"
      ],
      metrics: { mouseUsage: "N/A", shortcutsLearned: 0, comfortLevel: "8/10" },
      finalProject: {
        title: "Security Quick Check cho Form Login/Signup",
        description: "Thực hiện security smoke test cơ bản cho 2 form quan trọng",
        requirements: [
          "Thử XSS đơn giản trên các input text",
          "Thử SQLi đơn giản trên các field liên quan tới DB",
          "Ghi lại behavior & viết mini‑report"
        ],
        deliverables: ["Danh sách findings", "Repro steps", "Đề xuất fix"],
        estimatedHours: 8
      },
      days: [
        createDay("Thứ 2", "OWASP & Input Validation", 4, {
          motivationalQuote: "🛡️ Input sạch giúp hệ thống khoẻ mạnh!",
          dailyGoals: [
            "✅ Biết XSS/SQLi là gì và tại sao nguy hiểm",
            "✅ Hiểu vai trò của error message và logging"
          ],
          morning: {
            title: "Sáng (1.5h): OWASP overview",
            content: [
              "OWASP Top 10 – ý tưởng chung (không cần thuộc lòng từng mã)",
              "XSS basics: script injection qua input/output",
              "SQL injection basics: chèn query qua input",
              "Nguyên tắc error handling: không leak stack trace/query cho user"
            ],
            concepts: [
              "Luôn coi input từ user là không tin cậy",
              "Thông điệp lỗi cho user nên đơn giản; thông tin chi tiết để trong log nội bộ"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Security smoke test",
            exercises: [{
              title: "Thử XSS/SQLi trên môi trường test",
              duration: "2h",
              tasks: [
                "Chọn 1–2 form (Login, Signup, Search) trong môi trường test",
                "Thử payload XSS: `<script>alert(1)</script>` và biến thể đơn giản",
                "Thử payload SQLi: `' OR 1=1 --` trên trường username/password (nếu phù hợp)",
                "Ghi lại behavior: có popup, có lỗi SQL, có lộ stack trace không",
                "Chụp screenshot & ghi chú cho mỗi behavior bất thường"
              ]
            }]
          }
        }),
        createDay("Thứ 4", "Security Findings & Mini‑Report", 4, {
          motivationalQuote: "📝 Finding rõ + impact rõ = Dev fix nhanh!",
          dailyGoals: [
            "✅ Viết ít nhất 2 security finding hoàn chỉnh",
            "✅ Mô tả được impact ở mức business/user",
            "✅ Đề xuất fix tương ứng"
          ],
          morning: {
            title: "Sáng (1.5h): Cấu trúc 1 finding tốt",
            content: [
              "Title ngắn gọn, mô tả đúng vấn đề",
              "Steps to Reproduce rõ ràng, từng bước",
              "Expected vs Actual – tránh mơ hồ",
              "Impact (Low/Medium/High) + Recommendation (hướng fix)"
            ],
            concepts: [
              "Impact nên nói về rủi ro cho user/business (mất dữ liệu, lộ thông tin, ...)",
              "Recommendation không cần quá technical, chỉ cần chỉ hướng đúng (validate/encode/sanitize, ...)"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Viết mini‑report",
            exercises: [{
              title: "Security mini‑report",
              duration: "2h",
              tasks: [
                "Chọn 2–3 behavior bất thường từ buổi smoke test",
                "Viết đầy đủ 4 phần cho mỗi finding",
                "Đánh severity và giải thích ngắn gọn lý do",
                "Gom tất cả vào 1 tài liệu (Google Docs/Notion) – để sau có thể đưa vào portfolio"
              ]
            }]
          }
        })
      ]
    },

    // TUẦN 13: Exploratory & Session-Based Testing
    {
      week: 13,
      title: "EXPLORATORY & SESSION-BASED TESTING",
      goals: [
        "Hiểu rõ Exploratory Testing là gì và khác gì Scripted Testing",
        "Biết cách lập charter cho 1 session test",
        "Thực hành ít nhất 3 session exploratory trên 1 sản phẩm"
      ],
      metrics: { mouseUsage: "N/A", shortcutsLearned: 0, comfortLevel: "8/10" },
      finalProject: {
        title: "Exploratory Test Pack cho 1 module quan trọng",
        description: "Thiết kế và chạy nhiều session exploratory, ghi lại notes và bugs",
        requirements: [
          "Tạo ít nhất 3 charters",
          "Thực hiện testing theo time-box",
          "Ghi lại findings và đề xuất cải thiện"
        ],
        deliverables: ["Danh sách charters", "Session notes", "Danh sách bugs/observations"],
        estimatedHours: 8
      },
      days: [
        createDay("Thứ 2", "Exploratory Testing Fundamentals", 4, {
          motivationalQuote: "🔍 Exploratory giúp bạn thấy những thứ spec không nói tới!",
          dailyGoals: [
            "✅ Hiểu tư duy Exploratory",
            "✅ Biết khi nào nên dùng Exploratory thay vì Scripted"
          ],
          morning: {
            title: "Sáng (1.5h): Khái niệm & Mindset",
            content: [
              "Exploratory vs Scripted Testing",
              "Role của tester: học sản phẩm, thiết kế test, thực thi và phân tích song song",
              "Time-boxing và session",
              "Charter là gì?"
            ],
            concepts: [
              "Không chỉ 'điền form' theo Test Case – mà còn quan sát, đặt câu hỏi, thử nghiệm",
              "Mỗi session cần mục tiêu rõ ràng để không bị 'lang thang' vô định"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Tạo charters đầu tiên",
            exercises: [{
              title: "Design 3 charters",
              duration: "2h",
              tasks: [
                "Chọn 1 module (VD: Checkout, Profile, Search)",
                "Viết 3 charters khác nhau (VD: Error handling, Usability, Edge cases)",
                "Mỗi charter ghi rõ: mục tiêu, scope, dữ liệu dự kiến, rủi ro cần chú ý",
                "Chuẩn bị template notes cho mỗi session (time, steps, observation, ideas)"
              ]
            }]
          }
        }),
        createDay("Thứ 4", "Thực hành Exploratory theo Session", 4, {
          motivationalQuote: "⏱ Time-box tốt giúp bạn tập trung và không bị loãng!",
          dailyGoals: [
            "✅ Chạy ít nhất 2 session 45–60 phút",
            "✅ Ghi lại đầy đủ notes, bugs, câu hỏi"
          ],
          morning: {
            title: "Sáng (1.5h): Chuẩn bị & setup session",
            content: [
              "Chọn environment & dữ liệu test",
              "Chọn 2 charter từ buổi trước",
              "Thống nhất time-box cho mỗi session (VD: 45–60 phút)",
              "Định nghĩa xong khi nào 1 session được coi là 'thành công'"
            ],
            concepts: [
              "Không cố test mọi thứ trong 1 session",
              "Session tốt = tập trung, nhiều quan sát chất lượng"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Run sessions & ghi notes",
            exercises: [{
              title: "Run 2 exploratory sessions",
              duration: "2h",
              tasks: [
                "Chạy Session 1 theo charter đã chọn, ghi lại tất cả observations & bugs",
                "Chạy Session 2 (focus khía cạnh khác: usability/performance cảm nhận, ...)",
                "Đánh dấu những khu vực rủi ro cao hoặc cần test sâu hơn",
                "Tổng hợp nhanh: top 3 vấn đề lớn nhất tìm thấy"
              ]
            }]
          }
        })
      ]
    },

    // TUẦN 14: Risk-Based Testing & Prioritization
    {
      week: 14,
      title: "RISK-BASED TESTING & PRIORITIZATION",
      goals: [
        "Hiểu risk-based testing và tại sao quan trọng khi tài nguyên có hạn",
        "Biết cách đánh giá risk theo Impact x Likelihood",
        "Ưu tiên test cases & areas dựa trên risk"
      ],
      metrics: { mouseUsage: "N/A", shortcutsLearned: 0, comfortLevel: "8.5/10" },
      finalProject: {
        title: "Risk Matrix & Priority cho 1 release",
        description: "Xây risk matrix cho 1 module và ưu tiên test theo risk",
        requirements: [
          "Liệt kê các khu vực chính trong module",
          "Đánh giá risk cho từng khu vực",
          "Tạo danh sách test ưu tiên cao"
        ],
        deliverables: ["Risk matrix", "Danh sách test high-priority", "Ghi chú trade-off"],
        estimatedHours: 8
      },
      days: [
        createDay("Thứ 2", "Risk-Based Testing Fundamentals", 4, {
          motivationalQuote: "🎯 Test đúng chỗ quan trọng giúp tiết kiệm rất nhiều thời gian!",
          dailyGoals: [
            "✅ Hiểu khái niệm risk trong testing",
            "✅ Biết công thức đơn giản: Risk = Impact x Likelihood"
          ],
          morning: {
            title: "Sáng (1.5h): Lý thuyết risk",
            content: [
              "Risk trong software là gì?",
              "Impact vs Likelihood",
              "Business critical vs nice-to-have",
              "Ví dụ risk: mất tiền, mất dữ liệu, vi phạm pháp lý, UX tệ"
            ],
            concepts: [
              "Không phải bug nào cũng quan trọng như nhau",
              "Tester cần hiểu business để đánh giá risk chính xác"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Tạo risk list cho 1 module",
            exercises: [{
              title: "Risk listing",
              duration: "2h",
              tasks: [
                "Chọn 1 module (VD: Payment, Order, User Management)",
                "Liệt kê các chức năng chính trong module đó",
                "Cho mỗi chức năng, brainstorm các risk lớn (tối thiểu 3 risk/function)",
                "Ghi lại mô tả ngắn cho mỗi risk"
              ]
            }]
          }
        }),
        createDay("Thứ 4", "Risk Matrix & Test Prioritization", 4, {
          motivationalQuote: "📊 Quyết định dựa trên risk giúp team tập trung effort đúng chỗ.",
          dailyGoals: [
            "✅ Hoàn thành risk matrix đơn giản",
            "✅ Tạo được danh sách test ưu tiên cao"
          ],
          morning: {
            title: "Sáng (1.5h): Xây risk matrix",
            content: [
              "Scale cho Impact & Likelihood (VD: 1–5)",
              "Tính Risk Score = Impact x Likelihood",
              "Phân nhóm risk: High/Medium/Low",
              "Ví dụ bảng risk matrix đơn giản trên Google Sheets"
            ],
            concepts: [
              "Không cần quá phức tạp – quan trọng là consistent và dễ hiểu",
              "Risk High => cần nhiều test case hơn, độ sâu cao hơn"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Map risk -> test",
            exercises: [{
              title: "Ưu tiên test theo risk",
              duration: "2h",
              tasks: [
                "Dùng danh sách risk từ buổi trước, gán Impact & Likelihood cho từng cái",
                "Tạo bảng Risk Score và sort High -> Low",
                "Cho mỗi risk High, liệt kê 2–3 test case quan trọng cần có",
                "Đánh dấu các khu vực có thể bỏ bớt test nếu thời gian gấp (Medium/Low)"
              ]
            }]
          }
        })
      ]
    },

    // TUẦN 15: Usability & UX Testing
    {
      week: 15,
      title: "USABILITY & UX TESTING",
      goals: [
        "Hiểu nguyên tắc cơ bản về Usability & UX",
        "Biết cách phát hiện vấn đề UX thường gặp",
        "Thiết kế và chạy 1 mini usability review cho 1 flow"
      ],
      metrics: { mouseUsage: "N/A", shortcutsLearned: 0, comfortLevel: "9/10" },
      finalProject: {
        title: "Usability Review cho 1 User Flow quan trọng",
        description: "Đánh giá UX và usability cho 1 flow (VD: Signup, Checkout, Onboarding)",
        requirements: [
          "Xác định persona & mục tiêu của flow",
          "Review theo checklist usability cơ bản",
          "Đề xuất cải thiện cụ thể"
        ],
        deliverables: ["Checklist đánh giá", "Danh sách issues UX", "Đề xuất cải thiện ưu tiên cao"],
        estimatedHours: 8
      },
      days: [
        createDay("Thứ 2", "Usability & UX Fundamentals", 4, {
          motivationalQuote: "😊 UX tốt = người dùng quay lại, UX tệ = họ rời đi mãi mãi.",
          dailyGoals: [
            "✅ Hiểu khác biệt giữa UI, UX, Usability",
            "✅ Nắm được vài nguyên tắc usability cơ bản"
          ],
          morning: {
            title: "Sáng (1.5h): Khái niệm & Nguyên tắc",
            content: [
              "UI vs UX vs Usability",
              "Nguyên tắc: Consistency, Feedback, Visibility, Error Prevention",
              "Heuristics cơ bản (Nielsen Heuristics – ở mức khái niệm)",
              "Ví dụ UX tệ thường gặp (form dài, lỗi không rõ ràng, navigation rối)"
            ],
            concepts: [
              "Tester không chỉ tìm bug functional, mà còn phải 'cảm' được trải nghiệm người dùng",
              "Usability tốt = user hoàn thành nhiệm vụ nhanh, ít lỗi, ít bực mình"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Tạo checklist usability cơ bản",
            exercises: [{
              title: "Thiết kế checklist",
              duration: "2h",
              tasks: [
                "Chọn 1 loại màn hình (VD: Form, Listing, Checkout)",
                "Tạo checklist 10–15 câu hỏi đơn giản (VD: Label rõ ràng? Lỗi hiển thị dễ hiểu?)",
                "Nhóm checklist theo chủ đề: Navigation, Feedback, Error, Content",
                "Chuẩn bị template để dùng lại cho các màn hình khác"
              ]
            }]
          }
        }),
        createDay("Thứ 4", "Usability Review cho 1 Flow", 4, {
          motivationalQuote: "👀 Quan sát như người dùng bình thường, nghĩ như tester chuyên nghiệp.",
          dailyGoals: [
            "✅ Áp dụng checklist vào 1 flow thật",
            "✅ Ghi lại vấn đề UX & đề xuất cải thiện"
          ],
          morning: {
            title: "Sáng (1.5h): Chuẩn bị review",
            content: [
              "Chọn 1 user flow (VD: Đăng ký tài khoản, Thanh toán đơn hàng)",
              "Xác định persona đơn giản: user mới, user có ít kinh nghiệm tech, ...",
              "Định nghĩa success criteria: user cần hoàn thành gì trong flow?",
              "Chuẩn bị note template: Step, Observation, Pain point, Suggestion"
            ],
            concepts: [
              "Khi test UX, hãy thử đi nhanh như user bình thường, không quá 'soi' ngay từ đầu",
              "Ghi lại cả những điểm tốt, không chỉ điểm xấu"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Thực hiện usability review",
            exercises: [{
              title: "Usability walkthrough",
              duration: "2h",
              tasks: [
                "Đi qua toàn bộ flow như 1 user mới, sử dụng checklist đã tạo",
                "Ghi lại tất cả pain point: chỗ khó hiểu, text mơ hồ, lỗi UX",
                "Xếp hạng mức độ nghiêm trọng (Low/Medium/High) cho mỗi issue",
                "Viết ngắn gọn 1–2 đề xuất cải thiện cho các issue High"
              ]
            }]
          }
        })
      ]
    },

    // TUẦN 16: Accessibility & Inclusive Testing
    {
      week: 16,
      title: "ACCESSIBILITY & INCLUSIVE TESTING",
      goals: [
        "Hiểu tại sao Accessibility quan trọng (không chỉ để 'cho có')",
        "Biết một số tiêu chuẩn cơ bản (WCAG – mức độ khái niệm)",
        "Thực hiện 1 vòng accessibility check đơn giản cho UI"
      ],
      metrics: { mouseUsage: "N/A", shortcutsLearned: 0, comfortLevel: "9/10" },
      finalProject: {
        title: "Accessibility Quick Audit cho 1 trang chính",
        description: "Kiểm tra accessibility cơ bản cho 1 trang (VD: Homepage, Dashboard)",
        requirements: [
          "Check contrast, keyboard navigation, focus state, alt text",
          "Ghi lại các vi phạm rõ ràng",
          "Đề xuất cải thiện ưu tiên"
        ],
        deliverables: ["Danh sách issues A11y", "Screenshot minh hoạ", "Gợi ý fix"],
        estimatedHours: 8
      },
      days: [
        createDay("Thứ 2", "Accessibility Fundamentals", 4, {
          motivationalQuote: "♿ Sản phẩm tốt là sản phẩm mọi người đều dùng được.",
          dailyGoals: [
            "✅ Hiểu khái niệm cơ bản về Accessibility",
            "✅ Nắm được vài lỗi A11y phổ biến"
          ],
          morning: {
            title: "Sáng (1.5h): A11y overview",
            content: [
              "Accessibility là gì? Ai bị ảnh hưởng khi app không accessible?",
              "Giới thiệu WCAG (Perceivable, Operable, Understandable, Robust – ở mức khái niệm)",
              "Các lỗi phổ biến: contrast thấp, thiếu alt text, không dùng được bằng keyboard, focus không rõ",
              "Ý nghĩa business & pháp lý (ngắn gọn)"
            ],
            concepts: [
              "Accessibility không chỉ là cho người khuyết tật, mà cho tất cả trong điều kiện khó khăn (ánh sáng chói, mạng yếu, ...)",
              "Bỏ qua A11y = mất đi một nhóm user lớn tiềm năng"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Tạo A11y checklist cơ bản",
            exercises: [{
              title: "Checklist A11y",
              duration: "2h",
              tasks: [
                "Tạo checklist 10–15 mục: contrast, font size, keyboard-only, focus outline, alt text",
                "Thêm mục: form labels, error message rõ ràng, heading structure",
                "Chuẩn bị bảng để tick pass/fail cho từng mục",
                "Chọn 1 trang sẽ audit ở buổi sau"
              ]
            }]
          }
        }),
        createDay("Thứ 4", "Accessibility Quick Audit", 4, {
          motivationalQuote: "🔎 Một vòng audit nhỏ có thể mang lại giá trị rất lớn.",
          dailyGoals: [
            "✅ Áp dụng checklist A11y lên 1 trang thật",
            "✅ Ghi lại các vi phạm rõ ràng kèm ví dụ"
          ],
          morning: {
            title: "Sáng (1.5h): Chuẩn bị audit",
            content: [
              "Mở trang đã chọn (VD: Homepage, Dashboard)",
              "Kiểm tra nhanh khả năng dùng chỉ bằng keyboard (Tab, Enter, Space)",
              "Quan sát focus state: có thấy rõ không?",
              "Dùng công cụ browser (DevTools, extension) để check contrast nếu có"
            ],
            concepts: [
              "A11y test không cần quá tool-heavy – nhiều vấn đề có thể phát hiện bằng mắt & keyboard",
              "Ghi lại selector/element cụ thể để Dev dễ fix"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Thực hiện audit & ghi issues",
            exercises: [{
              title: "A11y audit thực tế",
              duration: "2h",
              tasks: [
                "Duyệt toàn bộ trang với checklist đã tạo",
                "Mỗi issue: ghi mô tả, vị trí (VD: nút Login trên header), screenshot nếu cần",
                "Phân loại mức độ (High nếu cản trở user hoàn toàn)",
                "Đề xuất fix đơn giản (VD: tăng contrast, thêm alt, thêm label)"
              ]
            }]
          }
        })
      ]
    },

    // TUẦN 17: Integration Testing & Test Strategy
    {
      week: 17,
      title: "INTEGRATION TESTING & TEST STRATEGY",
      goals: [
        "Hiểu Integration Testing khác gì Unit & System Testing",
        "Biết xác định interfaces & integration points trong hệ thống",
        "Thiết kế được 1 strategy test cho 1 module tích hợp"
      ],
      metrics: { mouseUsage: "N/A", shortcutsLearned: 0, comfortLevel: "9/10" },
      finalProject: {
        title: "Integration Test Strategy cho 1 module",
        description: "Thiết kế và mô tả chiến lược test cho việc tích hợp nhiều thành phần",
        requirements: [
          "Xác định các hệ thống/ dịch vụ liên quan",
          "Xác định các luồng integration chính",
          "Đề xuất phạm vi và độ sâu kiểm thử"
        ],
        deliverables: ["Sơ đồ luồng tích hợp", "Danh sách test integration", "Ghi chú risk & assumption"],
        estimatedHours: 8
      },
      days: [
        createDay("Thứ 2", "Integration Fundamentals & Interfaces", 4, {
          motivationalQuote: "🔗 Chỗ giao tiếp giữa các hệ thống thường là nơi dễ vỡ nhất.",
          dailyGoals: [
            "✅ Phân biệt Unit/Integration/System testing",
            "✅ Nhận diện được integration points trong 1 hệ thống đơn giản"
          ],
          morning: {
            title: "Sáng (1.5h): Khái niệm",
            content: [
              "Định nghĩa Unit, Integration, System Testing",
              "Interface là gì? (API, DB, Queue, File, Message, ...)",
              "Các kiểu integration thường gặp: Service-Service, Web-DB, App-3rd party",
              "Ví dụ lỗi thường xuất hiện ở tầng tích hợp"
            ],
            concepts: [
              "Integration test tập trung vào cách các thành phần nói chuyện với nhau",
              "Các giả định sai về dữ liệu, format, timing dễ gây bug integration"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Tìm integration points",
            exercises: [{
              title: "Integration mapping",
              duration: "2h",
              tasks: [
                "Chọn 1 hệ thống ví dụ (VD: E-commerce, Banking mini)",
                "Liệt kê các thành phần chính (Frontend, Backend, DB, Payment, Email, ...)",
                "Vẽ sơ đồ đơn giản (có thể trên giấy) thể hiện các mũi tên giao tiếp",
                "Đánh dấu 3–5 điểm integration quan trọng nhất cần test kỹ"
              ]
            }]
          }
        }),
        createDay("Thứ 4", "Thiết kế Integration Test Strategy", 4, {
          motivationalQuote: "🧭 Chiến lược rõ ràng giúp cả team đi đúng hướng.",
          dailyGoals: [
            "✅ Viết được 1 mini test strategy cho module",
            "✅ Liệt kê được các loại test cần có cho integration"
          ],
          morning: {
            title: "Sáng (1.5h): Thành phần của test strategy",
            content: [
              "Scope in-scope vs out-of-scope",
              "Assumptions & Dependencies",
              "Test Levels & Types (Integration, E2E, Regression, Smoke, ...)",
              "Risk & Mitigation"
            ],
            concepts: [
              "Test strategy không cần quá dài, nhưng phải chỉ rõ hướng",
              "Cần align với Dev/PO về assumption & scope"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Viết mini strategy",
            exercises: [{
              title: "Integration Test Strategy document",
              duration: "2h",
              tasks: [
                "Chọn 1 module từ sơ đồ buổi trước (VD: Checkout + Payment)",
                "Viết 1 tài liệu ngắn (~1–2 trang) mô tả strategy test",
                "Liệt kê các test scenario chính cho integration",
                "Đánh dấu những phần sẽ kiểm thử thủ công và những phần có thể tự động hóa sau"
              ]
            }]
          }
        })
      ]
    },

    // TUẦN 18: End-to-End (E2E) Flows & Regression Packs
    {
      week: 18,
      title: "END-TO-END FLOWS & REGRESSION PACKS",
      goals: [
        "Hiểu thế nào là 1 E2E flow tốt",
        "Thiết kế bộ regression core cho 1 sản phẩm",
        "Biết cân bằng giữa độ rộng và độ sâu của regression"
      ],
      metrics: { mouseUsage: "N/A", shortcutsLearned: 0, comfortLevel: "9/10" },
      finalProject: {
        title: "Core E2E + Regression Pack",
        description: "Thiết kế 1 bộ E2E & regression core cho 1 sản phẩm đơn giản",
        requirements: [
          "Xác định 2–3 flow E2E quan trọng nhất",
          "Thiết kế test cases cho các flow này",
          "Xây danh sách regression core ngắn gọn nhưng đủ mạnh"
        ],
        deliverables: ["Danh sách E2E flows", "Test cases E2E", "Regression pack"],
        estimatedHours: 8
      },
      days: [
        createDay("Thứ 2", "E2E Flows Design", 4, {
          motivationalQuote: "🚂 E2E flow là hành trình đầy đủ từ đầu đến cuối của người dùng.",
          dailyGoals: [
            "✅ Xác định được E2E flow cho 1 sản phẩm",
            "✅ Viết được skeleton test cho 2–3 flow chính"
          ],
          morning: {
            title: "Sáng (1.5h): E2E Fundamentals",
            content: [
              "E2E là gì? Khác gì integration & system?",
              "Ví dụ E2E: Browse -> Add to Cart -> Checkout -> Payment -> Confirmation",
              "Tiêu chí của 1 E2E flow tốt: rõ ràng, business-value cao, có thể lặp lại",
              "Lưu ý về dữ liệu & môi trường khi chạy E2E"
            ],
            concepts: [
              "Không cần cover mọi nhánh nhỏ trong E2E, tập trung vào luồng chính",
              "E2E thường tốn thời gian, cần chọn lọc"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Thiết kế E2E flows",
            exercises: [{
              title: "Design 2–3 E2E flows",
              duration: "2h",
              tasks: [
                "Chọn 1 sản phẩm (VD: E-commerce mini)",
                "Xác định 2–3 hành trình user quan trọng nhất",
                "Viết bước high-level cho mỗi flow (Step 1, Step 2, ... Step N)",
                "Ghi chú dữ liệu & trạng thái hệ thống cần chuẩn bị"
              ]
            }]
          }
        }),
        createDay("Thứ 4", "Regression Pack Design", 4, {
          motivationalQuote: "♻ Regression tốt giúp bạn tự tin release nhanh hơn.",
          dailyGoals: [
            "✅ Hiểu regression nên gồm những gì",
            "✅ Tạo được danh sách regression core"
          ],
          morning: {
            title: "Sáng (1.5h): Regression principles",
            content: [
              "Regression test là gì? Khi nào cần chạy?",
              "Chọn test cases regression dựa trên risk & usage",
              "Smoke vs Sanity vs Regression – nên dùng khi nào?",
              "Tần suất chạy regression (per build, per sprint, pre-release)"
            ],
            concepts: [
              "Regression không phải là 'test lại tất cả mọi thứ'",
              "Core regression nên ổn định và được tối ưu dần theo thời gian"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Xây regression pack",
            exercises: [{
              title: "Tạo regression core",
              duration: "2h",
              tasks: [
                "Dựa trên E2E & risk đã làm ở các tuần trước, chọn ~20–30 test cases 'must run'",
                "Chia nhóm: Smoke, Critical Business, High Risk",
                "Đánh dấu các test phù hợp để tự động hóa trong tương lai",
                "Lưu lại thành 1 file riêng (VD: RegressionPack-v1)"
              ]
            }]
          }
        })
      ]
    },

    // TUẦN 19: Advanced API & Database Testing
    {
      week: 19,
      title: "ADVANCED API & DATABASE TESTING",
      goals: [
        "Đào sâu vào các scenario API phức tạp hơn (auth, pagination, error handling)",
        "Thực hành kết hợp API + DB để verify end-to-end",
        "Viết được test cases cho happy path + negative + edge cases"
      ],
      metrics: { mouseUsage: "N/A", shortcutsLearned: 0, comfortLevel: "9.2/10" },
      finalProject: {
        title: "API + DB Test Pack cho 1 module",
        description: "Thiết kế và thực hiện test API kết hợp kiểm tra DB cho 1 module (VD: Orders, Users)",
        requirements: [
          "Thiết kế ít nhất 10 test cases (happy, negative, edge)",
          "Thực hiện 1 số test và verify DB tương ứng",
          "Ghi lại kết quả vào report ngắn"
        ],
        deliverables: ["Danh sách test cases", "Kịch bản dữ liệu test", "Kết quả chạy test & ghi chú"],
        estimatedHours: 8
      },
      days: [
        createDay("Thứ 2", "Advanced API Scenarios", 4, {
          motivationalQuote: "🌐 API là xương sống của rất nhiều hệ thống hiện đại.",
          dailyGoals: [
            "✅ Nhận biết các pattern API phức tạp hơn",
            "✅ Viết được test ideas cho auth, pagination, error"
          ],
          morning: {
            title: "Sáng (1.5h): Pattern nâng cao",
            content: [
              "Auth flows (token-based, session-based – ở mức khái niệm)",
              "Pagination & filtering",
              "Idempotency (cảm nhận khái niệm)",
              "Error handling: error codes, error body"
            ],
            concepts: [
              "API tốt trả về lỗi rõ ràng, nhất quán",
              "Tester cần nghĩ xem client sẽ xử lý response này như thế nào"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Thiết kế test ideas",
            exercises: [{
              title: "API scenario design",
              duration: "2h",
              tasks: [
                "Chọn 1 resource (VD: /orders, /users)",
                "Viết list các scenario: create/read/update/delete, invalid input, unauthorized, not found",
                "Thêm ít nhất 3 scenario liên quan đến pagination/filtering",
                "Ưu tiên các scenario có giá trị business cao"
              ]
            }]
          }
        }),
        createDay("Thứ 4", "API + DB Combined Testing", 4, {
          motivationalQuote: "🧩 Kết hợp API và DB giúp bạn thấy bức tranh đầy đủ.",
          dailyGoals: [
            "✅ Biết cách chuẩn bị dữ liệu DB",
            "✅ Verify data sau khi gọi API"
          ],
          morning: {
            title: "Sáng (1.5h): Kết nối API & DB",
            content: [
              "Luồng: Client -> API -> DB -> API -> Client",
              "Chuẩn bị dữ liệu test trong DB (insert, cleanup – mức conceptual)",
              "Kiểm tra hậu quả side-effect: row mới, cập nhật, xoá",
              "Ghi chú constraint & transaction (mức ý thức, không cần quá sâu)"
            ],
            concepts: [
              "Mỗi API thay đổi data nên có cách kiểm tra ở DB",
              "Dọn dữ liệu test sau khi chạy để tránh ô nhiễm môi trường"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Thực hành mini E2E API+DB",
            exercises: [{
              title: "API + DB mini project",
              duration: "2h",
              tasks: [
                "Chọn 2–3 API từ ngày Thứ 2",
                "Chuẩn bị dữ liệu DB phù hợp (hoặc giả lập bằng ghi chú nếu không có DB thật)",
                "Gọi API, quan sát response, ghi lại thay đổi mong đợi ở DB",
                "Viết 1 bảng: Request | Expected Response | Expected DB Change"
              ]
            }]
          }
        })
      ]
    },

    // TUẦN 20: Localization, Compliance & Final Advanced Wrap-up
    {
      week: 20,
      title: "LOCALIZATION, COMPLIANCE & ADVANCED WRAP-UP",
      goals: [
        "Hiểu các khái niệm cơ bản về Localization/I18n",
        "Nhận thức về các yêu cầu Compliance phổ biến (GDPR, PCI – mức khái niệm)",
        "Tổng hợp lại kiến thức nâng cao đã học và chuẩn bị sang giai đoạn thực hành"
      ],
      metrics: { mouseUsage: "N/A", shortcutsLearned: 0, comfortLevel: "9.5/10" },
      finalProject: {
        title: "Localization & Compliance Review cho 1 tính năng",
        description: "Review nhanh 1 phần UI hoặc flow về mặt ngôn ngữ & tuân thủ cơ bản",
        requirements: [
          "Check text, format ngày/giờ/số cho 1 locale khác",
          "Nhận diện dữ liệu nhạy cảm và cách hiển thị",
          "Ghi lại điểm cần lưu ý nếu scale ra nhiều thị trường"
        ],
        deliverables: ["Checklist localization", "Danh sách findings", "Gợi ý cải thiện"],
        estimatedHours: 8
      },
      days: [
        createDay("Thứ 2", "Localization & I18n Basics", 4, {
          motivationalQuote: "🌍 Sản phẩm toàn cầu cần nói được nhiều 'ngôn ngữ' khác nhau.",
          dailyGoals: [
            "✅ Hiểu khái niệm Localization/I18n",
            "✅ Nhận diện lỗi localization phổ biến"
          ],
          morning: {
            title: "Sáng (1.5h): I18n concepts",
            content: [
              "I18n vs L10n là gì?",
              "Các lỗi thường gặp: hard-coded text, cắt chữ, format ngày/giờ/số sai",
              "Ví dụ: số thập phân, đơn vị tiền tệ, timezone",
              "Ý nghĩa test multi-language với business"
            ],
            concepts: [
              "Text không nên hard-code, nên có cơ chế dịch",
              "Định dạng sai có thể gây hiểu nhầm lớn (đặc biệt với tiền & thời gian)"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Tạo localization checklist",
            exercises: [{
              title: "Localization checklist",
              duration: "2h",
              tasks: [
                "Tạo list 10–15 điểm cần check: text, truncation, layout với text dài, date/time, currency",
                "Thêm mục: thông báo lỗi, email templates, PDF/export (nếu có)",
                "Chuẩn bị 1–2 bộ dữ liệu mẫu cho các locale khác nhau (VD: en-US, vi-VN)",
                "Chọn 1 màn hình/flow sẽ review ở buổi sau"
              ]
            }]
          }
        }),
        createDay("Thứ 4", "Compliance Awareness & Advanced Recap", 4, {
          motivationalQuote: "⚖ Hiểu về tuân thủ giúp bạn trở thành tester đáng tin cậy với business.",
          dailyGoals: [
            "✅ Biết các thuật ngữ GDPR, PCI ở mức awareness",
            "✅ Ôn lại các chủ đề nâng cao đã học và liên kết chúng lại"
          ],
          morning: {
            title: "Sáng (1.5h): Compliance overview & data sensitivity",
            content: [
              "Khái niệm dữ liệu cá nhân, dữ liệu nhạy cảm",
              "GDPR, PCI-DSS – ở mức khái niệm (không cần thuộc điều khoản)",
              "Các vùng cần chú ý: lưu trữ password, xử lý thẻ, log chứa dữ liệu nhạy cảm",
              "Vai trò của tester trong việc phát hiện vi phạm tiềm ẩn"
            ],
            concepts: [
              "Không log password hoặc dữ liệu thẻ đầy đủ",
              "Tester nên raise câu hỏi khi thấy dữ liệu nhạy cảm hiển thị không cần thiết"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Recap & chuẩn bị sang phase thực hành",
            exercises: [{
              title: "Advanced recap & mapping",
              duration: "2h",
              tasks: [
                "Tạo mindmap các chủ đề nâng cao đã học: API, Mobile, Performance, Security, Exploratory, Risk, UX, A11y, Integration, E2E, Regression, API+DB, Localization",
                "Đánh dấu những mảng bạn tự tin nhất và mảng còn yếu",
                "Viết kế hoạch cá nhân 2–3 dòng cho phase thực hành (tuần 21–24): sẽ tập trung domain nào, skill nào",
                "Lưu lại tài liệu recap này để dùng khi chuẩn bị portfolio & phỏng vấn"
              ]
            }]
          }
        })
      ]
    },

    // TUẦN 21: SQL Nâng Cao & Data Validation Thực Chiến
    {
      week: 21,
      title: "SQL NÂNG CAO & DATA VALIDATION THỰC CHIẾN",
      goals: [
        "Củng cố và nâng cao kỹ năng SQL (JOIN, GROUP BY, HAVING, subquery)",
        "Thực hành viết truy vấn để validate dữ liệu thật từ nhiều bảng",
        "Xây bộ câu hỏi SQL thường gặp trong công việc Manual Tester"
      ],
      metrics: { mouseUsage: "N/A", shortcutsLearned: 0, comfortLevel: "9.5/10" },
      finalProject: {
        title: "SQL Validation Pack cho 1 module nghiệp vụ",
        description: "Thiết kế bộ truy vấn SQL để kiểm tra dữ liệu cho 1 module (VD: Orders, Invoices, Users)",
        requirements: [
          "Ít nhất 10 truy vấn SQL phục vụ validate data",
          "Kết hợp JOIN từ 2–3 bảng",
          "Có example cho cả valid & invalid data"
        ],
        deliverables: ["File tổng hợp truy vấn SQL", "Mô tả mục đích từng truy vấn", "Ghi chú cách dùng trong testing"],
        estimatedHours: 8
      },
      days: [
        createDay("Thứ 2", "SQL Nâng Cao – JOIN & Aggregation", 4, {
          motivationalQuote: "📊 Nắm vững SQL giúp bạn nhìn thấy sự thật phía sau UI.",
          dailyGoals: [
            "✅ Ôn lại JOIN, GROUP BY, HAVING",
            "✅ Viết được truy vấn tổng hợp dữ liệu cho báo cáo nhỏ"
          ],
          morning: {
            title: "Sáng (1.5h): Ôn & mở rộng",
            content: [
              "INNER vs LEFT JOIN trong ngữ cảnh kiểm thử",
              "GROUP BY, HAVING – khi nào dùng",
              "COUNT, SUM, AVG, MIN, MAX cho báo cáo đơn giản",
              "Ví dụ mismatch giữa UI report và DB"
            ],
            concepts: [
              "Tester cần hiểu vì sao số liệu trên UI khác DB để raise bug có cơ sở",
              "JOIN sai điều kiện có thể làm dữ liệu 'nhân bản' hoặc 'mất dòng'"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Viết truy vấn tổng hợp",
            exercises: [{
              title: "Mini reporting queries",
              duration: "2h",
              tasks: [
                "Giả lập schema đơn giản (Users, Orders, OrderItems)",
                "Viết 3–5 truy vấn: tổng số đơn theo ngày, doanh thu theo user, đơn hàng không có items",
                "Thử thêm điều kiện HAVING (VD: user có > 3 đơn/tháng)",
                "Ghi lại mục đích test của mỗi truy vấn (muốn verify điều gì?)"
              ]
            }]
          }
        }),
        createDay("Thứ 4", "SQL cho Test Case Thực Tế", 4, {
          motivationalQuote: "🔎 Mỗi bug về data là 1 câu chuyện SQL phía sau.",
          dailyGoals: [
            "✅ Map được test cases với truy vấn SQL tương ứng",
            "✅ Tạo được 1 bộ câu hỏi SQL cho module đang test"
          ],
          morning: {
            title: "Sáng (1.5h): Từ UI flow đến SQL query",
            content: [
              "Ví dụ: tạo đơn hàng trên UI -> cần kiểm tra bảng nào?",
              "Mapping field UI với cột DB",
              "Kiểm tra tính toàn vẹn dữ liệu (tổng tiền, trạng thái, quan hệ master‑detail)",
              "Chiến lược đặt tên query & lưu trữ để dùng lại"
            ],
            concepts: [
              "Mỗi test quan trọng nên có 1–2 câu truy vấn 'đi kèm'",
              "Truy vấn nên rõ ràng, dễ đọc để người khác có thể dùng lại"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Thiết kế SQL validation pack",
            exercises: [{
              title: "SQL Test Pack",
              duration: "2h",
              tasks: [
                "Chọn 1 module (VD: Orders hoặc Users)",
                "Viết ít nhất 8–10 truy vấn để validate các trường hợp chính (tạo mới, cập nhật, huỷ, ...)",
                "Ghi rõ: khi nào dùng truy vấn này trong quy trình test",
                "Lưu thành 1 tài liệu để dùng lại cho phase project"
              ]
            }]
          }
        })
      ]
    },

    // TUẦN 22: Tools Deep Dive – Jira, TestRail, Postman, Proxy
    {
      week: 22,
      title: "TOOLS DEEP DIVE – JIRA, TESTRAIL, POSTMAN, PROXY",
      goals: [
        "Sử dụng thành thạo Jira cho bug & task basic",
        "Hiểu cách tổ chức test cases & runs trong TestRail (hoặc tương đương)",
        "Tối ưu sử dụng Postman & proxy (Fiddler/Charles/Burp ở mức basic) trong testing"
      ],
      metrics: { mouseUsage: "N/A", shortcutsLearned: 0, comfortLevel: "9.5/10" },
      finalProject: {
        title: "Mini Tool Stack cho 1 Sprint",
        description: "Thiết lập workflow nhỏ dùng Jira + TestRail + Postman/Proxy cho 1 mini sprint test",
        requirements: [
          "Tạo board Jira đơn giản với tasks/bugs",
          "Tạo 1 test suite & 1 run trong TestRail (hoặc mock/notion tương đương)",
          "Chuẩn bị 1 Postman collection + dùng proxy cho ít nhất 1 scenario"
        ],
        deliverables: ["Screenshot cấu hình tools", "Mô tả workflow", "Ghi chú bài học rút ra"],
        estimatedHours: 8
      },
      days: [
        createDay("Thứ 2", "Jira & Test Case Management", 4, {
          motivationalQuote: "🗂 Quản lý tốt giúp bạn không bỏ sót bug và test.",
          dailyGoals: [
            "✅ Nắm được luồng cơ bản của 1 bug trong Jira",
            "✅ Biết tổ chức test cases theo suite/run"
          ],
          morning: {
            title: "Sáng (1.5h): Jira basics & workflow",
            content: [
              "Issue types: Story, Task, Bug, Sub-task (mức khái niệm)",
              "Fields quan trọng: Summary, Description, Steps, Priority, Assignee, Status",
              "Lifecycle của 1 bug: Open -> In Progress -> Resolved -> Reopen/Closed",
              "Best practices khi viết bug trong tool"
            ],
            concepts: [
              "Bug tốt giúp Dev reproduce nhanh, không phải hỏi lại nhiều",
              "Status phải phản ánh đúng tình trạng thực tế của issue"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Test case management",
            exercises: [{
              title: "Tổ chức test cases",
              duration: "2h",
              tasks: [
                "Giả lập cấu trúc Test Suite cho 1 module (VD: Login + Profile)",
                "Nhóm test cases thành: Smoke, Regression, Negative",
                "Tạo 1 Test Run mẫu (dù dùng tool thật hay bảng tính/Notion)",
                "Định nghĩa trạng thái test: Pass/Fail/Blocked/Not Run"
              ]
            }]
          }
        }),
        createDay("Thứ 4", "Postman & Proxy trong thực chiến", 4, {
          motivationalQuote: "🛰 Tool tốt + tư duy đúng = sức mạnh nhân 10.",
          dailyGoals: [
            "✅ Tận dụng Postman hiệu quả hơn",
            "✅ Hiểu khái niệm cơ bản về HTTP proxy trong testing"
          ],
          morning: {
            title: "Sáng (1.5h): Postman advanced basics",
            content: [
              "Environment & Variables",
              "Pre-request & Tests (ở mức basic – log & check status)",
              "Collections & folder structure cho project",
              "Export/Import collection để chia sẻ với team"
            ],
            concepts: [
              "Giữ collection gọn gàng để dễ bảo trì",
              "Có thể dùng tests trong Postman để kiểm tra nhanh response basic"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Làm quen với Proxy",
            exercises: [{
              title: "Proxy hands-on (conceptual/giản lược)",
              duration: "2h",
              tasks: [
                "Tìm hiểu tool proxy: Fiddler/Charles/Burp (chọn 1, có thể xem video nếu không cài được)",
                "Hiểu cơ chế: chặn & xem request/response HTTP(S)",
                "Liệt kê 3–5 use case: debug lỗi API, check header, check redirect, test trên mobile",
                "Ghi chú lại cách dùng proxy để hỗ trợ manual testing"
              ]
            }]
          }
        })
      ]
    },

    // TUẦN 23: Test Case Nâng Cao & Traceability
    {
      week: 23,
      title: "TEST CASE NÂNG CAO & TRACEABILITY",
      goals: [
        "Viết test case rõ ràng, maintainable và có khả năng tái sử dụng",
        "Hiểu và áp dụng Requirement Traceability Matrix (RTM)",
        "Tối ưu bộ test: giảm trùng lặp, tăng coverage hợp lý"
      ],
      metrics: { mouseUsage: "N/A", shortcutsLearned: 0, comfortLevel: "9.5/10" },
      finalProject: {
        title: "RTM & Optimized Test Suite cho 1 module",
        description: "Xây RTM và tối ưu bộ test cases cho 1 module yêu cầu rõ ràng",
        requirements: [
          "Liệt kê requirements chính",
          "Map requirements -> test cases",
          "Đề xuất cắt/bổ sung test để tối ưu"
        ],
        deliverables: ["RTM bảng", "Bộ test cases tối ưu", "Giải thích các quyết định cắt/gộp"],
        estimatedHours: 8
      },
      days: [
        createDay("Thứ 2", "Advanced Test Case Design", 4, {
          motivationalQuote: "✏ Test case tốt là test case người khác đọc vẫn hiểu và chạy được.",
          dailyGoals: [
            "✅ Viết test case theo format rõ ràng",
            "✅ Áp dụng kỹ thuật EP/BVA/Decision Table/State Transition vào test thực tế"
          ],
          morning: {
            title: "Sáng (1.5h): Ôn kỹ thuật & format",
            content: [
              "Nhắc lại EP, BVA, Decision Table, State Transition với ví dụ thực",
              "Format test case: ID, Title, Precondition, Steps, Expected Result, Notes",
              "Nguyên tắc: mỗi test case tập trung 1 mục tiêu chính",
              "Ví dụ test case khó maintain vs test case tốt"
            ],
            concepts: [
              "Không nhồi quá nhiều check vào 1 test case",
              "Tên test case nên self-explanatory"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Viết bộ test nâng cao",
            exercises: [{
              title: "Advanced test suite",
              duration: "2h",
              tasks: [
                "Chọn 1 chức năng (VD: Login + 2FA hoặc Checkout với nhiều phương thức thanh toán)",
                "Viết 10–15 test case áp dụng các kỹ thuật design",
                "Phân loại: Positive/Negative/Boundary/Combination",
                "Ghi chú nơi có thể automate sau này"
              ]
            }]
          }
        }),
        createDay("Thứ 4", "Requirement Traceability Matrix (RTM)", 4, {
          motivationalQuote: "🧬 Traceability giúp bạn chứng minh mình không bỏ sót yêu cầu.",
          dailyGoals: [
            "✅ Tạo được RTM đơn giản",
            "✅ Map được test cases với requirements"
          ],
          morning: {
            title: "Sáng (1.5h): RTM concepts",
            content: [
              "RTM là gì? Tại sao quan trọng?",
              "Các cột trong RTM: Requirement ID/Name, Test Cases, Status",
              "Ví dụ: 1 requirement được cover bởi nhiều test case",
              "Cách dùng RTM trong audit/QA review"
            ],
            concepts: [
              "RTM giúp phát hiện requirement chưa có test hoặc test 'mồ côi' không gắn với requirement",
              "Giữ RTM đơn giản, update thường xuyên"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Xây RTM cho module đã chọn",
            exercises: [{
              title: "RTM practice",
              duration: "2h",
              tasks: [
                "Lấy bộ test cases từ buổi Thứ 2",
                "Giả lập 5–8 requirements chính cho chức năng đó",
                "Tạo bảng RTM map Requirement -> Test Case(s)",
                "Đánh dấu các lỗ hổng coverage nếu có và thêm test nếu cần"
              ]
            }]
          }
        })
      ]
    },

    // TUẦN 24: Practice Sprint Tổng Hợp
    {
      week: 24,
      title: "PRACTICE SPRINT TỔNG HỢP",
      goals: [
        "Mô phỏng 1 sprint testing nhỏ end-to-end",
        "Áp dụng kết hợp các kỹ năng: phân tích yêu cầu, design test, thực thi, báo cáo",
        "Rèn kỹ năng quản lý thời gian & ưu tiên trong bối cảnh deadline"
      ],
      metrics: { mouseUsage: "N/A", shortcutsLearned: 0, comfortLevel: "9.5/10" },
      finalProject: {
        title: "Mini Sprint Testing Simulation",
        description: "Chạy 1 mini sprint test cho 1 tính năng hoặc module giả lập",
        requirements: [
          "Lập kế hoạch test cho sprint (scope, timeline, risk)",
          "Thực thi test (ở mức mô phỏng) và ghi lại kết quả",
          "Viết test summary report cuối sprint"
        ],
        deliverables: ["Test Plan ngắn", "Kết quả test (bảng)", "Test Summary Report"],
        estimatedHours: 8
      },
      days: [
        createDay("Thứ 2", "Sprint Planning & Test Plan", 4, {
          motivationalQuote: "🧠 Chuẩn bị tốt là đã đi được nửa chặng đường.",
          dailyGoals: [
            "✅ Xác định scope & mục tiêu cho mini sprint",
            "✅ Viết test plan ngắn gọn"
          ],
          morning: {
            title: "Sáng (1.5h): Chọn phạm vi & phân tích nhanh",
            content: [
              "Chọn 1 module/tính năng để chạy sprint (có thể tái dùng từ tuần trước)",
              "Xác định mục tiêu sprint: test gì, không test gì",
              "Liệt kê rủi ro chính & constraints (thời gian, dữ liệu, môi trường)",
              "Định nghĩa done cho testing trong sprint này"
            ],
            concepts: [
              "Không thể test tất cả trong 1 sprint – phải chấp nhận trade-off",
              "Rõ ràng scope giúp tránh kỳ vọng sai với stakeholders"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Viết mini test plan",
            exercises: [{
              title: "Test Plan ngắn",
              duration: "2h",
              tasks: [
                "Viết 1 tài liệu 1–2 trang: Scope, Approach, Test Types, Environment, Risk",
                "Chọn bộ test cases sẽ chạy trong sprint từ các tuần trước",
                "Phân nhóm priority cho test (High/Medium/Low)",
                "Chuẩn bị template để log kết quả test theo ngày"
              ]
            }]
          }
        }),
        createDay("Thứ 4", "Thực thi & Test Summary Report", 4, {
          motivationalQuote: "📣 Báo cáo rõ ràng giúp team ra quyết định nhanh và tự tin.",
          dailyGoals: [
            "✅ Mô phỏng thực thi test theo plan",
            "✅ Viết test summary report cuối sprint"
          ],
          morning: {
            title: "Sáng (1.5h): Thực thi & ghi nhận kết quả",
            content: [
              "Giả lập việc chạy test: đánh dấu Pass/Fail/Blocked cho từng case đã chọn",
              "Ghi lại defects chính (có thể mô phỏng nếu không có hệ thống thật)",
              "Theo dõi tiến độ so với kế hoạch (đã chạy bao nhiêu %, còn lại bao nhiêu %)",
              "Ghi chú các issue ngoài phạm vi testing nhưng quan sát được"
            ],
            concepts: [
              "Thực tế ít khi test chạy 100% đúng như kế hoạch – cần linh hoạt nhưng vẫn có log rõ ràng",
              "Tập trung highlight vấn đề quan trọng, không chìm trong chi tiết vụn vặt"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Viết Test Summary Report",
            exercises: [{
              title: "Test Summary cuối sprint",
              duration: "2h",
              tasks: [
                "Tạo 1 báo cáo ngắn gồm: Overview, Scope, Kết quả test (số case Pass/Fail), Defects chính, Risk còn lại, Recommendation",
                "Viết báo cáo theo ngôn ngữ hướng business (PO/PM đọc hiểu được)",
                "Đánh giá lại bản thân: điều gì làm tốt, điều gì cần cải thiện trong sprint sau",
                "Lưu lại report này như 1 artefact cho portfolio cá nhân"
              ]
            }]
          }
        })
      ]
    },

    // TUẦN 25: Project 1 – E-commerce Web Manual Testing
    {
      week: 25,
      title: "PROJECT 1 – E-COMMERCE WEB MANUAL TESTING",
      goals: [
        "Áp dụng full quy trình test cho 1 website E-commerce cơ bản",
        "Thực hành phân tích yêu cầu, thiết kế test, thực thi, báo bug, viết report",
        "Xây 1 bộ artefact có thể dùng trong portfolio (test cases, bug list, report)"
      ],
      metrics: { mouseUsage: "N/A", shortcutsLearned: 0, comfortLevel: "10/10" },
      finalProject: {
        title: "E-commerce Web Testing End-to-End",
        description: "Test 1 website bán hàng (thật hoặc demo) với các flow chính: Browse, Cart, Checkout, Payment giả lập",
        requirements: [
          "Phân tích nhanh yêu cầu & chức năng chính",
          "Thiết kế test cases cho các flow core",
          "Thực thi và log bug + viết test summary"
        ],
        deliverables: [
          "Mindmap hoặc document chức năng chính",
          "Bộ test cases (ít nhất 25–30 case)",
          "Bug list + Test Summary Report"
        ],
        estimatedHours: 8
      },
      days: [
        createDay("Thứ 2", "Phân tích yêu cầu & lập kế hoạch", 4, {
          motivationalQuote: "🛒 E-commerce là domain cực phổ biến – làm tốt case này là lợi thế lớn.",
          dailyGoals: [
            "✅ Hiểu được các flow chính của 1 site bán hàng",
            "✅ Viết được mini test plan cho project"
          ],
          morning: {
            title: "Sáng (1.5h): Khám phá sản phẩm",
            content: [
              "Chọn 1 website E-commerce (thật hoặc demo, không cần quá phức tạp)",
              "Xác định các module chính: Home, Search, Product Detail, Cart, Checkout, Login/Signup, Profile/Orders",
              "Ghi lại các rule quan sát được (VD: bắt buộc login trước khi checkout?)",
              "Liệt kê risk business lớn: mất đơn hàng, tính sai tiền, lỗi thanh toán"
            ],
            concepts: [
              "Dù không có tài liệu chính thức, tester vẫn có thể reverse-engineer yêu cầu từ UI",
              "E-commerce liên quan trực tiếp đến tiền, nên ưu tiên độ chính xác cao"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Mini Test Plan cho E-commerce",
            exercises: [{
              title: "E-commerce Test Plan",
              duration: "2h",
              tasks: [
                "Viết mini test plan (1–2 trang): Scope, Out-of-scope, Test Types, Environment, Risk",
                "Xác định flow sẽ test trong tuần: Browse/Search, Add to Cart, Checkout (có thể dùng payment giả lập)",
                "Định nghĩa done cho project: số lượng test case, phạm vi module, chất lượng bug report",
                "Chuẩn bị template Test Case & Bug để dùng trong những ngày sau"
              ]
            }]
          }
        }),
        createDay("Thứ 4", "Thiết kế Test Case & Bug Template", 4, {
          motivationalQuote: "📃 Artefact rõ ràng = Portfolio mạnh.",
          dailyGoals: [
            "✅ Viết được bộ test cases đầu tiên cho E-commerce",
            "✅ Chuẩn bị template bug list & report"
          ],
          morning: {
            title: "Sáng (1.5h): Thiết kế test cases cho E-commerce",
            content: [
              "Chọn 2–3 flow chính (VD: Search + View Product, Add to Cart, Simple Checkout)",
              "Áp dụng EP/BVA/Combination cho field quan trọng (giá, số lượng, địa chỉ, ...)",
              "Thêm các test về UX/basic validation (error message, required fields)",
              "Đảm bảo cover cả Positive và Negative"
            ],
            concepts: [
              "Không cần viết quá dài dòng, nhưng steps & expected phải rõ ràng",
              "Tập trung vào giá trị business: user mua được hàng, tiền tính đúng"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Chuẩn bị bug list & report skeleton",
            exercises: [{
              title: "Bug & Report Template",
              duration: "2h",
              tasks: [
                "Tạo file bug list (Excel/Google Sheet/Notion) với các cột: ID, Summary, Steps, Expected, Actual, Severity, Status",
                "Tạo skeleton Test Summary Report cho project này",
                "Ghi chú example 1–2 bug mẫu (có thể giả lập) để làm chuẩn",
                "Kiểm tra lại test plan & test cases, chỉnh sửa nếu cần trước khi thực thi"
              ]
            }]
          }
        })
      ]
    },

    // TUẦN 26: Project 2 – Banking/Payment Flow Testing
    {
      week: 26,
      title: "PROJECT 2 – BANKING/PAYMENT FLOW TESTING",
      goals: [
        "Làm quen domain tài chính/ngân hàng ở mức testing cơ bản",
        "Thực hành test flow thanh toán/transaction với nhiều trạng thái khác nhau",
        "Tăng độ nhạy với data nhạy cảm & tính toàn vẹn giao dịch"
      ],
      metrics: { mouseUsage: "N/A", shortcutsLearned: 0, comfortLevel: "10/10" },
      finalProject: {
        title: "Payment/Transaction Flow Manual Testing",
        description: "Test 1 flow thanh toán hoặc chuyển tiền (demo/system giả lập) với nhiều trường hợp thành công/thất bại",
        requirements: [
          "Thiết kế test cases cho các trạng thái transaction (Success, Failed, Pending, Canceled)",
          "Kiểm tra hiển thị số dư/trạng thái sau giao dịch",
          "Ghi lại findings về UX & lỗi tiềm ẩn"
        ],
        deliverables: [
          "Bộ test cases cho payment/transaction",
          "Danh sách bugs/finding",
          "Ghi chú risk & đề xuất cải thiện"
        ],
        estimatedHours: 8
      },
      days: [
        createDay("Thứ 2", "Phân tích Payment/Banking Flow", 4, {
          motivationalQuote: "💳 Lỗi trong payment có thể làm mất niềm tin của người dùng rất nhanh.",
          dailyGoals: [
            "✅ Hiểu các trạng thái giao dịch cơ bản",
            "✅ Nhận diện được nơi dễ phát sinh bug trong flow thanh toán"
          ],
          morning: {
            title: "Sáng (1.5h): Banking/Payment concepts",
            content: [
              "Khái niệm transaction: debit, credit, balance",
              "Các trạng thái giao dịch: Success, Failed, Pending, Reversed, Canceled (ở mức khái niệm)",
              "Các điểm dễ lỗi: double charge, mất transaction, hiển thị số dư sai",
              "Yêu cầu cơ bản về bảo mật & log (không log full card, không hiển thị thông tin nhạy cảm)"
            ],
            concepts: [
              "Luôn nghĩ về câu hỏi: tiền có bị mất/nhân đôi/hiển thị sai không?",
              "Tester cần cực kỳ cẩn thận với dữ liệu tài chính"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Vẽ flow & xác định test points",
            exercises: [{
              title: "Payment flow mapping",
              duration: "2h",
              tasks: [
                "Chọn 1 flow demo (VD: thanh toán đơn hàng, chuyển tiền nội bộ demo)",
                "Vẽ lại flow từ góc nhìn user: Input -> Xác nhận -> Chờ xử lý -> Kết quả",
                "Đánh dấu các điểm có thể fail: lỗi network, lỗi validation, lỗi xác nhận OTP",
                "Liệt kê ít nhất 10 test idea cho các case success/fail khác nhau"
              ]
            }]
          }
        }),
        createDay("Thứ 4", "Thiết kế Test Case & Finding cho Payment", 4, {
          motivationalQuote: "📌 Một test case tốt trong domain tài chính rất có giá trị với CV của bạn.",
          dailyGoals: [
            "✅ Viết bộ test cases cho payment flow",
            "✅ Ghi lại được các finding về risk & UX"
          ],
          morning: {
            title: "Sáng (1.5h): Viết test cases",
            content: [
              "Chuyển test ideas từ buổi trước thành test cases chi tiết",
              "Cover các trạng thái: Success, Failed (sai OTP, thẻ hết tiền, timeout), Pending (chờ xác nhận)",
              "Thêm test case về hiển thị lịch sử giao dịch & số dư sau giao dịch",
              "Chú ý Expected Result cho cả UI & dữ liệu"
            ],
            concepts: [
              "Mỗi test case nên nêu rõ input, điều kiện, expected rất cụ thể",
              "Expected phải nhất quán với business rules (VD: phí, hạn mức)"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Finding & risk notes",
            exercises: [{
              title: "Payment findings",
              duration: "2h",
              tasks: [
                "Dựa trên bộ test case, tưởng tượng kết quả bất thường có thể xảy ra (ngay cả khi chưa có hệ thống thật)",
                "Viết 5–10 finding dạng 'nếu... thì risk là...'",
                "Phân loại finding: Functional bug tiềm ẩn, UX issue, Risk business",
                "Chọn 2–3 finding quan trọng nhất, viết mô tả chi tiết như bug report"
              ]
            }]
          }
        })
      ]
    },

    // TUẦN 27: Project 3 – Healthcare/Appointment System Testing
    {
      week: 27,
      title: "PROJECT 3 – HEALTHCARE/APPOINTMENT SYSTEM TESTING",
      goals: [
        "Làm quen domain Healthcare & hệ thống đặt lịch khám",
        "Test các luồng: tạo/sửa/hủy lịch hẹn, hiển thị thông tin bệnh nhân/bác sĩ",
        "Quan tâm đến tính chính xác thời gian, thông tin nhạy cảm & quy trình approval (nếu có)"
      ],
      metrics: { mouseUsage: "N/A", shortcutsLearned: 0, comfortLevel: "10/10" },
      finalProject: {
        title: "Appointment & Patient Info Testing",
        description: "Test 1 hệ thống đặt lịch khám (demo/giả lập) với các luồng chính: tạo, sửa, hủy, xem lịch & thông tin",
        requirements: [
          "Thiết kế test cases cho appointment (time slot, doctor, patient)",
          "Kiểm tra conflict (trùng giờ/bác sĩ), huỷ lịch & cập nhật",
          "Review việc hiển thị thông tin nhạy cảm (privacy)"
        ],
        deliverables: [
          "Test cases cho appointment & patient info",
          "Danh sách bugs/finding",
          "Ghi chú về privacy & UX"
        ],
        estimatedHours: 8
      },
      days: [
        createDay("Thứ 2", "Phân tích hệ thống đặt lịch khám", 4, {
          motivationalQuote: "🏥 Trong Healthcare, thông tin & thời gian đều rất quan trọng.",
          dailyGoals: [
            "✅ Hiểu các thực thể chính: Bệnh nhân, Bác sĩ, Lịch hẹn",
            "✅ Vẽ được flow cơ bản của đặt/hủy lịch"
          ],
          morning: {
            title: "Sáng (1.5h): Domain & entities",
            content: [
              "Thực thể: Patient, Doctor, Appointment, Department",
              "Thông tin nhạy cảm (PHI – Personal Health Information) ở mức awareness",
              "Luồng đặt lịch cơ bản: chọn bác sĩ, chọn khung giờ, nhập thông tin, xác nhận",
              "Các rule thường gặp: không trùng giờ, giới hạn số lịch/slot"
            ],
            concepts: [
              "Tính đúng đắn của thời gian & lịch là critical với Healthcare",
              "Không nên hiển thị thông tin bệnh nhân cho người không có quyền"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Vẽ flow & xác định scenario",
            exercises: [{
              title: "Appointment flow design",
              duration: "2h",
              tasks: [
                "Vẽ flow create/edit/cancel appointment",
                "Liệt kê các scenario: đặt lịch hợp lệ, trùng giờ, hủy sát giờ, đổi bác sĩ, đổi giờ",
                "Thêm scenario liên quan đến timezone/ngày (AM/PM, nhầm ngày, ...)",
                "Đánh dấu risk cao: mất lịch, đặt nhầm bác sĩ, lộ thông tin"
              ]
            }]
          }
        }),
        createDay("Thứ 4", "Thiết kế Test Case & Privacy Findings", 4, {
          motivationalQuote: "🔐 Privacy không tốt có thể nguy hiểm không kém bug functional.",
          dailyGoals: [
            "✅ Viết test cases cho appointment",
            "✅ Ghi lại findings về privacy & UX"
          ],
          morning: {
            title: "Sáng (1.5h): Viết test cases cho appointment",
            content: [
              "Chuyển các scenario buổi trước thành test cases cụ thể",
              "Cover: tạo lịch đúng, tạo lịch trùng giờ, sửa đổi lịch, huỷ, xem lịch",
              "Test hiển thị lịch theo role (VD: bệnh nhân vs bác sĩ, nếu hệ thống support)",
              "Kiểm tra behavior khi data thiếu/hỏng (thiếu thông tin bệnh nhân/bác sĩ)"
            ],
            concepts: [
              "Test case cần gắn chặt với rule domain (time slot, conflict, ...)",
              "Expected Result phải rõ cả về dữ liệu lẫn UI"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Privacy & UX findings",
            exercises: [{
              title: "Healthcare findings",
              duration: "2h",
              tasks: [
                "Liệt kê các điểm có khả năng lộ thông tin (VD: màn danh sách bệnh nhân, chi tiết lịch)",
                "Viết 5–10 finding về privacy/UX (VD: hiển thị quá nhiều thông tin trên màn hình public)",
                "Đánh severity cho từng finding",
                "Chọn 2–3 finding quan trọng nhất, viết mô tả chi tiết như security/privacy bug"
              ]
            }]
          }
        })
      ]
    },

    // TUẦN 28: Project 4 – Social/Chat Application Testing
    {
      week: 28,
      title: "PROJECT 4 – SOCIAL/CHAT APPLICATION TESTING",
      goals: [
        "Làm quen với các đặc thù của ứng dụng Social/Chat (real-time, notifications)",
        "Test các luồng: đăng ký, tạo profile, kết bạn, gửi/nhận tin nhắn",
        "Quan sát behavior real-time & consistency giữa nhiều client"
      ],
      metrics: { mouseUsage: "N/A", shortcutsLearned: 0, comfortLevel: "10/10" },
      finalProject: {
        title: "Social/Chat App Core Flow Testing",
        description: "Test 1 app social/chat (demo hoặc web-app đơn giản) với các luồng chính về tài khoản & messaging",
        requirements: [
          "Thiết kế test case cho đăng ký/đăng nhập/profile",
          "Thiết kế test case cho gửi/nhận tin, online/offline",
          "Ghi lại findings về real-time & notifications"
        ],
        deliverables: [
          "Test cases cho account + messaging",
          "Bug/finding list",
          "Ghi chú về real-time behavior"
        ],
        estimatedHours: 8
      },
      days: [
        createDay("Thứ 2", "Phân tích Social/Chat Features", 4, {
          motivationalQuote: "💬 Chat app tưởng đơn giản nhưng có vô số edge case thú vị.",
          dailyGoals: [
            "✅ Hiểu các tính năng cốt lõi của social/chat",
            "✅ Xác định areas dễ lỗi (real-time, notifications, status)"
          ],
          morning: {
            title: "Sáng (1.5h): Feature breakdown",
            content: [
              "Account: Signup, Login, Password reset, Profile",
              "Social: Friend request, Accept/Reject, Block",
              "Chat: 1-1 messaging, seen status, typing indicator, online/offline",
              "Notifications: in-app, email, push (mức khái niệm)"
            ],
            concepts: [
              "Real-time đồng nghĩa với nhiều trạng thái thay đổi liên tục – dễ phát sinh bug hiển thị",
              "Cần test cả behavior khi network chậm/yếu"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Xác định scenario & edge cases",
            exercises: [{
              title: "Social/chat scenario design",
              duration: "2h",
              tasks: [
                "Chọn 1 app demo (VD: web chat đơn giản) hoặc mô phỏng bằng 2 browser tabs",
                "Liệt kê các scenario: gửi/nhận tin, user A block user B, user offline rồi online lại, message order",
                "Thêm edge case: mất mạng trong khi gửi, gửi tin rất dài, gửi nhiều tin nhanh",
                "Đánh dấu các scenario cần test trên 2 client cùng lúc (A & B)"
              ]
            }]
          }
        }),
        createDay("Thứ 4", "Thiết kế Test Case & Real-time Findings", 4, {
          motivationalQuote: "⏱ Real-time tốt tạo cảm giác 'sống', real-time lỗi gây khó chịu ngay lập tức.",
          dailyGoals: [
            "✅ Viết test case cho account + messaging",
            "✅ Ghi nhận findings về real-time/notification"
          ],
          morning: {
            title: "Sáng (1.5h): Viết test cases",
            content: [
              "Viết test cho signup/login/profile (kết hợp kiến thức từ các tuần trước)",
              "Viết test cho gửi/nhận tin giữa 2 user (A & B)",
              "Test seen status, typing indicator (nếu có)",
              "Test block/unblock & impact đến messaging"
            ],
            concepts: [
              "Với real-time, expected cần mô tả rõ cả phía A và phía B",
              "Cần ghi rõ điều kiện network/thiết bị nếu có"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Ghi nhận real-time findings",
            exercises: [{
              title: "Real-time behavior notes",
              duration: "2h",
              tasks: [
                "Nếu có app demo: thử gửi tin trong nhiều tình huống (online/offline, refresh trang, ...), ghi lại behavior",
                "Nếu không có app: tưởng tượng các tình huống và viết expected cho mỗi case",
                "Liệt kê 5–10 finding tiềm năng: trễ message, mất message, status hiển thị sai, notification thiếu/thừa",
                "Chọn 2–3 finding quan trọng nhất, viết dạng bug report chi tiết"
              ]
            }]
          }
        })
      ]
    },

    // TUẦN 29: Project 5 – Food Delivery App Testing
    {
      week: 29,
      title: "PROJECT 5 – FOOD DELIVERY APP TESTING",
      goals: [
        "Hiểu đặc thù domain Food Delivery (địa điểm, thời gian, trạng thái đơn)",
        "Test các luồng: chọn quán, chọn món, đặt đơn, theo dõi trạng thái, huỷ đơn",
        "Xem xét trải nghiệm user từ đặt món tới giao hàng"
      ],
      metrics: { mouseUsage: "N/A", shortcutsLearned: 0, comfortLevel: "10/10" },
      finalProject: {
        title: "Food Delivery Order Flow Testing",
        description: "Test 1 luồng đặt món giao đồ ăn (demo/giả lập) end-to-end từ chọn quán đến hoàn thành giao hàng",
        requirements: [
          "Thiết kế test case cho các trạng thái đơn hàng (Created, Accepted, Preparing, On the way, Delivered, Canceled)",
          "Kiểm tra tính chính xác của giá, phí giao, tổng tiền",
          "Test huỷ/đổi địa chỉ/đổi món (nếu có)"
        ],
        deliverables: [
          "Test cases cho order flow",
          "Bug/finding list",
          "Ghi chú về UX & edge cases"
        ],
        estimatedHours: 8
      },
      days: [
        createDay("Thứ 2", "Phân tích Order Flow & Trạng thái Đơn", 4, {
          motivationalQuote: "🍱 Food delivery tốt = khách đói nhưng không bực.",
          dailyGoals: [
            "✅ Hiểu các trạng thái đơn hàng & vai trò của chúng",
            "✅ Xác định điểm dễ lỗi trong order flow"
          ],
          morning: {
            title: "Sáng (1.5h): Order states & pricing",
            content: [
              "Các trạng thái đơn: Created, Accepted, Preparing, On the way, Delivered, Canceled",
              "Các thành phần giá: item price, tax, delivery fee, discount",
              "Edge cases: quán đóng cửa, shipper huỷ, user huỷ giữa chừng",
              "Quan hệ giữa trạng thái & hành động cho phép (VD: giai đoạn nào được huỷ?)"
            ],
            concepts: [
              "Đơn hàng phải luôn thể hiện trạng thái nhất quán giữa các màn hình",
              "Tính tiền sai là bug rất nghiêm trọng"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Vẽ flow & test ideas",
            exercises: [{
              title: "Food delivery flow mapping",
              duration: "2h",
              tasks: [
                "Chọn 1 app demo (hoặc mô phỏng) cho food delivery",
                "Vẽ flow từ chọn quán -> chọn món -> checkout -> theo dõi đơn -> hoàn thành",
                "Liệt kê các điểm cần test: filter quán, out-of-stock, tối thiểu đơn hàng, phí giao theo khoảng cách",
                "Tạo list 10–15 test ideas đa dạng (functional + UX)"
              ]
            }]
          }
        }),
        createDay("Thứ 4", "Thiết kế Test Case & Edge Cases cho Food Delivery", 4, {
          motivationalQuote: "🧪 Test kỹ edge cases để tránh trải nghiệm 'đói + bực'.",
          dailyGoals: [
            "✅ Viết test cases chi tiết cho order flow",
            "✅ Cover được một số edge case quan trọng"
          ],
          morning: {
            title: "Sáng (1.5h): Viết test cho luồng chính",
            content: [
              "Viết test case cho happy path: chọn quán, chọn món, thanh toán, giao thành công",
              "Thêm test cho nhiều phương thức thanh toán (nếu có)",
              "Kiểm tra lịch sử đơn & chi tiết đơn",
              "Kiểm tra UI hiển thị trạng thái đơn rõ ràng"
            ],
            concepts: [
              "Tập trung trước vào happy path thật mượt",
              "Chi tiết đơn phải khớp 100% với các bước đã đi"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Edge cases & findings",
            exercises: [{
              title: "Food delivery edge cases",
              duration: "2h",
              tasks: [
                "Viết test case cho: quán hết món sau khi order, shipper huỷ, user đổi địa chỉ, user huỷ quá trễ",
                "Xem xét behavior về refund/không refund (ở mức khái niệm)",
                "Ghi lại 5–10 finding tiềm năng về UX/functional",
                "Chọn 2–3 finding quan trọng nhất và viết chi tiết như bug report"
              ]
            }]
          }
        })
      ]
    },

    // TUẦN 30: Project 6 – Hotel Booking / Reservation System
    {
      week: 30,
      title: "PROJECT 6 – HOTEL BOOKING / RESERVATION SYSTEM",
      goals: [
        "Làm quen domain đặt phòng khách sạn",
        "Test các luồng: tìm phòng, chọn ngày, đặt phòng, huỷ/đổi đặt phòng",
        "Chú ý đến tính đúng đắn của ngày/giờ, giá theo mùa/loại phòng"
      ],
      metrics: { mouseUsage: "N/A", shortcutsLearned: 0, comfortLevel: "10/10" },
      finalProject: {
        title: "Hotel Booking Flow Testing",
        description: "Test 1 luồng đặt phòng khách sạn end-to-end với nhiều điều kiện ngày/giá khác nhau",
        requirements: [
          "Thiết kế test case cho search & booking (ngày vào/ra, số khách, loại phòng)",
          "Test huỷ/đổi ngày, upgrade phòng (nếu có)",
          "Kiểm tra giá hiển thị & tổng tiền"
        ],
        deliverables: [
          "Test cases cho search + booking + modify/cancel",
          "Bug/finding list",
          "Ghi chú về pricing/date logic"
        ],
        estimatedHours: 8
      },
      days: [
        createDay("Thứ 2", "Phân tích Booking Flow & Date/Price Logic", 4, {
          motivationalQuote: "🏨 Booking chính xác giúp khách có trải nghiệm trọn vẹn.",
          dailyGoals: [
            "✅ Hiểu các tham số quan trọng trong booking (ngày, số khách, loại phòng)",
            "✅ Nhận diện các rule về giá & ngày"
          ],
          morning: {
            title: "Sáng (1.5h): Date & price rules",
            content: [
              "Check-in/check-out date – không cho phép ngày quá khứ, check-out > check-in",
              "Số khách tối đa theo loại phòng",
              "Giá theo mùa/weekday/weekend (ở mức khái niệm)",
              "Chính sách huỷ/đổi cơ bản"
            ],
            concepts: [
              "Sai logic ngày/giá có thể gây thiệt hại tài chính lớn",
              "UI cần hướng dẫn user chọn ngày hợp lệ, không chỉ báo lỗi khô khan"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Xác định scenario booking",
            exercises: [{
              title: "Booking scenarios",
              duration: "2h",
              tasks: [
                "Liệt kê scenario: đặt phòng đơn, đặt nhiều phòng, đặt cho cuối tuần/ngày lễ",
                "Thêm scenario invalid: ngày quá khứ, check-out < check-in, quá số khách",
                "Xem xét scenario huỷ trước/sau deadline, đổi ngày, đổi loại phòng",
                "Đánh dấu scenario ưu tiên cao để test trước"
              ]
            }]
          }
        }),
        createDay("Thứ 4", "Thiết kế Test Case & Pricing Findings", 4, {
          motivationalQuote: "💵 Test pricing kỹ lưỡng để bảo vệ cả khách lẫn doanh nghiệp.",
          dailyGoals: [
            "✅ Viết test case chi tiết cho booking flow",
            "✅ Ghi nhận findings về giá & ngày"
          ],
          morning: {
            title: "Sáng (1.5h): Viết test cases booking",
            content: [
              "Viết test cho booking hợp lệ (nhiều loại phòng/ngày khác nhau)",
              "Viết test cho invalid cases (ngày sai, khách quá đông, ...)",
              "Thêm test cho huỷ/đổi đặt phòng",
              "Đảm bảo test detail booking page (tổng tiền, breakdown, chính sách)"
            ],
            concepts: [
              "Mỗi test cần nêu rõ input: ngày, loại phòng, số khách, ...",
              "Expected về giá cần chi tiết: room price, taxes/fees, total"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Pricing & UX findings",
            exercises: [{
              title: "Booking findings",
              duration: "2h",
              tasks: [
                "Liệt kê 5–10 finding tiềm năng: giá hiển thị không khớp, chính sách huỷ không rõ ràng, cảnh báo ngày kém",
                "Ước lượng impact business cho từng finding",
                "Chọn 2–3 finding quan trọng nhất và viết chi tiết dạng bug/issue",
                "Chuẩn bị note để so sánh với các domain khác (E-commerce, Food, ...)"
              ]
            }]
          }
        })
      ]
    },

    // TUẦN 31: Project 7 – LMS (Learning Management System) Testing
    {
      week: 31,
      title: "PROJECT 7 – LMS (LEARNING MANAGEMENT SYSTEM) TESTING",
      goals: [
        "Làm quen domain LMS: khoá học, bài học, bài tập, tiến độ",
        "Test các luồng: đăng ký khoá học, xem bài, làm bài, tracking tiến độ",
        "Tập trung vào data consistency giữa nhiều màn hình (dashboard, chi tiết khoá, report)"
      ],
      metrics: { mouseUsage: "N/A", shortcutsLearned: 0, comfortLevel: "10/10" },
      finalProject: {
        title: "LMS Course & Progress Testing",
        description: "Test 1 luồng học khoá (demo) từ đăng ký, học bài, làm bài, đến báo cáo tiến độ",
        requirements: [
          "Thiết kế test case cho đăng ký khoá, mở bài, đánh dấu hoàn thành",
          "Kiểm tra tính đúng đắn của progress (phần trăm, số bài đã học)",
          "Kiểm tra hiển thị kết quả/báo cáo"
        ],
        deliverables: [
          "Test cases cho course + progress",
          "Bug/finding list",
          "Ghi chú về consistency dữ liệu"
        ],
        estimatedHours: 8
      },
      days: [
        createDay("Thứ 2", "Phân tích LMS & Course Flow", 4, {
          motivationalQuote: "📚 LMS tốt giúp việc học trở nên rõ ràng và có động lực.",
          dailyGoals: [
            "✅ Hiểu entity chính: User, Course, Lesson, Progress",
            "✅ Vẽ flow học 1 khoá cơ bản"
          ],
          morning: {
            title: "Sáng (1.5h): Domain & entities",
            content: [
              "User roles: Student, Instructor (ở mức khái niệm)",
              "Course structure: Module, Lesson, Quiz/Assignment",
              "Progress tracking: phần trăm hoàn thành, trạng thái lesson (Not started/In progress/Done)",
              "Các màn hình điển hình: Dashboard, Course Detail, Lesson Player, Progress Report"
            ],
            concepts: [
              "Progress sai dễ làm user mất động lực học",
              "LMS thường có nhiều điểm sync (client/server) dễ gây lệch dữ liệu"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Xác định flows & test ideas",
            exercises: [{
              title: "LMS flow mapping",
              duration: "2h",
              tasks: [
                "Vẽ flow Student: Browse course -> Enroll -> Learn lessons -> Complete course",
                "Liệt kê scenario: enroll 1 khoá, enroll nhiều khoá, bỏ dở giữa chừng, quay lại học tiếp",
                "Thêm scenario liên quan đến quiz/assignment (nộp/chấm điểm – ở mức khái niệm)",
                "Đánh dấu nơi cần verify dữ liệu (progress, điểm, trạng thái lesson)"
              ]
            }]
          }
        }),
        createDay("Thứ 4", "Thiết kế Test Case & Progress Findings", 4, {
          motivationalQuote: "📈 Tracking rõ ràng = user thấy mình đang tiến bộ.",
          dailyGoals: [
            "✅ Viết test cases cho course & progress",
            "✅ Ghi findings về data consistency"
          ],
          morning: {
            title: "Sáng (1.5h): Viết test cases LMS",
            content: [
              "Viết test cho enroll/unenroll course",
              "Viết test cho học bài & đánh dấu hoàn thành",
              "Kiểm tra progress ở nhiều nơi (dashboard, course detail)",
              "Nếu có quiz: test submit & hiển thị điểm cơ bản"
            ],
            concepts: [
              "Test phải chỉ rõ kỳ vọng về phần trăm progress sau mỗi hành động",
              "Cần kiểm tra cập nhật realtime vs sau reload"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Findings về consistency",
            exercises: [{
              title: "LMS findings",
              duration: "2h",
              tasks: [
                "Liệt kê 5–10 tình huống có thể dẫn đến progress sai (VD: học offline, refresh giữa chừng, ...) – kể cả giả lập",
                "Viết findings: màn A hiển thị khác màn B, điểm hiển thị sai, status lesson không đồng bộ",
                "Chọn 2–3 finding quan trọng nhất và viết chi tiết dạng bug",
                "Note lại những điều học được về việc test hệ thống nhiều màn hình chia sẻ cùng 1 data"
              ]
            }]
          }
        })
      ]
    },

    // TUẦN 32: Project 8–10 – CRM, Inventory & Real Estate Listing (Tổng hợp)
    {
      week: 32,
      title: "PROJECT 8–10 – CRM, INVENTORY & REAL ESTATE LISTING (TỔNG HỢP)",
      goals: [
        "Tiếp xúc thêm 3 domain business: CRM, Inventory, Real Estate",
        "Thực hành phân tích yêu cầu ở mức high-level và thiết kế test cho từng domain",
        "Tạo thêm artefact đa dạng cho portfolio (3 mini test packs)"
      ],
      metrics: { mouseUsage: "N/A", shortcutsLearned: 0, comfortLevel: "10/10" },
      finalProject: {
        title: "Multi-domain Mini Test Packs",
        description: "Thiết kế 3 bộ test nhỏ cho 3 domain: CRM, Inventory, Real Estate Listing",
        requirements: [
          "Mỗi domain: ít nhất 8–10 test cases core",
          "Ghi lại 3–5 findings tiềm năng cho mỗi domain",
          "Tổng hợp thành 1 gói tài liệu để dùng làm portfolio"
        ],
        deliverables: [
          "03 mini test packs (CRM, Inventory, Real Estate)",
          "Danh sách findings",
          "Tài liệu tổng hợp portfolio"
        ],
        estimatedHours: 8
      },
      days: [
        createDay("Thứ 2", "CRM & Inventory – Phân tích & Thiết kế Test", 4, {
          motivationalQuote: "🤝 CRM & Inventory là xương sống của rất nhiều hệ thống nội bộ.",
          dailyGoals: [
            "✅ Hiểu high-level CRM & Inventory",
            "✅ Thiết kế mini test pack cho 2 domain này"
          ],
          morning: {
            title: "Sáng (1.5h): CRM & Inventory overview",
            content: [
              "CRM: Leads, Contacts, Opportunities, Pipelines (ở mức khái niệm)",
              "Inventory: Products, Stock, Movements (Import/Export/Adjustment)",
              "Các hành động core: tạo/sửa/xoá, chuyển trạng thái, lọc/tìm kiếm",
              "Rủi ro chính: mất/nhầm dữ liệu khách hàng, stock sai, báo cáo sai"
            ],
            concepts: [
              "CRM tập trung vào lifecycle khách hàng & sales funnel",
              "Inventory tập trung vào số lượng & biến động hàng tồn kho"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Thiết kế 2 mini test packs",
            exercises: [{
              title: "CRM + Inventory test packs",
              duration: "2h",
              tasks: [
                "Thiết kế 8–10 test cases cho CRM (tạo lead, chuyển stage, chuyển thành customer, search/filter, ...)",
                "Thiết kế 8–10 test cases cho Inventory (import stock, xuất hàng, điều chỉnh stock, kiểm tra báo cáo tồn)",
                "Ghi 3–5 findings tiềm năng cho mỗi domain",
                "Định dạng test cases & findings sao cho dễ đưa vào CV/portfolio"
              ]
            }]
          }
        }),
        createDay("Thứ 4", "Real Estate Listing & Tổng kết lộ trình", 4, {
          motivationalQuote: "🏁 Bạn đã đi đến cuối lộ trình – giờ là lúc kết nối mọi thứ lại với nhau.",
          dailyGoals: [
            "✅ Thiết kế mini test pack cho Real Estate Listing",
            "✅ Tổng hợp toàn bộ artefact & học được trong 32 tuần"
          ],
          morning: {
            title: "Sáng (1.5h): Real Estate listing overview",
            content: [
              "Entities: Property, Owner, Agent, Listing",
              "Thuộc tính quan trọng: vị trí, giá, diện tích, trạng thái (For sale/Rented/etc.)",
              "Luồng cơ bản: tạo listing, cập nhật, ẩn/xoá, tìm kiếm/filter",
              "Rủi ro: thông tin sai, giá sai, listing hết hạn nhưng vẫn hiện, filter/tìm kiếm lỗi"
            ],
            concepts: [
              "Listing thường được user đọc rất nhanh – thông tin cần rõ, đúng, dễ scan",
              "Filter/search phải hoạt động chính xác để user không bỏ lỡ cơ hội"
            ]
          },
          afternoon: {
            title: "Chiều (2h): Thiết kế test pack & tổng hợp portfolio",
            exercises: [{
              title: "Real Estate test pack & recap",
              duration: "2h",
              tasks: [
                "Thiết kế 8–10 test case core cho Real Estate Listing (tạo/sửa/xoá listing, filter, sort, ...)",
                "Ghi 3–5 findings tiềm năng cho domain này",
                "Tổng hợp lại các artefact đã tạo trong 32 tuần: test cases, SQL pack, RTM, test plans, test reports, mini projects",
                "Chọn ra 3–5 artefact mạnh nhất để đưa vào portfolio & luyện nói cho phỏng vấn"
              ]
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

