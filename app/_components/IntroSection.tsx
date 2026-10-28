const headline = "문제를 먼저 알아차리고, 풀 수 있는 방법과 때를 찾아 함께 바꿔가는 4년차 프론트엔드 개발자입니다.";

const principles = [
  {
    title: "시기를 보고 제안합니다",
    desc: "지금 고치기 어려운 결제 API는 일정 안에서 공통 로직으로 오류부터 막고 근본 수정은 고도화로 넘겼습니다. 새로 시작한 어드민은 시작 단계에서 모노레포와 UI 가이드를 제안해 첫 행사 일정에 맞춰 오픈했습니다.",
  },
  {
    title: "근거를 정리해 함께 풉니다",
    desc: "결제 완료 처리를 서버로 옮기는 건 백엔드 팀에도 부담이 큰 변경이었습니다. 연결이 끊기는 케이스를 정리해 공유하며 함께 방법을 찾았고, 구조를 바꿔 결제 상태가 어긋나지 않게 했습니다.",
  },
  {
    title: "결과가 있는 코드를 만듭니다",
    desc: "깔끔한 코드만큼 결과로 이어지는 일을 중요하게 여깁니다. 아무리 좋은 코드도 서비스에서 쓰이지 않으면 코드 조각에 불과하다고 생각해, 좋은 코드에만 매달리지 않고 지금 무엇이 먼저인지를 놓치지 않습니다. 아토믹 디자인을 적용했다가 정리를 위한 정리에 시간이 들고 개발 속도가 느려졌던 경험 이후로 더 그렇게 일합니다.",
  },
];

const items = [
  {
    title: "성능 개선 (JSP → Next.js)",
    desc: "같은 플랫폼의 JSP 사이트 대비 Next.js 사이트의 Lighthouse 성능 점수 45 → 99, LCP 8.0s → 0.8s (데스크톱 기준). [O2MEET 마이그레이션]",
  },
  {
    title: "모노레포 설계",
    desc: "Turborepo + pnpm workspace로 사용자·어드민 두 앱이 컴포넌트·타입을 공유. 첫 행사 일정 안에 맞춰 오픈. [어드민시스템]",
  },
  {
    title: "AI 협업과 검증 규격화 (Claude Code)",
    desc: "AI가 만든 코드는 타입 체크와 Vitest 테스트 216개를 통과해야 반영하도록 규칙화, 결과는 CSV 리포트로 자동 정리. [어드민시스템]",
  },
  {
    title: "AI 서비스 설계 (Gemini · Claude Design)",
    desc: "AI는 도면 해석만, 수용인원 계산은 코드로 역할을 나눠 설계. Claude Design으로 프로토타입을 만들어 의료진과 방향 합의. [4J · HomeCare]",
  },
  {
    title: "팀의 중간에서 소통·조율",
    desc: "요구사항을 화면으로 정리해 윗선과 팀, 사업부서와 개발자를 잇는 역할을 맡아왔습니다. 결제 구조를 백엔드로 옮기는 개선을 근거를 정리해 제안했고, 인턴을 직접 맡아 관리했습니다. [스마트관광 · 어드민시스템]",
  },
  {
    title: "실서비스 운영",
    desc: "회원 1만+ 지자체 관광 플랫폼의 인증·결제 개발 [스마트관광], 연 2만+ 이용자 온라인 행사 플랫폼 운영 [O2MEET].",
  },
];

export const IntroSection = () => {
  return (
    <section id="intro" className="mb-16 scroll-mt-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
        소개
      </h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-4 font-medium">
        {headline}
      </p>
      <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 mb-8 space-y-3">
        {principles.map((p) => (
          <p key={p.title} className="text-sm text-gray-700 leading-relaxed">
            <span className="font-semibold text-[#191979]">{p.title}</span>
            <span className="text-gray-400"> · </span>
            {p.desc}
          </p>
        ))}
      </div>
      <div className="space-y-5">
        {items.map((item, i) => (
          <div key={item.title} className="flex items-start gap-4">
            <span className="text-[#191979] font-bold text-lg shrink-0">
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
