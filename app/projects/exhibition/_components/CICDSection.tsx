export const CICDSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">GitLab CI/CD 파이프라인</h2>

      <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
        <div className="mb-6">
          <h3 className="font-bold text-gray-900 text-lg mb-2">태그 기반 자동 배포</h3>
          <p className="text-gray-600">
            기존 사내 CI/CD 인프라(Harbor, ArgoCD)에 프로젝트를 연동하고,
            태그 패턴에 따라 자동 배포되도록 설정했습니다.
          </p>
        </div>

        {/* 파이프라인 다이어그램 */}
        <div className="bg-white rounded-lg p-6 border border-gray-200 mb-6">
          <div className="flex items-center justify-between gap-2 overflow-x-auto pb-2">
            <span className="px-3 py-2 bg-gray-100 rounded-lg text-xs font-medium text-gray-700 whitespace-nowrap">Git Tag Push</span>
            <span className="text-gray-300">→</span>
            <span className="px-3 py-2 bg-gray-100 rounded-lg text-xs font-medium text-gray-700 whitespace-nowrap">GitLab CI</span>
            <span className="text-gray-300">→</span>
            <span className="px-3 py-2 bg-gray-100 rounded-lg text-xs font-medium text-gray-700 whitespace-nowrap">Docker Build</span>
            <span className="text-gray-300">→</span>
            <span className="px-3 py-2 bg-gray-100 rounded-lg text-xs font-medium text-gray-700 whitespace-nowrap">Harbor Push</span>
            <span className="text-gray-300">→</span>
            <span className="px-3 py-2 bg-gray-100 rounded-lg text-xs font-medium text-gray-700 whitespace-nowrap">ArgoCD Deploy</span>
          </div>
        </div>

        {/* 태그 패턴 */}
        <div className="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto">
          <div className="text-xs text-gray-400 mb-3"># .gitlab-ci.yml - 태그 기반 배포 패턴</div>
          <div className="text-xs font-mono text-gray-100 space-y-2">
            <div className="flex items-center gap-4">
              <code className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded">dev-user-*</code>
              <span className="text-gray-400">→ User 앱 개발 서버 배포</span>
            </div>
            <div className="flex items-center gap-4">
              <code className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded">dev-admin-*</code>
              <span className="text-gray-400">→ Admin 앱 개발 서버 배포</span>
            </div>
            <div className="flex items-center gap-4">
              <code className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded">dev-all-*</code>
              <span className="text-gray-400">→ User + Admin 동시 배포</span>
            </div>
            <div className="flex items-center gap-4">
              <code className="px-2 py-1 bg-green-500/20 text-green-300 rounded">prod-*</code>
              <span className="text-gray-400">→ 운영 서버 배포</span>
            </div>
          </div>
        </div>

        {/* 장점 */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-2">독립 배포</h4>
            <p className="text-sm text-gray-600">
              User/Admin 앱을 각각 독립적으로 배포하거나, 동시에 배포할 수 있어 <strong>배포 유연성</strong> 확보
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-2">자동화된 워크플로우</h4>
            <p className="text-sm text-gray-600">
              태그만 푸시하면 빌드 → 이미지 생성 → 배포까지 <strong>전 과정 자동화</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
