# 공인중개사 시험정보 사이트 (Real Estate Agent Exam Info) - Blueprint

## 1. 개요 및 목적
- **목표:** 공인중개사 수험생들에게 필수적인 시험 일정, 과목 정보, 기출문제, FAQ를 신뢰감 있는 디자인으로 제공하는 단일 페이지 웹사이트.
- **주요 가치:** 전문성(Professionalism), 가독성(Readability), 접근성(Accessibility).

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
- [x] 시험 안내 (Exam Info): 1차/2차 시험 과목 및 합격 기준 카드 레이아웃.
- [x] 출제경향 총평 (Exam Trends): 최근 시험의 난이도 및 주요 출제 포인트 분석 섹션 추가.
- [x] 기출문제 및 해설 (Past Papers & Solutions): 최근 10개년(제27회~제36회) 기출문제와 **정답/해설** 링크 제공.
- [x] FAQ & Tips: Web Component를 이용한 아코디언 컴포넌트 (`<faq-accordion>`).
- [x] 푸터 (Footer): 관련 링크 및 저작권 정보.

## 4. 실행 계획 및 단계
1. **기본 구조 설정:** `index.html`, `style.css`, `main.js` 파일 초기화 및 연결. (완료)
2. **스타일 시스템 구축:** `style.css`에 CSS Variables 및 Global Reset 설정. (완료)
3. **컴포넌트 개발:**
   - Hero 섹션 및 D-Day 타이머 로직 (`main.js`). (완료)
   - 과목 정보 및 합격 기준 섹션 마크업 및 스타일링. (완료)
   - `<faq-accordion>` Custom Element 정의 (`main.js`). (완료)
4. **콘텐츠 확장 및 고도화:**
   - **출제경향 총평 섹션 추가:** 과목별 최근 출제 흐럼 요약.
   - **기출문제 리스트 업데이트:** 10개년치 데이터로 그리드 레이아웃 확장.
5. **검증 및 최적화:** 반응형 디자인 확인 및 브라우저 호환성 체크.

