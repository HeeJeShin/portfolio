import { projectInfo as homeCareInfo } from "../projects/home-care/_data/constants";

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  tags: string[];
  highlights: string[];
  metrics?: { period?: string; dev?: string; tests?: string };
  demo?: string;
  github?: string;
  links?: { label: string; url: string }[];
  subProjects?: string[];
  firstAttemptPeriod?: string; // 1차 시도 기간 (실패 → 성공 스토리용)
};

// 프로젝트 ID로 프로젝트 찾기 헬퍼
export const getProjectById = (id: string): Project | undefined => {
  return projects.find((p) => p.id === id);
};

export const projects: Project[] = [
  {
    id: homeCareInfo.id,
    title: homeCareInfo.title,
    subtitle: homeCareInfo.subtitle,
    period: homeCareInfo.period,
    description: homeCareInfo.description,
    tags: homeCareInfo.tags,
    highlights: homeCareInfo.highlights,
    demo: homeCareInfo.demo,
    github: homeCareInfo.github,
  },
  {
    id: "4j",
    title: "4J - 행사장 수용인원 자동계산",
    subtitle: "사내 AI Boost Challenge 해커톤",
    period: "2026.01",
    description: "AI 기반 행사장 수용인원 자동 계산 및 실시간 혼잡도 모니터링 서비스",
    tags: ["Next.js", "TypeScript", "Google Gemini AI"],
    highlights: ["Google Gemini AI 연동", "프롬프트 설계", "실시간 모니터링"],
    demo: "https://4j-mgqp.vercel.app/",
    github: "https://github.com/HeeJeShin/4j",
  },
  {
    id: "exhibition",
    title: "어드민 시스템(행사부스 신청관리)",
    subtitle: "2단계 어드민 시스템 개발",
    period: "2025.02 - 2025.04",
    description: "슈퍼어드민 + 프로젝트 어드민 구조의 전시회 참가신청 관리 시스템",
    tags: ["Next.js", "TypeScript", "TanStack Query", "Turborepo", "Vitest"],
    highlights: ["모노레포 기반 50% 기간 단축", "Vitest 단위테스트 자동화", "216개 테스트 케이스"],
    metrics: {
      period: "50%",
      dev: "70%",
      tests: "216개",
    },
    links: [
      { label: "어드민", url: "https://ipsolution-admin.ezpmp.com/" },
      { label: "유저", url: "https://ipsolution.ezpmp.com/GETEC/120006" },
    ],
  },
  {
    id: "smart-tourism",
    title: "스마트관광프로젝트",
    subtitle: "인제 / 용인 스마트 관광 플랫폼",
    period: "2025.06 - 2025.11",
    description: "숙박/체험 예약, 투어패스 판매, 커뮤니티 등 스마트 관광 플랫폼",
    tags: ["Next.js", "TypeScript", "KCP 결제"],
    highlights: ["NICE 본인인증", "KCP 결제 연동", "Safari 호환성"],
    links: [
      { label: "인제", url: "https://tour.inje.go.kr/" },
      { label: "용인", url: "https://itour.yongin.go.kr/" },
    ],
  },
  {
    id: "o2meet-migration",
    title: "O2MEET Next.js 마이그레이션",
    subtitle: "1차 실패 → 2차 성공",
    period: "2026.01 - 2026.04",
    description: "JSP → Next.js로 전환한 온라인 행사 플랫폼",
    tags: ["Next.js", "TypeScript", "Zustand", "Tailwind CSS", "ArgoCD"],
    highlights: ["LCP 60% 개선", "미사용 코드 99% 감소", "CLS 100% 개선"],
    firstAttemptPeriod: "2024.12 - 2025.02",
    demo: "https://greenenertec.com/",
  },
  {
    id: "pos-kiosk",
    title: "POS/Kiosk 프로젝트",
    subtitle: "디키디키 키즈카페",
    period: "2024.11 - 2025.02",
    description: "동대문역사문화공원역 어린이 키즈카페용 POS/Kiosk 시스템",
    tags: ["JavaScript", "jQuery", "JSP", "KCP 결제"],
    highlights: ["키오스크 UI 전체 개발", "장바구니/옵션 시스템", "KCP 결제 연동"],
  },
  {
    id: "o2meet",
    title: "O2MEET 온라인 행사 플랫폼",
    subtitle: "개발 및 유지보수",
    period: "2022.05 - 현재",
    description: "온라인 전시관, 컨퍼런스, 티켓 구매 등 행사 플랫폼 프론트엔드",
    tags: ["JSP", "jQuery", "KCP"],
    highlights: ["등록솔루션 2주→3-5일", "결제 시스템 구축", "공통화 작업"],
    subProjects: ["북키즈콘 (2024~ 매년 9월)", "SPP (2024, 종료)"],
  },
];

export const skills: Record<string, string[]> = {
  Frontend: ["React", "Next.js", "TypeScript", "JavaScript"],
  "데이터 페칭": ["TanStack Query"],
  상태관리: ["Zustand"],
  스타일링: ["Tailwind CSS"],
  테스트: ["Vitest"],
  "빌드 도구": ["Turborepo", "pnpm workspace"],
  DevOps: ["Docker", "GitLab CI/CD", "ArgoCD"],
  Tools: ["Claude Code", "IntelliJ IDEA", "Figma"],
};

export const navItems = [
  { id: "intro", label: "소개" },
  { id: "challenges", label: "도전과 성장" },
  { id: "experience", label: "경력" },
  { id: "skills", label: "기술" },
  { id: "projects", label: "프로젝트" },
  { id: "education", label: "학력" },
  { id: "contact", label: "연락처" },
] as const;

export type NavId = (typeof navItems)[number]["id"];
