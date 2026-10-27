import { projectInfo, dataScale, dataScaleNote } from "../_data/constants";

export const HeroSection = () => {
  const { period, demo, github, highlights } = projectInfo;

  return (
    <section className="mb-16">
      <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-3 mb-4">
        <span className="px-3 py-1 border border-gray-300 text-gray-700 rounded-full text-sm font-medium w-fit">
          {period}
        </span>
        <span className="hidden md:inline text-gray-400">|</span>
        <span className="text-gray-600 text-sm">사이드 프로젝트 · NestJS + Next.js + AI</span>
      </div>
      <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
        중고차 구매 가이드
      </h1>
      <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
        차종과 연식을 넣으면 <strong className="text-gray-900">중고차를 살 때 확인할 고질병과 매장 점검 포인트</strong>를 알려주는 서비스.
        <br />
        사실 정보는 <strong className="text-gray-900">사람이 검증한 DB</strong>로, 안내·추천은 <strong className="text-gray-900">AI</strong>로 역할을 나눴습니다.
      </p>

      {/* 프로젝트 배경 */}
      <div className="mt-8 bg-gray-50 rounded-xl p-6 border border-gray-200">
        <h3 className="font-bold text-gray-900 mb-3">
          프로젝트 배경
        </h3>
        <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
          <p className="text-base text-gray-900">
            <strong>직접 겪을 문제에서 출발했습니다.</strong> 면허를 따고 차를 사려던 참에, 중고차 고질병 정보가 유튜브·네이버 카페에 차주 경험담으로 흩어져 있다는 걸 알게 됐습니다.
          </p>
          <p>
            돈이 걸린 사실 정보라 AI의 그럴듯한 답에 맡기지 않고, 출처가 있어야만 <strong className="text-gray-900">&apos;검증됨&apos;</strong>이 되는 DB로 관리합니다.
            AI는 &quot;무엇부터 알아볼지&quot;처럼 정답이 하나가 아닌 안내만 맡습니다.
          </p>
          <p>
            실무 4년은 프론트엔드였고 서버·DB·배포는 다른 팀이 맡았습니다. 그 빈 곳을 <strong className="text-gray-900">이 서비스에 필요한 순서대로 직접 만들며</strong> 메우고 있습니다.
          </p>
          <p>
            최종 목표는 차주들이 경험을 나누는 <strong className="text-gray-900">커뮤니티</strong>, 그리고 매장에서 <strong className="text-gray-900">휴대폰 하나로 &quot;어디서 무엇을 확인해야 하지?&quot;</strong>를 바로 아는 것입니다.
          </p>
          <details className="group">
            <summary className="cursor-pointer text-xs text-gray-500 hover:text-gray-700">주제를 정한 과정 더 보기</summary>
            <p className="mt-2">
              너무 어려운 주제보다 지금 당장 내가 가장 관심 있고 필요한 것을 하기로 했습니다.
              &quot;지금 내가 무슨 고민을 하고 있지?&quot;, &quot;중고차를 사러 갈 때 가장 걱정되는 게 뭐지?&quot;에서 출발하니,
              첫 과제가 흩어진 정보를 차종·연식별로 모아 한곳에서 보여주는 것이라는 게 분명해졌습니다.
            </p>
          </details>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {highlights.map((highlight) => (
            <span
              key={highlight}
              className="px-2 py-1 bg-blue-100 text-[#191979] text-xs rounded-full font-medium"
            >
              {highlight}
            </span>
          ))}
        </div>
      </div>

      {/* 데이터 규모 */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-3">
        {dataScale.map((item) => (
          <div key={item.label} className="bg-blue-50 rounded-lg p-3 border border-blue-100">
            <p className="text-xs text-gray-500 mb-1">{item.label}</p>
            <p className="text-lg font-bold text-gray-900">{item.value}</p>
          </div>
        ))}
      </div>
      <p className="mt-2 text-xs text-gray-500">{dataScaleNote}</p>

      <div className="flex flex-wrap gap-3 mt-6">
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#191979] text-white rounded-lg hover:bg-[#191979]/90 transition-colors text-sm font-medium"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          서비스 보기
        </a>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          GitHub
        </a>
      </div>
    </section>
  );
};
