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
      title: '핀테크 중고거래 플랫폼',
      date: '2025.06 (팀 프로젝트)',
      description: '실시간 채팅과 위치 기반 물품 검색이 가능한 중고거래 웹 플랫폼',
      features: [
        'JWT + Spring Security를 활용한 사용자 인증 및 권한 관리',
        'WebSocket을 활용한 실시간 채팅 기능 구현 (채팅방 구독, 메시지 푸시)',
        'React 전환을 통해 REST API 기반 프론트엔드 완성',
        '공공 API를 통한 지역(동 단위) 실시간 검색 기능 구현',
        'Git 브랜치 전략을 기반으로 한 협업 및 코드 충돌 해결 경험'
      ],
      tech: [
        'Spring Boot',
        'Spring Security',
        'JWT',
        'WebSocket',
        'React',
        'Axios',
        'MySQL',
        'AWS EC2',
        'Git'
      ],
      github: 'https://github.com/yourusername/used-trade-platform',
      demo: 'https://your-used-trade.netlify.app',
      category: 'web',
      readme: {
        title: '핀테크 중고거래 플랫폼',
        deploymentUrl: 'https://your-used-trade.netlify.app',
        summary: '실시간 채팅과 위치 기반 검색 기능이 포함된 중고거래 웹 플랫폼',
        summaryDetails: [
          'JWT 기반 인증과 Spring Security를 활용한 로그인 및 권한 제어 구현',
          'WebSocket을 통해 메시지 전송 시 실시간 채팅방에 자동 반영',
          'React로 전체 UI 전환 및 Axios 기반 API 연동 구조 설계',
          '공공 API의 지역명 기반 요청으로 효율적인 물품 검색 기능 구현',
          'Git 브랜치 분기 전략을 통한 팀원 간 협업 및 충돌 관리 능력 향상'
        ],
        additionalInfo: '주요 기능: 실시간 채팅, 위치 기반 필터링, 인증/인가, 검색 최적화',
        background: '실제 중고거래 서비스와 같은 사용자 흐름을 구현하고, 인증 및 실시간 통신 기술을 실습할 수 있는 실전 프로젝트로 기획했습니다. 사용자 경험을 고려한 설계와 더불어 보안성과 협업 중심 개발을 중점에 두고 진행하였습니다.'
      }
    },
    {
      id: 2,
      title: '여행 공유 플랫폼',
      date: '2025.04 (팀 프로젝트)',
      description: '여행 계획을 Day별로 등록·공유하고, 지도 기반으로 시각화하는 웹 플랫폼',
      features: [
        '여행 계획 등록 및 공유 게시글 기능 구현 (JSP + Spring MVC)',
        'Kakao Map API를 활용하여 Day별 장소에 마커 및 경로(Polyline) 표시',
        '여행 일차별 상세 페이지에서 장소, 후기, 지도를 함께 출력',
        'AJAX 기반 댓글 기능 (작성, 수정, 삭제)',
        '조회수/좋아요/공유수 별도 테이블 설계 및 실시간 반영'
      ],
      tech: [
        'Spring Framework',
        'Servlet',
        'Kakao Map API',
        'jQuery',
        'Ajax',
        'MySQL',
        'Git'
      ],
      github: 'https://github.com/yourusername/travel-share-platform',
      demo: 'https://your-travel-share.netlify.app',
      category: 'web',
      readme: {
        title: '여행 공유 플랫폼',
        deploymentUrl: 'https://your-travel-share.netlify.app',
        summary: '여행 계획을 지도 기반으로 공유하는 커뮤니티형 웹 플랫폼',
        summaryDetails: [
          '사용자 여행 계획 등록 및 Day별 일정 관리 기능 구현',
          'Kakao Map API로 장소별 마커 표시 및 경로 연결 기능 추가',
          'Day별 일정에 대한 후기, 장소 주소 등을 리스트 및 지도에 동시에 출력',
          'AJAX 기반 댓글 CRUD 기능 개발 (비동기 처리)',
          '조회수, 좋아요, 공유수 테이블을 별도로 구성하여 통계/로그 기반 처리'
        ],
        additionalInfo: '주요 기능: Day별 여행 공유, Kakao 지도 연동, 비동기 댓글, 통계 테이블 설계',
        background: '여행 계획을 단순히 저장하는 것을 넘어, 다른 사용자와 쉽게 공유하고, 시각적으로도 이해하기 쉬운 형태로 보여주기 위한 웹 플랫폼으로 기획하였습니다. Kakao Map API를 연동하고, Day별 구분, AJAX 댓글 등 실무에서 자주 접할 기능을 중심으로 구현했습니다.'
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