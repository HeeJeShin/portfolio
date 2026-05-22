import { claudeDesignFlow, screens } from "../_data/constants";

export const ClaudeDesignSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Claude Design → Claude Code 워크플로우
      </h2>

      {/* 워크플로우 다이어그램 */}
      <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 mb-8">
        <div className="grid md:grid-cols-4 gap-4">
          {claudeDesignFlow.map((item, idx) => (
            <div key={item.step} className="relative">
              <div className="bg-white rounded-lg p-4 border border-gray-200 h-full">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-6 h-6 rounded-full bg-[#191979] text-white text-xs font-bold flex items-center justify-center">
                    {item.step}
                  </span>
                  <span className="text-sm font-semibold text-gray-900">{item.title}</span>
                </div>
                <p className="text-xs text-gray-600 mb-3">{item.desc}</p>
                <div className="text-xs bg-gray-50 rounded p-2 text-gray-700">
                  <span className="text-gray-500">Output: </span>
                  {item.output}
                </div>
              </div>
              {idx < claudeDesignFlow.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-gray-300">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 핸드오프 번들 구조 */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8">
        <h3 className="font-bold text-gray-900 mb-4">핸드오프 번들 구조</h3>
        <div className="text-xs font-mono bg-gray-900 text-gray-100 rounded p-4 overflow-x-auto">
          <div className="text-gray-500">// Claude Design 핸드오프 패키지</div>
          <div>
            <span className="text-purple-400">homecare/</span>
          </div>
          <div className="pl-4">
            <span className="text-blue-300">├── README.md</span>
            <span className="text-gray-500 ml-4"># 코딩 에이전트 가이드</span>
          </div>
          <div className="pl-4">
            <span className="text-blue-300">├── chats/</span>
            <span className="text-gray-500 ml-4"># 디자인 의도가 담긴 대화 기록</span>
          </div>
          <div className="pl-8">
            <span className="text-green-300">└── chat1.md</span>
            <span className="text-gray-500 ml-4"># 요구사항 → 디자인 결정 과정</span>
          </div>
          <div className="pl-4">
            <span className="text-blue-300">└── project/</span>
            <span className="text-gray-500 ml-4"># HTML 프로토타입</span>
          </div>
          <div className="pl-8">
            <span className="text-yellow-300">├── HomeCare.html</span>
            <span className="text-gray-500 ml-4"># 메인 진입점</span>
          </div>
          <div className="pl-8">
            <span className="text-yellow-300">├── HomeCare-spec.html</span>
            <span className="text-gray-500 ml-4"># 기술 명세서</span>
          </div>
          <div className="pl-8">
            <span className="text-blue-300">└── src/</span>
            <span className="text-gray-500 ml-4"># JSX 컴포넌트</span>
          </div>
          <div className="pl-12">
            <span className="text-orange-300">├── state.jsx</span>
            <span className="text-gray-500 ml-4"># 상태 관리</span>
          </div>
          <div className="pl-12">
            <span className="text-orange-300">├── screens-setup.jsx</span>
            <span className="text-gray-500 ml-4"># 설정 화면</span>
          </div>
          <div className="pl-12">
            <span className="text-orange-300">└── ...</span>
            <span className="text-gray-500 ml-4"># 기타 화면들</span>
          </div>
        </div>
      </div>

      {/* 구현된 화면 목록 */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-bold text-gray-900 mb-4">구현된 8개 화면</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {screens.map((screen) => (
            <div key={screen.id} className="bg-gray-50 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-5 h-5 rounded bg-[#191979] text-white text-[10px] font-mono flex items-center justify-center">
                  {screen.id.slice(0, 2).toUpperCase()}
                </span>
                <span className="text-sm font-medium text-gray-900">{screen.name}</span>
              </div>
              <p className="text-xs text-gray-500">{screen.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
