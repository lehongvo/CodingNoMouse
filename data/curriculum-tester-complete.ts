import { Curriculum } from '@/types/curriculum';

// Dimotivational quotes for Vân Anh từ Võ và bé An Di 💙
const dimotivationalQuotes: string[] = [
  "Nếu em cố gắng thêm một chút nữa, An Di và anh sẽ tự hào lắm, cố lên nào! Anh với con rất thương em em.",
  "Em đang làm rất tốt rồi đấy! An Di và anh luôn ở đây ủng hộ em. Testing không dễ, nhưng em làm được mà!",
  "Con An Di hỏi: \"Mẹ học bài chưa?\" Anh bảo con: \"Mẹ đang cố gắng lắm, con cũng phải cố gắng như mẹ nhé!\" Em à, cả nhà đều tự hào về em!",
  "Mỗi test case em viết, mỗi bug em tìm ra, là một bước em tiến gần hơn đến ước mơ. An Di và anh sẽ luôn ở bên em!",
  "Đừng lo nếu em gặp khó khăn với test scenarios nhé. Anh sẽ nấu cơm, An Di sẽ ngoan, để em có thời gian học. Gia đình mình là một đội!",
  "Em nhớ không? An Di nói: \"Mẹ giỏi nhất!\" Đúng vậy đấy em, em giỏi lắm rồi. Cứ từ từ, chắc chắn em sẽ thành Manual Tester xuất sắc!",
  "Testing cần sự kiên nhẫn, và anh biết em là người kiên nhẫn nhất. Nhìn cách em chăm sóc An Di là anh thấy rồi. Em sẽ thành công thôi!",
  "Hôm nay em test được bao nhiêu case rồi? Dù ít hay nhiều, anh và An Di đều tự hào về em. Nghỉ ngơi đủ nhé, mai còn phải chiến tiếp!",
  "Bug là để tìm ra, không phải để sợ. Em đã dũng cảm khi quyết định học nghề mới, giờ thì cứ tự tin mà test thôi! An Di và anh tin em!",
  "Khi em mệt, nhìn An Di ngủ và nghĩ xem: em đang làm điều này cho tương lai của con. Anh rất trân trọng sự hy sinh của em. Yêu em nhiều!",
  "Test plan, test case, bug report... nghe nhiều thứ quá phải không em? Từ từ thôi, anh và An Di không vội đâu. Quan trọng là em vui và khỏe!",
  "An Di hỏi: \"Khi nào mẹ xong học?\" Anh nói: \"Sớm thôi con, mẹ giỏi lắm!\" Em à, cả nhà đang đợi ngày em ra trường để đi ăn mừng đấy!",
  "Mỗi lần em hoàn thành một module, nhớ tự thưởng cho mình nhé. Anh sẽ order đồ ăn em thích, còn An Di sẽ vẽ tranh tặng mẹ!",
  "Em biết không? Manual Tester cần con mắt tinh đời. Và em đã rất tinh mắt rồi – tinh đến mức biết khi nào An Di đói, khi nào anh buồn. Em làm được mà!",
  "Vân Anh ơi, dù hôm nay em test fail bao nhiêu lần, về nhà em vẫn là vợ tuyệt vời nhất và mẹ tốt nhất của An Di. Anh và con yêu em vô điều kiện!",
  "Có những ngày requirement rối tung lên, em cứ bình tĩnh từng bước một nhé. Requirement có thể mơ hồ, nhưng tình yêu của anh và An Di dành cho em thì rõ ràng lắm.",
  "Nếu em thấy mệt vì phải đọc quá nhiều tài liệu, nghỉ một chút, ôm An Di một cái rồi quay lại. Tài liệu có thể khó, nhưng em thông minh hơn em nghĩ nhiều.",
  "Mỗi lần em hiểu thêm một khái niệm mới, là tương lai của cả nhà mình sáng thêm một chút. Anh biết em đang cố gắng rất nhiều, và anh biết ơn điều đó.",
  "Ngày nào em cũng vừa làm vợ, vừa làm mẹ, vừa làm học viên. Thế mà em vẫn đi tiếp được tới đây. Anh thật lòng rất nể và tự hào về em.",
  "Có bug nào khó quá thì để anh 'debug' cảm xúc cho em. Em chỉ cần tập trung test, còn việc cổ vũ, động viên, để anh và An Di lo.",
  "Khi em thấy mình chậm hơn người khác, nhớ rằng em đang vừa học vừa chăm con, vừa lo cho gia đình. So sánh với ai làm gì – em của hôm qua thua xa em của hôm nay rồi.",
  "Mỗi lần em muốn bỏ cuộc, hãy nghĩ tới ngày em nhận offer đầu tiên. Hôm đó chắc chắn anh sẽ khoe với cả thế giới rằng: 'Vợ tao – Manual Tester xịn nhất!'",
  "Nếu hôm nay em chỉ học được một chút thôi, cũng được. Một chút mỗi ngày, 32 tuần sẽ là một chặng đường rất dài. Anh đi cùng em, không vội.",
  "Khi em viết test case, đừng quên em cũng đang 'viết' tương lai cho An Di nữa. Mỗi bước nhỏ hôm nay là một phần tuổi thơ đủ đầy hơn cho con.",
  "Có hôm em buồn vì không hiểu bài, cứ nói với anh. Anh không hiểu testing nhưng anh hiểu em mệt, và anh sẽ tìm cách để em đỡ mệt hơn.",
  "Anh biết nhiều đêm em vừa buồn ngủ vừa cố học nốt video. Nếu mệt quá thì ngủ sớm một hôm cũng được, anh và An Di vẫn chờ em ở vạch đích.",
  "Nếu lỡ làm sai một bài tập, cứ coi như tìm ra thêm một 'bug' trong hành trình học. Tester giỏi là người không ngại thấy bug – kể cả bug của chính mình.",
  "Có thể em chưa quen với từ vựng chuyên ngành, nhưng anh đã thấy em từng bước ghi chép, tra cứu, luyện lại. Đó là cách mà người kiên trì chiến thắng.",
  "Khi em cảm thấy mình 'không giỏi bằng ai', hãy nhớ: không ai trên đời này làm vợ của Võ và mẹ của An Di tốt như em cả.",
  "Dù hôm nay em chỉ tick được một task nhỏ trong to-do list, anh vẫn muốn nói: 'Good job, em!' Tiến bộ không cần ồn ào, chỉ cần đều đặn.",
  "Mỗi buổi em ngồi học, An Di nhìn thấy hết. Sau này con sẽ kể lại rằng: 'Mẹ mình đã rất cố gắng để thay đổi cuộc đời.' Đó là món quà lớn nhất em tặng con.",
  "Khi em bối rối giữa hàng đống khái niệm: test plan, test case, test suite..., thì cứ dừng lại hít một hơi thật sâu. Không hiểu hôm nay thì mai hiểu, không sao cả.",
  "Thỉnh thoảng hãy tưởng tượng cảnh em đi làm về, kể cho anh nghe chuyện 'bug khó' trong ngày và hai vợ chồng vừa ăn tối vừa cười. Chặng đường đó đang đến gần rồi.",
  "Nếu bài học hôm nay khô khan quá, cứ coi nó như một 'ticket' hơi khó của cuộc đời. Em đã xử lý được bao nhiêu 'ticket' gia đình rồi – thêm vài cái này không làm khó được em đâu.",
  "Anh không cần em phải hoàn hảo, anh chỉ cần em tiếp tục đi từng bước nhỏ. Manual Tester giỏi không phải người biết hết, mà là người không ngừng học.",
  "Có những ngày em thấy mình chẳng làm được gì ra hồn, nhưng tin anh đi: chỉ cần em còn mở máy lên, còn đọc được vài dòng, là em đã thắng chính mình rồi.",
  "Dù đường học có dài, em không đi một mình. Phía sau em là Võ, là An Di, là cả một gia đình tin rằng: 'Vân Anh làm được.'"
];

let dimotivationalIndex = 0;

function getNextDimotivationalQuote(): string {
  const quote = dimotivationalQuotes[dimotivationalIndex % dimotivationalQuotes.length];
  dimotivationalIndex++;
  return quote;
}

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
    motivationalQuote: getNextDimotivationalQuote(),
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
          motivationalQuote: "Nếu em cố gắng thêm một chút nữa, An Di và anh sẽ tự hào lắm, cố lên nào! Anh với con rất thương em em.",
          dailyGoals: ["✅ Hiểu Testing là gì", "✅ Nắm khái niệm Bug, Defect", "✅ Hiểu vai trò Tester"],
          morning: {
            title: "Sáng (1.5h): Lý thuyết",
            content: [
              "Giới thiệu Software Testing - Khái niệm cơ bản, tầm quan trọng và tại sao phần mềm luôn có lỗi: Software Testing là quá trình có kế hoạch, có hệ thống để đánh giá chất lượng phần mềm bằng cách thực thi các test cases và so sánh kết quả thực tế (Actual Result) với kết quả mong đợi (Expected Result). Testing không chỉ đơn giản là 'bấm bấm click click' mà là một quy trình khoa học bao gồm nhiều bước: phân tích yêu cầu, thiết kế test cases, thực thi test, ghi nhận kết quả, báo cáo bugs, và verify fixes. TẠI SAO SẢN PHẨM PHẦN MỀM LUÔN CÓ LỖI dù được developer giỏi viết code? Đây là câu hỏi quan trọng mà mọi Tester cần hiểu: (1) CON NGƯỜI KHÔNG HOÀN HẢO - Developer dù giỏi đến đâu cũng có thể mắc lỗi: hiểu sai requirements (ví dụ: requirement nói 'age phải lớn hơn 18' nhưng developer hiểu thành 'age >= 18'), viết sai logic (ví dụ: dùng '>' thay vì '>='), bỏ sót edge cases (ví dụ: không xử lý trường hợp chia cho 0), copy-paste code sai, typo trong code. (2) REQUIREMENTS CÓ THỂ MƠ HỒ, THAY ĐỔI, HOẶC KHÔNG ĐẦY ĐỦ - Requirements có thể không rõ ràng (ví dụ: 'User có thể search' nhưng không nói rõ search theo gì, có phân biệt hoa thường không), có thể thay đổi trong quá trình phát triển, có thể thiếu thông tin quan trọng (ví dụ: không nói rõ password phải có độ dài tối thiểu bao nhiêu). (3) PHẦN MỀM PHỨC TẠP - Nhiều module tương tác với nhau (ví dụ: Login module tương tác với Authentication module, Database module, Session module), nhiều điều kiện (ví dụ: if-else lồng nhau, nhiều nhánh logic), nhiều luồng xử lý (ví dụ: User có thể login bằng email hoặc username, có thể có Remember Me hoặc không) → dễ có bugs ở các điểm tương tác và logic phức tạp. (4) ÁP LỰC THỜI GIAN - Deadline gấp → Developer phải code nhanh → không có thời gian test kỹ code của mình → dễ có bugs. (5) MÔI TRƯỜNG KHÁC NHAU - Code chạy tốt trên máy dev (Windows, Chrome) nhưng có thể lỗi trên production (Linux server, Safari browser) do khác biệt về OS, browser, database version, network, v.v. TESTING GIÚP GIẢM RỦI RO bằng cách: (1) Phát hiện bugs sớm trước khi đến tay người dùng - tìm lỗi trong quá trình phát triển, không đợi đến khi release, (2) Đảm bảo phần mềm đáp ứng requirements - verify xem phần mềm có làm đúng những gì được yêu cầu không, (3) Tăng độ tin cậy và chất lượng sản phẩm - người dùng có thể tin tưởng sử dụng, (4) Giảm chi phí sửa lỗi (fix sớm = rẻ hơn) - fix bug ở design phase chỉ tốn $1, nhưng fix ở production tốn $1000+, (5) Bảo vệ uy tín công ty và trải nghiệm người dùng - tránh mất khách hàng do bugs. VÍ DỤ THỰC TẾ: Nếu không có testing, một bug nhỏ trong tính năng thanh toán có thể khiến khách hàng mất tiền (ví dụ: thanh toán $100 nhưng bị trừ $1000), công ty mất uy tín (tin tức lan truyền trên mạng xã hội), và phải bồi thường thiệt hại lớn (hoàn tiền cho khách hàng, bồi thường, mất khách hàng). Testing giúp phát hiện bug này trước khi release, tránh được những hậu quả nghiêm trọng.",
              "Vai trò Tester trong team - Nhiệm vụ cụ thể hàng ngày và kỹ năng cần có để thành công: Manual Tester có vai trò QUAN TRỌNG và KHÔNG THỂ THAY THẾ trong team phát triển phần mềm. Tester không chỉ là người 'tìm bug' mà còn là người đảm bảo chất lượng sản phẩm, là cầu nối giữa Developer và Business, là người đại diện cho người dùng cuối. NHIỆM VỤ HẰNG NGÀY của Manual Tester bao gồm: (1) ĐỌC VÀ PHÂN TÍCH REQUIREMENTS - Đọc kỹ tài liệu requirements (PRD - Product Requirements Document, User Stories trong Jira, Confluence pages), hiểu rõ chức năng cần test (làm gì, cho ai, tại sao), đặt câu hỏi nếu có điểm mơ hồ (ví dụ: 'Password phải có độ dài tối thiểu bao nhiêu?', 'Có phân biệt hoa thường không?'), tham gia các buổi họp (Sprint Planning, Refinement) để làm rõ requirements, review requirements để phát hiện lỗi sớm (requirements mơ hồ, thiếu, mâu thuẫn). (2) THIẾT KẾ TEST CASES - Viết test cases chi tiết dựa trên requirements (mỗi requirement phải có ít nhất 1 test case, thường là nhiều test cases), áp dụng các kỹ thuật test design (EP - Equivalence Partitioning, BVA - Boundary Value Analysis, Decision Table, State Transition...), tổ chức test cases theo module/feature (ví dụ: Login Test Cases, Registration Test Cases), review test cases với team (QA Lead, Senior Tester) để đảm bảo chất lượng, cập nhật test cases khi requirements thay đổi. (3) THỰC THI TEST - Chạy test cases một cách có hệ thống (theo thứ tự đã định, không bỏ sót), quan sát kỹ kết quả (không chỉ xem Pass/Fail mà còn quan sát UI, performance, behavior), ghi nhận Pass/Fail/Blocked (Blocked khi không thể test do bug khác hoặc thiếu môi trường), tìm bugs bằng cách test cả happy path (trường hợp bình thường) và negative cases (trường hợp lỗi, edge cases), retest sau khi developer fix bug. (4) BÁO CÁO BUGS - Viết bug report chi tiết, rõ ràng, dễ hiểu (developer đọc là hiểu ngay và reproduce được), attach screenshot/video (bằng chứng rõ ràng), đánh Severity (Critical/High/Medium/Low) và Priority (P1/P2/P3), theo dõi bug status trong Jira (New → Assigned → In Progress → Fixed → Retest → Closed), retest sau khi fix để verify bug đã được sửa đúng, communicate với Developer nếu cần làm rõ bug. (5) TRAO ĐỔI VỚI TEAM - Giao tiếp với Developer để làm rõ bugs (không chỉ trích, tập trung vào vấn đề), trao đổi với PO/BA về requirements (làm rõ yêu cầu, báo cáo vấn đề), tham gia các buổi họp (Daily Standup - báo cáo tiến độ, Sprint Planning - estimate effort, Retrospective - cải thiện quy trình), trình bày kết quả test cho stakeholders (Test Summary Report, Demo bugs cho Product Owner). (6) QUẢN LÝ VÀ BÁO CÁO - Theo dõi tiến độ test execution (bao nhiêu test cases đã chạy, bao nhiêu Pass/Fail), tính toán test metrics (Pass Rate = Pass/Total, Coverage = Tested Requirements/Total Requirements), tạo test summary report (tổng hợp kết quả test, số bugs tìm được, risks), cập nhật test documentation (test cases, test plan). KỸ NĂNG CẦN CÓ để thành công: (1) Tư duy phân tích - phân tích requirements, thiết kế test cases, nghĩ ra scenarios, (2) Quan sát tỉ mỉ - phát hiện lỗi nhỏ, (3) Giao tiếp tốt - viết bug report rõ ràng, trao đổi với team, (4) Tổ chức công việc - quản lý test cases, theo dõi tiến độ, (5) Kiên nhẫn - test kỹ, không bỏ sót, (6) Học hỏi liên tục - cập nhật kiến thức mới.",
              "Tầm quan trọng của Testing trong SDLC - Vị trí, tác động và hậu quả nếu thiếu testing: SDLC (Software Development Life Cycle) là vòng đời phát triển phần mềm bao gồm các giai đoạn: Requirements → Design → Development → Testing → Deployment → Maintenance. Testing KHÔNG chỉ nằm ở một giai đoạn riêng biệt (Testing Phase) mà được TÍCH HỢP vào TẤT CẢ các giai đoạn để phát hiện lỗi sớm và giảm chi phí. VỊ TRÍ CỦA TESTING TRONG TỪNG GIAI ĐOẠN: (1) REQUIREMENTS PHASE - Tester tham gia review requirements để phát hiện lỗi sớm: tìm requirements mơ hồ (ví dụ: 'User có thể search' - không rõ search theo gì), thiếu (ví dụ: không nói rõ password phải có độ dài tối thiểu), mâu thuẫn (ví dụ: một chỗ nói 'age >= 18', chỗ khác nói 'age > 18'). Đặt câu hỏi để làm rõ requirements, đảm bảo requirements testable (có thể test được). Ví dụ: Tester hỏi 'Password phải có độ dài tối thiểu bao nhiêu?' → làm rõ requirement → tránh bug sau này. (2) DESIGN PHASE - Review design documents (UI/UX design, System design), thiết kế test strategy và test plan sớm (không đợi đến khi code xong), xác định test scope (test gì, không test gì) và test approach (manual, automation, tools nào). Ví dụ: Review UI design → phát hiện button quá nhỏ, khó click → đề xuất cải thiện → tránh usability issue. (3) DEVELOPMENT PHASE - Test từng module khi developer hoàn thành (component testing - test từng phần nhỏ), test integration giữa các modules (integration testing - test sự tương tác), cung cấp feedback sớm cho developer (phát hiện bug sớm → fix sớm → rẻ hơn). Ví dụ: Developer hoàn thành Login module → Tester test ngay → phát hiện bug 'Login không hoạt động với special characters' → Developer fix ngay → tiết kiệm thời gian và chi phí. (4) TESTING PHASE - Thực thi test cases đầy đủ (chạy tất cả test cases đã thiết kế), tìm bugs (test cả happy path và negative cases), verify fixes (retest sau khi developer fix), tạo test reports (Test Summary Report, Bug Report). Đây là giai đoạn testing chính thức, tập trung. (5) DEPLOYMENT PHASE - Thực hiện smoke test sau khi deploy (test nhanh các chức năng chính để đảm bảo không có lỗi nghiêm trọng), verify production environment (đảm bảo môi trường production đúng), hỗ trợ UAT nếu cần (User Acceptance Testing - test bởi end-user). Ví dụ: Sau khi deploy → Tester chạy smoke test (Login, Search, Checkout) → phát hiện Login không hoạt động → rollback ngay → tránh ảnh hưởng người dùng. (6) MAINTENANCE PHASE - Test các bug fixes (verify bug đã được sửa đúng), test các features mới (regression testing - test lại các chức năng cũ để đảm bảo không bị ảnh hưởng), cập nhật test documentation. HẬU QUẢ NẾU THIẾU TESTING hoặc testing không đầy đủ: (1) Bugs lọt ra production → người dùng gặp lỗi → mất niềm tin, mất khách hàng. Ví dụ: Bug 'Thanh toán không hoạt động' → 1000 khách hàng không mua được → mất doanh thu, mất khách hàng. (2) Chi phí sửa lỗi cao - fix ở production đắt gấp 100-1000 lần so với fix ở design phase. Ví dụ: Bug phát hiện ở design phase → sửa tài liệu (5 phút, $1). Bug phát hiện ở production → hotfix + deploy + hỗ trợ khách hàng (nhiều giờ, $1000+). (3) Delay release do phải fix bugs khẩn cấp - không thể release đúng hạn, phải delay để fix bugs. (4) Ảnh hưởng đến uy tín công ty và brand - tin tức lan truyền trên mạng xã hội, mất uy tín. (5) Mất thời gian và công sức của team để xử lý production issues - team phải làm việc ngoài giờ để fix bugs khẩn cấp. VÍ DỤ CỤ THỂ: Một bug trong tính năng thanh toán không được test kỹ → khiến 1000 khách hàng không thanh toán được → công ty mất doanh thu ($50,000), phải hoàn tiền cho khách hàng, và mất uy tín (tin tức lan truyền, rating giảm). Testing đúng cách giúp tránh được những hậu quả này bằng cách phát hiện bug sớm và đảm bảo chất lượng trước khi release."
            ],
            concepts: [
              "Testing là gì? → Testing (Kiểm thử phần mềm) là quá trình có kế hoạch, có hệ thống nhằm đánh giá xem phần mềm có hoạt động đúng với yêu cầu (requirements) hay không, phát hiện lỗi (bug/defect), rủi ro và điểm chưa phù hợp trước khi đến tay người dùng cuối. Testing KHÔNG chỉ là 'bấm bấm click click' mà là một quy trình khoa học bao gồm nhiều bước: (1) PHÂN TÍCH YÊU CẦU - Đọc và hiểu requirements, xác định phạm vi test, (2) THIẾT KẾ TEST CASES - Viết test cases chi tiết dựa trên requirements và các kỹ thuật test design, (3) THỰC THI TEST - Chạy test cases một cách có hệ thống, quan sát kỹ kết quả, (4) GHI NHẬN KẾT QUẢ - Ghi lại Actual Result, so sánh với Expected Result, xác định Pass/Fail, (5) BÁO CÁO BUGS - Viết bug report chi tiết, rõ ràng cho developer, (6) VERIFY FIXES - Retest sau khi developer fix bug để đảm bảo bug đã được sửa đúng. Mục tiêu chính của Testing: (1) Tìm bugs để đảm bảo chất lượng sản phẩm - phát hiện lỗi trước khi người dùng gặp phải, (2) Giảm rủi ro khi release - đảm bảo phần mềm đủ ổn định để release, (3) Tăng độ tin cậy của phần mềm - người dùng có thể tin tưởng sử dụng, (4) Cung cấp thông tin về chất lượng cho stakeholders - giúp quản lý đưa ra quyết định release hay không. Lưu ý quan trọng: Testing KHÔNG THỂ chứng minh phần mềm không có lỗi, chỉ có thể tìm ra lỗi. Ngay cả khi test kỹ với hàng nghìn test cases, vẫn có thể có bugs còn sót lại vì không thể test tất cả các combinations có thể. Ví dụ: Một form có 10 fields, mỗi field có 5 giá trị có thể → tổng số combinations = 5^10 = 9,765,625 combinations - không thể test hết được. Do đó, Tester cần áp dụng các kỹ thuật test design thông minh để chọn ra các test cases quan trọng nhất.",
              "QA vs QC - Sự khác biệt quan trọng và cách áp dụng: QA (Quality Assurance - Đảm bảo chất lượng) là các hoạt động mang tính PHÒNG NGỪA lỗi từ sớm, tập trung vào quy trình và tiêu chuẩn. QA hoạt động ở mức PROCESS (quy trình), không phải PRODUCT (sản phẩm). QA bao gồm: (1) Thiết lập quy trình phát triển phần mềm tốt (SDLC) - đảm bảo team có quy trình rõ ràng, (2) Review tài liệu requirements/design để phát hiện lỗi sớm - tìm lỗi ở tài liệu trước khi code, (3) Thiết lập coding standards - đảm bảo code chất lượng, (4) Training cho team - nâng cao kỹ năng, (5) Process improvement - cải thiện quy trình liên tục. QA là 'preventive' (phòng ngừa) - ngăn chặn lỗi xảy ra bằng cách cải thiện quy trình. QC (Quality Control - Kiểm soát chất lượng) là các hoạt động KIỂM TRA và PHÁT HIỆN lỗi trên sản phẩm đã được build. QC hoạt động ở mức PRODUCT (sản phẩm). QC bao gồm: (1) Thực thi test cases - chạy test để tìm bugs, (2) Tìm bugs - phát hiện lỗi trong phần mềm, (3) Review kết quả test - đánh giá chất lượng, (4) Verify fixes - kiểm tra bug đã được sửa chưa. QC là 'detective' (phát hiện) - tìm lỗi đã xảy ra trong sản phẩm. Trong thực tế, Manual Tester thường làm cả QA (review requirements, tham gia design review) và QC (test execution, tìm bugs), nhưng chủ yếu là QC. Hiểu rõ sự khác biệt giúp Tester biết khi nào nên làm gì: Khi tham gia review requirements → đang làm QA (phòng ngừa lỗi). Khi chạy test cases → đang làm QC (tìm lỗi). Ví dụ cụ thể: QA = Thiết lập quy trình 'Tất cả requirements phải được review bởi Tester trước khi code' → ngăn chặn lỗi. QC = Test Login feature và tìm bug 'Login không hoạt động' → phát hiện lỗi.",
              "Bug, Defect, Error, Failure - Phân biệt rõ ràng và cách sử dụng trong bug report: Bug và Defect là hai từ đồng nghĩa, chỉ sự SAI KHÁC giữa hành vi thực tế (Actual Result) và hành vi mong đợi (Expected Result). Ví dụ cụ thể: Expected Result - Click Login button với valid credentials → User được redirect đến dashboard page, hiển thị welcome message; Actual Result - Click Login button → Không có gì xảy ra, vẫn ở trang Login, không có error message → Đây là Bug/Defect. Error (Lỗi) thường là SAI SÓT CỦA CON NGƯỜI (human mistake) dẫn đến bug trong phần mềm. Error có thể là: (1) Developer viết sai code logic (ví dụ: if age >= 18 thay vì if age > 18), (2) Developer hiểu sai requirements, (3) Copy-paste code sai, (4) Typo trong code. Ví dụ: Developer viết sai code 'if (age >= 18)' trong khi requirement là 'age phải lớn hơn 18' → Error này dẫn đến Bug (hệ thống chấp nhận age = 18 trong khi không nên). Failure là khi bug được người dùng phát hiện trong production environment. Tóm lại chuỗi: Error (human mistake - lỗi của con người) → Bug/Defect (trong code - lỗi trong phần mềm) → Failure (người dùng thấy - lỗi được phát hiện). Ví dụ đầy đủ: Developer viết sai code (Error) → Code có bug 'Login không hoạt động' (Bug) → User không login được trong production (Failure). Tester cần hiểu rõ để mô tả chính xác trong bug report: (1) Bug là gì - mô tả Actual Result vs Expected Result, (2) Error gây ra bug là gì (nếu biết) - ví dụ: 'Có thể do logic check age sai', (3) Failure impact như thế nào - ví dụ: 'User không thể login, không thể sử dụng ứng dụng'. Điều này giúp developer hiểu rõ và fix bug nhanh hơn.",
              "Cost of fixing bug tăng theo thời gian - Quy tắc vàng và cách áp dụng: Chi phí sửa bug TĂNG ĐÁNG KỂ theo thời gian phát hiện. Đây là một trong những quy tắc quan trọng nhất trong Software Testing. Cụ thể chi phí ở từng giai đoạn: (1) REQUIREMENT/DESIGN PHASE: Chi phí sửa rất thấp (chỉ cần sửa tài liệu, ví dụ: $1, mất 5-10 phút). Ví dụ: Phát hiện requirement mơ hồ 'User có thể login' → chỉ cần làm rõ trong tài liệu 'User có thể login với email hoặc username'. (2) DEVELOPMENT PHASE: Chi phí vừa phải (sửa code, ví dụ: $10, mất 30 phút - 2 giờ). Ví dụ: Phát hiện bug trong code đang viết → sửa code ngay, chưa có nhiều code phụ thuộc. (3) TESTING PHASE: Chi phí cao hơn (sửa code + test lại + có thể ảnh hưởng code khác, ví dụ: $100, mất 2-4 giờ). Ví dụ: Phát hiện bug sau khi code xong → phải sửa code, test lại, có thể phải test lại các phần liên quan. (4) PRODUCTION: Chi phí RẤT CAO (sửa code + test lại + hotfix + deploy + hỗ trợ khách hàng + ảnh hưởng uy tín + có thể mất khách hàng, ví dụ: $1000+, mất nhiều giờ hoặc nhiều ngày). Ví dụ thực tế: Bug 'Login không hoạt động' nếu phát hiện ở design phase → chỉ cần sửa design doc (5 phút, $1). Nếu phát hiện ở production → phải hotfix ngay, thông báo khách hàng, có thể phải rollback, ảnh hưởng hàng nghìn người dùng, mất uy tín công ty ($1000+, nhiều giờ). Đây là lý do tại sao cần TESTING SỚM và LIÊN TỤC (Early Testing, Shift Left Testing). Shift Left Testing có nghĩa là dịch chuyển testing sang bên trái (sớm hơn) trong SDLC - test ngay từ giai đoạn requirements và design, không đợi đến khi code xong mới test. Tester nên tham gia từ giai đoạn requirement/design để phát hiện lỗi sớm, giảm chi phí. Ví dụ: Tham gia review requirements meeting → phát hiện requirement mơ hồ → làm rõ ngay → tiết kiệm hàng trăm đô la so với phát hiện sau khi code xong.",
              "Tester không chỉ 'bấm bấm click click' - Kỹ năng thực sự cần có để trở thành Tester giỏi: Nhiều người nghĩ Tester chỉ cần 'bấm bấm click click' là xong, nhưng thực tế Tester cần nhiều kỹ năng quan trọng: (1) TƯ DUY PHÂN TÍCH: Phân tích requirements một cách kỹ lưỡng, tìm ra các điểm mơ hồ, thiếu sót, mâu thuẫn. Thiết kế test cases thông minh dựa trên các kỹ thuật test design (EP, BVA, Decision Table...). Nghĩ ra các scenarios khác nhau mà người khác không nghĩ đến. Đặt câu hỏi 'nếu... thì sao?', 'điều gì có thể sai?', 'edge case nào có thể xảy ra?'. Ví dụ: Khi test Login, không chỉ test valid/invalid credentials, mà còn nghĩ đến: 'Nếu user bấm Login 2 lần liên tiếp thì sao?', 'Nếu user copy-paste password thì sao?', 'Nếu network bị mất trong lúc login thì sao?'. (2) QUAN SÁT TỈ MỈ: Phát hiện những lỗi nhỏ mà người khác bỏ qua như UI alignment (căn lề), typo (lỗi chính tả), màu sắc không đúng, spacing không đều, font size không nhất quán, button không align, text bị cắt, v.v. Tester giỏi có 'con mắt tinh đời' để phát hiện những chi tiết nhỏ này. (3) GÓC NHÌN NGƯỜI DÙNG: Hiểu người dùng sẽ dùng sản phẩm như thế nào, họ sẽ gặp khó khăn gì, họ mong đợi gì. Test như một người dùng thực sự, không chỉ test theo requirements. Ví dụ: Requirements nói 'User có thể search', nhưng nếu UI không rõ ràng, user không biết cách search → đây là vấn đề về usability. (4) GIAO TIẾP RÕ RÀNG: Viết bug report dễ hiểu, rõ ràng, developer đọc là hiểu ngay và reproduce được. Trao đổi với Dev/PO một cách chuyên nghiệp, không chỉ trích, tập trung vào vấn đề. Trình bày kết quả test cho stakeholders một cách dễ hiểu, có số liệu cụ thể. (5) TỔ CHỨC VÀ QUẢN LÝ: Quản lý test cases một cách có hệ thống, theo dõi tiến độ test execution, ưu tiên test cases theo mức độ quan trọng, quản lý thời gian hiệu quả. (6) HỌC HỎI LIÊN TỤC: Cập nhật kiến thức về công nghệ mới, tools mới (Jira, TestRail, Postman...), best practices, xu hướng testing mới. Tester giỏi là người có tư duy phản biện, không chấp nhận mọi thứ 'như vậy là được', luôn đặt câu hỏi và tìm cách cải thiện."
            ]
          },
          afternoon: {
            title: "Chiều (2h): Thực hành",
            exercises: [{
              title: "BÀI TẬP: Phân tích Calculator - Tìm hiểu Testing từ thực tế",
              duration: "2h",
              tasks: [
                "BƯỚC 1 - Phân tích yêu cầu của Calculator app một cách chi tiết: (1) Tìm một Calculator app để test (có thể là Calculator trên Windows, Mac, hoặc Calculator online trên browser như calculator.net, hoặc Calculator app trên điện thoại). (2) Xác định những chức năng cơ bản mà một ứng dụng máy tính đơn giản cần có: Phép toán số học cơ bản (cộng +, trừ -, nhân ×, chia ÷), Các phép toán đặc biệt (phần trăm %, đổi dấu +/-), Các nút điều khiển (AC/Clear để xóa tất cả, C/CE để xóa số vừa nhập, Delete/Backspace để xóa từng ký tự), Hiển thị kết quả (màn hình hiển thị số nhập và kết quả), Xử lý số nhiều chữ số (nhập số có nhiều chữ số), Xử lý số thập phân (nhập và tính với số thập phân như 3.14), Xử lý số âm (nhập và tính với số âm). (3) Với mỗi chức năng, ghi lại hành vi mong đợi một cách chi tiết. Ví dụ: 'Chức năng Cộng: Khi nhập số đầu tiên (ví dụ: 5), sau đó nhấn nút +, sau đó nhập số thứ hai (ví dụ: 3), sau đó nhấn nút =, kết quả mong đợi là 8 hiển thị trên màn hình. Nếu nhập 5 + 3 + 2 và nhấn =, kết quả mong đợi là 10.' (4) Tạo một document 'Requirements Analysis' với ít nhất 10-15 chức năng, mỗi chức năng có mô tả hành vi mong đợi rõ ràng. Document này sẽ là cơ sở để viết test cases sau này.",
                "BƯỚC 2 - Lên danh sách ý tưởng test (test scenarios) cho Calculator một cách toàn diện: Mục tiêu là thấy được Tester không chỉ test 1–2 case đơn giản mà phải nghĩ đến nhiều trường hợp khác nhau. Liệt kê ít nhất 20-25 test scenarios bao gồm: (1) NORMAL CASES (Happy Path): Test các phép toán cơ bản với số nguyên dương (ví dụ: 2 + 3 = 5, 10 - 4 = 6, 5 × 3 = 15, 20 ÷ 4 = 5), Test với số thập phân (ví dụ: 3.5 + 2.7 = 6.2), Test với số âm (ví dụ: -5 + 3 = -2), Test nhiều phép toán liên tiếp (ví dụ: 5 + 3 - 2 × 2 = ?). (2) BOUNDARY CASES: Test với số rất lớn (ví dụ: 999999999 + 1), Test với số rất nhỏ (ví dụ: 0.000001), Test với số có nhiều chữ số thập phân (ví dụ: 3.141592653589793), Test với số 0 (ví dụ: 0 + 5, 5 - 0, 0 × 5, 5 ÷ 0). (3) ERROR CASES: Test chia cho 0 (ví dụ: 10 ÷ 0 → mong đợi hiển thị error message như 'Cannot divide by zero' hoặc 'Error'), Test nhập ký tự không hợp lệ (nếu có thể), Test bấm = mà chưa nhập số đầy đủ. (4) UI/UX CASES: Test bấm liên tục một nút nhiều lần (ví dụ: bấm + 5 lần liên tiếp), Test xóa kết quả rồi tính lại (ví dụ: tính 5 + 3 = 8, sau đó bấm AC, rồi tính lại 2 + 2), Test nhập số rất dài xem màn hình hiển thị như thế nào, Test các nút có hoạt động đúng không (mỗi nút phải có phản hồi khi click). (5) EDGE CASES: Test copy-paste số vào Calculator (nếu có thể), Test nhập số có khoảng trắng ở đầu/cuối (nếu có thể), Test chuyển đổi giữa các phép toán (ví dụ: nhập 5 +, sau đó đổi thành -, rồi nhập 3). Ghi lại tất cả scenarios vào một document 'Test Scenarios' với format: Scenario ID, Scenario Description, Test Data (số cụ thể sẽ test), Expected Result.",
                "BƯỚC 3 - Thực thi test trên Calculator app một cách có hệ thống: (1) Chuẩn bị: Mở Calculator app, chuẩn bị giấy bút hoặc document để ghi lại kết quả. (2) Thực thi từng scenario: Dựa trên danh sách scenarios đã liệt kê ở Bước 2, lần lượt thực hiện từng scenario một cách cẩn thận. Với mỗi scenario: (a) Thực hiện các bước cụ thể (ví dụ: 'Nhấn nút 5', 'Nhấn nút +', 'Nhấn nút 3', 'Nhấn nút ='), (b) Quan sát kỹ UI: Màn hình hiển thị gì? Số có hiển thị đúng không? Font chữ, màu sắc, căn lề có đúng không? Các nút có highlight khi click không? (c) Quan sát kỹ giá trị input: Số nhập vào có hiển thị đúng không? Có bị mất số nào không? (d) Quan sát kỹ kết quả: Kết quả tính toán có đúng không? Có hiển thị đúng format không? (3) Ghi lại kết quả: Với mỗi scenario, ghi lại: (a) Actual Result - kết quả thực tế là gì (ví dụ: 'Màn hình hiển thị 8', hoặc 'Màn hình hiển thị Error'), (b) So sánh với Expected Result - có khớp không? (c) Ghi lại những điểm bất thường, kể cả khi chưa chắc đó là bug hay chỉ là yêu cầu chưa rõ (ví dụ: 'Khi nhập số rất dài, màn hình hiển thị số dạng scientific notation (1.23e+10) - không chắc đây là bug hay feature'). (4) Chụp screenshot: Chụp screenshot các trường hợp có vấn đề để làm bằng chứng cho bug report sau này.",
                "BƯỚC 4 - Tìm và phân loại ít nhất 3-5 bug một cách chi tiết: (1) Xác định bug: Với mỗi hành vi không đúng kỳ vọng (Actual Result ≠ Expected Result), xác định rõ đó có phải là bug không. Lưu ý: Không phải mọi thứ khác với mong đợi đều là bug - có thể là yêu cầu chưa rõ hoặc design decision. (2) Phân loại bug theo loại: (a) BUG VỀ LOGIC TÍNH TOÁN: Kết quả tính toán sai (ví dụ: 5 + 3 = 7 thay vì 8), Xử lý số thập phân sai, Xử lý số âm sai. (b) BUG VỀ UI/UX: Hiển thị sai (ví dụ: số bị cắt, không hiển thị đầy đủ), Căn lề sai (ví dụ: số không căn giữa), Font chữ, màu sắc không đúng, Spacing không đều, Button không hoạt động hoặc hoạt động sai. (c) BUG VỀ XỬ LÝ LỖI: Không chặn chia cho 0 (ví dụ: 10 ÷ 0 không hiển thị error message), Không hiện thông báo phù hợp khi có lỗi, Xử lý input không hợp lệ sai. (d) BUG VỀ FUNCTIONALITY: Chức năng không hoạt động (ví dụ: nút AC không xóa được), Chức năng hoạt động sai (ví dụ: nút +/- không đổi dấu đúng). (3) Đánh giá mức độ nghiêm trọng (Severity) cho mỗi bug: Critical (ứng dụng không thể sử dụng được), High (chức năng chính bị ảnh hưởng), Medium (chức năng phụ bị ảnh hưởng), Low (vấn đề nhỏ về UI). Mục tiêu: Hiểu khái niệm bug/defect qua ví dụ cụ thể, biết cách phân loại bug, biết cách đánh giá mức độ nghiêm trọng.",
                "BƯỚC 5 - Viết bug report chi tiết cho từng bug theo format chuẩn: Mỗi bug cần có đầy đủ các phần sau (tạo một template bug report trong Word/Google Docs hoặc Excel): (1) BUG ID: Mã định danh duy nhất (ví dụ: BUG_CALC_001). (2) TITLE/SUMMARY: Ngắn gọn, rõ vấn đề, dễ hiểu (ví dụ: 'Calculator displays incorrect result for addition: 5 + 3 = 7 instead of 8'). Title phải mô tả được vấn đề chính trong 1 câu. (3) ENVIRONMENT: Môi trường test (ví dụ: 'Windows 10 Calculator App, Version 10.0.19041.789' hoặc 'Chrome Browser Version 120.0, Calculator.net website'). Ghi rõ OS, Browser, Version, Device (nếu mobile). (4) PRECONDITIONS: Trạng thái ban đầu cần có trước khi reproduce bug (ví dụ: 'Calculator app is opened and ready to use', hoặc 'User is on Calculator homepage'). (5) STEPS TO REPRODUCE: Các bước cụ thể, đánh số 1, 2, 3,... để developer có thể reproduce được bug. Phải rất chi tiết và cụ thể. Ví dụ: 'Step 1: Open Calculator app. Step 2: Click on number button '5'. Step 3: Click on '+' button. Step 4: Click on number button '3'. Step 5: Click on '=' button. Step 6: Observe the result displayed on screen.' Mỗi bước phải rõ ràng, không mơ hồ. (6) EXPECTED RESULT: Mô tả rõ ràng kết quả mong đợi (ví dụ: 'The screen should display the result '8' after clicking the '=' button'). Phải cụ thể, không mơ hồ như 'should work correctly'. (7) ACTUAL RESULT: Mô tả chính xác những gì thấy (ví dụ: 'The screen displays '7' instead of '8' after clicking the '=' button'). Phải mô tả chính xác, không suy đoán. (8) ATTACHMENT: Screenshot hoặc video nếu có. Screenshot phải rõ ràng, có thể thấy được vấn đề. Nếu có video, ghi lại toàn bộ quá trình reproduce bug. (9) SEVERITY: Critical/High/Medium/Low. (10) PRIORITY: P1/P2/P3 hoặc High/Medium/Low. (11) REPRODUCIBILITY: Always/Sometimes/Rarely. Viết ít nhất 3-5 bug reports chi tiết, mỗi bug report phải đầy đủ các phần trên.",
                "BƯỚC 6 - Tự review lại bug report để đảm bảo chất lượng: (1) Đọc lại từng bug report một cách cẩn thận, đặt mình vào vị trí của developer chưa từng dùng Calculator này. (2) Kiểm tra các điểm sau: (a) Title có rõ ràng, dễ hiểu không? Developer đọc title có hiểu ngay vấn đề là gì không? (b) Steps to Reproduce có đủ chi tiết không? Developer có thể làm theo từng bước và reproduce được bug không? Nếu thiếu thông tin, bổ sung thêm. (c) Expected Result và Actual Result có rõ ràng, cụ thể không? Có số liệu cụ thể không? (d) Có lỗi chính tả, ngữ pháp không? Câu văn có dễ hiểu không? (e) Screenshot/video có rõ ràng, có thể thấy được vấn đề không? (3) Chọn 1 bug report và cải thiện nó: Đọc lại bug report đó, tìm các điểm có thể cải thiện (ví dụ: Steps có thể chi tiết hơn, Expected Result có thể cụ thể hơn, có thể thêm screenshot), sau đó chỉnh sửa lại để trở nên ngắn gọn, rõ ràng, dễ hiểu hơn. (4) Nhờ một người khác (bạn bè, người thân) đọc bug report và thử reproduce bug. Nếu họ không thể reproduce được, đó là dấu hiệu bug report chưa đủ chi tiết → cần chỉnh sửa lại. Mục tiêu: Bug report phải đủ tốt để developer đọc là hiểu ngay và reproduce được mà không cần hỏi thêm. Đây là kỹ năng cực quan trọng của Manual Tester - viết bug report rõ ràng, chi tiết, dễ hiểu."
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
              "SDLC overview - Vòng đời phát triển phần mềm và tầm quan trọng: SDLC (Software Development Life Cycle) là một quy trình có hệ thống để phát triển phần mềm từ ý tưởng ban đầu đến khi release và maintain. SDLC cung cấp một framework rõ ràng để đảm bảo phần mềm được phát triển đúng cách, đúng thời gian, và đúng ngân sách. CÁC GIAI ĐOẠN CHÍNH CỦA SDLC: (1) REQUIREMENTS - Thu thập và phân tích yêu cầu từ stakeholders (khách hàng, end-users, business analysts). Xác định phần mềm cần làm gì, cho ai, tại sao. Deliverable: Requirements Document, User Stories. (2) DESIGN - Thiết kế kiến trúc hệ thống (system architecture), thiết kế database, thiết kế UI/UX, thiết kế API. Deliverable: Design Documents, UI Mockups, Database Schema. (3) DEVELOPMENT - Developer viết code theo design. Deliverable: Source Code, Working Software. (4) TESTING - Tester test phần mềm để tìm bugs và đảm bảo chất lượng. Deliverable: Test Results, Bug Reports. (5) DEPLOYMENT - Deploy phần mềm lên production environment để người dùng sử dụng. Deliverable: Deployed Application. (6) MAINTENANCE - Bảo trì, sửa lỗi, cải thiện phần mềm sau khi release. Deliverable: Bug Fixes, Updates. TẠI SAO TESTER CẦN HIỂU SDLC: (1) Biết mình đang ở giai đoạn nào - để làm việc phù hợp với team, (2) Hiểu vai trò của mình trong từng giai đoạn - khi nào nên làm gì, (3) Biết khi nào cần chuẩn bị gì - ví dụ: ở giai đoạn Design, cần chuẩn bị test plan, (4) Giao tiếp tốt hơn với team - hiểu ngôn ngữ và quy trình của team, (5) Đóng góp tốt hơn - biết cách đóng góp vào từng giai đoạn. Ví dụ: Ở giai đoạn Requirements, Tester nên tham gia review requirements để phát hiện lỗi sớm. Ở giai đoạn Design, Tester nên review design và bắt đầu thiết kế test plan. Ở giai đoạn Development, Tester nên test từng module khi developer hoàn thành. Ở giai đoạn Testing, Tester thực thi test cases đầy đủ. Ở giai đoạn Deployment, Tester thực hiện smoke test. Ở giai đoạn Maintenance, Tester test các bug fixes.",
              "Waterfall Model - Quy trình tuần tự cổ điển và vai trò của Tester: Waterfall Model là mô hình SDLC cổ điển nhất, quy trình TUẦN TỰ và TUYẾN TÍNH. Đặc điểm: Mỗi giai đoạn phải HOÀN THÀNH 100% trước khi chuyển sang giai đoạn tiếp theo, không thể quay lại giai đoạn trước một cách dễ dàng. Các giai đoạn chạy tuần tự: Requirements → Design → Development → Testing → Deployment → Maintenance. ƯU ĐIỂM: (1) Rõ ràng, dễ hiểu - mỗi giai đoạn có mục tiêu và deliverable rõ ràng, (2) Dễ quản lý - biết rõ đang ở giai đoạn nào, tiến độ ra sao, (3) Tài liệu đầy đủ - mỗi giai đoạn có tài liệu chi tiết, (4) Phù hợp với dự án có yêu cầu rõ ràng, ít thay đổi (ví dụ: dự án government, dự án có contract rõ ràng). NHƯỢC ĐIỂM: (1) Khó thay đổi yêu cầu - nếu requirements thay đổi ở giai đoạn sau (ví dụ: ở giai đoạn Testing), phải quay lại từ đầu, tốn kém, (2) Testing đến muộn - chỉ test ở giai đoạn Testing, sau khi Development hoàn thành, phát hiện bug muộn → tốn kém để sửa, (3) Không phù hợp với dự án có yêu cầu thay đổi thường xuyên, (4) Không có feedback sớm từ người dùng. VAI TRÒ CỦA TESTER TRONG WATERFALL: (1) Tham gia từ giai đoạn Design - review design documents để phát hiện lỗi sớm (ví dụ: design không rõ ràng, thiếu thông tin), đặt câu hỏi để làm rõ, (2) Chuẩn bị test plan và test cases dựa trên requirements và design - không đợi đến khi code xong, (3) Chính thức test ở giai đoạn Testing - sau khi Development hoàn thành, thực thi test cases, tìm bugs, báo cáo, (4) Verify fixes - retest sau khi developer sửa bug, (5) Tham gia Deployment - smoke test sau khi deploy. Trong Waterfall, Tester thường chỉ tham gia chính thức ở giai đoạn Testing, dễ dẫn đến phát hiện bug muộn và tốn kém để sửa vì đã code xong rồi mới test. Do đó, Tester nên tham gia sớm hơn (từ giai đoạn Design) để phát hiện lỗi sớm.",
              "V-Model - Mô hình chữ V với test song song và phát hiện lỗi sớm: V-Model là mô hình SDLC cải tiến từ Waterfall, có hình dạng chữ V. Đặc điểm QUAN TRỌNG: Mỗi giai đoạn development có một giai đoạn test TƯƠNG ỨNG được thiết kế SONG SONG. Cụ thể các cặp tương ứng: (1) Requirements ↔ Acceptance Testing (UAT) - Test cases cho UAT được thiết kế dựa trên requirements. Khi requirements được viết, tester bắt đầu thiết kế test cases cho UAT. (2) System Design ↔ System Testing - Test cases cho System Testing được thiết kế dựa trên system design. Khi system design được hoàn thành, tester thiết kế test cases cho System Testing. (3) Architecture Design ↔ Integration Testing - Test cases cho Integration Testing được thiết kế dựa trên architecture design. Khi architecture design được hoàn thành, tester thiết kế test cases cho Integration Testing. (4) Module Design ↔ Unit Testing - Test cases cho Unit Testing được thiết kế dựa trên module design. Khi module design được hoàn thành, developer thiết kế test cases cho Unit Testing. ƯU ĐIỂM CỦA V-MODEL: (1) Test được thiết kế SỚM - ngay từ giai đoạn design, không đợi đến khi code xong, (2) Phát hiện lỗi sớm hơn - test cases được chuẩn bị sẵn, test ngay khi code xong, không mất thời gian thiết kế test cases, (3) Test có hệ thống - mỗi cấp độ test tương ứng với một cấp độ design, đảm bảo coverage tốt, (4) Giảm chi phí - phát hiện lỗi sớm hơn Waterfall. VAI TRÒ CỦA TESTER TRONG V-MODEL: (1) Tham gia từ giai đoạn Requirements - thiết kế test cases cho UAT dựa trên requirements, (2) Tham gia từ giai đoạn Design - thiết kế test cases cho System Testing và Integration Testing dựa trên design, (3) Test song song với development - test ngay khi từng phần code xong, không đợi đến cuối, (4) Phát hiện lỗi sớm hơn so với Waterfall - vì test cases đã được chuẩn bị sẵn. V-Model giúp phát hiện lỗi sớm hơn Waterfall vì test được thiết kế và chuẩn bị từ sớm, không đợi đến khi code xong mới bắt đầu thiết kế test cases.",
              "Agile/Scrum - Phương pháp linh hoạt và vai trò của Tester trong Agile: Agile là phương pháp phát triển phần mềm LINH HOẠT, tập trung vào việc phản ứng nhanh với thay đổi, giao tiếp thường xuyên với stakeholders, và deliver phần mềm có thể sử dụng được một cách nhanh chóng. Scrum là framework phổ biến nhất của Agile. Đặc điểm của Agile/Scrum: (1) Phát triển theo SPRINT ngắn (thường 2-4 tuần), mỗi sprint tạo ra một phần mềm có thể demo được (potentially shippable product increment), (2) Yêu cầu có thể thay đổi nhanh chóng - không cần đợi đến cuối dự án, có thể thay đổi trong sprint planning, (3) Giao tiếp thường xuyên - team gặp nhau hàng ngày, trao đổi thường xuyên, (4) Tập trung vào collaboration - làm việc cùng nhau, không làm việc độc lập. CÁC CEREMONIES TRONG SCRUM: (1) Sprint Planning - Lập kế hoạch cho sprint (thường 2-4 tuần), chọn user stories từ Product Backlog để làm trong sprint này, estimate effort (story points hoặc hours), chia tasks. Tester tham gia để hiểu requirements, estimate test effort. (2) Daily Standup - Họp hàng ngày 15 phút, mỗi người báo cáo: đã làm gì hôm qua, sẽ làm gì hôm nay, có blocker gì không. Tester báo cáo tiến độ test, bugs tìm được, blockers. (3) Sprint Review - Demo kết quả cho stakeholders, nhận feedback. Tester có thể demo test results, bugs đã tìm được. (4) Retrospective - Cải thiện quy trình, tìm cách làm tốt hơn. Tester đóng góp ý kiến về quy trình testing. VAI TRÒ CỦA TESTER TRONG AGILE: (1) Tham gia từ ĐẦU SPRINT - không đợi đến cuối sprint mới test, tham gia Sprint Planning để hiểu requirements, (2) Test SONG SONG với development - developer code đến đâu, tester test đến đó, không đợi đến cuối sprint, (3) Giao tiếp thường xuyên với Dev/PO - trao đổi về requirements (làm rõ nếu mơ hồ), bugs (giải thích bug, verify fix), (4) Tham gia tất cả các ceremonies - Sprint Planning, Daily Standup, Sprint Review, Retrospective, (5) Test liên tục - không chỉ test một lần ở cuối sprint, mà test liên tục trong suốt sprint. KHÁC BIỆT CHÍNH so với Waterfall: Thay vì test một lần lớn ở cuối dự án (như Waterfall), Agile test LIÊN TỤC trong mỗi sprint. Ưu điểm: Phản ứng nhanh với thay đổi, phát hiện bug sớm (test ngay khi code xong), giao tiếp tốt (gặp nhau hàng ngày), deliver nhanh (mỗi sprint có thể demo). Thách thức: Cần tốc độ cao (phải test nhanh), khả năng thích ứng nhanh (requirements có thể thay đổi), làm việc dưới áp lực thời gian (sprint ngắn)."
            ],
            concepts: [
              "SDLC là gì? → SDLC (Software Development Life Cycle) là vòng đời phát triển phần mềm, bao gồm các giai đoạn từ khi có ý tưởng ban đầu đến khi sản phẩm được release và maintain. SDLC cung cấp một framework có hệ thống để phát triển phần mềm chất lượng cao. Các giai đoạn chính của SDLC: (1) REQUIREMENTS - Thu thập và phân tích yêu cầu từ stakeholders, (2) DESIGN - Thiết kế kiến trúc và chi tiết của hệ thống, (3) DEVELOPMENT - Viết code theo design, (4) TESTING - Test phần mềm để tìm bugs và đảm bảo chất lượng, (5) DEPLOYMENT - Deploy phần mềm lên production environment, (6) MAINTENANCE - Bảo trì, sửa lỗi, và cải thiện phần mềm sau khi release. Mỗi giai đoạn có đầu vào (inputs), đầu ra (outputs), và mục tiêu riêng. Testing là một phần QUAN TRỌNG trong SDLC, KHÔNG phải là bước cuối cùng mà nên được TÍCH HỢP vào TẤT CẢ các giai đoạn để phát hiện lỗi sớm và giảm chi phí. Ví dụ: Tester tham gia review requirements ở giai đoạn Requirements, review design ở giai đoạn Design, test từng module ở giai đoạn Development, test toàn bộ hệ thống ở giai đoạn Testing, smoke test ở giai đoạn Deployment, và regression test ở giai đoạn Maintenance.",
              "Waterfall Model - Quy trình tuần tự, tuyến tính: Waterfall Model là mô hình SDLC cổ điển, quy trình TUẦN TỰ và TUYẾN TÍNH. Đặc điểm: (1) Giai đoạn sau chỉ bắt đầu khi giai đoạn trước HOÀN THÀNH 100%, (2) Không thể quay lại giai đoạn trước một cách dễ dàng, (3) Các giai đoạn chạy tuần tự: Requirements → Design → Development → Testing → Deployment → Maintenance. ƯU ĐIỂM: (1) Rõ ràng, dễ hiểu - mỗi giai đoạn có mục tiêu rõ ràng, (2) Dễ quản lý - biết rõ đang ở giai đoạn nào, (3) Tài liệu đầy đủ - mỗi giai đoạn có deliverable rõ ràng, (4) Phù hợp với dự án có yêu cầu rõ ràng, ít thay đổi. NHƯỢC ĐIỂM: (1) Khó thay đổi yêu cầu - nếu requirements thay đổi ở giai đoạn sau, phải quay lại từ đầu, (2) Testing đến muộn - chỉ test ở giai đoạn Testing, phát hiện bug muộn → tốn kém để sửa, (3) Không phù hợp với dự án có yêu cầu thay đổi thường xuyên. VAI TRÒ CỦA TESTER TRONG WATERFALL: (1) Tham gia từ giai đoạn Design - review design documents để phát hiện lỗi sớm, (2) Chính thức test ở giai đoạn Testing - sau khi Development hoàn thành, (3) Tạo test plan và test cases dựa trên requirements và design, (4) Thực thi test, tìm bugs, báo cáo, (5) Verify fixes sau khi developer sửa. Trong Waterfall, Tester thường chỉ tham gia chính thức ở giai đoạn Testing, dễ dẫn đến phát hiện bug muộn và tốn kém để sửa (vì đã code xong rồi mới test).",
              "V-Model - Mô hình chữ V với test song song: V-Model là mô hình SDLC cải tiến từ Waterfall, có hình dạng chữ V. Đặc điểm quan trọng: Mỗi giai đoạn development có một giai đoạn test TƯƠNG ỨNG được thiết kế SONG SONG. Cụ thể: (1) Requirements ↔ Acceptance Testing (UAT) - Test cases cho UAT được thiết kế dựa trên requirements, (2) System Design ↔ System Testing - Test cases cho System Testing được thiết kế dựa trên system design, (3) Architecture Design ↔ Integration Testing - Test cases cho Integration Testing được thiết kế dựa trên architecture design, (4) Module Design ↔ Unit Testing - Test cases cho Unit Testing được thiết kế dựa trên module design. ƯU ĐIỂM: (1) Test được thiết kế SỚM - ngay từ giai đoạn design, không đợi đến khi code xong, (2) Phát hiện lỗi sớm hơn - test cases được chuẩn bị sẵn, test ngay khi code xong, (3) Test có hệ thống - mỗi cấp độ test tương ứng với một cấp độ design. VAI TRÒ CỦA TESTER TRONG V-MODEL: (1) Tham gia từ giai đoạn Requirements - thiết kế test cases cho UAT, (2) Tham gia từ giai đoạn Design - thiết kế test cases cho System Testing và Integration Testing, (3) Test song song với development - test ngay khi từng phần code xong, (4) Phát hiện lỗi sớm hơn so với Waterfall. V-Model giúp phát hiện lỗi sớm hơn Waterfall vì test được thiết kế và chuẩn bị từ sớm.",
              "Agile/Scrum - Phương pháp linh hoạt, phát triển theo sprint: Agile là phương pháp phát triển phần mềm LINH HOẠT, tập trung vào việc phản ứng nhanh với thay đổi. Scrum là framework phổ biến nhất của Agile. Đặc điểm: (1) Phát triển theo SPRINT ngắn (thường 2-4 tuần), mỗi sprint tạo ra một phần mềm có thể demo được, (2) Yêu cầu có thể thay đổi nhanh chóng - không cần đợi đến cuối dự án, (3) Giao tiếp thường xuyên - Daily Standup (họp hàng ngày 15 phút), Sprint Planning (lập kế hoạch cho sprint), Sprint Review (demo kết quả), Retrospective (cải thiện quy trình). CÁC CEREMONIES TRONG SCRUM: (1) Sprint Planning - Lập kế hoạch cho sprint, chọn user stories để làm, estimate effort, (2) Daily Standup - Họp hàng ngày 15 phút, mỗi người báo cáo: đã làm gì hôm qua, sẽ làm gì hôm nay, có blocker gì không, (3) Sprint Review - Demo kết quả cho stakeholders, nhận feedback, (4) Retrospective - Cải thiện quy trình, tìm cách làm tốt hơn. VAI TRÒ CỦA TESTER TRONG AGILE: (1) Tham gia từ ĐẦU SPRINT - không đợi đến cuối sprint mới test, (2) Test SONG SONG với development - developer code đến đâu, tester test đến đó, (3) Giao tiếp thường xuyên với Dev/PO - trao đổi về requirements, bugs, (4) Tham gia tất cả các ceremonies - Sprint Planning, Daily Standup, Sprint Review, Retrospective, (5) Test liên tục - không chỉ test một lần ở cuối, mà test liên tục trong suốt sprint. KHÁC BIỆT CHÍNH so với Waterfall: Thay vì test một lần lớn ở cuối dự án, Agile test LIÊN TỤC trong mỗi sprint. Ưu điểm: Phản ứng nhanh với thay đổi, phát hiện bug sớm, giao tiếp tốt. Thách thức: Cần tốc độ cao, khả năng thích ứng nhanh, làm việc dưới áp lực thời gian.",
              "STLC (Software Testing Life Cycle) - Quy trình testing riêng: STLC là quy trình testing riêng, mô tả các giai đoạn của testing từ đầu đến cuối. STLC chạy SONG SONG hoặc SAU SDLC, tùy theo mô hình phát triển (Waterfall, V-Model, Agile). CÁC GIAI ĐOẠN CỦA STLC: (1) REQUIREMENT ANALYSIS - Phân tích requirements, xác định testable requirements, xác định test scope, xác định risks. Deliverable: Requirement Traceability Matrix (RTM), Test Scope document. (2) TEST PLANNING - Tạo test plan, xác định test strategy, estimate effort, xác định resources cần thiết, xác định test environment. Deliverable: Test Plan document. (3) TEST CASE DEVELOPMENT - Viết test cases dựa trên requirements, áp dụng các kỹ thuật test design (EP, BVA, Decision Table...), review test cases. Deliverable: Test Cases document. (4) TEST ENVIRONMENT SETUP - Chuẩn bị test environment (server, database, test data, tools), verify environment sẵn sàng. Deliverable: Test Environment ready. (5) TEST EXECUTION - Thực thi test cases, ghi nhận kết quả (Pass/Fail/Blocked), tìm bugs, viết bug reports, retest sau khi fix. Deliverable: Test Results, Bug Reports. (6) TEST CYCLE CLOSURE - Tổng hợp kết quả test, tạo test summary report, đánh giá test coverage, lessons learned. Deliverable: Test Summary Report. STLC trong Waterfall: Chạy sau Development phase. STLC trong V-Model: Chạy song song với Development, test cases được thiết kế sớm. STLC trong Agile: Chạy song song với Development trong mỗi sprint, test liên tục."
            ]
          },
          afternoon: {
            title: "Chiều (2h): STLC",
            exercises: [{
              title: "BÀI TẬP: Tạo Test Plan chi tiết - Thực hành từng bước",
              duration: "2h",
              tasks: [
                "BƯỚC 1 - Chọn feature và phân tích cơ bản: (1) CHỌN MỘT FEATURE ĐƠN GIẢN để làm bài tập: Có thể chọn một trong các feature sau: Login feature (đăng nhập), Registration feature (đăng ký), Search feature (tìm kiếm), hoặc bất kỳ feature nào của một website/app mà bạn quen thuộc (ví dụ: Gmail, Facebook, Amazon, hoặc một website demo). Nếu không có, có thể giả lập dựa trên requirements. (2) GHI LẠI THÔNG TIN CƠ BẢN: Tạo một document 'Test Plan - [Tên Feature]' và ghi lại: (a) Tên feature (ví dụ: 'Login Feature'), (b) Mô tả ngắn gọn chức năng chính của feature đó (3-5 dòng, ví dụ: 'Login feature cho phép người dùng đăng nhập vào hệ thống bằng cách nhập username/email và password. Sau khi đăng nhập thành công, người dùng được redirect đến trang dashboard. Feature cũng có chức năng Remember Me để lưu session và Forgot Password để reset password.'), (c) URL hoặc vị trí của feature (ví dụ: 'https://example.com/login'), (d) Ngày tạo Test Plan, (e) Tác giả (tên bạn). Document này sẽ là cơ sở để viết Test Plan.",
                "BƯỚC 2 - Phân tích yêu cầu (Requirement Analysis) một cách chi tiết: (1) ĐỌC KỸ HOẶC QUAN SÁT FEATURE: Nếu có tài liệu requirements, đọc kỹ. Nếu không có, quan sát feature trên website/app để hiểu chức năng. (2) LIỆT KÊ CÁC YÊU CẦU CHỨC NĂNG (Functional Requirements): Với mỗi yêu cầu, ghi lại một cách chi tiết. Ví dụ cho Login feature: (a) 'User có thể đăng nhập bằng username hoặc email' - Ghi rõ: Username/Email field phải có, có thể nhập username hoặc email, validation format email nếu nhập email, (b) 'User phải nhập password' - Ghi rõ: Password field phải có, password được ẩn (dấu * hoặc •), có thể show/hide password, (c) 'Login button phải hoạt động' - Ghi rõ: Click Login button sẽ gửi request, có loading indicator khi đang xử lý, (d) 'Validation errors phải hiển thị' - Ghi rõ: Nếu username/email để trống → error 'Username/Email is required', nếu password để trống → error 'Password is required', nếu credentials sai → error 'Invalid username or password', (e) 'Remember Me checkbox' - Ghi rõ: Có checkbox Remember Me, nếu check → lưu session, lần sau vẫn login được, (f) 'Forgot Password link' - Ghi rõ: Có link Forgot Password, click → redirect to forgot password page, (g) 'Redirect sau khi login thành công' - Ghi rõ: Login thành công → redirect to dashboard page, hiển thị welcome message. (3) LIỆT KÊ CÁC YÊU CẦU PHI CHỨC NĂNG (Non-functional Requirements) nếu có: Ví dụ: (a) 'Performance' - Login phải hoàn thành trong vòng 2 giây, (b) 'Security' - Password phải được mã hóa, không hiển thị plain text, (c) 'Usability' - UI phải rõ ràng, dễ sử dụng, (d) 'Compatibility' - Phải hoạt động trên Chrome, Firefox, Safari. (4) GHI LẠI TẤT CẢ VÀO DOCUMENT: Tạo section 'Requirements Analysis' trong Test Plan document, liệt kê tất cả requirements đã phân tích. Mục tiêu: Có ít nhất 10-15 requirements (functional + non-functional).",
                "BƯỚC 3 - Viết Test Plan document đầy đủ theo template chuẩn: Tạo một file Word/Google Docs với tên 'Test Plan - [Tên Feature]' và viết đầy đủ các phần sau (mỗi phần phải chi tiết, không mơ hồ): (1) TEST PLAN ID VÀ TÊN: Test Plan ID: 'TP_LOGIN_001' (hoặc format khác), Test Plan Name: 'Test Plan for Login Feature', Version: '1.0', Date: [ngày tạo], Author: [tên bạn]. (2) INTRODUCTION: Giới thiệu feature một cách chi tiết (2-3 đoạn): Feature này là gì, làm gì, cho ai, tại sao cần test. Mục đích của Test Plan này là gì (ví dụ: 'Mục đích của Test Plan này là đảm bảo Login feature hoạt động đúng theo requirements, không có bugs nghiêm trọng trước khi release.'). (3) TEST SCOPE: Phạm vi test - test gì, KHÔNG test gì. Phải rất cụ thể: (a) IN SCOPE (sẽ test): Login với valid/invalid credentials, Validation errors, Remember Me functionality, Forgot Password link, Redirect sau khi login, UI elements (buttons, fields, labels), Error messages, (b) OUT OF SCOPE (không test): Performance testing chi tiết (chỉ test cơ bản), Security testing chi tiết (chỉ test cơ bản), Testing trên mobile app (chỉ test web), Testing với nhiều browsers (chỉ test Chrome). (4) TEST OBJECTIVES: Mục tiêu test - phải cụ thể, đo lường được. Ví dụ: (a) 'Verify login thành công với valid credentials' - Expected: User được redirect to dashboard, (b) 'Verify validation errors hiển thị đúng' - Expected: Error messages rõ ràng, đúng vị trí, (c) 'Verify Remember Me hoạt động' - Expected: Session được lưu, lần sau vẫn login, (d) 'Verify UI elements hiển thị đúng' - Expected: Buttons, fields, labels đúng vị trí, đúng màu sắc, (e) 'Verify error handling' - Expected: Error messages rõ ràng khi có lỗi. (5) TEST STRATEGY: Cách tiếp cận test - phải chi tiết: (a) Testing approach: Manual Testing, (b) Types of testing sẽ thực hiện: Functional Testing (test chức năng Login), UI Testing (test UI elements), Negative Testing (test invalid inputs), Positive Testing (test valid inputs), (c) Test levels: System Testing (test toàn bộ Login feature), (d) Test techniques: Equivalence Partitioning, Boundary Value Analysis (sẽ học sau), (e) Test execution: Sẽ thực thi test cases một cách có hệ thống, ghi nhận kết quả, báo cáo bugs. (6) TEST ENVIRONMENT: Môi trường test - phải cụ thể: (a) Browser: Chrome Version 120.0 (hoặc version hiện tại), (b) OS: Windows 10 / macOS / Linux (ghi rõ OS bạn đang dùng), (c) Device: Desktop/Laptop (nếu test mobile thì ghi mobile), (d) Test URL: https://example.com/login (hoặc URL thực tế), (e) Test Data: Sẽ chuẩn bị test accounts (valid và invalid). (7) ENTRY CRITERIA (Điều kiện bắt đầu test): Phải rõ ràng: (a) Login feature đã được deploy lên test environment, (b) Test environment sẵn sàng, có thể truy cập được, (c) Test cases đã được viết và review xong, (d) Test data đã được chuẩn bị (test accounts), (e) Test environment đã được setup (browser, tools). (8) EXIT CRITERIA (Điều kiện kết thúc test): Phải rõ ràng: (a) Tất cả test cases đã được thực thi (100%), (b) Tất cả bugs Critical và High đã được fix và verify, (c) Test coverage đạt ít nhất 80% (tất cả requirements đều có test cases), (d) Test Summary Report đã được tạo, (e) Approval từ QA Lead/Manager. (9) SCHEDULE (Thời gian ước tính): Có thể giả lập: (a) Test Planning: 1 ngày, (b) Test Case Development: 2 ngày, (c) Test Execution: 3 ngày, (d) Bug Fixing & Retest: 2 ngày, (e) Test Reporting: 1 ngày, (f) Total: 9 ngày. (10) RISKS & MITIGATION (Rủi ro và cách giảm thiểu): Liệt kê ít nhất 3-5 risks: (a) Risk: 'Requirements mơ hồ, không rõ ràng' → Mitigation: 'Tham gia review requirements sớm, đặt câu hỏi để làm rõ', (b) Risk: 'Test environment không ổn định, thường xuyên down' → Mitigation: 'Có backup test environment, test vào giờ ít người dùng', (c) Risk: 'Không có đủ test data' → Mitigation: 'Chuẩn bị test data sớm, tạo test accounts trước', (d) Risk: 'Thiếu thời gian để test đầy đủ' → Mitigation: 'Ưu tiên test các chức năng quan trọng trước, test các chức năng phụ sau', (e) Risk: 'Developer fix bug chậm, delay test' → Mitigation: 'Giao tiếp thường xuyên với developer, theo dõi bug status'. Ghi lại tất cả vào Test Plan document.",
                "BƯỚC 4 - Review Test Plan một cách kỹ lưỡng: (1) ĐỌC LẠI TOÀN BỘ TEST PLAN một cách cẩn thận, đặt mình vào vị trí của một Tester khác sẽ sử dụng Test Plan này. (2) KIỂM TRA CÁC ĐIỂM SAU: (a) Test Scope có rõ ràng không? Có phân biệt rõ IN SCOPE và OUT OF SCOPE không? Nếu mơ hồ, chỉnh sửa lại cho rõ ràng. (b) Test Objectives có cụ thể, đo lường được không? Có thể verify được không? Nếu mơ hồ như 'test thoroughly', chỉnh sửa lại thành 'verify login với valid/invalid credentials, verify UI elements, verify error messages'. (c) Test Strategy có đủ chi tiết không? Có nói rõ sẽ test như thế nào không? (d) Test Environment có cụ thể không? Có ghi rõ browser, OS, version không? (e) Entry/Exit Criteria có rõ ràng, có thể đo lường được không? (f) Risks có hợp lý không? Mitigation có khả thi không? (3) TỰ HỎI: 'Nếu đưa Test Plan này cho một Tester khác (chưa biết gì về feature này), họ có hiểu và thực hiện được không?' Nếu câu trả lời là 'Không' hoặc 'Có thể, nhưng cần hỏi thêm', thì Test Plan chưa đủ chi tiết → cần chỉnh sửa lại. (4) SO SÁNH VỚI TEMPLATE TEST PLAN CHUẨN: Tìm template Test Plan chuẩn trên Google (ví dụ: IEEE 829 Test Plan template) và so sánh. Xem có phần nào thiếu không? Có phần nào cần bổ sung không? Học hỏi từ template chuẩn. (5) CHỈNH SỬA CÁC PHẦN CÒN MƠ HỒ hoặc thiếu thông tin. Mục tiêu: Test Plan phải đủ chi tiết để một Tester khác đọc là hiểu ngay và có thể thực hiện được mà không cần hỏi thêm. Test Plan là tài liệu quan trọng, là 'bản đồ' cho toàn bộ quá trình testing, nên phải rõ ràng, chi tiết, và đầy đủ."
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
              "Functional Testing - Test chức năng của phần mềm và các kỹ thuật: Functional Testing là test các chức năng (features) của phần mềm - xem phần mềm có làm đúng những gì được yêu cầu (requirements) không. Functional Testing tập trung vào 'WHAT' - phần mềm làm gì, không phải 'HOW WELL' - phần mềm hoạt động tốt như thế nào. VÍ DỤ CỤ THỂ: (1) Test Login feature → Verify login với valid credentials thành công, verify login với invalid credentials hiển thị error message, verify validation errors (empty username, empty password). (2) Test Search feature → Verify search với keyword hợp lệ trả về kết quả đúng, verify search với keyword không hợp lệ trả về 'No results found', verify search với empty keyword hiển thị validation error. (3) Test Payment feature → Verify thanh toán với valid card thành công, verify thanh toán với invalid card hiển thị error, verify validation (empty card number, expired card). (4) Test Add to Cart → Verify thêm sản phẩm vào giỏ hàng thành công, verify số lượng cập nhật đúng, verify tổng tiền tính đúng. CÁC KỸ THUẬT FUNCTIONAL TESTING: (1) Equivalence Partitioning (EP) - Chia input thành các nhóm tương đương, test 1 giá trị đại diện cho mỗi nhóm. (2) Boundary Value Analysis (BVA) - Test các giá trị tại biên (min, max, min-1, max+1). (3) Decision Table - Test tất cả các combinations của điều kiện. (4) State Transition - Test các trạng thái và chuyển đổi giữa các trạng thái. (5) Use Case Testing - Test các use cases của người dùng. Functional Testing là TRỌNG TÂM của Manual Tester vì đây là phần quan trọng nhất - đảm bảo phần mềm làm đúng những gì được yêu cầu.",
              "Non-functional Testing - Test các thuộc tính chất lượng: Non-functional Testing là test các thuộc tính chất lượng của phần mềm, KHÔNG phải chức năng cụ thể. Non-functional Testing trả lời câu hỏi: 'Phần mềm hoạt động tốt như thế nào?' Non-functional Testing tập trung vào 'HOW WELL' - chất lượng của phần mềm. CÁC LOẠI NON-FUNCTIONAL TESTING: (1) PERFORMANCE TESTING - Test tốc độ, response time, throughput, load capacity. Ví dụ: Test thời gian load trang phải < 3 giây, test hệ thống có thể xử lý 1000 requests/giây, test response time của API phải < 500ms. Các loại: Load Testing (test với tải bình thường), Stress Testing (test với tải cao), Volume Testing (test với lượng data lớn). (2) SECURITY TESTING - Test bảo mật, authentication, authorization, data encryption. Ví dụ: Test SQL injection (nhập ' OR '1'='1 vào login), test XSS (Cross-Site Scripting), test authentication bypass, test password strength, test data encryption. (3) USABILITY TESTING - Test dễ sử dụng, UI/UX, user experience. Ví dụ: Test UI có rõ ràng không, có dễ sử dụng không, có intuitive không, có accessibility không (người khuyết tật có thể sử dụng không), test navigation có dễ không. (4) COMPATIBILITY TESTING - Test tương thích với browser, OS, device. Ví dụ: Test trên Chrome, Firefox, Safari, Edge, test trên Windows, macOS, Linux, test trên mobile (iOS, Android), tablet, desktop, test responsive design. (5) RELIABILITY TESTING - Test độ tin cậy, ít crash, hoạt động ổn định. Ví dụ: Test hệ thống có crash không, có hoạt động ổn định trong thời gian dài không (24/7), có recover được sau khi crash không. (6) SCALABILITY TESTING - Test khả năng mở rộng, xử lý tải cao. Ví dụ: Test hệ thống có thể xử lý 10,000 users đồng thời không, có thể scale up khi cần không. Manual Tester có thể tham gia test Non-functional ở mức cơ bản (ví dụ: test Usability, Compatibility cơ bản, Performance cơ bản), nhưng test chuyên sâu (như load testing với tools, penetration testing) thường do Automation Tester hoặc chuyên gia thực hiện.",
              "Testing Pyramid - Mô hình kim tự tháp và nguyên tắc phân bổ test: Testing Pyramid là mô hình thể hiện số lượng test NÊN CÓ ở mỗi cấp độ. Hình dạng kim tự tháp (đáy rộng, đỉnh nhọn) có ý nghĩa quan trọng về chi phí, tốc độ, và hiệu quả. CẤU TRÚC 3 TẦNG: (1) ĐÁY (UNIT TEST) - NHIỀU NHẤT, nhanh, rẻ. Đặc điểm: Unit tests chạy rất nhanh (vài giây hoặc vài phút), chi phí thấp (developer viết khi code, có thể chạy tự động), phát hiện lỗi sớm (ngay khi code xong), dễ maintain. Số lượng: Nên có nhiều unit tests (ví dụ: 1000+ unit tests cho một project lớn). Ví dụ: Test function calculateTotal() với input [10, 20, 30] → Expected: 60. Unit tests thường do Developer viết, Manual Tester KHÔNG thường làm. (2) GIỮA (INTEGRATION TEST) - VỪA PHẢI, chậm hơn unit test, đắt hơn. Đặc điểm: Integration tests chạy chậm hơn (vài phút đến vài giờ), chi phí vừa phải (cần setup environment, test data), test tương tác giữa các module, có thể chạy tự động hoặc manual. Số lượng: Vừa phải (ví dụ: 100-200 integration tests). Ví dụ: Test Login API tương tác với Authentication service, test Payment module tương tác với Payment Gateway. Manual Tester CÓ THỂ tham gia Integration Testing. (3) ĐỈNH (E2E/SYSTEM TEST) - ÍT NHẤT, chậm nhất, đắt nhất. Đặc điểm: System tests chạy rất chậm (vài giờ đến cả ngày), chi phí cao (cần setup environment phức tạp, test data, nhiều thời gian), test toàn bộ hệ thống từ đầu đến cuối, thường do Manual Tester thực hiện (hoặc Automation với tools như Selenium). Số lượng: Ít nhất (ví dụ: 20-50 system tests cho một project lớn). Ví dụ: Test flow đầy đủ: User đăng ký → verify email → đăng nhập → tìm kiếm sản phẩm → xem chi tiết → thêm vào giỏ hàng → thanh toán → nhận email xác nhận. Manual Tester CHỦ YẾU làm System Testing. NGUYÊN TẮC: Có nhiều test ở tầng dưới (unit test) để bắt lỗi sớm, giảm số lượng test ở tầng trên (system test) để tiết kiệm thời gian và chi phí. Lý do: Unit test nhanh, rẻ, phát hiện lỗi sớm → nên có nhiều. System test chậm, đắt, phát hiện lỗi muộn → nên có ít, chỉ test các flow quan trọng nhất. Nếu có quá nhiều system tests, sẽ mất rất nhiều thời gian và chi phí để chạy. Nếu có quá ít unit tests, sẽ phát hiện lỗi muộn, tốn kém để sửa."
            ],
            concepts: [
              "Functional Testing là gì? → Functional Testing là test các chức năng (features) của phần mềm để đảm bảo chúng hoạt động đúng theo yêu cầu (requirements). Functional Testing trả lời câu hỏi: 'Phần mềm có làm được những gì người dùng cần không?' Functional Testing tập trung vào 'WHAT' - phần mềm làm gì, không phải 'HOW WELL' - phần mềm hoạt động tốt như thế nào. CÁC LOẠI FUNCTIONAL TESTING: (1) Smoke Testing - Test nhanh các chức năng chính để đảm bảo hệ thống hoạt động cơ bản, (2) Sanity Testing - Test nhanh sau khi fix bug để đảm bảo bug đã được sửa và không ảnh hưởng đến chức năng khác, (3) Regression Testing - Test lại các chức năng cũ sau khi có thay đổi để đảm bảo không bị ảnh hưởng, (4) User Acceptance Testing (UAT) - Test bởi end-user để xác nhận phần mềm đáp ứng yêu cầu business. CÁC KỸ THUẬT FUNCTIONAL TESTING: Equivalence Partitioning, Boundary Value Analysis, Decision Table, State Transition, Use Case Testing. VÍ DỤ CỤ THỂ: Test Login feature → Verify login với valid credentials thành công, verify login với invalid credentials hiển thị error, verify validation errors. Test Search feature → Verify search với keyword hợp lệ trả về kết quả, verify search với keyword không hợp lệ trả về 'No results found'. Test Add to Cart → Verify thêm sản phẩm vào giỏ hàng thành công, verify số lượng cập nhật đúng. Manual Tester thường tập trung vào Functional Testing vì đây là phần quan trọng nhất - đảm bảo phần mềm làm đúng những gì được yêu cầu.",
              "Non-functional Testing là gì? → Non-functional Testing là test các thuộc tính chất lượng của phần mềm, KHÔNG phải chức năng cụ thể. Non-functional Testing trả lời câu hỏi: 'Phần mềm hoạt động tốt như thế nào?' Non-functional Testing tập trung vào 'HOW WELL' - chất lượng của phần mềm, không phải 'WHAT' - phần mềm làm gì. CÁC LOẠI NON-FUNCTIONAL TESTING: (1) PERFORMANCE TESTING - Test tốc độ, response time, throughput, load capacity. Ví dụ: Test thời gian load trang phải < 3 giây, test hệ thống có thể xử lý 1000 requests/giây, test response time của API phải < 500ms. (2) SECURITY TESTING - Test bảo mật, authentication, authorization, data encryption. Ví dụ: Test SQL injection, XSS (Cross-Site Scripting), authentication bypass, password strength. (3) USABILITY TESTING - Test dễ sử dụng, UI/UX, user experience. Ví dụ: Test UI có rõ ràng không, có dễ sử dụng không, có intuitive không, có accessibility không. (4) COMPATIBILITY TESTING - Test tương thích với browser, OS, device. Ví dụ: Test trên Chrome, Firefox, Safari, test trên Windows, macOS, Linux, test trên mobile, tablet, desktop. (5) RELIABILITY TESTING - Test độ tin cậy, ít crash, hoạt động ổn định. Ví dụ: Test hệ thống có crash không, có hoạt động ổn định trong thời gian dài không. (6) SCALABILITY TESTING - Test khả năng mở rộng, xử lý tải cao. Ví dụ: Test hệ thống có thể xử lý 10,000 users đồng thời không. Manual Tester có thể tham gia test Non-functional ở mức cơ bản (ví dụ: test Usability, Compatibility cơ bản), nhưng test Performance/Security chuyên sâu thường do Automation Tester hoặc chuyên gia thực hiện.",
              "Levels of Testing (Các cấp độ test) - Từ nhỏ đến lớn: Levels of Testing mô tả các cấp độ khác nhau của testing, từ test phần nhỏ nhất đến test toàn bộ hệ thống. Có 4 cấp độ chính: (1) UNIT TESTING - Test từng đơn vị code nhỏ nhất (function, method, class). Đặc điểm: Test một phần code riêng lẻ, không test tương tác với phần khác. Thường do Developer viết (vì cần hiểu code), sử dụng unit testing frameworks (JUnit, NUnit, v.v.). Ví dụ: Test function calculateTotal() với input [10, 20, 30] → Expected: 60. Manual Tester KHÔNG thường làm Unit Testing. (2) INTEGRATION TESTING - Test sự tương tác giữa các module/component. Đặc điểm: Test nhiều module làm việc cùng nhau, test API, test database connection. Ví dụ: Test Login module tương tác với Authentication module, test Payment module tương tác với Payment Gateway. Manual Tester CÓ THỂ tham gia Integration Testing (test API, test tương tác giữa các module). (3) SYSTEM TESTING - Test toàn bộ hệ thống như một thể thống nhất. Đặc điểm: Test end-to-end flow, test toàn bộ hệ thống từ đầu đến cuối. Ví dụ: Test flow đầy đủ: User đăng ký → đăng nhập → tìm kiếm sản phẩm → thêm vào giỏ hàng → thanh toán → nhận email xác nhận. Manual Tester CHỦ YẾU làm System Testing - đây là phần quan trọng nhất của Manual Tester. (4) UAT (USER ACCEPTANCE TESTING) - Test bởi end-user hoặc stakeholder để xác nhận phần mềm đáp ứng yêu cầu business. Đặc điểm: Test từ góc nhìn người dùng, test business scenarios, không test technical details. Ví dụ: Business user test flow mua hàng để đảm bảo đáp ứng yêu cầu business. Manual Tester CÓ THỂ hỗ trợ UAT (chuẩn bị test cases, hướng dẫn user, thu thập feedback). TÓM LẠI: Manual Tester thường làm Integration Testing (một phần), System Testing (chủ yếu), và hỗ trợ UAT.",
              "Testing Pyramid - Mô hình kim tự tháp và nguyên tắc: Testing Pyramid là mô hình thể hiện số lượng test NÊN CÓ ở mỗi cấp độ. Hình dạng kim tự tháp (đáy rộng, đỉnh nhọn) có ý nghĩa quan trọng: (1) ĐÁY (UNIT TEST) - NHIỀU NHẤT, nhanh, rẻ. Đặc điểm: Unit tests chạy rất nhanh (vài giây), chi phí thấp (developer viết khi code), có thể chạy tự động, phát hiện lỗi sớm. Số lượng: Nên có nhiều unit tests (ví dụ: 1000+ unit tests). (2) GIỮA (INTEGRATION TEST) - VỪA PHẢI, chậm hơn unit test, đắt hơn. Đặc điểm: Integration tests chạy chậm hơn (vài phút), chi phí vừa phải, test tương tác giữa các module. Số lượng: Vừa phải (ví dụ: 100-200 integration tests). (3) ĐỈNH (E2E/SYSTEM TEST) - ÍT NHẤT, chậm nhất, đắt nhất. Đặc điểm: System tests chạy rất chậm (vài giờ), chi phí cao (cần setup environment, test data), test toàn bộ hệ thống. Số lượng: Ít nhất (ví dụ: 20-50 system tests). NGUYÊN TẮC: Có nhiều test ở tầng dưới (unit test) để bắt lỗi sớm, giảm số lượng test ở tầng trên (system test) để tiết kiệm thời gian và chi phí. Lý do: Unit test nhanh, rẻ, phát hiện lỗi sớm → nên có nhiều. System test chậm, đắt, phát hiện lỗi muộn → nên có ít, chỉ test các flow quan trọng nhất. Manual Tester thường làm System Testing (đỉnh pyramid) - ít nhưng quan trọng, test các flow end-to-end chính.",
              "Manual Tester thường làm gì? → Vai trò và trách nhiệm cụ thể: Manual Tester có vai trò quan trọng trong team, chủ yếu tập trung vào System Testing và Integration Testing ở mức manual. CỤ THỂ: (1) SYSTEM TESTING (Chủ yếu) - Test toàn bộ hệ thống từ đầu đến cuối, test end-to-end flows, test các scenarios thực tế của người dùng. Ví dụ: Test flow đầy đủ: User đăng ký → verify email → đăng nhập → tìm kiếm sản phẩm → xem chi tiết → thêm vào giỏ hàng → thanh toán → nhận email xác nhận. Manual Tester thực hiện System Testing bằng cách: Viết test cases cho các flows, thực thi test cases, tìm bugs, báo cáo bugs, verify fixes. (2) INTEGRATION TESTING (Một phần) - Test sự tương tác giữa các module/component, test API, test database. Ví dụ: Test Login API tương tác với Authentication service, test Payment module tương tác với Payment Gateway. Manual Tester có thể tham gia Integration Testing bằng cách: Test API bằng Postman, test tương tác giữa các module, verify data flow. (3) HỖ TRỢ UAT - Chuẩn bị test cases cho UAT, hướng dẫn end-user test, thu thập feedback, báo cáo issues. (4) NON-FUNCTIONAL TESTING (Cơ bản) - Test Usability (UI/UX, dễ sử dụng), Compatibility (browser, OS, device), Performance cơ bản (tốc độ load trang), Security cơ bản (authentication, authorization). Manual Tester có thể test Non-functional ở mức cơ bản, nhưng test chuyên sâu (như load testing, penetration testing) thường do Automation Tester hoặc chuyên gia thực hiện. (5) FUNCTIONAL TESTING (Trọng tâm) - Test các chức năng của phần mềm để đảm bảo chúng hoạt động đúng theo yêu cầu. Functional Testing là TRỌNG TÂM của Manual Tester - đây là phần quan trọng nhất. TÓM LẠI: Manual Tester chủ yếu làm System Testing và Functional Testing, có thể tham gia Integration Testing và hỗ trợ UAT, test Non-functional ở mức cơ bản."
            ]
          },
          afternoon: {
            title: "Chiều (2h): Levels",
            exercises: [{
              title: "BÀI TẬP: Phân loại Testing - Phân tích toàn diện một ứng dụng",
              duration: "2h",
              tasks: [
                "BƯỚC 1 - Chọn ứng dụng và phân tích cơ bản: (1) CHỌN MỘT ỨNG DỤNG để làm bài tập: Có thể chọn một trong các loại sau: (a) Website E-commerce (ví dụ: Amazon, Shopee, Lazada, hoặc một website demo), (b) App Mobile (ví dụ: Facebook, Instagram, Zalo, hoặc một app demo), (c) Website Social Media (ví dụ: Facebook, Twitter, LinkedIn), (d) Website Banking/Payment (ví dụ: Banking app, Payment gateway), (e) Bất kỳ ứng dụng nào bạn quen thuộc và có thể truy cập được. Nếu không có ứng dụng thực tế, có thể chọn một ứng dụng demo hoặc giả lập dựa trên mô tả. (2) GHI LẠI THÔNG TIN CƠ BẢN: Tạo một document 'Testing Analysis - [Tên Ứng Dụng]' và ghi lại: (a) Tên ứng dụng (ví dụ: 'Amazon E-commerce Website'), (b) Loại ứng dụng (Web/Mobile/Desktop), (c) URL hoặc cách truy cập (ví dụ: 'https://www.amazon.com'), (d) Mô tả ngắn gọn (2-3 dòng) về ứng dụng đó làm gì (ví dụ: 'Amazon là website E-commerce cho phép người dùng tìm kiếm, xem chi tiết, thêm vào giỏ hàng, và mua sản phẩm online. Người dùng có thể đăng ký tài khoản, đăng nhập, quản lý đơn hàng, và thanh toán.'), (e) Các chức năng chính của ứng dụng (liệt kê 5-10 chức năng, ví dụ: 'Đăng ký/Đăng nhập, Tìm kiếm sản phẩm, Xem chi tiết sản phẩm, Thêm vào giỏ hàng, Thanh toán, Quản lý đơn hàng'). Document này sẽ là cơ sở để phân tích các loại testing.",
                "BƯỚC 2 - Liệt kê ít nhất 15-20 loại Testing có thể áp dụng một cách chi tiết: Với mỗi loại Testing, viết 2-3 dòng mô tả sẽ test như thế nào cho ứng dụng của bạn. Các loại Testing cần liệt kê: (1) FUNCTIONAL TESTING - Test các chức năng của ứng dụng. Ví dụ: 'Test chức năng Login: Verify login với valid credentials thành công, verify login với invalid credentials hiển thị error, verify validation errors. Test chức năng Search: Verify search với keyword hợp lệ trả về kết quả, verify search với keyword không hợp lệ trả về No results found. Test chức năng Add to Cart: Verify thêm sản phẩm vào giỏ hàng thành công, verify số lượng cập nhật đúng.' (2) PERFORMANCE TESTING - Test tốc độ, response time. Ví dụ: 'Test thời gian load trang Home phải < 3 giây, test thời gian search phải < 2 giây, test hệ thống có thể xử lý 1000 users đồng thời không, test response time của API phải < 500ms.' (3) SECURITY TESTING - Test bảo mật. Ví dụ: 'Test SQL injection: Nhập ' OR '1'='1 vào login form, verify không bị hack. Test XSS: Nhập <script>alert('XSS')</script> vào search, verify không execute script. Test authentication: Verify không thể bypass login, verify password được mã hóa.' (4) USABILITY TESTING - Test dễ sử dụng, UI/UX. Ví dụ: 'Test UI có rõ ràng không: Buttons có đủ lớn không, labels có dễ đọc không, colors có phù hợp không. Test navigation: Có dễ tìm chức năng không, có intuitive không. Test user experience: Có dễ sử dụng không, có gây confusion không.' (5) COMPATIBILITY TESTING - Test tương thích. Ví dụ: 'Test trên Chrome, Firefox, Safari, Edge - verify tất cả chức năng hoạt động đúng. Test trên Windows, macOS, Linux - verify không có lỗi. Test trên mobile (iOS, Android) - verify responsive design hoạt động đúng.' (6) REGRESSION TESTING - Test lại sau khi có thay đổi. Ví dụ: 'Sau khi fix bug Login, test lại tất cả các chức năng liên quan (Login, Logout, Session management) để đảm bảo không bị ảnh hưởng. Test lại các chức năng chính sau mỗi release.' (7) SMOKE TESTING - Test nhanh các chức năng chính. Ví dụ: 'Test nhanh các chức năng chính: Login, Search, Add to Cart, Checkout. Mục tiêu: Đảm bảo hệ thống hoạt động cơ bản trước khi test chi tiết.' (8) SANITY TESTING - Test nhanh sau khi fix bug. Ví dụ: 'Sau khi fix bug Search, test nhanh Search feature để đảm bảo bug đã được sửa và không ảnh hưởng đến chức năng khác.' (9) INTEGRATION TESTING - Test tương tác giữa các module. Ví dụ: 'Test Login module tương tác với Authentication service, test Payment module tương tác với Payment Gateway, test Search module tương tác với Database.' (10) UAT (USER ACCEPTANCE TESTING) - Test bởi end-user. Ví dụ: 'Business user test flow mua hàng để đảm bảo đáp ứng yêu cầu business. End-user test để đảm bảo dễ sử dụng.' (11) ALPHA TESTING - Test bởi internal team trước khi release. Ví dụ: 'Internal team (developers, testers) test ứng dụng trong môi trường alpha để tìm bugs trước khi release cho beta testers.' (12) BETA TESTING - Test bởi external users trước khi release chính thức. Ví dụ: 'External users (beta testers) test ứng dụng trong môi trường beta, cung cấp feedback về bugs và improvements.' (13) AD-HOC TESTING - Test không có kế hoạch, test ngẫu nhiên. Ví dụ: 'Test ngẫu nhiên các chức năng, không theo test cases, để tìm bugs không mong đợi. Ví dụ: Click buttons liên tục, nhập data bất thường.' (14) EXPLORATORY TESTING - Test khám phá, học hỏi về ứng dụng trong khi test. Ví dụ: 'Test và khám phá ứng dụng cùng lúc, không có test cases sẵn, học hỏi về ứng dụng và tìm bugs.' (15) ACCESSIBILITY TESTING - Test khả năng truy cập cho người khuyết tật. Ví dụ: 'Test với screen reader, test keyboard navigation, test color contrast, test cho người khiếm thị, khiếm thính.' Ghi lại tất cả vào document với format: Tên loại Testing | Mô tả chi tiết | Ví dụ cụ thể cho ứng dụng của bạn.",
                "BƯỚC 3 - Phân loại các loại Testing một cách có hệ thống: (1) CHIA THÀNH 2 NHÓM CHÍNH: (a) FUNCTIONAL TESTING - Các loại test chức năng: Functional Testing, Smoke Testing, Sanity Testing, Regression Testing, Integration Testing (một phần), UAT (một phần), Ad-hoc Testing, Exploratory Testing. (b) NON-FUNCTIONAL TESTING - Các loại test chất lượng: Performance Testing, Security Testing, Usability Testing, Compatibility Testing, Reliability Testing, Scalability Testing, Accessibility Testing. (2) XÁC ĐỊNH CẤP ĐỘ (LEVEL) cho mỗi loại nếu có thể: (a) UNIT LEVEL - Unit Testing (thường do Developer). (b) INTEGRATION LEVEL - Integration Testing. (c) SYSTEM LEVEL - System Testing, Functional Testing, Performance Testing, Security Testing, Usability Testing, Compatibility Testing, Regression Testing, Smoke Testing, Sanity Testing. (d) UAT LEVEL - UAT, Alpha Testing, Beta Testing. (3) TẠO BẢNG PHÂN LOẠI: Tạo một bảng trong Excel/Google Sheets với các cột: Tên loại Testing | Functional/Non-functional | Level (Unit/Integration/System/UAT) | Mô tả ngắn | Ví dụ cụ thể cho ứng dụng của bạn. Điền đầy đủ thông tin cho tất cả các loại Testing đã liệt kê. Bảng này sẽ giúp bạn nhớ và áp dụng sau này. (4) PHÂN TÍCH: Với mỗi loại Testing, tự hỏi: 'Loại này thuộc Functional hay Non-functional?', 'Loại này thuộc cấp độ nào?', 'Khi nào nên dùng loại này?'. Ghi lại nhận xét vào document.",
                "BƯỚC 4 - Tạo bảng tổng hợp chi tiết và phân tích sâu hơn: (1) TẠO BẢNG TỔNG HỢP CHI TIẾT: Tạo một bảng Excel/Google Sheets với các cột sau (theo thứ tự): (a) STT (số thứ tự), (b) Tên loại Testing, (c) Functional/Non-functional, (d) Level (Unit/Integration/System/UAT - nếu có), (e) Mô tả ngắn (1-2 câu), (f) Ví dụ cụ thể cho ứng dụng của bạn (2-3 câu), (g) Khi nào nên dùng (1 câu), (h) Ai thường làm (Developer/Tester/User), (i) Tools thường dùng (nếu có, ví dụ: Selenium, Postman, JMeter). (2) ĐIỀN ĐẦY ĐỦ THÔNG TIN cho tất cả các loại Testing (ít nhất 15-20 loại). Với mỗi loại, nghiên cứu thêm để điền đầy đủ thông tin. (3) THÊM CÁC LOẠI TESTING KHÁC nếu tìm thấy: Nếu trong quá trình nghiên cứu, bạn tìm thấy các loại Testing khác (ví dụ: Monkey Testing, Gorilla Testing, Volume Testing, Spike Testing, Endurance Testing), thêm vào bảng và điền đầy đủ thông tin. (4) TẠO SUMMARY: Ở cuối bảng, tạo một summary: Tổng số loại Testing: X, Số loại Functional: Y, Số loại Non-functional: Z, Số loại System Level: W, Số loại Integration Level: V, Số loại UAT Level: U. (5) LƯU BẢNG: Lưu bảng này để sử dụng sau này. Bảng này sẽ là tài liệu tham khảo quan trọng khi bạn làm việc thực tế.",
                "BƯỚC 5 - Tự đánh giá và mở rộng kiến thức: (1) XEM LẠI DANH SÁCH: Đọc lại toàn bộ danh sách các loại Testing đã liệt kê, kiểm tra xem có thiếu loại Testing quan trọng nào không. Các loại Testing quan trọng cần có: Functional, Performance, Security, Usability, Compatibility, Regression, Smoke, Sanity, Integration, UAT. Nếu thiếu, bổ sung thêm. (2) TÌM HIỂU THÊM VỀ CÁC LOẠI TESTING CHƯA BIẾT: Nếu có các loại Testing bạn chưa biết hoặc chưa hiểu rõ (ví dụ: Alpha Testing, Beta Testing, Ad-hoc Testing, Exploratory Testing, Accessibility Testing, Volume Testing, Spike Testing), tìm hiểu thêm trên Google, đọc tài liệu, xem video. Với mỗi loại mới, ghi lại: Tên loại, Mô tả, Khi nào dùng, Ví dụ. (3) THÊM VÀO DANH SÁCH: Thêm các loại Testing mới tìm hiểu được vào danh sách và bảng tổng hợp. Mục tiêu: Có ít nhất 20 loại Testing trong danh sách. (4) TỰ ĐÁNH GIÁ: Tự hỏi: 'Bạn hiểu bao nhiêu % về các loại Testing (1-10)?', 'Bạn có thể giải thích sự khác biệt giữa Functional và Non-functional Testing không?', 'Bạn có thể giải thích sự khác biệt giữa Smoke Testing và Sanity Testing không?', 'Bạn có thể giải thích sự khác biệt giữa Alpha Testing và Beta Testing không?'. Nếu còn mơ hồ, tìm hiểu thêm. (5) GHI LẠI CÂU HỎI: Ghi lại 3-5 câu hỏi về các loại Testing mà bạn còn muốn tìm hiểu thêm. Những câu hỏi này sẽ giúp bạn học sâu hơn sau này."
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
              "Test Case là gì? → Test Case là một bộ các điều kiện, bước thực hiện, và kết quả mong đợi để kiểm tra xem một chức năng cụ thể của phần mềm có hoạt động đúng hay không. Test Case giúp Tester có kế hoạch test có hệ thống, không bỏ sót, và có thể tái sử dụng cho các lần test sau. Một Test Case tốt phải đáp ứng các tiêu chí: (1) Rõ ràng - ai đọc cũng hiểu, (2) Dễ hiểu - không có thuật ngữ phức tạp không cần thiết, (3) Có thể thực thi độc lập - không phụ thuộc vào test case khác, (4) Có mục tiêu cụ thể - chỉ test một điều cụ thể, không gộp nhiều check, (5) Có thể tái sử dụng - có thể dùng lại cho các lần test sau (regression testing). Test Case là công cụ quan trọng nhất của Tester để đảm bảo test có hệ thống và không bỏ sót. Ví dụ: Thay vì test Login một cách ngẫu nhiên, Tester viết Test Case 'TC_LOGIN_001: Login with valid credentials' với các bước cụ thể → test một cách có hệ thống, có thể tái sử dụng cho các lần test sau.",
              "Cấu trúc Test Case chuẩn bao gồm các phần quan trọng sau (mỗi phần đều cần thiết): (1) TEST CASE ID - Mã định danh duy nhất để dễ dàng tham chiếu (ví dụ: TC_LOGIN_001, TC_REG_015). Format thường là TC_MODULE_FEATURE_NUMBER. (2) DESCRIPTION/TITLE - Mô tả ngắn gọn mục đích test trong 1 câu (ví dụ: 'Verify login with valid username and password'). (3) MODULE và FEATURE - Xác định test case thuộc module/feature nào (ví dụ: Module: Authentication, Feature: Login). (4) PRECONDITIONS - Điều kiện cần có trước khi test (ví dụ: 'User account exists with username: testuser, password: Test123!', 'User is on Login page'). Preconditions giúp đảm bảo test case có thể thực thi được. (5) TEST STEPS - Các bước thực hiện chi tiết, đánh số 1, 2, 3... Mỗi bước phải rất cụ thể (ví dụ: 'Step 1: Navigate to https://example.com/login', 'Step 2: Enter username: testuser', 'Step 3: Enter password: Test123!', 'Step 4: Click Login button'). (6) TEST DATA - Dữ liệu test cụ thể sẽ sử dụng (ví dụ: Username: 'testuser', Password: 'Test123!'). (7) EXPECTED RESULT - Kết quả mong đợi cụ thể, không mơ hồ (ví dụ: 'User is redirected to dashboard page, URL: https://example.com/dashboard, welcome message displays: Welcome, testuser!'). (8) ACTUAL RESULT - Kết quả thực tế (để trống khi viết, điền khi thực thi test). (9) STATUS - Pass/Fail/Blocked/Not Executed (điền khi thực thi). (10) PRIORITY - High/Medium/Low (ưu tiên của test case). (11) AUTHOR và DATE - Người viết và ngày tạo. Mỗi phần đều quan trọng và cần điền đầy đủ để test case có chất lượng cao.",
              "Test Steps phải rõ ràng và chi tiết đến mức một người khác đọc có thể thực hiện được mà không cần hỏi thêm: (1) Mỗi bước phải mô tả cụ thể hành động cần thực hiện - không mơ hồ. Ví dụ: Thay vì viết 'Login' (quá mơ hồ), hãy viết 'Step 1: Navigate to Login page (URL: https://example.com/login)', 'Step 2: Locate Username field (located at top of the form)', 'Step 3: Enter username: testuser', 'Step 4: Locate Password field (located below Username field)', 'Step 5: Enter password: Test123!', 'Step 6: Locate Login button (located at bottom center of the form)', 'Step 7: Click Login button', 'Step 8: Wait for page to load (wait 2-3 seconds)', 'Step 9: Observe the result displayed on screen'. (2) Bao gồm cả dữ liệu input cụ thể nếu có - không chỉ nói 'Enter username' mà phải nói 'Enter username: testuser'. (3) Bao gồm cả vị trí của các elements nếu cần - giúp Tester dễ dàng tìm thấy. (4) Bao gồm cả các bước chờ đợi nếu cần - ví dụ: 'Wait for page to load'. Test Steps tốt là khi một Tester mới vào team đọc có thể thực hiện được ngay mà không cần hỏi thêm. Nếu Test Steps không đủ chi tiết, Tester sẽ mất thời gian hỏi lại hoặc đoán mò → dễ test sai.",
              "Expected Result phải cụ thể, đo lường được, và không mơ hồ - đây là phần QUAN TRỌNG NHẤT của Test Case: (1) Thay vì viết 'should work correctly' (quá mơ hồ, không biết 'correctly' là gì), hãy viết cụ thể như 'User is redirected to dashboard page, URL changes to https://example.com/dashboard, welcome message displays: Welcome, testuser!, user profile icon appears in top right corner of the page'. (2) Bao gồm số liệu cụ thể nếu có - ví dụ: 'Error message displays: Invalid username or password' (cụ thể message là gì), 'Response time is less than 2 seconds' (cụ thể thời gian). (3) Bao gồm cả UI elements nếu liên quan - ví dụ: 'Button changes color to green', 'Error message appears in red color below Username field'. (4) Bao gồm cả URL changes nếu có redirect - ví dụ: 'URL changes from https://example.com/login to https://example.com/dashboard'. (5) Tránh các từ mơ hồ như 'should', 'might', 'could' - thay vào đó dùng các từ khẳng định như 'is', 'displays', 'appears'. Expected Result cụ thể giúp dễ dàng xác định Pass/Fail - nếu Actual Result khớp với Expected Result → Pass, nếu không khớp → Fail. Ví dụ: Expected Result mơ hồ 'should work correctly' → không biết Pass hay Fail vì không rõ 'correctly' là gì. Expected Result cụ thể 'User is redirected to dashboard page, welcome message displays' → dễ dàng xác định Pass/Fail.",
              "Best practices khi viết Test Case để đảm bảo chất lượng cao: (1) MỖI TEST CASE CHỈ TEST MỘT MỤC TIÊU CỤ THỂ - không gộp nhiều check vào một case. Ví dụ: Không viết một test case vừa test Login với valid credentials, vừa test Remember Me, vừa test redirect. Thay vào đó, tách thành 3 test cases riêng. Lý do: Nếu test case fail, không biết phần nào fail. (2) TEST CASE PHẢI ĐỘC LẬP - không phụ thuộc vào thứ tự thực thi hoặc kết quả của test case khác. Mỗi test case phải có thể chạy độc lập, không cần chạy test case khác trước. Lý do: Dễ dàng chạy lại một test case cụ thể, không bị ảnh hưởng bởi test case khác fail. (3) SỬ DỤNG NGÔN NGỮ ĐƠN GIẢN, DỄ HIỂU - tránh thuật ngữ phức tạp không cần thiết, viết câu ngắn gọn, rõ ràng. Ví dụ: Thay vì 'Execute authentication process with valid credentials', hãy viết 'Login with valid username and password'. (4) REVIEW TEST CASE TRƯỚC KHI THỰC THI - đọc lại test case, kiểm tra xem có đủ chi tiết không, có mơ hồ không, có thể thực thi được không. Nhờ người khác review nếu có thể. (5) CẬP NHẬT TEST CASE KHI CÓ THAY ĐỔI YÊU CẦU - nếu requirements thay đổi, test case cũng phải được cập nhật để phù hợp. Không để test case lỗi thời. (6) SỬ DỤNG TEST DATA CỤ THỂ - không dùng 'test data' mơ hồ, mà dùng dữ liệu cụ thể như 'Username: testuser, Password: Test123!'. (7) ĐẶT TÊN TEST CASE ID THEO QUY TẮC NHẤT QUÁN - ví dụ: TC_MODULE_FEATURE_NUMBER (TC_LOGIN_001, TC_LOGIN_002). Điều này giúp dễ dàng quản lý và tìm kiếm."
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice",
            exercises: [{
              title: "BÀI TẬP: Viết Test Cases chi tiết cho Login và Registration - Thực hành từng bước",
              duration: "2h",
              tasks: [
                "BƯỚC 1 - Chuẩn bị và hiểu rõ Login feature: (1) Chọn một ứng dụng có Login feature để làm bài tập (có thể là website bất kỳ như Gmail, Facebook, hoặc một ứng dụng demo). Nếu không có, có thể giả lập dựa trên requirements. (2) Phân tích Login feature một cách chi tiết: Login có những field nào? (Username/Email, Password), Có những nút/link nào? (Login button, Forgot Password link, Remember Me checkbox), Có validation nào không? (username không được để trống, password phải có độ dài tối thiểu), Có những trường hợp đặc biệt nào? (account bị lock sau nhiều lần login sai, Remember Me để lưu session). (3) Ghi lại tất cả các yêu cầu và hành vi mong đợi của Login feature vào một document 'Login Requirements Analysis'. Document này sẽ là cơ sở để viết test cases.",
                "BƯỚC 2 - Viết 10 Test Cases chi tiết cho Login feature theo template chuẩn: Sử dụng template Test Case đã học, viết 10 test cases với đầy đủ các phần sau. Mỗi test case phải có: (1) TEST CASE ID: Theo format TC_LOGIN_001, TC_LOGIN_002, v.v. (2) MODULE: 'Authentication' hoặc 'Login'. (3) FEATURE: 'Login'. (4) DESCRIPTION/TITLE: Mô tả ngắn gọn mục đích test (ví dụ: 'Verify login with valid username and password'). (5) PRECONDITIONS: Điều kiện cần có trước khi test (ví dụ: 'User account exists in system with username: testuser, password: Test123!', 'User is on Login page', 'Browser is opened'). (6) TEST STEPS: Các bước chi tiết, đánh số 1, 2, 3... Mỗi bước phải rất cụ thể (ví dụ: 'Step 1: Open browser and navigate to https://example.com/login', 'Step 2: Locate Username field', 'Step 3: Enter username: testuser', 'Step 4: Locate Password field', 'Step 5: Enter password: Test123!', 'Step 6: Locate Login button', 'Step 7: Click Login button', 'Step 8: Wait for page to load', 'Step 9: Observe the result'). (7) TEST DATA: Dữ liệu test cụ thể (ví dụ: Username: 'testuser', Password: 'Test123!'). (8) EXPECTED RESULT: Kết quả mong đợi cụ thể, không mơ hồ (ví dụ: 'User is redirected to dashboard page (URL: https://example.com/dashboard)', 'Welcome message displays: Welcome, testuser!', 'User profile icon appears in top right corner'). (9) PRIORITY: High/Medium/Low. (10) AUTHOR và DATE. 10 TEST CASES CẦN VIẾT: (1) TC_LOGIN_001: Login với valid username và valid password → Expected: Login thành công, redirect to dashboard, hiển thị welcome message. (2) TC_LOGIN_002: Login với invalid username (username không tồn tại) và valid password → Expected: Hiển thị error message 'Invalid username or password', vẫn ở trang Login. (3) TC_LOGIN_003: Login với valid username và invalid password (password sai) → Expected: Hiển thị error message 'Invalid username or password', vẫn ở trang Login. (4) TC_LOGIN_004: Login với empty username (để trống) và valid password → Expected: Hiển thị validation error 'Username is required' ngay dưới Username field (màu đỏ), không cho submit form. (5) TC_LOGIN_005: Login với valid username và empty password (để trống) → Expected: Hiển thị validation error 'Password is required' ngay dưới Password field (màu đỏ), không cho submit form. (6) TC_LOGIN_006: Login với username chứa special characters (ví dụ: test@user#123) và valid password → Expected: Validation error 'Username contains invalid characters' hoặc không cho nhập special characters. (7) TC_LOGIN_007: Login với valid username và password quá ngắn (ví dụ: chỉ 3 ký tự) → Expected: Validation error 'Password must be at least 8 characters' ngay dưới Password field. (8) TC_LOGIN_008: Login với valid credentials và check 'Remember Me' checkbox → Expected: Login thành công, sau khi đóng browser và mở lại, vẫn còn logged in (session được lưu). (9) TC_LOGIN_009: Login với account đã bị lock (sau nhiều lần login sai) → Expected: Hiển thị error message 'Your account has been locked. Please contact administrator.' hoặc 'Too many failed login attempts. Account locked for 30 minutes.', không cho login. (10) TC_LOGIN_010: Click 'Forgot Password' link → Expected: Redirect to Forgot Password page (URL: https://example.com/forgot-password), hiển thị form để nhập email. Viết tất cả 10 test cases vào Excel/Google Sheets hoặc Word document với format nhất quán.",
                "BƯỚC 3 - Viết 15 Test Cases chi tiết cho Registration feature: Tương tự như Login, phân tích Registration feature trước, sau đó viết 15 test cases bao gồm: (1) POSITIVE CASES (3-4 test cases): Đăng ký thành công với valid data đầy đủ (ví dụ: Email: test@example.com, Password: Test123!, Confirm Password: Test123!, Full Name: Test User, Phone: 0123456789, Date of Birth: 01/01/1990). Expected: Registration thành công, hiển thị success message 'Registration successful! Please check your email to verify your account.', redirect to verification page hoặc login page. (2) NEGATIVE CASES - Validation errors (8-10 test cases): Email không đúng format (ví dụ: test@, @example.com, testexample.com) → Expected: Validation error 'Please enter a valid email address'. Password không đủ mạnh (ví dụ: chỉ có chữ thường: 'password', chỉ có số: '12345678', không có chữ hoa: 'password123') → Expected: Validation error 'Password must contain at least one uppercase letter, one lowercase letter, and one number'. Confirm Password không khớp với Password → Expected: Validation error 'Passwords do not match'. Phone number sai format (ví dụ: không đủ 10 số, chứa chữ cái) → Expected: Validation error 'Please enter a valid phone number'. Full Name để trống → Expected: Validation error 'Full Name is required'. Date of Birth chưa đủ 18 tuổi → Expected: Validation error 'You must be at least 18 years old to register'. Email đã tồn tại trong hệ thống → Expected: Validation error 'This email is already registered. Please login instead.'. (3) BOUNDARY CASES (2-3 test cases): Password đúng minimum length (ví dụ: 8 ký tự nếu yêu cầu tối thiểu 8) → Expected: Accepted. Password đúng maximum length (ví dụ: 20 ký tự nếu yêu cầu tối đa 20) → Expected: Accepted. Email đúng maximum length → Expected: Accepted hoặc validation error nếu quá dài. (4) EDGE CASES (2-3 test cases): Copy-paste special characters vào các field → Expected: Validation error hoặc không cho nhập. Spaces ở đầu/cuối trong Full Name → Expected: Trim spaces tự động hoặc validation error. Nhập số rất lớn vào Phone field → Expected: Validation error hoặc không cho nhập. Mỗi test case phải có đầy đủ các phần như Login test cases: ID, Description, Preconditions, Test Steps (rất chi tiết), Test Data, Expected Result (cụ thể), Priority. Viết tất cả 15 test cases vào cùng document với Login test cases.",
                "BƯỚC 4 - Tổ chức và phân loại Test Cases một cách có hệ thống: (1) Sắp xếp test cases theo nhóm: Tạo các sheet/tab riêng trong Excel hoặc các section riêng trong Word: 'Login - Positive Test Cases', 'Login - Negative Test Cases', 'Login - Edge Cases', 'Registration - Positive Test Cases', 'Registration - Negative Test Cases', 'Registration - Boundary Test Cases', 'Registration - Edge Cases'. (2) Đánh Priority cho mỗi test case: HIGH PRIORITY - Các test case cho happy path và validation quan trọng (ví dụ: Login với valid credentials, Registration với valid data, validation cho required fields). MEDIUM PRIORITY - Các test case cho validation phụ và edge cases (ví dụ: Password format validation, Remember Me functionality). LOW PRIORITY - Các test case cho UI/UX và edge cases ít quan trọng (ví dụ: Copy-paste special characters, Spaces ở đầu/cuối). (3) Tạo Summary table: Tạo một bảng tổng hợp ở đầu document với thông tin: Tổng số test cases (25 test cases: 10 Login + 15 Registration), Số test cases theo Priority (High: X, Medium: Y, Low: Z), Số test cases theo loại (Positive: X, Negative: Y, Boundary: Z, Edge: W), Số test cases theo module (Login: 10, Registration: 15). Bảng này giúp dễ dàng theo dõi và báo cáo.",
                "BƯỚC 5 - Review và cải thiện Test Cases một cách kỹ lưỡng: (1) Đọc lại TẤT CẢ test cases một cách cẩn thận, đặt mình vào vị trí của một Tester khác sẽ thực thi các test cases này. (2) Kiểm tra các điểm sau cho MỖI test case: (a) TEST STEPS có đủ chi tiết không? Một người khác đọc có thể thực hiện được mà không cần hỏi thêm không? Ví dụ: 'Click Login button' có đủ không, hay cần 'Locate Login button (located at bottom center of the form), then click it'? Nếu thiếu, bổ sung thêm chi tiết. (b) EXPECTED RESULT có cụ thể, không mơ hồ không? Ví dụ: 'should work correctly' là quá mơ hồ → cần 'User is redirected to dashboard page, URL changes to https://example.com/dashboard, welcome message displays'. Nếu mơ hồ, chỉnh sửa lại cho cụ thể. (c) TEST DATA có đầy đủ không? Có số liệu cụ thể không? Ví dụ: 'Enter username' → cần 'Enter username: testuser'. Nếu thiếu, bổ sung. (d) PRECONDITIONS có đầy đủ không? Có thiếu điều kiện quan trọng nào không? Ví dụ: 'User account exists' → cần 'User account exists in system with username: testuser, password: Test123!, email: test@example.com'. (3) Kiểm tra toàn bộ test cases: (a) Có test case nào trùng lặp không? (b) Có thiếu test case quan trọng nào không? (ví dụ: có test Login với empty username nhưng có test Login với empty password không? Có test tất cả các validation errors không?). (c) TEST CASE ID có nhất quán không? (d) Format có nhất quán không? (e) Ngôn ngữ có dễ hiểu, không có lỗi chính tả không? (4) Chỉnh sửa các test case còn mơ hồ hoặc thiếu thông tin. Mục tiêu: Tất cả test cases phải rõ ràng, chi tiết, có thể thực thi được bởi bất kỳ Tester nào mà không cần hỏi thêm.",
                "BƯỚC 6 - Tạo Test Case Template riêng để sử dụng cho các bài tập sau: (1) Dựa trên những gì đã học và thực hành, tạo một template Test Case chuyên nghiệp trong Excel/Google Sheets với các cột sau (theo thứ tự): Test Case ID (ví dụ: TC_MODULE_FEATURE_001), Module (ví dụ: Authentication), Feature (ví dụ: Login), Description/Title (mô tả ngắn gọn mục đích test), Preconditions (điều kiện ban đầu), Test Steps (các bước chi tiết, có thể dùng nhiều dòng), Test Data (dữ liệu test cụ thể), Expected Result (kết quả mong đợi cụ thể), Actual Result (để trống, điền khi thực thi), Status (Pass/Fail/Blocked/Not Executed - để trống, điền khi thực thi), Priority (High/Medium/Low), Author (tên người viết), Date Created (ngày tạo), Date Executed (ngày thực thi - để trống, điền khi thực thi), Notes (ghi chú thêm nếu cần). (2) Format template cho đẹp: Căn chỉnh cột cho vừa, đóng băng hàng đầu tiên (header), thêm màu sắc cho header (ví dụ: màu xanh), thêm filter cho các cột quan trọng (Status, Priority), thêm conditional formatting cho Status (Pass = xanh, Fail = đỏ, Blocked = vàng). (3) Lưu template này để sử dụng cho tất cả các bài tập sau. Template này sẽ giúp bạn viết test cases một cách nhất quán và chuyên nghiệp."
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
              title: "BÀI TẬP: EP Practice - Áp dụng Equivalence Partitioning từng bước chi tiết",
              duration: "2h",
              tasks: [
                "BƯỚC 1 - Xác định partitions cho Age field (18-65) một cách chi tiết: (1) PHÂN TÍCH YÊU CẦU: Đọc kỹ requirement 'Age chỉ chấp nhận từ 18 đến 65'. Xác định rõ: min = 18, max = 65, range là [18, 65] (bao gồm cả 18 và 65). Ghi lại requirement vào document 'EP Analysis - Age Field'. (2) CHIA PARTITIONS: Dựa trên requirement, chia thành các partitions: (a) VALID PARTITION: Age từ 18 đến 65 (bao gồm cả 18 và 65). Tất cả các giá trị trong partition này đều được kỳ vọng sẽ được chấp nhận. (b) INVALID PARTITION 1: Age nhỏ hơn 18 (< 18, ví dụ: 0, 10, 17). Tất cả các giá trị trong partition này đều được kỳ vọng sẽ bị reject với validation error. (c) INVALID PARTITION 2: Age lớn hơn 65 (> 65, ví dụ: 66, 70, 100). Tất cả các giá trị trong partition này đều được kỳ vọng sẽ bị reject với validation error. Ghi lại partitions vào bảng: Partition Name | Range | Expected Behavior | Example Values. (3) CHỌN GIÁ TRỊ ĐẠI DIỆN CHO MỖI PARTITION: Vì các giá trị trong cùng partition có cùng expected behavior, ta chỉ cần test 1 giá trị đại diện cho mỗi partition: (a) Valid Partition (18-65) → Chọn giá trị đại diện: 25 (hoặc bất kỳ số nào trong 18-65, ví dụ: 18, 30, 50, 65). Lý do: 25 là giá trị ở giữa range, đại diện cho partition. (b) Invalid Partition 1 (< 18) → Chọn giá trị đại diện: 10 (hoặc 0, 17). Lý do: 10 đại diện cho các giá trị nhỏ hơn 18. (c) Invalid Partition 2 (> 65) → Chọn giá trị đại diện: 70 (hoặc 66, 100). Lý do: 70 đại diện cho các giá trị lớn hơn 65. (4) VIẾT TEST CASES CHI TIẾT: Sử dụng template Test Case, viết 3 test cases: (a) TC_AGE_EP_001: Description: 'Verify Age field accepts valid age value (25)', Preconditions: 'User is on Registration form', Test Steps: 'Step 1: Navigate to Registration page, Step 2: Locate Age field, Step 3: Enter age: 25, Step 4: Click Submit button', Test Data: 'Age: 25', Expected Result: 'Age value is accepted, form submits successfully, no validation error displayed'. (b) TC_AGE_EP_002: Description: 'Verify Age field rejects age value less than 18 (10)', Preconditions: 'User is on Registration form', Test Steps: 'Step 1: Navigate to Registration page, Step 2: Locate Age field, Step 3: Enter age: 10, Step 4: Click Submit button', Test Data: 'Age: 10', Expected Result: 'Validation error displays: Age must be at least 18 (error message appears in red color below Age field), form does not submit'. (c) TC_AGE_EP_003: Description: 'Verify Age field rejects age value greater than 65 (70)', Preconditions: 'User is on Registration form', Test Steps: 'Step 1: Navigate to Registration page, Step 2: Locate Age field, Step 3: Enter age: 70, Step 4: Click Submit button', Test Data: 'Age: 70', Expected Result: 'Validation error displays: Age must not exceed 65 (error message appears in red color below Age field), form does not submit'. Ghi lại tất cả partitions và test cases vào document 'EP Analysis - Age Field'.",
                "BƯỚC 2 - Xác định partitions cho Email field một cách toàn diện: (1) PHÂN TÍCH YÊU CẦU: Email phải có format hợp lệ. Format hợp lệ của email bao gồm: có local part (phần trước @), có ký tự @, có domain (phần sau @), domain phải có ít nhất một dấu chấm, có TLD (top-level domain như .com, .org). Ghi lại requirement vào document 'EP Analysis - Email Field'. (2) CHIA PARTITIONS: Chia thành các partitions dựa trên các loại invalid khác nhau: (a) VALID PARTITION: Email đúng format (ví dụ: test@example.com, user.name@domain.co.uk). Tất cả các email trong partition này đều được kỳ vọng sẽ được chấp nhận. (b) INVALID PARTITION 1: Email không có ký tự @ (ví dụ: testexample.com, userdomain.com). Expected: Validation error 'Email must contain @ symbol'. (c) INVALID PARTITION 2: Email không có domain, chỉ có @ (ví dụ: test@, user@). Expected: Validation error 'Email must have a valid domain'. (d) INVALID PARTITION 3: Email không có local part, chỉ có @ và domain (ví dụ: @example.com, @domain.org). Expected: Validation error 'Email must have a local part before @'. (e) INVALID PARTITION 4: Email empty/null (ví dụ: '', null). Expected: Validation error 'Email is required'. (f) INVALID PARTITION 5: Email sai format khác (ví dụ: test@.com (domain bắt đầu bằng dấu chấm), test@@example.com (có 2 ký tự @), test@example (không có TLD), test @example.com (có space)). Expected: Validation error 'Please enter a valid email address'. Ghi lại partitions vào bảng. (3) CHỌN GIÁ TRỊ ĐẠI DIỆN: (a) Valid → 'test@example.com' (email đúng format chuẩn). (b) Invalid 1 → 'testexample.com' (không có @). (c) Invalid 2 → 'test@' (không có domain). (d) Invalid 3 → '@example.com' (không có local part). (e) Invalid 4 → '' (empty). (f) Invalid 5 → 'test@.com' (sai format - domain bắt đầu bằng dấu chấm). (4) VIẾT TEST CASES CHO MỖI PARTITION: Viết 6 test cases chi tiết, mỗi test case cho một partition. Mỗi test case phải có đầy đủ: ID, Description, Preconditions, Test Steps (chi tiết), Test Data (email cụ thể), Expected Result (cụ thể - error message chính xác). Ghi lại tất cả vào document.",
                "BƯỚC 3 - Xác định partitions cho Password field (8-20 ký tự, phải có chữ hoa, chữ thường, số) một cách đầy đủ: (1) PHÂN TÍCH YÊU CẦU: Password phải đáp ứng các điều kiện sau: Độ dài từ 8-20 ký tự (bao gồm cả 8 và 20), Phải có ít nhất một chữ hoa (A-Z), Phải có ít nhất một chữ thường (a-z), Phải có ít nhất một số (0-9). Ghi lại requirement vào document 'EP Analysis - Password Field'. (2) CHIA PARTITIONS: Chia thành các partitions dựa trên các điều kiện: (a) VALID PARTITION: Password đáp ứng TẤT CẢ yêu cầu (ví dụ: 'Password123', 'Test1234', 'MyPass123'). Expected: Accepted. (b) INVALID PARTITION 1: Password có độ dài nhỏ hơn 8 ký tự (ví dụ: 'Pass123' (7 ký tự), 'Test12' (6 ký tự)). Expected: Validation error 'Password must be at least 8 characters'. (c) INVALID PARTITION 2: Password có độ dài lớn hơn 20 ký tự (ví dụ: 'VeryLongPassword1234567890' (21 ký tự)). Expected: Validation error 'Password must not exceed 20 characters'. (d) INVALID PARTITION 3: Password thiếu chữ hoa (ví dụ: 'password123', 'test1234'). Expected: Validation error 'Password must contain at least one uppercase letter'. (e) INVALID PARTITION 4: Password thiếu chữ thường (ví dụ: 'PASSWORD123', 'TEST1234'). Expected: Validation error 'Password must contain at least one lowercase letter'. (f) INVALID PARTITION 5: Password thiếu số (ví dụ: 'Password', 'TestPass'). Expected: Validation error 'Password must contain at least one number'. (g) INVALID PARTITION 6: Password empty/null (ví dụ: '', null). Expected: Validation error 'Password is required'. Lưu ý: Một password có thể vi phạm nhiều điều kiện cùng lúc (ví dụ: 'pass' vừa < 8 ký tự, vừa thiếu chữ hoa, vừa thiếu số), nhưng ta chỉ cần test một lần với partition phù hợp nhất. (3) CHỌN GIÁ TRỊ ĐẠI DIỆN VÀ VIẾT TEST CASES: Với mỗi partition, chọn một giá trị đại diện và viết test case chi tiết. Ví dụ: Valid → 'Password123' (8 ký tự, có chữ hoa, chữ thường, số), Invalid 1 → 'Pass123' (7 ký tự), Invalid 2 → 'VeryLongPassword1234567890' (21 ký tự), Invalid 3 → 'password123' (thiếu chữ hoa), Invalid 4 → 'PASSWORD123' (thiếu chữ thường), Invalid 5 → 'Password' (thiếu số), Invalid 6 → '' (empty). Viết 7 test cases chi tiết với đầy đủ các phần. Ghi lại tất cả vào document.",
                "BƯỚC 4 - Áp dụng EP cho một form thực tế một cách toàn diện: (1) CHỌN FORM: Chọn một form đăng ký/đăng nhập trên website/app bất kỳ (ví dụ: Registration form của Gmail, Facebook, hoặc một website demo). Nếu không có, có thể giả lập dựa trên requirements. (2) XÁC ĐỊNH CÁC FIELD CẦN TEST: Liệt kê tất cả các fields trong form (ví dụ: Username, Email, Password, Confirm Password, Phone Number, Date of Birth, Full Name, v.v.). Với mỗi field, xác định requirements (ví dụ: Username phải có độ dài 5-20 ký tự, Phone phải có 10 số, v.v.). (3) ÁP DỤNG EP CHO MỖI FIELD: Với mỗi field, thực hiện các bước sau: (a) Phân tích yêu cầu của field đó, (b) Chia partitions (Valid và các Invalid partitions), (c) Chọn giá trị đại diện cho mỗi partition, (d) Viết test cases cho mỗi partition. Ví dụ: Username field (5-20 ký tự) → Valid Partition (5-20 ký tự), Invalid Partition 1 (< 5 ký tự), Invalid Partition 2 (> 20 ký tự), Invalid Partition 3 (empty) → 4 test cases. (4) TỔNG HỢP THÀNH BẢNG: Tạo một bảng tổng hợp trong Excel/Google Sheets với các cột: Field Name | Requirement | Valid Partition | Invalid Partitions | Number of Test Cases | Test Case IDs. Ví dụ: Username | 5-20 ký tự | 5-20 ký tự | < 5, > 20, empty | 4 | TC_USER_EP_001-004. (5) MỤC TIÊU: Có ít nhất 15-20 test cases sử dụng EP cho toàn bộ form. Đảm bảo mỗi field đều có ít nhất 1 valid test case và các invalid test cases quan trọng. Ghi lại tất cả vào document 'EP Analysis - Registration Form'.",
                "BƯỚC 5 - So sánh số lượng test cases để thấy rõ lợi ích của EP: (1) TÍNH SỐ LƯỢNG TEST CASES NẾU TEST TẤT CẢ GIÁ TRỊ CÓ THỂ: Ví dụ với Age field (18-65): Nếu test tất cả các giá trị từ 0 đến 100 → Tổng cộng 101 test cases (0, 1, 2, ..., 100). Hoặc với Password field: Nếu test tất cả các combinations có thể (độ dài từ 1-30 ký tự, mỗi ký tự có thể là chữ hoa, chữ thường, số, special character) → Số lượng test cases = hàng triệu, không thể test hết được. Ghi lại số lượng vào bảng so sánh. (2) TÍNH SỐ LƯỢNG TEST CASES KHI DÙNG EP: Ví dụ với Age field: Dùng EP chia thành 3 partitions (Valid, Invalid < 18, Invalid > 65) → Chỉ cần 3 test cases (mỗi partition 1 test case). Với Password field: Dùng EP chia thành 7 partitions → Chỉ cần 7 test cases. Ghi lại số lượng vào bảng so sánh. (3) SO SÁNH VÀ GHI NHẬN SỰ KHÁC BIỆT: Tạo bảng so sánh: Field | Without EP (All Values) | With EP (Partitions) | Reduction | Percentage Saved. Ví dụ: Age | 101 test cases | 3 test cases | 98 test cases saved | 97% reduction. Password | Millions | 7 test cases | Huge reduction | ~99.99% reduction. (4) PHÂN TÍCH LỢI ÍCH: Ghi lại nhận xét: EP giúp giảm số lượng test cases đáng kể (từ hàng trăm/hàng triệu xuống còn vài test cases), nhưng vẫn đảm bảo coverage tốt vì mỗi partition được đại diện bởi ít nhất 1 test case. Điều này giúp tiết kiệm thời gian và chi phí testing rất nhiều. Tuy nhiên, cần lưu ý: EP chỉ test 1 giá trị đại diện cho mỗi partition, nên có thể bỏ sót một số bugs ở các giá trị khác trong cùng partition (nhưng xác suất thấp vì cùng partition có cùng behavior). Để test kỹ hơn, có thể kết hợp EP với BVA (Boundary Value Analysis) để test các giá trị biên của mỗi partition."
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
              "Decision Table là gì? → Decision Table là một bảng thể hiện các quy tắc nghiệp vụ (business rules) dưới dạng các điều kiện (conditions) và hành động (actions) tương ứng. Decision Table giúp test TẤT CẢ các combinations có thể của các điều kiện, đảm bảo KHÔNG BỎ SÓT trường hợp nào. Đây là kỹ thuật rất hữu ích khi có nhiều điều kiện kết hợp với nhau tạo ra các hành động khác nhau. Ví dụ: Login với Remember Me có 2 điều kiện (Valid credentials? Yes/No, Remember Me checked? Yes/No) → 4 combinations cần test (Y-Y, Y-N, N-Y, N-N). Nếu không dùng Decision Table, có thể bỏ sót một số combinations. Decision Table đảm bảo test đầy đủ tất cả các trường hợp có thể. Decision Table phù hợp khi có nhiều điều kiện và các điều kiện này kết hợp với nhau tạo ra các hành động khác nhau (ví dụ: Discount calculation dựa trên nhiều điều kiện: Is VIP member? Y/N, Order amount >= $200? Y/N, Use coupon? Y/N → 8 combinations).",
              "Cấu trúc Decision Table - Các thành phần chính: Decision Table có cấu trúc rõ ràng với 3 thành phần chính: (1) CONDITIONS (Điều kiện) - Các điều kiện đầu vào, mỗi điều kiện có các giá trị Yes/No hoặc True/False (hoặc các giá trị khác tùy theo yêu cầu). Conditions được đặt ở HÀNG TRÊN của bảng. Ví dụ: Condition 1: Valid credentials? (Y/N), Condition 2: Remember Me checked? (Y/N), Condition 3: Account locked? (Y/N). (2) ACTIONS (Hành động) - Các hành động/kết quả tương ứng với mỗi combination của điều kiện. Actions được đặt ở HÀNG DƯỚI của bảng. Ví dụ: Action 1: Login successful, Action 2: Show error message, Action 3: Save cookie, Action 4: Lock account. (3) RULES (Quy tắc) - Mỗi CỘT trong bảng là một rule, thể hiện một combination cụ thể của các điều kiện và hành động tương ứng. Ví dụ: Với 2 điều kiện, mỗi điều kiện có 2 giá trị (Y/N) → 2^2 = 4 rules (Rule 1: Y-Y, Rule 2: Y-N, Rule 3: N-Y, Rule 4: N-N). Mỗi rule có một action tương ứng. Cấu trúc này giúp dễ hiểu, dễ review, và dễ convert thành test cases.",
              "Tại sao dùng Decision Table? → Lợi ích và khi nào nên dùng: (1) ĐẢM BẢO TEST TẤT CẢ COMBINATIONS - Không bỏ sót trường hợp nào. Khi có nhiều điều kiện, số lượng combinations có thể rất lớn (ví dụ: 3 điều kiện → 8 combinations, 4 điều kiện → 16 combinations). Nếu không dùng Decision Table, dễ bỏ sót một số combinations. Decision Table đảm bảo test đầy đủ. (2) DỄ HIỂU, DỄ REVIEW VỚI STAKEHOLDER - Decision Table có cấu trúc rõ ràng, dễ đọc, dễ hiểu. Business Analyst, Product Owner có thể review và xác nhận logic business rules có đúng không. (3) DỄ CONVERT THÀNH TEST CASES - Mỗi rule trong Decision Table tương ứng với một test case. Chỉ cần convert mỗi rule thành một test case là có đầy đủ test cases. (4) PHÙ HỢP VỚI BUSINESS RULES PHỨC TẠP - Khi có nhiều điều kiện kết hợp (ví dụ: Discount calculation, Shipping fee calculation, Access control), Decision Table là công cụ lý tưởng. (5) TRÁNH LỖI LOGIC - Khi vẽ Decision Table, dễ phát hiện lỗi logic (ví dụ: có rule nào không hợp lý không, có thiếu rule nào không). KHI NÀO NÊN DÙNG: Khi có nhiều điều kiện (3+ điều kiện), các điều kiện kết hợp với nhau tạo ra hành động khác nhau, business rules phức tạp. KHI NÀO KHÔNG NÊN DÙNG: Khi chỉ có 1-2 điều kiện đơn giản (có thể dùng EP/BVA thay thế), khi không có điều kiện kết hợp.",
              "Cách tạo Decision Table từng bước chi tiết: (1) LIỆT KÊ TẤT CẢ CONDITIONS (Điều kiện) - Đọc kỹ requirements, xác định tất cả các điều kiện ảnh hưởng đến kết quả. Ví dụ: Login feature có conditions: Valid credentials? (Y/N), Remember Me checked? (Y/N), Account locked? (Y/N). Ghi lại tất cả conditions. (2) XÁC ĐỊNH CÁC GIÁ TRỊ CÓ THỂ CỦA MỖI CONDITION - Thường là Yes/No hoặc True/False, nhưng có thể là các giá trị khác (ví dụ: High/Medium/Low). Ví dụ: Valid credentials? → Y/N, Remember Me? → Y/N. (3) TÍNH SỐ LƯỢNG RULES - Công thức: Nếu có n conditions, mỗi condition có m giá trị → m^n rules. Ví dụ: 2 conditions, mỗi condition có 2 giá trị (Y/N) → 2^2 = 4 rules. 3 conditions, mỗi condition có 2 giá trị → 2^3 = 8 rules. (4) VẼ BẢNG - Vẽ bảng với conditions ở HÀNG TRÊN, actions ở HÀNG DƯỚI, mỗi CỘT là một rule. Số cột = số rules. (5) ĐIỀN Y/N CHO MỖI CONDITION TRONG MỖI RULE - Với mỗi rule (mỗi cột), điền Y hoặc N cho mỗi condition. Đảm bảo không trùng lặp (mỗi combination chỉ xuất hiện một lần). (6) XÁC ĐỊNH ACTION TƯƠNG ỨNG CHO MỖI RULE - Với mỗi rule, xác định action/kết quả tương ứng dựa trên logic business. Ví dụ: Rule 1 (Valid=Y, RememberMe=Y) → Login successful + Save cookie. Rule 2 (Valid=Y, RememberMe=N) → Login successful + No cookie. (7) REVIEW - Kiểm tra xem có đủ tất cả combinations không, actions có đúng logic không, có rule nào không hợp lý không.",
              "Convert Decision Table thành Test Cases - Từng bước cụ thể: Mỗi rule trong Decision Table tương ứng với một test case. Cách convert: (1) VỚI MỖI RULE, TẠO MỘT TEST CASE - Rule 1 → Test Case 1, Rule 2 → Test Case 2, v.v. (2) TEST CASE ID - Đặt tên theo format: TC_FEATURE_DT_001, TC_FEATURE_DT_002, v.v. (DT = Decision Table). (3) DESCRIPTION - Mô tả rule một cách rõ ràng. Ví dụ: 'Login with valid credentials and Remember Me checked' (Rule 1: Valid=Y, RememberMe=Y). (4) TEST STEPS - Thực hiện các điều kiện của rule. Ví dụ: Rule 1 (Valid=Y, RememberMe=Y) → Steps: 'Step 1: Enter valid username, Step 2: Enter valid password, Step 3: Check Remember Me checkbox, Step 4: Click Login button'. (5) EXPECTED RESULT - Hành động tương ứng của rule. Ví dụ: Rule 1 → Expected: 'Login successful, redirect to dashboard, cookie saved (verify by checking browser cookies)'. (6) TEST DATA - Dữ liệu test cụ thể. Ví dụ: Username: 'testuser', Password: 'Test123!'. (7) GHI LẠI TẤT CẢ TEST CASES - Viết tất cả test cases vào document với format nhất quán. Đảm bảo mỗi rule đều có một test case tương ứng. Ví dụ: Với Decision Table Login có 4 rules → 4 test cases. Với Decision Table Shipping có 8 rules → 8 test cases. Điều này đảm bảo test coverage đầy đủ cho tất cả combinations."
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice",
            exercises: [{
              title: "BÀI TẬP: Decision Table - Tạo và áp dụng từng bước chi tiết",
              duration: "2h",
              tasks: [
                "BƯỚC 1 - Tạo Decision Table cho Login với Remember Me một cách chi tiết: (1) PHÂN TÍCH REQUIREMENTS: Đọc kỹ requirements của Login feature với Remember Me. Xác định: Login có 2 điều kiện chính ảnh hưởng đến kết quả: Valid credentials? (Y/N) và Remember Me checked? (Y/N). Ghi lại requirements vào document 'Decision Table Analysis - Login'. (2) XÁC ĐỊNH CONDITIONS: Liệt kê tất cả conditions: Condition 1: Valid credentials? (Y/N) - Credentials có hợp lệ không? Condition 2: Remember Me checked? (Y/N) - User có check Remember Me checkbox không? Ghi lại conditions vào bảng. (3) TÍNH SỐ LƯỢNG RULES: Công thức: n conditions, mỗi condition có 2 giá trị (Y/N) → 2^n rules. Với 2 conditions → 2^2 = 4 rules. Ghi lại: 'Số rules = 4'. (4) VẼ BẢNG DECISION TABLE: Tạo bảng trong Excel/Word với: Hàng 1 (Conditions): Condition 1: Valid credentials? | Condition 2: Remember Me? Hàng 2 (Actions): Action 1: Login result | Action 2: Cookie saved? 4 cột (Rule 1-4). (5) ĐIỀN Y/N CHO MỖI CONDITION TRONG MỖI RULE: Rule 1: Valid=Y, RememberMe=Y; Rule 2: Valid=Y, RememberMe=N; Rule 3: Valid=N, RememberMe=Y; Rule 4: Valid=N, RememberMe=N. Đảm bảo không trùng lặp (mỗi combination chỉ xuất hiện một lần). (6) XÁC ĐỊNH ACTIONS CHO MỖI RULE: Rule 1 (Valid=Y, RememberMe=Y) → Action: Login successful + Save cookie (lưu session, lần sau vẫn login được); Rule 2 (Valid=Y, RememberMe=N) → Action: Login successful + No cookie (không lưu session, lần sau phải login lại); Rule 3 (Valid=N, RememberMe=Y) → Action: Show error 'Invalid credentials' (không login được, không lưu cookie dù có check Remember Me); Rule 4 (Valid=N, RememberMe=N) → Action: Show error 'Invalid credentials' (không login được). (7) GHI LẠI DECISION TABLE: Ghi lại Decision Table hoàn chỉnh vào document với format rõ ràng. Đảm bảo dễ đọc, dễ hiểu.",
                "BƯỚC 2 - Tạo Decision Table cho Shipping calculation với 3 conditions: (1) PHÂN TÍCH REQUIREMENTS: Shipping fee được tính dựa trên 3 điều kiện: Order amount >= $100? (Y/N), Is member? (Y/N), Express shipping? (Y/N). Ghi lại requirements vào document 'Decision Table Analysis - Shipping'. (2) XÁC ĐỊNH CONDITIONS: Condition 1: Order amount >= $100? (Y/N) - Đơn hàng có >= $100 không? Condition 2: Is member? (Y/N) - User có phải member không? Condition 3: Express shipping? (Y/N) - User có chọn express shipping không? (3) TÍNH SỐ LƯỢNG RULES: 3 conditions × 2 values = 2^3 = 8 rules. Ghi lại: 'Số rules = 8'. (4) VẼ BẢNG VỚI 8 CỘT: Tạo bảng với 8 cột (Rule 1-8), điền Y/N cho mỗi condition trong mỗi rule. Đảm bảo cover tất cả combinations: Rule 1: Y-Y-Y, Rule 2: Y-Y-N, Rule 3: Y-N-Y, Rule 4: Y-N-N, Rule 5: N-Y-Y, Rule 6: N-Y-N, Rule 7: N-N-Y, Rule 8: N-N-N. (5) XÁC ĐỊNH ACTIONS (SHIPPING FEE) CHO MỖI RULE dựa trên business logic: Rule 1 (Amount>=100, Member, Express) → Free shipping (member + amount >= $100 = free shipping); Rule 2 (Amount>=100, Member, Standard) → Free shipping (member + amount >= $100 = free shipping); Rule 3 (Amount>=100, Not Member, Express) → $5 (express shipping cho non-member); Rule 4 (Amount>=100, Not Member, Standard) → Free shipping (amount >= $100 = free shipping dù không phải member); Rule 5 (Amount<100, Member, Express) → $3 (express shipping cho member, nhưng amount < $100 nên không free); Rule 6 (Amount<100, Member, Standard) → $2 (standard shipping cho member); Rule 7 (Amount<100, Not Member, Express) → $5 (express shipping cho non-member); Rule 8 (Amount<100, Not Member, Standard) → $3 (standard shipping cho non-member). (6) GHI LẠI DECISION TABLE: Ghi lại Decision Table hoàn chỉnh vào document. Review để đảm bảo logic business đúng.",
                "BƯỚC 3 - Convert Decision Table thành Test Cases chi tiết: Với Decision Table Login với Remember Me đã tạo (4 rules), convert mỗi rule thành một test case chi tiết với đầy đủ các phần: (1) TC_LOGIN_DT_001: Rule 1 (Valid=Y, RememberMe=Y) → Description: 'Login with valid credentials and Remember Me checked', Preconditions: 'User account exists with username: testuser, password: Test123!', Test Steps: 'Step 1: Navigate to login page, Step 2: Enter username: testuser, Step 3: Enter password: Test123!, Step 4: Check Remember Me checkbox, Step 5: Click Login button, Step 6: Wait for page to load, Step 7: Check browser cookies', Test Data: 'Username: testuser, Password: Test123!', Expected Result: 'Login successful, redirect to dashboard page (URL: https://example.com/dashboard), welcome message displays, cookie saved (verify by checking browser cookies - should have session cookie with expiry date in future)'. (2) TC_LOGIN_DT_002: Rule 2 (Valid=Y, RememberMe=N) → Description: 'Login with valid credentials and Remember Me NOT checked', Preconditions: 'User account exists', Test Steps: 'Step 1: Navigate to login page, Step 2: Enter username: testuser, Step 3: Enter password: Test123!, Step 4: Do NOT check Remember Me checkbox, Step 5: Click Login button', Expected Result: 'Login successful, redirect to dashboard page, welcome message displays, NO cookie saved (verify by checking browser cookies - should NOT have session cookie, or cookie expires when browser closes)'. (3) TC_LOGIN_DT_003: Rule 3 (Valid=N, RememberMe=Y) → Description: 'Login with invalid credentials and Remember Me checked', Test Steps: 'Step 1: Navigate to login page, Step 2: Enter username: invaliduser, Step 3: Enter password: WrongPass!, Step 4: Check Remember Me checkbox, Step 5: Click Login button', Expected Result: 'Show error message: Invalid username or password (error message appears in red color below login form), still on login page (URL: https://example.com/login), NO cookie saved (even though Remember Me was checked, because login failed)'. (4) TC_LOGIN_DT_004: Rule 4 (Valid=N, RememberMe=N) → Tương tự Rule 3, nhưng không check Remember Me. Ghi lại tất cả 4 test cases vào document với format nhất quán. Đảm bảo mỗi test case đầy đủ, rõ ràng, có thể thực thi được.",
                "BƯỚC 4 - Tạo Decision Table cho một tính năng khác với 3+ conditions: (1) CHỌN TÍNH NĂNG: Chọn một tính năng có nhiều điều kiện (ví dụ: Discount calculation dựa trên: Is VIP member? Y/N, Order amount >= $200? Y/N, Use coupon? Y/N). Hoặc có thể chọn: Access control (Can view? Y/N, Can edit? Y/N, Is admin? Y/N), Refund policy (Order amount >= $100? Y/N, Is member? Y/N, Within 7 days? Y/N). (2) PHÂN TÍCH REQUIREMENTS: Đọc kỹ requirements, xác định tất cả conditions và actions. Ví dụ với Discount: Condition 1: Is VIP member? (Y/N), Condition 2: Order amount >= $200? (Y/N), Condition 3: Use coupon? (Y/N). Action: Discount % (0%, 5%, 10%, 15%, 20%). (3) TẠO DECISION TABLE: Với 3 conditions → 8 rules. Vẽ bảng với 8 cột, điền Y/N cho mỗi condition. (4) XÁC ĐỊNH ACTIONS (DISCOUNT %) CHO MỖI RULE: Rule 1 (VIP, Amount>=200, Coupon) → 20% discount (VIP + amount >= $200 + coupon = max discount); Rule 2 (VIP, Amount>=200, No Coupon) → 15% discount (VIP + amount >= $200); Rule 3 (VIP, Amount<200, Coupon) → 10% discount (VIP + coupon); Rule 4 (VIP, Amount<200, No Coupon) → 5% discount (VIP only); Rule 5 (Not VIP, Amount>=200, Coupon) → 10% discount (amount >= $200 + coupon); Rule 6 (Not VIP, Amount>=200, No Coupon) → 5% discount (amount >= $200); Rule 7 (Not VIP, Amount<200, Coupon) → 5% discount (coupon only); Rule 8 (Not VIP, Amount<200, No Coupon) → 0% discount (no discount). (5) CONVERT THÀNH TEST CASES: Convert mỗi rule thành một test case chi tiết (8 test cases). Mỗi test case phải có đầy đủ: ID, Description, Preconditions, Test Steps, Test Data, Expected Result. Ghi lại Decision Table và tất cả test cases vào document.",
                "BƯỚC 5 - Review Decision Tables một cách kỹ lưỡng: (1) KIỂM TRA COVERAGE: Xem lại tất cả Decision Tables đã tạo, kiểm tra: (a) Có đủ tất cả combinations không? Với n conditions, mỗi condition có 2 giá trị → phải có 2^n rules. Ví dụ: 2 conditions → 4 rules, 3 conditions → 8 rules. Nếu thiếu, bổ sung thêm. (b) Có rule nào trùng lặp không? Mỗi combination chỉ nên xuất hiện một lần. Nếu trùng, xóa bỏ. (2) KIỂM TRA LOGIC BUSINESS: (a) Actions có đúng logic business không? Ví dụ: Login với valid credentials phải thành công, không thể fail. Nếu logic sai, chỉnh sửa lại. (b) Có rule nào không hợp lý không? Ví dụ: Rule có điều kiện mâu thuẫn. Nếu có, xem xét lại. (c) Có rule nào không thể xảy ra trong thực tế không? Ví dụ: Rule có điều kiện không bao giờ xảy ra cùng lúc. Nếu có, có thể bỏ qua hoặc đánh dấu 'Not Applicable'. (3) KIỂM TRA TEST CASES: (a) Test cases đã convert có đầy đủ không? Mỗi rule phải có một test case tương ứng. Nếu thiếu, bổ sung. (b) Test cases có rõ ràng, có thể thực thi được không? Test Steps có đủ chi tiết không? Expected Result có cụ thể không? Nếu mơ hồ, chỉnh sửa lại. (c) Test cases có trùng lặp không? Mỗi test case phải test một rule cụ thể. Nếu trùng, xóa bỏ hoặc merge. (4) CHỈNH SỬA NẾU CẦN: Sau khi review, chỉnh sửa các phần còn thiếu sót hoặc mơ hồ. Mục tiêu: Decision Tables phải đầy đủ, chính xác, và test cases phải rõ ràng, có thể thực thi được. (5) TỔNG HỢP: Tạo summary: Tổng số Decision Tables đã tạo: X, Tổng số rules: Y, Tổng số test cases: Z. Ghi lại lessons learned: Những gì học được, những khó khăn gặp phải, cách giải quyết."
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
              "State Transition là gì? → State Transition là kỹ thuật test các trạng thái (states) và sự chuyển đổi (transitions) giữa các trạng thái của hệ thống. Một hệ thống có thể ở nhiều trạng thái khác nhau (ví dụ: Order có thể ở trạng thái Pending, Confirmed, Shipped, Delivered, Cancelled), và chuyển từ trạng thái này sang trạng thái khác thông qua các sự kiện (events) hoặc hành động (actions). State Transition Testing giúp test TẤT CẢ các đường đi có thể từ trạng thái này sang trạng thái khác, đảm bảo workflow hoạt động đúng. Đây là kỹ thuật rất hữu ích khi hệ thống có nhiều trạng thái và workflow phức tạp. Ví dụ: Order workflow có nhiều trạng thái và nhiều đường đi: Pending → Confirmed → Shipped → Delivered (happy path), Pending → Cancelled (cancel trước khi confirm), Confirmed → Cancelled (cancel sau khi confirm nhưng trước khi ship). State Transition Testing đảm bảo test tất cả các đường đi này, không chỉ test happy path. Ngoài ra, State Transition Testing còn giúp test các trường hợp INVALID TRANSITION (ví dụ: không thể chuyển từ Delivered về Shipped, không thể chuyển từ Cancelled về Pending) - đây là những bugs quan trọng cần tìm.",
              "State (Trạng thái) là gì? → State là trạng thái hiện tại của hệ thống/object tại một thời điểm cụ thể. Mỗi state đại diện cho một tình trạng của hệ thống, với các thuộc tính và hành vi riêng. VÍ DỤ CỤ THỂ: (1) Order States: Pending (đơn hàng mới tạo, chờ xác nhận - có thể confirm hoặc cancel), Confirmed (đã xác nhận, chờ ship - có thể ship hoặc cancel), Shipped (đã ship, đang giao - có thể deliver hoặc fail delivery), Delivered (đã giao thành công - final state, không thể chuyển sang state khác), Cancelled (đã hủy - final state, không thể chuyển sang state khác). (2) User Account States: Active (tài khoản hoạt động bình thường), Suspended (tài khoản bị tạm khóa - có thể activate lại), Deactivated (tài khoản bị vô hiệu hóa - có thể activate lại), Banned (tài khoản bị cấm vĩnh viễn - final state). (3) Payment States: Pending (thanh toán đang chờ xử lý), Processing (đang xử lý), Success (thanh toán thành công), Failed (thanh toán thất bại - có thể retry). Mỗi state có các thuộc tính riêng (ví dụ: Order Pending có thể edit, Order Shipped không thể edit) và hành vi riêng (ví dụ: Order Pending có thể cancel, Order Delivered không thể cancel). Hiểu rõ các states giúp xác định đúng test cases.",
              "Transition (Chuyển đổi) là gì? → Transition là sự chuyển từ trạng thái này sang trạng thái khác. Mỗi transition được kích hoạt bởi một event (sự kiện) hoặc action (hành động). Có 2 loại transition: (1) VALID TRANSITION - Các transition hợp lệ, được phép xảy ra. Ví dụ: Pending → Confirmed (khi admin confirm order), Confirmed → Shipped (khi admin ship order), Shipped → Delivered (khi delivery successful), Pending → Cancelled (khi user/admin cancel order). (2) INVALID TRANSITION - Các transition không hợp lệ, KHÔNG được phép xảy ra. Ví dụ: Delivered → Shipped (không thể chuyển từ Delivered về Shipped), Cancelled → Pending (không thể chuyển từ Cancelled về Pending), Shipped → Confirmed (không thể chuyển từ Shipped về Confirmed). Test cả valid và invalid transitions là quan trọng - invalid transitions có thể là bugs nghiêm trọng (ví dụ: nếu cho phép chuyển từ Delivered về Shipped, có thể gây nhầm lẫn và lỗi business logic). Mỗi transition có điều kiện cụ thể (ví dụ: Pending → Confirmed chỉ xảy ra khi admin có quyền confirm, Confirmed → Shipped chỉ xảy ra khi payment đã thành công). Hiểu rõ các transitions giúp xác định đúng test cases.",
              "Event (Sự kiện) là gì? → Event là hành động hoặc điều kiện gây ra transition (chuyển đổi giữa các states). Event có thể là: (1) USER ACTION - Hành động của người dùng. Ví dụ: Click 'Confirm Order' button (gây ra transition Pending → Confirmed), Click 'Cancel Order' button (gây ra transition Pending → Cancelled hoặc Confirmed → Cancelled), Click 'Ship Order' button (gây ra transition Confirmed → Shipped). (2) SYSTEM EVENT - Sự kiện của hệ thống. Ví dụ: Payment successful (gây ra transition Pending → Confirmed), Delivery successful (gây ra transition Shipped → Delivered), Payment failed (gây ra transition Pending → Failed). (3) BUSINESS CONDITION - Điều kiện nghiệp vụ. Ví dụ: Order amount >= $100 (có thể gây ra transition khác so với order amount < $100), User is VIP member (có thể có transition đặc biệt). Mỗi event có thể gây ra một hoặc nhiều transitions tùy theo điều kiện. Ví dụ: Click 'Cancel Order' button có thể gây ra Pending → Cancelled (nếu order ở state Pending) hoặc Confirmed → Cancelled (nếu order ở state Confirmed), nhưng không thể gây ra Shipped → Cancelled (nếu order đã ship thì không thể cancel nữa). Hiểu rõ các events giúp xác định đúng test cases - test mỗi event trong mỗi state có thể xảy ra.",
              "State Diagram - Cách biểu diễn trực quan và cách vẽ: State Diagram là cách biểu diễn trực quan các states và transitions bằng các hình tròn (states) và mũi tên (transitions). State Diagram giúp: (1) Dễ hiểu workflow - Nhìn vào diagram là hiểu ngay workflow, các states, và cách chuyển đổi, (2) Dễ xác định test cases - Dễ dàng xác định các test cases cần test (happy path, valid transitions, invalid transitions), (3) Dễ review với stakeholder - Business Analyst, Product Owner có thể review và xác nhận workflow có đúng không. CÁCH VẼ STATE DIAGRAM TỪNG BƯỚC: (1) XÁC ĐỊNH TẤT CẢ STATES - Liệt kê tất cả các states có thể có. Ví dụ: Order có states: Pending, Confirmed, Shipped, Delivered, Cancelled. (2) VẼ HÌNH TRÒN CHO MỖI STATE - Vẽ một hình tròn cho mỗi state, ghi tên state bên trong. (3) XÁC ĐỊNH TẤT CẢ TRANSITIONS - Liệt kê tất cả các transitions có thể (valid transitions). Ví dụ: Pending → Confirmed, Confirmed → Shipped, Shipped → Delivered, Pending → Cancelled, Confirmed → Cancelled. (4) VẼ MŨI TÊN TỪ STATE NÀY SANG STATE KHÁC - Vẽ mũi tên từ state này sang state khác cho mỗi valid transition. (5) GHI EVENT/ACTION TRÊN MŨI TÊN - Ghi event/action gây ra transition trên mũi tên. Ví dụ: Trên mũi tên Pending → Confirmed, ghi 'Admin confirm order'. (6) XÁC ĐỊNH INITIAL STATE - Xác định state ban đầu (initial state) - thường là state đầu tiên. Ví dụ: Order initial state là Pending. (7) XÁC ĐỊNH FINAL STATES - Xác định các states kết thúc (final states) - không thể chuyển sang state khác. Ví dụ: Order final states là Delivered và Cancelled. (8) REVIEW - Kiểm tra xem có đủ tất cả states không, có đủ tất cả valid transitions không, có thiếu gì không. State Diagram hoàn chỉnh sẽ giúp dễ dàng xác định test cases."
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice",
            exercises: [{
              title: "BÀI TẬP: State Transition - Vẽ State Diagram và tạo Test Cases từng bước",
              duration: "2h",
              tasks: [
                "BƯỚC 1 - Vẽ State Diagram cho Order status một cách chi tiết: (1) PHÂN TÍCH REQUIREMENTS: Đọc kỹ requirements của Order management system. Xác định: Order có những trạng thái nào? Có thể chuyển đổi như thế nào? Ghi lại requirements vào document 'State Transition Analysis - Order Status'. (2) XÁC ĐỊNH CÁC STATES: Liệt kê tất cả các states có thể có: (a) Pending (đơn hàng mới tạo, chờ xác nhận) - Order vừa được tạo, chưa được xác nhận, có thể confirm hoặc cancel, (b) Confirmed (đã xác nhận, chờ ship) - Order đã được admin xác nhận, chờ ship, có thể ship hoặc cancel (trước khi ship), (c) Shipped (đã ship, đang giao) - Order đã được ship, đang trên đường giao, có thể deliver hoặc fail delivery, (d) Delivered (đã giao thành công) - Order đã được giao thành công, final state, không thể chuyển sang state khác, (e) Cancelled (đã hủy) - Order đã bị hủy, final state, không thể chuyển sang state khác. Ghi lại tất cả states với mô tả chi tiết. (3) XÁC ĐỊNH CÁC TRANSITIONS VÀ EVENTS: Với mỗi transition, xác định event gây ra: (a) Pending → Confirmed (event: 'Admin confirm order' - Admin click Confirm Order button), (b) Confirmed → Shipped (event: 'Admin ship order' - Admin click Ship Order button, sau khi payment successful), (c) Shipped → Delivered (event: 'Delivery successful' - Delivery person confirm delivery, hoặc system auto-update sau khi tracking shows delivered), (d) Pending → Cancelled (event: 'User/Admin cancel order' - User hoặc Admin click Cancel Order button), (e) Confirmed → Cancelled (event: 'User/Admin cancel before ship' - User hoặc Admin cancel order sau khi confirm nhưng trước khi ship). Ghi lại tất cả transitions và events. (4) VẼ STATE DIAGRAM: Vẽ State Diagram bằng tay hoặc dùng tool (draw.io, Lucidchart, hoặc PowerPoint): (a) Vẽ 5 hình tròn (mỗi hình tròn = 1 state), ghi tên state bên trong, (b) Vẽ mũi tên giữa các states (mỗi mũi tên = 1 valid transition), (c) Ghi event/action trên mũi tên (ví dụ: trên mũi tên Pending → Confirmed, ghi 'Admin confirm order'), (d) Xác định initial state (Pending) - đánh dấu bằng mũi tên vào từ ngoài, (e) Xác định final states (Delivered, Cancelled) - đánh dấu bằng double circle hoặc ghi 'Final'. (5) GHI LẠI STATE DIAGRAM: Chụp ảnh hoặc export State Diagram, ghi lại vào document. Đảm bảo rõ ràng, dễ đọc.",
                "BƯỚC 2 - Xác định test cases từ State Diagram một cách toàn diện: Với State Diagram Order status đã vẽ, xác định các test cases để cover tất cả transitions: (1) HAPPY PATH (Workflow thành công): Test case cho toàn bộ workflow từ đầu đến cuối: Pending → Confirmed → Shipped → Delivered. Đây là flow chính, quan trọng nhất. Test case này verify toàn bộ workflow hoạt động đúng. (2) VALID TRANSITIONS (Các transition hợp lệ): Test case cho mỗi valid transition: (a) TC_ORDER_ST_002: Pending → Confirmed (Admin confirm order), (b) TC_ORDER_ST_003: Confirmed → Shipped (Admin ship order), (c) TC_ORDER_ST_004: Shipped → Delivered (Delivery successful), (d) TC_ORDER_ST_005: Pending → Cancelled (User/Admin cancel order), (e) TC_ORDER_ST_006: Confirmed → Cancelled (User/Admin cancel before ship). Mỗi transition cần một test case riêng để verify transition đó hoạt động đúng. (3) INVALID TRANSITIONS (Các transition không hợp lệ): Test case cho các transition KHÔNG được phép xảy ra: (a) TC_ORDER_ST_007: Delivered → Shipped (Không thể chuyển từ Delivered về Shipped - đã giao rồi không thể ship lại), (b) TC_ORDER_ST_008: Cancelled → Pending (Không thể chuyển từ Cancelled về Pending - đã hủy không thể khôi phục), (c) TC_ORDER_ST_009: Shipped → Confirmed (Không thể chuyển từ Shipped về Confirmed - đã ship không thể quay lại), (d) TC_ORDER_ST_010: Delivered → Cancelled (Không thể cancel order đã delivered), (e) TC_ORDER_ST_011: Shipped → Pending (Không thể quay lại Pending từ Shipped). Test các invalid transitions là quan trọng để đảm bảo hệ thống không cho phép các transition không hợp lệ (nếu cho phép = bug nghiêm trọng). (4) GHI LẠI TẤT CẢ TEST CASES: Liệt kê tất cả test cases đã xác định vào document với format: Test Case ID | Description | States | Expected Result. Tổng cộng nên có ít nhất 10-15 test cases (1 happy path + 5 valid transitions + 5-10 invalid transitions).",
                "BƯỚC 3 - Viết test cases chi tiết với đầy đủ các phần: Với mỗi test case đã xác định ở Bước 2, viết chi tiết theo template Test Case chuẩn: (1) TC_ORDER_ST_001: HAPPY PATH - Pending → Confirmed → Shipped → Delivered. Description: 'Verify complete order workflow from Pending to Delivered', Preconditions: 'Admin account exists, User account exists, Payment gateway is available', Test Steps: 'Step 1: User creates order (state: Pending) - User adds items to cart, clicks Checkout, enters shipping info, clicks Place Order. Verify: Order status = Pending, UI shows Pending status. Step 2: Admin confirms order (state: Confirmed) - Admin logs in, navigates to Orders page, finds the order, clicks Confirm Order button. Verify: Order status = Confirmed, UI shows Confirmed status, User receives confirmation email. Step 3: Admin ships order (state: Shipped) - Admin clicks Ship Order button, enters tracking number, clicks Confirm Ship. Verify: Order status = Shipped, UI shows Shipped status with tracking number, User receives shipping email with tracking info. Step 4: Delivery successful (state: Delivered) - Delivery person confirms delivery, or system auto-updates after tracking shows delivered. Verify: Order status = Delivered, UI shows Delivered status, User receives delivery confirmation email.', Expected Result: 'Order chuyển đúng state ở mỗi bước (Pending → Confirmed → Shipped → Delivered), UI hiển thị đúng status ở mỗi bước, emails được gửi đúng lúc, không có lỗi xảy ra trong suốt workflow'. (2) TC_ORDER_ST_007: INVALID TRANSITION - Delivered → Shipped. Description: 'Verify system does NOT allow transition from Delivered to Shipped', Preconditions: 'Order exists in Delivered state', Test Steps: 'Step 1: Admin logs in, Step 2: Admin navigates to Orders page, Step 3: Admin finds order with status Delivered, Step 4: Admin tries to change status to Shipped (if there is a button/option to do so), Step 5: Observe the result', Expected Result: 'System does NOT allow transition: Either (a) No button/option to change status to Shipped is available, or (b) If button exists, clicking it shows error message: Cannot change status from Delivered to Shipped. Order has already been delivered. Order status remains Delivered, UI still shows Delivered status'. (3) Viết tương tự cho các test cases khác. Mỗi test case phải có đầy đủ: ID, Description, Preconditions, Test Steps (rất chi tiết), Test Data, Expected Result (cụ thể). Ghi lại tất cả test cases vào document.",
                "BƯỚC 4 - Tạo State Diagram cho một tính năng khác và viết test cases: (1) CHỌN TÍNH NĂNG: Chọn một tính năng có nhiều trạng thái. Ví dụ: (a) User account status: Active (tài khoản hoạt động bình thường), Suspended (tài khoản bị tạm khóa - có thể activate lại), Deactivated (tài khoản bị vô hiệu hóa - có thể activate lại), Banned (tài khoản bị cấm vĩnh viễn - final state). Hoặc (b) Payment status: Pending (thanh toán đang chờ xử lý), Processing (đang xử lý), Success (thanh toán thành công), Failed (thanh toán thất bại - có thể retry), Refunded (đã hoàn tiền - final state). (2) PHÂN TÍCH VÀ XÁC ĐỊNH STATES: Với tính năng đã chọn, xác định tất cả states có thể có. Ví dụ với User account: Active, Suspended, Deactivated, Banned. Ghi lại mô tả chi tiết cho mỗi state. (3) XÁC ĐỊNH TRANSITIONS VÀ EVENTS: Với mỗi transition, xác định event gây ra. Ví dụ: Active → Suspended (event: 'Admin suspend account'), Suspended → Active (event: 'Admin activate account'), Active → Deactivated (event: 'User deactivate account'), Deactivated → Active (event: 'User reactivate account'), Active → Banned (event: 'Admin ban account - for serious violations'). (4) VẼ STATE DIAGRAM: Vẽ State Diagram tương tự như Bước 1. Xác định initial state (thường là Active), final states (Banned). (5) XÁC ĐỊNH TEST CASES: Xác định test cases tương tự như Bước 2: Happy path, valid transitions, invalid transitions. Ví dụ invalid transitions: Banned → Active (không thể activate account đã bị ban), Suspended → Banned (có thể hoặc không thể, tùy business logic). (6) VIẾT TEST CASES CHI TIẾT: Viết test cases chi tiết tương tự như Bước 3. Mỗi test case phải đầy đủ, rõ ràng. (7) GHI LẠI: Ghi lại State Diagram và tất cả test cases vào document. Tổng cộng nên có ít nhất 10-15 test cases.",
                "BƯỚC 5 - Review State Diagrams và test cases một cách kỹ lưỡng: (1) KIỂM TRA STATE DIAGRAM: (a) Có đủ tất cả states không? Xem lại requirements, đảm bảo không thiếu state nào. Nếu thiếu, bổ sung thêm. (b) Có đủ tất cả valid transitions không? Với mỗi state, xác định có thể chuyển sang states nào. Đảm bảo không thiếu transition hợp lệ nào. (c) Có xác định invalid transitions không? Xác định các transition KHÔNG được phép xảy ra. Đây là phần quan trọng để tìm bugs. (d) Events có rõ ràng không? Mỗi transition phải có event cụ thể gây ra. Nếu mơ hồ, làm rõ. (2) KIỂM TRA TEST CASES: (a) Test cases đã cover tất cả transitions chưa? Mỗi valid transition phải có ít nhất 1 test case, mỗi invalid transition quan trọng cũng nên có test case. (b) Test cases có đầy đủ không? Mỗi test case phải có đầy đủ: ID, Description, Preconditions, Test Steps (chi tiết), Expected Result (cụ thể). (c) Test cases có rõ ràng, có thể thực thi được không? Một Tester khác đọc có thể thực hiện được không? Nếu mơ hồ, chỉnh sửa lại. (d) Có test case nào trùng lặp không? Mỗi test case phải test một transition cụ thể. Nếu trùng, xóa bỏ hoặc merge. (3) CHỈNH SỬA NẾU CẦN: Sau khi review, chỉnh sửa các phần còn thiếu sót hoặc mơ hồ. Mục tiêu: State Diagrams phải đầy đủ, chính xác, và test cases phải rõ ràng, có thể thực thi được, cover đầy đủ tất cả transitions. (4) TỔNG HỢP: Tạo summary: Tổng số State Diagrams đã tạo: X, Tổng số states: Y, Tổng số transitions: Z (valid + invalid), Tổng số test cases: W. Ghi lại lessons learned: Những gì học được về State Transition Testing, những khó khăn gặp phải, cách giải quyết."
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
              "Bug Life Cycle - Quy trình theo dõi bug từ đầu đến cuối: Bug Life Cycle là quy trình theo dõi bug từ khi được phát hiện (discovered) đến khi được fix và đóng (closed). Hiểu Bug Life Cycle giúp Tester biết bug đang ở trạng thái nào, ai đang xử lý, và cần làm gì tiếp theo. CÁC TRẠNG THÁI CHÍNH VÀ WORKFLOW: (1) NEW - Bug mới được Tester tìm thấy và report. Bug ở trạng thái này chờ được review bởi QA Lead hoặc Developer để xác nhận có phải bug không, và chờ được assign. Tester cần: Đảm bảo bug report đầy đủ, rõ ràng trước khi submit. (2) ASSIGNED - Bug được assign cho một Developer cụ thể để fix. QA Lead hoặc Project Manager assign bug dựa trên expertise và workload. Developer nhận được notification và bắt đầu xử lý. Tester cần: Theo dõi bug, sẵn sàng trả lời câu hỏi nếu Developer cần làm rõ. (3) OPEN/IN PROGRESS - Developer đang xử lý bug, đang fix code. Bug ở trạng thái này cho thấy đang được xử lý tích cực. Developer có thể thêm comment về tiến độ. Tester cần: Chờ Developer fix, không cần làm gì, nhưng có thể check status thường xuyên. (4) FIXED/RESOLVED - Developer đã fix bug và mark là Fixed. Developer thường thêm comment về cách fix (ví dụ: 'Fixed in commit abc123', 'Fixed by changing validation logic'). Bug chờ Tester retest để verify fix. Tester cần: Retest bug ngay để verify fix có đúng không. (5) RETEST - Tester đang test lại để verify bug đã được fix đúng chưa. Tester thực hiện lại steps to reproduce, kiểm tra xem bug còn xuất hiện không. Nếu bug đã được fix → chuyển sang Closed. Nếu bug vẫn còn hoặc xuất hiện lại → chuyển sang Reopened. Tester cần: Test kỹ, không chỉ test happy path mà còn test các edge cases liên quan. (6) CLOSED - Bug đã được fix và verify thành công. Bug được đóng, không cần xử lý nữa. Tester cần: Đảm bảo bug thực sự đã được fix trước khi close. (7) REOPENED - Bug bị reopen nếu fix không đúng hoặc bug xuất hiện lại sau khi đã closed. Bug quay lại trạng thái Open để Developer fix lại. Tester cần: Retest lại sau khi Developer fix lại. (8) DEFERRED/POSTPONED - Bug bị hoãn lại, không fix trong sprint này, sẽ fix sau. Thường là bug Low Priority, không ảnh hưởng nhiều đến release. Tester cần: Theo dõi để đảm bảo bug được fix trong sprint sau. (9) REJECTED/DUPLICATE - Bug bị reject (không phải bug, hoặc không fix theo design) hoặc trùng lặp với bug khác. Bug bị đóng mà không fix. Tester cần: Nếu bug bị reject không đúng, có thể thảo luận với Developer/PO. WORKFLOW CHÍNH: New → Assigned → Open → Fixed → Retest → Closed. Bug có thể bị Reopened, Deferred, hoặc Rejected tùy tình huống. Hiểu Bug Life Cycle giúp Tester: biết bug đang ở đâu, cần làm gì tiếp theo, theo dõi tiến độ fix bugs, giao tiếp tốt với Developer về bug status.",
              "Bug Report structure - Cấu trúc đầy đủ và từng phần chi tiết: Một Bug Report tốt phải có đầy đủ các phần sau để Developer có thể hiểu và fix bug nhanh chóng. Mỗi phần đều quan trọng: (1) BUG ID/TITLE - Mã định danh duy nhất (ví dụ: BUG-001, WEB-123) và tiêu đề ngắn gọn, rõ ràng trong 1 câu. Title phải mô tả được vấn đề chính. Ví dụ tốt: 'Login button không hoạt động khi click', 'Search không trả về kết quả với keyword hợp lệ'. Ví dụ tệ: 'Bug', 'Login có vấn đề', 'Không hoạt động'. (2) DESCRIPTION - Mô tả chi tiết bug: bug là gì, xảy ra ở đâu (module/feature), khi nào (trong điều kiện nào). Mô tả rõ ràng, không mơ hồ. Ví dụ: 'Login button không phản hồi khi user click. Button không có visual feedback (không highlight), không có action nào xảy ra, user vẫn ở trang Login.' (3) ENVIRONMENT - Môi trường test: OS (Windows 10, macOS Ventura, Linux Ubuntu), Browser (Chrome 120.0, Firefox 119.0, Safari 17.0), Version (nếu có, ví dụ: App version 1.2.3), Device (Desktop, Mobile iPhone 14, Tablet iPad). Environment quan trọng vì bug có thể chỉ xảy ra trên một môi trường cụ thể. (4) PRECONDITIONS - Điều kiện ban đầu cần có trước khi reproduce bug. Ví dụ: 'User account exists with username: testuser, password: Test123!', 'User is on Login page (URL: https://example.com/login)', 'Browser is opened and ready', 'No previous session exists'. (5) STEPS TO REPRODUCE - Các bước chi tiết để reproduce bug, đánh số 1, 2, 3... Mỗi bước phải rất cụ thể. Ví dụ: 'Step 1: Navigate to https://example.com/login, Step 2: Locate Username field (located at top of the form), Step 3: Enter username: testuser, Step 4: Locate Password field (located below Username field), Step 5: Enter password: Test123!, Step 6: Locate Login button (located at bottom center of the form), Step 7: Click Login button, Step 8: Wait 2-3 seconds, Step 9: Observe the result'. Steps phải đủ chi tiết để Developer có thể reproduce được mà không cần hỏi thêm. (6) EXPECTED RESULT - Kết quả mong đợi, rõ ràng, không mơ hồ. Ví dụ: 'User should be redirected to dashboard page, URL changes to https://example.com/dashboard, welcome message displays: Welcome, testuser!, user profile icon appears in top right corner'. (7) ACTUAL RESULT - Kết quả thực tế, mô tả chính xác những gì xảy ra. Ví dụ: 'Login button không phản hồi, không có visual feedback, không có action nào xảy ra, user vẫn ở trang Login (URL: https://example.com/login), no error message displayed, no page reload'. Actual Result phải chính xác, không suy đoán. (8) SEVERITY - Mức độ nghiêm trọng: Critical (hệ thống crash, mất dữ liệu), High (chức năng chính không hoạt động), Medium (chức năng phụ không hoạt động), Low (UI/UX issues nhỏ). (9) PRIORITY - Mức độ ưu tiên: P1 (fix ngay lập tức), P2 (fix trong sprint này), P3 (fix trong sprint sau), P4 (fix khi có thời gian). (10) ATTACHMENTS - Screenshot, video, log files nếu có. Attachments giúp Developer hiểu rõ hơn về bug. Bug Report tốt giúp Developer hiểu và fix bug nhanh chóng, giảm thời gian trao đổi.",
              "Severity vs Priority - Phân biệt rõ ràng và cách đánh giá đúng: Severity (Mức độ nghiêm trọng) và Priority (Mức độ ưu tiên) là hai khái niệm KHÁC NHAU, nhưng thường bị nhầm lẫn. Hiểu rõ sự khác biệt giúp đánh giá bug đúng và bug được xử lý đúng thứ tự ưu tiên. SEVERITY đo lường TÁC ĐỘNG của bug lên hệ thống/người dùng: (1) CRITICAL - Bug nghiêm trọng nhất: Hệ thống crash, mất dữ liệu, không thể sử dụng được. Ví dụ: 'Login không hoạt động - không ai login được', 'Database bị xóa dữ liệu', 'Payment không hoạt động - không ai thanh toán được', 'App crash khi mở'. Critical bugs phải fix ngay, không thể release với Critical bugs. (2) HIGH - Bug nghiêm trọng: Chức năng chính không hoạt động, ảnh hưởng nhiều người dùng. Ví dụ: 'Search không hoạt động', 'Add to Cart không hoạt động', 'Checkout không hoạt động', 'Profile không load được'. High bugs ảnh hưởng nghiêm trọng đến user experience. (3) MEDIUM - Bug vừa phải: Chức năng phụ không hoạt động hoặc có workaround. Ví dụ: 'Forgot Password không gửi email', 'Profile picture không upload được', 'Filter không hoạt động', 'Export không hoạt động'. Medium bugs có thể có workaround, không block release nhưng nên fix. (4) LOW - Bug nhỏ: UI/UX issues nhỏ, typos, không ảnh hưởng chức năng. Ví dụ: 'Button không align đúng', 'Typo trong error message', 'Màu sắc không đúng', 'Spacing không đều'. Low bugs không ảnh hưởng chức năng, có thể fix sau. PRIORITY đo lường MỨC ĐỘ CẦN THIẾT phải fix bug ngay: (1) P1 - Fix ngay lập tức: Bug blocking release, ảnh hưởng demo quan trọng, ảnh hưởng nhiều users. (2) P2 - Fix trong sprint này: Bug quan trọng, nên fix sớm, nhưng không blocking release. (3) P3 - Fix trong sprint sau: Bug không urgent, có thể fix sau, không ảnh hưởng release hiện tại. (4) P4 - Fix khi có thời gian: Bug nhỏ, fix khi rảnh, không quan trọng. SEVERITY VÀ PRIORITY CÓ THỂ KHÁC NHAU: Ví dụ: Bug Low Severity (typo trong error message) nhưng High Priority (P1) nếu ảnh hưởng đến demo cho khách hàng quan trọng. Bug High Severity (Search không hoạt động) nhưng Low Priority (P3) nếu không có nhiều người dùng Search và có thể fix sau. Tester cần đánh giá cả hai để bug được xử lý đúng thứ tự ưu tiên. Thông thường: Critical/High Severity → P1/P2 Priority, Medium Severity → P2/P3 Priority, Low Severity → P3/P4 Priority. Nhưng có thể khác tùy tình huống."
            ],
            concepts: [
              "Bug Life Cycle là gì? → Bug Life Cycle là quy trình theo dõi bug từ khi được phát hiện (discovered) đến khi được fix và đóng (closed). Hiểu Bug Life Cycle giúp Tester biết bug đang ở trạng thái nào và cần làm gì tiếp theo. CÁC TRẠNG THÁI CHÍNH: (1) NEW - Bug mới được Tester tìm thấy và report. Bug ở trạng thái này chờ được review và assign. (2) ASSIGNED - Bug được assign cho một Developer cụ thể để fix. Developer nhận được notification và bắt đầu xử lý. (3) OPEN/IN PROGRESS - Developer đang xử lý bug, đang fix code. Bug ở trạng thái này cho thấy đang được xử lý. (4) FIXED/RESOLVED - Developer đã fix bug và mark là Fixed. Bug chờ Tester retest để verify fix. (5) RETEST - Tester đang test lại để verify bug đã được fix đúng chưa. (6) CLOSED - Bug đã được fix và verify thành công. Bug được đóng, không cần xử lý nữa. (7) REOPENED - Bug bị reopen nếu fix không đúng hoặc bug xuất hiện lại sau khi đã closed. Bug quay lại trạng thái Open để fix lại. (8) DEFERRED/POSTPONED - Bug bị hoãn lại, không fix trong sprint này, sẽ fix sau. Thường là bug Low Priority, không ảnh hưởng nhiều. (9) REJECTED/DUPLICATE - Bug bị reject (không phải bug, hoặc không fix) hoặc trùng lặp với bug khác. Bug bị đóng mà không fix. WORKFLOW CHÍNH: New → Assigned → Open → Fixed → Retest → Closed. Bug có thể bị Reopened, Deferred, hoặc Rejected tùy tình huống. Hiểu Bug Life Cycle giúp Tester: biết bug đang ở đâu, cần làm gì tiếp theo (ví dụ: bug ở Fixed → cần retest, bug ở Reopened → cần test lại), theo dõi tiến độ fix bugs.",
              "Bug Report structure - Cấu trúc đầy đủ và chi tiết: Một Bug Report tốt phải có đầy đủ các phần sau để Developer có thể hiểu và fix bug nhanh chóng: (1) BUG ID/TITLE - Mã định danh duy nhất (ví dụ: BUG-001, WEB-123) và tiêu đề ngắn gọn, rõ ràng trong 1 câu (ví dụ: 'Login button không hoạt động khi click'). Title phải mô tả được vấn đề chính. (2) DESCRIPTION - Mô tả chi tiết bug: bug là gì, xảy ra ở đâu, khi nào. Mô tả rõ ràng, không mơ hồ. (3) ENVIRONMENT - Môi trường test: OS (Windows 10, macOS, Linux), Browser (Chrome 120, Firefox 119, Safari 17), Version (nếu có), Device (Desktop, Mobile, Tablet). Environment quan trọng vì bug có thể chỉ xảy ra trên một môi trường cụ thể. (4) PRECONDITIONS - Điều kiện ban đầu cần có trước khi reproduce bug (ví dụ: 'User account exists, User is on Login page, Browser is opened'). (5) STEPS TO REPRODUCE - Các bước chi tiết để reproduce bug, đánh số 1, 2, 3... Mỗi bước phải rất cụ thể (ví dụ: 'Step 1: Navigate to https://example.com/login, Step 2: Enter username: testuser, Step 3: Enter password: Test123!, Step 4: Click Login button'). Steps phải đủ chi tiết để Developer có thể reproduce được. (6) EXPECTED RESULT - Kết quả mong đợi, rõ ràng, không mơ hồ (ví dụ: 'User should be redirected to dashboard page, URL: https://example.com/dashboard, welcome message displays'). (7) ACTUAL RESULT - Kết quả thực tế, mô tả chính xác những gì xảy ra (ví dụ: 'Login button không phản hồi, không có gì xảy ra, vẫn ở trang Login'). Actual Result phải chính xác, không suy đoán. (8) SEVERITY - Mức độ nghiêm trọng: Critical (hệ thống crash, mất dữ liệu), High (chức năng chính không hoạt động), Medium (chức năng phụ không hoạt động), Low (UI/UX issues nhỏ). (9) PRIORITY - Mức độ ưu tiên: P1 (fix ngay lập tức), P2 (fix trong sprint này), P3 (fix trong sprint sau), P4 (fix khi có thời gian). (10) ATTACHMENTS - Screenshot, video, log files nếu có. Attachments giúp Developer hiểu rõ hơn về bug. Bug Report tốt giúp Developer hiểu và fix bug nhanh chóng, giảm thời gian trao đổi.",
              "Severity vs Priority - Phân biệt rõ ràng và cách đánh giá: Severity (Mức độ nghiêm trọng) và Priority (Mức độ ưu tiên) là hai khái niệm khác nhau, nhưng thường bị nhầm lẫn. SEVERITY đo lường TÁC ĐỘNG của bug lên hệ thống/người dùng: (1) CRITICAL - Bug nghiêm trọng nhất: Hệ thống crash, mất dữ liệu, không thể sử dụng được. Ví dụ: 'Login không hoạt động - không ai login được', 'Database bị xóa dữ liệu', 'Payment không hoạt động - không ai thanh toán được'. (2) HIGH - Bug nghiêm trọng: Chức năng chính không hoạt động, ảnh hưởng nhiều người dùng. Ví dụ: 'Search không hoạt động', 'Add to Cart không hoạt động', 'Checkout không hoạt động'. (3) MEDIUM - Bug vừa phải: Chức năng phụ không hoạt động hoặc có workaround. Ví dụ: 'Forgot Password không gửi email', 'Profile picture không upload được', 'Filter không hoạt động'. (4) LOW - Bug nhỏ: UI/UX issues nhỏ, typos, không ảnh hưởng chức năng. Ví dụ: 'Button không align đúng', 'Typo trong error message', 'Màu sắc không đúng'. PRIORITY đo lường MỨC ĐỘ CẦN THIẾT phải fix bug ngay: (1) P1 - Fix ngay lập tức: Bug blocking release, ảnh hưởng demo quan trọng. (2) P2 - Fix trong sprint này: Bug quan trọng, nên fix sớm. (3) P3 - Fix trong sprint sau: Bug không urgent, có thể fix sau. (4) P4 - Fix khi có thời gian: Bug nhỏ, fix khi rảnh. SEVERITY VÀ PRIORITY CÓ THỂ KHÁC NHAU: Ví dụ: Bug Low Severity (typo) nhưng High Priority (P1) nếu ảnh hưởng đến demo cho khách hàng quan trọng. Bug High Severity (Search không hoạt động) nhưng Low Priority (P3) nếu không có nhiều người dùng Search. Tester cần đánh giá cả hai để bug được xử lý đúng thứ tự ưu tiên.",
              "Tại sao Bug Report quan trọng? → Bug Report là cách giao tiếp CHÍNH giữa Tester và Developer. Bug Report tốt hay tệ ảnh hưởng trực tiếp đến thời gian và chất lượng fix bug. BUG REPORT TỐT giúp: (1) Developer hiểu và reproduce bug nhanh - Developer đọc bug report là hiểu ngay bug là gì, reproduce được ngay, không cần hỏi thêm. (2) Fix bug đúng và nhanh hơn - Developer hiểu rõ bug → fix đúng vấn đề, không fix sai chỗ, không mất thời gian tìm hiểu. (3) Giảm thời gian trao đổi - Không cần hỏi lại, không cần meeting để làm rõ, tiết kiệm thời gian cho cả Tester và Developer. (4) Tăng chất lượng sản phẩm - Bug được fix đúng, nhanh → sản phẩm chất lượng cao hơn. BUG REPORT TỆ dẫn đến: (1) Developer không hiểu - Đọc bug report nhưng không hiểu bug là gì, không biết reproduce như thế nào. (2) Không reproduce được - Developer cố gắng reproduce nhưng không được, phải hỏi lại Tester, tốn thời gian. (3) Fix sai - Developer hiểu sai bug → fix sai chỗ, bug vẫn còn hoặc tạo ra bug mới. (4) Tốn thời gian - Phải hỏi lại, meeting, trao đổi nhiều lần → tốn thời gian cho cả team. VÍ DỤ: Bug Report tốt: 'BUG-001: Login button không hoạt động. Steps: 1. Navigate to login page, 2. Enter username: testuser, 3. Enter password: Test123!, 4. Click Login button. Expected: Redirect to dashboard. Actual: Button không phản hồi, không có gì xảy ra. Screenshot attached.' → Developer đọc là hiểu ngay, reproduce được, fix nhanh. Bug Report tệ: 'BUG-001: Login không hoạt động.' → Developer không hiểu, phải hỏi lại, tốn thời gian.",
              "Best practices khi viết Bug Report - Các nguyên tắc vàng: (1) TITLE NGẮN GỌN NHƯNG ĐỦ THÔNG TIN - Title phải mô tả được vấn đề chính trong 1 câu. Ví dụ: 'Login button không hoạt động khi click' (tốt) thay vì 'Bug' (tệ) hoặc 'Login có vấn đề' (mơ hồ). (2) STEPS TO REPRODUCE CHI TIẾT, AI ĐỌC CŨNG LÀM ĐƯỢC - Mỗi bước phải rất cụ thể, không mơ hồ. Ví dụ: 'Step 1: Navigate to https://example.com/login' (tốt) thay vì 'Go to login page' (mơ hồ). Developer đọc steps phải reproduce được mà không cần hỏi thêm. (3) EXPECTED VS ACTUAL RÕ RÀNG, KHÔNG MƠ HỒ - Expected Result phải cụ thể (ví dụ: 'User should be redirected to dashboard page, URL: https://example.com/dashboard'). Actual Result phải chính xác (ví dụ: 'Button không phản hồi, vẫn ở trang Login'). Tránh mơ hồ như 'should work correctly' hoặc 'does not work'. (4) CÓ SCREENSHOT/VIDEO NẾU CẦN - Screenshot/video giúp Developer hiểu rõ hơn về bug. Đặc biệt quan trọng với UI bugs. Screenshot phải rõ ràng, có thể thấy được vấn đề. (5) MÔ TẢ CHÍNH XÁC, KHÔNG SUY ĐOÁN - Mô tả những gì THẤY, không suy đoán nguyên nhân. Ví dụ: 'Button không phản hồi' (tốt) thay vì 'Button có bug' (suy đoán). Để Developer tự tìm nguyên nhân. (6) ĐÁNH SEVERITY VÀ PRIORITY ĐÚNG - Đánh đúng Severity và Priority giúp bug được xử lý đúng thứ tự ưu tiên. Không đánh quá cao hoặc quá thấp. (7) REVIEW BUG REPORT TRƯỚC KHI SUBMIT - Đọc lại bug report, tự hỏi: 'Developer đọc có hiểu không? Có thể reproduce được không?' Nếu không, chỉnh sửa lại. Bug Report tốt = Developer fix bug nhanh = Sản phẩm chất lượng cao."
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice Bug Reporting",
            exercises: [{
              title: "BÀI TẬP: Find & Report Bugs - Tìm và báo cáo bugs một cách chuyên nghiệp",
              duration: "2h",
              tasks: [
                "BƯỚC 1 - Test Login feature để tìm bugs một cách có hệ thống: (1) CHỌN WEBSITE/APP: Chọn một website/app có chức năng Login để test (có thể là demo app, website thật như Gmail, Facebook, hoặc một website demo). Nếu không có, có thể giả lập dựa trên requirements. Ghi lại tên website/app và URL vào document 'Bug Finding - Login Feature'. (2) CHUẨN BỊ TEST DATA: Chuẩn bị danh sách test data sẽ dùng: (a) Valid credentials: Username: 'testuser', Password: 'Test123!' (hoặc credentials thực tế), (b) Invalid credentials: Username: 'invaliduser', Password: 'WrongPass!', (c) Empty fields: Username: '', Password: '', (d) Special characters: Username: 'test@user#123', Password: 'Test!@#$%', (e) SQL injection: Username: 'admin' OR '1'='1', Password: 'anything', (f) XSS: Username: '<script>alert('XSS')</script>', Password: 'anything', (g) Very long input: Username: 'a' x 1000, Password: 'a' x 1000. Ghi lại tất cả test data. (3) THỰC HIỆN TEST CÓ HỆ THỐNG: Test Login feature với tất cả test data đã chuẩn bị: (a) Test với valid credentials - Verify login thành công, (b) Test với invalid credentials - Verify error message hiển thị, (c) Test với empty fields - Verify validation errors, (d) Test với special characters - Verify validation hoặc behavior, (e) Test SQL injection - Verify có bị hack không, (f) Test XSS - Verify có execute script không, (g) Test với very long input - Verify có xử lý đúng không. Với mỗi test, quan sát kỹ: UI (buttons, fields, labels, colors, alignment), Behavior (response time, loading indicators, redirects), Error messages (có hiển thị không, có đúng không, có rõ ràng không), Security (có bị hack không, có lộ thông tin không). (4) GHI LẠI TẤT CẢ OBSERVATIONS: Ghi lại tất cả những điểm bất thường, kể cả khi chưa chắc đó là bug hay chỉ là yêu cầu chưa rõ. Ví dụ: 'Login button không phản hồi', 'Error message không rõ ràng', 'Response time quá chậm (> 5 giây)', 'UI không align đúng', 'SQL injection có thể thực thi'. Mục tiêu: tìm được ít nhất 5-10 bugs hoặc observations. Ghi lại tất cả vào document.",
                "BƯỚC 2 - Phân loại và đánh giá bugs một cách chi tiết: Với mỗi bug/observation tìm được ở Bước 1, thực hiện phân loại và đánh giá: (1) XÁC ĐỊNH LOẠI BUG: (a) FUNCTIONAL BUG - Chức năng không hoạt động đúng. Ví dụ: 'Login button không hoạt động', 'Login với valid credentials không thành công', 'Error message không hiển thị'. (b) UI/UX BUG - Hiển thị, layout, màu sắc không đúng. Ví dụ: 'Button không align đúng', 'Error message màu sắc không đúng', 'Font size không nhất quán', 'Spacing không đều'. (c) SECURITY BUG - Bảo mật không đúng. Ví dụ: 'SQL injection có thể thực thi', 'XSS có thể execute script', 'Password hiển thị plain text', 'Session không expire đúng'. (d) PERFORMANCE BUG - Tốc độ, response time không đúng. Ví dụ: 'Response time quá chậm (> 5 giây)', 'Page load quá chậm', 'Timeout khi login'. (e) COMPATIBILITY BUG - Không hoạt động trên browser/device khác. Ví dụ: 'Không hoạt động trên Firefox', 'Không hoạt động trên mobile'. Ghi lại loại bug cho mỗi bug. (2) ĐÁNH SEVERITY: (a) CRITICAL - Hệ thống crash, không login được, mất dữ liệu. Ví dụ: 'Login không hoạt động - không ai login được', 'App crash khi click Login'. (b) HIGH - Login được nhưng có vấn đề nghiêm trọng. Ví dụ: 'Login với valid credentials không thành công', 'SQL injection có thể thực thi'. (c) MEDIUM - Có vấn đề nhưng có workaround. Ví dụ: 'Error message không rõ ràng (nhưng vẫn login được)', 'UI không align đúng (nhưng vẫn sử dụng được)'. (d) LOW - UI/UX nhỏ, không ảnh hưởng chức năng. Ví dụ: 'Button màu sắc không đúng', 'Typo trong error message'. (3) ĐÁNH PRIORITY: (a) P1 - Fix ngay lập tức: Bug blocking release, ảnh hưởng demo quan trọng. (b) P2 - Fix trong sprint này: Bug quan trọng, nên fix sớm. (c) P3 - Fix trong sprint sau: Bug không urgent, có thể fix sau. (d) P4 - Fix khi có thời gian: Bug nhỏ, fix khi rảnh. Ghi lại Severity và Priority cho mỗi bug vào bảng: Bug # | Description | Type | Severity | Priority | Notes.",
                "BƯỚC 3 - Viết Bug Report chi tiết cho 5 bugs theo template chuẩn: Với mỗi bug đã phân loại ở Bước 2, viết một Bug Report đầy đủ theo cấu trúc đã học. Chọn 5 bugs quan trọng nhất (ưu tiên High/Critical Severity). Mỗi Bug Report phải có đầy đủ các phần: (1) BUG ID/TITLE: Bug ID: 'BUG-001', 'BUG-002', v.v. Title: Ngắn gọn, rõ ràng trong 1 câu. Ví dụ: 'BUG-001: Login button không hoạt động khi click', 'BUG-002: SQL injection vulnerability in Login form'. (2) DESCRIPTION: Mô tả chi tiết bug: bug là gì, xảy ra ở đâu, khi nào. Ví dụ: 'Login button không phản hồi khi user click. Button không có visual feedback (không highlight), không có action nào xảy ra, user vẫn ở trang Login. Bug xảy ra trên tất cả browsers và devices đã test.' (3) ENVIRONMENT: OS: 'Windows 10' (hoặc OS bạn đang dùng), Browser: 'Chrome Version 120.0.6099.109' (hoặc browser version hiện tại), Version: 'App version 1.0.0' (nếu có), Device: 'Desktop/Laptop' (hoặc Mobile nếu test mobile). (4) PRECONDITIONS: Điều kiện ban đầu. Ví dụ: 'User account exists with username: testuser, password: Test123!', 'User is on Login page (URL: https://example.com/login)', 'Browser is opened and ready', 'No previous session exists'. (5) STEPS TO REPRODUCE: Các bước chi tiết, đánh số 1, 2, 3... Ví dụ: 'Step 1: Navigate to https://example.com/login, Step 2: Locate Username field (located at top of the form), Step 3: Enter username: testuser, Step 4: Locate Password field (located below Username field), Step 5: Enter password: Test123!, Step 6: Locate Login button (located at bottom center of the form), Step 7: Click Login button, Step 8: Wait 2-3 seconds, Step 9: Observe the result'. (6) EXPECTED RESULT: Kết quả mong đợi, rõ ràng. Ví dụ: 'User should be redirected to dashboard page, URL changes to https://example.com/dashboard, welcome message displays: Welcome, testuser!, user profile icon appears in top right corner'. (7) ACTUAL RESULT: Kết quả thực tế, chính xác. Ví dụ: 'Login button không phản hồi, không có visual feedback, không có action nào xảy ra, user vẫn ở trang Login (URL: https://example.com/login), no error message displayed, no page reload, no network request sent (verified in browser DevTools)'. (8) SEVERITY: High (hoặc Critical/Medium/Low tùy bug). (9) PRIORITY: P1 (hoặc P2/P3/P4 tùy bug). (10) ATTACHMENTS: Screenshot/video nếu có. Chụp screenshot bug, attach vào bug report. Nếu có video, record screen và attach. Viết 5 bug reports đầy đủ vào document 'Bug Reports - Login Feature'. Mỗi bug report phải rõ ràng, chi tiết, có thể reproduce được.",
                "BƯỚC 4 - Review và cải thiện Bug Reports một cách kỹ lưỡng: (1) ĐỌC LẠI TẤT CẢ BUG REPORTS một cách cẩn thận, đặt mình vào vị trí của một Developer chưa từng test Login feature này. (2) TỰ HỎI: 'Nếu đưa bug report này cho một Developer, họ có thể hiểu và reproduce được không?' Nếu câu trả lời là 'Không' hoặc 'Có thể, nhưng cần hỏi thêm', thì bug report chưa đủ chi tiết → cần chỉnh sửa lại. (3) KIỂM TRA CÁC ĐIỂM SAU CHO MỖI BUG REPORT: (a) Steps to Reproduce có đủ chi tiết không? Một Developer đọc có thể làm theo từng bước và reproduce được không? Nếu thiếu, bổ sung thêm chi tiết (ví dụ: 'Locate Login button' thay vì chỉ 'Click Login button'). (b) Expected vs Actual có rõ ràng, không mơ hồ không? Có số liệu cụ thể không? (ví dụ: 'URL changes to https://example.com/dashboard' thay vì 'should redirect'). Nếu mơ hồ, chỉnh sửa lại cho cụ thể. (c) Có thiếu thông tin quan trọng không? Environment có đầy đủ không? Preconditions có đầy đủ không? Test data có cụ thể không? Nếu thiếu, bổ sung. (d) Screenshot/video có rõ ràng, có thể thấy được vấn đề không? Nếu không rõ, chụp lại hoặc thêm annotations. (e) Severity và Priority có đúng không? Có đánh quá cao hoặc quá thấp không? Nếu không đúng, chỉnh sửa lại. (4) CHỈNH SỬA CÁC BUG REPORTS còn mơ hồ, thiếu thông tin. Mục tiêu: Tất cả bug reports phải rõ ràng, chi tiết, có thể reproduce được bởi bất kỳ Developer nào mà không cần hỏi thêm. (5) CHỌN 1 BUG REPORT VÀ CẢI THIỆN: Chọn 1 bug report, đọc lại, tìm các điểm có thể cải thiện (ví dụ: Steps có thể chi tiết hơn, Expected Result có thể cụ thể hơn, có thể thêm screenshot), sau đó chỉnh sửa lại để trở nên tốt hơn. So sánh version trước và sau để thấy sự cải thiện.",
                "BƯỚC 5 - Tạo Bug Report Template chuyên nghiệp để sử dụng sau này: (1) DỰA TRÊN NHỮNG GÌ ĐÃ HỌC VÀ THỰC HÀNH, tạo một template Bug Report chuyên nghiệp trong Word/Excel/Google Docs với các phần sau (theo thứ tự): (a) BUG ID - Mã định danh (ví dụ: BUG-001, WEB-123). (b) TITLE - Tiêu đề ngắn gọn, rõ ràng (1 câu). (c) DESCRIPTION - Mô tả chi tiết bug. (d) ENVIRONMENT - OS, Browser, Version, Device. (e) PRECONDITIONS - Điều kiện ban đầu. (f) STEPS TO REPRODUCE - Các bước chi tiết (đánh số 1, 2, 3...). (g) EXPECTED RESULT - Kết quả mong đợi (cụ thể). (h) ACTUAL RESULT - Kết quả thực tế (chính xác). (i) SEVERITY - Critical/High/Medium/Low. (j) PRIORITY - P1/P2/P3/P4. (k) ATTACHMENTS - Screenshot, video, log files. (l) REPORTER - Tên người report. (m) DATE - Ngày report. (n) STATUS - New/Assigned/Open/Fixed/Closed. (2) FORMAT TEMPLATE CHO ĐẸP: Căn chỉnh, đóng băng hàng đầu tiên (header), thêm màu sắc cho header, thêm instructions cho mỗi phần (ví dụ: 'Title: Ngắn gọn, rõ ràng trong 1 câu'). (3) LƯU TEMPLATE: Lưu template này để sử dụng cho tất cả các bài tập sau. Template này sẽ giúp bạn viết bug reports một cách nhất quán và chuyên nghiệp. (4) TẠO CHECKLIST: Tạo một checklist để review bug report trước khi submit: [ ] Title rõ ràng, [ ] Steps đủ chi tiết, [ ] Expected vs Actual rõ ràng, [ ] Environment đầy đủ, [ ] Screenshot/video nếu cần, [ ] Severity và Priority đúng. Checklist này giúp đảm bảo bug report chất lượng cao."
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
              "Jira là gì? → Jira là công cụ quản lý dự án và theo dõi issues (bugs, tasks, stories) PHỔ BIẾN NHẤT trong ngành phần mềm. Jira được phát triển bởi Atlassian và được sử dụng bởi hàng triệu teams trên thế giới. JIRA GIÚP TESTER: (1) Tạo và quản lý bugs một cách có hệ thống - Tạo bug với đầy đủ thông tin, theo dõi bug status, (2) Theo dõi trạng thái bugs (Bug Life Cycle) - Biết bug đang ở đâu, ai đang xử lý, (3) Assign bugs cho developers - Gán bug cho developer phù hợp, (4) Tạo reports và dashboards - Theo dõi bug metrics, tiến độ fix bugs, (5) Tích hợp với các tools khác - Confluence (documentation), Bitbucket (source code), Slack (communication), v.v. CÁC LOẠI JIRA: (1) Jira Software - Cho development teams, có đầy đủ tính năng cho Agile/Scrum, bug tracking, sprint management. Manual Tester thường dùng Jira Software. (2) Jira Service Management - Cho IT support teams, quản lý tickets, incidents, requests. (3) Jira Core - Cho business teams, quản lý projects đơn giản. Jira có thể được host trên cloud (jira.atlassian.com) hoặc on-premise (server của công ty). Jira là công cụ QUAN TRỌNG NHẤT mà Manual Tester cần biết sử dụng.",
              "Setup Jira - Cách thiết lập từng bước: (1) ĐĂNG KÝ TÀI KHOẢN: Có 2 cách: (a) Cloud (jira.atlassian.com) - Truy cập jira.atlassian.com, click 'Get started for free', điền thông tin (email, tên, password), chọn 'Jira Software', hoàn tất đăng ký. Có free trial 7 ngày, sau đó có thể dùng free plan (giới hạn users) hoặc paid plan. (b) On-premise (Jira của công ty) - Liên hệ IT admin để được cấp quyền truy cập, nhận URL và credentials. (2) TẠO PROJECT: Sau khi đăng nhập, click 'Create project', chọn template phù hợp: (a) Scrum - Cho Agile teams, có sprints, backlog, (b) Kanban - Cho teams làm việc theo Kanban, có board, (c) Bug tracking - Cho teams chỉ cần track bugs. Đặt tên project (ví dụ: 'Web App Testing'), chọn project key (ví dụ: 'WEB' - sẽ dùng trong Bug ID), chọn project lead và permissions. (3) CONFIGURE ISSUE TYPES: Vào Project Settings → Issue Types, đảm bảo có 'Bug' type. Vào Issue Type Scheme, thêm 'Bug' vào scheme nếu chưa có. (4) CONFIGURE FIELDS: Vào Fields → Configure, thêm các fields cần thiết cho Bug: Summary, Description, Environment, Steps to Reproduce, Expected Result, Actual Result, Severity, Priority, Attachments. Project key sẽ dùng trong Bug ID (ví dụ: WEB-1, WEB-2).",
              "Issue types trong Jira - Các loại issues và cách sử dụng: Jira có nhiều issue types khác nhau, mỗi loại phục vụ mục đích khác nhau: (1) BUG - Lỗi trong phần mềm. Đây là issue type QUAN TRỌNG NHẤT đối với Manual Tester. Bug được dùng để track các lỗi tìm được trong quá trình testing. (2) TASK - Công việc cần làm. Tester có thể dùng Task để track các công việc testing (ví dụ: 'Write test cases for Login feature'). (3) STORY - User story, mô tả yêu cầu từ góc nhìn người dùng. Tester có thể dùng Story để hiểu requirements. (4) EPIC - Tập hợp các stories lớn. Tester có thể dùng Epic để theo dõi testing cho một feature lớn. (5) SUBTASK - Công việc con của Task/Story. Tester có thể dùng Subtask để chia nhỏ công việc testing. MANUAL TESTER CHỦ YẾU DÙNG BUG TYPE. Có thể tạo custom fields cho Bug để phù hợp với nhu cầu: Browser (dropdown: Chrome, Firefox, Safari), OS (dropdown: Windows, Mac, Linux), Steps to Reproduce (text area), Expected Result (text area), Actual Result (text area), Test Case ID (text field để link với test case), Environment (text field). Custom fields giúp bug report đầy đủ và dễ tìm kiếm hơn.",
              "Bug ID format - Định dạng và cách sử dụng: Jira tự động tạo Bug ID theo format PROJECT-KEY-NUMBER khi tạo bug mới. Ví dụ: Nếu project key là 'WEB', bug đầu tiên sẽ có ID 'WEB-1', bug thứ hai sẽ có ID 'WEB-2', v.v. BUG ID LÀ UNIQUE IDENTIFIER - Mỗi bug có một ID duy nhất, không trùng lặp. Bug ID được dùng để: (1) Reference bug trong communication - Khi trao đổi với Developer, có thể nói 'Bug WEB-123' thay vì mô tả dài dòng, (2) Reference trong commit messages - Developer có thể ghi 'Fixed WEB-123' trong commit message, (3) Reference trong test reports - Test reports có thể liệt kê 'Bugs found: WEB-123, WEB-124, WEB-125', (4) Search và filter - Có thể search bug bằng ID trong Jira, (5) Link bugs - Có thể link bug này với bug khác hoặc với test case. Bug ID format nhất quán giúp dễ dàng quản lý và tìm kiếm bugs. Ví dụ: Tất cả bugs của project Web App sẽ có format WEB-XXX, bugs của project Mobile App sẽ có format MOB-XXX. Điều này giúp dễ phân biệt bugs của các projects khác nhau.",
              "Jira workflow - Quy trình xử lý bug trong Jira: Jira có workflow mặc định cho Bug, nhưng có thể customize theo Bug Life Cycle của team. WORKFLOW MẶC ĐỊNH: Open → In Progress → Resolved → Closed. WORKFLOW TÙY CHỈNH (theo Bug Life Cycle chuẩn): New → Assigned → Open → Fixed → Retest → Closed → Reopened. CÁC TRẠNG THÁI TRONG WORKFLOW: (1) NEW - Bug mới được tạo, chờ được review và assign. (2) ASSIGNED - Bug được assign cho Developer. (3) OPEN/IN PROGRESS - Developer đang fix bug. (4) FIXED/RESOLVED - Developer đã fix, chờ Tester retest. (5) RETEST - Tester đang test lại để verify fix. (6) CLOSED - Bug đã được fix và verify thành công. (7) REOPENED - Bug bị reopen nếu fix không đúng. CÁCH CUSTOMIZE WORKFLOW: Vào Project Settings → Workflows, có thể tạo workflow mới hoặc edit workflow hiện có, thêm/bớt trạng thái, thêm transitions giữa các trạng thái. Workflow có thể có conditions (ví dụ: chỉ Admin mới có thể close bug) và validators (ví dụ: phải có comment khi resolve bug). Hiểu workflow giúp Tester biết bug đang ở đâu và cần làm gì tiếp theo."
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
            content: [
              "Test Coverage: Là mức độ mà testing đã cover các phần của hệ thống (requirements, test conditions, code, UI, flows...). Coverage cao giúp giảm rủi ro bỏ sót bugs, nhưng 100% coverage không đồng nghĩa với 'không còn bug'.",
              "Requirements Coverage: Đo bằng RTM – mỗi requirement có ít nhất một (thường là nhiều) test case. Requirements Coverage% = (Số requirements có test / Tổng requirements) × 100%. Đây là coverage mà Manual Tester cần quan tâm nhiều nhất.",
              "Test Case Coverage / Scenario Coverage: Đánh giá mức độ mà các luồng nghiệp vụ (scenarios) đã được test. Ví dụ: Checkout flow có bao nhiêu nhánh (COD, Online payment, Voucher, Guest vs Logged-in) và bao nhiêu nhánh đã có test case. Thường được thể hiện bằng mapping flow → test cases.",
              "Code Coverage (ở mức awareness): Là % dòng code / branches / paths được thực thi bởi tests (thường liên quan đến Unit/Automation). Manual Tester không đo trực tiếp nhưng nên hiểu concept để giao tiếp với Dev/Automation. Metrics: Line coverage, Branch coverage, Function coverage, Statement coverage.",
              "Metrics cơ bản liên quan Coverage: Pass Rate, Requirements Coverage, Defect Density (số bugs trên số requirements/test cases/module), Defect Distribution (bugs theo module/area)."
            ],
            concepts: [
              "Coverage = mức độ mà testing đã 'chạm tới' các phần của hệ thống (requirements, code, flows...).",
              "Requirements Coverage dùng RTM để kiểm tra: requirement nào đã có test, requirement nào chưa.",
              "Không thể và không cần 100% coverage ở mọi thứ – quan trọng là coverage tốt cho phần critical, high risk.",
              "Metrics (Pass rate, Defect density, ...) giúp đo lường, nhưng phải hiểu context, không nhìn số khô.",
              "Coverage thấp + ít bugs không có nghĩa là sản phẩm tốt – có thể do chưa test đủ."
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice Coverage",
            exercises: [{
              title: "BÀI TẬP: Calculate Coverage",
              duration: "2h",
              tasks: [
                "Requirements Coverage từ RTM: Sử dụng RTM đã tạo ở ngày Thứ 2, (1) Đếm tổng số requirements, (2) Đếm số requirements có ít nhất 1 test case, (3) Tính Requirements Coverage% = (Covered / Total) × 100%, (4) Đánh dấu (highlight) các requirements chưa được cover và ghi chú loại risk nếu bỏ sót.",
                "Test Case/Scenario Coverage cho 1 flow: Chọn 1 flow (ví dụ: Login hoặc Checkout) và vẽ sơ bộ các nhánh chính (happy path, negative paths quan trọng). Map mỗi nhánh với các test case tương ứng. Đánh dấu nhánh chưa có test case (coverage gap).",
                "Defect Distribution & Defect Density (giả lập): Dùng dữ liệu bugs từ các bài trước (hoặc tự giả lập): (1) Nhóm bugs theo module/requirement, (2) Tính Defect Density = Số bugs / Số requirements hoặc / Số test cases cho module đó, (3) Xác định module/requirement có Defect Density cao → risk cao.",
                "Phân tích gaps: Dựa trên Coverage% và Defect Density, (1) Liệt kê 3 khu vực có coverage thấp hoặc defect density cao, (2) Đề xuất thêm test cases hoặc ưu tiên test lại cho các khu vực này, (3) Ghi lại 5–7 dòng kết luận: 'Phần nào đang được test tốt, phần nào còn lỗ hổng lớn'.",
                "Chuẩn bị bảng Coverage Summary: Tạo một bảng nhỏ gồm: Requirement ID, #TestCases, Covered? (Y/N), #Defects found, Notes. Bảng này sẽ hữu ích khi viết Test Summary Report sau này."
              ]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{
              title: "REVIEW",
              duration: "30 phút",
              tasks: [
                "Tóm tắt lại: Test Coverage là gì, Requirements Coverage là gì, tại sao không nên hiểu lầm '100% coverage = không còn bug'. Viết ngắn gọn 7–10 dòng bằng lời của bạn.",
                "Xem lại Coverage Summary/RTM: Ghi lại 2–3 requirements hoặc module có coverage thấp và đề xuất cụ thể để cải thiện (thêm test cases, thay đổi priority, v.v.).",
                "Tự đánh giá: Bạn thấy mình hiểu về coverage & metrics đến mức nào (tự chấm 1–10)? Bạn muốn đào sâu metric nào hơn (Pass rate, Defect density, Requirements coverage,...)? Ghi 2–3 ý."
              ]
            }]
          }
        }),
        createDay("Thứ 5", "Test Summary Report", 4, {
          motivationalQuote: "📋 Report tốt giúp stakeholders hiểu kết quả!",
          dailyGoals: ["✅ Tạo Test Summary Report", "✅ Include metrics", "✅ Write recommendations"],
          morning: {
            title: "Sáng (1.5h): Report Structure",
            content: [
              "Nhắc lại cấu trúc Test Summary Report: (1) Executive Summary, (2) Test Scope, (3) Test Environment, (4) Test Execution Summary, (5) Defect Summary, (6) Test Metrics, (7) Risks & Issues, (8) Recommendations, (9) Appendix.",
              "Executive Summary & Audience: Viết cho PM/PO/Stakeholders bận rộn – ngắn gọn, tập trung vào: status release (ổn/không), mức độ chất lượng, các risk lớn, gợi ý decision (release/hoãn). Không nên nhồi quá nhiều chi tiết kỹ thuật.",
              "Kết hợp Metrics & Narrative: Metrics (Pass rate, Coverage, #Defects, Defect Density,...) cần được giải thích bằng lời: ví dụ 'Pass rate 75% vì module X còn nhiều bug High, chúng tôi recommend không release'. Không đưa số liệu mà không có bối cảnh.",
              "Recommendations rõ ràng: Không nói chung chung 'cần test thêm', mà nên: 'Fix X bugs High ở module Checkout, viết thêm Y test cases cho scenario A/B, chạy lại regression pack Z trước khi release'."
            ],
            concepts: [
              "Test Summary Report là output chính của QA trước khi release – giúp team quyết định có đủ tự tin để release hay không.",
              "Executive Summary phải đọc trong 1–2 phút là nắm được tình hình.",
              "Metrics phải đi với phân tích, không nên chỉ có bảng số.",
              "Report nên trung thực, rõ ràng, không giấu bug nhưng cũng không 'hù dọa' quá mức – tập trung vào risk và action.",
              "Phong cách viết report: ngắn gọn, dùng bullet points, có tiêu đề rõ, tránh câu dài khó hiểu."
            ]
          },
          afternoon: {
            title: "Chiều (2h): Create Report",
            exercises: [{
              title: "BÀI TẬP: Test Summary Report",
              duration: "2h",
              tasks: [
                "Sử dụng RTM + Coverage + Execution data đã làm tuần này: (1) Chọn 1 feature (Login hoặc Registration), (2) Lấy số liệu: #Requirements, Requirements Coverage%, #TestCases, #Executed, Pass Rate, #Defects (theo Severity).",
                "Viết bản nháp Executive Summary (~2 đoạn): Ví dụ: 'Trong sprint này, chúng tôi đã test feature Login với 10 requirements, 95% đã có test coverage. 20 test cases được chạy, 16 Pass, 4 Fail (Pass Rate 80%). 4 bugs được tìm thấy (2 High, 2 Medium). Module Login tạm ổn cho UAT nhưng chưa đủ 안정 để release production do còn 2 bug High chưa fix.'",
                "Điền phần Test Scope, Environment, Execution Summary, Defect Summary: (1) Test Scope – rõ ràng cái gì được test, cái gì chưa, (2) Environment – OS, Browser, Version, (3) Execution Summary – bảng tổng hợp Test Cases, (4) Defect Summary – bảng tổng hợp bugs theo Severity/Status.",
                "Thêm Test Metrics & Charts đơn giản: (1) Tính lại Pass Rate, Requirements Coverage, Defect Density, (2) Tạo 1–2 biểu đồ (pie/bar) bằng Excel/Sheets/Notion,... cho Test Results và Defects theo Severity. Chèn/đính kèm vào report.",
                "Viết phần Risks & Recommendations: (1) Liệt kê 3–5 risk lớn (ví dụ: thiếu test cho một số negative flows, thời gian test ngắn, dependency chưa ổn định), (2) Với mỗi risk, gắn recommendation cụ thể: what/why/how/when. Kết luận report bằng 2–3 dòng: 'We recommend...' rõ ràng."
              ]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{
              title: "REVIEW",
              duration: "30 phút",
              tasks: [
                "Đọc lại Test Summary Report như một PM/PO: liệu bạn có hiểu được: (1) Đã test những gì, (2) Chất lượng đang ở mức nào, (3) Risk chính là gì, (4) Nên làm gì tiếp theo? Nếu thiếu, bổ sung.",
                "Kiểm tra lại phần Executive Summary: có quá dài/dòng không? Có thể rút gọn thành 4–6 câu rõ ràng không? Thử chỉnh sửa cho cô đọng hơn.",
                "Tự đánh giá: Bạn cảm thấy viết report như thế nào (tự chấm 1–10)? Bạn muốn cải thiện điều gì (cách dùng số liệu, cách viết recommendation, trình bày biểu đồ)? Ghi lại 2–3 ý."
              ]
            }]
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
            content: [
              "Use Case là gì: Use Case mô tả cách một loại user cụ thể (Actor) tương tác với hệ thống để đạt một mục tiêu business (Goal). Một Use Case thường có: Tên, Actor, Mục tiêu, Preconditions, Main success scenario (happy path), Extensions/Alternate flows (các nhánh khác như lỗi, ngoại lệ), Postconditions.",
              "Use Case vs User Story: User Story (trong Agile) thường ở dạng 'As a [role], I want [goal] so that [reason]'. Use Case chi tiết hơn, mô tả step-by-step interaction giữa Actor và hệ thống. Tester có thể dùng cả hai: user story để hiểu bối cảnh, use case để thiết kế test scenarios.",
              "Use Case Testing: Thay vì chỉ test từng field/validation đơn lẻ, Use Case Testing tập trung test cả flow từ đầu đến cuối theo kịch bản thực tế của user. Ví dụ: 'User mua hàng' = Browse → Add to Cart → Checkout → Payment → Confirmation. Test Cases sẽ bám theo main success scenario và các alternate flows của Use Case.",
              "User scenarios & Examples: Scenarios là các kịch bản cụ thể dựa trên use case, có thể bao gồm: roles khác nhau (Admin/User/Guest), data khác nhau, điều kiện đặc biệt (mạng chậm, session hết hạn, v.v.). Ví dụ: Use Case 'Login' có scenarios: login thành công, login sai mật khẩu 3 lần, login khi account bị lock, login với 2FA,..."
            ],
            concepts: [
              "Use Case = Actor + Goal + Flow (steps) + Preconditions + Postconditions + Alternate flows.",
              "Use Case Testing tập trung vào luồng người dùng (flows), không chỉ vào từng field riêng lẻ.",
              "Một Use Case tốt giúp Tester dễ nhìn ra scenario và edge cases.",
              "Khi đọc Use Case/Story, Tester nên chủ động nghĩ thêm các alternate/exception flows.",
              "Use Case Testing rất phù hợp cho E2E và UAT testing."
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice Use Case",
            exercises: [{
              title: "BÀI TẬP: Use Case Testing",
              duration: "2h",
              tasks: [
                "Chọn 1–2 Use Cases thực tế: Ví dụ: (1) UC-LOGIN: User đăng nhập vào hệ thống, (2) UC-CHECKOUT: User đặt hàng và thanh toán. Viết mô tả Use Case theo format đơn giản: Tên, Actor, Mục tiêu, Preconditions, Main flow (steps), Alternate/Exception flows.",
                "Từ Use Case → tạo Test Scenarios: Với mỗi Use Case, liệt kê các scenarios chính: (1) Happy path: tất cả điều kiện đúng, flow thành công, (2) 2–3 alternate flows (ví dụ: sai mật khẩu, hết hàng khi checkout, payment fail), (3) 1–2 exception flows (ví dụ: session hết hạn giữa chừng). Ghi lại từng scenario ở mức high-level (không cần chi tiết steps).",
                "Chuyển Test Scenarios thành Test Cases: Chọn ít nhất 4–6 scenarios và viết đầy đủ thành Test Cases với format chuẩn: ID, Title, Preconditions, Steps, Expected Result. Đảm bảo mỗi test case bám sát flow của Use Case, không bỏ qua bước quan trọng nào.",
                "Vẽ sơ đồ Use Case (optional nhưng khuyến khích): Dùng sơ đồ đơn giản: hình tròn cho hệ thống, stick figures cho Actors, các ovals cho Use Cases. Vẽ relationships (include/extend nếu muốn). Điều này giúp bạn nhìn tổng quan hệ thống và các luồng chính.",
                "Document Use Case & Test Cases: Tạo một tài liệu ngắn (Notion/Docs) chứa: (1) Mô tả Use Case, (2) Danh sách Test Scenarios, (3) Bảng Test Cases chi tiết. Đây sẽ là asset hữu ích cho portfolio."
              ]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{
              title: "REVIEW",
              duration: "30 phút",
              tasks: [
                "Tóm tắt lại: Use Case là gì, Use Case Testing khác gì so với test theo từng field/requirement riêng lẻ. Viết ngắn gọn 7–10 dòng bằng lời của bạn.",
                "Xem lại Use Case & Test Scenarios đã viết: Có alternate/exception flow nào quan trọng mà bạn bỏ sót không (ví dụ: timeout, mạng chậm, quyền hạn không đủ)? Ghi thêm 1–2 scenario nếu cần.",
                "Tự đánh giá: Bạn thấy mình hiểu và áp dụng Use Case Testing đến mức nào (tự chấm 1–10)? Lần tới khi nhận user stories, bạn sẽ dùng Use Case Thinking như thế nào? Ghi lại 2–3 ý."
              ]
            }]
          }
        }),
        createDay("Thứ 3", "Error Guessing", 4, {
          motivationalQuote: "🎯 Error Guessing dựa vào kinh nghiệm!",
          dailyGoals: ["✅ Hiểu Error Guessing", "✅ Identify common errors", "✅ Apply Error Guessing"],
          morning: {
            title: "Sáng (1.5h): Error Guessing Concepts",
            content: [
              "Error Guessing là gì: Là kỹ thuật testing dựa vào kinh nghiệm, trực giác và hiểu biết về hệ thống để 'đoán' những chỗ dễ có lỗi và chủ động thử các input/cách sử dụng bất thường. Không dựa trên công thức cứng (như EP/BVA) mà dựa trên pattern lỗi mà tester từng thấy.",
              "Common error patterns: Một số kiểu lỗi thường xuyên xuất hiện: (1) Null/Empty/Whitespace inputs, (2) Special characters (', \", <, >, &, emoji,...), (3) Very long strings, (4) Copy/paste từ Word/Excel, (5) Double click/double submit, (6) Refresh/Back browser giữa flow, (7) Mạng chậm/mất kết nối, (8) Session timeout, (9) Dữ liệu boundary nhưng không được xử lý (ví dụ số = 0, -1).",
              "When to use: Error Guessing đặc biệt hữu ích: (1) Khi không có nhiều tài liệu/requirements rõ ràng, (2) Sau khi đã dùng các kỹ thuật có cấu trúc (EP/BVA, Decision Table, State Transition) và muốn tìm thêm edge cases, (3) Khi tester đã có kinh nghiệm với domain/công nghệ tương tự và biết chỗ 'hay vỡ'. Điều quan trọng: phải luôn document lại các guesses và kết quả, không 'test theo cảm hứng rồi quên'."
            ],
            concepts: [
              "Error Guessing = kinh nghiệm + trực giác + hiểu biết về system/domain → đoán chỗ dễ lỗi.",
              "Không thay thế cho các kỹ thuật formal (EP/BVA/Decision Table), mà là bổ sung sau khi đã cover cơ bản.",
              "Các pattern lỗi phổ biến: Null/Empty, Special chars, Very long inputs, Double actions, Network/Session issues.",
              "Tester càng có kinh nghiệm (đã thấy nhiều bug) thì Error Guessing càng mạnh.",
              "Dù 'đoán', vẫn cần ghi lại test idea và kết quả rõ ràng như các test khác."
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice Error Guessing",
            exercises: [{
              title: "BÀI TẬP: Error Guessing",
              duration: "2h",
              tasks: [
                "Brainstorm common errors cho 1–2 forms/flows: Chọn một form (Login/Registration/Checkout) hoặc flow (Add to Cart, Payment). Dựa vào kinh nghiệm/cảm nhận, liệt kê danh sách 'những cách user có thể làm hỏng mọi thứ': nhập trống, nhập rất dài, copy/paste từ nguồn lạ, nhập ký tự đặc biệt, click liên tục, refresh giữa chừng,... Viết thành bảng 'Error Guessing Ideas'.",
                "Thiết kế input cụ thể cho từng idea: Với mỗi idea, xác định input/action cụ thể: ví dụ: nhập 500 ký tự vào field 'Name', nhập `<script>alert(1)</script>` vào 'Comment', nhập `' OR 1=1 --` vào 'Username', click Submit liên tục 3 lần, refresh ở trang Review Order,... Document rõ ràng trong bảng: Idea → Input/Action cụ thể → Expected behavior (an toàn).",
                "Thực thi Error Guessing trên hệ thống (hoặc demo site): Thử lần lượt các inputs/actions đã thiết kế. Quan sát kỹ: (1) Hệ thống có crash không, (2) Có thông báo lỗi lạ không, (3) Dữ liệu có bị lưu sai/bẩn không, (4) UI có vỡ không. Ghi lại mọi behavior bất thường, kể cả khi chưa chắc là bug hay yêu cầu.",
                "Ghi lại findings: Tạo bảng 'Error Guessing Findings' với các cột: ID, Area/Field/Flow, Input/Action, Expected, Actual, Type (Functional/Security/UX/Performance), Severity, Notes. Điền tất cả kết quả bất thường. Nếu không có bug, ghi chú 'No issue' để giữ lịch sử.",
                "Phân loại & suy nghĩ tiếp: Nhìn vào findings, xem pattern nào xuất hiện nhiều (ví dụ: nhiều vấn đề với very long strings hoặc với refresh). Ghi lại 3–5 insights: 'System này xử lý special chars ổn', 'Chưa xử lý double submit tốt', 'Chưa hiển thị lỗi rõ khi mất mạng',... Đây là input tốt cho việc cải thiện test design và cho discussions với dev/PO."
              ]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{
              title: "REVIEW",
              duration: "30 phút",
              tasks: [
                "Tóm tắt lại: Error Guessing là gì, khác gì so với EP/BVA, khi nào nên dùng. Viết ngắn gọn 7–10 dòng bằng lời của bạn.",
                "Xem lại 'Error Guessing Ideas' và 'Findings': Có idea nào còn tiềm năng chưa được test không (do hết thời gian)? Ghi thêm 1–2 idea để dùng cho lần test sau.",
                "Tự đánh giá: Bạn thấy tư duy 'đoán lỗi' của mình đang ở mức nào (tự chấm 1–10)? Sau này khi làm project thật, bạn muốn xây dựng 'bug checklist' cá nhân như thế nào (từ kinh nghiệm riêng)? Ghi lại 2–3 ý."
              ]
            }]
          }
        }),
        createDay("Thứ 4", "Combining Techniques", 4, {
          motivationalQuote: "🔗 Kết hợp kỹ thuật cho coverage tốt nhất!",
          dailyGoals: ["✅ Combine EP + BVA", "✅ Combine Decision Table + State", "✅ Combine all"],
          morning: {
            title: "Sáng (1.5h): Combining Strategies",
            content: [
              "Khi nào cần kết hợp kỹ thuật: Trong thực tế, một feature hiếm khi chỉ dùng 1 kỹ thuật test design. Ví dụ: form nhập tuổi dùng EP+BVA; business rule tính phí dùng Decision Table; status đơn hàng dùng State Transition; luồng mua hàng dùng Use Case; các edge cases 'dị' dùng Error Guessing.",
              "EP + BVA: EP giúp chia partitions, BVA giúp test biên của partitions quan trọng. Kết hợp giúp vừa giảm số lượng test vừa tìm được bug ở biên.",
              "Decision Table + State Transition: Decision Table phù hợp với rules theo tổ hợp điều kiện, State Transition phù hợp với các trạng thái & chuyển đổi theo thời gian. Ví dụ: logic tính phí vận chuyển (Decision Table) + trạng thái đơn hàng (State Transition).",
              "Use Case + Error Guessing: Use Case cho bạn skeleton các flow chính; Error Guessing giúp thêm các thử nghiệm 'dị' quanh flow đó (refresh, double submit, special chars...)."
            ],
            concepts: [
              "Không có kỹ thuật nào là 'thần thánh' – sức mạnh đến từ việc dùng đúng kỹ thuật, đúng chỗ, và kết hợp hợp lý.",
              "Một feature quan trọng thường cần: EP+BVA (fields), Decision Table (rules), State Transition (status), Use Case (flow), Error Guessing (edge cases)."
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice Combining",
            exercises: [{
              title: "BÀI TẬP: Combine Techniques",
              duration: "2h",
              tasks: [
                "Chọn 1 feature tương đối phức tạp (ví dụ: Registration with email verification, hoặc Checkout với voucher + shipping fee). Viết ngắn gọn yêu cầu chính (5–10 gạch đầu dòng).",
                "Áp dụng EP+BVA cho các input fields quan trọng (age, password, amount, quantity,...). Viết vài test cases tiêu biểu cho mỗi field.",
                "Áp dụng Decision Table cho 1 business rule (ví dụ: tính phí vận chuyển theo khu vực + giá trị đơn hàng + loại thành viên). Từ bảng này, tạo 4–6 test cases.",
                "Áp dụng State Transition cho trạng thái của entity chính (ví dụ: Order: Pending → Confirmed → Shipped → Delivered/Cancelled). Viết vài test cases cho transitions hợp lệ + không hợp lệ.",
                "Áp dụng Use Case + Error Guessing cho 1 flow E2E (ví dụ: Checkout): dùng Use Case để tạo 3–4 scenarios chính, sau đó thêm 3–5 Error Guessing ideas quanh flow (refresh, back, mất mạng, double submit,...).",
                "Tổng hợp tất cả test cases vào một bảng, đánh dấu kỹ thuật chính được dùng cho mỗi test case (cột 'Technique'): EP/BVA/Decision Table/State/Use Case/Error Guessing."
              ]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{
              title: "REVIEW",
              duration: "30 phút",
              tasks: [
                "Nhìn lại bảng test cases và cột 'Technique': Có kỹ thuật nào bạn chưa dùng nhiều không? Bạn có đang rely quá nhiều vào 1 kỹ thuật (ví dụ: EP) mà bỏ qua các kỹ thuật khác không?",
                "Viết 5–7 dòng rút kinh nghiệm: với feature thực, bạn sẽ chọn kỹ thuật nào trước, kỹ thuật nào sau, và vì sao.",
                "Tự chấm điểm sự 'đa dạng kỹ thuật' của mình (1–10) và ghi 2–3 ý để cải thiện."
              ]
            }]
          }
        }),
        createDay("Thứ 5", "Test Suite Optimization", 4, {
          motivationalQuote: "⚡ Optimize để giảm số lượng nhưng maintain coverage!",
          dailyGoals: ["✅ Optimize Test Cases", "✅ Remove duplicates", "✅ Maintain coverage"],
          morning: {
            title: "Sáng (1.5h): Optimization Strategies",
            content: [
              "Tại sao phải tối ưu test suite: Không thể chạy hàng ngàn test cases bằng tay mỗi sprint. Cần giảm bớt test cases trùng lặp, kém giá trị, tập trung vào test quan trọng nhưng vẫn giữ coverage.",
              "Các chiến lược optimization: (1) Remove duplicates – bỏ test cases kiểm tra đúng 1 điều giống hệt nhau, (2) Combine similar cases – gộp nhiều cases giống nhau thành 1 case có steps/data linh hoạt, (3) Prioritize – đánh Priority và tập trung vào High/Critical khi thời gian ít, (4) Use regression pack – chọn một bộ 'must run' nhỏ gọn.",
              "Giữ coverage khi tối ưu: Không xoá bừa bãi. Luôn kiểm tra lại coverage (qua RTM, qua mapping flows) sau khi bỏ/gộp test cases. Nếu coverage giảm nhiều ở chỗ critical, cần viết lại test tốt hơn, không đơn thuần xoá."
            ],
            concepts: [
              "Optimization = ít test hơn nhưng thông minh hơn, không phải 'ít test cho nhanh'.",
              "Mỗi test case nên có mục tiêu rõ, tránh trùng lặp mục tiêu với quá nhiều case khác.",
              "Regression pack là tập con quan trọng nhất để chạy thường xuyên."
            ]
          },
          afternoon: {
            title: "Chiều (2h): Practice Optimization",
            exercises: [{
              title: "BÀI TẬP: Optimize Test Suite",
              duration: "2h",
              tasks: [
                "Chọn một bộ test cases (~30–40 cases) bạn đã viết trước đó (Login/Registration/Checkout). Nếu không có, giả lập một danh sách gồm nhiều cases tương đối giống nhau.",
                "Phân loại test cases: Gắn tag hoặc thêm cột 'Area' (Validation/Happy path/Negative/Boundary/Security/UI) và 'Priority' (High/Medium/Low).",
                "Tìm duplicates & near-duplicates: Nhìn vào Title/Steps/Expected để tìm các test cases: (1) Gần như trùng nhau, (2) Chỉ khác data nhỏ nhưng mục tiêu giống hệt. Đánh dấu các cases này để merge hoặc xoá.",
                "Kết hợp/gộp test cases: Viết lại 1 test case tổng quát có thể cover nhiều data (ví dụ: một test 'Login với invalid credentials' có bảng data: wrong username, wrong password, locked account). Xoá hoặc hạ Priority các case cũ trùng lặp.",
                "Xây mini Regression Pack: Từ bộ test đã tối ưu, chọn ra ~15–20 test cases 'bắt buộc phải chạy' cho Regression. Đảm bảo pack này cover: happy paths chính, validations critical, flows và features high risk. Ghi lại tiêu chí bạn dùng để chọn.",
                "Kiểm tra lại coverage: Dùng RTM hoặc mapping flows, xác nhận rằng sau khi optimize và chọn pack, các requirements/fl ows critical vẫn được cover. Nếu thấy lỗ hổng, thêm 1–2 test cases vào pack."
              ]
            }]
          },
          evening: {
            title: "Tối (0.5h): Review",
            exercises: [{
              title: "REVIEW",
              duration: "30 phút",
              tasks: [
                "So sánh số lượng test cases trước và sau khi tối ưu, và số lượng cases trong Regression Pack. Ghi lại con số và cảm nhận: bạn có thấy bộ test gọn hơn nhưng vẫn 'chắc' không?",
                "Viết 5–7 dòng về tiêu chí cá nhân của bạn khi quyết định giữ hoặc bỏ một test case.",
                "Tự đánh giá: Bạn thấy mình đang optimize test suite theo hướng 'thông minh' hay chỉ 'cắt bớt'? Có gì cần cải thiện trong cách suy nghĩ? Ghi lại 2–3 ý."
              ]
            }]
          }
        }),
        createWeekendDay("Thứ 6", "Weekend Project - Comprehensive Test Design", {
          dailyGoals: ["✅ Apply all techniques", "✅ Create comprehensive suite", "✅ Optimize"],
          morning: {
            exercises: [{
              title: "PHASE 1: Apply All Techniques",
              duration: "4h",
              tasks: [
                "Chọn một feature đủ thú vị (ví dụ: Registration với email verification, hoặc Order/Checkout đơn giản). Viết lại requirements ngắn gọn (10–15 điểm).",
                "Dùng EP+BVA cho các input fields quan trọng, viết tập test cases tương ứng.",
                "Dùng Decision Table cho 1–2 business rules (phí ship, giảm giá,...), convert thành test cases.",
                "Dùng State Transition cho trạng thái chính (Order/User Status,...), viết test cases transitions valid/invalid.",
                "Dùng Use Case + Error Guessing cho ít nhất 1 flow E2E, viết test cases tương ứng."
              ]
            }]
          },
          afternoon: {
            exercises: [{
              title: "PHASE 2: Consolidate",
              duration: "4h",
              tasks: [
                "Gom toàn bộ test cases vừa tạo vào một bảng duy nhất (Test Suite).",
                "Gắn cột 'Technique' cho mỗi test case: EP/BVA/DT/State/UseCase/ErrorGuessing.",
                "Dùng RTM/coverage thinking để kiểm tra: requirement nào chưa có test? Bổ sung nếu cần.",
                "Nhóm test cases theo area/module/flow để dễ quản lý."
              ]
            }]
          },
          evening: {
            exercises: [{
              title: "PHASE 3: Optimize & Report",
              duration: "4h",
              tasks: [
                "Tối ưu Test Suite: loại bỏ/gộp các test trùng lặp, xây một Regression Pack gọn (~20–30 cases).",
                "Tính một vài metrics cơ bản: #Requirements, Requirements Coverage%, #TestCases total, #TestCases trong Regression Pack, phân bố test cases theo kỹ thuật.",
                "Tạo 1 tài liệu ngắn mô tả: (1) Feature & Scope, (2) Các kỹ thuật test design đã sử dụng, (3) Cách bạn tối ưu test suite, (4) Lý do bạn chọn các test trong Regression Pack. Đây là artefact mạnh cho portfolio.",
                "Tự retrospective: Viết 5–10 dòng về cảm giác khi kết hợp nhiều kỹ thuật trong một project nhỏ – cái gì khó nhất, cái gì ‘click’ nhất với bạn, bạn muốn đào sâu kỹ thuật nào nữa."
              ]
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

