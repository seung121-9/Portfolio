import React, { useState } from 'react';

const Portfolio = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const skills = {
    languages: [
      'Java',
      'JavaScript',
      'C',
      'C++',
      'C#',
      'Python'
    ],
    frontend: [
      'HTML5',
      'CSS3',
      'Bootstrap',
      'jQuery',
      'Ajax',
      'React',
      'JSX',
      'React Router',
      'Axios',
      'Figma'
    ],
    backend: [
      'Spring Boot',
      'Spring Security',
      'JSP',
      'Servlet',
      'Node.js',
      'RESTful API',
      'WebSocket',
      'JWT'
    ],
    database: [
      'MySQL',
      'Oracle SQL'
    ],
    tools: [
      'Git',
      'AWS EC2',
      'DBeaver',
      'Eclipse',
      'Spring Tool Suite (STS)',
      'MATLAB',
      'Arduino',
      'Maven',
      'Gradle',
      'Postman',
      '공공 API',
      'XML',
      'JSON'
    ],
    concepts: [
      'MVC Pattern',
      'ORM (JPA/Hibernate)'
    ]
  };

  const projects = [
      {
        id: 1,
        title: '모갔슈? - 탈모인 익명 커뮤니티',
        date: '2024.11 - 2025.01 (팀 프로젝트)',
        description: 'AI 기반 탈모 자가진단 및 익명 커뮤니티 플랫폼',
        features: [
          'Python 딥러닝 모델을 활용한 AI 기반 탈모 진단 및 단계별 분석',
          'Spring Boot + JPA를 통한 RESTful API 및 회원 인증/권한 관리 시스템',
          '익명 기반 질문/투표 커뮤니티로 민감한 고민 공유 공간 제공',
          'Thymeleaf + Ajax를 활용한 반응형 UI 및 자연스러운 화면 전환',
          'AWS EC2 + GitHub Actions를 통한 CI/CD 자동화 배포 파이프라인'
        ],
        tech: [
          'Spring Boot',
          'JPA',
          'MySQL',
          'Python',
          'OpenCV',
          'Thymeleaf',
          'AWS EC2',
          'GitHub Actions'
        ],
        github: 'https://github.com/taejong12/mogatshoo',
        category: 'web',
        readme: {
          title: '모갔슈? - 탈모인 익명 커뮤니티',
          deploymentUrl: 'https://mogatshoo.onrender.com/',
          summary: 'AI 탈모 진단과 익명 커뮤니티가 결합된 웹+앱 통합 서비스',
          summaryDetails: [
            'Python 딥러닝 모델로 사용자 탈모 사진 분석 후 단계별 상태 진단 제공',
            'Spring Boot RESTful API로 사용자 인증, 질문/투표/분석 데이터 처리',
            '익명 기반 커뮤니티로 탈모 관련 민감한 고민을 안전하게 공유할 수 있는 환경',
            'Thymeleaf 템플릿 엔진과 Ajax로 질문/투표/결과 페이지 동적 렌더링',
            'AWS EC2 클라우드 인프라와 GitHub Actions CI/CD로 자동화된 배포 시스템'
          ],
          additionalInfo: '주요 기능: AI 탈모 진단, 익명 커뮤니티, 질문/투표, 병원 정보, 운세',
          background: '탈모라는 민감한 고민을 유머와 공감으로 풀어가는 커뮤니티를 목표로 개발했습니다. AI 기술을 활용한 객관적 진단과 익명성을 보장하는 소통 공간을 제공하여, 탈모인들이 부담 없이 정보를 공유하고 위로받을 수 있는 플랫폼을 구현했습니다.'
        }
      },
      {
        id: 2,
        title: '시골 마을 활성화 플랫폼',
        date: '2024.03 - 2024.06 (팀 프로젝트)',
        description: '빈집 활용 숙박 예약 및 노인 일자리 창출을 위한 지역 활성화 플랫폼',
        features: [
          'Spring MVC + MyBatis를 활용한 숙박 예약 관리 시스템 구현',
          'Spring Security와 Google API를 통한 다중 로그인 인증 시스템',
          '지역 거주 노인을 청소관리자로 연결하는 일자리 창출 매칭 시스템',
          'Kakao Map API와 도로명주소 API를 활용한 지역 기반 숙소 검색',
          '포트원 결제 API 연동 및 마을 자치금 운영을 위한 수익 관리 시스템'
        ],
        tech: [
          'Spring MVC',
          'Spring Security',
          'MyBatis',
          'Oracle DB',
          'JSP',
          'Kakao Map API',
          'Google API',
          'Portone API'
        ],
        github: 'https://github.com/HanaSeoo/urban-village',
        category: 'web',
        readme: {
          title: '시골 마을 활성화 플랫폼',
          summary: '빈집 활용과 노인 일자리 창출을 통한 지역 상생 플랫폼',
          summaryDetails: [
            'Spring MVC 기반 숙박 예약 시스템으로 지역 빈집을 관광 자원으로 활용',
            'Spring Security + Google OAuth로 안전한 회원 관리 및 다중 로그인 지원',
            '지역 노인분들을 청소관리자로 매칭하여 일자리 창출과 숙소 운영 연계',
            'Kakao Map API로 지역 기반 숙소 위치 표시 및 도로명주소 API로 정확한 주소 관리',
            '포트원 결제 시스템과 연동하여 숙소 수익을 마을 자치금으로 운영할 수 있는 구조'
          ],
          additionalInfo: '주요 기능: 숙박 예약, 노인 일자리, 지역 활성화, 결제 시스템, 지도 서비스',
          background: '인구감소로 침체된 시골 지역의 자원인 빈집을 활용하여 지역을 되살리는 프로젝트입니다. 관광객에게는 특별한 숙박 경험을, 지역에는 일자리와 수익을, 마을에는 자치금을 제공하는 상생 모델을 웹 플랫폼으로 구현했습니다.'
        }
      },
	  {
	    id: 3,
	    title: '발달장애인을 위한 GIS 기반 AI 매핑 서비스',
	    date: '2024.12 (공모전 기획)',
	    description: '발달장애인과 가족들이 접근 가능한 시설을 쉽게 찾을 수 있도록 돕는 AI 기반 맞춤형 추천 서비스',
	    features: [
	      'GIS 기반 공간분석으로 무장애 경로 계산 및 접근성 최적화',
	      'AI 머신러닝을 통한 개인별 선호도 기반 시설 추천 알고리즘',
	      '블록체인 기반 리뷰 신뢰성 검증 및 포인트 리워드 시스템',
	      '음성 인식 및 시각적 보조 도구가 포함된 접근성 최적화 UI',
	      'GPS 기반 실시간 위치 추적 및 응급상황 자동 신고 기능'
	    ],
	    tech: [
	      'React Native',
	      'Node.js',
	      'MongoDB',
	      'PostGIS',
	      'TensorFlow.js',
	      'Blockchain',
	      'Leaflet.js',
	      'OpenStreetMap'
	    ],
	    category: 'ai',
	    readme: {
	      title: '발달장애인을 위한 GIS 기반 AI 매핑 서비스',
	      summary: '데이터 중심의 개인 맞춤형 위치기반 AI 매핑 서비스',
	      summaryDetails: [
	        'PostGIS 공간 데이터베이스로 시설 위치정보 저장 및 Leaflet.js로 지도 렌더링',
	        'TensorFlow.js 클라이언트 사이드 AI 모델로 개인 행동 패턴 분석 및 시설 추천',
	        'Ethereum 기반 스마트 컨트랙트로 리뷰 위변조 방지 및 포인트 자동 보상',
	        'React Native 음성인식 + 텍스트 확대 + 색상 대비 조절로 접근성 UI 최적화',
	        'GPS 위치 추적 (보호자 동의시) 및 응급상황 시 원터치 신고 기능'
	      ],
	      additionalInfo: '주요 기능: 맞춤형 추천, 무장애 경로, 커뮤니티, 안전 관리, 접근성 UI',
	      background: '발달장애인 264만명 중 21.2%가 겪는 정보 접근성 부족 문제를 해결하고자 기획했습니다. 20-30개 카톡방에서 정보를 수집하는 비효율성을 AI와 GIS 기술로 해결하여, 자립적인 사회활동을 지원하는 포용적 기술 솔루션을 설계했습니다.'
	    }
	  },
	  {
	    id: 4,
	    title: '딥페이크 성범죄 예방을 위한 NFT 기반 추적 시스템',
	    date: '2024.11 (공모전 기획)',
	    description: 'NFT 기반 생성자 신원 추적으로 딥페이크 범죄를 사전 예방하는 블록체인 시스템',
	    features: [
	      '딥페이크 생성 시 의무적 신원 인증 및 NFT 자동 발급 시스템',
	      '블록체인 기반 생성자 정보 영구 기록 및 위변조 방지',
	      '수사기관 요청 시에만 신원 공개하는 조건부 개인정보 보호',
	      '심리적 억제 효과를 통한 범죄 예방 중심 접근법',
	      '국제 협력 체계 구축을 위한 표준화된 추적 프로토콜'
	    ],
	    tech: [
	      'Ethereum',
	      'Smart Contract',
	      'IPFS',
	      'Web3.js',
	      'MetaMask',
	      'Solidity',
	      'Node.js',
	      'React'
	    ],
	    category: 'blockchain',
	    readme: {
	      title: '딥페이크 성범죄 예방을 위한 NFT 기반 추적 시스템',
	      summary: '사전 예방 중심의 딥페이크 생성자 추적 및 범죄 억제 시스템',
	      summaryDetails: [
	        '딥페이크 소프트웨어 실행 시 실명 인증 완료 후에만 접근 허용',
	        'Ethereum 스마트 컨트랙트로 생성자 정보, 생성시간, 콘텐츠 해시값 NFT 발급',
	        'IPFS 분산 저장으로 데이터 보안 강화 및 평상시 암호화 보관',
	        '수사기관 요청시에만 Web3.js를 통해 신원정보 조건부 공개',
	        '가해자 80%가 10대인 점을 고려한 심리적 억제 효과 극대화 설계'
	      ],
	      additionalInfo: '주요 기능: 신원 인증, NFT 추적, 조건부 공개, 범죄 예방, 국제 협력',
	      background: '딥페이크 성범죄가 3년간 2배 증가한 상황에서 기존 사후 대응의 한계를 인식하고 사전 예방 솔루션을 기획했습니다. 익명성에 의존하는 온라인 범죄 특성을 역이용하여 추적 가능성만으로도 범죄를 억제하는 새로운 접근법을 제시했습니다.'
	    }
	  },
	  {
	    id: 5,
	    title: 'a-IGZO TFT 제작 및 전기적 특성 분석',
	    date: '2023.11 - 2023.12 (팀 프로젝트)',
	    description: 'RF 스퍼터링과 열증착을 활용한 a-IGZO 박막 트랜지스터 제작 및 채널 길이별 전기적 특성 분석',
	    features: [
	      'RF Magnetron Sputtering을 통한 a-IGZO 활성층 증착 (297Å)',
	      'Thermal Evaporator를 활용한 Cr/Cu 전극 증착 및 리프트오프 공정',
	      'TLM(Transmission Length Method)을 통한 Metal-Semiconductor 접촉 저항 분석',
	      'Probe Station을 활용한 I-V 특성 측정 및 Ohmic Contact 확인',
	      '채널 길이별(25-100μm) Transfer/Output Characteristics 분석 및 성능 평가'
	    ],
	    tech: [
	      'RF Magnetron Sputtering',
	      'Thermal Evaporation',
	      'Photolithography',
	      'BOE Wet Etching',
	      'Probe Station',
	      'Alpha-Step',
	      'a-IGZO',
	      'SiO2'
	    ],
	    category: 'semiconductor',
	    readme: {
	      title: 'a-IGZO TFT 제작 및 전기적 특성 분석',
	      summary: 'Display Backplane용 Oxide TFT 제작 및 채널 길이 의존성 연구',
	      summaryDetails: [
	        'Tube Furnace 산화공정으로 530Å SiO2 게이트 절연막 형성 후 BOE 습식 식각',
	        'RF 스퍼터링(140W, 60sccm Ar)으로 1:1:1 a-IGZO 활성층 297Å 증착',
	        '열증착기를 통한 Cr/Cu 이중층 전극 1852Å 증착 및 4가지 채널 길이 패터닝',
	        'TLM 분석으로 접촉저항 RC=1.018×10⁹Ω, 접촉비저항 ρC=7.10×10⁴Ω·cm² 도출',
	        'Transfer 특성 분석으로 On/Off ratio 10⁴~10⁵, Subthreshold swing 484~710mV/dec 확인'
	      ],
	      additionalInfo: '주요 기능: 반도체 제조공정, 전기적 특성 분석, TFT 성능 평가, 채널 길이 최적화',
	      background: '차세대 디스플레이 백플레인 기술인 Oxide TFT의 핵심 소재인 a-IGZO를 직접 제작하고 분석한 반도체공학실험입니다. 기존 a-Si TFT 대비 높은 이동도와 낮은 off current를 가진 a-IGZO TFT의 채널 길이에 따른 특성 변화를 체계적으로 연구했습니다.'
	    }
	  },
      {
        id: 6,
        title: '수위 감지 기반 침수 차단 시스템',
        date: '2023.03 - 2023.06 (캡스톤디자인)',
        description: '수위센서와 자동 차단문을 활용한 지하주차장 침수 방지 시스템',
        features: [
          'Arduino 기반 수위센서로 실시간 침수 감지 및 OLED 디스플레이 출력',
          '기어-래크 메커니즘을 활용한 자동 차단문 상하 구동 시스템',
          '수위 500 이상 감지 시 자동 차단문 작동 및 수동 스위치 백업 제어',
          '침수 해제 후 수중펌프를 통한 잔류수 자동 배수 시스템',
          'CFRP 적용 시 1,000kgf 수압에 대해 1200ton 견딜 수 있는 내구성 설계'
        ],
        tech: [
          'Arduino UNO R3',
          '수위센서',
          '기어모터',
          'OLED Display',
          '수중펌프',
          'CFRP',
          'C++'
        ],
        category: 'iot',
        readme: {
          title: '수위 감지 기반 침수 차단 시스템',
          deploymentUrl: 'https://hiddenpicture.tistory.com/37',
          summary: '실시간 수위 감지와 자동 차단문으로 지하주차장 침수 피해를 예방하는 시스템',
          summaryDetails: [
            '수위센서 A0핀으로 2초마다 침수 정도 측정 후 128×64 OLED에 실시간 표시',
            '임계값 500 초과 시 기어모터 정방향 5초 구동으로 차단문 자동 상승',
            '센서 오류 대비 택트스위치 기반 수동제어 (1회 클릭: 상승, 2회 클릭: 하강)',
            '차단문 하강 후 수중펌프 자동 작동으로 잔류수 외부 배수 처리',
            'CFRP 소재 적용 시 폭 2m×높이 1m 차단문이 수압 1,000kgf을 안전계수 포함하여 견딜 수 있는 구조 설계'
          ],
          additionalInfo: '주요 기능: 실시간 감지, 자동 차단, 수동 제어, 자동 배수, 고강도 설계',
          background: '2022년 강남과 포항 침수 사고를 계기로 기획된 프로젝트입니다. 인명과 재산 피해를 예방하기 위한 실용적 솔루션으로, 기존 인프라 활용과 ESG 가치를 고려한 지속가능한 기술 개발에 중점을 두었습니다.'
        }
      },
	  {
	    id: 7,
	    title: 'C++/C# 하이브리드 공학용 계산기',
	    date: '2023.11 (개인 프로젝트)',
	    description: 'C++의 고성능과 C#의 편리한 UI를 결합한 객체지향 설계 기반 공학용 계산기',
	    features: [
	      'C++/CLI 브릿지를 통한 하이브리드 아키텍처로 성능과 편의성 양립',
	      '추상 클래스 Calculator<T>에서 상속받은 특화된 계산기 클래스 구조',
	      '템플릿 프로그래밍으로 int, float, double 등 다양한 데이터 타입 지원',
	      'Windows Forms 기반 직관적 UI 및 이벤트 기반 프로그래밍',
	      '0으로 나누기, 오버플로우 등 예외 상황 처리 및 메모리 기능'
	    ],
	    tech: [
	      'C++/CLI',
	      'C#',
	      '.NET Framework',
	      'Windows Forms',
	      'Visual Studio',
	      'Template Programming',
	      'OOP'
	    ],
	    category: 'desktop',
	    readme: {
	      title: 'C++/C# 하이브리드 공학용 계산기',
	      summary: '객체지향 설계 원칙과 하이브리드 아키텍처를 실습한 공학용 계산기',
	      summaryDetails: [
	        'Calculator<T> 추상 클래스에서 TrigonometricCalculator, LogCalculator 등 상속 구조',
	        'C++ 템플릿으로 타입별 특화 연산 및 컴파일 타임 타입 안전성 확보',
	        'C++/CLI 브릿지로 네이티브 C++ 연산 엔진과 C# UI 레이어 연결',
	        'Windows Forms 드래그앤드롭 디자인 및 이벤트 핸들러 기반 사용자 인터페이스',
	        'marshal_context 활용한 String^↔std::string 안전한 타입 변환'
	      ],
	      additionalInfo: '주요 기능: 기본 연산, 삼각함수, 로그함수, 메모리 기능, 예외 처리',
	      background: '객체지향프로그래밍 수업에서 배운 상속, 다형성, 템플릿 개념을 실제 구현해보고 싶어 시작했습니다. C++의 성능과 C#의 UI 개발 편의성을 결합하여 하이브리드 아키텍처의 장점을 체험하고, 실사용 가능한 계산기를 만드는 것이 목표였습니다.'
	    }
	  },
      {
        id: 8,
        title: '대구로 데이터 연계 아이디어: 어서와 대구로는 처음이지',
        date: '2023.02 (해커톤 1일)',
        description: '공공데이터 활용을 통한 소상공인 지원 및 소비자 편의 개선 배달 플랫폼',
        features: [
          '농수산물 공공데이터 연동으로 소상공인 대상 실시간 원재료 가격 정보 제공',
          '기존 가게 단위 평가를 음식별 평가로 개선하여 소상공인 스트레스 완화',
          '리뷰 작성 시 결제 금액 비례 포인트 적립 및 1000원 이상 시 할인 시스템',
          '문화관광 데이터 연계로 관광지 주변 지역민 추천 맛집 지도 서비스',
          '국토관리 데이터 기반 음식점 예약과 연계한 주변 공용주차장 정보 제공'
        ],
        tech: [
          '농수산물 가격 API',
          '문화관광 공공데이터',
          '국토관리 데이터',
          'Kakao Map API',
          'React',
          'Node.js',
          'MySQL'
        ],
        category: 'web',
        readme: {
          title: '대구로 데이터 연계 아이디어: 어서와 대구로는 처음이지',
          deploymentUrl: 'https://hiddenpicture.tistory.com/36',
          summary: '공공데이터 융합을 통한 소상공인-소비자-관광객 상생 플랫폼',
          summaryDetails: [
            '농수산물 가격 공공데이터로 소상공인의 원재료 구매 비용 절감 지원',
            '가게 평가 대신 음식별 세분화 평가로 더 정확한 정보 제공 및 상인 부담 완화',
            '포인트 기반 리뷰 유도 시스템으로 플랫폼 참여도 및 데이터 품질 향상',
            '관광 데이터와 지역민 리뷰 연계로 광고 없는 진정한 맛집 추천 서비스',
            '주차장 정보 통합 제공으로 외식 이용 편의성 및 지역 상권 활성화 기여'
          ],
          additionalInfo: '주요 기능: 공공데이터 활용, 평가시스템 개선, 포인트 시스템, 관광 연계',
          background: '배달 앱 시장의 독점 구조와 소상공인 부담을 해결하기 위해 공공데이터를 활용한 새로운 접근법을 제시했습니다. 단순한 서비스 개선을 넘어 공공의 이익과 시장 균형을 고려한 정책적 솔루션으로 설계된 해커톤 아이디어입니다.'
        }
      },
      {
        id: 9,
        title: '시각장애인을 위한 스마트 지팡이',
        date: '2022.09 - 2022.12 (캡스톤디자인)',
        description: 'IoT 센서 기반 장애물 감지 및 GPS 응급신고 시스템을 갖춘 스마트 지팡이',
        features: [
          'Arduino 기반 초음파센서를 활용한 장애물 감지 및 진동 피드백 시스템',
          'HC-06 블루투스 모듈과 Android 앱 연동을 통한 무선 통신',
          'GPS 위치 추적 및 자동 문자 발송을 통한 응급상황 대응 시스템',
          'ESP32-CAM을 활용한 상황 촬영 및 SD카드 저장 기능',
          '조도센서 기반 야간 LED 자동 점등으로 시인성 향상'
        ],
        tech: [
          'Arduino UNO R3',
          'ESP32-CAM',
          'Android Studio',
          'HC-06 Bluetooth',
          'GPS Module',
          'Kotlin',
          'C++'
        ],
        category: 'iot',
        readme: {
          title: '시각장애인을 위한 스마트 지팡이',
          deploymentUrl: 'https://hiddenpicture.tistory.com/35',
          summary: 'IoT 센서 통합과 모바일 앱 연동을 통한 시각장애인 보행 지원 시스템',
          summaryDetails: [
            '초음파센서로 1~100cm 범위 장애물 감지 후 거리별 차등 진동 피드백',
            '기울기센서 2초 연속 감지 시 블루투스를 통해 Android 앱으로 SOS 신호 전송',
            'GPS 좌표를 주소로 변환하여 등록된 다중 연락처로 자동 문자 발송',
            'ESP32-CAM 절전모드에서 스위치 입력으로 상황 촬영 및 SD카드 자동 저장',
            '조도센서 800 기준값으로 야간 환경 감지 시 LED 자동 점등'
          ],
          additionalInfo: '주요 기능: 장애물 감지, 응급신고, 상황 기록, 야간 안전',
          background: '사회적 약자를 위한 기술적 솔루션 개발을 목표로, 기존 흰 지팡이의 한계를 보완하는 종합적인 보행 지원 시스템을 설계했습니다. 하드웨어 센서 통합부터 모바일 앱 개발까지 IoT 전 영역을 다루며 사회적 가치 창출에 중점을 둔 프로젝트입니다.'
        }
      },
      {
        id: 10,
        title: '3링크 평면 로봇 제어 시스템',
        date: '2022.06 (MATLAB 프로젝트)',
        description: 'MATLAB/Simulink 기반 3링크 매니퓰레이터의 동역학 제어 시스템',
        features: [
          'Path Planning을 통한 직선 및 원운동 궤적 생성 (매개변수 기반)',
          'Inverse Kinematics 해석적 해법으로 목표 위치를 관절 각도로 변환',
          'Lagrangian 역학 기반 동역학 모델링 및 관성/원심력/중력 계산',
          'PID 제어기 (Kp=1000, Ki=100, Kd=800) 설계 및 파라미터 최적화',
          'Simulink 실시간 시뮬레이션 및 MATLAB 기반 3D 애니메이션 구현'
        ],
        tech: [
          'MATLAB R2019b',
          'Simulink',
          'PID Controller',
          'Lagrangian Mechanics',
          'Forward/Inverse Kinematics'
        ],
        category: 'simulation',
        readme: {
          title: '3링크 평면 로봇 제어 시스템',
          deploymentUrl: 'https://hiddenpicture.tistory.com/34',
          summary: 'MATLAB/Simulink를 활용한 3링크 매니퓰레이터의 완전한 제어 시스템',
          summaryDetails: [
            'Path Planning으로 X축/Y축 직선운동과 원운동 궤적을 시간 함수로 생성',
            'Inverse Kinematics에서 3DOF→2DOF 변환 후 cos법칙으로 해석적 해 계산',
            'Lagrangian 역학으로 M(q)q̈ + V(q,q̇) + G(q) = τ 동역학 방정식 도출',
            'PID 제어기 파라미터 최적화를 통해 ±2mm 정확도, 0.5초 안정화 시간 달성',
            'Simulink 실시간 시뮬레이션과 MATLAB 3D 애니메이션으로 궤적 추종 시각화'
          ],
          additionalInfo: '주요 기능: 궤적 계획, 역운동학, 동역학 모델링, PID 제어, 실시간 시뮬레이션',
          background: '로봇공학 이론을 실제 시뮬레이션으로 구현하여 수학적 개념과 실제 로봇 동작을 연결하는 것이 목표였습니다. Path Planning부터 Dynamic Control까지 전체 제어 루프를 경험하며, 라그랑지안 역학과 PID 제어의 실용적 가치를 확인한 학습 중심 프로젝트입니다.'
        }
      },
      {
        id: 11,
        title: '6축 로봇 매니퓰레이터 시뮬레이터',
        date: '2022.05 (MATLAB 프로젝트)',
        description: 'DH 파라미터 기반 6DOF 로봇 시뮬레이션 및 GUI 제어 시스템',
        features: [
          'DH 파라미터 테이블 기반 6축 로봇의 기하학적 구조 모델링',
          'Peter Corke Robotics Toolbox를 활용한 순운동학 및 3D 시각화',
          'Jacobian 의사역행렬을 이용한 수치해석적 역운동학 구현',
          'MATLAB GUIDE 기반 직관적 GUI로 관절 제어 및 직교 좌표계 제어',
          '안전 범위 설정 및 연속적 움직임 제어를 통한 실용적 시뮬레이션'
        ],
        tech: [
          'MATLAB R2020b',
          'Robotics Toolbox',
          'MATLAB GUIDE',
          'DH Parameters',
          'Jacobian Matrix'
        ],
        category: 'simulation',
        readme: {
          title: '6축 로봇 매니퓰레이터 시뮬레이터',
          deploymentUrl: 'https://hiddenpicture.tistory.com/33',
          summary: 'DH 파라미터와 GUI를 활용한 6DOF 로봇의 완전한 시뮬레이션 시스템',
          summaryDetails: [
            'DH 파라미터 6개 관절 정의 후 SerialLink 객체로 로봇 모델 생성',
            'Forward Kinematics로 관절각도→엔드이펙터 위치 실시간 계산 및 3D 렌더링',
            'Jacobian 의사역행렬 방법으로 목표 위치→관절각도 수치해석적 역산',
            'MATLAB GUIDE GUI로 버튼/슬라이더 기반 직관적 제어 인터페이스 구현',
            '각 축별 동작 한계 설정 및 연속 이동 시 안전성 검사로 실용성 확보'
          ],
          additionalInfo: '주요 기능: DH 모델링, 순/역운동학, GUI 제어, 3D 시각화, 안전성 제어',
          background: '로봇공학 이론의 추상적 개념들을 직접 체험하고 이해하기 위해 시작한 프로젝트입니다. DH 파라미터, 변환행렬, 자코비안 등의 수학적 개념이 실제 로봇 시뮬레이션에서 어떻게 작동하는지 확인하며, 이론과 실무의 연결점을 찾고자 했습니다.'
        }
      }
    ];

  const openModal = (project) => {
    setModalContent(project.readme);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <div className="portfolio" style={{
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      margin: 0,
      padding: 0,
      lineHeight: '1.6',
      color: '#333'
    }}>
      {/* Header */}
      <header className="header" style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        zIndex: 1000,
        borderBottom: '1px solid #eee'
      }}>
        <nav className="nav" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '1rem 2rem'
        }}>
          <div className="nav-brand" style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#2563eb'
          }}>SeungPil's Portfolio</div>
          <div className="nav-links" style={{
            display: 'flex',
            gap: '2rem'
          }}>
            <a href="#about" style={{textDecoration: 'none', color: '#666', fontWeight: '500'}}>About me</a>
            <a href="#skills" style={{textDecoration: 'none', color: '#666', fontWeight: '500'}}>Skills</a>
            <a href="#projects" style={{textDecoration: 'none', color: '#666', fontWeight: '500'}}>Projects</a>
            <a href="#contact" style={{textDecoration: 'none', color: '#666', fontWeight: '500'}}>Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div className="hero-content">
          <h1 style={{
            fontSize: '3.5rem',
            marginBottom: '2rem',
            fontWeight: '700',
            lineHeight: '1.2'
          }}>안녕하세요.<br />창의적인 개발자이자 기획자인<br />최승필입니다.</h1>
          <a href="#about" className="cta-button" style={{
            display: 'inline-block',
            padding: '1rem 2rem',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '50px',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            fontSize: '1.1rem',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            backdropFilter: 'blur(10px)'
          }}>더 알아보기 →</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about" style={{
        padding: '5rem 0',
        backgroundColor: '#f8fafc'
      }}>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '3rem',
            color: '#1e293b'
          }}>📋 ABOUT ME</h2>
          <div className="about-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            <div className="about-item" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1.5rem',
              backgroundColor: 'white',
              borderRadius: '12px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}>
              <span className="icon" style={{fontSize: '2rem'}}>👤</span>
              <div>
                <h3 style={{margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: '600'}}>이름</h3>
                <p style={{margin: 0, color: '#666'}}>최승필</p>
              </div>
            </div>
            <div className="about-item" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1.5rem',
              backgroundColor: 'white',
              borderRadius: '12px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}>
              <span className="icon" style={{fontSize: '2rem'}}>📧</span>
              <div>
                <h3 style={{margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: '600'}}>이메일</h3>
                <p style={{margin: 0, color: '#666'}}>seungpilchoe490</p>
				<p style={{margin: 0, color: '#666'}}>@gmail.com</p>
              </div>
            </div>
            <div className="about-item" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1.5rem',
              backgroundColor: 'white',
              borderRadius: '12px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}>
              <span className="icon" style={{fontSize: '2rem'}}>📱</span>
              <div>
                <h3 style={{margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: '600'}}>연락처</h3>
                <p style={{margin: 0, color: '#666'}}>010-4991-6405</p>
              </div>
            </div>
            <div className="about-item" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1.5rem',
              backgroundColor: 'white',
              borderRadius: '12px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}>
              <span className="icon" style={{fontSize: '2rem'}}>🏠</span>
              <div>
                <h3 style={{margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontWeight: '600'}}>주소</h3>
                <p style={{margin: 0, color: '#666'}}>경기도 삼송동</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills" style={{
        padding: '5rem 0',
        backgroundColor: 'white'
      }}>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '3rem',
            color: '#1e293b'
          }}>🛠 SKILLS</h2>
          <div className="skills-grid" style={{
            display: 'grid',
            gap: '2rem'
          }}>
            <div className="skill-category" style={{
              padding: '2rem',
              backgroundColor: '#f8fafc',
              borderRadius: '12px',
              border: '1px solid #e2e8f0'
            }}>
              <h3 style={{
                margin: '0 0 1rem 0',
                fontSize: '1.3rem',
                color: '#1e293b'
              }}>💬 Language</h3>
              <div className="skill-tags" style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}>
                {skills.languages.map((skill, index) => (
                  <span key={index} className="skill-tag language" style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#dbeafe',
                    color: '#1e40af',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category" style={{
              padding: '2rem',
              backgroundColor: '#f8fafc',
              borderRadius: '12px',
              border: '1px solid #e2e8f0'
            }}>
              <h3 style={{
                margin: '0 0 1rem 0',
                fontSize: '1.3rem',
                color: '#1e293b'
              }}>🎨 Frontend</h3>
              <div className="skill-tags" style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}>
                {skills.frontend.map((skill, index) => (
                  <span key={index} className="skill-tag frontend" style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#dcfce7',
                    color: '#166534',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category" style={{
              padding: '2rem',
              backgroundColor: '#f8fafc',
              borderRadius: '12px',
              border: '1px solid #e2e8f0'
            }}>
              <h3 style={{
                margin: '0 0 1rem 0',
                fontSize: '1.3rem',
                color: '#1e293b'
              }}>⚙️ Backend</h3>
              <div className="skill-tags" style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}>
                {skills.backend.map((skill, index) => (
                  <span key={index} className="skill-tag backend" style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#fef3c7',
                    color: '#92400e',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category" style={{
              padding: '2rem',
              backgroundColor: '#f8fafc',
              borderRadius: '12px',
              border: '1px solid #e2e8f0'
            }}>
              <h3 style={{
                margin: '0 0 1rem 0',
                fontSize: '1.3rem',
                color: '#1e293b'
              }}>💾 Database</h3>
              <div className="skill-tags" style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}>
                {skills.database.map((skill, index) => (
                  <span key={index} className="skill-tag database" style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#fce7f3',
                    color: '#be185d',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category" style={{
              padding: '2rem',
              backgroundColor: '#f8fafc',
              borderRadius: '12px',
              border: '1px solid #e2e8f0'
            }}>
              <h3 style={{
                margin: '0 0 1rem 0',
                fontSize: '1.3rem',
                color: '#1e293b'
              }}>🔧 DevOps</h3>
              <div className="skill-tags" style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}>
                {skills.tools.map((skill, index) => (
                  <span key={index} className="skill-tag tools" style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#f3e8ff',
                    color: '#7c3aed',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects" style={{
        padding: '5rem 0',
        backgroundColor: '#f8fafc'
      }}>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            textAlign: 'center',
            marginBottom: '1rem',
            color: '#1e293b'
          }}>🚀 PROJECTS</h2>
          <p className="projects-subtitle" style={{
            textAlign: 'center',
            marginBottom: '3rem',
            color: '#64748b',
            fontSize: '1.1rem'
          }}>주요 프로젝트만 보기 ✅</p>
          
          <div className="projects-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {projects.map((project) => (
              <div key={project.id} className="project-card" style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                border: '1px solid #e2e8f0',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <div className="project-header" style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem'
                }}>
                  <span className={`project-badge ${project.category}`} style={{
                    padding: '0.3rem 0.8rem',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    backgroundColor: '#dbeafe',
                    color: '#1e40af'
                  }}>
                    {project.category}
                  </span>
                </div>
                <div className="project-date" style={{
                  color: '#64748b',
                  fontSize: '0.9rem',
                  marginBottom: '0.5rem'
                }}>{project.date}</div>
                <h3 className="project-title" style={{
                  margin: '0 0 1rem 0',
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: '#1e293b',
                  lineHeight: '1.4'
                }}>{project.description}</h3>
                <ul className="project-features" style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 1.5rem 0'
                }}>
                  {project.features.map((feature, index) => (
                    <li key={index} style={{
                      margin: '0.5rem 0',
                      paddingLeft: '1rem',
                      position: 'relative',
                      fontSize: '0.9rem',
                      color: '#475569',
                      lineHeight: '1.6'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        color: '#3b82f6'
                      }}>•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="project-tech" style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '1.5rem'
                }}>
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag" style={{
                      padding: '0.3rem 0.6rem',
                      backgroundColor: '#f1f5f9',
                      color: '#475569',
                      borderRadius: '8px',
                      fontSize: '0.8rem',
                      fontWeight: '500'
                    }}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.readme && (
                    <button 
                      className="readme-btn"
                      onClick={() => openModal(project)}
                      style={{
                        padding: '0.75rem 1.5rem',
                        backgroundColor: '#3b82f6',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      📋 README
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && modalContent && (
        <div className="modal-overlay" onClick={closeModal} style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000,
          padding: '2rem'
        }}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{
            backgroundColor: 'white',
            borderRadius: '16px',
            maxWidth: '800px',
            width: '100%',
            maxHeight: '90vh',
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
          }}>
            <div className="modal-header" style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '2rem 2rem 1rem 2rem',
              borderBottom: '1px solid #e2e8f0'
            }}>
              <h2 style={{
                margin: 0,
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#1e293b'
              }}>README.md</h2>
              <button className="modal-close" onClick={closeModal} style={{
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                padding: '0.5rem',
                borderRadius: '8px',
                color: '#64748b'
              }}>✕</button>
            </div>
            <div className="modal-body" style={{
              padding: '2rem',
              overflowY: 'auto',
              maxHeight: 'calc(90vh - 100px)'
            }}>
              <h1 style={{
                margin: '0 0 2rem 0',
                fontSize: '2rem',
                fontWeight: '700',
                color: '#1e293b'
              }}>{modalContent.title}</h1>
              
              {modalContent.deploymentUrl && (
                <div className="modal-section" style={{marginBottom: '2rem'}}>
                  <h3 style={{
                    margin: '0 0 1rem 0',
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    color: '#1e293b'
                  }}>🔗 URL</h3>
                  <a href={modalContent.deploymentUrl} target="_blank" rel="noopener noreferrer" style={{
                    color: '#3b82f6',
                    textDecoration: 'none',
                    fontWeight: '500'
                  }}>
                    {modalContent.deploymentUrl}
                  </a>
                </div>
              )}

              <div className="modal-section" style={{marginBottom: '2rem'}}>
                <h3 style={{
                  margin: '0 0 1rem 0',
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: '#1e293b'
                }}>📌 Summary</h3>
                <p style={{
                  margin: '0 0 1rem 0',
                  fontSize: '1.1rem',
                  color: '#475569',
                  lineHeight: '1.6'
                }}>{modalContent.summary}</p>
                <ul style={{
                  margin: '0 0 1rem 0',
                  paddingLeft: '1.5rem'
                }}>
                  {modalContent.summaryDetails.map((detail, index) => (
                    <li key={index} style={{
                      margin: '0.5rem 0',
                      color: '#475569',
                      lineHeight: '1.6'
                    }}>{detail}</li>
                  ))}
                </ul>
                <blockquote style={{
                  margin: '1rem 0',
                  padding: '1rem',
                  backgroundColor: '#f8fafc',
                  borderLeft: '4px solid #3b82f6',
                  borderRadius: '4px',
                  fontStyle: 'italic',
                  color: '#64748b'
                }}>{modalContent.additionalInfo}</blockquote>
              </div>

              <div className="modal-section" style={{marginBottom: '2rem'}}>
                <h3 style={{
                  margin: '0 0 1rem 0',
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: '#1e293b'
                }}>🤔 Background</h3>
                <p style={{
                  margin: 0,
                  color: '#475569',
                  lineHeight: '1.6'
                }}>{modalContent.background}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="contact" style={{
        padding: '5rem 0',
        backgroundColor: 'white',
        textAlign: 'center'
      }}>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: '2rem',
            color: '#1e293b'
          }}>📞 CONTACT</h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#64748b',
            marginBottom: '2rem'
          }}>프로젝트 문의나 협업 제안이 있으시면 언제든 연락주세요!</p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap'
          }}>
            <a href="mailto:seungpilchoe490@gmail.com" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem 2rem',
              backgroundColor: '#3b82f6',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}>
              📧 이메일 보내기
            </a>
            <a href="tel:010-4991-6405" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '1rem 2rem',
              backgroundColor: '#10b981',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}>
              📱 전화하기
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#1e293b',
        color: 'white',
        textAlign: 'center',
        padding: '2rem 0'
      }}>
        <p style={{
          margin: 0,
          color: '#94a3b8'
        }}>© 2025 최승필. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Portfolio;