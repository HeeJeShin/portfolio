const headline = "초기 서비스 구축부터 경험해 본 개발자입니다. 지자체 스마트관광 플랫폼(인제·용인), 전시 부스 신청 어드민, 키즈카페 키오스크를 처음부터 만들었고, 4년간 전시·행사 플랫폼을 개발·운영했습니다. 만드는 데서 그치지 않고 성능과 품질도 놓치지 않았습니다. JSP 레거시를 Next.js로 전환해 Lighthouse 성능 점수를 45에서 99로, LCP를 8.0초에서 0.8초로 개선했고, 모노레포·타입 선행 설계·Vitest 테스트(216개)로 유지보수하기 좋은 구조를 만들었습니다.";

const items = [
  {
    title: "성능 개선 (JSP → Next.js)",
    desc: "같은 플랫폼의 JSP 사이트 대비 Next.js 사이트의 Lighthouse 성능 점수 45 → 99, LCP 8.0s → 0.8s (데스크톱 기준). [O2MEET 마이그레이션]",
  },
  {
    title: "모노레포 설계",
    desc: "Turborepo + pnpm workspace로 사용자·어드민 두 앱이 컴포넌트·타입을 공유. 두 앱을 각각 만드는 방식 대비 기간 약 50% 단축(추정). [어드민시스템]",
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
      <p className="text-base text-gray-600 leading-relaxed mb-8">
        반복되는 일은 기준을 세워 공통화합니다. 사람마다 달랐던 AI 코드 검증도 규칙으로 정리했고, AI에는 해석과 안내를, 정답이 필요한 계산과 데이터는 코드에 맡깁니다. 요청이 들어오면 &quot;요청한 내용&quot;보다 &quot;요청하는 이유&quot;에 집중하고, 디자이너가 없는 프로젝트에서는 UI 가이드를 먼저 만들어 사업부서와 기준을 합의했습니다. 현재는 사이드 프로젝트로 NestJS와 AI를 연동한 서비스를 만들며 백엔드까지 경험을 넓히고 있습니다.
      </p>
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
