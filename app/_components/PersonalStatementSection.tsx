const sections = [
  {
    title: "개발의 방향",
    content: [
      {
        text: '처음에는 "코드를 깔끔하게 정리해야 한다"는 생각이 강했습니다. 아토믹 디자인 패턴에 관심을 갖고, 컴포넌트를 원자 단위로 쪼개서 조합하는 방식을 적용해봤습니다.',
      },
      {
        text: "의도는 좋았지만 문제가 생겼습니다. 정리를 위한 정리에 시간이 너무 소요되었고, 중간에 합류한 개발자를 이해시키기 어려웠습니다. 지켜야 할 약속이 많아질수록 오히려 개발 속도가 느려졌습니다.",
      },
      {
        text: "옷장에 비유하면 이렇습니다. 칸을 너무 세밀하게 나눠서 정리하면, 정리한 사람은 금방 찾을 수 있습니다. 하지만 가족들은 겉옷, 바지를 어디에 둬야 할지 매번 물어봐야 합니다. 차라리 \"여긴 누구 옷장, 저긴 누구 옷장\" 정도로만 구분하면, 각자 알아서 정리하고 외워야 할 것도 없어서 오히려 정리가 잘 됩니다.",
      },
      {
        text: "정리 자체가 목적이 되면 안 된다. 정리는 \"나\"를 위한 것이 아니라 \"함께 일하는 사람\"을 위한 것이어야 합니다.",
        highlight: true,
      },
    ],
  },
  {
    title: "커뮤니케이션",
    content: [
      {
        text: "도메인에 대한 이해를 바탕으로 UI를 먼저 제안하며 일해왔습니다.",
        highlight: true,
      },
      {
        text: "물론 도메인 특성상 퍼블리싱보다 기능이 더 중요해서 가능한 일이기도 했습니다. 하지만 부서별 할 일을 구분하는 것보다, 기술적으로나 UI적으로 더 나은 방향을 개발자로서 제안하는 게 일을 잘 마무리하는 방법이라고 생각합니다.",
      },
      {
        text: '요청이 들어오면 "무엇을"보다 "왜"에 집중합니다. 요청 배경을 이해하면 더 나은 방향을 함께 찾을 수 있기 때문입니다.',
      },
      {
        text: "이런 방식으로 일하니 불필요한 회의와 수정 요청이 줄었고, 원하는 결과물에 더 빠르게 도달할 수 있었습니다.",
      },
    ],
  },
  {
    title: "문제 해결 방식",
    content: [
      {
        text: '"어려운 일을 해결하는 사람"보다 "일을 쉽게 만드는 사람"이 되고 싶습니다.',
        highlight: true,
      },
      {
        text: "전시부스 신청 관리 시스템을 개발할 때, 디자인 시안이 없었습니다. 저는 도메인에 대한 이해를 바탕으로 UI/UX에 대한 의견을 적극적으로 냈습니다. AI를 활용해 아이디어를 빠르게 화면으로 구현하고, 사업부서와 함께 방향을 맞춰나갔습니다.",
      },
      {
        text: "스마트관광 프로젝트에서는 결제 로직을 백엔드로 분리하자고 제안했습니다. 프론트엔드에서 처리하면 상태 관리가 복잡해지는 문제가 있었고, 백엔드에서 처리하는 것이 전체 시스템 관점에서 더 단순했기 때문입니다.",
      },
      {
        text: "같은 프로젝트에서 Safari 브라우저 호환성 이슈도 해결했습니다. NICE 본인인증 팝업이 차단되는 문제는 리다이렉트 방식으로 전환하고, ITP로 인한 토큰 유실은 쿠키와 localStorage 이중 저장으로 해결했습니다. 문제가 발생하면 원인을 추적하고, 브라우저별 동작 차이를 분석해 해결책을 찾습니다.",
      },
      {
        text: "복잡하게 해결하면 나만 이해하는 코드가 되고, 단순하게 만들면 팀 전체가 빠르게 움직일 수 있습니다. 모든 것을 아는 사람은 아닙니다. 실수도 하고 틀리기도 하지만, 피드백을 받아들이며 늘 개선하고 나아갑니다.",
        highlight: true,
      },
    ],
  },
  {
    title: "앞으로의 방향",
    content: [
      {
        text: "코딩은 결국 컴퓨터와의 소통입니다. AI가 발전하면서 이 소통은 점점 AI가 대신할 수 있게 되며 업무속도가 비교할 수 없는 수준까지 되었습니다.",
      },
      {
        text: "저는 그래서 프론트엔드 개발자는 더 유저 친화적인 방향으로 가야 한다고 생각합니다.",
      },
      {
        text: "사람을 이해할 수 있는 건 결국 사람입니다. 사용자가 무엇을 원하는지, 어떤 흐름이 자연스러운지, 어떤 화면이 편한지. 이런 판단은 AI가 대신하기 어렵습니다.",
      },
      {
        text: "저는 사람으로서 사용자를 이해하고, 개발자로서 AI를 도구로 활용하고 검증하는데 사용하면서, 프론트엔드 개발자의 역할을 넓혀가고 싶습니다.",
        highlight: true,
      },
    ],
  },
];

export const PersonalStatementSection = () => {
  return (
    <section id="personal-statement" className="mb-16 scroll-mt-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
        자기소개서
      </h2>

      <div className="space-y-8">
        {sections.map((section) => (
          <div key={section.title} className="rounded-xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
              {section.title}
            </h3>
            <div className="space-y-3">
              {section.content.map((item, idx) => (
                <p
                  key={idx}
                  className={`text-sm leading-relaxed ${
                    item.highlight
                      ? "font-semibold text-blue-700 bg-white/60 rounded-lg px-3 py-2"
                      : "text-gray-700"
                  }`}
                >
                  {item.text}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
