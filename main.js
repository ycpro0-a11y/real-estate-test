// Blog Data
const BLOG_POSTS = [
  {
    id: 36,
    title: "[제36회 총평] 역대급 불시험 민법, 사례 중심 대비가 관건",
    summary: "2025년 제36회 시험은 민법의 난이도가 비정상적으로 높었습니다. 단순 암기 위주로 공부한 수험생들은 고전했을 것으로 보입니다.",
    date: "2025-11-01",
    source: "한국산업인력공단(Q-Net) 통계 및 주요 공인중개사 교육기관 합격 분석 자료",
    content: `
      <h4>1차 시험: 민법의 배신</h4>
      <p>이번 36회 시험에서 가장 큰 변수는 민법이었습니다. 판례의 비중이 90%에 육박했으며, 지문의 길이가 역대급으로 길어 시간 부족 현상을 호소하는 수험생이 많았습니다. 학개론은 계산 문제가 평이했으나 민법에서의 시간 손실을 메우기 역부족이었습니다.</p>
      <h4>2차 시험: 안정적인 난이도 유지</h4>
      <p>중개사법은 고득점이 가능하도록 출제되었으나, 공법에서 국토계획법 외의 파트에서 지엽적인 지문이 다수 등장했습니다. 세법은 개정 법령 중심의 출제가 돋보였습니다.</p>
      <h4>총평 및 조언</h4>
      <p>이제 민법은 조문 암기가 아닌 '상황 해석'의 영역으로 넘어갔습니다. 기출 판례를 실제 사례에 대입하는 훈련을 반복해야 합니다.</p>
    `
  },
  {
    id: 35,
    title: "[제35회 총평] 공법의 함정, 중개사법으로 만회해야 했던 회차",
    summary: "2024년 35회 시험은 2차 과목인 공법에서 변별력을 크게 높였습니다. 학개론의 계산 문제도 다소 까다로웠습니다.",
    date: "2024-11-01",
    source: "한국산업인력공단(Q-Net) 공지사항 및 과목별 출제위원 강평 요약",
    content: `
      <h4>1차 시험: 무난한 흐름 속 학개론의 변주</h4>
      <p>민법은 예년 수준을 유지했으나 부동산학개론에서 투자론과 금융론의 계산 문제가 복합적으로 출제되어 체감 난이도가 상승했습니다.</p>
      <h4>2차 시험: '공포'의 공법 재림</h4>
      <p>공법에서 듣도 보도 못한 숫자와 예외 규정이 대거 출제되어 과락자가 속출했습니다. 반면 중개사법은 상대적으로 평이하게 출제되어 전략적인 점수 배분이 합격의 열쇠였습니다.</p>
      <h4>합격 포인트</h4>
      <p>공법은 과락을 면하는 전략(40~50점)으로, 중개사법에서 80점 이상을 확보하는 전통적인 전략이 유효했습니다.</p>
    `
  },
  {
    id: 34,
    title: "[제34회 총평] 전체적인 균형을 갖춘 표준적 난이도",
    summary: "2023년 시험은 과목별 난이도 배분이 적절했다는 평가입니다. 기초가 탄탄한 수험생에게 유리했습니다.",
    date: "2023-11-01",
    source: "큐넷(Q-Net) 시행 통계 및 공인중개사 협회 분석 리포트",
    content: `
      <h4>전 과목 분석</h4>
      <p>특별히 튀는 과목 없이 골고루 중요 개념 위주로 출제되었습니다. 학개론의 감정평가론 파트가 다소 강화된 점이 특징입니다. 민법은 전통적인 리딩 판례들이 대거 등장했습니다.</p>
      <p>2차 과목에서는 공시법의 등기법 파트가 다소 어려워졌으나 세법이 평이하여 상쇄되었습니다.</p>
    `
  },
  {
    id: 33,
    title: "[제33회 총평] 역대 최다 응시 인원, 변별력 확보를 위한 함정",
    summary: "약 40만 명이 몰린 33회 시험은 떨어뜨리기 위한 '함정 문제'가 도처에 깔려 있었습니다.",
    date: "2022-11-01",
    source: "한국산업인력공단 보도자료 및 에듀윌/박문각 등 주요 교육기관 총평",
    content: `
      <h4>주요 특징</h4>
      <p>응시자가 몰린 만큼 난이도 조절에 공을 들인 흔적이 보입니다. 지문 하나하나를 꼼꼼히 읽지 않으면 반대되는 보기를 정답으로 고르기 쉬운 낚시성 문제가 많았습니다.</p>
    `
  },
  {
    id: 32,
    title: "[제32회 총평] 실무 중심의 출제, 공인중개사의 전문성 강조",
    summary: "2021년 시험은 단순 이론보다는 실무에서 발생할 수 있는 분쟁 사례가 민법과 중개실무에서 강조되었습니다.",
    date: "2021-11-01",
    source: "큐넷(Q-Net) 기출문제 자료실 및 수험 커뮤니티 합격 수기 분석",
    content: `
      <h4>분석</h4>
      <p>중개실무 파트에서 상가 및 주택 임대차 보호법의 깊이 있는 이해를 요구했습니다. 공법은 개발법 파트가 다소 까다로웠습니다.</p>
    `
  },
  {
    id: 31,
    title: "[제31회 총평] '물시험' 논란을 잠재운 꼼꼼한 지문들",
    summary: "30회 합격자가 많았던 터라 31회는 다소 어렵게 출제될 것이라는 예상을 적중시켰습니다.",
    date: "2020-11-01",
    source: "한국산업인력공단 자격검정 통계 및 입시 분석 채널 자료 참고",
    content: `
      <p>민법의 지문들이 정교하게 다듬어져 출제되었습니다. 학개론은 기본 이론에 충실했으나 계산 문제가 시간을 많이 잡아먹는 구조였습니다.</p>
    `
  },
  {
    id: 30,
    title: "[제30회 총평] 1차의 강세, 민법 합격자가 2차까지 휩쓴 해",
    summary: "2019년 시험은 1차 과목의 난이도가 상당했습니다. 1차 관문만 넘으면 2차는 무난했던 회차입니다.",
    date: "2019-11-01",
    source: "큐넷(Q-Net) 합격자 발표 공고 및 교육기관별 난이도 투표 결과",
    content: `
      <p>민법 총칙 파트에서 심화 개념이 다수 등장했습니다. 2차 과목은 전반적으로 평이하여 1차 합격자의 최종 합격률이 높았습니다.</p>
    `
  },
  {
    id: 29,
    title: "[제29회 총평] 공법의 역습, 역대급 난이도로 기록된 해",
    summary: "2018년 시험은 '공포의 공법'이 무엇인지 보여준 해였습니다. 과락 면하기가 지상 과제였습니다.",
    date: "2018-11-01",
    source: "한국산업인력공단 공인중개사 자료실 및 과목별 전문 강사단 총평",
    content: `
      <p>공법에서 법률 구석구석의 시행령 숫자까지 묻는 문제가 다수 나와 수험생들을 당황케 했습니다. 학개론은 계산기 없이는 풀기 힘든 복잡한 산식이 포함되었습니다.</p>
    `
  },
  {
    id: 28,
    title: "[제28회 총평] 기출의 힘이 증명된, 비교적 평이했던 회차",
    summary: "2017년은 기출문제를 꼼꼼히 분석한 수험생이라면 고득점이 가능했던 회차로 평가받습니다.",
    date: "2017-11-01",
    source: "큐넷(Q-Net) 기출문제 게시판 및 부동산 전문 뉴스 자료 참고",
    content: `
      <p>새로운 유형보다는 기존 기출 지문을 변형한 형태가 주를 이뤘습니다. 이 해에는 많은 합격자가 배출되어 다음 해 난이도 상승의 원인이 되기도 했습니다.</p>
    `
  },
  {
    id: 27,
    title: "[제27회 총평] 공인중개사 시험의 전형적인 출제 패턴",
    summary: "2016년 시험은 공인중개사 자격시험의 정석과도 같은 출제 분포를 보여주었습니다.",
    date: "2016-11-01",
    source: "한국산업인력공단 공식 통계 자료 및 주요 교육 브랜드 분석 데이터",
    content: `
      <p>과목별로 중요도가 높은 단원에서 예상 가능한 문제들이 출제되었습니다. 민법은 의사표시와 대리 파트가, 학개론은 수요공급과 정책론이 핵심이었습니다.</p>
    `
  }
];

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
    const timerEl = document.getElementById('d-day-timer');
    if (timerEl) timerEl.innerHTML = "시험이 시작되었습니다!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  const dEl = document.getElementById('days');
  const hEl = document.getElementById('hours');
  const mEl = document.getElementById('minutes');
  const sEl = document.getElementById('seconds');

  if (dEl) dEl.innerText = days.toString().padStart(2, '0');
  if (hEl) hEl.innerText = hours.toString().padStart(2, '0');
  if (mEl) mEl.innerText = minutes.toString().padStart(2, '0');
  if (sEl) sEl.innerText = seconds.toString().padStart(2, '0');
}

updateTimer();
setInterval(updateTimer, 1000);

// Blog Rendering Logic
function renderBlog() {
  const blogGrid = document.getElementById('blog-grid');
  if (!blogGrid) return;

  blogGrid.innerHTML = BLOG_POSTS.map(post => `
    <div class="blog-card" onclick="openBlogPost(${post.id})">
      <div class="blog-card-content">
        <span class="blog-tag">제${post.id}회 분석</span>
        <h3>${post.title}</h3>
        <p>${post.summary}</p>
        <div style="margin-top: 15px; font-size: 0.8rem; color: #a0aec0;">${post.date}</div>
      </div>
    </div>
  `).join('');
}

window.openBlogPost = function(id) {
  const post = BLOG_POSTS.find(p => p.id === id);
  if (!post) return;

  const modal = document.getElementById('blog-modal');
  const content = document.getElementById('blog-content');
  
  content.innerHTML = `
    <article class="blog-post-view">
      <div class="blog-post-header">
        <h2>${post.title}</h2>
        <div class="blog-post-meta">작성일: ${post.date} | 태그: 공인중개사, 시험분석</div>
      </div>
      <div class="blog-post-content">
        ${post.content}
        <div class="blog-post-source" style="margin-top: 40px; padding-top: 20px; border-top: 1px dashed #e2e8f0; font-size: 0.85rem; color: #718096;">
          <strong>출처 및 참고:</strong> ${post.source}
        </div>
      </div>
    </article>
  `;
  
  modal.showModal();
};

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

// Close Blog Modal
const blogModal = document.getElementById('blog-modal');
const closeBlogBtn = document.getElementById('close-blog');
if (closeBlogBtn) closeBlogBtn.addEventListener('click', () => blogModal.close());

// Close modals when clicking backdrop
[privacyModal, blogModal].forEach(m => {
  if (!m) return;
  m.addEventListener('click', (e) => {
    const rect = m.getBoundingClientRect();
    if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) {
      m.close();
    }
  });
});

// Initialize
renderBlog();
console.log('Real Estate Exam Info site initialized');
