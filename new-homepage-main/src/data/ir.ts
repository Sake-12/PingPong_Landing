export interface Notice {
    id: string;
    title: string;
    date: string;
    content: string;
}

export const notices: Notice[] = [
    {
        id: "notice-001",
        title: "2024년 4분기 실적 보고서",
        date: "2025.01.15",
        content: `주식회사 코드021의 2024년 4분기 실적 보고서입니다.

## 주요 실적 요약

- 매출액: 전분기 대비 35% 성장
- 신규 고객사 15개 확보
- 클라우드 서비스 MAU 200% 증가

## 사업 부문별 실적

### 외주 개발
웹/앱 외주 개발 프로젝트를 성공적으로 수행하였으며, 고객 만족도 4.8/5.0을 기록하였습니다.

### 클라우드 서비스
Code021 Cloud 서비스의 안정적 운영 및 신규 기능 출시로 사용자 수가 크게 증가하였습니다.

### 컨설팅
IT 인프라 컨설팅 및 기술 자문 서비스를 통해 중소기업의 디지털 전환을 지원하였습니다.`,
    },
    {
        id: "notice-002",
        title: "Code021 Cloud 서비스 출시 공시",
        date: "2024.12.20",
        content: `주식회사 코드021은 자체 PaaS 플랫폼 "Code021 Cloud"를 정식 출시하였음을 공시합니다.

## 서비스 개요

Code021 Cloud는 중소기업 및 스타트업을 위한 클라우드 인프라 플랫폼입니다.

### 주요 기능
- VM 생성 및 관리
- 스냅샷 및 백업
- 실시간 모니터링
- 모바일 콘솔 지원

### 가격 정책
합리적인 종량제 과금 체계를 적용하여 불필요한 비용 부담을 최소화했습니다.

## 향후 계획
2025년 상반기 내 Kubernetes 관리 서비스, CI/CD 파이프라인 등 추가 기능을 출시할 예정입니다.`,
    },
    {
        id: "notice-003",
        title: "씨앤알그래픽스 MES 시스템 구축 계약 체결",
        date: "2024.10.14",
        content: `주식회사 코드021은 씨앤알그래픽스와 MES(Manufacturing Execution System) 시스템 구축 계약을 체결하였음을 공시합니다.

## 계약 개요

- 계약 상대: 씨앤알그래픽스
- 계약 내용: MES 시스템 설계, 개발, 구축 및 운영 지원
- 계약 기간: 2024년 10월 ~ 2025년 6월

## 기대 효과
본 프로젝트를 통해 씨앤알그래픽스의 생산 관리 효율성이 크게 개선될 것으로 기대됩니다.`,
    },
    {
        id: "notice-004",
        title: "2024년 3분기 실적 보고서",
        date: "2024.10.10",
        content: `주식회사 코드021의 2024년 3분기 실적 보고서입니다.

## 주요 실적 요약

- 매출액: 전분기 대비 28% 성장
- 신규 고객사 12개 확보
- 기술팀 인력 20% 확대

## 주요 프로젝트
- 핀테크 B사 모바일 앱 리뉴얼
- 헬스케어 C사 웹 플랫폼 구축
- 교육 서비스 D사 관리자 시스템 개발`,
    },
    {
        id: "notice-005",
        title: "서울 지점 개설 공시",
        date: "2024.07.01",
        content: `주식회사 코드021은 사업 확장을 위해 서울 지점을 개설하였음을 공시합니다.

## 서울 지점 정보

- 주소: 구로구 디지털로34길 55 코오롱싸이언스밸리2차 B101호 (I-19)
- 개설일: 2024년 7월 1일

## 개설 목적
수도권 고객사와의 접근성을 강화하고, 보다 신속한 서비스 제공을 위해 서울 지점을 개설합니다.`,
    },
];

export interface MediaArticle {
    id: string;
    source: string;
    title: string;
    date: string;
    imageUrl: string;
    link: string;
}

export const mediaArticles: MediaArticle[] = [
    {
        id: "media-001",
        source: "중앙일보",
        title: "코드021, 씨앤알그래픽스에 MES 구축",
        date: "2025.10.14",
        imageUrl: "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202510/14/c1171417-9ab9-418d-95ca-837d3da64309.jpg",
        link: "https://www.joongang.co.kr/article/25373530",
    },
    {
        id: "media-002",
        source: "IT조선",
        title: "코드021, PaaS 플랫폼 '코드021 클라우드' 출시",
        date: "2025.12.01",
        imageUrl: "https://cdn.it.chosun.com/news/photo/202512/2023092152062_430939_5423.jpg",
        link: "https://it.chosun.com/news/articleView.html?idxno=2023092152062",
    },
];
