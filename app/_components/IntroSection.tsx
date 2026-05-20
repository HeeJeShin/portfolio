const headline = "비즈니스 도메인에 대한 통찰과 AI 활용 능력을 무기로, 빠르고 정확하게 실질적인 결과물을 만들어내는 개발자입니다.";

const items = [
  {
    title: "협업과 커뮤니케이션에 강점이 있습니다.",
    desc: "개발팀 내에서는 추후 팀원 추가나 담당자 변경을 고려해 README 문서화, 화면 가이드 작성을 습관처럼 해왔습니다. 사업부서와 소통할 때는 화면 가이드를 직접 보여주거나 예시 화면을 만들어 공유하며 의사소통했습니다.",
  },
  {
    title: "도메인에 대한 이해를 중요하게 여깁니다.",
    desc: "첫 회사부터 낯선 도메인(전시/행사) 환경에서 개발을 시작했습니다. 연차가 쌓이며 도메인을 이해하게 되니 제가 먼저 UI나 기능을 제안할 수 있게 되었고, 그로 인해 서로 단절되어있던 개발부 사업부서가 서로 신뢰하며 일할 수 있는 환경을 만드는데 기여했습니다.",
  },
  {
    title: "어려운 일을 해결하는 사람보다 일을 모두에게 쉽게 만드는 사람이 되려고 노력합니다.",
    desc: "여러 프로젝트를 진행하다 보니 세세하게 정리하면 오히려 전달해야 하는 문서가 늘어나고, 명시적으로 단순하게 분리하는 것이 장기적으로 프로젝트가 잘 관리되는 것을 느꼈습니다. 새로 합류하는 사람이 일을 시작하는 것 자체가 어렵지 않도록, 구조를 단순하게 유지하려고 노력합니다.",
  },
  {
    title: "AI를 적극 활용하되, 검증을 중요하게 생각합니다.",
    desc: "Claude Code를 일상적인 개발 파트너로 활용하며, 코드 생성을 넘어 설계 검토, 테스트 케이스 도출, 문서화까지 적용하고 있습니다. 다만 AI 결과물을 그대로 쓰지 않고, 항상 검증 과정을 거칩니다.",
  },
  {
    title: "앞으로는 더 유저 친화적인 방향으로 가고 싶습니다.",
    desc: "AI가 발전하면서 업무 속도가 비교할 수 없는 수준까지 되었지만, 사용자가 무엇을 원하는지는 AI가 대신하기 어렵다고 생각합니다. 사람으로서 사용자를 이해하고, 개발자로서 AI를 도구로 활용하고 검증하면서, 프론트엔드 개발자의 역할을 넓혀가고 싶습니다.",
  },
  {
    title: "Next.js 기반 웹 애플리케이션 개발",
    desc: "현재는 Next.js + TypeScript 기반 웹 애플리케이션 개발을 주로 담당하며, 비즈니스 요구사항을 기술적으로 구현하고 있습니다.",
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
