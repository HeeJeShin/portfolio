export const ClaudeCodeSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">AI 활용 개발</h2>
      <div className="bg-gray-900 rounded-xl p-6 text-white">
        <div className="mb-4">
          <h3 className="font-bold text-lg">AI 페어 프로그래밍</h3>
          <p className="text-sm text-gray-400">CLAUDE.md에 테스트 실행 방법을 공유해 같은 기준으로 검증</p>
        </div>

        {/* AI 활용 방식 설명 */}
        <div className="bg-white/5 rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-300 leading-relaxed">
            팀원 모두 Claude Code를 쓰기 때문에, 코드 규칙보다 <strong className="text-white">테스트를 어떻게 돌리고 결과를 어떻게 확인하는지</strong>를
            <strong className="text-white">CLAUDE.md</strong>에 정리해 공유했습니다. 누가 AI로 코드를 만들든 같은 방식으로 테스트를 돌리고,
            결과는 CSV 리포트로 확인합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            { label: "복잡한 컴포넌트 구현", value: "구조를 먼저 잡고 빠르게", desc: "DynamicForm, DataTable 등" },
            { label: "CRUD 페이지 생성", value: "반복 코드 자동화", desc: "같은 패턴은 규칙대로 생성" },
            { label: "테스트 케이스 작성", value: "피드백 주기 단축", desc: "Vitest 결과를 CSV로 바로 공유" },
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
