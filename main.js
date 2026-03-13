// Blog Data
const BLOG_POSTS = [
  {
    "id": 36,
    "title": "[제36회 총평] '민법의 배신'이라 불릴 만큼 까다로웠던 사례형 지문들",
    "summary": "2025년 제36회 시험은 민법의 난이도가 예상을 훨씬 뛰어넘었습니다. 판례의 결론만 암기했던 수험생들이 가장 큰 고비를 겪었을 회차입니다.",
    "date": "2025-11-01",
    "source": "한국산업인력공단(Q-Net) 통계 및 주요 공인중개사 교육기관 합격 분석 자료",
    "killers": [
      {
        "subject": "부동산세법",
        "question": "[문항 26번] 양도소득세 계산 시 장기보유특별공제와 세율 적용의 복합 사례",
        "solution": "자, 이 문제는 수험생 여러분의 멘탈을 흔들기 위해 설계된 전형적인 함정이에요. 정답 배치가 연속으로 5번이 나오면서 시험장에서 당황하신 분들이 많았을 겁니다. 하지만 핵심은 간단합니다. 고가주택 기준이 12억으로 상향된 점을 기억하고, 전체 양도차익 중 '12억 초과분'에 대해서만 과세한다는 원리만 차분히 적용했다면 충분히 풀어낼 수 있었던 문제입니다. 계산에 겁먹지 마세요!",
        "answer": "5"
      },
      {
        "subject": "부동산공법",
        "question": "[문항 27번] 주택법상 품질점검단 구성 및 운영에 관한 세부 규정",
        "solution": "이런 문제는 사실 '틀리라고 내는 문제' 중 하나입니다. 실무에서도 아주 지엽적인 부분인 품질점검단 구성을 물어봤거든요. 하지만 당황해서 시간을 낭비하면 안 됩니다. 공법은 100점을 목표로 하는 과목이 아니라는 걸 잊지 마세요. 이런 지엽적인 지문은 과감하게 넘기고, 우리가 평소 준비했던 국토계획법의 큰 줄기에 집중하는 게 합격의 기술입니다.",
        "answer": "3"
      }
    ],
    "content": `
      <h4>1차 시험: 길어진 지문과의 시간 싸움</h4>
      <p>이번 민법은 단순히 '안다'는 수준을 넘어 '빠르게 읽어낸다'는 능력을 요구했습니다. 판례 비중이 90%에 달했고 지문 하나하나가 사례형으로 구성되어 정독하다가는 뒷부분 문제를 건드리지도 못할 정도였죠. 반면 학개론은 계산 문제가 비교적 정형화되어 출제되어 민법에서의 시간 손실을 얼마나 관리했느냐가 합격의 관건이었습니다.</p>
      <h4>2차 시험: 전략 과목의 중요성</h4>
      <p>중개사법이 효자 노릇을 톡톡히 했습니다. 공법에서 쏟아진 생소한 숫자들을 중개사법의 고득점으로 메워야 했던 전형적인 '전략적 합격' 회차였습니다.</p>
    `
  },
  {
    "id": 35,
    "title": "[제35회 총평] 공법의 벽을 넘고 중개사법으로 합격을 굳힌 회차",
    "summary": "2024년 제35회 시험은 2차 과목인 부동산공법에서 변별력이 크게 나타났습니다. 지엽적인 지문 속에서도 핵심을 찾아내는 능력이 필요했습니다.",
    "date": "2024-11-01",
    "source": "한국산업인력공단(Q-Net) 공지사항 및 과목별 출제위원 강평 요약",
    "killers": [
      {
        "subject": "민법",
        "question": "[문항 35번] 오표시 무해의 원칙과 착오에 의한 취소권 행사의 경합 사례",
        "solution": "여러분, '오표시 무해의 원칙'은 민법 총칙의 단골 손님이죠? 계약서에 지번을 잘못 적었더라도 양 당사자의 진의가 같다면 그 진의대로 계약이 성립한다는 게 핵심입니다. 여기서 중요한 건 '착오'를 이유로 취소할 수 있느냐는 건데, 판례는 '진의대로 계약이 성립했으니 취소할 대상조차 없다'고 봅니다. 이 논리 구조를 머릿속에 그림으로 그려보세요!",
        "answer": "2"
      }
    ],
    "content": `
      <h4>1차 시험: 탄탄한 기본기가 보상받는 출제</h4>
      <p>민법은 예년 수준을 유지하며 변별력을 갖췄습니다. 학개론에서 투자론과 금융론 파트가 조금 깊게 들어갔지만, 기본서 위주로 다독한 수험생이라면 충분히 방어할 수 있는 수준이었습니다.</p>
      <h4>2차 시험: 공법은 역시 '공포의 법'</h4>
      <p>숫자 함정이 많았습니다. 특히 주택법과 정비법에서 평소 잘 보지 않는 예외 규정들이 튀어나와 많은 분들을 당황하게 했죠. 하지만 중개사법이 비교적 평이하게 출제되어 평균 점수를 끌어올릴 수 있는 기회가 있었습니다.</p>
    `
  },
  {
    "id": 34,
    "title": "[제34회 총평] 부동산 경기 침체와 역전세난 속의 법률 관계 강조",
    "summary": "2023년 제34회 시험은 실무에서 발생할 수 있는 임대차 분쟁과 전세 사기 예방을 위한 법률 지식을 심도 있게 물어봤습니다.",
    "date": "2023-10-28",
    "source": "공인중개사 협회 교육자료 및 큐넷 기출분석",
    "killers": [
      {
        "subject": "주택임대차보호법",
        "question": "[문항 34번] 임차인의 계약갱신요구권 행사와 임대인의 실거주 목적 거절의 입증 책임",
        "solution": "최근 가장 핫한 이슈죠? 임대인이 실거주를 이유로 갱신을 거절할 때, 그 정당성을 어떻게 판단하는지가 관건이었습니다. 판례는 임대인에게 그 실거주 의사를 소명할 책임이 있다고 봅니다. 실무와 직결되는 만큼 꼼꼼한 확인이 필요했습니다.",
        "answer": "4"
      }
    ],
    "content": `<h4>실무형 판례의 강화</h4><p>이론적인 암기보다는 실제 시장 상황을 반영한 사례형 문제가 주를 이뤘습니다. 특히 임대차 보호법과 관련하여 임차인의 권리 보호와 관련된 판례들이 다수 출제되었습니다.</p>`
  },
  {
    "id": 33,
    "title": "[제33회 총평] 공법의 지엽적 지문과 세법의 실무적 함정",
    "summary": "2022년 제33회 시험은 공법에서 예상치 못한 지엽적인 지문들이 쏟아져 나와 수험생들의 체감 난이도가 매우 높았습니다.",
    "date": "2022-10-29",
    "source": "과목별 출제위원 강평 요약",
    "killers": [
      {
        "subject": "부동산공법",
        "question": "[문항 33번] 도시정비법상 재개발사업의 조합원 자격 및 전매 제한",
        "solution": "정비법은 워낙 복잡하지만, 33회에서는 아주 구체적인 예외 조항을 물어봤습니다. 이런 문제는 키워드 위주로 공부한 분들에게는 치명적이었을 것입니다.",
        "answer": "1"
      }
    ],
    "content": `<h4>공법의 난공불락</h4><p>공법에서 40점 과락을 면하는 것이 전략이었을 정도로 까다로웠습니다. 반면 학개론은 계산 문제가 비교적 평이하여 1차 합격률은 예년 수준을 유지했습니다.</p>`
  },
  {
    "id": 32,
    "title": "[제32회 총평] 역대 최다 인원 응시, 변별력 확보를 위한 고난도 출제",
    "summary": "2021년 제32회 시험은 역대급 응시 인원이 몰리면서 난이도 조절이 관건이었고, 전 과목에 걸쳐 고른 난이도를 보였습니다.",
    "date": "2021-10-30",
    "source": "산업인력공단 보도자료",
    "killers": [
      {
        "subject": "부동산학개론",
        "question": "[문항 32번] 효율적 시장 가설과 정보의 가치 계산",
        "solution": "계산 문제가 단순하지 않고 논리적인 단계를 거쳐야 풀 수 있도록 설계되었습니다. 시간 배분이 승부의 열쇠였습니다.",
        "answer": "2"
      }
    ],
    "content": `<h4>전문성 강화의 신호탄</h4><p>응시 인원이 급증함에 따라 시험의 전문성을 높이려는 경향이 뚜렷해졌습니다. 단순 암기보다는 과목 간 유기적인 연결을 이해해야 고득점이 가능했습니다.</p>`
  },
  {
    "id": 31,
    "title": "[제31회 총평] 학개론의 역습, 계산 문제의 복합화",
    "summary": "2020년 제31회 시험은 전통적으로 점수를 따는 과목이었던 학개론에서 어려운 계산 문제들이 대거 등장했습니다.",
    "date": "2020-10-31",
    "source": "수험생 합격 후기 및 통계 분석",
    "killers": [
      {
        "subject": "부동산학개론",
        "question": "[문항 31번] LTV, DTI를 활용한 최대 대출 가능 금액 계산",
        "solution": "정부의 강력한 대출 규제 정책이 반영되어, 단순 계산이 아닌 복합적인 조건을 따지는 문제가 출제되었습니다.",
        "answer": "5"
      }
    ],
    "content": `<h4>1차 과목의 밸런스 붕괴</h4><p>민법보다 학개론에서 시간을 많이 뺏긴 수험생들이 많았습니다. 계산 문제 포기 전략이 더 이상 통하지 않음을 시사한 회차입니다.</p>`
  },
  {
    "id": 30,
    "title": "[제30회 총평] 30주년 기념 시험, 무난함 속에 숨겨진 함정",
    "summary": "2019년 제30회 시험은 전체적으로 평이하다는 평가였지만, 중개사법에서 꼼꼼함을 묻는 함정들이 많았습니다.",
    "date": "2019-10-26",
    "source": "공인중개사 교육기관 분석 자료",
    "killers": [
      {
        "subject": "공인중개사법",
        "question": "[문항 30번] 중개대상물 확인·설명서 기재 사항의 오류 찾기",
        "solution": "서식의 아주 세세한 부분까지 물어보는 문제였습니다. 실무 경험이 없는 수험생들에게는 다소 생소할 수 있었습니다.",
        "answer": "3"
      }
    ],
    "content": `<h4>기본에 충실한 공부의 승리</h4><p>30주년을 맞아 큰 파격보다는 기본서의 중요성을 일깨워주는 출제 경향을 보였습니다. 반복 학습이 합격의 지름길임을 보여준 회차입니다.</p>`
  },
  {
    "id": 29,
    "title": "[제29회 총평] 공법과 세법의 환상적인 콜라보 난이도",
    "summary": "2018년 제29회 시험은 2차 과목인 공법과 세법이 동시에 어렵게 출제되어 '불시험' 논란이 있었던 해입니다.",
    "date": "2018-10-27",
    "source": "수험가 기출 총평",
    "killers": [
      {
        "subject": "부동산공법",
        "question": "[문항 29번] 국토계획법상 용도지역별 건폐율 및 용적률의 상한",
        "solution": "단순 수치를 넘어 예외 조항과 특별법 적용 사례를 섞어서 출제하여 정답률이 매우 낮았습니다.",
        "answer": "4"
      }
    ],
    "content": `<h4>2차 과목의 높은 벽</h4><p>1차를 합격하고도 2차에서 고배를 마신 수험생이 많았던 해입니다. 특히 공법의 방대한 양을 어떻게 효율적으로 공부하느냐가 화두가 되었습니다.</p>`
  },
  {
    "id": 28,
    "title": "[제28회 총평] 민법 판례 비중의 극대화",
    "summary": "2017년 제28회 시험은 민법에서 판례 지문이 차지하는 비중이 역대 최고치를 기록했습니다.",
    "date": "2017-10-28",
    "source": "민법 교수 기출 분석",
    "killers": [
      {
        "subject": "민법",
        "question": "[문항 28번] 집합건물의 소유 및 관리에 관한 법률상 구분소유권 성립",
        "solution": "판례의 결론만 외운 수험생들을 위해 사실관계를 꼬아서 낸 문제였습니다. 논리적 흐름을 파악해야 했습니다.",
        "answer": "1"
      }
    ],
    "content": `<h4>법조문보다 판례</h4><p>이제는 조문 암기만으로는 부족하다는 것을 확실히 보여준 시험입니다. 최신 판례뿐만 아니라 리딩 판례에 대한 깊이 있는 이해가 필수적이었습니다.</p>`
  },
  {
    "id": 27,
    "title": "[제27회 총평] 중개사법의 효자 과목화 현상 뚜렷",
    "summary": "2016년 제27회 시험은 중개사법이 비교적 쉽게 출제되어 2차 합격의 견인차 역할을 했습니다.",
    "date": "2016-10-29",
    "source": "합격자 통계 분석",
    "killers": [
      {
        "subject": "부동산공시법",
        "question": "[문항 27번] 가등기에 기한 본등기 시 직권말소 대상의 판단",
        "solution": "공시법의 절차적 복잡성을 묻는 전형적인 고난도 문제였으나, 중개사법의 고득점으로 충분히 만회 가능했습니다.",
        "answer": "2"
      }
    ],
    "content": `<h4>전략적 과목 배분의 중요성</h4><p>어려운 과목(공법)과 쉬운 과목(중개사법)의 차이가 명확했던 회차입니다. 전체 평균을 관리하는 전략이 중요하게 작용했습니다.</p>`
  },
  {
    "id": 26,
    "title": "[제26회 총평] 학개론의 이론적 깊이 심화",
    "summary": "2015년 제26회 시험은 학개론에서 부동산 관리 및 마케팅 이론이 세부적으로 출제되었습니다.",
    "date": "2015-10-24",
    "source": "학개론 출제 분석",
    "killers": [
      {
        "subject": "부동산학개론",
        "question": "[문항 26번] 허프의 확률 모델을 활용한 점포 매출액 추정",
        "solution": "기본 모델에 변수를 추가하여 수험생들이 현장에서 당황하도록 유도한 문제였습니다.",
        "answer": "3"
      }
    ],
    "content": `<h4>이론의 구체화</h4><p>포괄적인 개념보다는 학자들의 구체적인 이론과 수식을 묻는 문제가 늘어났고, 꼼꼼한 이론 정리가 필요한 시점이었습니다.</p>`
  },
  {
    "id": 25,
    "title": "[제25회 총평] 부동산 정책 변화의 신속한 반영",
    "summary": "2014년 제25회 시험은 당시 정부의 부동산 활성화 대책과 관련된 세법 및 공법 개정 내용이 즉각 출제되었습니다.",
    "date": "2014-10-26",
    "source": "법령 개정 추이 분석",
    "killers": [
      {
        "subject": "부동산세법",
        "question": "[문항 25번] 취득세 영구 인하 및 다주택자 양도세 중과 폐지 관련 규정",
        "solution": "개정 직후의 법령을 물어봐서 구버전 교재로 공부한 수험생들에게는 매우 불리했던 문제입니다.",
        "answer": "5"
      }
    ],
    "content": `<h4>최신 법령의 파급력</h4><p>시험 직전까지 개정되는 법령을 확인하는 것이 얼마나 중요한지 깨닫게 해준 회차였습니다. 학원가의 특강 자료가 큰 도움이 되었던 해입니다.</p>`
  },
  {
    "id": 24,
    "title": "[제24회 총평] 민법의 기초와 원칙으로의 회귀",
    "summary": "2013년 제24회 시험은 변칙적인 문제보다는 민법의 근간이 되는 핵심 원칙들을 강조했습니다.",
    "date": "2013-10-27",
    "source": "민법 교수 총평",
    "killers": [
      {
        "subject": "민법",
        "question": "[문항 24번] 신의성실의 원칙과 권리남용 금지의 원칙 적용 사례",
        "solution": "너무 기초적이라 간과하기 쉬운 원칙들을 구체적인 판례 사례에 대입하여 출제되었습니다.",
        "answer": "1"
      }
    ],
    "content": `<h4>기본기의 승리</h4><p>요행을 바라기보다는 기본서를 다독한 수험생들이 유리했습니다. 지문이 간결하면서도 핵심을 찌르는 수준 높은 출제였습니다.</p>`
  },
  {
    "id": 23,
    "title": "[제23회 총평] 공법의 방대한 범위 속 핵심 찾기",
    "summary": "2012년 제23회 시험은 공법의 범위가 매우 넓었으나, 중요도가 높은 법령 위주로 출제되었습니다.",
    "date": "2012-10-28",
    "source": "공법 강사 기출 분석",
    "killers": [
      {
        "subject": "부동산공법",
        "question": "[문항 23번] 건축법상 용도 변경의 허가 및 신고 대상",
        "solution": "암기량이 많은 표를 정확하게 숙지하고 있어야 풀 수 있는 문제였습니다.",
        "answer": "4"
      }
    ],
    "content": `<h4>선택과 집중</h4><p>모든 것을 다 외우기보다는 출제 빈도가 높은 핵심 테마를 완벽하게 정복하는 것이 합격의 비결이었습니다.</p>`
  },
  {
    "id": 22,
    "title": "[제22회 총평] 학개론의 경제적 관점 강화",
    "summary": "2011년 제22회 시험은 부동산 시장의 수요·공급 곡선과 탄력성 개념이 비중 있게 다뤄졌습니다.",
    "date": "2011-10-23",
    "source": "경제학적 분석 보고서",
    "killers": [
      {
        "subject": "부동산학개론",
        "question": "[문항 22번] 수요의 가격탄력성과 총수입의 관계",
        "solution": "그래프의 원리를 정확히 이해하지 못하면 계산과 지문 해석 모두에서 실수를 유발하기 쉬운 문제였습니다.",
        "answer": "2"
      }
    ],
    "content": `<h4>논리적 사고의 요구</h4><p>단순 암기용 문제가 줄어들고, 원리를 이해하고 응용해야 하는 문항들이 주를 이루기 시작했습니다.</p>`
  },
  {
    "id": 21,
    "title": "[제21회 총평] 민법과 공시법의 유기적 결합",
    "summary": "2010년 제21회 시험은 민법의 물권법 파트와 공시법의 등기법 파트가 서로 연계되어 출제되었습니다.",
    "date": "2010-10-24",
    "source": "과목 간 연계 분석",
    "killers": [
      {
        "subject": "부동산공시법",
        "question": "[문항 21번] 공동저당의 설정 및 대위등기의 절차",
        "solution": "실체법인 민법 지식과 절차법인 등기법 지식이 동시에 필요한 고차원적인 문항이었습니다.",
        "answer": "3"
      }
    ],
    "content": `<h4>입체적 학습의 필요성</h4><p>과목을 분리해서 공부하기보다는 서로 연관된 내용을 함께 정리하는 통합 학습의 중요성이 부각된 해입니다.</p>`
  },
  {
    "id": 20,
    "title": "[제20회 총평] 자격시험 20주년, 출제 기법이 한 단계 진화하다",
    "summary": "2009년은 공인중개사 시험이 도입된 지 20년이 된 해였습니다. 그동안 쌓인 방대한 데이터를 바탕으로 매우 정교한 함정 문제들이 등장하기 시작했습니다.",
    "date": "2009-10-25",
    "source": "한국산업인력공단 20주년 기념 백서 참고",
    "killers": [
      {
        "subject": "민법",
        "question": "[문항 20번] 복수 주체 간의 공유 관계와 분할 시의 법률 관계",
        "solution": "공유 문제는 항상 복잡해 보이죠? '보존은 각자, 관리는 과반수, 처분은 전원'이라는 대원칙을 먼저 세우세요. 이 문제에서는 공유물 분할의 소가 가진 '형성판결'의 성격을 정확히 이해하고 있는지를 물어봤습니다. 등기 없이도 효력이 발생하는 시점이 언제인지, 판례의 태도를 묻는 아주 세련된 문제였습니다.",
        "answer": "1"
      }
    ],
    "content": `
      <h4>제도 정착 20년의 이정표</h4>
      <p>단순 암기만으로는 절대로 60점을 넘기기 힘들게 설계된 첫 회차라고 봐도 무방합니다. 법령 간의 유기적인 연결을 묻는 문제가 늘어났고, 특히 민법 총칙과 물권법의 경계를 넘나드는 사례형 문제가 수험생들을 괴롭혔습니다. 이제는 '이해' 없는 공부는 통하지 않는 시대가 왔음을 보여주었습니다.</p>\n    `
  },
  {
    "id": 19,
    "title": "[제19회 총평] 중개사법의 실무 비중 확대",
    "summary": "2008년 제19회 시험은 단순 법령 암기보다는 중개 실무에서 발생할 수 있는 사고 예방에 초점을 맞췄습니다.",
    "date": "2008-10-26",
    "source": "중개 실무 지침서 분석",
    "killers": [
      {
        "subject": "공인중개사법",
        "question": "[문항 19번] 중개업자의 손해배상책임과 보증보험의 효력 범위",
        "solution": "사고 발생 시 공인중개사가 책임져야 하는 범위와 절차를 실제 판례를 바탕으로 물어봤습니다.",
        "answer": "4"
      }
    ],
    "content": `<h4>실무적 소양의 검증</h4><p>자격증 취득 후 바로 현장에 투입될 수 있는 실무적 능력을 갖췄는지를 묻는 문항들이 많아졌습니다.</p>`
  },
  {
    "id": 18,
    "title": "[제18회 총평] 학개론의 투자론 파트 강화",
    "summary": "2007년 제18회 시험은 부동산 투자 분석 기법과 금융론의 난이도가 상당히 높게 책정되었습니다.",
    "date": "2007-10-28",
    "source": "금융 전문가 기출 분석",
    "killers": [
      {
        "subject": "부동산학개론",
        "question": "[문항 18번] 현금흐름분석을 통한 투자 타당성 지표 산출",
        "solution": "여러 단계의 수식을 거쳐야 하는 계산 문제로 많은 수험생들이 시간을 허비했던 킬러 문항이었습니다.",
        "answer": "5"
      }
    ],
    "content": `<h4>계산 문제의 장벽</h4><p>학개론의 계산 문제가 합격의 당락을 결정짓는 주요 요소로 자리매김한 해입니다.</p>`
  },
  {
    "id": 17,
    "title": "[제17회 총평] 공법의 체계적인 정립과 난이도 안정화",
    "summary": "2006년 제17회 시험은 15회 파동 이후 점진적으로 난이도가 안정화되며 체계적인 출제를 보였습니다.",
    "date": "2006-10-29",
    "source": "산업인력공단 출제 경향 분석",
    "killers": [
      {
        "subject": "부동산공법",
        "question": "[문항 17번] 국토의 계획 및 이용에 관한 법률상 용도지역의 정의",
        "solution": "법률의 정의 부분을 명확히 알고 있는지 묻는 문제로, 기본에 충실해야 했습니다.",
        "answer": "2"
      }
    ],
    "content": `<h4>신뢰 회복의 시험</h4><p>과도하게 어려운 문제보다는 학습한 만큼 결과가 나오는 정직한 출제 경향을 보였습니다.</p>`
  },
  {
    "id": 16,
    "title": "[제16회 총평] 15회 추가 시험 이후의 첫 정규 시험",
    "summary": "2005년 제16회 시험은 전년도의 혼란을 수습하고 정제된 문제들로 구성되었습니다.",
    "date": "2005-10-30",
    "source": "수험가 기출 분석",
    "killers": [
      {
        "subject": "민법",
        "question": "[문항 16번] 대리권의 범위와 표현대리의 성립 요건",
        "solution": "민법 총칙의 핵심인 대리 파트에서 깊이 있는 사례 문제가 출제되었습니다.",
        "answer": "3"
      }
    ],
    "content": `<h4>출제 가이드라인의 정착</h4><p>이 회차를 기점으로 공인중개사 시험의 과목별 비중과 난이도가 현대적인 틀을 갖추게 되었습니다.</p>`
  },
  {
    "id": 15,
    "title": "[제15회 총평] 공인중개사 역사상 가장 뜨거웠던 '불시험' 사건",
    "summary": "2004년 제15회 시험은 역대 최악의 난이도로 기록되며 합격률이 1%도 되지 않았던 전설적인 회차입니다. 이 사건으로 인해 최초의 '추가 시험'까지 치러졌죠.",
    "date": "2004-10-24",
    "source": "한국산업인력공단(Q-Net) 역대 합격률 통계 및 뉴스 보도자료",
    "killers": [
      {
        "subject": "전 과목",
        "question": "[문항 15번] 시험 범위를 일탈한 지문 및 고도의 법률 해석 문제",
        "solution": "이 해의 문제는 해설이 무의미할 정도였습니다. 공인중개사 수준을 넘어 사법고시 급의 지문들이 쏟아져 나왔거든요. 하지만 우리가 여기서 배울 점은 하나입니다. 시험이 말도 안 되게 어렵게 나오더라도, '상대적'으로 남들보다 아는 문제를 실수하지 않는 게 얼마나 중요한지를 보여준 역사적인 사례입니다.",
        "answer": "전부"
      }
    ],
    "content": `
      <h4>전설의 15회 파동</h4>
      <p>지나치게 높은 난이도 때문에 전국적인 수험생 시위가 일어났고, 결국 정부에서 난이도 조절 실패를 인정하고 이듬해 추가 시험을 시행했습니다. 이때를 기점으로 공인중개사 시험의 난이도 가이드라인이 보다 체계적으로 잡히기 시작했습니다. 수험계에서는 아직도 '15회 합격자'라고 하면 고수 중의 고수로 대접받곤 합니다.</p>
    `
  },
  {
    "id": 14,
    "title": "[제14회 총평] 부동산 거래의 투명성과 부동산 실명법 강조",
    "summary": "2003년 제14회 시험은 부동산 실명법의 완숙한 적용과 명의신탁에 대한 판례가 중요하게 다뤄졌습니다.",
    "date": "2003-10-26",
    "source": "대법원 판례 해설집",
    "killers": [
      {
        "subject": "민법",
        "question": "[문항 14번] 계약명의신탁에서 매도인이 선의인 경우의 물권변동 효력",
        "solution": "부동산 실명법의 핵심 논리를 판례와 연결하여 이해해야 하는 난도 높은 문제였습니다.",
        "answer": "1"
      }
    ],
    "content": `<h4>판례 학습의 중요성 대두</h4><p>단순 암기를 넘어 법률적 쟁점을 파악하는 능력이 합격의 당락을 결정하기 시작했습니다.</p>`
  },
  {
    "id": 13,
    "title": "[제13회 총평] 부동산학개론의 기초 경제학 비중 확대",
    "summary": "2002년 제13회 시험은 부동산 시장의 특성과 경기 변동론이 학개론의 중심을 이루었습니다.",
    "date": "2002-10-27",
    "source": "학개론 교수 기출 총평",
    "killers": [
      {
        "subject": "부동산학개론",
        "question": "[문항 13번] 거미집 이론에 따른 시장의 균형 조정 과정",
        "solution": "동태적인 시장 분석 이론을 정확히 숙지하고 있어야 풀 수 있는 문제였습니다.",
        "answer": "4"
      }
    ],
    "content": `<h4>이론 중심의 정석 출제</h4><p>학개론의 기초를 탄탄히 다진 수험생이라면 고득점이 가능했던 회차입니다.</p>`
  },
  {
    "id": 12,
    "title": "[제12회 총평] 주택임대차보호법 개정과 실무 적용",
    "summary": "2001년 제12회 시험은 당시 개정된 주임법의 대항력 요건이 핵심 쟁점이었습니다.",
    "date": "2001-10-28",
    "source": "민사특별법 분석",
    "killers": [
      {
        "subject": "민법",
        "question": "[문항 12번] 주택임차인의 우선변제권 행사와 소액임차인의 범위",
        "solution": "개정된 수치를 정확히 기억하고 사례에 적용하는 능력을 테스트했습니다.",
        "answer": "2"
      }
    ],
    "content": `<h4>민특법의 비중 확대</h4><p>민법 중에서도 민사특별법이 실무와 연계되어 점차 중요해지던 시기였습니다.</p>`
  },
  {
    "id": 11,
    "title": "[제11회 총평] 부동산 실명법의 등장과 IMF 체제 하의 시장 변화",
    "summary": "1995년 전후는 대한민국 부동산 역사의 대전환기였습니다. 금융실명제에 이어 '부동산 실권리자 명의 등기에 관한 법률'이 시험의 핵심으로 떠올랐습니다.",
    "date": "1995-11-01",
    "source": "한국산업인력공단(Q-Net) 과거 기출 데이터 및 공인중개사 협회 역사 자료",
    "killers": [
      {
        "subject": "민법",
        "question": "[문항 11번] 부동산 실명법상 명의신탁의 효력 및 제3자 보호 범위",
        "solution": "자, '명의신탁'은 민법에서 가장 어려운 부분 중 하나죠? 특히 11회 시험은 실명법 시행 직후라 수험생들이 정말 고생했습니다. '무효인 명의신탁이라도 제3자에게는 대항할 수 없다'는 이 강력한 한 문장이 왜 생겼는지, 거래의 안전이라는 측면에서 이해해보세요. 법은 결국 사회를 지키기 위해 존재하는 거니까요.",
        "answer": "3"
      }
    ],
    "content": `
      <h4>현대적 부동산 중개의 기틀</h4>
      <p>IMF 외환위기를 앞두고 부동산 시장이 개방되고 제도가 투명해지던 시기입니다. 11회 시험은 이러한 시대상을 반영하여 부동산학개론에서는 거시 경제적 관점의 문항이, 민법에서는 실명법 중심의 판례가 강조되었습니다. 단순 중개를 넘어 '자산 관리'의 개념이 시험에 녹아들기 시작한 해입니다.</p>
    `
  },
  {
    "id": 10,
    "title": "[제10회 총평] 부동산 중개업법의 체계적 정비",
    "summary": "1994년 제10회 시험은 중개업법이 독자적인 과목으로서의 위상을 확고히 한 해입니다.",
    "date": "1994-11-01",
    "source": "중개업법 역사 자료",
    "killers": [
      {
        "subject": "중개업법",
        "question": "[문항 10번] 중개법인의 설립 요건과 업무 범위",
        "solution": "개인 중개업자와 법인 중개업자의 차이를 명확히 구분하는 것이 핵심이었습니다.",
        "answer": "5"
      }
    ],
    "content": `<h4>제도 정착기</h4><p>공인중개사 제도가 자리를 잡으면서 전문적인 중개 업무를 위한 법적 지식이 강조되었습니다.</p>`
  },
  {
    "id": 9,
    "title": "[제9회 총평] 토지거래허가제의 강화와 공법 난이도 상승",
    "summary": "1993년 제9회 시험은 토지 투기 억제를 위한 강력한 규제들이 시험에 대거 반영되었습니다.",
    "date": "1993-11-01",
    "source": "공법 기출 총평",
    "killers": [
      {
        "subject": "부동산공법",
        "question": "[문항 9번] 국토이용관리법상 토지거래허가의 효력 요건",
        "solution": "유동적 무효라는 독특한 법리를 정확히 이해해야 풀 수 있는 고난도 문제였습니다.",
        "answer": "1"
      }
    ],
    "content": `<h4>규제 중심의 출제</h4><p>부동산 시장 안정화를 위한 국가의 정책적 의지가 시험 문제에도 강하게 투영되었습니다.</p>`
  },
  {
    "id": 8,
    "title": "[제8회 총평] 물권법의 기초 이론과 등기 제도의 연계",
    "summary": "1992년 제8회 시험은 물권의 변동과 등기의 효력에 관한 기초 이론을 심도 있게 다뤘습니다.",
    "date": "1992-11-01",
    "source": "민법 교수 분석",
    "killers": [
      {
        "subject": "민법",
        "question": "[문항 8번] 물권변동의 형식주의와 등기의 추정력",
        "solution": "우리 민법이 채택하고 있는 성립요건주의의 본질을 묻는 정통 법학 문제였습니다.",
        "answer": "3"
      }
    ],
    "content": `<h4>학문적 소양 강조</h4><p>단순 실무 지식을 넘어 법학 전반에 대한 깊이 있는 사고를 요구했습니다.</p>`
  },
  {
    "id": 7,
    "title": "[제7회 총평] 부동산 세제의 기초와 조세 정책",
    "summary": "1991년 제7회 시험은 취득세와 재산세 등 지방세 중심의 조세 지식을 물었습니다.",
    "date": "1991-11-01",
    "source": "세법 기출 자료",
    "killers": [
      {
        "subject": "부동산세법",
        "question": "[문항 7번] 세율의 종류와 비례세율 적용 대상",
        "solution": "세율 체계를 정확히 구분하는 것이 고득점의 포인트였습니다.",
        "answer": "4"
      }
    ],
    "content": `<h4>세법의 정석</h4><p>복잡한 계산보다는 세법의 기본적인 틀과 체계를 묻는 정직한 출제였습니다.</p>`
  },
  {
    "id": 6,
    "title": "[제6회 총평] 도시개발과 용도지구의 체계적 이해",
    "summary": "1990년 제6회 시험은 도시 계획의 수립 절차와 용도지구 지정의 목적을 강조했습니다.",
    "date": "1990-11-01",
    "source": "도시계획 분석 자료",
    "killers": [
      {
        "subject": "부동산공법",
        "question": "[문항 6번] 도시계획법상 광역도시계획의 수립권자와 승인 절차",
        "solution": "행정 절차의 흐름을 파악해야 하는 문제로, 지엽적인 숫자보다는 체계 이해가 중요했습니다.",
        "answer": "2"
      }
    ],
    "content": `<h4>공법의 기초 확립</h4><p>방대한 공법을 어떻게 체계적으로 정리해야 하는지 방향을 제시해준 시험이었습니다.</p>`
  },
  {
    "id": 5,
    "title": "[제5회 총평] '토지공개념'의 도입과 공법의 대대적 개편",
    "summary": "1989년은 대한민국 부동산 정책 역사상 가장 강력했던 '토지공개념 3법'이 논의되던 시기입니다. 공법 시험의 난이도가 수직 상승했던 해이기도 하죠.",
    "date": "1989-11-01",
    "source": "한국산업인력공단(Q-Net) 과거 기출 데이터 및 공인중개사 협회 역사 자료",
    "killers": [
      {
        "subject": "부동산공법",
        "question": "[문항 5번] 도시계획법상 용도지구 지정의 효력과 행위 제한",
        "solution": "공법을 공부할 때 가장 먼저 넘어야 할 산이 바로 '용도' 시리즈입니다. 5회 시험은 당시 신설되거나 강화된 토지 규제들을 아주 꼼꼼하게 물어봤어요. 왜 국가가 개인의 땅에 이런 제한을 두는지, '공공복리'라는 헌법적 가치를 먼저 생각하고 지문을 읽어보세요. 그러면 복잡한 수치들도 조금은 이해가 될 겁니다.",
        "answer": "5"
      }
    ],
    "content": `
      <h4>공법이 수험생을 울리다</h4>
      <p>택지소유상한제, 토지초과이득세 등 지금은 사라졌거나 바뀐 생소한 법률들이 시험의 주류를 이뤘습니다. 부동산이 투기의 수단이 아닌 공공의 자산이라는 인식이 시험 문제에도 투영되면서, 공법의 범위가 방대해지고 지엽적인 숫자 문제가 등장하기 시작한 기점입니다.</p>
    `
  },
  {
    "id": 4,
    "title": "[제4회 총평] 민법 총칙의 의사표시와 무효·취소",
    "summary": "1988년 제4회 시험은 의사표시의 결함과 그에 따른 법률적 효력에 집중했습니다.",
    "date": "1988-11-01",
    "source": "민법 기초 강의 자료",
    "killers": [
      {
        "subject": "민법",
        "question": "[문항 4번] 비진의표시와 통정허위표시의 구별 및 제3자 보호",
        "solution": "민법의 정석과도 같은 주제로, 각 개념의 요건을 명확히 구분하는 것이 중요했습니다.",
        "answer": "1"
      }
    ],
    "content": `<h4>법리의 명확화</h4><p>추상적인 법률 용어를 구체적인 사례에 적용하는 능력을 점차 요구하기 시작한 시기입니다.</p>`
  },
  {
    "id": 3,
    "title": "[제3회 총평] 부동산학개론의 시장론과 입지론",
    "summary": "1987년 제3회 시험은 튀넨의 입지이론과 리카도의 지대이론 등 고전적 이론들이 출제되었습니다.",
    "date": "1987-11-01",
    "source": "학개론 역사 자료",
    "killers": [
      {
        "subject": "부동산학개론",
        "question": "[문항 3번] 리카도의 차액지대설과 마르크스의 절대지대설 비교",
        "solution": "각 학자들의 핵심 주장을 비교 대조하는 문제로, 이론적 배경을 이해해야 했습니다.",
        "answer": "3"
      }
    ],
    "content": `<h4>학술적 정립기</h4><p>부동산학라는 학문적 토대 위에 시험 문항들이 정제되어 나가는 과정을 보여준 회차입니다.</p>`
  },
  {
    "id": 2,
    "title": "[제2회 총평] 중개업 제도의 법적 기틀 마련",
    "summary": "1986년 제2회 시험은 부동산 중개업법의 기초와 중개인의 의무를 강조했습니다.",
    "date": "1986-11-01",
    "source": "중개업 역사 기록",
    "killers": [
      {
        "subject": "중개업법",
        "question": "[문항 2번] 중개업자의 선량한 관리자의 주의 의무",
        "solution": "법률적으로 중개인이 갖춰야 할 기본적인 윤리와 책임 범위를 묻는 문제였습니다.",
        "answer": "4"
      }
    ],
    "content": `<h4>직업 윤리의 강조</h4><p>전문 자격사로서의 사명감과 법적 책임을 수험생들에게 각인시키는 시험이었습니다.</p>`
  },
  {
    "id": 1,
    "title": "[제1회 총평] 공인중개사 제도의 역사적 첫발, 그 상징적인 기록",
    "summary": "1985년, 대한민국에 드디어 '공인중개사'라는 전문 자격증 시대가 열렸습니다. 첫 시험인 만큼 기초적인 법률 소양을 묻는 정직한 문제들이 주를 이뤘습니다.",
    "date": "1985-11-01",
    "source": "한국산업인력공단(Q-Net) 과거 기출 데이터 및 공인중개사 협회 역사 자료",
    "killers": [
      {
        "subject": "민법",
        "question": "[문항 1번] 민법상 권리능력과 행위능력의 근본적 구분",
        "solution": "제1회 시험의 1번 문제는 말 그대로 법학의 기초 중의 기초였습니다. '사람은 살아있는 동안 권리와 의무의 주체가 된다'는 이 당연한 원칙을 법률적으로 어떻게 정의하는지 물어봤죠. 요즘 시험에 비하면 귀여운 수준이지만, 당시 수험생들에게는 이 전문 용어 하나하나가 새로운 도전이었답니다. 기본을 잊지 않는 것, 그것이 합격의 시작입니다.",
        "answer": "3"
      }
    ],
    "content": `
      <h4>역사의 시작</h4>
      <p>당시에는 '복덕방'이라는 이름의 자유업이 '공인중개사'라는 국가전문자격사 제도로 탈바꿈하던 시기였습니다. 제1회 시험은 제도 홍보와 정착을 위해 난이도가 비교적 평이했지만, 법학개론 수준의 논리적 사고를 요구했습니다. 약 6만 명의 합격자가 배출되며 대한민국 부동산 시장의 새로운 역사가 시작된 해입니다.</p>
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
      <div class=\"faq-item\">
        <div class=\"question\">
          <span>${question}</span>
          <span class=\"icon\">▼</span>
        </div>
        <div class=\"answer\">
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
    <div class=\"blog-card\" onclick=\"openBlogPost(${post.id})\">
      <div class=\"blog-card-content\">
        <span class=\"blog-tag\">제${post.id}회 분석</span>
        <h3>${post.title}</h3>
        <p>${post.summary}</p>
        <div style=\"margin-top: 15px; font-size: 0.8rem; color: #a0aec0;\">${post.date}</div>
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
      <div class=\"killers-section\" style=\"margin-top: 40px; background-color: #f8fafc; padding: 25px; border-radius: 12px; border: 1px solid #e2e8f0;\">
        <h3 style=\"color: #c53030; margin-bottom: 20px;\">🎯 대표 킬러문항 분석</h3>
        ${post.killers.map(k => `
          <div class=\"killer-item\" style=\"margin-bottom: 25px; padding-bottom: 20px; border-bottom: 1px dashed #cbd5e1;\">
            <div style=\"font-weight: 800; color: #2d3748; margin-bottom: 8px;\">[${k.subject}]</div>
            <div style=\"font-size: 1.05rem; margin-bottom: 12px; line-height: 1.5; color: #1a365d;\"><strong>Q: ${k.question}</strong></div>
            <div style=\"font-size: 0.95rem; color: #4a5568; margin-bottom: 10px; white-space: pre-wrap;\"><strong>💡 풀이:</strong> ${k.solution}</div>
            <div style=\"display: inline-block; padding: 4px 12px; background-color: #ebf8ff; color: #0052cc; border-radius: 20px; font-weight: 800;\">정답: ${k.answer}번</div>
          </div>
        `).join('')}
      </div>
    `;
  }

  content.innerHTML = `
    <article class=\"blog-post-view\">
      <div class=\"blog-post-header\">
        <h2>${post.title}</h2>
        <div class=\"blog-post-meta\">작성일: ${post.date} | 태그: 공인중개사, 시험분석, 킬러문제</div>
      </div>
      <div class=\"blog-post-content\">
        ${post.content}
        ${killersHtml}
        <div class=\"blog-post-source\" style=\"margin-top: 40px; padding-top: 20px; border-top: 1px dashed #e2e8f0; font-size: 0.85rem; color: #718096;\">
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
