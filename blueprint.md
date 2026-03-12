# 공인중개사 시험정보 사이트 (Real Estate Agent Exam Info) - Blueprint

## 1. 개요 및 목적
- **목표:** 공인중개사 수험생들에게 필수적인 시험 일정, 과목 정보, 기출문제, FAQ를 신뢰감 있는 디자인으로 제공하는 단일 페이지 웹사이트. 애드센스 승인을 위한 고품질 텍스트 콘텐츠 확보.
- **주요 가치:** 전문성(Professionalism), 가독성(Readability), 접근성(Accessibility), 신뢰성(Trust).

## 2. 디자인 및 UI/UX 사양
- **테마:** Professional & Trustworthy
- **색상 팔레트:**
  - `--primary-color`: `#1A365D` (Deep Navy)
  - `--secondary-color`: `#0052CC` (Royal Blue)
  - `--accent-color`: `#EBF8FF` (Light Blue)
  - `--text-color`: `#2D3748` (Dark Gray)
  - `--bg-color`: `#F7FAFC` (Off-White)
  - `--white`: `#FFFFFF`
- **타이포그래피:** 'Pretendard', sans-serif (시스템 폰트 우선 순위 적용)
- **주요 효과:** 
  - 부드러운 카드 그림자 (Multi-layered drop shadows)
  - 인터랙티브 Hover 효과 (Scale, Color transitions)
  - 반응형 레이아웃 (Grid & Flexbox, Container Queries 활용)

## 3. 구현된/구현할 기능 상세
- [x] 헤더 (Navigation): 로고 및 섹션별 이동 링크 (Smooth Scroll).
- [x] 히어로 섹션 (Hero): 메인 타이틀 및 **D-Day 카운트다운 타이머**.
- [x] 시험 안내 (Exam Info): 1차/2차 시험 과목 및 합격 기준 카드 레이아웃. 상세 텍스트 설명 추가 (애드센스 요건).
- [x] 출제경향 총평 (Exam Trends): 최근 시험의 난이도 및 주요 출제 포인트 분석 섹션. 상세 분석 텍스트 추가.
- [x] 기출문제 및 해설 (Past Papers & Solutions): 최근 10개년(제27회~제36회) 기출문제 다운로드 링크.
- [x] **정답 및 핵심 해설 (Internal Viewer):** 연도별 빠른 정답표 확인 및 주요 문항 핵심 해설 기능 추가 (완료).
- [x] 학습 가이드 (Study Guide): 초보자를 위한 상세 학습 방법론 섹션 신설 (텍스트 볼륨 확보용).
- [x] FAQ & Tips: Web Component를 이용한 아코디언 컴포넌트 (`<faq-accordion>`).
- [x] 푸터 (Footer): 관련 링크, 저작권 정보, **개인정보처리방침(Privacy Policy) 모달/링크**.
- [x] Head 태그: Google AdSense 스크립트 추가용 주석/메타 태그 배치.

## 4. 실행 계획 및 단계
1. **콘텐츠 볼륨 확대:** 기존 '시험 과목' 및 '출제경향' 섹션의 텍스트 설명을 문장형으로 대폭 보강하여 '가치가 있는 텍스트 콘텐츠(Text-rich)' 요건 충족.
2. **학습 가이드 섹션 추가:** 독학 수험생을 위한 과목별 학습 전략을 문단 형태로 상세히 서술한 신규 섹션(`/index.html`) 추가.
3. **정책 및 약관 고지:** 푸터에 '개인정보처리방침' 및 '면책 조항' 텍스트를 추가하여 사이트의 투명성 및 필수 정책 요건 충족.
4. **HTML Head 설정:** 애드센스 검토용 `<script>` 태그 삽입 위치 마련 및 메타 디스크립션 보강.
5. **검증 및 배포:** 텍스트 가독성 확인 및 GitHub 푸시.

