const items = [
  {
    title: "무언가를 만드는 것을 좋아합니다.",
    desc: "요리사, 바리스타를 거쳐 개발자가 된 것도 ‘내 손으로 무언가를 만들고 싶다’는 생각에서 시작되었습니다.",
  },
  {
    title: "AI를 도구로 적극 활용합니다.",
    desc: "Claude Code를 일상적인 개발 파트너로 활용하며, 설계 검토, 테스트 케이스 도출, 리팩토링, 문서화까지 폭넓게 적용하고 있습니다.",
  },
  {
    title: "도메인을 이해하려는 노력을 중요하게 생각합니다.",
    desc: "덕분에 디자인 리소스가 부족하거나 요구사항이 급변하는 상황에서도 유연하게 대처할 수 있었습니다.",
  },
];

export const IntroSection = () => {
  return (
    <section id="intro" className="mb-16 scroll-mt-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
        소개
      </h2>
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
