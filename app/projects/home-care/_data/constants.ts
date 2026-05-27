// ============================================
// 프로젝트 기본 정보 (리스트 & 상세 공통)
// ============================================
export const projectInfo = {
  id: "home-care",
  title: "HomeCare - 홈펌프 항암제 자가관리",
  subtitle: "의료 헬스케어 도메인 · 서울대학교병원 임상간호연구",
  period: "2026.05 - 진행중",
  description: "휴대용 항암 주입기(홈펌프) 사용 환자를 위한 자가관리 웹앱",
  tags: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind v4",
    "PWA",
    "Claude Design",
    "Claude Code",
  ],
  highlights: ["의료 헬스케어 도메인", "AI 기획/기술명세서", "서버리스 PWA"],
  demo: "https://home-care-blond.vercel.app/",
  github: "https://github.com/HeeJeShin/home_care",
  spec: "/docs/homecare-spec.html",
  prototype: "https://home-care-blond.vercel.app/prototype",

  // 연구 정보
  research: {
    team: "H.O.M.E. (Home infusion-Oncology-Monitoring-Empowerment)",
    department: "내과간호과 112병동",
    title:
      "휴대용 항암 주입기를 이용하는 췌담도암 환자를 위한 프로토 타입 자가관리 모바일 앱 개발 및 효과 평가",
  },
};

// ============================================
// 기술 스택 (상세)
// ============================================
export const techStack = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind CSS v4",
  "PWA",
  "qrcode.react",
  "html2canvas",
  "jsPDF",
  "Claude Design",
  "Claude Code",
];

// ============================================
// 기술적 접근법 (IMPLEMENTATION_NOTE.md 기반)
// ============================================
export const approaches = [
  {
    id: "qr-transfer",
    title: "QR 기반 환자 데이터 전송",
    problem: "서버/DB 없이 의료진 → 환자로 데이터 전달 필요",
    solution:
      "JSON → encodeURIComponent → Base64 인코딩으로 URL에 담아 QR 생성. 2KB 이내 유지.",
    effect: "서버 없이 안전한 데이터 전송",
  },
  {
    id: "safari-itp",
    title: "Safari ITP 대응 이중 저장소",
    problem: "Safari ITP가 7일 후 localStorage 삭제, PWA 설치 시 query string 제거",
    solution:
      "localStorage + Cookie 이중 저장. URL 파라미터 감지 즉시 저장 후 clean URL로 리다이렉트.",
    effect: "치료 기간(44시간) 데이터 100% 유지",
  },
  {
    id: "ios-viewport",
    title: "iOS Safari 뷰포트 대응",
    problem: "iPhone 노치/Dynamic Island 영역에 콘텐츠 가려짐",
    solution: "viewport-fit: cover + CSS env(safe-area-inset-*) 패딩 적용",
    effect: "모든 iOS 기기 호환",
  },
  {
    id: "sent-history",
    title: "관리자 QR 발송 이력 관리",
    problem: "당일 발송한 환자 정보 재확인/재발송 필요",
    solution:
      "localStorage 기반 발송 이력 저장, 동일 MRN 업데이트, 당일 목록 필터링",
    effect: "QR 재발송 즉시 가능",
  },
  {
    id: "intro-flag",
    title: "인트로 화면 중복 방지",
    problem: "앱 새로고침 시 매번 인트로 표시되는 UX 문제",
    solution: "인트로 완료 플래그를 localStorage + Cookie에 이중 저장",
    effect: "환자 UX 개선",
  },
  {
    id: "pwa-setup",
    title: "PWA 최적화",
    problem: "홈 화면 설치 시 앱처럼 동작해야 함",
    solution:
      "Next.js App Router 동적 아이콘 생성 + manifest.ts 설정 + standalone 모드",
    effect: "네이티브 앱 수준 UX",
  },
];

// ============================================
// Claude Design 워크플로우
// ============================================
export const claudeDesignFlow = [
  {
    step: 1,
    title: "요구사항 정의",
    desc: "자연어로 기능 요구사항 전달 → AI가 구조화된 질문으로 명확화",
    output: "디자인 시스템 결정 (색상, 타이포, 레이아웃)",
  },
  {
    step: 2,
    title: "인터랙티브 프로토타입",
    desc: "HTML/CSS/JS 기반 고충실도 프로토타입 생성",
    output: "8개 화면 + 상태 전환 + 애니메이션",
  },
  {
    step: 3,
    title: "핸드오프 번들",
    desc: "프로토타입 + 채팅 기록 + 기술 명세 패키지",
    output: "HomeCare-spec.html (개발자용)",
  },
  {
    step: 4,
    title: "Claude Code 구현",
    desc: "핸드오프 번들 기반 픽셀 퍼펙트 구현",
    output: "Next.js 프로토타입 코드",
  },
];

// ============================================
// 화면 구성 데이터
// ============================================
export const screens = [
  { id: "setup", name: "의료진 설정", desc: "5단계 환자/처방/연락처 입력" },
  { id: "intro", name: "환자 인수", desc: "환자 전달 + 치료 정보 확인" },
  { id: "home", name: "홈 대시보드", desc: "현재 상태 + 다음 체크 시간" },
  { id: "check", name: "체크 플로우", desc: "4단계 눈금/잠금/체온/완료" },
  { id: "alert", name: "응급 안내", desc: "이상 발생 시 즉시 연락처" },
  { id: "records", name: "기록 목록", desc: "전체 체크 히스토리" },
  { id: "export", name: "PDF 내보내기", desc: "의료진 제출용 기록" },
  { id: "done", name: "치료 완료", desc: "44시간 완료 안내" },
];
