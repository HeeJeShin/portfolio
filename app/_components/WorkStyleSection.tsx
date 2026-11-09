const workStyles = [
  {
    title: "가장 잘하는 방법으로 설명하고 설득합니다",
    desc: "제가 가장 잘하는 것은 화면을 만드는 일이라, 기술 용어로 기준을 맞추기 어려울 때는 상황에 맞게 화면으로 보여주며 대화합니다. 어드민에서는 UI 가이드 화면을, HomeCare에서는 Claude Design으로 만든 프로토타입을 먼저 보여주며 \"요청한 내용\"보다 \"요청하는 이유\"를 확인했습니다.",
  },
  {
    title: "AI가 만든 코드는 검증 방법까지 정해 둡니다",
    desc: "앱 2개와 shared 패키지로 된 어드민 모노레포에 Vitest 테스트 216개를 두고 CLAUDE.md에 실행 방법을 공유해, 누가 Claude Code로 만든 코드든 같은 방식으로 검증하고 결과는 CSV 리포트로 남겼습니다.",
  },
  {
    title: "다음 사람이 바로 읽는 구조를 먼저 정합니다",
    desc: "스마트관광에서 네이밍과 폴더 구조를 문서로 정해 프론트엔드 3명이 서로의 화면을 바로 찾아 고칠 수 있게 했고, 인턴과 후배에게 디버깅과 코드 읽는 기준을 알려줬습니다.",
  },
];

export const WorkStyleSection = () => {
  return (
    <section id="intro" className="mb-16 scroll-mt-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
        소개
      </h2>
      <div className="space-y-4">
        {workStyles.map((item) => (
          <div key={item.title} className="bg-white rounded-xl border border-gray-200 p-5">
            <h3 className="text-lg font-bold text-gray-900 mb-1 break-keep">{item.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed break-keep">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
