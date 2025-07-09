import React, { useState } from 'react';
import './App.css';

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
        github: 'https://github.com/yourusername/smart-cane',
        demo: 'https://your-smart-cane-demo.netlify.app',
        category: 'iot',
        readme: {
          title: '시각장애인을 위한 스마트 지팡이',
          deploymentUrl: 'https://your-smart-cane-demo.netlify.app',
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
        id: 2,
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
        github: 'https://github.com/yourusername/daeguro-platform',
        demo: 'https://your-daeguro-demo.netlify.app',
        category: 'web',
        readme: {
          title: '대구로 데이터 연계 아이디어: 어서와 대구로는 처음이지',
          deploymentUrl: 'https://your-daeguro-demo.netlify.app',
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
        id: 3,
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
        github: 'https://github.com/yourusername/flood-barrier',
        demo: 'https://your-flood-barrier-demo.netlify.app',
        category: 'iot',
        readme: {
          title: '수위 감지 기반 침수 차단 시스템',
          deploymentUrl: 'https://your-flood-barrier-demo.netlify.app',
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
    <div className="portfolio">
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <div className="nav-brand">SeungPil's Portfolio</div>
          <div className="nav-links">
            <a href="#about">About me</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>안녕하세요.<br />창의적인 개발자이자 기획자인<br />최승필입니다.</h1>
          {/* 변경된 부분: button을 a 태그로 변경하고 href 추가 */}
          <a href="#about" className="cta-button">더 알아보기 →</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>📋 ABOUT ME</h2>
          <div className="about-grid">
            <div className="about-item">
              <span className="icon">👤</span>
              <div>
                <h3>이름</h3>
                <p>최승필</p>
              </div>
            </div>
            <div className="about-item">
              <span className="icon">📧</span>
              <div>
                <h3>이메일</h3>
                <p>seungpilchoe490</p>
				<p>@gmail.com</p>
              </div>
            </div>
            <div className="about-item">
              <span className="icon">📱</span>
              <div>
                <h3>연락처</h3>
                <p>010-4991-6405</p>
              </div>
            </div>
            <div className="about-item">
              <span className="icon">🏠</span>
              <div>
                <h3>주소</h3>
                <p>경기도 삼송동</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2>🛠 SKILLS</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>💬 Language</h3>
              <div className="skill-tags">
                {skills.languages.map((skill, index) => (
                  <span key={index} className="skill-tag language">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>🎨 Frontend</h3>
              <div className="skill-tags">
                {skills.frontend.map((skill, index) => (
                  <span key={index} className="skill-tag frontend">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>⚙️ Backend</h3>
              <div className="skill-tags">
                {skills.backend.map((skill, index) => (
                  <span key={index} className="skill-tag backend">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>💾 Database</h3>
              <div className="skill-tags">
                {skills.database.map((skill, index) => (
                  <span key={index} className="skill-tag database">{skill}</span>
                ))}
              </div>
            </div>
            <div className="skill-category">
              <h3>🔧 DevOps</h3>
              <div className="skill-tags">
                {skills.tools.map((skill, index) => (
                  <span key={index} className="skill-tag tools">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2>🚀 PROJECTS</h2>
          <p className="projects-subtitle">주요 프로젝트만 보기 ✅</p>
          
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-header">
                  <span className={`project-badge ${project.category}`}>
                    {project.category}
                  </span>
                </div>
                <div className="project-date">{project.date}</div>
                <h3 className="project-title">{project.description}</h3>
                <ul className="project-features">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <div className="project-tech">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.readme && (
                    <button 
                      className="readme-btn"
                      onClick={() => openModal(project)}
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
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>README.md</h2>
              <button className="modal-close" onClick={closeModal}>✕</button>
            </div>
            <div className="modal-body">
              <h1>{modalContent.title}</h1>
              
              <div className="modal-section">
                <h3>🔗 Deployment URL</h3>
                <a href={modalContent.deploymentUrl} target="_blank" rel="noopener noreferrer">
                  {modalContent.deploymentUrl}
                </a>
              </div>

              <div className="modal-section">
                <h3>📌 Summary</h3>
                <p>{modalContent.summary}</p>
                <ul>
                  {modalContent.summaryDetails.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
                <blockquote>{modalContent.additionalInfo}</blockquote>
              </div>

              <div className="modal-section">
                <h3>🤔 Background</h3>
                <p>{modalContent.background}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;