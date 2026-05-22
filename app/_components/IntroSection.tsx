const headline = "비즈니스 도메인에 대한 통찰과 AI 활용 능력을 무기로, 빠르고 정확하게 실질적인 결과물을 만들어내는 개발자입니다.";

const items = [
  {
    title: "AI 프롬프트 설계",
    desc: "Google Gemini AI 연동, 도면 분석용 프롬프트 설계 및 응답 파싱 구현. [4J - AI Boost Challenge]",
  },
  {
    title: "AI 협업 개발 (Claude Code)",
    desc: "Claude Code 실무 활용, AI 협업으로 개발 생산성 향상. 설계 검토, 테스트 케이스 도출, 문서화까지 적용. [어드민시스템]",
  },
  {
    title: "모노레포 구조 설계",
    desc: "Turborepo + pnpm workspace로 개발 속도 50% 단축. [어드민시스템]",
  },
  {
    title: "AI 에이전트(Claude Code) 연동으로 테스트 워크플로우 자동화",
    desc: "Vitest 기반 자동 문서화로 수동 대비 80% 시간 절감. [어드민시스템]",
  },
  {
    title: "타입 시스템 도입",
    desc: "TypeScript 선행 도입으로 런타임 에러 90% 감소. [어드민시스템]",
  },
  {
    title: "회원 1만+ 관광 플랫폼",
    desc: "인증/결제 시스템 전담 개발. [스마트관광]",
  },
  {
    title: "연 2만+ 이용자 플랫폼",
    desc: "온라인 전시/컨퍼런스 플랫폼 유지보수. [O2MEET]",
  },
];

export const IntroSection = () => {
  return (
    <section id="intro" className="mb-16 scroll-mt-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
        소개
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-8 font-medium">
        {headline}
      </p>
      <div className="space-y-5">
        {items.map((item, i) => (
          <div key={item.title} className="flex items-start gap-4">
            <span className="text-blue-600 font-bold text-lg shrink-0">
              0{i + 1}
            </span>
            <div>
              <p className="font-semibold text-gray-900 mb-1">{item.title}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
