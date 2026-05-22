// 기술 스택
export const techStack = [
  "Next.js 16",
  "TypeScript",
  "Tailwind CSS 4",
  "Material UI",
  "Google Gemini AI",
  "pnpm",
  "Vercel",
];

// 행사장 유형별 면적 데이터
export const venueTypes = [
  { type: "스탠딩", density: "2.0명/㎡", area: "0.5㎡/인", desc: "콘서트, 페스티벌" },
  { type: "연회형", density: "0.7명/㎡", area: "1.5㎡/인", desc: "연회, 만찬" },
  { type: "극장형", density: "1.2명/㎡", area: "0.8㎡/인", desc: "세미나, 발표회" },
  { type: "교실형", density: "0.5명/㎡", area: "2.0㎡/인", desc: "강의, 워크샵" },
];

// 혼잡도 레벨 데이터
export const congestionLevels = [
  { level: 1, label: "쾌적", ratio: "30%", color: "bg-green-500", textColor: "text-green-600" },
  { level: 2, label: "여유", ratio: "50%", color: "bg-blue-500", textColor: "text-[#191979]" },
  { level: 3, label: "혼잡", ratio: "70%", color: "bg-yellow-500", textColor: "text-yellow-600" },
  { level: 4, label: "매우혼잡", ratio: "90%", color: "bg-orange-500", textColor: "text-orange-600" },
  { level: 5, label: "위험", ratio: "110%", color: "bg-red-500", textColor: "text-red-600" },
];

// 주요 기능
export const features = [
  {
    icon: "📐",
    title: "수용인원 자동 계산",
    desc: "행사장 유형과 면적을 입력하면 법적 기준에 따라 수용인원을 자동으로 계산합니다.",
  },
  {
    icon: "🤖",
    title: "AI 도면 분석",
    desc: "Google Gemini AI가 도면 이미지를 분석하여 면적, 출입구 수, 부스 개수를 추출합니다.",
  },
  {
    icon: "📊",
    title: "혼잡도 모니터링 (시뮬레이션)",
    desc: "인원 데이터가 수집된다는 가정 하에 혼잡도 레벨을 시각화하는 대시보드입니다.",
  },
];
