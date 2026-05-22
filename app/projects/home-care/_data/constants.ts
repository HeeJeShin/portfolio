// 성과 지표 데이터
export const metrics = [
  { label: "디자인→코드 시간", value: "2일", desc: "HTML 핸드오프 기반" },
  { label: "화면 구현", value: "8개", desc: "완전 인터랙티브" },
  { label: "기획 반영 속도", value: "30분", desc: "부분 수정 가이드" },
  { label: "코드 품질", value: "100%", desc: "TypeScript 타입 안전" },
];

// 기술 스택
export const techStack = [
  "Next.js 16",
  "React 19",
  "TypeScript",
  "Tailwind CSS v4",
  "Claude Design",
  "Claude Code",
  "Web Notifications API",
  "PWA",
  "IndexedDB",
];

// Claude Design 워크플로우 단계
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
    output: "Next.js 프로덕션 코드",
  },
];

// 기술적 접근법 데이터
export const approaches = [
  {
    id: "handoff",
    title: "Claude Design 핸드오프 기반 개발",
    problem: "디자이너 없이 의료 앱 수준의 UI/UX 구현 필요",
    solution: "Claude Design에서 인터랙티브 HTML 프로토타입 생성 → Claude Code로 1:1 구현",
    effect: "디자인-개발 사이클 2일 완료",
  },
  {
    id: "incremental",
    title: "점진적 기획 반영 시스템",
    problem: "기획 변경마다 전체 재작업 위험",
    solution: "UPDATE-GUIDE.md 기반 부분 수정 가이드라인 + 컴포넌트 단위 업데이트",
    effect: "기획 변경 30분 내 반영",
  },
  {
    id: "notification",
    title: "크로스 브라우저 알림 시스템",
    problem: "Safari/Chrome/PWA 환경별 알림 권한 처리 상이",
    solution: "브라우저 자동 감지 + 권한 상태별 UI + 테스트 알림 기능",
    effect: "의료진 현장 설정 오류 제로",
  },
  {
    id: "type-safety",
    title: "의료 데이터 타입 안전성",
    problem: "점검 기록, 환자 정보 등 민감 데이터 런타임 에러 위험",
    solution: "도메인 타입 분리 + 화살표 함수 + 명시적 타입 선언 컨벤션",
    effect: "런타임 에러 0건 (컴파일 타임 검증)",
  },
];

// 화면 구성 데이터
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
