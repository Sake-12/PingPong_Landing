export interface Position {
    id: string;
    title: string;
    experience: string;
    tags: string[];
    description: string;
    responsibilities: string[];
    requirements: string[];
    preferred: string[];
    benefits: string[];
}

export const positions: Position[] = [
    {
        id: "frontend-developer",
        title: "Frontend Developer",
        experience: "신입/경력",
        tags: ["React", "Next.js", "TypeScript"],
        description: "Code021의 프론트엔드 개발자는 사용자에게 가장 먼저 닿는 인터페이스를 책임집니다. 직관적이고 아름다운 UI/UX를 구현하며, 성능 최적화와 웹 접근성을 고려한 개발을 지향합니다.",
        responsibilities: [
            "웹 애플리케이션 프론트엔드 개발 및 유지보수",
            "UI/UX 디자인의 기술적 구현 및 인터랙션 개발",
            "재사용 가능한 컴포넌트 설계 및 라이브러리 구축",
            "성능 최적화 및 웹 접근성 개선"
        ],
        requirements: [
            "HTML, CSS, JavaScript(ES6+)에 대한 깊은 이해",
            "React, Next.js 등 모던 프레임워크 사용 경험",
            "TypeScript 활용 능력",
            "Git을 이용한 협업 경험"
        ],
        preferred: [
            "상태 관리 라이브러리(Zustand, Recoil 등) 사용 경험",
            "모션/애니메이션 라이브러리(Framer Motion, GSAP) 활용 능력",
            "디자인 시스템 구축 및 운영 경험",
            "SEO 최적화 경험"
        ],
        benefits: [
            "최신 장비 지원 (MacBook Pro 등)",
            "유연 근무제 (코어타임 운영)",
            "도서 및 교육비 지원",
            "자유로운 연차 사용"
        ]
    },
    {
        id: "backend-developer",
        title: "Backend Developer",
        experience: "경력 3년 이상",
        tags: ["Node.js", "Python", "AWS"],
        description: "안정적이고 확장 가능한 서버 아키텍처를 설계하고 구현합니다. 대용량 트래픽 처리를 위한 시스템 최적화와 데이터베이스 설계를 담당합니다.",
        responsibilities: [
            "RESTful API 설계 및 개발",
            "데이터베이스 스키마 설계 및 최적화",
            "서버 인프라 구축 및 운영 (AWS)",
            "시스템 모니터링 및 장애 대응"
        ],
        requirements: [
            "Node.js, Python, Java 중 하나 이상의 언어 능숙자",
            "RDBMS, NoSQL 사용 경험",
            "AWS 등 클라우드 환경 경험",
            "RESTful API 설계 및 구현 능력"
        ],
        preferred: [
            "MSA(Microservices Architecture) 설계 및 운영 경험",
            "Docker, Kubernetes 등 컨테이너 환경 경험",
            "대용량 트래픽 처리 경험",
            "CI/CD 파이프라인 구축 경험"
        ],
        benefits: [
            "최신 장비 지원",
            "유연 근무제",
            "기술 세미나 및 컨퍼런스 참가 지원",
            "성과에 따른 인센티브"
        ]
    },
    {
        id: "cloud-engineer",
        title: "Cloud Engineer",
        experience: "경력 무관",
        tags: ["Linux", "Kubernetes", "DevOps"],
        description: "Code021의 클라우드 인프라를 구축하고 자동화합니다. 안정적인 서비스 운영을 위한 환경을 제공하고 개발자들의 생산성을 높입니다.",
        responsibilities: [
            "클라우드 인프라 구축 및 관리",
            "CI/CD 파이프라인 구축 및 운영",
            "컨테이너 오케스트레이션 (Kubernetes) 운영",
            "보안 및 네트워크 설정 관리"
        ],
        requirements: [
            "Linux 시스템에 대한 이해",
            "AWS, GCP, Azure 중 하나 이상의 클라우드 플랫폼 경험",
            "Docker 등 컨테이너 기술에 대한 이해",
            "네트워크 및 보안 기초 지식"
        ],
        preferred: [
            "Kubernetes 운영 경험",
            "Terraform, Ansible 등 IaC 도구 사용 경험",
            "모니터링 시스템 구축 경험 (Prometheus, Grafana 등)",
            "스크립트 언어(Shell, Python 등) 활용 능력"
        ],
        benefits: [
            "클라우드 관련 자격증 취득 지원",
            "최신 장비 및 소프트웨어 지원",
            "유연 근무제",
            "자유로운 기술 연구 분위기"
        ]
    }
];
