{
  "course_id": "K4P1",
  "day_code": "day_aa2fb5d5afe648e0",
  "public_code": "D10",
  "version_id": "b9f2e406-86b7-4bc7-b551-5e703d38069b",
  "version_no": 1,
  "synthesized": true,
  "lesson": {
    "index": 6,
    "title": "Day06",
    "subtitle": null,
    "slides_url": "/api/v1/content/days/day_aa2fb5d5afe648e0/slides.pdf",
    "modules": [
      {
        "module_id": "day",
        "title": "Slides",
        "kind": "lesson",
        "from": 0,
        "to": 1,
        "sections": [
          {
            "section_id": "day-slides",
            "title": "Slides",
            "kind": "theory",
            "from": 0,
            "to": 1
          }
        ]
      }
    ],
    "parts": [
      {
        "id": "day-slides-material_mtzv6mjo_pf5wh3",
        "type": "slide",
        "title": "day06-ai-product-project-management",
        "duration_min": null,
        "ai_prompts": [],
        "status": "current",
        "body": {
          "material_id": "material_mtzv6mjo_pf5wh3",
          "page_from": 1,
          "page_to": 37,
          "notes": null,
          "deck_url": "/api/v1/documents/K4P1/Lecture_material_mtzv6mjo_pf5wh3/material_mtzv6mjo_pf5wh3/stream",
          "deck_cdn_url": "https://slides.vlearn.dev/slides/k4p1/Lecture_material_mtzv6mjo_pf5wh3/material_mtzv6mjo_pf5wh3/b6ddbec73ed08abd7a5c9acd3270902507670c129627e0818c6215048c409d1c.pdf?exp=1792167743&sub=728ae799387402308487372bea160411&sig=yPwdQZkO_2BpmkUjnbDYaX3XhBbF7P63BDp23c84n9g"
        }
      }
    ]
  },
  "progress": {
    "done": 0,
    "total": 1,
    "percent": 0,
    "current_part_id": "day-slides-material_mtzv6mjo_pf5wh3"
  },
  "kc_quiz": {
    "release_id": "c5492e3c-bd94-4e37-b177-7720af5ad2bc",
    "course_id": "K4P1",
    "day_code": "day06",
    "revision_no": 1,
    "published_at": "2026-09-14T14:33:10.464949+00:00",
    "groups": [
      {
        "group_id": "day06-g-jtbd",
        "name": "Định hình Jobs-to-be-Done",
        "leaf_kc_ids": [
          "kc-jtbd-job-executor-definition",
          "kc-jtbd-core-job-statement",
          "kc-jtbd-job-story-construction",
          "kc-jtbd-solution-independent-job-map"
        ]
      },
      {
        "group_id": "day06-g-discovery-evidence",
        "name": "Discovery evidence có thể tái kiểm",
        "leaf_kc_ids": [
          "kc-qualitative-pattern-codebook-formation",
          "kc-reproducible-pattern-prevalence-count",
          "kc-dataset-field-validity-audit"
        ]
      },
      {
        "group_id": "day06-g-risk-spec",
        "name": "Nguyên tắc human–AI và risk scenario",
        "leaf_kc_ids": [
          "kc-human-ai-guideline-interface-trace",
          "kc-ai-risk-layer-classification",
          "kc-risk-scenario-behavior-specification"
        ]
      },
      {
        "group_id": "day06-g-prototype",
        "name": "Evidence từ quyết định prototype",
        "leaf_kc_ids": [
          "kc-product-design-variant-test",
          "kc-prototype-real-ai-core-integration"
        ]
      },
      {
        "group_id": "day06-g-evaluation",
        "name": "Evaluation contract và run thực nghiệm",
        "leaf_kc_ids": [
          "kc-output-led-quality-dimension-derivation",
          "kc-evaluation-criterion-operationalization",
          "kc-rubric-interrater-calibration",
          "kc-ai-golden-set-construction",
          "kc-quality-bar-precommitment",
          "kc-complete-eval-run-record"
        ]
      },
      {
        "group_id": "day06-g-validation",
        "name": "User validation không coaching",
        "leaf_kc_ids": [
          "kc-silent-task-observation-session",
          "kc-post-task-validation-probing",
          "kc-user-validation-change-trace"
        ]
      },
      {
        "group_id": "day06-g-demo",
        "name": "Live demo dựa trên evidence",
        "leaf_kc_ids": [
          "kc-evidence-backed-demo-claim-trace",
          "kc-live-demo-standard-hard-case",
          "kc-demo-rehearsal-backup-and-qna"
        ]
      }
    ],
    "knowledge_components": [
      {
        "kc_id": "kc-ai-golden-set-construction",
        "group_id": "day06-g-evaluation",
        "name": "Xây golden set phân tầng theo boundary của feature",
        "knowledge": "Golden set Day 6 kết hợp case thường, hiếm và dễ failure, phủ mọi challenge layer và đánh dấu case lấy hoặc phát triển từ chat data đã quan sát. Cơ cấu bắt buộc là coverage floor cho sự kiện, không chứng minh đại diện population.",
        "remediation_target": "Luyện audit candidate set theo cơ cấu bắt buộc, chat-source trace, duplicate và condition hậu quả cao nhất còn bỏ trống.",
        "is_core": true
      },
      {
        "kc_id": "kc-ai-risk-layer-classification",
        "group_id": "day06-g-risk-spec",
        "name": "Phân loại risk scenario của AI product theo bốn lớp chỗ khó",
        "knowledge": "Taxonomy Day 6 tách lỗi nguồn sự thật, mơ hồ/thiếu thông tin, yêu cầu ngoài phạm vi/thẩm quyền và harm đặc thù domain. Hai lỗi nhìn giống nhau có thể thuộc lớp khác nên phải phân loại theo boundary bị vi phạm và consequence, không dùng nhãn chung 'hallucination'.",
        "remediation_target": "Luyện phân loại các cặp incident nhìn giống nhau nhưng vi phạm source, information, authority hoặc domain boundary khác nhau.",
        "is_core": true
      },
      {
        "kc_id": "kc-complete-eval-run-record",
        "group_id": "day06-g-evaluation",
        "name": "Ghi đầy đủ evaluation run theo contract đã đóng băng",
        "knowledge": "Run record Day 6 giữ input, output và judgment của mọi case theo criterion đã nêu, tính aggregate percentage rồi so với quality bar đã chốt. Case fail phải còn trong bảng; result dưới bar có phân tích vẫn là evidence hợp lệ, còn score đã curate thì không.",
        "remediation_target": "Luyện tính lại aggregate từ case row và tìm case bị bỏ, duplicate hoặc relabel post-hoc.",
        "is_core": true
      },
      {
        "kc_id": "kc-dataset-field-validity-audit",
        "group_id": "day06-g-discovery-evidence",
        "name": "Audit độ hợp lệ của field trước khi dùng làm product evidence",
        "knowledge": "Tên field không tự chứng minh field hợp lệ. Trước khi phân tích phải đọc definition, unit, observed values, missingness, constant, aggregation, known bug và join semantics. Field lỗi hoặc không có phải bị loại hay qualify, không âm thầm coi zero là sự thật.",
        "remediation_target": "Luyện viết bảng quyết định dùng field gồm valid use, prohibited use, uncertainty và claim mà quyết định đó cho phép.",
        "is_core": true
      },
      {
        "kc_id": "kc-demo-rehearsal-backup-and-qna",
        "group_id": "day06-g-demo",
        "name": "Rehearse timed demo có backup và Q&A dựa trên evidence",
        "knowledge": "Demo đáng tin phân công timed sequence, dry run trọn vẹn, chuẩn bị screenshot/video khi live fail và bảo đảm mỗi contributor giải thích được phần có tên, automation choice và critical failure. Backup giữ evidence inspect được; nó không che một failed run.",
        "remediation_target": "Luyện timed run có injected live failure, chuyển backup minh bạch và xoay câu hỏi kỹ thuật/product qua mọi contributor.",
        "is_core": true
      },
      {
        "kc_id": "kc-evaluation-criterion-operationalization",
        "group_id": "day06-g-evaluation",
        "name": "Operationalize AI quality dimension thành criterion chấm được",
        "knowledge": "Quality dimension trở nên chấm được bằng pass/fail rule chính xác hoặc anchored scale có level mô tả khác biệt quan sát được. Criterion phải nêu evidence nào đạt, không dựa vào cảm giác evaluator hay đòi wording giống hệt giữa output biến thiên.",
        "remediation_target": "Luyện chấm các output đối lập và sửa criterion nào còn phụ thuộc judgment ngầm hoặc exact wording không cần thiết.",
        "is_core": true
      },
      {
        "kc_id": "kc-evidence-backed-demo-claim-trace",
        "group_id": "day06-g-demo",
        "name": "Dựng demo narrative có mọi claim trace tới evidence",
        "knowledge": "Demo sáu phần Day 6 là một evidence argument: user/job, chọn candidate, bounded solution, result đo so với bar đã freeze, user evidence cùng change, rồi next priority theo evidence. Mỗi slide có số, quote có nguồn hoặc measurement kiểm được thay vì feature claim không support.",
        "remediation_target": "Luyện annotate từng demo claim bằng source file, case, quote hoặc calculation và loại claim không support.",
        "is_core": true
      },
      {
        "kc_id": "kc-human-ai-guideline-interface-trace",
        "group_id": "day06-g-risk-spec",
        "name": "Trace nguyên tắc human–AI tới behavior cụ thể trên interface",
        "knowledge": "Một nguyên tắc HAX hoặc PAIR chỉ được áp dụng khi spec map nó tới product behavior quan sát được tại vị trí chính xác trong prototype. Mapping nêu user condition và, khi nguyên tắc nói về control hoặc recovery, action tương ứng của user. Chỉ liệt kê nhãn guideline không chứng minh đã áp dụng.",
        "remediation_target": "Luyện test từng mapping bằng một user condition cụ thể và response trước/sau có thể quan sát trên interface.",
        "is_core": true
      },
      {
        "kc_id": "kc-jtbd-core-job-statement",
        "group_id": "day06-g-jtbd",
        "name": "Viết core functional job statement độc lập với solution",
        "knowledge": "Core functional job nêu điều executor muốn hoàn thành theo dạng verb + object + contextual clarifier không bắt buộc. Câu phải một chiều, không gắn product hay AI, và đủ trừu tượng để bao product function nhưng không trôi khỏi capability liên quan của tổ chức.",
        "remediation_target": "Luyện viết lại product function ở các mức rộng dần và dừng tại mức vẫn chứa function mà product phục vụ.",
        "is_core": true
      },
      {
        "kc_id": "kc-jtbd-job-executor-definition",
        "group_id": "day06-g-jtbd",
        "name": "Xác định job executor mà không thay bằng stakeholder khác",
        "knowledge": "Job executor là người trực tiếp dùng một solution để hoàn thành core functional job. Influencer, economic buyer, người hỗ trợ vòng đời, demographic rộng và job title loại mất executor hợp lệ là các vai khác.",
        "remediation_target": "Luyện phân loại direct executor với buyer, influencer và support role, rồi đặt một nhãn executor đủ bao quát.",
        "is_core": true
      },
      {
        "kc_id": "kc-jtbd-job-story-construction",
        "group_id": "day06-g-jtbd",
        "name": "Viết job story có evidence quanh cùng một core job",
        "knowledge": "Job story ghi một trigger thật, motivation của executor và outcome họ muốn theo dạng When–I want to–So I can. Nhiều story có thể lộ các tình huống khác nhau quanh một core job ổn định; đổi feature hoặc lặp cùng tình huống không tạo story set hữu ích.",
        "remediation_target": "Luyện lấy các When condition đối lập từ record trong khi giữ core job bên dưới không đổi.",
        "is_core": true
      },
      {
        "kc_id": "kc-jtbd-solution-independent-job-map",
        "group_id": "day06-g-jtbd",
        "name": "Dựng JTBD job map độc lập với solution",
        "knowledge": "Job map biểu diễn ideal flow theo needs của executor, không phải current product process hay customer journey. Nó tổ chức điều executor muốn hoàn thành qua define, locate, prepare, confirm, execute, monitor, modify, conclude; một job cụ thể có thể hợp lệ khi thiếu một stage.",
        "remediation_target": "Luyện đổi process phụ thuộc tool thành bước theo needs rồi kiểm sequence và quyết định N/A bằng evidence từ executor.",
        "is_core": true
      },
      {
        "kc_id": "kc-live-demo-standard-hard-case",
        "group_id": "day06-g-demo",
        "name": "Demo live cả standard case và hard AI behavior case",
        "knowledge": "Live demo Day 6 show end-to-end value path bằng một standard input và một input khó/dễ failure, gồm response nhìn thấy của product trước condition khó. Sau đó giám khảo đưa một case lạ tại chỗ, nên hard case chuẩn bị trước phải thuộc risk đã khai chứ không phải một biến thể happy path nữa.",
        "remediation_target": "Luyện ghép một representative success với hard case thuộc risk scenario đã khai, rồi chạy input mới mà không đổi behavior contract.",
        "is_core": true
      },
      {
        "kc_id": "kc-output-led-quality-dimension-derivation",
        "group_id": "day06-g-evaluation",
        "name": "Suy ra quality dimension từ output và failure đã quan sát",
        "knowledge": "Evaluation dimension hữu ích được suy ra bằng cách chạy output thật hoặc provisional, đọc chúng, đặt tên recurring failure pattern và nối từng pattern với product consequence. Bắt đầu từ tính từ trừu tượng như 'tốt' hoặc benchmark mượn có thể bỏ miss failure thật của feature.",
        "remediation_target": "Luyện cluster failure từ output thật và bảo vệ vì sao mỗi cluster cần một product-quality dimension riêng.",
        "is_core": true
      },
      {
        "kc_id": "kc-post-task-validation-probing",
        "group_id": "day06-g-validation",
        "name": "Probe confusion, calibrated trust và intended use sau task",
        "knowledge": "Sau khi quan sát task, facilitator hỏi tập trung vào điểm khó hiểu/khó chịu nhất, participant có tin result không và vì sao, có dùng thật không và vì sao chưa. Câu trả lời nguyên văn là evidence; lời khen chung và câu hỏi dẫn về feature preference là yếu.",
        "remediation_target": "Luyện thay leading preference question bằng neutral probe và giữ exact answer cùng task context.",
        "is_core": true
      },
      {
        "kc_id": "kc-product-design-variant-test",
        "group_id": "day06-g-prototype",
        "name": "So sánh prototype variant trên một design decision có tên",
        "knowledge": "Multi-prototype hữu ích thay đổi một trục quan trọng—mức automation, cách khởi phát interaction hoặc dạng output—trong khi giữ user, job và evidence question ổn định. Alternative trang trí hoặc đổi nhiều trục không cô lập được design learning.",
        "remediation_target": "Luyện nêu một trục khác biệt và observation sẽ ủng hộ từng variant trước khi cho user xem.",
        "is_core": true
      },
      {
        "kc_id": "kc-prototype-real-ai-core-integration",
        "group_id": "day06-g-prototype",
        "name": "Tích hợp AI call thật vào quyết định trung tâm của prototype",
        "knowledge": "Prototype Day 6 có thể là Sketch, Mock hoặc Working nhưng end-to-end demo path phải chứa AI call thật tại quyết định trung tâm đã khai. Component mock phải gắn nhãn rõ, flow được làm trước polish và log/trace chứng minh kết quả lõi không hardcode.",
        "remediation_target": "Luyện trace một demo input từ UI qua central call đã khai tới output rồi đánh dấu mọi boundary còn mô phỏng.",
        "is_core": true
      },
      {
        "kc_id": "kc-qualitative-pattern-codebook-formation",
        "group_id": "day06-g-discovery-evidence",
        "name": "Định nghĩa pattern mining trước khi đếm",
        "knowledge": "Mining bắt đầu bằng việc đọc sample ban đầu để tìm loại pattern thực sự xuất hiện, rồi mới định nghĩa quy tắc xếp loại. Quy tắc và ví dụ truy lại được làm rõ case nào được tính; bắt đầu từ feature ưa thích hoặc đếm nhãn mơ hồ sẽ làm kết quả không tái kiểm được.",
        "remediation_target": "Luyện code một sample hỗn hợp nhỏ, thử case mơ hồ và sửa định nghĩa trước khi báo bất kỳ count nào.",
        "is_core": true
      },
      {
        "kc_id": "kc-quality-bar-precommitment",
        "group_id": "day06-g-evaluation",
        "name": "Precommit quality bar bằng số trước khi evaluation",
        "knowledge": "Quality bar Day 6 gồm numeric pass threshold và hard condition nếu có, được commit trước khi đo full set. Bar giữ nguyên khi result thấp. Nếu chính định nghĩa chấm không dùng được, thay đổi criterion phải ghi trong changelog thay vì âm thầm relabel kết quả.",
        "remediation_target": "Luyện tách product underperformance khỏi criterion defect và ghi condition duy nhất cho phép sửa evaluation contract.",
        "is_core": true
      },
      {
        "kc_id": "kc-reproducible-pattern-prevalence-count",
        "group_id": "day06-g-discovery-evidence",
        "name": "Tạo pattern-prevalence count có thể tái kiểm",
        "knowledge": "Mining count bảo vệ được phải nêu unit, sample boundary, denominator, code rule, numerator, cách xử lý case mơ hồ và giữ ví dụ nguyên văn. Count chỉ mô tả record đã sample theo rule đó; nó không tự chứng minh prevalence toàn population hay quan hệ nhân quả.",
        "remediation_target": "Luyện tái tạo count của peer từ phương pháp đã viết, rồi sửa thành phần đầu tiên còn thiếu: unit, rule, denominator hoặc trace.",
        "is_core": true
      },
      {
        "kc_id": "kc-risk-scenario-behavior-specification",
        "group_id": "day06-g-risk-spec",
        "name": "Đặc tả product behavior mong muốn cho AI risk scenario cụ thể",
        "knowledge": "Risk scenario trở nên testable khi nêu triggering situation, challenge layer, lời hoặc thông tin được hiện, action user được phép và design principle áp dụng. Coverage phải có case hậu quả đáng kể, không chỉ biến thể dễ của happy path.",
        "remediation_target": "Luyện mở một failure label mơ hồ thành trigger, visible response, user action và một case đối lập từ layer khác.",
        "is_core": true
      },
      {
        "kc_id": "kc-rubric-interrater-calibration",
        "group_id": "day06-g-evaluation",
        "name": "Calibrate rubric chấm output bằng rating độc lập",
        "knowledge": "Độ rõ của rubric được test khi ít nhất hai người chấm cùng output độc lập trước khi thảo luận. Chênh lệch cho thấy một criterion có thể còn mơ hồ; phải tìm đúng chỗ gây lệch và viết lại trước khi dùng rubric rộng hơn.",
        "remediation_target": "Luyện double-score output khó, tìm đúng phrase gây lệch và chỉ sửa criterion đó.",
        "is_core": true
      },
      {
        "kc_id": "kc-silent-task-observation-session",
        "group_id": "day06-g-validation",
        "name": "Chạy phiên quan sát task không coaching",
        "knowledge": "User validation bắt đầu bằng task thật và quan sát im lặng. Facilitator không thuyết minh hay gợi ý; họ ghi participant làm gì và kẹt ở đâu để không nhầm guided success với behavior quan sát được.",
        "remediation_target": "Luyện facilitate không can thiệp và log action, stuck point trước khi hỏi opinion.",
        "is_core": true
      },
      {
        "kc_id": "kc-user-validation-change-trace",
        "group_id": "day06-g-validation",
        "name": "Trace user-validation evidence tới quyết định change, retain hoặc backlog",
        "knowledge": "Validation synthesis Day 6 giữ severity của từng observation, tìm theme lặp nhiều nhất rồi chuyển evidence thành một đến hai change trước demo, quyết định giữ có lý do hoặc backlog. Changelog trỏ về feedback hay case đã gây ra thay đổi.",
        "remediation_target": "Luyện nối từng decision change, retain hoặc backlog tới đúng behavior quan sát được hay quote nguyên văn.",
        "is_core": true
      }
    ],
    "questions": [
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Hỏi ai đang tự làm công việc chính từ đầu đến cuối.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-jtbd",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nMột ứng dụng giúp chuẩn bị hồ sơ học bổng. Người trả phí là phụ huynh, cố vấn góp ý, còn học sinh tự tìm chương trình và hoàn tất hồ sơ.\n\nCâu hỏi:\nAi trực tiếp thực hiện công việc chính?",
          "choices": [
            {
              "text": "Phụ huynh chi trả và quyết định ngân sách cho hồ sơ",
              "choice_id": "a"
            },
            {
              "text": "Cố vấn đọc hồ sơ rồi góp ý cách trình bày",
              "choice_id": "b"
            },
            {
              "text": "Học sinh trực tiếp chuẩn bị và hoàn tất hồ sơ",
              "choice_id": "c"
            },
            {
              "text": "Đội sản phẩm xây công cụ hỗ trợ quy trình nộp hồ sơ",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d06-q001",
        "primary_kc_id": "kc-jtbd-job-executor-definition",
        "grading_method": "objective_key",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Tách người yêu cầu, người quyết định và người thực hiện mua.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-jtbd",
        "max_points": 3,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nTrong hệ thống duyệt chi phí, nhân viên tạo yêu cầu, quản lý phê duyệt và kế toán mua gói phần mềm.\n\nCâu hỏi:\nNếu công việc chính là 'quyết định có phê duyệt một khoản chi hay không', hãy nêu người thực hiện phù hợp và loại hai vai trò không trực tiếp thực hiện công việc này.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d06-q002",
        "primary_kc_id": "kc-jtbd-job-executor-definition",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Loại câu chứa tên tính năng, cảm xúc hoặc cấu trúc 'Khi… tôi muốn… để có thể…'.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-jtbd",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Câu hỏi:\nPhát biểu nào mô tả đúng nhất công việc chính của người thường phải xem lại nội dung bài giảng?",
          "choices": [
            {
              "text": "Tìm lại đúng phần kiến thức cần ôn trước khi làm bài",
              "choice_id": "a"
            },
            {
              "text": "Khi sắp thi, tôi muốn ứng dụng tự tạo mốc thời gian để đỡ mất thời gian",
              "choice_id": "b"
            },
            {
              "text": "Đoạn ghi hình dài làm tôi bực vì không nhớ giảng viên nói ở đâu",
              "choice_id": "c"
            },
            {
              "text": "Xây nút tìm kiếm AI cho mọi đoạn ghi hình",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d06-q003",
        "primary_kc_id": "kc-jtbd-core-job-statement",
        "grading_method": "objective_key",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Viết điều người dùng muốn hoàn tất, không viết công cụ họ dùng.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-jtbd",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nNgười phụ trách tuyển dụng hiện lọc CV bằng bảng tính và muốn giảm thời gian tìm ứng viên phù hợp.\n\nCâu hỏi:\nViết một phát biểu về công việc chính, độc lập với giải pháp, ở mức trừu tượng phù hợp; giải thích vì sao không dùng 'lọc CV bằng AI'.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d06-q004",
        "primary_kc_id": "kc-jtbd-core-job-statement",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "initial_check",
        "hints": [
          {
            "text": "Mỗi vế lấy đúng một phần từ quan sát: tình huống, động lực, kết quả mong muốn.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-jtbd",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nCông việc chính: 'tìm lại đúng phần kiến thức cần ôn'. Quan sát gần nhất: trước bài kiểm tra, Lan nhớ có ví dụ về attention nhưng không nhớ nằm ở đoạn ghi hình nào; Lan muốn mở đúng đoạn để kiểm tra cách tính.\n\nCâu hỏi:\nViết một tình huống công việc từ bằng chứng này theo cấu trúc 'Khi… tôi muốn… để có thể…'.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d06-q005",
        "primary_kc_id": "kc-jtbd-job-story-construction",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đi từ tìm dữ liệu vào, chuẩn bị/xác nhận, thực hiện, theo dõi/điều chỉnh rồi kết thúc.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-jtbd",
        "max_points": 7,
        "interaction": {
          "type": "ordering",
          "prompt": "Câu hỏi:\nSắp xếp các bước chuẩn của một bản đồ công việc theo trình tự nhu cầu lý tưởng.",
          "options": [
            {
              "text": "Thực hiện",
              "option_id": "o1"
            },
            {
              "text": "Tìm kiếm",
              "option_id": "o2"
            },
            {
              "text": "Kết thúc",
              "option_id": "o3"
            },
            {
              "text": "Chuẩn bị",
              "option_id": "o4"
            },
            {
              "text": "Theo dõi",
              "option_id": "o5"
            },
            {
              "text": "Xác nhận",
              "option_id": "o6"
            },
            {
              "text": "Điều chỉnh",
              "option_id": "o7"
            }
          ],
          "presentation_policy": {
            "do_not_expose_option_ids": true,
            "shuffle_initial_order_at_delivery": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d06-q006",
        "primary_kc_id": "kc-jtbd-solution-independent-job-map",
        "grading_method": "objective_key",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Xóa tên nút/công nghệ trước, rồi dùng động từ–đối tượng.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-jtbd",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nNhóm mô tả bản đồ công việc là 'Mở ứng dụng → bấm Tải lên → chờ AI → bấm Tải xuống'.\n\nCâu hỏi:\nChẩn đoán lỗi và viết lại ít nhất bốn bước độc lập với giải pháp cho công việc 'tóm tắt tài liệu để chuẩn bị họp'. Đánh dấu một bước là không áp dụng hoặc chưa có bằng chứng nếu phù hợp.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d06-q007",
        "primary_kc_id": "kc-jtbd-solution-independent-job-map",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Phân biệt chưa quan sát được với chắc chắn không tồn tại.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-jtbd",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nTrong nghiên cứu chưa ai cho thấy họ điều chỉnh kết quả sau khi thực hiện công việc. Nhóm vẫn thêm bước Điều chỉnh vì mẫu có sẵn.\n\nCâu hỏi:\nCách xử lý đúng nhất là gì?",
          "choices": [
            {
              "text": "Giữ bước Điều chỉnh như một sự thật vì mẫu đủ bảy bước được xem là bằng chứng",
              "choice_id": "a"
            },
            {
              "text": "Xóa bước Điều chỉnh và kết luận hành vi chỉnh sửa không tồn tại ở mọi tình huống",
              "choice_id": "b"
            },
            {
              "text": "Đánh dấu bước Điều chỉnh là không áp dụng hoặc chưa có bằng chứng, rồi tìm thêm bằng chứng",
              "choice_id": "c"
            },
            {
              "text": "Đổi bước Điều chỉnh thành thao tác bấm nút Sửa trong giao diện hiện tại của nhóm",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d06-q008",
        "primary_kc_id": "kc-jtbd-solution-independent-job-map",
        "grading_method": "objective_key",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Mẫu phải được nhìn thấy và quy tắc phải dùng lại được.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-discovery-evidence",
        "max_points": 1,
        "interaction": {
          "type": "multi_select",
          "prompt": "Bối cảnh:\nNhóm có 200 cuộc trò chuyện nhưng chưa đọc mẫu.\n\nCâu hỏi:\nChọn các bước phù hợp để tạo sổ tay mã hóa trước khi đếm.",
          "choices": [
            {
              "text": "Đọc 30–50 mẫu đầu",
              "choice_id": "a"
            },
            {
              "text": "Đặt tên mẫu lặp lại đã quan sát",
              "choice_id": "b"
            },
            {
              "text": "Định nghĩa quy tắc đưa vào/loại trừ",
              "choice_id": "c"
            },
            {
              "text": "Bắt đầu bằng nhãn tính năng nhóm muốn xây",
              "choice_id": "d"
            },
            {
              "text": "Ghi lại và thảo luận tình huống mơ hồ",
              "choice_id": "e"
            },
            {
              "text": "Đếm ngay toàn bộ rồi mới giải thích quy tắc",
              "choice_id": "f"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          },
          "selection_instruction": "Chọn tất cả phương án đúng."
        },
        "question_id": "d06-q009",
        "primary_kc_id": "kc-qualitative-pattern-codebook-formation",
        "grading_method": "objective_key",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Hãy thử để một người khác áp quy tắc mà không biết ý định của nhóm.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-discovery-evidence",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nNăm cuộc trò chuyện gồm: 'hii', 'cho em hỏi lịch học?', 'hả', 'bài nộp lúc nào?', 'em không hiểu attention'. Nhóm muốn mã hóa mẫu 'tin nhắn không phải câu hỏi rõ'.\n\nCâu hỏi:\nViết quy tắc đưa vào, một quy tắc loại trừ và cách xử lý tình huống 'hả'.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d06-q010",
        "primary_kc_id": "kc-qualitative-pattern-codebook-formation",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "initial_check",
        "hints": [
          {
            "text": "Mẫu dùng để tính không còn là 200 nếu ba tình huống bị loại khỏi cả tử và mẫu.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-discovery-evidence",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nTrong 200 hội thoại, 18 hội thoại có ít nhất một tin nhắn mở đầu không phải câu hỏi theo quy tắc đã khóa; 3 hội thoại mơ hồ được loại khỏi cả tử và mẫu.\n\nCâu hỏi:\nBáo tỷ lệ có thể kiểm lại được và nêu mẫu số thực dùng.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d06-q011",
        "primary_kc_id": "kc-reproducible-pattern-prevalence-count",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "reassessment",
        "hints": [
          {
            "text": "Giữ kết luận trong đúng mẫu và đúng điều đã đếm.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-discovery-evidence",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nBáo cáo viết: '41/200 cuộc trò chuyện mở đầu bằng tin không-phải-câu-hỏi; đơn vị = hội thoại; quy tắc và 5 ví dụ nằm trong phụ lục'.\n\nCâu hỏi:\nKết luận nào được hỗ trợ?",
          "choices": [
            {
              "text": "20,5% hội thoại trong mẫu thỏa quy tắc đã nêu",
              "choice_id": "a"
            },
            {
              "text": "20,5% mọi học viên không biết đặt câu hỏi",
              "choice_id": "b"
            },
            {
              "text": "Mẫu hình này gây ra kết quả học tập thấp",
              "choice_id": "c"
            },
            {
              "text": "Tính năng tự động chắc chắn sẽ được 20,5% học viên dùng",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d06-q012",
        "primary_kc_id": "kc-reproducible-pattern-prevalence-count",
        "grading_method": "objective_key",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": false,
        "role": "follow_up",
        "hints": [
          {
            "text": "Tử và mẫu phải cùng loại đơn vị.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-discovery-evidence",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nMột nhóm báo '65 lỗi trong 50 hội thoại = 130% hội thoại có lỗi'. Mỗi hội thoại có thể có nhiều lỗi.\n\nCâu hỏi:\nChẩn đoán lỗi đơn vị/mẫu số và đề xuất hai chỉ số hợp lệ khác nhau.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d06-q013",
        "primary_kc_id": "kc-reproducible-pattern-prevalence-count",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Có giá trị không đồng nghĩa là hợp lệ.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-discovery-evidence",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nTừ điển dữ liệu nói `resolution_seconds` là thời gian xử lý phiếu hỗ trợ. Trong CSV, 100% giá trị bằng 0 nhưng bản ghi hội thoại cho thấy nhiều phiên kéo dài vài phút.\n\nCâu hỏi:\nXử lý đúng nhất là gì?",
          "choices": [
            {
              "text": "Dùng trung vị bằng 0 vì trường dữ liệu không có giá trị thiếu nào",
              "choice_id": "a"
            },
            {
              "text": "Coi trường dữ liệu là chưa chắc chắn/không dùng được để đo độ trễ cho tới khi xác minh quy trình dữ liệu",
              "choice_id": "b"
            },
            {
              "text": "Thay tất cả giá trị 0 bằng 60 giây theo thời lượng bản ghi lời nói",
              "choice_id": "c"
            },
            {
              "text": "Kết luận mọi yêu cầu trong mẫu đều được hệ thống xử lý tức thì",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d06-q014",
        "primary_kc_id": "kc-dataset-field-validity-audit",
        "grading_method": "objective_key",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Kiểm số lượng bản ghi ghép tương ứng trước và sau khi nối dữ liệu.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-discovery-evidence",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nBảng `messages` có `message_id`, `conversation_id`, `sent_at`, `user_role`; bảng `ratings` có nhiều dòng trên mỗi `conversation_id`. Nhóm ghép trực tiếp rồi đếm tin nhắn và thấy tổng tăng gấp ba.\n\nCâu hỏi:\nKiểm tra lỗi và nêu cách tạo chỉ số số lượng tin nhắn hợp lệ.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d06-q015",
        "primary_kc_id": "kc-dataset-field-validity-audit",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Tách giá trị 0 đã được định nghĩa khỏi trường hợp không có quan sát.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-discovery-evidence",
        "max_points": 1,
        "interaction": {
          "type": "multi_select",
          "prompt": "Bối cảnh:\nTrường `helpful_score` có 38% giá trị thiếu, còn số 0 được từ điển dữ liệu định nghĩa là 'không hữu ích'.\n\nCâu hỏi:\nChọn các kết luận hợp lệ trước khi dùng trường này.",
          "choices": [
            {
              "text": "Số 0 là giá trị hợp lệ theo từ điển, không được tự đổi thành giá trị thiếu",
              "choice_id": "a"
            },
            {
              "text": "Cần xem giá trị thiếu có tập trung theo nhóm người dùng/thời điểm hay không",
              "choice_id": "b"
            },
            {
              "text": "Có thể coi 38% giá trị thiếu là số 0 để tiện tính",
              "choice_id": "c"
            },
            {
              "text": "Phải báo mẫu số và cách xử lý giá trị thiếu",
              "choice_id": "d"
            },
            {
              "text": "Trung bình trên phần không thiếu tự đại diện cho toàn bộ mẫu",
              "choice_id": "e"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          },
          "selection_instruction": "Chọn tất cả phương án đúng."
        },
        "question_id": "d06-q016",
        "primary_kc_id": "kc-dataset-field-validity-audit",
        "grading_method": "objective_key",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Một người chấm phải biết bấm/nhìn ở đâu để kiểm tra.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-risk-spec",
        "max_points": 1,
        "interaction": {
          "type": "multi_select",
          "prompt": "Câu hỏi:\nĐâu là các liên kết đủ cụ thể từ nguyên tắc tới bản mẫu?",
          "choices": [
            {
              "text": "G10 tại ô trả lời: khi thiếu nguồn, trợ giảng AI nói chưa đủ căn cứ và hỏi một câu làm rõ",
              "choice_id": "a"
            },
            {
              "text": "G2 — giao diện phải đáng tin",
              "choice_id": "b"
            },
            {
              "text": "G9 tại mỗi đoạn bản nháp: người dùng sửa trực tiếp và phần chỉnh sửa được giữ lại",
              "choice_id": "c"
            },
            {
              "text": "Khả năng giải thích: cạnh từng nhận định có liên kết về đoạn nguồn",
              "choice_id": "d"
            },
            {
              "text": "G1 — chỉ viết trong đặc tả rằng hệ thống rõ ràng",
              "choice_id": "e"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          },
          "selection_instruction": "Chọn tất cả phương án đúng."
        },
        "question_id": "d06-q017",
        "primary_kc_id": "kc-human-ai-guideline-interface-trace",
        "grading_method": "objective_key",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Viết sao cho TA có thể kiểm bằng mắt và thao tác.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-risk-spec",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nTính năng đề xuất câu trả lời cho TA. Nhóm chọn G8 'gạt bỏ dễ dàng' và G11 'giải thích vì sao'.\n\nCâu hỏi:\nViết hành vi có thể kiểm tra cho từng nguyên tắc, gồm vị trí và hành động của người dùng.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d06-q018",
        "primary_kc_id": "kc-human-ai-guideline-interface-trace",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Hỏi điều gì thiếu hoặc bị vi phạm trước khi nghĩ tới cách sửa.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-risk-spec",
        "max_points": 4,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Trợ giảng AI trích một trang không tồn tại"
            },
            {
              "id": "x2",
              "text": "Người dùng nói 'giải hộ bài này' nhưng không gửi đề"
            },
            {
              "id": "x3",
              "text": "Người dùng yêu cầu trợ lý tự sửa điểm chính thức"
            },
            {
              "id": "x4",
              "text": "Trợ giảng AI giải sai công thức khiến học viên học sai"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Nguồn sự thật"
            },
            {
              "id": "r2",
              "text": "Mơ hồ/thiếu thông tin"
            },
            {
              "id": "r3",
              "text": "Ngoài phạm vi/thẩm quyền"
            },
            {
              "id": "r4",
              "text": "Đặc thù lĩnh vực"
            }
          ],
          "prompt": "Câu hỏi:\nGhép sự cố với lớp thách thức chính.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d06-q019",
        "primary_kc_id": "kc-ai-risk-layer-classification",
        "grading_method": "objective_key",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Tách quyền được làm khỏi độ đúng của dữ liệu và hậu quả.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-risk-spec",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nNgười dùng hỏi 'hãy cấp chứng chỉ hoàn thành'. Trợ giảng AI không có quyền cấp nhưng vẫn tạo PDF mang logo trường và ghi sai tên khóa học.\n\nCâu hỏi:\nPhân loại mọi lớp được bằng chứng hỗ trợ và chỉ ra lớp chính.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d06-q020",
        "primary_kc_id": "kc-ai-risk-layer-classification",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "initial_check",
        "hints": [
          {
            "text": "Viết hành vi mà người chấm có thể đưa dữ liệu vào và quan sát.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-risk-spec",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nTrợ giảng AI chỉ được trả lời dựa trên tài liệu khóa học. Người học hỏi một khái niệm không có trong bộ nguồn.\n\nCâu hỏi:\nViết một tình huống rủi ro gồm điều kiện kích hoạt, lớp áp dụng, hành vi người học nhìn thấy, hành động tiếp theo của người học và nguyên tắc được áp dụng.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d06-q021",
        "primary_kc_id": "kc-risk-scenario-behavior-specification",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Tìm đúng một trục thay đổi được nêu rõ và giữ nguyên các phần còn lại.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-prototype",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nNhóm muốn so hai bản mẫu cho cùng công việc và cùng người dùng. Phương án nào tạo khác biệt hợp lệ nhất trên một trục?",
          "choices": [
            {
              "text": "A dùng AI tự động gửi; B để AI soạn nháp cho người dùng duyệt — mọi phần khác giữ nguyên",
              "choice_id": "a"
            },
            {
              "text": "A là giao diện di động nền tối; B là giao diện máy tính nền sáng và thêm nhiều tính năng",
              "choice_id": "b"
            },
            {
              "text": "A đổi cả nhóm người dùng, luồng chính, dạng đầu ra và câu hỏi cần kiểm chứng; B giữ nguyên bản ban đầu",
              "choice_id": "c"
            },
            {
              "text": "A dùng logo xanh; B dùng logo đỏ dù câu hỏi cần kiểm chứng đang hỏi mức tự động hóa",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d06-q022",
        "primary_kc_id": "kc-product-design-variant-test",
        "grading_method": "objective_key",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Đừng để dạng đầu ra bị lẫn với thay đổi ở mô hình hoặc nội dung.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-prototype",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nCâu hỏi cần kiểm chứng: 'Trợ giảng muốn nhận câu trả lời dạng gạch đầu dòng hay đoạn văn để xem nhanh hơn?'.\n\nCâu hỏi:\nMô tả hai biến thể, phần phải giữ nguyên, tín hiệu so sánh và cách ghi lý do loại một biến thể.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d06-q023",
        "primary_kc_id": "kc-product-design-variant-test",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Cần chứng minh có lời gọi thật, không viết cứng dữ liệu, đồng thời nêu rõ ranh giới phần mô phỏng.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-prototype",
        "max_points": 1,
        "interaction": {
          "type": "multi_select",
          "prompt": "Câu hỏi:\nChọn mọi bằng chứng cần để chứng minh bản mẫu đáp ứng yêu cầu tích hợp AI thật ở phần quyết định trung tâm.",
          "choices": [
            {
              "text": "Luồng từ đầu đến cuối chạy được theo lát cắt",
              "choice_id": "a"
            },
            {
              "text": "Nhật ký/dấu vết lời gọi AI thật ở quyết định trung tâm",
              "choice_id": "b"
            },
            {
              "text": "Ghi rõ phần nào được mô phỏng",
              "choice_id": "c"
            },
            {
              "text": "Ảnh chụp giao diện đẹp",
              "choice_id": "d"
            },
            {
              "text": "Kết quả thay đổi hợp lý theo dữ liệu vào mới",
              "choice_id": "e"
            },
            {
              "text": "Toàn bộ cơ sở dữ liệu và thanh toán phải sẵn sàng vận hành thật",
              "choice_id": "f"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          },
          "selection_instruction": "Chọn tất cả phương án đúng."
        },
        "question_id": "d06-q024",
        "primary_kc_id": "kc-prototype-real-ai-core-integration",
        "grading_method": "objective_key",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Theo dữ liệu từ đầu vào của người dùng tới kết quả họ nhìn thấy.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-prototype",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nBản trình diễn nhận hồ sơ ứng viên rồi hiển thị điểm. Phần máy chủ luôn trả về JSON cố định, nhưng nhóm có một sổ tay chạy mô hình thật trên ví dụ khác.\n\nCâu hỏi:\nBản mẫu có đạt không? Nêu bản sửa tối thiểu và dấu vết cần giữ.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d06-q025",
        "primary_kc_id": "kc-prototype-real-ai-core-integration",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "initial_check",
        "hints": [
          {
            "text": "Mỗi nhóm lỗi cần tên gọi và hệ quả riêng.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-evaluation",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nTrong 12 câu trả lời của trợ giảng AI: 4 câu trích sai trang, 3 câu dài gấp ba mức cần thiết, 2 câu đoán khi thiếu đề bài.\n\nCâu hỏi:\nSuy ra các khía cạnh chất lượng riêng và nối mỗi khía cạnh với hệ quả đối với sản phẩm.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d06-q026",
        "primary_kc_id": "kc-output-led-quality-dimension-derivation",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "reassessment",
        "hints": [
          {
            "text": "Bắt đầu từ hành vi không chấp nhận được đã quan sát.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-evaluation",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Câu hỏi:\nCách bắt đầu nào phù hợp nhất để định nghĩa chất lượng cho một tính năng AI mới?",
          "choices": [
            {
              "text": "Mượn nguyên một bộ chuẩn phổ biến rồi áp trực tiếp trước khi xem câu trả lời thật",
              "choice_id": "a"
            },
            {
              "text": "Chọn các tính từ 'tốt, nhanh, thông minh' làm khía cạnh rồi bắt đầu chấm",
              "choice_id": "b"
            },
            {
              "text": "Chạy mẫu câu trả lời, nhóm các lỗi lặp lại rồi đặt khía cạnh theo hệ quả đối với sản phẩm",
              "choice_id": "c"
            },
            {
              "text": "Chỉ hỏi thành viên trong nhóm họ thích câu trả lời nào và lấy số phiếu",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d06-q027",
        "primary_kc_id": "kc-output-led-quality-dimension-derivation",
        "grading_method": "objective_key",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Một người khác phải chấm được mà không cần đoán theo cảm giác.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-evaluation",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Câu hỏi:\nTiêu chí nào được định nghĩa theo cách có thể chấm nhất cho khía cạnh 'có căn cứ'?",
          "choices": [
            {
              "text": "Câu trả lời phải tạo cảm giác tốt, đúng và đủ đáng tin với người chấm khi đọc",
              "choice_id": "a"
            },
            {
              "text": "Người chấm đọc xong thấy câu trả lời có vẻ hợp lý, tự nhiên và hữu ích trong tình huống",
              "choice_id": "b"
            },
            {
              "text": "Mọi mệnh đề sự kiện phải trỏ tới đoạn nguồn hỗ trợ; mệnh đề không có căn cứ làm tình huống không đạt",
              "choice_id": "c"
            },
            {
              "text": "Câu trả lời phải dùng đúng từng câu chữ trong đáp án mẫu dù ý nghĩa tương đương",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d06-q028",
        "primary_kc_id": "kc-evaluation-criterion-operationalization",
        "grading_method": "objective_key",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Một ngưỡng số đơn lẻ có thể bỏ sót chất lượng nội dung.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-evaluation",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nKhía cạnh 'đúng độ dài'. Câu trả lời A có 70 từ và đủ ý; B có 130 từ, lặp ý; C có 85 từ nhưng thiếu hành động tiếp theo.\n\nCâu hỏi:\nViết quy tắc đạt/không đạt có thể chấm, chấp nhận cách diễn đạt khác nhau và nêu một trường hợp ranh giới chưa giải quyết.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d06-q029",
        "primary_kc_id": "kc-evaluation-criterion-operationalization",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "follow_up",
        "hints": [
          {
            "text": "Tách câu chữ bề mặt khỏi bằng chứng về nghĩa.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-evaluation",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nHai câu trả lời diễn đạt khác nhau nhưng cùng nghĩa sự kiện và cùng nguồn. Bảng tiêu chí hiện ghi 'đạt nếu giống câu trả lời mẫu'.\n\nCâu hỏi:\nSửa đúng phần tiêu chí gây đánh trượt sai và giải thích điều vẫn phải giữ nghiêm ngặt.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d06-q030",
        "primary_kc_id": "kc-evaluation-criterion-operationalization",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Không thảo luận trước lần chấm độc lập đầu tiên.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-evaluation",
        "max_points": 5,
        "interaction": {
          "type": "ordering",
          "prompt": "Câu hỏi:\nSắp xếp đúng quy trình hiệu chỉnh bảng tiêu chí.",
          "options": [
            {
              "text": "So sánh chênh lệch",
              "option_id": "o1"
            },
            {
              "text": "Hai người chấm độc lập cùng một câu trả lời",
              "option_id": "o2"
            },
            {
              "text": "Sửa đúng tiêu chí mơ hồ",
              "option_id": "o3"
            },
            {
              "text": "Chấm lại cùng câu trả lời",
              "option_id": "o4"
            },
            {
              "text": "Chọn mẫu câu trả lời chung",
              "option_id": "o5"
            }
          ],
          "presentation_policy": {
            "do_not_expose_option_ids": true,
            "shuffle_initial_order_at_delivery": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d06-q031",
        "primary_kc_id": "kc-rubric-interrater-calibration",
        "grading_method": "objective_key",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Tìm đúng từ khiến hai người dùng hai quy tắc ngầm khác nhau.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-evaluation",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nTiêu chí ghi 'ngắn gọn'. Với cùng câu trả lời 110 từ, người chấm A cho đạt vì không lặp, người chấm B cho không đạt vì quá 100 từ.\n\nCâu hỏi:\nChẩn đoán và viết bản sửa; nêu cách kiểm lại.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d06-q032",
        "primary_kc_id": "kc-rubric-interrater-calibration",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Hiệu chỉnh cần quan sát chênh lệch trước khi thảo luận.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-evaluation",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nHai người chấm đã thảo luận đáp án trước rồi cùng cho 5/5 câu trả lời là đạt.\n\nCâu hỏi:\nBằng chứng này chứng minh điều gì?",
          "choices": [
            {
              "text": "Bảng tiêu chí chắc chắn vừa rõ vừa đúng cho mọi câu trả lời ngoài mẫu đã dùng khi vận hành",
              "choice_id": "a"
            },
            {
              "text": "Chỉ cho thấy họ đồng ý sau khi đã phối hợp; cần chấm độc lập để kiểm tra độ rõ",
              "choice_id": "b"
            },
            {
              "text": "Bộ mẫu chuẩn đã đại diện cho toàn bộ tập tình huống chỉ vì hai người cùng chấm năm câu trả lời trong mẫu",
              "choice_id": "c"
            },
            {
              "text": "Ngưỡng chất lượng nên đặt 100% vì năm câu trả lời hiện đều được cả hai người cho đạt",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d06-q033",
        "primary_kc_id": "kc-rubric-interrater-calibration",
        "grading_method": "objective_key",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Kiểm tra đủ số lượng, các nhóm phân tầng và dấu vết nguồn.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-evaluation",
        "max_points": 1,
        "interaction": {
          "type": "multi_select",
          "prompt": "Câu hỏi:\nTheo cam kết đánh giá của Ngày 6, bộ mẫu chuẩn cần những thành phần nào?",
          "choices": [
            {
              "text": "Ít nhất 20 tình huống",
              "choice_id": "a"
            },
            {
              "text": "Ít nhất 2 tình huống cho mỗi lớp thách thức",
              "choice_id": "b"
            },
            {
              "text": "8–10 tình huống thường",
              "choice_id": "c"
            },
            {
              "text": "2–4 tình huống hiếm",
              "choice_id": "d"
            },
            {
              "text": "Ít nhất 10 tình huống lấy hoặc phát triển từ nhật ký trò chuyện thật có dấu vết",
              "choice_id": "e"
            },
            {
              "text": "Chỉ chọn tình huống hệ thống đã đạt",
              "choice_id": "f"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          },
          "selection_instruction": "Chọn tất cả phương án đúng."
        },
        "question_id": "d06-q034",
        "primary_kc_id": "kc-ai-golden-set-construction",
        "grading_method": "objective_key",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "easy"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Đếm các điều kiện khác nhau, không chỉ đếm số dòng.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-evaluation",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nBộ mẫu ứng viên có 22 tình huống: 14 tình huống thường, 8 tình huống về nguồn sự thật; không có tình huống mơ hồ, thẩm quyền hoặc gây hại theo lĩnh vực; 12 tình huống sao chép từ cùng một cuộc trò chuyện; tất cả đều đạt.\n\nCâu hỏi:\nKiểm tra các lỗi và đề xuất cách sửa tối thiểu.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d06-q035",
        "primary_kc_id": "kc-ai-golden-set-construction",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Không thay đổi mục tiêu sau khi đã thấy kết quả.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-evaluation",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nTrước khi chạy đánh giá, nhóm chốt: 'đạt nếu ít nhất 85% tình huống đạt và không có mệnh đề sự kiện nào không có nguồn'. Lần chạy đầu đạt 76%.\n\nCâu hỏi:\nHành động đúng là gì?",
          "choices": [
            {
              "text": "Hạ ngưỡng xuống 75%, rồi ghi đây là ngưỡng nhóm đã chốt ban đầu",
              "choice_id": "a"
            },
            {
              "text": "Giữ ngưỡng, kết luận chưa đạt và phân tích lỗi",
              "choice_id": "b"
            },
            {
              "text": "Xóa các tình huống không đạt khỏi bộ mẫu chuẩn rồi tính lại tỷ lệ trên phần còn lại",
              "choice_id": "c"
            },
            {
              "text": "Đổi điều kiện bắt buộc thành điều kiện mềm sau khi đã xem toàn bộ kết quả",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d06-q036",
        "primary_kc_id": "kc-quality-bar-precommitment",
        "grading_method": "objective_key",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Giữ ngưỡng và lịch sử; lập phiên bản cho phần định nghĩa bị lỗi.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-evaluation",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nNgưỡng chốt trước lần chạy là ít nhất 80% và không có vi phạm về thẩm quyền. Sau lần chạy, nhóm phát hiện tiêu chí 'giống câu chữ chính xác' làm mọi cách diễn đạt lại đúng đều không đạt.\n\nCâu hỏi:\nPhân biệt không đạt ngưỡng với lỗi tiêu chí và nêu hồ sơ phải giữ.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d06-q037",
        "primary_kc_id": "kc-quality-bar-precommitment",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Chọn những yếu tố giúp kiểm tra mục tiêu trước và sau lần chạy.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-evaluation",
        "max_points": 1,
        "interaction": {
          "type": "multi_select",
          "prompt": "Câu hỏi:\nMột ngưỡng chất lượng được cam kết trước hợp lệ phải có gì?",
          "choices": [
            {
              "text": "Ngưỡng bằng số",
              "choice_id": "a"
            },
            {
              "text": "Điều kiện bắt buộc nếu rủi ro yêu cầu",
              "choice_id": "b"
            },
            {
              "text": "Mốc thời gian/phiên bản trước lần chạy đầy đủ",
              "choice_id": "c"
            },
            {
              "text": "Quyền hạ ngưỡng sau khi thấy kết quả",
              "choice_id": "d"
            },
            {
              "text": "Mục tiêu so sánh được cố định",
              "choice_id": "e"
            },
            {
              "text": "Tuyên bố ngưỡng đã được hiệu chỉnh bằng dữ liệu dù chưa có dữ liệu",
              "choice_id": "f"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          },
          "selection_instruction": "Chọn tất cả phương án đúng."
        },
        "question_id": "d06-q038",
        "primary_kc_id": "kc-quality-bar-precommitment",
        "grading_method": "objective_key",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "initial_check",
        "hints": [
          {
            "text": "Đạt tỷ lệ phần trăm chưa đủ nếu điều kiện bắt buộc bị vi phạm.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-evaluation",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nBộ mẫu chuẩn có 20 tình huống. Bảng kết quả chỉ giữ 16 tình huống đạt, 4 tình huống không đạt đã bị xóa. Ngưỡng là ít nhất 80% và không có vi phạm về thẩm quyền. Trong bốn tình huống bị xóa có một vi phạm về thẩm quyền.\n\nCâu hỏi:\nTính/kết luận đúng và nêu lỗi trong hồ sơ.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d06-q039",
        "primary_kc_id": "kc-complete-eval-run-record",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "reassessment",
        "hints": [
          {
            "text": "Người chấm phải có thể tính lại được kết quả.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-evaluation",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Câu hỏi:\nHồ sơ lần chạy nào đầy đủ nhất?",
          "choices": [
            {
              "text": "Chỉ lưu bảng tổng hợp 87% cùng một câu kết luận sản phẩm đã đạt",
              "choice_id": "a"
            },
            {
              "text": "Dữ liệu vào/kết quả của mọi tình huống, đánh giá theo từng khía cạnh, số liệu tổng hợp, ngưỡng/phiên bản và mọi tình huống không đạt",
              "choice_id": "b"
            },
            {
              "text": "Chỉ lưu ảnh chụp ba tình huống đạt đẹp nhất và bỏ kết quả thô còn lại",
              "choice_id": "c"
            },
            {
              "text": "Lưu bảng đã loại các điểm bất thường sau khi thấy kết quả nhưng không ghi quy tắc loại",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d06-q040",
        "primary_kc_id": "kc-complete-eval-run-record",
        "grading_method": "objective_key",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "follow_up",
        "hints": [
          {
            "text": "Một thay đổi prompt tạo ra một lần đo mới.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-evaluation",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nHai dòng có cùng mã tình huống; một dòng không đạt bị đổi thành đạt sau khi sửa prompt nhưng câu trả lời cũ đã bị ghi đè.\n\nCâu hỏi:\nSửa dấu vết nguồn gốc của hồ sơ lần chạy như thế nào?",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d06-q041",
        "primary_kc_id": "kc-complete-eval-run-record",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "initial_check",
        "hints": [
          {
            "text": "Quan sát điều người tham gia làm, không giải thích hộ họ.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-validation",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nBản mẫu giúp sinh viên tìm lại đoạn bài giảng. Bạn cần chạy một phiên xác thực kéo dài 10 phút.\n\nCâu hỏi:\nViết hướng dẫn giao nhiệm vụ, hai điều người điều phối không được làm và ba loại quan sát phải ghi trước khi hỏi ý kiến.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d06-q042",
        "primary_kc_id": "kc-silent-task-observation-session",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "initial_check",
        "hints": [
          {
            "text": "Không hỏi 'bạn có thích/tính năng này có hữu ích không?'.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-validation",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nNgười tham gia vừa hoàn thành nhiệm vụ với trợ giảng AI.\n\nCâu hỏi:\nViết ba câu hỏi sau nhiệm vụ, theo cách trung lập, để đo: điểm khó chịu/khó hiểu, mức tin tưởng có lý do và ý định sử dụng có rào cản; nêu thông tin kèm theo phải giữ.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d06-q043",
        "primary_kc_id": "kc-post-task-validation-probing",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "initial_check",
        "hints": [
          {
            "text": "Chủ đề lặp lại và có hậu quả cao đứng trước sở thích đơn lẻ.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-validation",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\n5 người kiểm thử: P1/P2/P4 không thấy liên kết nguồn (mức độ nghiêm trọng cao); P3 muốn giao diện nền tối (thấp); P5 nói câu trả lời dài nhưng vẫn hoàn thành (trung bình).\n\nCâu hỏi:\nĐưa ra một quyết định thay đổi, một quyết định giữ nguyên và một quyết định để sau có dấu vết.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d06-q044",
        "primary_kc_id": "kc-user-validation-change-trace",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "reassessment",
        "hints": [
          {
            "text": "Không coi mọi phản hồi đều là yêu cầu bắt buộc.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-validation",
        "max_points": 4,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "4/5 người không tìm thấy nút sửa"
            },
            {
              "id": "x2",
              "text": "1 người thích kiểu chữ tròn hơn"
            },
            {
              "id": "x3",
              "text": "5/5 hoàn thành bước tải tệp lên mà không cần hỗ trợ"
            },
            {
              "id": "x4",
              "text": "2 người xin xuất tệp nhưng ngoài lát cắt trình diễn"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "Thay đổi trước khi trình diễn"
            },
            {
              "id": "r2",
              "text": "Để sau vì là sở thích"
            },
            {
              "id": "r3",
              "text": "Giữ nguyên có bằng chứng"
            },
            {
              "id": "r4",
              "text": "Để sau vì ngoài phạm vi"
            }
          ],
          "prompt": "Câu hỏi:\nGhép bằng chứng với cách xử lý hợp lý nhất.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d06-q045",
        "primary_kc_id": "kc-user-validation-change-trace",
        "grading_method": "objective_key",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Bằng chứng của mỗi trang chiếu phải cho người nghe kiểm lại tuyên bố trên chính trang đó.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-demo",
        "max_points": 5,
        "interaction": {
          "left": [
            {
              "id": "x1",
              "text": "Người dùng và công việc"
            },
            {
              "id": "x2",
              "text": "Vì sao chọn tính năng"
            },
            {
              "id": "x3",
              "text": "Kết quả đo"
            },
            {
              "id": "x4",
              "text": "Người dùng thật nói gì"
            },
            {
              "id": "x5",
              "text": "Nếu có thêm một tuần nữa"
            }
          ],
          "type": "matching",
          "right": [
            {
              "id": "r1",
              "text": "41/200 cuộc trò chuyện khớp mẫu hình + JTBD cốt lõi"
            },
            {
              "id": "r2",
              "text": "Bảng tác động của ba phương án và lý do loại"
            },
            {
              "id": "r3",
              "text": "76% so với ngưỡng 85% + lỗi chính"
            },
            {
              "id": "r4",
              "text": "Trích dẫn nguyên văn có tên/vai trò + thay đổi"
            },
            {
              "id": "r5",
              "text": "Ưu tiên trỏ tới lỗi/phản hồi chưa xử lý"
            }
          ],
          "prompt": "Câu hỏi:\nGhép phần trình diễn với bằng chứng phù hợp nhất.",
          "presentation_policy": {
            "do_not_align_pairs_by_row": true,
            "shuffle_right_at_delivery": true,
            "do_not_expose_internal_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d06-q046",
        "primary_kc_id": "kc-evidence-backed-demo-claim-trace",
        "grading_method": "objective_key",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Mỗi phần trả lời 'tuyên bố này được kiểm bằng tài liệu nào?'.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-demo",
        "max_points": 6,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nNhóm có: số lượng 41/200; bảng tác động; bản mẫu; lần chạy đạt 76% so với ngưỡng 85%; trích dẫn P2 'không thấy nguồn'; nhật ký thay đổi đã thêm liên kết nguồn.\n\nCâu hỏi:\nViết dàn ý sáu phần trình diễn, mỗi phần nêu tuyên bố và dấu vết bằng chứng tương ứng.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d06-q047",
        "primary_kc_id": "kc-evidence-backed-demo-claim-trace",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "hard"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Con số chỉ có nghĩa khi đặt cạnh ngưỡng đã cam kết trước.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-demo",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nLần chạy chỉ đạt 76% so với ngưỡng 85%. Trang chiếu viết 'đã đạt chất lượng tốt' và không hiện ngưỡng.\n\nCâu hỏi:\nCách sửa tuyên bố nào trung thực nhất?",
          "choices": [
            {
              "text": "Giữ tuyên bố đạt chất lượng vì tỷ lệ 76% vẫn lớn hơn một nửa số tình huống",
              "choice_id": "a"
            },
            {
              "text": "Báo 76% chưa đạt ngưỡng 85%, nêu lỗi chính và thử nghiệm tiếp theo",
              "choice_id": "b"
            },
            {
              "text": "Đổi ngưỡng thành 75% trên trang chiếu nhưng vẫn nói ngưỡng đã được chốt",
              "choice_id": "c"
            },
            {
              "text": "Chỉ trình diễn ba tình huống đạt đẹp và không hiện kết quả của lần chạy toàn bộ bộ mẫu",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d06-q048",
        "primary_kc_id": "kc-evidence-backed-demo-claim-trace",
        "grading_method": "objective_key",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "initial_check",
        "hints": [
          {
            "text": "Tình huống khó phải làm lộ hành vi khi rủi ro xảy ra.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-demo",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Câu hỏi:\nCặp tình huống nào phù hợp nhất cho phần trình diễn trực tiếp của trợ giảng AI?",
          "choices": [
            {
              "text": "Hai câu hỏi phổ biến đều có nguồn rõ và đều đi qua cùng đường đi thuận lợi",
              "choice_id": "a"
            },
            {
              "text": "Một câu có nguồn rõ và một câu ngoài tài liệu để thể hiện giới hạn + chuyển cho trợ giảng",
              "choice_id": "b"
            },
            {
              "text": "Một đoạn ghi hình thành công và một ảnh chụp thành công của đúng cùng loại dữ liệu vào",
              "choice_id": "c"
            },
            {
              "text": "Hai dữ liệu vào giống nhau về điều kiện rủi ro, chỉ thay tên của học viên trong câu hỏi",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d06-q049",
        "primary_kc_id": "kc-live-demo-standard-hard-case",
        "grading_method": "objective_key",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "reassessment",
        "hints": [
          {
            "text": "Nêu hệ thống làm gì khi thành công và khi điều kiện khó xuất hiện.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-demo",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nDanh mục rủi ro có tình huống mơ hồ, thẩm quyền và lỗi nguồn. Tính năng chính là trả lời từ bản ghi lời nói có trích dẫn.\n\nCâu hỏi:\nThiết kế tình huống chuẩn, tình huống khó và cam kết hành vi khi giám khảo đưa tình huống lạ.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d06-q050",
        "primary_kc_id": "kc-live-demo-standard-hard-case",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "follow_up",
        "hints": [
          {
            "text": "Giữ dấu vết và minh bạch về phần chạy trực tiếp/bản dự phòng.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-demo",
        "max_points": 1,
        "interaction": {
          "type": "multi_select",
          "prompt": "Câu hỏi:\nKhi giám khảo đưa một dữ liệu vào lạ tại chỗ, nhóm nên làm gì?",
          "choices": [
            {
              "text": "Chạy qua bản mẫu hiện có",
              "choice_id": "a"
            },
            {
              "text": "Giữ cam kết hành vi/khi có lỗi đã nêu",
              "choice_id": "b"
            },
            {
              "text": "Nếu dùng bản dự phòng thì nói rõ",
              "choice_id": "c"
            },
            {
              "text": "Âm thầm sửa prompt cho tình huống đó",
              "choice_id": "d"
            },
            {
              "text": "Nếu không đạt, chỉ ra hành vi quan sát được thay vì che giấu",
              "choice_id": "e"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          },
          "selection_instruction": "Chọn tất cả phương án đúng."
        },
        "question_id": "d06-q051",
        "primary_kc_id": "kc-live-demo-standard-hard-case",
        "grading_method": "objective_key",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": false,
        "role": "initial_check",
        "hints": [
          {
            "text": "Bản dự phòng là bằng chứng dự phòng minh bạch, không phải cách che một lần chạy không đạt.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-demo",
        "max_points": 4,
        "interaction": {
          "type": "short_text",
          "prompt": "Bối cảnh:\nNhóm có phần trình diễn 5 phút, bốn thành viên và một API đôi lúc hết thời gian chờ.\n\nCâu hỏi:\nLập danh sách diễn tập gồm thời lượng/người trình bày, lỗi được chủ động tạo, bản dự phòng và phân công trả lời hỏi đáp.",
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d06-q052",
        "primary_kc_id": "kc-demo-rehearsal-backup-and-qna",
        "grading_method": "criterion_rubric",
        "question_version": 1,
        "cognitive_operation": "Create",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      },
      {
        "servable": true,
        "role": "reassessment",
        "hints": [
          {
            "text": "Phân biệt tài liệu dự phòng với trạng thái lần chạy hiện tại.",
            "hint_id": "h1",
            "penalty_policy": "supported_evidence"
          }
        ],
        "module_id": "day06-g-demo",
        "max_points": 1,
        "interaction": {
          "type": "single_select",
          "prompt": "Bối cảnh:\nAPI đang chạy trực tiếp bị hết thời gian chờ. Nhóm chuyển sang đoạn ghi hình đã quay nhưng nói 'hệ thống vừa chạy thành công'.\n\nCâu hỏi:\nĐánh giá đúng nhất là gì?",
          "choices": [
            {
              "text": "Hợp lệ vì đoạn ghi hình có kết quả đẹp và người xem không cần biết trạng thái chạy trực tiếp hiện tại",
              "choice_id": "a"
            },
            {
              "text": "Không hợp lệ: có thể dùng bản dự phòng nhưng phải nói rõ lần chạy trực tiếp không đạt và đây là bản ghi",
              "choice_id": "b"
            },
            {
              "text": "Phải bỏ toàn bộ phần trình diễn, kể cả không được mở tài liệu dự phòng đã chuẩn bị từ trước",
              "choice_id": "c"
            },
            {
              "text": "Chỉ cần người trình bày thuộc kịch bản và trả lời hỏi đáp, không cần phân biệt đoạn ghi hình với lần chạy trực tiếp",
              "choice_id": "d"
            }
          ],
          "presentation_policy": {
            "shuffle_at_delivery": true,
            "do_not_expose_choice_ids": true
          },
          "prompt_presentation": {
            "render_sections": true,
            "preserve_line_breaks": true
          }
        },
        "question_id": "d06-q053",
        "primary_kc_id": "kc-demo-rehearsal-backup-and-qna",
        "grading_method": "objective_key",
        "question_version": 1,
        "cognitive_operation": "Analyze",
        "contributing_kc_ids": [],
        "estimated_difficulty": "medium"
      }
    ],
    "round_sizes": {
      "post": 15,
      "recommended": 6,
      "all": 6
    }
  }
}
