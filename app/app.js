/**
 * BankAI Offline Interactive Learning Web Application
 * Core Client-side Logic (Runs 100% Offline without Runtime API calls)
 */

(() => {
  'use strict';

  // --- Hằng số & Khóa LocalStorage ---
  const STORAGE_KEYS = {
    PROGRESS: 'bankai_quiz_progress_v1',
    KC_PROGRESS: 'bankai_kc_progress_v1',
    EXAM_STATS: 'bankai_exam_stats_v1',
    THEME: 'bankai_theme_mode',
    CURRENT_DAY: 'bankai_active_day_id',
    CURRENT_TAB: 'bankai_active_tab'
  };

  // --- Trạng thái Ứng dụng (App State) ---
  const state = {
    coursesData: null,
    currentDayId: 'day01',
    currentDayData: null,
    currentTab: 'quiz',
    userProgress: {}, // { [day_id]: { [qid]: { user_answer, is_correct, is_checked } } }
    kcProgress: {},   // { [day_id]: { [kc_id]: 'flagged' | 'done' } }
    examStats: {      // Thống kê thi thử bền vững
      totalQuestions: 0,
      totalCorrect: 0,
      totalExams: 0,
      dayStats: {}    // { [dayId]: { selected: 0, correct: 0 } }
    },
    currentExam: null, // Phiên thi đang diễn ra
    reviewExam: null,  // Bài thi vừa nộp đang xem lại
    allDaysCache: null, // Bộ nhớ đệm toàn bộ 15 Day để bốc đề tức thì
    revealedAnswers: {}, // { [dayId]: { [qid]: boolean } }
    examTimerInterval: null,
    examStartTime: 0,
    examDurationSeconds: 0,
    examRemainingSeconds: 0,
    examIsOverdue: false,
    activeFilter: 'all', // 'all' | 'unanswered' | 'correct' | 'incorrect'
    kcStatusFilter: 'all', // 'all' | 'flagged' | 'done'
    kcSearchQuery: '',
    kcCoreOnly: false
  };

  // --- DOM Elements ---
  const DOM = {
    appLayout: document.getElementById('app-layout'),
    themeToggleBtn: document.getElementById('theme-toggle-btn'),
    globalProgressText: document.getElementById('global-progress-text'),
    globalScoreText: document.getElementById('global-score-text'),
    globalProgressBar: document.getElementById('global-progress-bar'),
    daysList: document.getElementById('days-list'),
    
    // Top Navbar
    currentDayCode: document.getElementById('current-day-code'),
    currentDayStatus: document.getElementById('current-day-status'),
    currentDayTitle: document.getElementById('current-day-title'),
    tabQuizBtn: document.getElementById('tab-quiz'),
    tabKnowledgeBtn: document.getElementById('tab-knowledge'),
    tabExamBtn: document.getElementById('tab-exam'),
    headerSlideBtn: document.getElementById('header-slide-btn'),
    headerSlideText: document.getElementById('header-slide-text'),
    quizCountBadge: document.getElementById('quiz-count-badge'),
    kcCountBadge: document.getElementById('kc-count-badge'),
    resetDayBtn: document.getElementById('reset-day-btn'),
    
    // Views
    quizView: document.getElementById('quiz-view'),
    knowledgeView: document.getElementById('knowledge-view'),
    examView: document.getElementById('exam-view'),
    
    // Quiz View Elements
    filterPills: document.querySelectorAll('.filter-pill'),
    filterAllCount: document.getElementById('filter-all-count'),
    filterObjectiveCount: document.getElementById('filter-objective-count'),
    filterShorttextCount: document.getElementById('filter-shorttext-count'),
    filterUnansweredCount: document.getElementById('filter-unanswered-count'),
    filterCorrectCount: document.getElementById('filter-correct-count'),
    filterIncorrectCount: document.getElementById('filter-incorrect-count'),
    dayProgressText: document.getElementById('day-progress-text'),
    dayProgressBar: document.getElementById('day-progress-bar'),
    questionsStream: document.getElementById('questions-stream'),
    
    // Knowledge View Elements
    kcSearchInput: document.getElementById('kc-search-input'),
    kcCoreOnlyCheckbox: document.getElementById('kc-core-only-checkbox'),
    kcGroupsContainer: document.getElementById('kc-groups-container'),
    kcFilterPills: document.querySelectorAll('.kc-filter-pill'),
    kcFilterAllCount: document.getElementById('kc-filter-all-count'),
    kcFilterFlaggedCount: document.getElementById('kc-filter-flagged-count'),
    kcFilterDoneCount: document.getElementById('kc-filter-done-count'),
    kcDayProgressText: document.getElementById('kc-day-progress-text'),
    kcDayProgressBar: document.getElementById('kc-day-progress-bar'),

    // Exam View Elements (Thi Thử)
    examLobbyScreen: document.getElementById('exam-lobby-screen'),
    examActiveScreen: document.getElementById('exam-active-screen'),
    examResultScreen: document.getElementById('exam-result-screen'),
    examReviewScreen: document.getElementById('exam-review-screen'),
    btnStartFull: document.getElementById('btn-start-full'),
    btnStartShort: document.getElementById('btn-start-short'),
    resetExamStatsBtn: document.getElementById('reset-exam-stats-btn'),
    kpiTotalQuestions: document.getElementById('kpi-total-questions'),
    kpiCorrectQuestions: document.getElementById('kpi-correct-questions'),
    kpiAccuracyRate: document.getElementById('kpi-accuracy-rate'),
    kpiTotalExams: document.getElementById('kpi-total-exams'),
    examDaysStatsTbody: document.getElementById('exam-days-stats-tbody'),
    examActiveTitlePill: document.getElementById('exam-active-title-pill'),
    examAnsweredCounter: document.getElementById('exam-answered-counter'),
    examTimerWidget: document.getElementById('exam-timer-widget'),
    examTimerText: document.getElementById('exam-timer-text'),
    examTimerSubtext: document.getElementById('exam-timer-subtext'),
    btnCancelExam: document.getElementById('btn-cancel-exam'),
    btnSubmitExam: document.getElementById('btn-submit-exam'),
    examPaletteGrid: document.getElementById('exam-palette-grid'),
    examQuestionsStream: document.getElementById('exam-questions-stream'),
    resultScoreNumber: document.getElementById('result-score-number'),
    resultScoreTotal: document.getElementById('result-score-total'),
    resultScorePercent: document.getElementById('result-score-percent'),
    resultTimeTaken: document.getElementById('result-time-taken'),
    resultCorrectCount: document.getElementById('result-correct-count'),
    resultIncorrectCount: document.getElementById('result-incorrect-count'),
    resultEssayCount: document.getElementById('result-essay-count'),
    btnReviewExam: document.getElementById('btn-review-exam'),
    btnNewExam: document.getElementById('btn-new-exam'),
    btnBackToLobby: document.getElementById('btn-back-to-lobby'),
    reviewExamSummaryText: document.getElementById('review-exam-summary-text'),
    reviewFilterPills: document.querySelectorAll('.review-pill'),
    examReviewStream: document.getElementById('exam-review-stream'),
    
    toastContainer: document.getElementById('toast-container'),
    saveStatusPill: document.getElementById('save-status-pill'),
    saveStatusText: document.getElementById('save-status-text'),
    exportBackupBtn: document.getElementById('export-backup-btn'),
    importBackupBtn: document.getElementById('import-backup-btn'),
    importBackupFile: document.getElementById('import-backup-file')
  };

  // --- Khởi tạo Ứng dụng ---
  async function initApp() {
    loadStoredPreferences();
    setupEventListeners();
    await fetchCoursesIndex();
    await syncProgressWithServer();
  }

  // --- Cập nhật Huy hiệu trạng thái lưu trữ ---
  function updateSaveIndicator(status) {
    if (!DOM.saveStatusPill || !DOM.saveStatusText) return;
    if (status === 'saving') {
      DOM.saveStatusPill.className = 'save-status-pill saving';
      DOM.saveStatusText.textContent = 'Đang lưu...';
    } else if (status === 'saved') {
      DOM.saveStatusPill.className = 'save-status-pill';
      DOM.saveStatusText.textContent = 'Đã lưu ổ cứng';
    } else if (status === 'local_only') {
      DOM.saveStatusPill.className = 'save-status-pill local';
      DOM.saveStatusText.textContent = 'Lưu trình duyệt';
    }
  }

  // --- Tải Tùy chọn ban đầu từ LocalStorage (Để UI hiển thị tức thì không delay) ---
  function loadStoredPreferences() {
    // 1. Theme
    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME) || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeButtonText(savedTheme);

    // 2. Active Day & Tab
    state.currentDayId = localStorage.getItem(STORAGE_KEYS.CURRENT_DAY) || 'day01';
    state.currentTab = localStorage.getItem(STORAGE_KEYS.CURRENT_TAB) || 'quiz';

    // 3. User Progress
    try {
      const storedProgress = localStorage.getItem(STORAGE_KEYS.PROGRESS);
      state.userProgress = storedProgress ? JSON.parse(storedProgress) : {};
    } catch (e) {
      console.warn('Lỗi đọc progress từ localStorage:', e);
      state.userProgress = {};
    }

    // 4. Knowledge Progress (Tick xanh vs Cờ vàng)
    try {
      const storedKc = localStorage.getItem(STORAGE_KEYS.KC_PROGRESS);
      state.kcProgress = storedKc ? JSON.parse(storedKc) : {};
    } catch (e) {
      console.warn('Lỗi đọc kcProgress từ localStorage:', e);
      state.kcProgress = {};
    }

    // 5. Exam Statistics (Thống kê thi thử)
    try {
      const storedExam = localStorage.getItem(STORAGE_KEYS.EXAM_STATS);
      state.examStats = storedExam ? JSON.parse(storedExam) : {
        totalQuestions: 0,
        totalCorrect: 0,
        totalExams: 0,
        dayStats: {}
      };
    } catch (e) {
      console.warn('Lỗi đọc examStats từ localStorage:', e);
      state.examStats = { totalQuestions: 0, totalCorrect: 0, totalExams: 0, dayStats: {} };
    }
  }

  // --- Đồng bộ 2 chiều với File lưu trữ Backend trên ổ cứng (user_progress.json) ---
  async function syncProgressWithServer() {
    try {
      const resp = await fetch('/api/progress');
      if (!resp.ok) {
        updateSaveIndicator('local_only');
        return;
      }
      const serverData = await resp.json();
      if (!serverData || typeof serverData !== 'object') {
        updateSaveIndicator('local_only');
        return;
      }

      let hasNewData = false;

      // 0. Đồng bộ Exam Statistics
      if (serverData.examStats && typeof serverData.examStats === 'object') {
        const sStats = serverData.examStats;
        if ((sStats.totalQuestions || 0) >= (state.examStats.totalQuestions || 0)) {
          state.examStats = sStats;
          localStorage.setItem(STORAGE_KEYS.EXAM_STATS, JSON.stringify(state.examStats));
        }
      }

      // 1. Đồng bộ Knowledge Progress (Tick xanh lý thuyết & Cờ vàng)
      const serverKc = serverData.kcProgress || {};
      if (Object.keys(serverKc).length > 0) {
        if (!state.kcProgress) state.kcProgress = {};
        for (const [dayId, kcs] of Object.entries(serverKc)) {
          if (!state.kcProgress[dayId]) state.kcProgress[dayId] = {};
          for (const [kcId, status] of Object.entries(kcs)) {
            // Giữ lại 'done' nếu một trong hai bên đã tick xanh
            if (!state.kcProgress[dayId][kcId] || status === 'done') {
              if (state.kcProgress[dayId][kcId] !== status) {
                state.kcProgress[dayId][kcId] = status;
                hasNewData = true;
              }
            }
          }
        }
      } else if (Object.keys(state.kcProgress || {}).length > 0) {
        // Local có nhưng file trên đĩa chưa có -> lưu local lên file
        hasNewData = true;
      }

      // 2. Đồng bộ Quiz Progress (Câu trả lời, điểm số, trạng thái kiểm tra)
      const serverProg = serverData.userProgress || {};
      if (Object.keys(serverProg).length > 0) {
        if (!state.userProgress) state.userProgress = {};
        for (const [dayId, qmap] of Object.entries(serverProg)) {
          if (!state.userProgress[dayId]) state.userProgress[dayId] = {};
          for (const [qid, qval] of Object.entries(qmap)) {
            const localQ = state.userProgress[dayId][qid];
            if (!localQ || (qval.is_checked && !localQ.is_checked)) {
              state.userProgress[dayId][qid] = { ...qval };
              hasNewData = true;
            } else if (localQ && qval) {
              if (qval.checked_kps && (!localQ.checked_kps || qval.checked_kps.length > localQ.checked_kps.length)) {
                localQ.checked_kps = qval.checked_kps;
                hasNewData = true;
              }
              if (qval.self_eval && !localQ.self_eval) {
                localQ.self_eval = qval.self_eval;
                hasNewData = true;
              }
            }
          }
        }
      } else if (Object.keys(state.userProgress || {}).length > 0) {
        hasNewData = true;
      }

      // 3. Đồng bộ Active Day & Tab nếu có lưu
      if (serverData.currentDayId && !localStorage.getItem(STORAGE_KEYS.CURRENT_DAY)) {
        state.currentDayId = serverData.currentDayId;
      }

      // Lưu lại vào LocalStorage để cả 2 lớp lưu trữ đồng nhất
      localStorage.setItem(STORAGE_KEYS.KC_PROGRESS, JSON.stringify(state.kcProgress));
      localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(state.userProgress));

      // Đẩy dữ liệu hợp nhất lên file trên ổ cứng
      saveProgressToServer(true);

      // Cập nhật lại giao diện hoàn chỉnh
      updateGlobalProgress();
      updateDayNavProgress();
      updateQuizProgressUI();
      updateKcProgressUI();

      if (state.currentTab === 'quiz') {
        renderQuizStream();
      } else if (state.currentTab === 'knowledge') {
        renderKnowledgeBase();
      }

      updateSaveIndicator('saved');
    } catch (err) {
      console.warn('Đang chạy ở môi trường offline/static:', err);
      updateSaveIndicator('local_only');
    }
  }

  // --- Ghi Tiến độ vào Backend File trên Ổ cứng ---
  let serverSaveTimer = null;
  function saveProgressToServer(immediate = false) {
    const doSave = () => {
      const payload = {
        userProgress: state.userProgress,
        kcProgress: state.kcProgress,
        examStats: state.examStats,
        currentDayId: state.currentDayId,
        currentTab: state.currentTab,
        theme: document.documentElement.getAttribute('data-theme') || 'dark',
        last_saved: new Date().toISOString()
      };

      updateSaveIndicator('saving');

      fetch('/api/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        keepalive: true
      })
      .then(res => {
        if (res.ok) {
          updateSaveIndicator('saved');
        } else {
          updateSaveIndicator('local_only');
        }
      })
      .catch(() => {
        updateSaveIndicator('local_only');
      });
    };

    if (immediate) {
      if (serverSaveTimer) clearTimeout(serverSaveTimer);
      doSave();
    } else {
      if (serverSaveTimer) clearTimeout(serverSaveTimer);
      serverSaveTimer = setTimeout(doSave, 300);
    }
  }

  // --- Lưu Tiến độ Quiz (Cả LocalStorage + Ổ cứng) ---
  function saveProgress() {
    try {
      localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(state.userProgress));
      updateGlobalProgress();
      updateDayNavProgress();
      updateQuizProgressUI();
    } catch (e) {
      console.error('Lỗi lưu progress vào localStorage:', e);
    }
    saveProgressToServer();
  }

  // --- Lưu & Truy vấn Trạng thái Kiến thức (Tick xanh vs Cờ vàng) ---
  function saveKcProgress() {
    try {
      localStorage.setItem(STORAGE_KEYS.KC_PROGRESS, JSON.stringify(state.kcProgress));
    } catch (e) {
      console.warn('Lỗi lưu kcProgress vào localStorage:', e);
    }
    saveProgressToServer();
  }

  function getKcStatus(dayId, kcId) {
    if (state.kcProgress[dayId] && state.kcProgress[dayId][kcId]) {
      return state.kcProgress[dayId][kcId];
    }
    return 'flagged'; // Mặc định ban đầu: tất cả đều gắn cờ vàng
  }

  function setKcStatus(dayId, kcId, newStatus) {
    if (!state.kcProgress[dayId]) {
      state.kcProgress[dayId] = {};
    }
    state.kcProgress[dayId][kcId] = newStatus;
    saveKcProgress();
  }

  // --- Cập nhật Widget Tiến độ Ngày & Bộ đếm Thanh Lọc KC ---
  function updateKcProgressUI() {
    const data = state.currentDayData;
    if (!data) return;

    const allKcs = data.knowledge_components || [];
    const totalAll = allKcs.length;
    const doneAll = allKcs.filter(kc => getKcStatus(data.day_id, kc.kc_id) === 'done').length;
    const percentAll = totalAll > 0 ? Math.round((doneAll / totalAll) * 100) : 0;

    const coreOnly = state.kcCoreOnly;
    const coreKcs = allKcs.filter(kc => kc.is_core);
    const totalCore = coreKcs.length;
    const doneCore = coreKcs.filter(kc => getKcStatus(data.day_id, kc.kc_id) === 'done').length;
    const percentCore = totalCore > 0 ? Math.round((doneCore / totalCore) * 100) : 0;

    // Hiển thị tổng số mục nhỏ đã hoàn thành của day đó (luôn hiển thị rõ dù chọn cốt lõi hay toàn bộ)
    if (DOM.kcDayProgressText) {
      if (coreOnly) {
        DOM.kcDayProgressText.textContent = `Đã hoàn thành: ${doneCore}/${totalCore} cốt lõi (${percentCore}%) · Toàn Day: ${doneAll}/${totalAll}`;
      } else {
        DOM.kcDayProgressText.textContent = `Đã hoàn thành: ${doneAll}/${totalAll} mục (${percentAll}%)`;
      }
    }
    if (DOM.kcDayProgressBar) {
      DOM.kcDayProgressBar.style.width = `${coreOnly ? percentCore : percentAll}%`;
    }

    // Cập nhật số lượng trên các nút lọc thuốc tính (Tất cả / Cần xem lại / Đã hiểu)
    const activeBaseKcs = coreOnly ? coreKcs : allKcs;
    const countAll = activeBaseKcs.length;
    const countDone = activeBaseKcs.filter(kc => getKcStatus(data.day_id, kc.kc_id) === 'done').length;
    const countFlagged = countAll - countDone;

    if (DOM.kcFilterAllCount) DOM.kcFilterAllCount.textContent = countAll;
    if (DOM.kcFilterFlaggedCount) DOM.kcFilterFlaggedCount.textContent = countFlagged;
    if (DOM.kcFilterDoneCount) DOM.kcFilterDoneCount.textContent = countDone;
  }

  // --- Tải Dữ liệu Tổng quan Courses ---
  async function fetchCoursesIndex() {
    try {
      const resp = await fetch('data/courses_data.json');
      if (!resp.ok) throw new Error(`HTTP error! status: ${resp.status}`);
      state.coursesData = await resp.json();
      
      renderSidebarDays();
      updateGlobalProgress();

      // Kiểm tra xem currentDayId có trong danh sách không
      const exists = state.coursesData.days.some(d => d.day_id === state.currentDayId);
      if (!exists && state.coursesData.days.length > 0) {
        state.currentDayId = state.coursesData.days[0].day_id;
      }

      await loadDayData(state.currentDayId);
      switchTab(state.currentTab);
    } catch (err) {
      console.error('Lỗi khi nạp courses_data.json:', err);
      showToast('Không thể tải dữ liệu khóa học cục bộ! Kiểm tra app/data/', 'info');
    }
  }

  // --- Tải Dữ liệu Chi tiết 1 Day ---
  async function loadDayData(dayId) {
    state.currentDayId = dayId;
    localStorage.setItem(STORAGE_KEYS.CURRENT_DAY, dayId);
    saveProgressToServer();

    // Cập nhật ngay lập tức nút Mở Slide trên Header theo Day mới
    const num = String(dayId || '').replace(/\D/g, '').padStart(2, '0');
    const slideUrl = `Slides/Day${num}.pdf`;
    if (DOM.headerSlideBtn) {
      DOM.headerSlideBtn.href = slideUrl;
      DOM.headerSlideBtn.setAttribute('title', `Mở Slide Day ${num} (${slideUrl}) trong tab mới`);
    }
    if (DOM.headerSlideText) {
      DOM.headerSlideText.textContent = `Mở Slide Day ${num} ↗`;
    }

    // Update active state in sidebar
    document.querySelectorAll('.day-nav-item').forEach(el => {
      el.classList.toggle('active', el.dataset.dayId === dayId);
    });

    DOM.questionsStream.innerHTML = `
      <div class="loading-state">
        <div class="spinner"></div>
        <p>Đang nạp bộ câu hỏi & kiến thức của Day...</p>
      </div>
    `;
    DOM.kcGroupsContainer.innerHTML = '';

    try {
      const resp = await fetch(`data/days/${dayId}.json`);
      if (!resp.ok) throw new Error(`HTTP error! status: ${resp.status}`);
      state.currentDayData = await resp.json();

      renderDayHeader();
      renderKnowledgeBase();
      renderQuizStream();
      updateQuizProgressUI();
    } catch (err) {
      console.error(`Lỗi khi nạp data của ${dayId}:`, err);
      DOM.questionsStream.innerHTML = `
        <div class="empty-state">
          <p>⚠️ Không thể nạp dữ liệu cho ngày này (data/days/${dayId}.json).</p>
        </div>
      `;
    }
  }

  // --- Lấy đường dẫn file Slide PDF tương ứng của Day ---
  function getSlideUrl(dayId) {
    const num = String(dayId || '').replace(/\D/g, '').padStart(2, '0');
    return `Slides/Day${num}.pdf`;
  }

  // --- Render Header của Day ---
  function renderDayHeader() {
    const data = state.currentDayData;
    if (!data) return;

    const dayLabel = data.day_label || (data.day_id ? `Day ${data.day_id.replace('day', '')}` : 'Day');
    const pubCode = data.public_code ? `· Mã gốc: ${data.public_code}` : '';

    DOM.currentDayCode.textContent = `${dayLabel}`;
    DOM.currentDayTitle.textContent = `${dayLabel}: ${data.title || data.raw_title}`;
    DOM.currentDayStatus.textContent = `${data.stats.total_questions} câu hỏi · ${data.stats.core_kcs} KC trọng tâm cốt lõi (trên tổng ${data.stats.total_kcs} KC) ${pubCode}`;

    DOM.quizCountBadge.textContent = data.stats.total_questions;
    DOM.kcCountBadge.textContent = `${data.stats.core_kcs} cốt lõi / ${data.stats.total_kcs}`;

    // Cập nhật nhãn checkbox lọc cốt lõi
    const coreToggleLabel = document.querySelector('.toggle-label');
    if (coreToggleLabel) {
      coreToggleLabel.textContent = `⭐ Chỉ hiện Kiến thức trọng tâm cốt lõi (${data.stats.core_kcs}/${data.stats.total_kcs})`;
    }

    // --- Cập nhật Ô Mở Slide của Day hiện tại ---
    const slideUrl = getSlideUrl(data.day_id);
    if (DOM.headerSlideBtn) {
      DOM.headerSlideBtn.href = slideUrl;
      DOM.headerSlideBtn.setAttribute('title', `Mở Slide ${dayLabel} (${slideUrl}) trong tab mới`);
    }
    if (DOM.headerSlideText) {
      DOM.headerSlideText.textContent = `Mở Slide ${dayLabel} ↗`;
    }
  }

  // --- Render Sidebar Danh sách 15 Day ---
  function renderSidebarDays() {
    if (!state.coursesData || !state.coursesData.days) return;

    DOM.daysList.innerHTML = state.coursesData.days.map(day => {
      const dayProgress = getDayScoreStats(day.day_id, day.stats.total_questions);
      const isActive = day.day_id === state.currentDayId;
      const dayLabel = day.day_label || `Day ${day.day_id.replace('day', '')}`;
      const pubCode = day.public_code ? `(${day.public_code})` : '';

      return `
        <div class="day-nav-item ${isActive ? 'active' : ''}" data-day-id="${day.day_id}" role="button" tabindex="0">
          <div class="day-item-top">
            <span class="day-item-code">${dayLabel} <span class="day-item-subcode">${pubCode}</span></span>
            <span class="day-item-score" id="nav-score-${day.day_id}">${dayProgress.correct}/${dayProgress.total}</span>
          </div>
          <span class="day-item-title" title="${day.title}">${day.title}</span>
          <div class="day-mini-progress">
            <div class="day-mini-fill" id="nav-fill-${day.day_id}" style="width: ${dayProgress.percent}%"></div>
          </div>
        </div>
      `;
    }).join('');

    // Bắt sự kiện click chuyển Day
    DOM.daysList.querySelectorAll('.day-nav-item').forEach(item => {
      item.addEventListener('click', () => {
        const targetDayId = item.dataset.dayId;
        if (targetDayId && targetDayId !== state.currentDayId) {
          loadDayData(targetDayId);
        }
      });
    });
  }

  // --- Cập nhật Thống kê trên Sidebar ---
  function updateDayNavProgress() {
    if (!state.coursesData || !state.coursesData.days) return;

    state.coursesData.days.forEach(day => {
      const stats = getDayScoreStats(day.day_id, day.stats.total_questions);
      const scoreEl = document.getElementById(`nav-score-${day.day_id}`);
      const fillEl = document.getElementById(`nav-fill-${day.day_id}`);
      if (scoreEl) scoreEl.textContent = `${stats.correct}/${stats.total}`;
      if (fillEl) fillEl.style.width = `${stats.percent}%`;
    });
  }

  function updateGlobalProgress() {
    if (!state.coursesData || !state.coursesData.days) return;

    let totalQ = 0;
    let totalCorrect = 0;

    state.coursesData.days.forEach(day => {
      const stats = getDayScoreStats(day.day_id, day.stats.total_questions);
      totalQ += stats.total;
      totalCorrect += stats.correct;
    });

    const percent = totalQ > 0 ? Math.round((totalCorrect / totalQ) * 100) : 0;
    DOM.globalProgressText.textContent = `${percent}%`;
    DOM.globalScoreText.textContent = `${totalCorrect}/${totalQ}`;
    DOM.globalProgressBar.style.width = `${percent}%`;
  }

  function getDayScoreStats(dayId, defaultTotal = 0) {
    const dayAnswers = state.userProgress[dayId] || {};
    let correct = 0;
    let answered = 0;

    Object.values(dayAnswers).forEach(item => {
      if (item.is_checked) {
        answered++;
        if (item.is_correct) correct++;
      }
    });

    const total = defaultTotal || (state.currentDayData ? state.currentDayData.stats.total_questions : 0);
    const percent = total > 0 ? Math.round((correct / total) * 100) : 0;

    return { correct, answered, total, percent };
  }

  // =========================================================================
  // VIEW 1: LÀM QUIZ (CONTINUOUS SCROLL - INSTANT FEEDBACK)
  // =========================================================================

  function renderQuizStream() {
    const data = state.currentDayData;
    if (!data || !data.questions || data.questions.length === 0) {
      DOM.questionsStream.innerHTML = `
        <div class="empty-state">
          <p>Chưa có câu hỏi nào trong Day này.</p>
        </div>
      `;
      return;
    }

    const dayProg = state.userProgress[state.currentDayId] || {};

    const questionsHtml = data.questions.map((q, idx) => {
      const qid = q.question_id;
      const qProg = dayProg[qid] || null;
      const isChecked = qProg && qProg.is_checked;
      const isCorrect = qProg && qProg.is_correct;
      const itype = q.interaction.type;
      const isShortText = itype === 'short_text';

      // Card class theo trạng thái: short_text dùng state-reviewed, trắc nghiệm dùng correct/incorrect
      let stateClass = '';
      if (isChecked) {
        if (isShortText) {
          stateClass = 'state-reviewed';
        } else {
          stateClass = isCorrect ? 'state-correct' : 'state-incorrect';
        }
      }

      const typeLabel = getInteractionTypeLabel(itype);
      const isRevealed = Boolean(state.revealedAnswers[state.currentDayId] && state.revealedAnswers[state.currentDayId][qid]);

      return `
        <article class="question-card ${isShortText ? 'is-short-text-card' : ''} ${stateClass}" id="card-${qid}" data-qid="${qid}" data-type="${itype}">
          <!-- Header -->
          <div class="q-header">
            <div class="q-meta-left">
              <span class="q-index-badge">Câu ${idx + 1}</span>
              <span class="q-type-badge">${typeLabel}</span>
              <span class="q-difficulty-badge">${q.estimated_difficulty || 'Trung bình'}</span>
            </div>
            <div class="q-status-badge ${isChecked ? (isShortText ? 'reviewed' : (isCorrect ? 'correct' : 'incorrect')) : ''}" id="status-badge-${qid}">
              ${isChecked 
                ? (isShortText ? '✓ Đã phân tích & đối chiếu' : (isCorrect ? '✓ Đúng' : '✗ Cần xem lại')) 
                : (isShortText ? '<span class="text-muted">Chưa đối chiếu</span>' : '')}
            </div>
          </div>

          <!-- Prompt -->
          <div class="q-prompt">${escapeHtml(q.interaction.prompt)}</div>

          <!-- Interaction Widget -->
          <div class="q-widget-wrap" id="widget-${qid}">
            ${renderWidgetHtml(q, qProg)}
          </div>

          <!-- Action Footer -->
          <div class="q-footer-actions">
            ${isShortText ? `
              <button class="check-answer-btn short-text-btn" data-qid="${qid}">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <span>🔍 Đối chiếu với Lời giải & Tiêu chí chuẩn</span>
              </button>
            ` : `
              <button class="view-answer-btn ${isRevealed ? 'active' : ''}" data-qid="${qid}" title="Xem đáp án chính xác và lời giải thích chi tiết">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                <span>${isRevealed ? 'Ẩn đáp án' : 'Xem đáp án'}</span>
              </button>
              <button class="check-answer-btn" data-qid="${qid}">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Kiểm tra đáp án</span>
              </button>
            `}
          </div>

          <!-- Revealed Answer Box -->
          <div class="revealed-container" id="reveal-box-${qid}">
            ${isRevealed ? renderRevealedAnswerHtml(q) : ''}
          </div>

          <!-- Feedback Container -->
          <div class="feedback-container" id="feedback-${qid}">
            ${renderFeedbackHtml(q, qProg)}
          </div>
        </article>
      `;
    }).join('');

    DOM.questionsStream.innerHTML = questionsHtml;

    // Attach listeners cho từng câu hỏi
    attachQuizInteractions();
    applyQuestionFilter();
  }

  function getInteractionTypeLabel(type) {
    switch (type) {
      case 'single_select': return 'Trắc nghiệm đơn (Single Select)';
      case 'multi_select': return 'Chọn nhiều đáp án (Multi Select)';
      case 'matching': return 'Ghép nối tương ứng (Matching)';
      case 'ordering': return 'Sắp xếp thứ tự (Ordering)';
      case 'numeric_input': return 'Điền số (Numeric Input)';
      case 'short_text': return 'Câu hỏi tự luận ngắn (Short Text)';
      default: return type;
    }
  }

  // --- Render Widgets cho từng dạng tương tác ---
  function renderWidgetHtml(q, progress) {
    const inter = q.interaction;
    const itype = inter.type;
    const userAns = progress ? progress.user_answer : null;
    const isRevealed = Boolean(state.revealedAnswers[state.currentDayId] && state.revealedAnswers[state.currentDayId][q.question_id]);

    switch (itype) {
      case 'single_select':
      case 'multi_select': {
        const isMulti = itype === 'multi_select';
        const choices = inter.choices || [];
        const selectedList = Array.isArray(userAns) ? userAns : (userAns ? [userAns] : []);
        const correctList = Array.isArray(q.answer) ? q.answer : [q.answer];

        return `
          <div class="options-list">
            ${choices.map(c => {
              const isSelected = selectedList.includes(c.choice_id);
              const isRevealCorrect = isRevealed && correctList.includes(c.choice_id);
              return `
                <div class="option-item ${isMulti ? 'multi' : 'single'} ${isSelected ? 'selected' : ''} ${isRevealCorrect ? 'reveal-correct' : ''}" 
                     data-choice-id="${c.choice_id}" role="${isMulti ? 'checkbox' : 'radio'}" aria-checked="${isSelected}">
                  <div class="option-marker">
                    ${isMulti ? (isSelected ? '✓' : (isRevealCorrect ? '✓' : '')) : (isSelected ? '●' : (isRevealCorrect ? '✓' : ''))}
                  </div>
                  <div class="option-text">${escapeHtml(c.text)}</div>
                </div>
              `;
            }).join('')}
          </div>
        `;
      }

      case 'matching': {
        const leftItems = inter.left || [];
        const rightItems = inter.right || [];
        const userMapping = (userAns && typeof userAns === 'object') ? userAns : {};

        return `
          <div class="matching-container">
            ${leftItems.map(left => {
              const selectedRight = userMapping[left.id] || '';
              return `
                <div class="matching-row" data-left-id="${left.id}">
                  <div class="matching-left-text">${escapeHtml(left.text)}</div>
                  <select class="matching-select" data-left-id="${left.id}">
                    <option value="">-- Chọn nhãn tương ứng --</option>
                    ${rightItems.map(r => `
                      <option value="${r.id}" ${selectedRight === r.id ? 'selected' : ''}>
                        ${escapeHtml(r.text)}
                      </option>
                    `).join('')}
                  </select>
                </div>
              `;
            }).join('')}
          </div>
        `;
      }

      case 'ordering': {
        const defaultOptions = inter.options || [];
        // Nếu đã có userAns sắp xếp thì dùng, nếu chưa thì dùng thứ tự mặc định
        let currentOptions = [...defaultOptions];
        if (Array.isArray(userAns) && userAns.length === defaultOptions.length) {
          const mapById = {};
          defaultOptions.forEach(o => { mapById[o.option_id] = o; });
          currentOptions = userAns.map(id => mapById[id]).filter(Boolean);
        }

        return `
          <div class="ordering-container" id="ordering-${q.question_id}">
            ${currentOptions.map((opt, idx) => `
              <div class="ordering-item" data-opt-id="${opt.option_id}">
                <div class="ordering-item-content">
                  <span class="ordering-pos-badge">${idx + 1}</span>
                  <span class="ordering-item-text">${escapeHtml(opt.text)}</span>
                </div>
                <div class="ordering-actions">
                  <button class="order-btn order-up" title="Di chuyển lên" ${idx === 0 ? 'disabled' : ''}>▲</button>
                  <button class="order-btn order-down" title="Di chuyển xuống" ${idx === currentOptions.length - 1 ? 'disabled' : ''}>▼</button>
                </div>
              </div>
            `).join('')}
          </div>
        `;
      }

      case 'numeric_input': {
        const val = userAns !== null && userAns !== undefined ? userAns : '';
        const unit = inter.required_unit || '';
        return `
          <div class="numeric-container">
            <div class="numeric-input-wrap">
              <input type="number" step="any" class="numeric-input" placeholder="Nhập số đáp án..." value="${val}">
              ${unit ? `<span class="numeric-unit-badge">${unit}</span>` : ''}
            </div>
          </div>
        `;
      }

      case 'short_text': {
        const textVal = userAns || '';
        const hints = q.hints || [];
        const hintTexts = hints.map(h => h.text).filter(Boolean);
        return `
          <div class="short-text-container">
            ${hintTexts.length > 0 ? `
              <button type="button" class="short-text-hint-btn" data-qid="${q.question_id}">
                💡 Xem gợi ý định hướng suy nghĩ (trước khi làm bài)
              </button>
              <div class="short-text-hint-box" id="hint-box-${q.question_id}" style="display: none;">
                ${hintTexts.map(t => `<p>💡 ${escapeHtml(t)}</p>`).join('')}
              </div>
            ` : ''}
            <textarea class="short-text-input" placeholder="Nhập ý kiến phân tích hoặc câu trả lời của bạn vào đây trước khi đối chiếu với lời giải chuẩn của AI...">${escapeHtml(textVal)}</textarea>
          </div>
        `;
      }

      default:
        return `<p class="text-muted">Chưa hỗ trợ widget cho loại: ${itype}</p>`;
    }
  }

  // --- Render Feedback HTML (Hint khi Sai / Explanation khi Đúng / Chế độ Tự luận) ---
  function renderFeedbackHtml(q, progress) {
    if (!progress || !progress.is_checked) return '';

    const itype = q.interaction.type;

    // Riêng loại Tự luận ngắn: Chế độ học tập đối chiếu & tự đánh giá (KHÔNG HIỆN SAI HAY HỘP ĐỎ)
    if (itype === 'short_text') {
      const answerObj = q.answer || {};
      const keyPoints = Array.isArray(answerObj.key_points) ? answerObj.key_points : [];
      const sampleAnswer = answerObj.sample_answer || (typeof answerObj === 'string' ? answerObj : '');
      const explanation = q.explanation || '';
      const selfEval = progress.self_eval || '';

      return `
        <div class="short-text-study-box">
          ${keyPoints.length > 0 ? `
            <div class="keypoints-checklist-wrap">
              <div class="short-text-section-header">🎯 Các ý chính cốt lõi (Tự kiểm tra xem bài bạn đã có chưa):</div>
              <div class="keypoint-checklist">
                ${keyPoints.map((kp, idx) => {
                  const isChecked = Array.isArray(progress.checked_kps) && progress.checked_kps.includes(idx);
                  return `
                  <label class="keypoint-item">
                    <input type="checkbox" class="kp-check" data-qid="${q.question_id}" data-kpidx="${idx}" ${isChecked ? 'checked' : ''}>
                    <span>${escapeHtml(kp)}</span>
                  </label>
                `;}).join('')}
              </div>
            </div>
          ` : ''}

          ${sampleAnswer ? `
            <div class="sample-answer-box">
              <div class="short-text-section-header">📝 Đáp án chính xác & Câu trả lời mẫu chuẩn mực từ AI:</div>
              <div class="sample-answer-text">${escapeHtml(sampleAnswer)}</div>
            </div>
          ` : ''}

          ${explanation ? `
            <div class="short-text-explanation-box">
              <div class="short-text-section-header">💡 Phân tích & Giải thích lý do cốt lõi:</div>
              <p>${escapeHtml(explanation)}</p>
            </div>
          ` : ''}

          <div class="self-eval-wrap">
            <span class="self-eval-label">Bạn tự đánh giá mức độ hiểu câu này:</span>
            <div class="self-eval-btns">
              <button type="button" class="self-eval-btn ${selfEval === 'mastered' ? 'selected-mastered' : ''}" data-qid="${q.question_id}" data-eval="mastered">🟢 Đã nắm vững</button>
              <button type="button" class="self-eval-btn ${selfEval === 'review' ? 'selected-review' : ''}" data-qid="${q.question_id}" data-eval="review">🟡 Cần ôn lại</button>
            </div>
          </div>
        </div>
      `;
    }

    // Các dạng Trắc nghiệm khách quan: Chấm điểm Đúng / Sai
    const isCorrect = progress.is_correct;
    if (!isCorrect) {
      const hints = q.hints || [];
      const hintTexts = hints.map(h => h.text).filter(Boolean);
      return `
        <div class="feedback-box hint-box">
          <div class="feedback-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            <span>Đáp án chưa chính xác — Hãy xem gợi ý tránh bẫy:</span>
          </div>
          <div class="hint-content">
            ${hintTexts.length > 0 
              ? hintTexts.map(t => `<p>💡 ${escapeHtml(t)}</p>`).join('')
              : '<p>💡 Hãy đọc kỹ lại đoạn lý thuyết của Knowledge Component tương ứng!</p>'}
          </div>
        </div>
      `;
    } else {
      const explanation = q.explanation || 'Chúc mừng bạn đã trả lời chính xác!';
      return `
        <div class="feedback-box explanation-box">
          <div class="feedback-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span>Chính xác tuyệt đối! Lời giải thích chi tiết:</span>
          </div>
          <div class="explanation-text">${escapeHtml(explanation)}</div>
        </div>
      `;
    }
  }

  // --- Render Khung Đáp án Khi Bấm "Xem đáp án" trong Quiz Trắc nghiệm ---
  function renderRevealedAnswerHtml(q) {
    if (!q) return '';
    const formattedAnswer = getFormattedAnswerText(q);
    const explanation = q.explanation || 'Không có giải thích bổ sung.';

    return `
      <div class="revealed-answer-box">
        <div class="revealed-answer-title">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <path d="M21 2l-2 2m-6 4l3 3m5-5l-3-3m-9 9l-3 3m5-5l-3-3"></path>
            <circle cx="7.5" cy="16.5" r="4.5"></circle>
          </svg>
          <span>🔑 ĐÁP ÁN CHÍNH XÁC & GIẢI THÍCH CHI TIẾT:</span>
        </div>
        <div class="revealed-exact-target">
          ${formattedAnswer}
        </div>
        <div class="revealed-explanation-text">
          <strong>💡 Phân tích lý do:</strong> ${escapeHtml(explanation)}
        </div>
      </div>
    `;
  }

  // --- Lấy nội dung chuỗi đáp án chuẩn cho hiển thị ---
  function getFormattedAnswerText(q) {
    if (!q || !q.interaction) return 'Chưa có đáp án';
    const itype = q.interaction.type;

    switch (itype) {
      case 'single_select':
      case 'multi_select': {
        const correctList = Array.isArray(q.answer) ? q.answer : [q.answer];
        const choices = q.interaction.choices || [];
        const matches = choices.filter(c => correctList.includes(c.choice_id));
        if (matches.length > 0) {
          return matches.map(c => `<strong>[${c.choice_id.toUpperCase()}]</strong> ${escapeHtml(c.text)}`).join(' · ');
        }
        return correctList.map(x => `<strong>[${String(x).toUpperCase()}]</strong>`).join(', ');
      }

      case 'matching': {
        const map = q.answer || {};
        const lefts = q.interaction.left || [];
        const rights = q.interaction.right || [];
        const rightMap = {};
        rights.forEach(r => { rightMap[r.id] = r.text; });
        return lefts.map(l => `<strong>[${escapeHtml(l.text)}]</strong> ➜ ${escapeHtml(rightMap[map[l.id]] || map[l.id] || '')}`).join(' ; ');
      }

      case 'ordering': {
        const order = Array.isArray(q.answer) ? q.answer : [];
        const opts = q.interaction.options || [];
        const optMap = {};
        opts.forEach(o => { optMap[o.option_id] = o.text; });
        return order.map((id, i) => `<strong>${i + 1}.</strong> ${escapeHtml(optMap[id] || id)}`).join(' ➔ ');
      }

      case 'numeric_input': {
        let val = '';
        if (typeof q.answer === 'object' && q.answer !== null) {
          val = q.answer.value;
        } else {
          val = q.answer;
        }
        const unit = q.interaction.required_unit ? ` ${escapeHtml(q.interaction.required_unit)}` : '';
        return `<strong>${val}</strong>${unit}`;
      }

      case 'short_text': {
        const sample = (q.answer && q.answer.sample_answer) ? q.answer.sample_answer : (typeof q.answer === 'string' ? q.answer : '');
        return escapeHtml(sample || 'Xem phân tích đối chiếu chi tiết bên dưới');
      }

      default:
        return typeof q.answer === 'object' ? JSON.stringify(q.answer) : String(q.answer);
    }
  }

  // --- Toggle Xem Đáp Án trong Quiz Trắc Nghiệm ---
  function toggleRevealAnswer(qid) {
    const data = state.currentDayData;
    if (!data) return;
    const q = data.questions.find(item => item.question_id === qid);
    if (!q) return;

    if (!state.revealedAnswers[state.currentDayId]) {
      state.revealedAnswers[state.currentDayId] = {};
    }
    const current = Boolean(state.revealedAnswers[state.currentDayId][qid]);
    const next = !current;
    state.revealedAnswers[state.currentDayId][qid] = next;

    const card = document.getElementById(`card-${qid}`);
    if (!card) return;

    const btn = card.querySelector('.view-answer-btn');
    if (btn) {
      btn.classList.toggle('active', next);
      const span = btn.querySelector('span');
      if (span) span.textContent = next ? 'Ẩn đáp án' : 'Xem đáp án';
    }

    const revealBox = document.getElementById(`reveal-box-${qid}`);
    if (revealBox) {
      revealBox.innerHTML = next ? renderRevealedAnswerHtml(q) : '';
    }

    // Highlight phương án đúng trên widget (nếu là trắc nghiệm)
    const itype = q.interaction.type;
    if (itype === 'single_select' || itype === 'multi_select') {
      const correctList = Array.isArray(q.answer) ? q.answer : [q.answer];
      card.querySelectorAll('.option-item').forEach(opt => {
        const cid = opt.dataset.choiceId;
        if (correctList.includes(cid)) {
          opt.classList.toggle('reveal-correct', next);
          const marker = opt.querySelector('.option-marker');
          if (marker && !opt.classList.contains('selected')) {
            marker.textContent = next ? '✓' : '';
          }
        }
      });
    }
  }

  // --- Gắn Sự kiện Tương tác cho từng Câu hỏi ---
  function attachQuizInteractions() {
    const stream = DOM.questionsStream;

    // 1. Single Select & Multi Select Option Clicks
    stream.querySelectorAll('.option-item').forEach(opt => {
      opt.addEventListener('click', () => {
        const card = opt.closest('.question-card');
        const qtype = card.dataset.type;
        const isMulti = qtype === 'multi_select';

        if (!isMulti) {
          // Single select: bỏ chọn các phương án khác
          card.querySelectorAll('.option-item').forEach(el => {
            el.classList.remove('selected');
            el.setAttribute('aria-checked', 'false');
            const marker = el.querySelector('.option-marker');
            if (marker && !el.classList.contains('reveal-correct')) marker.textContent = '';
          });
          opt.classList.add('selected');
          opt.setAttribute('aria-checked', 'true');
          const marker = opt.querySelector('.option-marker');
          if (marker) marker.textContent = '●';
        } else {
          // Multi select: toggle
          const willSelect = !opt.classList.contains('selected');
          opt.classList.toggle('selected', willSelect);
          opt.setAttribute('aria-checked', String(willSelect));
          const marker = opt.querySelector('.option-marker');
          if (marker) marker.textContent = willSelect ? '✓' : (opt.classList.contains('reveal-correct') ? '✓' : '');
        }
      });
    });

    // 2. Ordering: Nút Lên / Xuống
    stream.querySelectorAll('.ordering-container').forEach(container => {
      container.addEventListener('click', e => {
        const btn = e.target.closest('.order-btn');
        if (!btn || btn.disabled) return;

        const item = btn.closest('.ordering-item');
        if (!item) return;

        if (btn.classList.contains('order-up')) {
          const prev = item.previousElementSibling;
          if (prev) {
            container.insertBefore(item, prev);
            updateOrderingBadges(container);
          }
        } else if (btn.classList.contains('order-down')) {
          const next = item.nextElementSibling;
          if (next) {
            container.insertBefore(next, item);
            updateOrderingBadges(container);
          }
        }
      });
    });

    // 3. Nút "Kiểm tra đáp án" / "Đối chiếu tiêu chí"
    stream.querySelectorAll('.check-answer-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const qid = btn.dataset.qid;
        checkQuestionAnswer(qid);
      });
    });

    // 3.5. Nút "Xem đáp án" trong Quiz trắc nghiệm
    stream.querySelectorAll('.view-answer-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const qid = btn.dataset.qid;
        toggleRevealAnswer(qid);
      });
    });

    // 4. Short-text Hint Toggle
    stream.querySelectorAll('.short-text-hint-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const qid = btn.dataset.qid;
        const hintBox = document.getElementById(`hint-box-${qid}`);
        if (hintBox) {
          const isHidden = hintBox.style.display === 'none' || !hintBox.style.display;
          hintBox.style.display = isHidden ? 'block' : 'none';
          btn.textContent = isHidden ? '🙈 Ẩn gợi ý tư duy' : '💡 Xem gợi ý định hướng suy nghĩ (trước khi làm bài)';
        }
      });
    });
  }

  function updateOrderingBadges(container) {
    const items = container.querySelectorAll('.ordering-item');
    items.forEach((item, idx) => {
      const badge = item.querySelector('.ordering-pos-badge');
      if (badge) badge.textContent = idx + 1;
      const upBtn = item.querySelector('.order-up');
      const downBtn = item.querySelector('.order-down');
      if (upBtn) upBtn.disabled = idx === 0;
      if (downBtn) downBtn.disabled = idx === items.length - 1;
    });
  }

  // --- Logic Kiểm tra Đáp án cho 1 Câu ---
  function checkQuestionAnswer(qid) {
    const data = state.currentDayData;
    if (!data) return;

    const question = data.questions.find(q => q.question_id === qid);
    if (!question) return;

    const card = document.getElementById(`card-${qid}`);
    if (!card) return;

    // Nếu câu hỏi chưa có đáp án từ LLM
    if (!question.is_solved && !question.answer) {
      showToast(`Câu hỏi ${qid} đang chờ chạy script LLM offline để sinh đáp án!`, 'info');
      return;
    }

    const itype = question.interaction.type;
    let userAnswer = null;
    let isCorrect = false;

    // Lấy câu trả lời của user theo widget
    switch (itype) {
      case 'single_select': {
        const selected = card.querySelector('.option-item.selected');
        userAnswer = selected ? [selected.dataset.choiceId] : [];
        const correctAnswers = Array.isArray(question.answer) ? question.answer : [question.answer];
        isCorrect = userAnswer.length > 0 && correctAnswers.includes(userAnswer[0]);
        break;
      }

      case 'multi_select': {
        const selected = card.querySelectorAll('.option-item.selected');
        userAnswer = Array.from(selected).map(el => el.dataset.choiceId);
        const correctList = Array.isArray(question.answer) ? question.answer : [question.answer];
        // So sánh 2 tập hợp
        const userSet = new Set(userAnswer);
        const correctSet = new Set(correctList);
        isCorrect = userSet.size === correctSet.size && [...userSet].every(x => correctSet.has(x));
        break;
      }

      case 'matching': {
        const mapping = {};
        card.querySelectorAll('.matching-select').forEach(sel => {
          mapping[sel.dataset.leftId] = sel.value;
        });
        userAnswer = mapping;
        const correctMap = question.answer || {};
        isCorrect = Object.keys(correctMap).length > 0 && 
                    Object.entries(correctMap).every(([lId, rId]) => mapping[lId] === rId);
        break;
      }

      case 'ordering': {
        const currentOrder = Array.from(card.querySelectorAll('.ordering-item'))
          .map(el => el.dataset.optId);
        userAnswer = currentOrder;
        const correctOrder = Array.isArray(question.answer) ? question.answer : [];
        isCorrect = currentOrder.length === correctOrder.length &&
                    currentOrder.every((id, idx) => id === correctOrder[idx]);
        break;
      }

      case 'numeric_input': {
        const inputEl = card.querySelector('.numeric-input');
        const numVal = inputEl ? parseFloat(inputEl.value) : NaN;
        userAnswer = numVal;

        let targetVal = NaN;
        if (typeof question.answer === 'object' && question.answer !== null) {
          targetVal = parseFloat(question.answer.value);
        } else {
          targetVal = parseFloat(question.answer);
        }

        // Cho phép dung sai 0.01%
        isCorrect = !isNaN(numVal) && !isNaN(targetVal) && Math.abs(numVal - targetVal) < 0.001;
        break;
      }

      case 'short_text': {
        const textEl = card.querySelector('.short-text-input');
        userAnswer = textEl ? textEl.value.trim() : '';
        // Câu tự luận: Luôn ghi nhận đã hoàn thành phân tích & đối chiếu
        isCorrect = true;
        break;
      }
    }

    // Cập nhật State & LocalStorage
    if (!state.userProgress[state.currentDayId]) {
      state.userProgress[state.currentDayId] = {};
    }
    const prevProg = state.userProgress[state.currentDayId][qid] || {};
    state.userProgress[state.currentDayId][qid] = {
      ...prevProg,
      user_answer: userAnswer,
      is_correct: isCorrect,
      is_checked: true,
      checked_at: new Date().toISOString()
    };
    saveProgress();

    // Cập nhật giao diện của Card ngay lập tức (Instant Feedback)
    const statusBadge = document.getElementById(`status-badge-${qid}`);
    const feedbackContainer = document.getElementById(`feedback-${qid}`);

    if (itype === 'short_text') {
      card.classList.remove('state-correct', 'state-incorrect');
      card.classList.add('state-reviewed');

      if (statusBadge) {
        statusBadge.className = 'q-status-badge reviewed';
        statusBadge.textContent = '✓ Đã phân tích & đối chiếu';
      }

      if (feedbackContainer) {
        feedbackContainer.innerHTML = renderFeedbackHtml(question, state.userProgress[state.currentDayId][qid]);
      }

      showToast(`Đã đối chiếu câu ${question.question_id} với đáp án chuẩn và tiêu chí!`, 'info');
    } else {
      card.classList.remove('state-correct', 'state-incorrect');
      card.classList.add(isCorrect ? 'state-correct' : 'state-incorrect');

      if (statusBadge) {
        statusBadge.className = `q-status-badge ${isCorrect ? 'correct' : 'incorrect'}`;
        statusBadge.textContent = isCorrect ? '✓ Đúng' : '✗ Cần sửa lại';
      }

      if (feedbackContainer) {
        feedbackContainer.innerHTML = renderFeedbackHtml(question, state.userProgress[state.currentDayId][qid]);
      }

      // Toast chúc mừng nếu đúng
      if (isCorrect) {
        showToast(`Tuyệt vời! Câu ${question.question_id} đã trả lời chính xác.`, 'success');
      }
    }
  }

  // --- Cập nhật Thống kê & Bộ lọc của Quiz View ---
  function updateQuizProgressUI() {
    const data = state.currentDayData;
    if (!data) return;

    const dayProg = state.userProgress[state.currentDayId] || {};
    let correct = 0;
    let incorrect = 0;
    let unanswered = 0;
    let objectiveCount = 0;
    let shortTextCount = 0;

    data.questions.forEach(q => {
      const isShortText = q.interaction && q.interaction.type === 'short_text';
      if (isShortText) {
        shortTextCount++;
      } else {
        objectiveCount++;
      }

      const qp = dayProg[q.question_id];
      if (qp && qp.is_checked) {
        if (qp.is_correct) correct++;
        else incorrect++;
      } else {
        unanswered++;
      }
    });

    const total = data.questions.length;
    const answered = correct + incorrect;
    const percent = total > 0 ? Math.round((correct / total) * 100) : 0;

    if (DOM.filterAllCount) DOM.filterAllCount.textContent = total;
    if (DOM.filterObjectiveCount) DOM.filterObjectiveCount.textContent = objectiveCount;
    if (DOM.filterShorttextCount) DOM.filterShorttextCount.textContent = shortTextCount;
    if (DOM.filterUnansweredCount) DOM.filterUnansweredCount.textContent = unanswered;
    if (DOM.filterCorrectCount) DOM.filterCorrectCount.textContent = correct;
    if (DOM.filterIncorrectCount) DOM.filterIncorrectCount.textContent = incorrect;

    if (DOM.dayProgressText) DOM.dayProgressText.textContent = `Đã hoàn thành ${correct}/${total} câu (${percent}%)`;
    if (DOM.dayProgressBar) DOM.dayProgressBar.style.width = `${percent}%`;
  }

  function applyQuestionFilter() {
    const filter = state.activeFilter;
    const dayProg = state.userProgress[state.currentDayId] || {};

    document.querySelectorAll('.question-card').forEach(card => {
      const qid = card.dataset.qid;
      const qtype = card.dataset.type;
      const qp = dayProg[qid];
      const isChecked = qp && qp.is_checked;
      const isCorrect = qp && qp.is_correct;

      let visible = true;
      if (filter === 'objective') visible = qtype !== 'short_text';
      else if (filter === 'short_text') visible = qtype === 'short_text';
      else if (filter === 'unanswered') visible = !isChecked;
      else if (filter === 'correct') visible = isChecked && isCorrect;
      else if (filter === 'incorrect') visible = isChecked && !isCorrect;

      card.style.display = visible ? 'block' : 'none';
    });
  }

  // =========================================================================
  // VIEW 2: TỔNG HỢP KIẾN THỨC (KNOWLEDGE BASE)
  // =========================================================================

  function renderKnowledgeBase() {
    const data = state.currentDayData;
    if (!data || !data.groups || data.groups.length === 0) {
      DOM.kcGroupsContainer.innerHTML = `
        <div class="empty-state">
          <p>Không có dữ liệu nhóm kiến thức cho ngày này.</p>
        </div>
      `;
      return;
    }

    updateKcProgressUI();

    const query = state.kcSearchQuery.toLowerCase().trim();
    const coreOnly = state.kcCoreOnly;
    const statusFilter = state.kcStatusFilter; // 'all' | 'flagged' | 'done'

    const kcMap = {};
    (data.knowledge_components || []).forEach(kc => { kcMap[kc.kc_id] = kc; });

    let renderedGroupsCount = 0;
    let totalVisibleKcs = 0;

    const groupsHtml = data.groups.map((group, groupIdx) => {
      const leafIds = group.leaf_kc_ids || [];
      const allGroupKcs = leafIds.map(id => kcMap[id]).filter(Boolean);

      // Nhóm KCs theo tiêu chí cốt lõi
      const baseGroupKcs = coreOnly ? allGroupKcs.filter(kc => kc.is_core) : allGroupKcs;
      const groupTotal = baseGroupKcs.length;
      const groupDone = baseGroupKcs.filter(kc => getKcStatus(data.day_id, kc.kc_id) === 'done').length;

      // Lọc KCs hiển thị theo: trạng thái (Cờ vàng / Tick xanh) & từ khóa tìm kiếm
      const visibleKcs = baseGroupKcs.filter(kc => {
        const status = getKcStatus(data.day_id, kc.kc_id);
        if (statusFilter === 'flagged' && status !== 'flagged') return false;
        if (statusFilter === 'done' && status !== 'done') return false;

        if (query) {
          const haystack = `${kc.name} ${kc.knowledge} ${kc.remediation_target || ''} ${kc.kc_id}`.toLowerCase();
          if (!haystack.includes(query)) return false;
        }
        return true;
      });

      if (visibleKcs.length === 0) return '';
      renderedGroupsCount++;
      totalVisibleKcs += visibleKcs.length;

      const isAllDone = groupTotal > 0 && groupDone === groupTotal;

      return `
        <section class="kc-group-block" data-group-id="${escapeHtml(group.group_id)}">
          <div class="kc-group-header">
            <div class="kc-group-title-wrap">
              <h2 class="kc-group-title">${groupIdx + 1}. ${escapeHtml(group.name)}</h2>
              <span class="kc-group-done-badge ${isAllDone ? 'is-all-done' : ''}" id="group-badge-${escapeHtml(group.group_id)}">Hoàn thành: ${groupDone}/${groupTotal}</span>
            </div>
          </div>

          <div class="kc-cards-grid">
            ${visibleKcs.map(kc => {
              const status = getKcStatus(data.day_id, kc.kc_id);
              const isFlagged = status === 'flagged';
              const isDone = status === 'done';

              return `
                <article class="kc-card ${kc.is_core ? 'is-core' : ''} ${isDone ? 'is-done' : ''}" id="kc-card-${escapeHtml(kc.kc_id)}" data-kcid="${escapeHtml(kc.kc_id)}" data-group-id="${escapeHtml(group.group_id)}">
                  <div class="kc-card-top">
                    <div class="kc-card-title-col">
                      <h3 class="kc-name">${escapeHtml(kc.name)}</h3>
                      <span class="kc-id-sub">${escapeHtml(kc.kc_id)}</span>
                    </div>
                    <div class="kc-toggle-actions">
                      <button type="button" 
                              class="kc-status-btn btn-flag ${isFlagged ? 'active' : ''}" 
                              data-kcid="${escapeHtml(kc.kc_id)}" 
                              data-group-id="${escapeHtml(group.group_id)}"
                              data-action="flag" 
                              title="Gắn cờ xem lại sau (mặc định ban đầu)">
                        <span class="kc-status-icon">🚩</span>
                        <span class="kc-status-label">Cần xem lại</span>
                      </button>
                      <button type="button" 
                              class="kc-status-btn btn-done ${isDone ? 'active' : ''}" 
                              data-kcid="${escapeHtml(kc.kc_id)}" 
                              data-group-id="${escapeHtml(group.group_id)}"
                              data-action="done" 
                              title="Đã đọc & hiểu thật (Tick xanh)">
                        <span class="kc-status-icon">✅</span>
                        <span class="kc-status-label">Đã hiểu</span>
                      </button>
                    </div>
                  </div>

                  <div class="kc-knowledge-box">
                    <div class="kc-section-label">NỘI DUNG KIẾN THỨC CỐT LÕI:</div>
                    <p>${escapeHtml(kc.knowledge)}</p>
                  </div>

                  <div class="kc-remediation-box">
                    <div class="kc-section-label">🎯 MỤC TIÊU ÔN TẬP & KHẮC PHỤC:</div>
                    <p>${escapeHtml(kc.remediation_target || 'Nắm vững khái niệm và áp dụng chính xác trong các tình huống thực tế.')}</p>
                  </div>
                </article>
              `;
            }).join('')}
          </div>
        </section>
      `;
    }).join('');

    let filterTag = '';
    if (statusFilter === 'flagged') filterTag = 'gắn cờ 🚩 cần xem lại';
    else if (statusFilter === 'done') filterTag = 'đã hiểu ✅';
    else filterTag = 'khái niệm';

    const dayLabel = data.day_label || `Day ${data.day_id.replace('day', '')}`;
    const statusNoticeHtml = `
      <div class="kc-filter-summary-bar">
        <span class="kc-summary-text">
          ${coreOnly 
            ? `⭐ Đang lọc hiển thị <strong>${totalVisibleKcs}</strong> kiến thức cốt lõi (${filterTag}) của ${dayLabel}`
            : `📚 Đang hiển thị <strong>${totalVisibleKcs}</strong> ${filterTag} (${data.stats.core_kcs} mục cốt lõi nền vàng và ${data.stats.total_kcs - data.stats.core_kcs} mục bổ trợ)`}
        </span>
      </div>
    `;

    if (renderedGroupsCount === 0) {
      DOM.kcGroupsContainer.innerHTML = `
        ${statusNoticeHtml}
        <div class="empty-state">
          <p>Không tìm thấy khái niệm kiến thức nào khớp với bộ lọc đã chọn.</p>
        </div>
      `;
    } else {
      DOM.kcGroupsContainer.innerHTML = statusNoticeHtml + groupsHtml;
    }
  }

  // =========================================================================
  // VIEW 3: HỆ THỐNG THI THỬ KHẢO THÍ (FULL & SHORT EXAM)
  // =========================================================================

  // 1. Tải trước toàn bộ 15 Day vào bộ nhớ đệm (Cache)
  async function ensureAllDaysLoaded() {
    if (state.allDaysCache && Object.keys(state.allDaysCache).length === 15) {
      return state.allDaysCache;
    }
    state.allDaysCache = {};
    const fetchPromises = [];

    for (let i = 1; i <= 15; i++) {
      const dayId = 'day' + String(i).padStart(2, '0');
      fetchPromises.push(
        fetch(`data/days/${dayId}.json`)
          .then(res => res.ok ? res.json() : null)
          .then(json => {
            if (json) {
              state.allDaysCache[dayId] = json;
            }
          })
          .catch(err => {
            console.warn(`Lỗi nạp cache ${dayId}:`, err);
          })
      );
    }

    await Promise.all(fetchPromises);
    return state.allDaysCache;
  }

  // 2. Chấm điểm một câu hỏi (Pure grading logic)
  function checkIsCorrect(q, userAnswer) {
    if (!q || !q.interaction) return false;
    const itype = q.interaction.type;
    
    // Câu tự luận: Mặc định 0 điểm, không chấm đúng sai trong thi thử
    if (itype === 'short_text') {
      return false;
    }
    if (userAnswer === null || userAnswer === undefined || userAnswer === '') {
      return false;
    }

    switch (itype) {
      case 'single_select': {
        const selected = Array.isArray(userAnswer) ? userAnswer[0] : userAnswer;
        const correctList = Array.isArray(q.answer) ? q.answer : [q.answer];
        return Boolean(selected) && correctList.includes(selected);
      }

      case 'multi_select': {
        const userList = Array.isArray(userAnswer) ? userAnswer : (userAnswer ? [userAnswer] : []);
        const correctList = Array.isArray(q.answer) ? q.answer : [q.answer];
        const userSet = new Set(userList);
        const correctSet = new Set(correctList);
        return userSet.size === correctSet.size && [...userSet].every(x => correctSet.has(x));
      }

      case 'matching': {
        const mapping = (userAnswer && typeof userAnswer === 'object') ? userAnswer : {};
        const correctMap = q.answer || {};
        const keys = Object.keys(correctMap);
        return keys.length > 0 && keys.every(k => mapping[k] === correctMap[k]);
      }

      case 'ordering': {
        const currentOrder = Array.isArray(userAnswer) ? userAnswer : [];
        const correctOrder = Array.isArray(q.answer) ? q.answer : [];
        return currentOrder.length === correctOrder.length &&
               currentOrder.every((id, idx) => id === correctOrder[idx]);
      }

      case 'numeric_input': {
        const numVal = parseFloat(userAnswer);
        let targetVal = NaN;
        if (typeof q.answer === 'object' && q.answer !== null) {
          targetVal = parseFloat(q.answer.value);
        } else {
          targetVal = parseFloat(q.answer);
        }
        return !isNaN(numVal) && !isNaN(targetVal) && Math.abs(numVal - targetVal) < 0.001;
      }

      default:
        return false;
    }
  }

  // 3. Thuật toán Sinh Đề Thi Ngẫu Nhiên: "Full" (40 câu, 31 phút) & "Short" (10 câu, 9 phút)
  function generateExamQuestions(type) {
    if (!state.allDaysCache) return [];

    const dayIds = [];
    for (let i = 1; i <= 15; i++) {
      dayIds.push('day' + String(i).padStart(2, '0'));
    }

    if (type === 'full') {
      // BÀI THI FULL:
      // - Đúng 40 câu tổng cộng.
      // - Có 15 Day: mỗi Day lấy đúng 2 hoặc 3 câu (đúng 10 Day lấy 3 câu, 5 Day lấy 2 câu: 10*3 + 5*2 = 40 câu).
      // - Tối đa 4 câu tự luận (ngẫu nhiên 0 đến 4 câu).
      const shuffledDays = [...dayIds].sort(() => Math.random() - 0.5);
      const dayTargetCount = {};
      shuffledDays.slice(0, 10).forEach(d => { dayTargetCount[d] = 3; });
      shuffledDays.slice(10, 15).forEach(d => { dayTargetCount[d] = 2; });

      // Mục tiêu số câu tự luận: ngẫu nhiên từ 0 đến 4
      const targetEssays = Math.floor(Math.random() * 5); // 0, 1, 2, 3, 4

      // Lọc các ngày có ít nhất 1 câu tự luận
      const daysWithEssays = dayIds.filter(d => {
        const qs = state.allDaysCache[d]?.questions || [];
        return qs.some(q => q.interaction && q.interaction.type === 'short_text');
      }).sort(() => Math.random() - 0.5);

      const essayDayIds = new Set(daysWithEssays.slice(0, targetEssays));
      const selected = [];

      dayIds.forEach(dayId => {
        const dayData = state.allDaysCache[dayId];
        const allQ = (dayData?.questions || []).map(q => ({
          ...q,
          day_id: dayId,
          day_label: dayData.day_label || (dayId ? `Day ${dayId.replace('day', '')}` : 'Day'),
          day_title: dayData.title || dayData.raw_title || dayId
        }));

        const dayEssays = allQ.filter(q => q.interaction && q.interaction.type === 'short_text');
        const dayObjectives = allQ.filter(q => !q.interaction || q.interaction.type !== 'short_text');
        const targetTotal = dayTargetCount[dayId] || 2;

        if (essayDayIds.has(dayId) && dayEssays.length > 0) {
          // Lấy 1 câu tự luận
          const randEssay = dayEssays[Math.floor(Math.random() * dayEssays.length)];
          selected.push(randEssay);
          // Lấy thêm (targetTotal - 1) câu trắc nghiệm
          const shuffledObj = [...dayObjectives].sort(() => Math.random() - 0.5);
          selected.push(...shuffledObj.slice(0, targetTotal - 1));
        } else {
          // Lấy đủ targetTotal câu trắc nghiệm
          const shuffledObj = [...dayObjectives].sort(() => Math.random() - 0.5);
          selected.push(...shuffledObj.slice(0, targetTotal));
        }
      });

      // Xáo trộn ngẫu nhiên toàn bộ 40 câu hỏi trong đề
      return selected.sort(() => Math.random() - 0.5);
    }

    if (type === 'short') {
      // BÀI THI SHORT:
      // - Đúng 10 câu bốc random trong kho tổng hợp >1600 câu.
      // - Không quy định mỗi Day bao nhiêu câu.
      // - Tối đa 1 câu tự luận (ngẫu nhiên 0 hoặc 1 câu).
      const allQ = [];
      dayIds.forEach(dayId => {
        const dayData = state.allDaysCache[dayId];
        (dayData?.questions || []).forEach(q => {
          allQ.push({
            ...q,
            day_id: dayId,
            day_label: dayData.day_label || (dayId ? `Day ${dayId.replace('day', '')}` : 'Day'),
            day_title: dayData.title || dayData.raw_title || dayId
          });
        });
      });

      const allEssays = allQ.filter(q => q.interaction && q.interaction.type === 'short_text');
      const allObjectives = allQ.filter(q => !q.interaction || q.interaction.type !== 'short_text');

      const targetEssays = Math.floor(Math.random() * 2); // 0 hoặc 1
      const selected = [];

      if (targetEssays === 1 && allEssays.length > 0) {
        selected.push(allEssays[Math.floor(Math.random() * allEssays.length)]);
        const shuffledObj = [...allObjectives].sort(() => Math.random() - 0.5);
        selected.push(...shuffledObj.slice(0, 9));
      } else {
        const shuffledObj = [...allObjectives].sort(() => Math.random() - 0.5);
        selected.push(...shuffledObj.slice(0, 10));
      }

      return selected.sort(() => Math.random() - 0.5);
    }

    return [];
  }

  // 4. Hiển thị Màn hình Sảnh Thi & Bảng Thống Kê Điểm Yếu
  function showExamLobby() {
    if (DOM.examLobbyScreen) DOM.examLobbyScreen.style.display = 'block';
    if (DOM.examActiveScreen) DOM.examActiveScreen.style.display = 'none';
    if (DOM.examResultScreen) DOM.examResultScreen.style.display = 'none';
    if (DOM.examReviewScreen) DOM.examReviewScreen.style.display = 'none';
    renderExamLobbyStats();
  }

  // 5. Cập nhật Bảng Thống Kê Thi Thử & Phân Tích Điểm Yếu Từng Day
  function renderExamLobbyStats() {
    const stats = state.examStats || { totalQuestions: 0, totalCorrect: 0, totalExams: 0, dayStats: {} };
    const totalQ = stats.totalQuestions || 0;
    const totalCorrect = stats.totalCorrect || 0;
    const totalExams = stats.totalExams || 0;
    const accRate = totalQ > 0 ? Math.round((totalCorrect / totalQ) * 100) : 0;

    if (DOM.kpiTotalQuestions) DOM.kpiTotalQuestions.textContent = totalQ.toLocaleString();
    if (DOM.kpiCorrectQuestions) DOM.kpiCorrectQuestions.textContent = totalCorrect.toLocaleString();
    if (DOM.kpiAccuracyRate) DOM.kpiAccuracyRate.textContent = `${accRate}%`;
    if (DOM.kpiTotalExams) DOM.kpiTotalExams.textContent = totalExams.toLocaleString();

    if (!DOM.examDaysStatsTbody) return;

    // Render 15 dòng tương ứng 15 Day
    const dayMap = {};
    if (state.coursesData && state.coursesData.days) {
      state.coursesData.days.forEach(d => { dayMap[d.day_id] = d; });
    }

    let rowsHtml = '';
    for (let i = 1; i <= 15; i++) {
      const dayId = 'day' + String(i).padStart(2, '0');
      const dayInfo = dayMap[dayId] || { title: `Chủ đề Day ${i}`, day_label: `Day ${String(i).padStart(2, '0')}` };
      const dStat = (stats.dayStats && stats.dayStats[dayId]) || { selected: 0, correct: 0 };
      const selectedCount = dStat.selected || 0;
      const correctCount = dStat.correct || 0;
      const rate = selectedCount > 0 ? Math.round((correctCount / selectedCount) * 100) : 0;

      let statusBadge = '';
      let barColor = 'var(--emerald-500)';

      if (selectedCount === 0) {
        statusBadge = '<span class="weakness-badge weakness-none">Chưa gặp câu nào</span>';
        barColor = 'var(--text-muted)';
      } else if (rate < 50) {
        statusBadge = '<span class="weakness-badge weakness-weak">⚠️ Điểm yếu — Cần ôn tập gấp</span>';
        barColor = 'var(--ruby-500)';
      } else if (rate < 75) {
        statusBadge = '<span class="weakness-badge weakness-medium">🟡 Khá — Cần củng cố thêm</span>';
        barColor = 'var(--amber-500)';
      } else {
        statusBadge = '<span class="weakness-badge weakness-strong">✅ Vững kiến thức</span>';
        barColor = 'var(--emerald-500)';
      }

      rowsHtml += `
        <tr>
          <td>
            <div class="day-cell-name">
              <span class="day-pill-mini">D${String(i).padStart(2, '0')}</span>
              <div>
                <strong>${escapeHtml(dayInfo.day_label || `Day ${i}`)}</strong>
                <div class="day-title-sub">${escapeHtml(dayInfo.title || '')}</div>
              </div>
            </div>
          </td>
          <td><strong>${selectedCount}</strong> câu</td>
          <td><strong class="text-emerald">${correctCount}</strong> câu</td>
          <td>
            <div class="rate-cell-wrap">
              <span class="rate-text" style="color: ${barColor}">${selectedCount > 0 ? rate + '%' : '—'}</span>
              <div class="rate-bar-bg">
                <div class="rate-bar-fill" style="width: ${selectedCount > 0 ? rate : 0}%; background: ${barColor}"></div>
              </div>
            </div>
          </td>
          <td>${statusBadge}</td>
        </tr>
      `;
    }

    DOM.examDaysStatsTbody.innerHTML = rowsHtml;
  }

  // 6. Bắt đầu làm bài thi (Start Exam)
  async function startExam(type) {
    showToast('Đang nạp ngân hàng đề thi...', 'info');
    await ensureAllDaysLoaded();

    const questions = generateExamQuestions(type);
    if (!questions || questions.length === 0) {
      showToast('Không thể tạo đề thi do thiếu dữ liệu câu hỏi!', 'error');
      return;
    }

    const durationSeconds = type === 'full' ? 31 * 60 : 9 * 60; // 31 phút vs 9 phút

    state.currentExam = {
      type,
      title: type === 'full' ? 'BÀI THI FULL (40 CÂU · 31 PHÚT)' : 'BÀI THI SHORT (10 CÂU · 9 PHÚT)',
      questions,
      answers: {}, // { [qid]: userAnswer }
      startTime: Date.now(),
      durationSeconds,
      remainingSeconds: durationSeconds,
      isOverdue: false,
      isSubmitted: false
    };

    // Hiển thị màn hình thi
    if (DOM.examLobbyScreen) DOM.examLobbyScreen.style.display = 'none';
    if (DOM.examResultScreen) DOM.examResultScreen.style.display = 'none';
    if (DOM.examReviewScreen) DOM.examReviewScreen.style.display = 'none';
    if (DOM.examActiveScreen) DOM.examActiveScreen.style.display = 'block';

    // Bắt đầu bộ đếm giờ mô phỏng
    startExamTimer(durationSeconds);

    // Render giao diện câu hỏi & Palette điều hướng
    renderActiveExam();

    // Cuộn lên đầu trang
    DOM.examActiveScreen.scrollIntoView({ behavior: 'smooth', block: 'start' });
    showToast(`Đã bắt đầu ${type === 'full' ? 'Bài thi Full (40 câu)' : 'Bài thi Short (10 câu)'}! Chúc bạn làm bài tốt.`, 'success');
  }

  // 7. Quản lý Bộ Đếm Giờ Mô Phỏng
  // Lưu ý quan trọng: KHÔNG dừng bài thi khi hết giờ! Khi đếm về 0 thì chuyển sang màu đỏ và giữ nguyên.
  function startExamTimer(durationSeconds) {
    if (state.examTimerInterval) clearInterval(state.examTimerInterval);

    state.examRemainingSeconds = durationSeconds;
    state.examIsOverdue = false;
    updateExamTimerUI();

    state.examTimerInterval = setInterval(() => {
      if (!state.currentExam || state.currentExam.isSubmitted) {
        clearInterval(state.examTimerInterval);
        return;
      }

      state.examRemainingSeconds--;
      if (state.examRemainingSeconds <= 0) {
        state.examRemainingSeconds = 0;
        state.examIsOverdue = true;
        // Giữ nguyên ở 00:00 và chuyển sang màu đỏ rực, KHÔNG nộp bài tự động!
      }
      updateExamTimerUI();
    }, 1000);
  }

  function updateExamTimerUI() {
    if (!DOM.examTimerText || !DOM.examTimerWidget) return;

    const totalSec = Math.max(0, state.examRemainingSeconds);
    const mm = String(Math.floor(totalSec / 60)).padStart(2, '0');
    const ss = String(totalSec % 60).padStart(2, '0');

    if (state.examIsOverdue) {
      DOM.examTimerText.textContent = '00:00';
      if (DOM.examTimerSubtext) DOM.examTimerSubtext.textContent = '⚠️ HẾT GIỜ (HÃY NỘP BÀI)';
      DOM.examTimerWidget.classList.add('timer-overdue');
    } else {
      DOM.examTimerText.textContent = `${mm}:${ss}`;
      if (DOM.examTimerSubtext) DOM.examTimerSubtext.textContent = 'Thời gian còn lại';
      DOM.examTimerWidget.classList.remove('timer-overdue');
    }
  }

  // 8. Render Nội Dung Đang Làm Bài Thi
  function renderActiveExam() {
    if (!state.currentExam) return;
    const exam = state.currentExam;

    if (DOM.examActiveTitlePill) DOM.examActiveTitlePill.textContent = exam.type === 'full' ? 'BÀI THI FULL (40 CÂU)' : 'BÀI THI SHORT (10 CÂU)';
    updateExamAnsweredCountUI();

    // 1. Render Palette câu hỏi
    if (DOM.examPaletteGrid) {
      DOM.examPaletteGrid.innerHTML = exam.questions.map((q, idx) => {
        const isAnswered = isQuestionAnsweredInExam(q.question_id);
        return `
          <button class="palette-chip ${isAnswered ? 'answered' : ''}" data-idx="${idx}" data-qid="${q.question_id}" title="Nhảy tới Câu ${idx + 1}">
            ${idx + 1}
          </button>
        `;
      }).join('');
    }

    // 2. Render Danh sách câu hỏi
    if (DOM.examQuestionsStream) {
      DOM.examQuestionsStream.innerHTML = exam.questions.map((q, idx) => {
        const qid = q.question_id;
        const itype = q.interaction.type;
        const isShortText = itype === 'short_text';
        const typeLabel = getInteractionTypeLabel(itype);

        return `
          <article class="exam-q-card" id="exam-card-${qid}" data-qid="${qid}" data-type="${itype}">
            <div class="q-header">
              <div class="q-meta-left">
                <span class="q-index-badge">Câu ${idx + 1}</span>
                <span class="exam-day-origin-pill">${escapeHtml(q.day_label || 'Day')}</span>
                <span class="q-type-badge">${typeLabel}</span>
              </div>
            </div>

            ${isShortText ? `
              <div class="essay-exam-notice">
                ✍️ <em>Câu hỏi tự luận: Bạn có thể nhập ý kiến tóm tắt vào ô bên dưới. Câu tự luận mặc định 0 điểm (dùng để xem đáp án chuẩn và đối chiếu sau khi nộp bài).</em>
              </div>
            ` : ''}

            <!-- Prompt -->
            <div class="q-prompt">${escapeHtml(q.interaction.prompt)}</div>

            <!-- Interaction Widget (Không có nút kiểm tra đáp án) -->
            <div class="q-widget-wrap">
              ${renderExamWidgetHtml(q, exam.answers[qid])}
            </div>
          </article>
        `;
      }).join('');

      attachExamInteractions();
    }
  }

  // --- Widget dành riêng cho Chế độ Thi Thử (Tương tác sạch, không lộ đáp án) ---
  function renderExamWidgetHtml(q, userAns) {
    const inter = q.interaction;
    const itype = inter.type;

    switch (itype) {
      case 'single_select':
      case 'multi_select': {
        const isMulti = itype === 'multi_select';
        const choices = inter.choices || [];
        const selectedList = Array.isArray(userAns) ? userAns : (userAns ? [userAns] : []);

        return `
          <div class="options-list">
            ${choices.map(c => {
              const isSelected = selectedList.includes(c.choice_id);
              return `
                <div class="option-item ${isMulti ? 'multi' : 'single'} ${isSelected ? 'selected' : ''}" 
                     data-choice-id="${c.choice_id}" role="${isMulti ? 'checkbox' : 'radio'}" aria-checked="${isSelected}">
                  <div class="option-marker">
                    ${isMulti ? (isSelected ? '✓' : '') : (isSelected ? '●' : '')}
                  </div>
                  <div class="option-text">${escapeHtml(c.text)}</div>
                </div>
              `;
            }).join('')}
          </div>
        `;
      }

      case 'matching': {
        const leftItems = inter.left || [];
        const rightItems = inter.right || [];
        const userMapping = (userAns && typeof userAns === 'object') ? userAns : {};

        return `
          <div class="matching-container">
            ${leftItems.map(left => {
              const selectedRight = userMapping[left.id] || '';
              return `
                <div class="matching-row" data-left-id="${left.id}">
                  <div class="matching-left-text">${escapeHtml(left.text)}</div>
                  <select class="matching-select" data-left-id="${left.id}">
                    <option value="">-- Chọn đáp án tương ứng --</option>
                    ${rightItems.map(r => `
                      <option value="${r.id}" ${selectedRight === r.id ? 'selected' : ''}>
                        ${escapeHtml(r.text)}
                      </option>
                    `).join('')}
                  </select>
                </div>
              `;
            }).join('')}
          </div>
        `;
      }

      case 'ordering': {
        const defaultOptions = inter.options || [];
        let currentOptions = [...defaultOptions];
        if (Array.isArray(userAns) && userAns.length === defaultOptions.length) {
          const mapById = {};
          defaultOptions.forEach(o => { mapById[o.option_id] = o; });
          currentOptions = userAns.map(id => mapById[id]).filter(Boolean);
        }

        return `
          <div class="ordering-container" id="exam-ordering-${q.question_id}">
            ${currentOptions.map((opt, idx) => `
              <div class="ordering-item" data-opt-id="${opt.option_id}">
                <div class="ordering-item-content">
                  <span class="ordering-pos-badge">${idx + 1}</span>
                  <span class="ordering-item-text">${escapeHtml(opt.text)}</span>
                </div>
                <div class="ordering-actions">
                  <button class="order-btn order-up" title="Di chuyển lên" ${idx === 0 ? 'disabled' : ''}>▲</button>
                  <button class="order-btn order-down" title="Di chuyển xuống" ${idx === currentOptions.length - 1 ? 'disabled' : ''}>▼</button>
                </div>
              </div>
            `).join('')}
          </div>
        `;
      }

      case 'numeric_input': {
        const val = userAns !== null && userAns !== undefined ? userAns : '';
        const unit = inter.required_unit || '';
        return `
          <div class="numeric-container">
            <div class="numeric-input-wrap">
              <input type="number" step="any" class="numeric-input" placeholder="Nhập số đáp án của bạn..." value="${val}">
              ${unit ? `<span class="numeric-unit-badge">${unit}</span>` : ''}
            </div>
          </div>
        `;
      }

      case 'short_text': {
        const textVal = userAns || '';
        return `
          <div class="short-text-container">
            <textarea class="short-text-input" placeholder="Nhập câu trả lời hoặc phân tích của bạn vào đây (tham khảo, không tính điểm tự động)...">${escapeHtml(textVal)}</textarea>
          </div>
        `;
      }

      default:
        return `<p class="text-muted">Chưa hỗ trợ dạng câu hỏi này trong bài thi.</p>`;
    }
  }

  // --- Kiểm tra xem câu hỏi trong bài thi đã được làm chưa ---
  function isQuestionAnsweredInExam(qid) {
    if (!state.currentExam || !state.currentExam.answers) return false;
    const ans = state.currentExam.answers[qid];
    if (ans === undefined || ans === null) return false;
    if (Array.isArray(ans)) return ans.length > 0;
    if (typeof ans === 'object') return Object.values(ans).some(Boolean);
    if (typeof ans === 'string') return ans.trim().length > 0;
    if (typeof ans === 'number') return !isNaN(ans);
    return false;
  }

  function updateExamAnsweredCountUI() {
    if (!state.currentExam) return;
    const total = state.currentExam.questions.length;
    let answered = 0;
    state.currentExam.questions.forEach(q => {
      if (isQuestionAnsweredInExam(q.question_id)) answered++;
    });

    if (DOM.examAnsweredCounter) {
      DOM.examAnsweredCounter.textContent = `Đã làm: ${answered}/${total} câu`;
    }
  }

  // --- Gắn Sự kiện Tương tác cho Bài Thi Thử ---
  function attachExamInteractions() {
    if (!DOM.examQuestionsStream) return;
    const stream = DOM.examQuestionsStream;

    // 1. Single & Multi Select Options
    stream.querySelectorAll('.option-item').forEach(opt => {
      opt.addEventListener('click', () => {
        if (!state.currentExam) return;
        const card = opt.closest('.exam-q-card');
        const qid = card.dataset.qid;
        const qtype = card.dataset.type;
        const isMulti = qtype === 'multi_select';

        if (!isMulti) {
          card.querySelectorAll('.option-item').forEach(el => {
            el.classList.remove('selected');
            el.setAttribute('aria-checked', 'false');
            const marker = el.querySelector('.option-marker');
            if (marker) marker.textContent = '';
          });
          opt.classList.add('selected');
          opt.setAttribute('aria-checked', 'true');
          const marker = opt.querySelector('.option-marker');
          if (marker) marker.textContent = '●';
          state.currentExam.answers[qid] = [opt.dataset.choiceId];
        } else {
          const willSelect = !opt.classList.contains('selected');
          opt.classList.toggle('selected', willSelect);
          opt.setAttribute('aria-checked', String(willSelect));
          const marker = opt.querySelector('.option-marker');
          if (marker) marker.textContent = willSelect ? '✓' : '';

          const selected = Array.from(card.querySelectorAll('.option-item.selected'))
            .map(el => el.dataset.choiceId);
          state.currentExam.answers[qid] = selected;
        }

        updatePaletteChipState(qid);
        updateExamAnsweredCountUI();
      });
    });

    // 2. Matching Selects
    stream.querySelectorAll('.matching-select').forEach(sel => {
      sel.addEventListener('change', () => {
        if (!state.currentExam) return;
        const card = sel.closest('.exam-q-card');
        const qid = card.dataset.qid;
        const mapping = {};
        card.querySelectorAll('.matching-select').forEach(s => {
          mapping[s.dataset.leftId] = s.value;
        });
        state.currentExam.answers[qid] = mapping;
        updatePaletteChipState(qid);
        updateExamAnsweredCountUI();
      });
    });

    // 3. Ordering Buttons
    stream.querySelectorAll('.ordering-container').forEach(container => {
      container.addEventListener('click', e => {
        const btn = e.target.closest('.order-btn');
        if (!btn || btn.disabled) return;
        const item = btn.closest('.ordering-item');
        if (!item) return;

        if (btn.classList.contains('order-up')) {
          const prev = item.previousElementSibling;
          if (prev) {
            container.insertBefore(item, prev);
            updateOrderingBadges(container);
          }
        } else if (btn.classList.contains('order-down')) {
          const next = item.nextElementSibling;
          if (next) {
            container.insertBefore(next, item);
            updateOrderingBadges(container);
          }
        }

        const card = container.closest('.exam-q-card');
        const qid = card.dataset.qid;
        const currentOrder = Array.from(container.querySelectorAll('.ordering-item')).map(el => el.dataset.optId);
        state.currentExam.answers[qid] = currentOrder;
        updatePaletteChipState(qid);
        updateExamAnsweredCountUI();
      });
    });

    // 4. Numeric Input
    stream.querySelectorAll('.numeric-input').forEach(inp => {
      inp.addEventListener('input', () => {
        if (!state.currentExam) return;
        const card = inp.closest('.exam-q-card');
        const qid = card.dataset.qid;
        state.currentExam.answers[qid] = inp.value.trim() !== '' ? parseFloat(inp.value) : null;
        updatePaletteChipState(qid);
        updateExamAnsweredCountUI();
      });
    });

    // 5. Short-text Input (Tự luận)
    stream.querySelectorAll('.short-text-input').forEach(txt => {
      txt.addEventListener('input', () => {
        if (!state.currentExam) return;
        const card = txt.closest('.exam-q-card');
        const qid = card.dataset.qid;
        state.currentExam.answers[qid] = txt.value.trim();
        updatePaletteChipState(qid);
        updateExamAnsweredCountUI();
      });
    });
  }

  function updatePaletteChipState(qid) {
    if (!DOM.examPaletteGrid) return;
    const chip = DOM.examPaletteGrid.querySelector(`.palette-chip[data-qid="${qid}"]`);
    if (chip) {
      chip.classList.toggle('answered', isQuestionAnsweredInExam(qid));
    }
  }

  // 9. HỦY BỎ VIỆC LÀM BÀI (Không lưu vào thống kê)
  function cancelExam() {
    if (!confirm('Bạn có chắc chắn muốn hủy bài thi thử này không? Toàn bộ câu trả lời sẽ bị xóa và KHÔNG lưu vào thống kê.')) {
      return;
    }

    if (state.examTimerInterval) clearInterval(state.examTimerInterval);
    state.currentExam = null;

    showExamLobby();
    showToast('Đã hủy bài thi thử. Lượt thi không được tính vào thống kê.', 'info');
  }

  // 10. NỘP BÀI THI & TÍNH ĐIỂM
  function submitExam() {
    if (!state.currentExam) return;

    // Kiểm tra số câu chưa làm
    let unansweredCount = 0;
    state.currentExam.questions.forEach(q => {
      if (!isQuestionAnsweredInExam(q.question_id)) unansweredCount++;
    });

    if (unansweredCount > 0) {
      if (!confirm(`Bạn còn ${unansweredCount} câu hỏi chưa hoàn thành. Bạn có chắc chắn muốn nộp bài thi ngay bây giờ?`)) {
        return;
      }
    }

    if (state.examTimerInterval) clearInterval(state.examTimerInterval);

    const exam = state.currentExam;
    exam.isSubmitted = true;

    // Tính thời gian làm bài
    const elapsedSeconds = Math.max(1, Math.floor((Date.now() - exam.startTime) / 1000));
    const mm = String(Math.floor(elapsedSeconds / 60)).padStart(2, '0');
    const ss = String(elapsedSeconds % 60).padStart(2, '0');
    const timeTakenStr = `${mm}:${ss}`;

    // Chấm điểm từng câu
    let correctCount = 0;
    let incorrectCount = 0;
    let essayCount = 0;
    const dayStatsIncrement = {}; // { [dayId]: { selected: 0, correct: 0 } }

    const gradedResults = exam.questions.map(q => {
      const qid = q.question_id;
      const dayId = q.day_id;
      const userAns = exam.answers[qid];
      const itype = q.interaction.type;
      const isShortText = itype === 'short_text';

      if (!dayStatsIncrement[dayId]) {
        dayStatsIncrement[dayId] = { selected: 0, correct: 0 };
      }
      dayStatsIncrement[dayId].selected++;

      if (isShortText) {
        essayCount++;
        // Tự luận mặc định 0 điểm
        return {
          question: q,
          userAnswer: userAns,
          isCorrect: false,
          isEssay: true
        };
      }

      const isCorrect = checkIsCorrect(q, userAns);
      if (isCorrect) {
        correctCount++;
        dayStatsIncrement[dayId].correct++;
      } else {
        incorrectCount++;
      }

      return {
        question: q,
        userAnswer: userAns,
        isCorrect,
        isEssay: false
      };
    });

    const totalQuestions = exam.questions.length;
    const objectiveTotal = totalQuestions - essayCount;
    const accuracyPercent = objectiveTotal > 0 ? Math.round((correctCount / objectiveTotal) * 100) : 0;

    // Lưu vào Exam Stats toàn cục
    if (!state.examStats) {
      state.examStats = { totalQuestions: 0, totalCorrect: 0, totalExams: 0, dayStats: {} };
    }
    state.examStats.totalQuestions = (state.examStats.totalQuestions || 0) + totalQuestions;
    state.examStats.totalCorrect = (state.examStats.totalCorrect || 0) + correctCount;
    state.examStats.totalExams = (state.examStats.totalExams || 0) + 1;

    if (!state.examStats.dayStats) state.examStats.dayStats = {};
    for (const [dId, val] of Object.entries(dayStatsIncrement)) {
      if (!state.examStats.dayStats[dId]) {
        state.examStats.dayStats[dId] = { selected: 0, correct: 0 };
      }
      state.examStats.dayStats[dId].selected = (state.examStats.dayStats[dId].selected || 0) + val.selected;
      state.examStats.dayStats[dId].correct = (state.examStats.dayStats[dId].correct || 0) + val.correct;
    }

    // Lưu bền vững LocalStorage + Backend Ổ cứng
    try {
      localStorage.setItem(STORAGE_KEYS.EXAM_STATS, JSON.stringify(state.examStats));
    } catch (e) {
      console.warn('Lỗi lưu examStats vào localStorage:', e);
    }
    saveProgressToServer();

    // Lưu bài thi vào reviewExam để xem lại
    state.reviewExam = {
      type: exam.type,
      title: exam.title,
      totalQuestions,
      objectiveTotal,
      correctCount,
      incorrectCount,
      essayCount,
      accuracyPercent,
      timeTakenStr,
      gradedResults
    };

    // Chuyển sang màn hình Kết quả
    showExamResults();
    showToast('Nộp bài thi thành công! Xem kết quả chi tiết bên dưới.', 'success');
  }

  // 11. Hiển thị Màn hình Kết Quả Bài Thi
  function showExamResults() {
    if (!state.reviewExam) return;
    const res = state.reviewExam;

    if (DOM.examLobbyScreen) DOM.examLobbyScreen.style.display = 'none';
    if (DOM.examActiveScreen) DOM.examActiveScreen.style.display = 'none';
    if (DOM.examReviewScreen) DOM.examReviewScreen.style.display = 'none';
    if (DOM.examResultScreen) DOM.examResultScreen.style.display = 'block';

    if (DOM.resultScoreNumber) DOM.resultScoreNumber.textContent = res.correctCount;
    if (DOM.resultScoreTotal) DOM.resultScoreTotal.textContent = `${res.objectiveTotal} trắc nghiệm`;
    if (DOM.resultScorePercent) DOM.resultScorePercent.textContent = `${res.accuracyPercent}% chính xác`;
    if (DOM.resultTimeTaken) DOM.resultTimeTaken.textContent = res.timeTakenStr;
    if (DOM.resultCorrectCount) DOM.resultCorrectCount.textContent = `${res.correctCount} câu`;
    if (DOM.resultIncorrectCount) DOM.resultIncorrectCount.textContent = `${res.incorrectCount} câu`;
    if (DOM.resultEssayCount) DOM.resultEssayCount.textContent = `${res.essayCount} câu (0 điểm)`;

    DOM.examResultScreen.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // 12. Xem Lại Chi Tiết Bài Làm (Review Screen)
  function renderExamReview(filter = 'all') {
    if (!state.reviewExam) return;
    const review = state.reviewExam;

    if (DOM.examLobbyScreen) DOM.examLobbyScreen.style.display = 'none';
    if (DOM.examActiveScreen) DOM.examActiveScreen.style.display = 'none';
    if (DOM.examResultScreen) DOM.examResultScreen.style.display = 'none';
    if (DOM.examReviewScreen) DOM.examReviewScreen.style.display = 'block';

    // Cập nhật bộ đếm filter
    const allCount = review.gradedResults.length;
    const correctCount = review.gradedResults.filter(r => r.isCorrect).length;
    const incorrectCount = review.gradedResults.filter(r => !r.isCorrect && !r.isEssay).length;
    const essayCount = review.gradedResults.filter(r => r.isEssay).length;

    const rFilterAll = document.getElementById('rfilter-all-count');
    const rFilterCorrect = document.getElementById('rfilter-correct-count');
    const rFilterIncorrect = document.getElementById('rfilter-incorrect-count');
    const rFilterEssay = document.getElementById('rfilter-essay-count');

    if (rFilterAll) rFilterAll.textContent = allCount;
    if (rFilterCorrect) rFilterCorrect.textContent = correctCount;
    if (rFilterIncorrect) rFilterIncorrect.textContent = incorrectCount;
    if (rFilterEssay) rFilterEssay.textContent = essayCount;

    // Lọc danh sách câu hỏi
    const filteredResults = review.gradedResults.filter(r => {
      if (filter === 'correct') return r.isCorrect;
      if (filter === 'incorrect') return !r.isCorrect && !r.isEssay;
      if (filter === 'essay') return r.isEssay;
      return true;
    });

    if (DOM.examReviewStream) {
      if (filteredResults.length === 0) {
        DOM.examReviewStream.innerHTML = `
          <div class="empty-state">
            <p>Không có câu hỏi nào khớp với bộ lọc này.</p>
          </div>
        `;
        return;
      }

      DOM.examReviewStream.innerHTML = filteredResults.map((r, idx) => {
        const q = r.question;
        const qid = q.question_id;
        const itype = q.interaction.type;
        const isEssay = r.isEssay;
        const isCorrect = r.isCorrect;
        const userAns = r.userAnswer;

        let statusClass = isEssay ? 'is-essay' : (isCorrect ? 'is-correct' : 'is-incorrect');
        let statusBadge = '';
        if (isEssay) {
          statusBadge = '<span class="q-status-badge" style="background: rgba(99, 102, 241, 0.15); color: #818cf8; border: 1px solid rgba(99, 102, 241, 0.35);">✍️ Tự luận tham khảo (0đ)</span>';
        } else if (isCorrect) {
          statusBadge = '<span class="q-status-badge correct">✓ Đúng (+1đ)</span>';
        } else {
          statusBadge = '<span class="q-status-badge incorrect">✗ Sai (0đ)</span>';
        }

        return `
          <article class="review-q-card ${statusClass}" id="review-card-${qid}">
            <div class="q-header">
              <div class="q-meta-left">
                <span class="q-index-badge">Câu ${idx + 1}</span>
                <span class="exam-day-origin-pill">${escapeHtml(q.day_label || 'Day')} · ${escapeHtml(q.day_title || '')}</span>
                <span class="q-type-badge">${getInteractionTypeLabel(itype)}</span>
              </div>
              <div>${statusBadge}</div>
            </div>

            <div class="q-prompt">${escapeHtml(q.interaction.prompt)}</div>

            <!-- Widget hiển thị rõ ràng câu trả lời của thí sinh & đáp án đúng -->
            <div class="q-widget-wrap">
              ${renderReviewWidgetHtml(q, userAns)}
            </div>

            <!-- Khung đáp án đúng & Lời giải chi tiết -->
            <div class="review-feedback-wrap">
              <div class="review-correct-banner">
                <strong class="correct-title-tag">🔑 ĐÁP ÁN CHÍNH XÁC:</strong> ${getFormattedAnswerText(q)}
              </div>

              ${isEssay ? `
                <div class="short-text-study-box" style="margin-top: 10px;">
                  ${q.answer && q.answer.sample_answer ? `
                    <div class="sample-answer-box">
                      <div class="short-text-section-header">📝 Câu trả lời mẫu chuẩn mực từ AI:</div>
                      <div class="sample-answer-text">${escapeHtml(q.answer.sample_answer)}</div>
                    </div>
                  ` : ''}

                  ${q.answer && Array.isArray(q.answer.key_points) && q.answer.key_points.length > 0 ? `
                    <div class="keypoints-checklist-wrap" style="margin-top: 10px;">
                      <div class="short-text-section-header">🎯 Các ý chính cốt lõi đối chiếu:</div>
                      <ul style="padding-left: 20px; font-size: 0.88rem; color: var(--text-secondary);">
                        ${q.answer.key_points.map(kp => `<li>${escapeHtml(kp)}</li>`).join('')}
                      </ul>
                    </div>
                  ` : ''}
                </div>
              ` : ''}

              ${q.explanation ? `
                <div class="review-explanation-box">
                  <div class="exp-title">💡 Giải thích chi tiết & Cơ sở lý thuyết:</div>
                  <p>${escapeHtml(q.explanation)}</p>
                </div>
              ` : ''}
            </div>
          </article>
        `;
      }).join('');
    }
  }

  // --- Widget câu hỏi hiển thị trong màn hình Review ---
  function renderReviewWidgetHtml(q, userAns) {
    const inter = q.interaction;
    const itype = inter.type;

    switch (itype) {
      case 'single_select':
      case 'multi_select': {
        const choices = inter.choices || [];
        const userList = Array.isArray(userAns) ? userAns : (userAns ? [userAns] : []);
        const correctList = Array.isArray(q.answer) ? q.answer : [q.answer];

        return `
          <div class="options-list">
            ${choices.map(c => {
              const isUserChoice = userList.includes(c.choice_id);
              const isTargetCorrect = correctList.includes(c.choice_id);

              let optClass = 'review-opt';
              let markerText = '';

              if (isUserChoice && isTargetCorrect) {
                optClass += ' user-chosen-correct';
                markerText = '✓ Bạn chọn (Đúng)';
              } else if (isUserChoice && !isTargetCorrect) {
                optClass += ' user-chosen-incorrect';
                markerText = '✗ Bạn chọn (Sai)';
              } else if (!isUserChoice && isTargetCorrect) {
                optClass += ' correct-answer-target';
                markerText = '★ Đáp án đúng';
              }

              return `
                <div class="option-item ${optClass}">
                  <div class="option-marker">
                    ${isUserChoice ? (isTargetCorrect ? '✓' : '✗') : (isTargetCorrect ? '★' : '')}
                  </div>
                  <div class="option-text">
                    <strong>[${c.choice_id.toUpperCase()}]</strong> ${escapeHtml(c.text)}
                    ${markerText ? `<span style="margin-left: 8px; font-size: 0.76rem; font-weight: 700;">${markerText}</span>` : ''}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        `;
      }

      case 'matching': {
        const leftItems = inter.left || [];
        const rightItems = inter.right || [];
        const userMapping = (userAns && typeof userAns === 'object') ? userAns : {};
        const correctMap = q.answer || {};
        const rightMap = {};
        rightItems.forEach(r => { rightMap[r.id] = r.text; });

        return `
          <div class="matching-container">
            ${leftItems.map(left => {
              const chosenRightId = userMapping[left.id] || '';
              const targetRightId = correctMap[left.id] || '';
              const isMatchCorrect = chosenRightId && chosenRightId === targetRightId;

              return `
                <div class="matching-row" style="border-color: ${isMatchCorrect ? 'var(--emerald-border)' : 'var(--ruby-border)'}">
                  <div class="matching-left-text"><strong>${escapeHtml(left.text)}</strong></div>
                  <div style="font-size: 0.85rem;">
                    <div>Bạn ghép: <span style="color: ${isMatchCorrect ? 'var(--emerald-400)' : 'var(--ruby-400)'}; font-weight: 700;">${escapeHtml(rightMap[chosenRightId] || 'Chưa ghép')}</span> ${isMatchCorrect ? '✓' : '✗'}</div>
                    ${!isMatchCorrect ? `<div style="color: var(--emerald-400); font-weight: 700; margin-top: 3px;">Chuẩn: ${escapeHtml(rightMap[targetRightId] || '')}</div>` : ''}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        `;
      }

      case 'ordering': {
        const defaultOptions = inter.options || [];
        const optMap = {};
        defaultOptions.forEach(o => { optMap[o.option_id] = o.text; });
        const userOrder = Array.isArray(userAns) ? userAns : [];
        const correctOrder = Array.isArray(q.answer) ? q.answer : [];

        return `
          <div style="margin-bottom: 12px; font-size: 0.88rem;">
            <div style="padding: 10px 14px; background: var(--bg-input); border-radius: var(--radius-sm); margin-bottom: 8px; color: var(--text-main);">
              <strong>Thứ tự bạn đã xếp:</strong> ${userOrder.length > 0 ? userOrder.map((id, i) => `${i + 1}. ${escapeHtml(optMap[id] || id)}`).join(' ➜ ') : '<span class="text-muted">Chưa sắp xếp</span>'}
            </div>
            <div style="padding: 10px 14px; background: var(--emerald-bg); border: 1.5px solid var(--emerald-border); border-radius: var(--radius-sm); color: var(--text-main);">
              <strong style="color: var(--emerald-400);">Thứ tự chuẩn xác:</strong> ${correctOrder.map((id, i) => `${i + 1}. ${escapeHtml(optMap[id] || id)}`).join(' ➜ ')}
            </div>
          </div>
        `;
      }

      case 'numeric_input': {
        return `
          <div style="margin-bottom: 10px; font-size: 0.88rem;">
            <div>Số bạn đã nhập: <strong>${userAns !== null && userAns !== undefined ? userAns : '<span class="text-muted">Chưa nhập</span>'}</strong></div>
          </div>
        `;
      }

      case 'short_text': {
        return `
          <div style="margin-bottom: 12px;">
            <div style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 4px;">Ý kiến / câu trả lời của bạn trong bài thi:</div>
            <div style="padding: 10px 14px; background: var(--bg-input); border-radius: var(--radius-sm); font-size: 0.88rem; line-height: 1.5; white-space: pre-wrap;">${escapeHtml(userAns || 'Thí sinh để trống câu này.')}</div>
          </div>
        `;
      }

      default:
        return '';
    }
  }

  // 13. XÓA LỊCH SỬ THỐNG KÊ THI THỬ
  function resetExamStats() {
    if (!confirm('Bạn có chắc chắn muốn xóa toàn bộ lịch sử thi thử và bảng điểm yếu của 15 Day? Dữ liệu thống kê sẽ được đặt lại về 0.')) {
      return;
    }

    state.examStats = {
      totalQuestions: 0,
      totalCorrect: 0,
      totalExams: 0,
      dayStats: {}
    };

    try {
      localStorage.setItem(STORAGE_KEYS.EXAM_STATS, JSON.stringify(state.examStats));
    } catch (e) {
      console.warn('Lỗi ghi examStats vào localStorage:', e);
    }
    saveProgressToServer(true);

    renderExamLobbyStats();
    showToast('Đã đặt lại toàn bộ thống kê thi thử về 0 thành công! 🔄', 'success');
  }

  // --- Chuyển đổi Tab (Quiz vs Knowledge vs Thi thử) ---
  function switchTab(tabName) {
    state.currentTab = tabName;
    localStorage.setItem(STORAGE_KEYS.CURRENT_TAB, tabName);
    saveProgressToServer();

    if (DOM.tabQuizBtn) {
      DOM.tabQuizBtn.classList.toggle('active', tabName === 'quiz');
      DOM.tabQuizBtn.setAttribute('aria-selected', String(tabName === 'quiz'));
    }
    if (DOM.tabKnowledgeBtn) {
      DOM.tabKnowledgeBtn.classList.toggle('active', tabName === 'knowledge');
      DOM.tabKnowledgeBtn.setAttribute('aria-selected', String(tabName === 'knowledge'));
    }
    if (DOM.tabExamBtn) {
      DOM.tabExamBtn.classList.toggle('active', tabName === 'exam');
      DOM.tabExamBtn.setAttribute('aria-selected', String(tabName === 'exam'));
    }

    if (DOM.quizView) DOM.quizView.classList.toggle('active', tabName === 'quiz');
    if (DOM.knowledgeView) DOM.knowledgeView.classList.toggle('active', tabName === 'knowledge');
    if (DOM.examView) DOM.examView.classList.toggle('active', tabName === 'exam');

    if (tabName === 'exam') {
      if (!state.currentExam && !state.reviewExam) {
        showExamLobby();
      } else if (!state.currentExam && state.reviewExam) {
        showExamLobby();
      }
    }
  }

  // --- Thiết lập Event Listeners Toàn cục ---
  function setupEventListeners() {
    // 1. Theme Toggle
    DOM.themeToggleBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem(STORAGE_KEYS.THEME, next);
      updateThemeButtonText(next);
      showToast(`Đã chuyển sang giao diện: ${next === 'dark' ? 'Tối' : 'Sáng'}`, 'info');
    });

    // 2. Tab Switches
    if (DOM.tabQuizBtn) DOM.tabQuizBtn.addEventListener('click', () => switchTab('quiz'));
    if (DOM.tabKnowledgeBtn) DOM.tabKnowledgeBtn.addEventListener('click', () => switchTab('knowledge'));
    if (DOM.tabExamBtn) DOM.tabExamBtn.addEventListener('click', () => switchTab('exam'));

    // 2.1 Exam Action Buttons
    if (DOM.btnStartFull) DOM.btnStartFull.addEventListener('click', () => startExam('full'));
    if (DOM.btnStartShort) DOM.btnStartShort.addEventListener('click', () => startExam('short'));
    if (DOM.btnCancelExam) DOM.btnCancelExam.addEventListener('click', cancelExam);
    if (DOM.btnSubmitExam) DOM.btnSubmitExam.addEventListener('click', submitExam);
    if (DOM.btnReviewExam) DOM.btnReviewExam.addEventListener('click', () => renderExamReview('all'));
    if (DOM.btnNewExam) DOM.btnNewExam.addEventListener('click', showExamLobby);
    if (DOM.btnBackToLobby) DOM.btnBackToLobby.addEventListener('click', showExamLobby);
    if (DOM.resetExamStatsBtn) DOM.resetExamStatsBtn.addEventListener('click', resetExamStats);

    // 2.2 Exam Palette Jump Click
    if (DOM.examPaletteGrid) {
      DOM.examPaletteGrid.addEventListener('click', e => {
        const chip = e.target.closest('.palette-chip');
        if (!chip) return;
        const qid = chip.dataset.qid;
        const card = document.getElementById(`exam-card-${qid}`);
        if (card) {
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    }

    // 2.3 Exam Review Filter Pills
    if (DOM.reviewFilterPills && DOM.reviewFilterPills.length > 0) {
      DOM.reviewFilterPills.forEach(pill => {
        pill.addEventListener('click', () => {
          DOM.reviewFilterPills.forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          const filter = pill.dataset.rfilter || 'all';
          renderExamReview(filter);
        });
      });
    }

    // Nút Mở Slide: luôn lấy chính xác Day hiện tại và mở đúng Slide tương ứng
    if (DOM.headerSlideBtn) {
      DOM.headerSlideBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const num = String(state.currentDayId || '').replace(/\D/g, '').padStart(2, '0');
        const targetUrl = `Slides/Day${num}.pdf`;
        window.open(targetUrl, '_blank');
      });
    }

    // 3. Quiz Filter Pills
    DOM.filterPills.forEach(pill => {
      pill.addEventListener('click', () => {
        DOM.filterPills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        state.activeFilter = pill.dataset.filter;
        applyQuestionFilter();
      });
    });

    // 4. Reset Day Button
    DOM.resetDayBtn.addEventListener('click', () => {
      if (!confirm(`Bạn có chắc chắn muốn làm lại toàn bộ câu hỏi của ${state.currentDayData?.title || 'Day này'}? Tiến độ của ngày này sẽ được xóa để luyện tập lại.`)) {
        return;
      }
      if (state.userProgress[state.currentDayId]) {
        delete state.userProgress[state.currentDayId];
        saveProgress();
        renderQuizStream();
        showToast('Đã làm mới Day này! Chúc bạn ôn tập tốt.', 'success');
      }
    });

    // 5. Knowledge Search & Filter
    DOM.kcSearchInput.addEventListener('input', e => {
      state.kcSearchQuery = e.target.value;
      renderKnowledgeBase();
    });

    DOM.kcCoreOnlyCheckbox.addEventListener('change', e => {
      state.kcCoreOnly = e.target.checked;
      renderKnowledgeBase();
    });

    // 6. Knowledge Status Filter Pills (Tất cả / 🚩 Cần xem lại / ✅ Đã hiểu)
    if (DOM.kcFilterPills && DOM.kcFilterPills.length > 0) {
      DOM.kcFilterPills.forEach(pill => {
        pill.addEventListener('click', () => {
          DOM.kcFilterPills.forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          state.kcStatusFilter = pill.dataset.kcFilter || 'all';
          renderKnowledgeBase();
        });
      });
    }

    // 7. Delegated Click Handler cho Nút Cờ vàng (🚩) và Tick xanh (✅)
    if (DOM.kcGroupsContainer) {
      DOM.kcGroupsContainer.addEventListener('click', e => {
        const btn = e.target.closest('.kc-status-btn');
        if (!btn) return;

        const kcId = btn.dataset.kcid;
        const action = btn.dataset.action; // 'flag' | 'done'
        const groupId = btn.dataset.groupId;
        if (!kcId || !action) return;

        const currentStatus = getKcStatus(state.currentDayId, kcId);
        let newStatus = currentStatus;

        if (action === 'flag') {
          // Bấm Cờ vàng: luôn chuyển về 'flagged' (bỏ chọn tick xanh)
          newStatus = 'flagged';
        } else if (action === 'done') {
          // Bấm Tick xanh: chuyển sang 'done' (bỏ chọn cờ vàng).
          // Nếu bấm lại vào chính tick xanh khi đang active, trả về 'flagged' (mặc định)
          newStatus = currentStatus === 'done' ? 'flagged' : 'done';
        }

        setKcStatus(state.currentDayId, kcId, newStatus);

        // Nếu người dùng đang xem ở chế độ "Tất cả", cập nhật mượt mà tại chỗ không giật trang
        if (state.kcStatusFilter === 'all') {
          const card = document.getElementById(`kc-card-${kcId}`);
          if (card) {
            const flagBtn = card.querySelector('.btn-flag');
            const doneBtn = card.querySelector('.btn-done');
            if (flagBtn) flagBtn.classList.toggle('active', newStatus === 'flagged');
            if (doneBtn) doneBtn.classList.toggle('active', newStatus === 'done');
            card.classList.toggle('is-done', newStatus === 'done');
          }

          // Cập nhật ngay số lượng Hoàn thành: X/Y của Group đó
          if (groupId && state.currentDayData) {
            const group = state.currentDayData.groups.find(g => g.group_id === groupId);
            if (group) {
              const leafIds = group.leaf_kc_ids || [];
              const kcMap = {};
              (state.currentDayData.knowledge_components || []).forEach(kc => { kcMap[kc.kc_id] = kc; });
              let groupKcs = leafIds.map(id => kcMap[id]).filter(Boolean);
              if (state.kcCoreOnly) groupKcs = groupKcs.filter(k => k.is_core);
              const total = groupKcs.length;
              const done = groupKcs.filter(k => getKcStatus(state.currentDayId, k.kc_id) === 'done').length;
              const badge = document.getElementById(`group-badge-${groupId}`);
              if (badge) {
                badge.textContent = `Hoàn thành: ${done}/${total}`;
                badge.classList.toggle('is-all-done', total > 0 && done === total);
              }
            }
          }

          updateKcProgressUI();
        } else {
          // Nếu đang lọc theo 'flagged' hoặc 'done', card cần được chuyển đổi hiển thị
          renderKnowledgeBase();
        }

        if (newStatus === 'done') {
          showToast('Đã đánh dấu: Đã đọc và hiểu thật! ✅', 'success');
        } else {
          showToast('Đã gắn cờ: Cần xem lại sau! 🚩', 'info');
        }
      });
    }

    // 6. Delegated Handler cho Self Evaluation & Keypoint Checkbox
    DOM.questionsStream.addEventListener('click', e => {
      const evalBtn = e.target.closest('.self-eval-btn');
      if (evalBtn) {
        const qid = evalBtn.dataset.qid;
        const evalVal = evalBtn.dataset.eval;
        if (!state.userProgress[state.currentDayId]) state.userProgress[state.currentDayId] = {};
        if (!state.userProgress[state.currentDayId][qid]) {
          state.userProgress[state.currentDayId][qid] = {
            user_answer: '',
            is_correct: true,
            is_checked: true,
            checked_at: new Date().toISOString()
          };
        }
        state.userProgress[state.currentDayId][qid].self_eval = evalVal;
        saveProgress();

        const parent = evalBtn.closest('.self-eval-btns');
        if (parent) {
          parent.querySelectorAll('.self-eval-btn').forEach(b => {
            b.classList.remove('selected-mastered', 'selected-review');
          });
          evalBtn.classList.add(evalVal === 'mastered' ? 'selected-mastered' : 'selected-review');
        }
        showToast(evalVal === 'mastered' ? 'Đã ghi nhận: Bạn đã nắm vững nội dung này! 🟢' : 'Đã ghi nhận: Cần ôn tập lại câu này sau! 🟡', 'info');
      }
    });

    DOM.questionsStream.addEventListener('change', e => {
      if (e.target.classList.contains('kp-check')) {
        const qid = e.target.dataset.qid;
        const card = document.getElementById(`card-${qid}`);
        if (!card) return;
        const checkedIndices = Array.from(card.querySelectorAll('.kp-check:checked')).map(cb => parseInt(cb.dataset.kpidx));
        if (state.userProgress[state.currentDayId] && state.userProgress[state.currentDayId][qid]) {
          state.userProgress[state.currentDayId][qid].checked_kps = checkedIndices;
          saveProgress();
        }
      }
    });

    // 7. Sao lưu và Khôi phục tiến độ (Export / Import Backup)
    if (DOM.exportBackupBtn) {
      DOM.exportBackupBtn.addEventListener('click', exportProgressBackup);
    }
    if (DOM.importBackupBtn && DOM.importBackupFile) {
      DOM.importBackupBtn.addEventListener('click', () => {
        DOM.importBackupFile.click();
      });
      DOM.importBackupFile.addEventListener('change', handleImportBackup);
    }

    // 8. Tự động lưu tức thì vào ổ cứng khi người dùng đóng tab / tắt app
    window.addEventListener('beforeunload', () => saveProgressToServer(true));
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') saveProgressToServer(true);
    });
  }

  // --- Chức năng Xuất file Sao lưu Tiến độ ---
  function exportProgressBackup() {
    const backupData = {
      app: 'BankAI',
      version: '1.0',
      exported_at: new Date().toISOString(),
      userProgress: state.userProgress,
      kcProgress: state.kcProgress,
      examStats: state.examStats,
      currentDayId: state.currentDayId,
      currentTab: state.currentTab,
      theme: document.documentElement.getAttribute('data-theme') || 'dark'
    };
    const jsonStr = JSON.stringify(backupData, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    const dateStr = new Date().toISOString().slice(0, 10);
    a.href = url;
    a.download = `BankAI_Progress_Backup_${dateStr}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('Đã xuất file sao lưu tiến độ thành công! 💾', 'success');
  }

  // --- Chức năng Nhập khôi phục từ file Sao lưu ---
  function handleImportBackup(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(evt) {
      try {
        const imported = JSON.parse(evt.target.result);
        if (!imported || typeof imported !== 'object') {
          throw new Error('Định dạng file không hợp lệ');
        }

        if (imported.userProgress && typeof imported.userProgress === 'object') {
          state.userProgress = imported.userProgress;
          localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(state.userProgress));
        }

        if (imported.kcProgress && typeof imported.kcProgress === 'object') {
          state.kcProgress = imported.kcProgress;
          localStorage.setItem(STORAGE_KEYS.KC_PROGRESS, JSON.stringify(state.kcProgress));
        }

        if (imported.examStats && typeof imported.examStats === 'object') {
          state.examStats = imported.examStats;
          localStorage.setItem(STORAGE_KEYS.EXAM_STATS, JSON.stringify(state.examStats));
        }

        if (imported.currentDayId) {
          state.currentDayId = imported.currentDayId;
          localStorage.setItem(STORAGE_KEYS.CURRENT_DAY, state.currentDayId);
        }

        // Lưu ngay lên server backend
        saveProgressToServer(true);

        // Cập nhật lại UI
        updateGlobalProgress();
        updateDayNavProgress();
        updateQuizProgressUI();
        updateKcProgressUI();
        if (state.currentTab === 'quiz') {
          renderQuizStream();
        } else if (state.currentTab === 'knowledge') {
          renderKnowledgeBase();
        }

        showToast('Khôi phục tiến độ từ file sao lưu thành công! ✅', 'success');
      } catch (err) {
        console.error('Lỗi nhập file sao lưu:', err);
        showToast('Lỗi khi đọc file sao lưu. Vui lòng kiểm tra lại file JSON.', 'error');
      } finally {
        e.target.value = '';
      }
    };
    reader.readAsText(file);
  }

  function updateThemeButtonText(theme) {
    const textEl = DOM.themeToggleBtn.querySelector('.theme-text');
    if (textEl) {
      textEl.textContent = `Giao diện: ${theme === 'dark' ? 'Tối' : 'Sáng'}`;
    }
  }

  // --- Toast Notification Utility ---
  function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <span>${escapeHtml(message)}</span>
    `;
    DOM.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateY(10px)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  }

  // --- HTML Escape Utility ---
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Khởi chạy khi DOM sẵn sàng
  document.addEventListener('DOMContentLoaded', initApp);
})();
