export const CICDSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">GitLab CI/CD 파이프라인</h2>

      <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <span className="text-white font-bold text-sm">CI</span>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-lg mb-1">태그 기반 자동 배포</h3>
            <p className="text-gray-600">
              기존 사내 CI/CD 인프라(Harbor, ArgoCD)에 프로젝트를 연동하고,
              태그 패턴에 따라 자동 배포되도록 설정했습니다.
            </p>
          </div>
        </div>

        {/* 파이프라인 다이어그램 */}
        <div className="bg-white rounded-lg p-6 border border-blue-100 mb-6">
          <div className="flex items-center justify-between gap-4 overflow-x-auto pb-2">
            {/* Git Push */}
            <div className="flex flex-col items-center min-w-[80px]">
              <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center mb-2">
                <span className="text-white text-lg">📤</span>
              </div>
              <span className="text-xs text-gray-600 text-center">Git Tag Push</span>
            </div>

            <div className="text-gray-300 text-2xl">→</div>

            {/* GitLab CI */}
            <div className="flex flex-col items-center min-w-[80px]">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-2">
                <span className="text-white font-bold text-sm">GL</span>
              </div>
              <span className="text-xs text-gray-600 text-center">GitLab CI</span>
            </div>

            <div className="text-gray-300 text-2xl">→</div>

            {/* Docker Build */}
            <div className="flex flex-col items-center min-w-[80px]">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-2">
                <span className="text-white text-lg">🐳</span>
              </div>
              <span className="text-xs text-gray-600 text-center">Docker Build</span>
            </div>

            <div className="text-gray-300 text-2xl">→</div>

            {/* Harbor */}
            <div className="flex flex-col items-center min-w-[80px]">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-2">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="text-xs text-gray-600 text-center">Harbor Push</span>
            </div>

            <div className="text-gray-300 text-2xl">→</div>

            {/* ArgoCD */}
            <div className="flex flex-col items-center min-w-[80px]">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-2">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xs text-gray-600 text-center">ArgoCD Deploy</span>
            </div>
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
          <div className="bg-white rounded-lg p-4 border border-blue-100">
            <h4 className="font-bold text-gray-900 mb-2">독립 배포</h4>
            <p className="text-sm text-gray-600">
              User/Admin 앱을 각각 독립적으로 배포하거나, 동시에 배포할 수 있어 <strong>배포 유연성</strong> 확보
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-blue-100">
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
