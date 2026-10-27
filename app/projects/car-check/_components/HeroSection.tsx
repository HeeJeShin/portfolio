import { projectInfo } from "../_data/constants";

export const HeroSection = () => {
  const { period, github, highlights } = projectInfo;

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
          <p>
            중고차를 처음 사는 사람은 어떤 차에 어떤 고질병이 있는지, 매장에서 무엇을 봐야 하는지 알기 어렵습니다.
            AI에게 물어보면 답은 나오지만, <strong className="text-gray-900">돈이 걸린 사실 정보를 그럴듯한 답에 맡길 수는 없다</strong>고 판단했습니다.
          </p>
          <p>
            그래서 고질병은 출처가 있어야만 <strong className="text-gray-900">&apos;검증됨&apos;</strong>이 되는 DB로 관리하고,
            AI는 &quot;무엇부터 알아볼지&quot;처럼 정답이 하나가 아닌 안내만 맡겼습니다.
          </p>
          <p>
            실무에서는 인프라가 갖춰진 환경에서 개발했다면, 이 프로젝트에서는 <strong className="text-gray-900">권한·심사 흐름부터 테스트·CI·배포 구성까지</strong> 직접 고르고 연결했습니다.
          </p>
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

      {/* 역할 나누기 */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
          <p className="text-xs text-gray-500 mb-1">고질병·점검법</p>
          <p className="text-sm font-medium text-gray-900">DB (사람이 검증)</p>
        </div>
        <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
          <p className="text-xs text-gray-500 mb-1">무엇부터 알아볼지</p>
          <p className="text-sm font-medium text-gray-900">AI 안내</p>
        </div>
        <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
          <p className="text-xs text-gray-500 mb-1">용도·예산별 추천</p>
          <p className="text-sm font-medium text-gray-900">AI → DB 연결</p>
        </div>
        <div className="bg-blue-50 rounded-lg p-3 border border-blue-100">
          <p className="text-xs text-gray-500 mb-1">AI 키가 없을 때</p>
          <p className="text-sm font-medium text-gray-900">핵심 기능 정상 동작</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mt-6">
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
