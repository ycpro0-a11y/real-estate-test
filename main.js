// Blog Data
const BLOG_POSTS = [
  {
    id: 36,
    title: "[제36회 총평] 역대급 불시험 민법, 사례 중심 대비가 관건",
    summary: "2025년 제36회 시험은 민법의 난이도가 비정상적으로 높았습니다. 단순 암기 위주로 공부한 수험생들은 고전했을 것으로 보입니다.",
    date: "2025-11-01",
    source: "한국산업인력공단(Q-Net) 통계 및 주요 공인중개사 교육기관 합격 분석 자료",
    killers: [
      { subject: "부동산세법", question: "양도소득세 계산 시 장기보유특별공제와 세율 적용의 복합 사례 (25번~28번 정답이 모두 5번으로 출제됨)", solution: "수험생의 심리를 흔드는 정답 배치와 함께, 개정된 고가주택 기준을 적용해야 하는 고난도 계산 문제였습니다. 평소 연습하지 않은 수치들이 대거 등장했습니다.", answer: "5" },
      { subject: "부동산공법", question: "주택법상 품질점검단 구성 및 운영에 관한 세부 규정", solution: "실무에서 거의 다루지 않는 지엽적인 시행령 내용으로, 과락을 유발하기 위한 전형적인 킬러 문항이었습니다.", answer: "3" }
    ],
    content: `
      <h4>1차 시험: 민법의 배신</h4>
      <p>이번 36회 시험에서 가장 큰 변수는 민법이었습니다. 판례의 비중이 90%에 육박했으며, 지문의 길이가 역대급으로 길어 시간 부족 현상을 호소하는 수험생이 많았습니다. 학개론은 계산 문제가 평이했으나 민법에서의 시간 손실을 메우기 역부족이었습니다.</p>
      <h4>2차 시험: 안정적인 난이도 유지</h4>
      <p>중개사법은 고득점이 가능하도록 출제되었으나, 공법에서 국토계획법 외의 파트에서 지엽적인 지문이 다수 등장했습니다. 세법은 개정 법령 중심의 출제가 돋보였습니다.</p>
    `
  },
  {
    id: 35,
    title: "[제35회 총평] 공법의 함정, 중개사법으로 만회해야 했던 회차",
    summary: "2024년 35회 시험은 2차 과목인 공법에서 변별력을 크게 높였습니다. 학개론의 계산 문제도 다소 까다로웠습니다.",
    date: "2024-11-01",
    source: "한국산업인력공단(Q-Net) 공지사항 및 과목별 출제위원 강평 요약",
    killers: [
      { subject: "민법", question: "오표시 무해의 원칙과 착오에 의한 취소권 행사의 경합 사례", solution: "계약서상 지번 기재 오류 시 당사자의 진의를 파악하는 문제로, 취소권 인정 여부를 묻는 복합 판례형이었습니다.", answer: "2" },
      { subject: "중개사법", question: "부동산 거래신고법상 포상금 지급 대상 및 절차 (박스형)", solution: "단순 암기 사항을 사례에 대입하여 지급 대상인 것과 아닌 것을 모두 골라야 하는 까다로운 형태였습니다.", answer: "4" }
    ],
    content: `
      <h4>1차 시험: 무난한 흐름 속 학개론의 변주</h4>
      <p>민법은 예년 수준을 유지했으나 부동산학개론에서 투자론과 금융론의 계산 문제가 복합적으로 출제되어 체감 난이도가 상승했습니다.</p>
      <h4>2차 시험: '공포'의 공법 재림</h4>
      <p>공법에서 듣도 보도 못한 숫자와 예외 규정이 대거 출제되어 과락자가 속출했습니다. 반면 중개사법은 상대적으로 평이하게 출제되어 전략적인 점수 배분이 합격의 열쇠였습니다.</p>
    `
  },
  {
    id: 34,
    title: "[제34회 총평] 전체적인 균형을 갖춘 표준적 난이도",
    summary: "2023년 시험은 과목별 난이도 배분이 적절했다는 평가입니다. 기초가 탄탄한 수험생에게 유리했습니다.",
    date: "2023-11-01",
    source: "큐넷(Q-Net) 시행 통계 및 공인중개사 협회 분석 리포트",
    killers: [
      { subject: "학개론", question: "입지계수(LQ)를 활용한 지역 경제 기반 분석 및 기대수익률 계산", solution: "계산 과정이 3단계 이상인 복잡한 산식 문제로, 감정평가사 수준의 고난도 문항이었습니다.", answer: "1" },
      { subject: "부동산공법", question: "도시개발법상 조합의 설립 및 운영에 관한 지엽적 규정", solution: "정관 변경 시 승인 요건 등 평소에 잘 보지 않는 세부 수치를 정답으로 유도했습니다.", answer: "5" }
    ],
    content: `
      <h4>전 과목 분석</h4>
      <p>특별히 튀는 과목 없이 골고루 중요 개념 위주로 출제되었습니다. 학개론의 감정평가론 파트가 다소 강화된 점이 특징입니다. 민법은 전통적인 리딩 판례들이 대거 등장했습니다.</p>
    `
  },
  {
    id: 33,
    title: "[제33회 총평] 역대 최다 응시 인원, 변별력 확보를 위한 함정",
    summary: "약 40만 명이 몰린 33회 시험은 떨어뜨리기 위한 '함정 문제'가 도처에 깔려 있었습니다.",
    date: "2022-11-01",
    source: "한국산업인력공단 보도자료 및 에듀윌/박문각 등 주요 교육기관 총평",
    killers: [
      { subject: "부동산세법", question: "조세총론 중 가산세 및 면세점 적용의 예외 사례", solution: "33회 세법은 역대급으로 불리며, 평이했던 파트에서도 예외의 예외를 묻는 지문이 많았습니다.", answer: "4" },
      { subject: "학개론", question: "감정평가론상 감가수정 방법 및 원가법 적용 산식", solution: "이론적인 깊이가 상당했으며 지문 구성이 꼬여 있어 정답을 찾는 데 많은 시간이 소요되었습니다.", answer: "2" }
    ],
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
    killers: [
      { subject: "민법", question: "제3자를 위한 계약 및 계약의 해제와 원상회복 의무 (갑-을-병 사례)", solution: "당사자 간의 권리 관계가 복잡하게 얽혀 있어 머릿속으로 그림을 그려가며 풀어야 했던 킬러입니다.", answer: "3" },
      { subject: "중개사법", question: "분사무소 인장 등록 및 이전 신고의 주체와 장소", solution: "주사무소와 분사무소의 신고처를 교묘하게 섞어놓아 실수를 유도한 전형적인 함정 문제였습니다.", answer: "1" }
    ],
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
    killers: [
      { subject: "중개사법", question: "계약명의신탁에서 매도인이 선의인 경우의 소유권 귀속 사례", solution: "민법적 지식이 없으면 중개사법에서도 풀 수 없는, 과목 간 경계를 허문 고난도 사례였습니다.", answer: "5" },
      { subject: "부동산공법", question: "도시 및 주거환경정비법상 관리처분계획의 수립 기준", solution: "암기하기 매우 힘든 지엽적인 수치들이 정답 지문으로 사용되어 수험생들을 당황하게 했습니다.", answer: "2" }
    ],
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
    killers: [
      { subject: "학개론", question: "수요의 가격탄력성과 소득탄력성이 혼합된 균형 가격 이동 계산", solution: "두 가지 탄력성을 동시에 고려하여 최종 수요량을 산출해야 하는, 시간이 많이 소요되는 문제였습니다.", answer: "3" },
      { subject: "민법", question: "민법총칙상 착오와 사기에 의한 의사표시의 경합 판례", solution: "전통적인 이론보다는 최신 판례의 미묘한 차이를 묻는 지문이 킬러로 등장했습니다.", answer: "4" }
    ],
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
    killers: [
      { subject: "부동산공법", question: "건축법상 용도변경 시 허가 및 신고 대상의 복합 암기", solution: "용도군 9가지를 완벽히 암기해도 헷갈릴 수 있도록 준용 규정을 섞어 출제한 난해한 문제였습니다.", answer: "1" },
      { subject: "중개실무", question: "민사집행법상 경매의 배당 순위 및 매각허가결정 효력", solution: "법률 지식이 상당히 깊어야 풀 수 있는 경매 실무의 정수와 같은 킬러였습니다.", answer: "5" }
    ],
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
    killers: [
      { subject: "민법", question: "가등기담보 등에 관한 법률상 청산 절차와 권리 취득 (사례형)", solution: "지문의 길이가 매우 길어 독해력이 요구되었으나, 기출 유형을 잘 파악했다면 풀 수 있었던 킬러입니다.", answer: "2" },
      { subject: "중개사법", question: "개업공인중개사의 고용인 관리 및 금지행위 위반 시 등록취소 사유", solution: "상대적 등록취소와 절대적 등록취소 사유를 교묘하게 섞어 박스형으로 출제했습니다.", answer: "3" }
    ],
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
    killers: [
      { subject: "부동산공법", question: "국토계획법상 입지규제최소구역 지정 및 개발계획 (당시 신설 문항)", solution: "당시 신설된 법령을 즉각 반영하여 공부량이 부족한 수험생들을 걸러내는 킬러로 작용했습니다.", answer: "4" },
      { subject: "학개론", question: "용도지역 중 제1종 일반주거지역 내에서 건축할 수 없는 시설", solution: "방대한 건축법 용도 분류를 세세하게 암기해야 풀 수 있는 단순 암기형 킬러였습니다.", answer: "2" }
    ],
    content: `
      <p>과목별로 중요도가 높은 단원에서 예상 가능한 문제들이 출제되었습니다. 민법은 의사표시와 대리 파트가, 학개론은 수요공급과 정책론이 핵심이었습니다.</p>
    `
  },
  {
    "id": 26,
    "title": "[제26회 총평] 현대적 공인중개사 시험의 완성",
    "summary": "2015년 시험은 현재 우리가 보는 시험의 전형적인 패턴과 난이도 분포가 완성된 해로 평가받습니다.",
    "date": "2015-10-25",
    "source": "한국산업인력공단 기출문제 데이터베이스",
    "killers": [
      { "subject": "민법", "question": "복합적인 권리 관계에서의 유치권 성립 여부 사례", "solution": "유치권의 성립 요건과 배제 특약을 복합적으로 묻는 정교한 사례형 킬러였습니다.", "answer": "3" }
    ],
    "content": "<h4>총평</h4><p>과목별 난이도 조절이 매우 성공적이었던 회차로, 기초가 탄탄한 수험생들이 합격의 기쁨을 누렸습니다.</p>"
  },
  {
    "id": 25,
    "title": "[제25회 총평] 공법 체계의 재정비와 주택법 강화",
    "summary": "2014년 시험은 주택법 and 정비법의 복잡한 절차적 문항들이 대거 등장했습니다.",
    "date": "2014-10-26",
    "source": "큐넷(Q-Net) 합격 분석 자료",
    "killers": [
      { "subject": "부동산공법", "question": "재개발 조합의 설립 동의 요건과 절차", "solution": "복잡한 동의 비율을 정확히 매칭해야 하는 고난도 문제였습니다.", "answer": "1" }
    ],
    "content": "<h4>변화 포인트</h4><p>정비 사업의 중요성이 커지면서 관련 법규의 출제 비중과 난이도가 동반 상승했습니다.</p>"
  },
  {
    "id": 24,
    "title": "[제24회 총평] 부동산 시장 분석론의 심화",
    "summary": "2013년 시험은 학개론에서 효율적 시장 가설과 정보 가치 계산 등 경제학적 깊이가 더해졌습니다.",
    "date": "2013-10-27",
    "source": "공인중개사 협회 기출 총평",
    "killers": [
      { "subject": "부동산학개론", "question": "기대수익률과 요구수익률의 관계를 통한 투자 결정", "solution": "이론적인 깊이가 상당했으며 지문 구성이 꼬여 있어 정답을 찾는 데 많은 시간이 소요되었습니다.", "answer": "5" }
    ],
    "content": "<h4>총평</h4><p>학개론이 다소 학술적으로 변모하면서 문과생들에게 유리했던 민법 위주 학습 전략에 변화가 필요해진 해였습니다.</p>"
  },
  {
    "id": 23,
    "title": "[제23회 총평] 민법 특별법 비중의 확대",
    "summary": "2012년 시험은 상가건물 임대차보호법 및 가담법 등 민법 특별법의 난이도가 상승했습니다.",
    "date": "2012-10-28",
    "source": "큐넷(Q-Net) 자료실",
    "killers": [
      { "subject": "민법", "question": "집합건물의 소유 및 관리에 관한 법률상 의결 정족수", "solution": "암기가 까다로운 비율 수치들을 섞어 놓아 정확한 지식을 테스트했습니다.", "answer": "2" }
    ],
    "content": "<h4>분석</h4><p>전통적인 민법 총칙보다 실생활과 밀접한 특별법 파트에서 킬러 문항이 다수 배정된 특징이 있습니다.</p>"
  },
  {
    "id": 22,
    "title": "[제22회 총평] 중개실무의 강화와 전문직 윤리 강조",
    "summary": "2011년 시험은 중개사법령뿐만 아니라 실제 중개 과정에서의 주의의무를 묻는 문제가 늘어났습니다.",
    "date": "2011-10-30",
    "source": "한국산업인력공단 기출 분석",
    "killers": [
      { "subject": "중개사법", "question": "확인설명서 작성 시 기재 사항과 서명날인 방법", "solution": "서식의 세부 칸 하나하나를 묻는 지엽적인 문제로 실수를 유도했습니다.", "answer": "4" }
    ],
    "content": "<h4>경향 분석</h4><p>단순 법조문 확인을 넘어, 실제 계약서 작성 시 발생할 수 있는 오류를 잡아내는 능력을 평가했습니다.</p>"
  },
  {
    "id": 21,
    "title": "[제21회 총평] 부동산 공시 및 세법의 변별력 강화",
    "summary": "2010년 시험은 1차보다 2차 과목, 특히 공시세법에서 까다로운 지문들이 많았습니다.",
    "date": "2010-10-24",
    "source": "한국산업인력공단(Q-Net) 통계 자료",
    "killers": [
      { "subject": "부동산세법", "question": "종합부동산세 과세 대상 및 합산 배제 대상", "solution": "복합적인 세세한 규정을 구분해야 하는 문제로 오답률이 높았습니다.", "answer": "3" }
    ],
    "content": "<h4>총평</h4><p>학개론은 상대적으로 쉬웠으나 민법의 사례형 문제들이 시간을 많이 뺏어 1차 시간 배분이 어려웠던 해입니다.</p>"
  },
  {
    "id": 20,
    "title": "[제20회 총평] 자격시험 20주년, 출제 기법의 선진화",
    "summary": "2009년 20회 시험은 누적된 데이터를 바탕으로 아주 정교한 함정 문제들이 배치되었습니다.",
    "date": "2009-10-25",
    "source": "한국산업인력공단 20주년 기념 백서 참고",
    "killers": [
      { "subject": "민법", "question": "복수 주체 간의 공유 관계와 분할 시 법률 관계", "solution": "민법 지식뿐만 아니라 논리적인 사고력을 요하는 긴 지문의 문제였습니다.", "answer": "1" }
    ],
    "content": "<h4>변화 포인트</h4><p>단순 암기만으로는 60점을 넘기기 힘들게 설계되었으며, 개념 간의 유기적 연결을 중시했습니다.</p>"
  },
  {
    "id": 19,
    "title": "[제19회 총평] 공법의 방대한 범위와 지엽적 출제",
    "summary": "2008년 시험은 공법에서 예상치 못한 단원에서 문제가 다수 출제되어 수험생들을 당황케 했습니다.",
    "date": "2008-10-26",
    "source": "큐넷(Q-Net) 시험 분석 리포트",
    "killers": [
      { "subject": "부동산공법", "question": "산지관리법 및 농지법상의 예외 조항", "solution": "공부 비중이 낮은 뒷부분 법령에서 정답을 유도하여 과락을 노린 킬러였습니다.", "answer": "4" }
    ],
    "content": "<h4>총평</h4><p>전체적으로 무난했으나 공법의 난이도가 유독 높아 2차 시험에서 고전한 수험생이 많았습니다.</p>"
  },
  {
    "id": 18,
    "title": "[제18회 총평] 학개론 계산 문제의 정형화",
    "summary": "2007년 시험은 학개론에서 매년 출제되는 계산 유형들이 자리를 잡기 시작한 해입니다.",
    "date": "2007-10-28",
    "source": "한국산업인력공단 기출문제 데이터베이스",
    "killers": [
      { "subject": "부동산학개론", "question": "허프(Huff)의 확률모형을 이용한 상권 매출액 추정", "solution": "공식을 알고 있어도 계산 실수가 잦은 문제로 많은 시간이 소요되었습니다.", "answer": "2" }
    ],
    "content": "<h4>난이도 분석</h4><p>민법은 판례 비중이 70% 이상으로 고착화되었고, 학개론은 계산 문제가 합격의 열쇠가 되었습니다.</p>"
  },
  {
    "id": 17,
    "title": "[제17회 총평] 부동산 거래신고제의 도입과 실무 변화",
    "summary": "2006년 시험은 실거래가 신고제도 시행에 따른 관련 법령 문제가 핵심이었습니다.",
    "date": "2006-10-29",
    "source": "큐넷(Q-Net) 과거 기출 및 법령 개정사",
    "killers": [
      { "subject": "중개업법", "question": "부동산 거래신고 의무자 및 신고 기한 위반 시 과태료", "solution": "신설된 제도의 세부 내용을 묻는 문제로 실무적 감각을 테스트했습니다.", "answer": "3" }
    ],
    "content": "<h4>특징</h4><p>투명한 부동산 거래를 위한 정부 정책이 시험 과목에 즉각 반영되어 수험생들이 공부할 양이 늘어났습니다.</p>"
  },
  {
    "id": 16,
    "title": "[제16회 총평] 제도 정상화와 과목별 난이도 균형",
    "summary": "2005년 시험은 15회 파동 이후 시험의 신뢰성을 회복하기 위해 표준적인 난이도로 출제되었습니다.",
    "date": "2005-10-30",
    "source": "한국산업인력공단(Q-Net) 기출 분석 자료",
    "killers": [
      { "subject": "부동산공법", "question": "국토의 계획 및 이용에 관한 법률상 용도지역 건폐율 수치", "solution": "세부적인 수치를 정확히 암기해야 하는 전형적인 변별력 문항이었습니다.", "answer": "5" }
    ],
    "content": "<h4>총평</h4><p>15회에 비해 난이도는 하락했으나, 문제의 질은 더욱 정교해졌습니다. '국계법' 체계가 정착된 해이기도 합니다.</p>"
  },
  {
    "id": 15,
    "title": "[제15회 총평] 전설의 15회, '불시험'의 대명사가 된 해",
    "summary": "2004년 시험은 역대 최악의 난이도를 기록하여 추가 시험까지 시행되었던 해입니다.",
    "date": "2004-10-24",
    "source": "한국산업인력공단(Q-Net) 역대 합격률 통계 및 뉴스 보도자료",
    "killers": [
      { "subject": "전 과목", "question": "시험 범위 외 지문 및 사법고시 수준의 법률 해석", "solution": "당시 합격률이 1% 미만을 기록할 정도로 모든 과목에서 킬러 문항이 쏟아져 나왔습니다.", "answer": "전부" }
    ],
    "content": "<h4>역사적 사건</h4><p>지나치게 높은 난이도로 인해 수험생들의 대규모 시위가 발생했으며, 결국 추가 시험까지 시행되었던 공인중개사 시험 역사상 가장 큰 파동의 해였습니다.</p>"
  },
  {
    "id": 14,
    "title": "[제14회 총평] 민법 판례 비중의 급격한 확대",
    "summary": "1998년 시험은 이론 중심의 민법 출제에서 대법원 판례 중심의 출제로 전환되는 과도기였습니다.",
    "date": "1998-11-01",
    "source": "한국산업인력공단(Q-Net) 과거 기출 데이터 및 공인중개사 협회 역사 자료",
    "killers": [
      { "subject": "민법", "question": "명의신탁의 유효성 및 효력에 관한 판례적 태도", "solution": "부동산 실권리자명의 등기에 관한 법률 시행 이후의 복잡한 판례를 묻는 킬러였습니다.", "answer": "1" }
    ],
    "content": "<h4>주요 동향</h4><p>지문의 길이가 길어지기 시작했으며, 법조문만 외워서는 합격하기 어려운 구조로 변모했습니다.</p>"
  },
  {
    "id": 13,
    "title": "[제13회 총평] 부동산 금융과 리츠(REITs)의 태동",
    "summary": "1997년 시험은 부동산 투자 및 금융 기법에 대한 기초 지식이 처음으로 문항에 포함되었습니다.",
    "date": "1997-11-01",
    "source": "한국산업인력공단(Q-Net) 과거 기출 데이터 및 공인중개사 협회 역사 자료",
    "killers": [
      { "subject": "부동산학개론", "question": "부동산 간접 투자 상품의 특징과 수익 구조", "solution": "자본 시장과의 연계를 묻는 고난도 문제였습니다.", "answer": "4" }
    ],
    "content": "<h4>변화 포인트</h4><p>단순 중개를 넘어 자산 관리 및 투자 컨설팅 영역으로의 직무 확장성을 반영하기 시작했습니다.</p>"
  },
  {
    "id": 12,
    "title": "[제12회 총평] 공법상 규제 완화와 국토 이용 체계 개편",
    "summary": "1996년 시험은 국토이용관리법 등 주요 공법의 잦은 개정이 반영되어 출제되었습니다.",
    "date": "1996-11-01",
    "source": "한국산업인력공단(Q-Net) 과거 기출 데이터 및 공인중개사 협회 역사 자료",
    "killers": [
      { "subject": "부동산공법", "question": "준농림지역 내의 행위 제한 규정", "solution": "당시 가장 핫했던 용도지역 관련 규정을 세밀하게 파고든 킬러 문항이었습니다.", "answer": "2" }
    ],
    "content": "<h4>총평</h4><p>개정 법령을 제때 업데이트하지 못한 독학 수험생들의 탈락이 많았던 회차였습니다.</p>"
  },
  {
    "id": 11,
    "title": "[제11회 총평] IMF 여파와 부동산 시장 개방의 영향",
    "summary": "1995년 시험은 대외 경제 여건 변화와 맞물려 부동산 시장론 파트가 강화되었습니다.",
    "date": "1995-11-01",
    "source": "한국산업인력공단(Q-Net) 과거 기출 데이터 및 공인중개사 협회 역사 자료",
    "killers": [
      { "subject": "부동산학개론", "question": "외국인 부동산 취득 규제 완화 및 시장 파급 효과", "solution": "시사적인 내용을 이론과 결합한 문제로, 법령 변화를 민감하게 체크해야 했습니다.", "answer": "3" }
    ],
    "content": "<h4>분석</h4><p>경제 위기 상황에서 전문직에 대한 선호도가 높아지며 고학력 응시자가 대거 유입되기 시작한 시기입니다.</p>"
  },
  {
    "id": 10,
    "title": "[제10회 총평] 제도 도입 10년, 자격시험의 전문성 확립",
    "summary": "1994년 10회 시험은 지난 10년의 기출 경향을 종합하고 난이도를 상향 조정한 해였습니다.",
    "date": "1994-11-01",
    "source": "한국산업인력공단(Q-Net) 과거 기출 데이터 및 공인중개사 협회 역사 자료",
    "killers": [
      { "subject": "민법", "question": "민법총칙부터 물권, 계약 전반을 관통하는 복합 사례", "solution": "단일 개념이 아닌 여러 법리를 한꺼번에 적용해야 하는 종합 사고형 문제였습니다.", "answer": "5" }
    ],
    "content": "<h4>역사적 의미</h4><p>공인중개사가 국가 자격증으로서 확실한 위상을 갖추게 되었으며, 응시자 수가 급격히 늘어난 기점이 되었습니다.</p>"
  },
  {
    "id": 9,
    "title": "[제9회 총평] 감정평가 이론의 본격 도입",
    "summary": "1993년 시험은 학개론의 감정평가 파트에서 수학적 접근이 필요한 문제들이 등장했습니다.",
    "date": "1993-11-01",
    "source": "한국산업인력공단(Q-Net) 과거 기출 데이터 및 공인중개사 협회 역사 자료",
    "killers": [
      { "subject": "부동산학개론", "question": "수익환원법에 의한 감정평가액 산정", "solution": "당시로서는 생소했던 재무적 계산 공식이 포함되어 수험생들이 크게 당황했습니다.", "answer": "1" }
    ],
    "content": "<h4>난이도 변화</h4><p>전통적인 인문학적 접근에서 계량적인 접근으로 부동산학의 패러다임이 변화하고 있음을 보여준 시험이었습니다.</p>"
  },
  {
    "id": 8,
    "title": "[제8회 총평] 부동산 공시법의 강화와 등기 제도",
    "summary": "1992년 시험은 부동산 등기법의 절차적 정당성을 묻는 문항들이 수험생들을 괴롭혔습니다.",
    "date": "1992-11-01",
    "source": "한국산업인력공단(Q-Net) 과거 기출 데이터 및 공인중개사 협회 역사 자료",
    "killers": [
      { "subject": "부동산공시법", "question": "가등기의 효력 및 본등기 시 순위 보전", "solution": "등기법의 핵심 원리를 묻는 문제였으나 절차적 세부 규정이 까다로웠습니다.", "answer": "4" }
    ],
    "content": "<h4>핵심 요약</h4><p>공시 방법의 중요성이 대두되면서 등기법과 지적법의 변별력이 커진 회차였습니다.</p>"
  },
  {
    "id": 7,
    "title": "[제7회 총평] 계약법의 실무 적용과 임대차 보호법",
    "summary": "1991년 시험은 주택임대차보호법 등 서민 주거 안정을 위한 법률 지식이 강조되었습니다.",
    "date": "1991-11-01",
    "source": "한국산업인력공단(Q-Net) 과거 기출 데이터 및 공인중개사 협회 역사 자료",
    "killers": [
      { "subject": "민법", "question": "주택임대차보호법상 대항력 발생 시점 및 우선변제권", "solution": "인도와 주민등록의 선후 관계를 따지는 실무형 킬러였습니다.", "answer": "2" }
    ],
    "content": "<h4>시험 동향</h4><p>중개 실무에서 가장 빈번하게 발생하는 분쟁 사례들이 시험 문제의 주요 소재로 채택되었습니다.</p>"
  },
  {
    "id": 6,
    "title": "[제6회 총평] 세법의 기초 및 양도소득세의 개념",
    "summary": "1990년 시험은 부동산 관련 세금 체계에 대한 정확한 이해를 요구하기 시작했습니다.",
    "date": "1990-11-01",
    "source": "한국산업인력공단(Q-Net) 과거 기출 데이터 및 공인중개사 협회 역사 자료",
    "killers": [
      { "subject": "부동산세법", "question": "기준시가 결정 기준 및 양도세 과세표준 산출", "solution": "계산식의 기초를 묻는 문제였으나 생소한 세무 용어로 인해 오답률이 높았습니다.", "answer": "3" }
    ],
    "content": "<h4>특이사항</h4><p>단순 법조문 암기에서 벗어나 실질적인 세금 계산 구조를 이해해야 하는 문제들이 출현했습니다.</p>"
  },
  {
    "id": 5,
    "title": "[제5회 총평] 공법 체계의 복잡화와 토지공개념",
    "summary": "1989년 시험은 토지공개념 도입 논의와 함께 관련 공법 규정들이 비중 있게 다뤄졌습니다.",
    "date": "1989-11-01",
    "source": "한국산업인력공단(Q-Net) 과거 기출 데이터 및 공인중개사 협회 역사 자료",
    "killers": [
      { "subject": "부동산공법", "question": "도시계획법상 용도지구 지정의 효력", "solution": "당시 변화하던 도시계획 체계를 실무와 연결하는 지엽적인 수치가 출제되었습니다.", "answer": "5" }
    ],
    "content": "<h4>변화 포인트</h4><p>국토의 효율적 이용을 강조하는 정책적 흐름이 공법 시험 문제에 그대로 투영되었습니다.</p>"
  },
  {
    "id": 4,
    "title": "[제4회 총평] 물권법의 심화와 민법 난이도 상승",
    "summary": "1988년 시험은 민법 중에서도 물권법 파트에서 까다로운 사례들이 제시되었습니다.",
    "date": "1988-11-01",
    "source": "한국산업인력공단(Q-Net) 과거 기출 데이터 및 공인중개사 협회 역사 자료",
    "killers": [
      { "subject": "민법", "question": "점유권과 소유권의 경합 및 취득시효", "solution": "복잡한 권리 관계 속에서 법률상 이익을 따지는 문제가 변별력을 높였습니다.", "answer": "1" }
    ],
    "content": "<h4>총평</h4><p>88 올림픽 전후의 부동산 경기 과열과 맞물려 시험의 전문성 또한 한 단계 격상된 시기입니다.</p>"
  },
  {
    "id": 3,
    "title": "[제3회 총평] 학개론의 등장과 부동산 경제학의 기초",
    "summary": "1987년 시험은 부동산학개론 과목에서 경제적 원리에 기반한 문제들이 본격적으로 등장하기 시작했습니다.",
    "date": "1987-11-01",
    "source": "한국산업인력공단(Q-Net) 과거 기출 데이터 및 공인중개사 협회 역사 자료",
    "killers": [
      { "subject": "부동산학개론", "question": "부동산의 특성 중 부동성과 부증성의 차이", "solution": "부동산만이 가진 물리적 특성이 시장에 미치는 영향을 묻는 원론적인 킬러였습니다.", "answer": "4" }
    ],
    "content": "<h4>난이도 분석</h4><p>법률 과목 외에도 부동산학 자체에 대한 학문적 접근이 시작되면서 수험생들의 공부 범위가 넓어진 해였습니다.</p>"
  },
  {
    "id": 2,
    "title": "[제2회 총평] 부동산 중개업법의 정착 및 실무 기초",
    "summary": "1986년 2회 시험은 초기 부동산 중개업법의 기틀을 다지는 문항들이 주를 이루었습니다.",
    "date": "1986-11-01",
    "source": "한국산업인력공단(Q-Net) 과거 기출 데이터 및 공인중개사 협회 역사 자료",
    "killers": [
      { "subject": "부동산중개업법", "question": "중개업자의 허가 요건 및 등록 절차", "solution": "초기 허가제 중심의 법령 체계를 정확히 숙지해야 풀 수 있는 문제였습니다.", "answer": "2" }
    ],
    "content": "<h4>시험의 특징</h4><p>중개업자가 갖추어야 할 최소한의 법적 소양을 검증하는 데 집중했습니다. 당시 합격률은 제도 홍보를 위해 비교적 높은 편이었습니다.</p>"
  },
  {
    "id": 1,
    "title": "[제1회 총평] 공인중개사 제도의 역사적 시작 및 기초 법률 상식",
    "summary": "1985년 시행된 제1회 공인중개사 시험은 제도 정착을 위해 기초적인 부동산 법률 지식을 중심으로 출제되었습니다.",
    "date": "1985-11-01",
    "source": "한국산업인력공단(Q-Net) 과거 기출 데이터 및 공인중개사 협회 역사 자료",
    "killers": [
      { "subject": "민법", "question": "민법상 권리능력 및 행위능력의 구분", "solution": "당시에는 법학 기초 이론에 대한 이해도가 합격의 당락을 결정했습니다.", "answer": "3" }
    ],
    "content": "<h4>제도 도입 배경</h4><p>부동산 거래의 투명성을 높이기 위해 처음 도입된 시험으로, 현재에 비해 문항 수는 적었으나 법학 개론 수준의 전문 지식을 요구했습니다.</p>"
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
          max-height: 1000px;
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
  
  let killersHtml = '';
  if (post.killers && post.killers.length > 0) {
    killersHtml = `
      <div class="killers-section" style="margin-top: 40px; background-color: #f8fafc; padding: 25px; border-radius: 12px; border: 1px solid #e2e8f0;">
        <h3 style="color: #c53030; margin-bottom: 20px;">🎯 대표 킬러문항 분석</h3>
        ${post.killers.map(k => `
          <div class="killer-item" style="margin-bottom: 25px; padding-bottom: 20px; border-bottom: 1px dashed #cbd5e1;">
            <div style="font-weight: 800; color: #2d3748; margin-bottom: 8px;">[${k.subject}]</div>
            <div style="font-size: 1.05rem; margin-bottom: 12px; line-height: 1.5; color: #1a365d;"><strong>Q: ${k.question}</strong></div>
            <div style="font-size: 0.95rem; color: #4a5568; margin-bottom: 10px;"><strong>💡 풀이:</strong> ${k.solution}</div>
            <div style="display: inline-block; padding: 4px 12px; background-color: #ebf8ff; color: #0052cc; border-radius: 20px; font-weight: 800;">정답: ${k.answer}번</div>
          </div>
        `).join('')}
      </div>
    `;
  }

  content.innerHTML = `
    <article class="blog-post-view">
      <div class="blog-post-header">
        <h2>${post.title}</h2>
        <div class="blog-post-meta">작성일: ${post.date} | 태그: 공인중개사, 시험분석, 킬러문제</div>
      </div>
      <div class="blog-post-content">
        ${post.content}
        ${killersHtml}
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
