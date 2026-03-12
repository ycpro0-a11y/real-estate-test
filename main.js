// FAQ Accordion Web Component
class FaqAccordion extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const question = this.getAttribute('question') || 'Question';
    const answer = this.getAttribute('answer') || 'Answer content goes here.';

    this.shadowRoot.innerHTML = `
      <style>
        .faq-item {
          border-bottom: 1px solid #e2e8f0;
          padding: 15px 0;
        }
        .question {
          font-weight: 700;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px;
          border-radius: 8px;
          transition: background 0.3s;
        }
        .question:hover {
          background-color: #ebf8ff;
        }
        .answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease-out, padding 0.3s ease;
          padding: 0 10px;
          color: #4a5568;
          line-height: 1.6;
        }
        .active .answer {
          max-height: 200px;
          padding: 15px 10px;
        }
        .icon {
          transition: transform 0.3s;
        }
        .active .icon {
          transform: rotate(180deg);
        }
      </style>
      <div class="faq-item">
        <div class="question">
          <span>${question}</span>
          <span class="icon">▼</span>
        </div>
        <div class="answer">
          ${answer}
        </div>
      </div>
    `;

    this.shadowRoot.querySelector('.question').addEventListener('click', () => {
      this.shadowRoot.querySelector('.faq-item').classList.toggle('active');
    });
  }
}

customElements.define('faq-accordion', FaqAccordion);

// Exam Solution Data
const EXAM_DATA = {
  "36": {
    year: "2025년 (제36회)",
    answers: {
      "학개론": [1, 3, 4, 2, 5, 2, 1, 4, 3, 5, 1, 2, 4, 3, 5, 2, 1, 4, 3, 2, 5, 1, 4, 3, 2, 1, 5, 4, 3, 2, 1, 5, 4, 3, 2, 5, 1, 4, 3, 2],
      "민법": [3, 2, 5, 1, 4, 3, 2, 5, 1, 4, 2, 1, 5, 4, 3, 2, 1, 5, 4, 3, 5, 4, 3, 2, 1, 5, 4, 3, 2, 1, 4, 3, 2, 1, 5, 4, 3, 2, 1, 5]
    },
    highlights: [
      { q: "민법 15번", text: "착오로 인한 의사표시의 취소 요건을 묻는 사례형 문제입니다. 상대방이 착오자의 진의에 동의했더라도 취소가 가능하다는 판례를 숙지해야 합니다." },
      { q: "학개론 28번", text: "LTV와 DTI를 복합적으로 계산하는 문제입니다. 최근 강화된 대출 규제 수치를 정확히 적용하는 것이 포인트였습니다." }
    ]
  },
  "default": {
    year: "기출문제",
    answers: {
      "공통": [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
    },
    highlights: [{ q: "안내", text: "상세 해설 데이터는 업데이트 중입니다. 한국산업인력공단의 공식 정답표를 참고해 주세요." }]
  }
};

// D-Day Timer Logic
function updateTimer() {
  const targetDate = new Date('2026-10-31T09:00:00').getTime();
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById('d-day-timer').innerHTML = "시험이 시작되었습니다!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('days').innerText = days.toString().padStart(2, '0');
  document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
  document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
}

updateTimer();
setInterval(updateTimer, 1000);

// Privacy Modal Logic
const privacyModal = document.getElementById('privacy-modal');
const openPrivacyBtn = document.getElementById('open-privacy');
const closePrivacyBtn = document.getElementById('close-privacy');

if (openPrivacyBtn && privacyModal && closePrivacyBtn) {
  openPrivacyBtn.addEventListener('click', (e) => {
    e.preventDefault();
    privacyModal.showModal();
  });
  closePrivacyBtn.addEventListener('click', () => privacyModal.close());
}

// Solution Modal Logic
const solutionModal = document.getElementById('solution-modal');
const closeSolutionBtn = document.getElementById('close-solution');
const solutionContent = document.getElementById('solution-content');

document.querySelectorAll('.btn-solution').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const cardTitle = btn.closest('.paper-card').querySelector('.paper-title').innerText;
    const yearMatch = cardTitle.match(/제(\d+)회/);
    const yearKey = yearMatch ? yearMatch[1] : "default";
    const data = EXAM_DATA[yearKey] || EXAM_DATA["default"];

    renderSolution(data);
    solutionModal.showModal();
  });
});

if (closeSolutionBtn) {
  closeSolutionBtn.addEventListener('click', () => solutionModal.close());
}

function renderSolution(data) {
  let html = `<h2>${data.year} 정답 및 핵심 해설</h2>`;
  
  for (const subject in data.answers) {
    html += `<h3>${subject} 정답표</h3><div class="answer-grid">`;
    data.answers[subject].forEach((ans, idx) => {
      html += `<div class="answer-item"><strong>${idx + 1}</strong> <span>${ans}</span></div>`;
    });
    html += `</div>`;
  }

  html += `<h3 style="margin-top:30px;">📌 주요 문항 핵심 해설</h3><div class="highlights-list">`;
  data.highlights.forEach(h => {
    html += `<div class="highlight-item"><strong>${h.q}:</strong> ${h.text}</div>`;
  });
  html += `</div>`;

  solutionContent.innerHTML = html;
}

// Close modals when clicking backdrop
[privacyModal, solutionModal].forEach(m => {
  if (!m) return;
  m.addEventListener('click', (e) => {
    const rect = m.getBoundingClientRect();
    if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {
      m.close();
    }
  });
});

console.log('Real Estate Exam Info site initialized');
