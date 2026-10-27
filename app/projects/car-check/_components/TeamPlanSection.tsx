import { teamRoles, teamRules } from "../_data/constants";

export const TeamPlanSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">팀 프로젝트로 한다면</h2>
      <p className="text-sm text-gray-600 mb-6">
        지금은 혼자 만들고 있지만, 팀으로 키운다면 역할을 어떻게 나누고 어떻게 관리할지 지금 구조를 기준으로 생각해 두었습니다.
      </p>

      {/* 역할 나누기 */}
      <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 mb-6">
        <p className="text-xs font-medium text-gray-500 mb-3">역할 나누기</p>
        <div className="grid md:grid-cols-2 gap-4">
          {teamRoles.map((item) => (
            <div key={item.role} className="bg-white rounded-lg border border-gray-200 p-4">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="font-bold text-gray-900">{item.role}</span>
                <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs font-mono rounded">{item.owns}</span>
              </div>
              <p className="text-xs font-medium text-gray-500 mb-1">다음 작업</p>
              <p className="text-sm text-gray-700">{item.next}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 관리 방식 */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <p className="text-xs font-medium text-gray-500 mb-3">어떻게 관리할까</p>
        <div className="grid md:grid-cols-2 gap-4">
          {teamRules.map((rule) => (
            <div key={rule.title} className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm font-medium text-gray-900 mb-1">
                <span className="text-[#191979] mr-1">→</span>
                {rule.title}
              </p>
              <p className="text-sm text-gray-600">{rule.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
