export const I18nSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">다국어 지원 (i18n)</h2>

      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <div className="mb-6">
          <h3 className="font-bold text-gray-900 text-lg mb-2">한/영/일 3개 언어 지원</h3>
          <p className="text-gray-600">
            네임스페이스 기반 번역 키 관리와 동적 언어 전환을 지원하는 i18n 시스템을 구축했습니다.
          </p>
        </div>

        {/* 지원 언어 */}
        <div className="flex justify-center gap-4 mb-6">
          <span className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm font-medium text-gray-700">한국어</span>
          <span className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm font-medium text-gray-700">English</span>
          <span className="px-3 py-1.5 bg-gray-100 rounded-lg text-sm font-medium text-gray-700">日本語</span>
        </div>

        {/* 코드 예시 */}
        <div className="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto">
          <div className="text-xs font-mono text-gray-100 space-y-1">
            <div className="text-gray-500">// useTranslations 훅 - 네임스페이스 기반 번역</div>
            <div>
              <span className="text-purple-400">const</span> {"{"} <span className="text-blue-300">t</span> {"}"} ={" "}
              <span className="text-yellow-300">useTranslations</span>(<span className="text-green-300">&apos;auth&apos;</span>);
            </div>
            <div className="mt-2"></div>
            <div className="text-gray-500">// 번역 키 사용</div>
            <div>
              <span className="text-blue-300">t</span>(<span className="text-green-300">&apos;login.title&apos;</span>)
              <span className="text-gray-500"> // → &quot;로그인&quot; | &quot;Login&quot; | &quot;ログイン&quot;</span>
            </div>
            <div>
              <span className="text-blue-300">t</span>(<span className="text-green-300">&apos;badge.submit&apos;</span>)
              <span className="text-gray-500"> // → &quot;제출하기&quot; | &quot;Submit&quot; | &quot;提出する&quot;</span>
            </div>
            <div className="mt-2"></div>
            <div className="text-gray-500">// API 호출 시 언어 코드 전달</div>
            <div>
              <span className="text-yellow-300">fetchApplications</span>({"{"}{" "}
              <span className="text-blue-300">langCd</span>: locale {"}"});
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-2">JSON 기반 번역 파일</h4>
            <div className="text-xs font-mono bg-gray-100 rounded p-3">
              <div className="text-gray-500">// locales/ko/auth.json</div>
              <div>{`{`}</div>
              <div className="pl-2">
                <span className="text-[#191979]">&quot;login&quot;</span>: {`{`}
              </div>
              <div className="pl-4">
                <span className="text-[#191979]">&quot;title&quot;</span>: <span className="text-green-600">&quot;로그인&quot;</span>,
              </div>
              <div className="pl-4">
                <span className="text-[#191979]">&quot;submit&quot;</span>: <span className="text-green-600">&quot;로그인&quot;</span>
              </div>
              <div className="pl-2">{`}`}</div>
              <div>{`}`}</div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-2">동적 언어 전환</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-gray-400">•</span>
                <span>URL 기반 언어 감지 (/ko, /en, /ja)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400">•</span>
                <span>언어 변경 시 페이지 새로고침 없이 전환</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400">•</span>
                <span>API 응답도 선택된 언어로 자동 처리</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
