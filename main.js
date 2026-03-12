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

  // Close modals when clicking backdrop
  privacyModal.addEventListener('click', (e) => {
    const rect = privacyModal.getBoundingClientRect();
    if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {
      privacyModal.close();
    }
  });
}

console.log('Real Estate Exam Info site initialized');
