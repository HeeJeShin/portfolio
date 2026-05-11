// 성과 지표 데이터
export const metrics = [
  { label: "개발 기간 단축", value: "50%", desc: "6개월 → 3개월" },
  { label: "페이지 개발 시간", value: "70%", desc: "2주 → 3-5일" },
  { label: "테스트 케이스", value: "216개", desc: "자동 문서화" },
  { label: "런타임 에러", value: "90%↓", desc: "타입 시스템 도입" },
];

// 기술 스택
export const techStack = [
  "Next.js 16",
  "TypeScript",
  "TanStack Query",
  "Zustand",
  "Tailwind CSS",
  "Zod",
  "Vitest",
  "Turborepo",
  "pnpm",
  "GitLab CI/CD",
];

// 샘플 테이블 데이터
export const sampleTableData = [
  { id: 1, company: "(주)삼성전자", status: "승인완료", booth: "A-101", date: "2025-03-15" },
  { id: 2, company: "(주)LG전자", status: "입금대기", booth: "B-205", date: "2025-03-14" },
  { id: 3, company: "(주)현대자동차", status: "심사중", booth: "C-302", date: "2025-03-13" },
  { id: 4, company: "(주)SK하이닉스", status: "승인완료", booth: "A-102", date: "2025-03-12" },
  { id: 5, company: "(주)네이버", status: "입금완료", booth: "D-401", date: "2025-03-11" },
];

// DynamicForm 필드 타입들
export const fieldTypes = [
  { type: "TEXT", icon: "Aa", desc: "텍스트 입력" },
  { type: "TEXTAREA", icon: "¶", desc: "멀티라인 텍스트" },
  { type: "SELECT", icon: "▼", desc: "드롭다운 선택" },
  { type: "CHECKBOX", icon: "☑", desc: "다중 선택" },
  { type: "RADIO", icon: "◉", desc: "단일 선택" },
  { type: "FILE", icon: "📎", desc: "파일 업로드" },
  { type: "ZIPCODE", icon: "📍", desc: "주소 검색" },
  { type: "GROUP", icon: "{ }", desc: "중첩 구조" },
];
