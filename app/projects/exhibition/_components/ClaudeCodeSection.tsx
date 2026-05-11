export const ClaudeCodeSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">AI 활용 개발</h2>
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-6 text-white">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
            <span className="text-xl">🤖</span>
          </div>
          <div>
            <h3 className="font-bold">AI 페어 프로그래밍</h3>
            <p className="text-sm text-gray-400">CLAUDE.md 기반 컨텍스트 공유로 일관된 코드 품질 유지</p>
          </div>
        </div>

        {/* AI 활용 방식 설명 */}
        <div className="bg-white/5 rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-300 leading-relaxed">
            프로젝트 컨벤션, 코드 스타일, API 패턴을 <strong className="text-white">CLAUDE.md</strong>에 정의하여
            AI가 프로젝트 맥락을 이해하고 일관된 코드를 생성하도록 구성했습니다.
            단순 코드 생성이 아닌 <strong className="text-white">설계 의도를 반영한 구현</strong>이 가능합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            { label: "복잡한 컴포넌트 구현", value: "3일 → 1일", desc: "DynamicForm, DataTable 등" },
            { label: "CRUD 페이지 생성", value: "75% 시간 절감", desc: "보일러플레이트 자동화" },
            { label: "테스트 케이스 작성", value: "90% 단축", desc: "Vitest + Testing Library" },
            { label: "QA 커뮤니케이션", value: "50% 절감", desc: "테스트 문서 자동 생성" },
          ].map((item) => (
            <div key={item.label} className="bg-white/5 rounded-lg p-4">
              <p className="text-sm text-gray-300 mb-1">{item.label}</p>
              <p className="text-xl font-bold">{item.value}</p>
              <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
