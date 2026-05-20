export const TypeScriptSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">TypeScript 타입 시스템 설계</h2>

      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <div className="mb-6">
          <h3 className="font-bold text-gray-900 text-lg mb-2">타입 정의 선행 개발</h3>
          <p className="text-gray-600">
            API 응답 및 도메인 모델 <strong className="text-gray-900">타입 정의부터 선행</strong> 후 개발을 진행하여
            런타임 에러를 90% 감소시켰습니다.
          </p>
        </div>

        {/* 코드 예시 */}
        <div className="bg-gray-900 rounded-lg p-4 mb-6 overflow-x-auto">
          <div className="text-xs font-mono text-gray-100 space-y-1">
            <div className="text-gray-500">// 공통 타입 확장 패턴</div>
            <div>
              <span className="text-purple-400">interface</span>{" "}
              <span className="text-yellow-300">SiteInfoType</span> {"{"}
            </div>
            <div className="pl-4">
              <span className="text-blue-300">siteId</span>: <span className="text-orange-300">string</span>;
            </div>
            <div className="pl-4">
              <span className="text-blue-300">siteName</span>: <span className="text-orange-300">string</span>;
            </div>
            <div>{"}"}</div>
            <div className="mt-2"></div>
            <div className="text-gray-500">// Request/Response 타입 분리</div>
            <div>
              <span className="text-purple-400">interface</span>{" "}
              <span className="text-yellow-300">ApplicationRequest</span>{" "}
              <span className="text-purple-400">extends</span>{" "}
              <span className="text-yellow-300">SiteInfoType</span> {"{"}
            </div>
            <div className="pl-4">
              <span className="text-blue-300">companyName</span>: <span className="text-orange-300">string</span>;
            </div>
            <div className="pl-4">
              <span className="text-blue-300">boothType</span>: <span className="text-orange-300">BoothType</span>;
            </div>
            <div>{"}"}</div>
            <div className="mt-2"></div>
            <div className="text-gray-500">// Generic 활용한 API 응답 래퍼</div>
            <div>
              <span className="text-purple-400">interface</span>{" "}
              <span className="text-yellow-300">{"ApiResponse<T>"}</span> {"{"}
            </div>
            <div className="pl-4">
              <span className="text-blue-300">code</span>: <span className="text-orange-300">number</span>;
            </div>
            <div className="pl-4">
              <span className="text-blue-300">data</span>: <span className="text-orange-300">T</span>;
            </div>
            <div className="pl-4">
              <span className="text-blue-300">message</span>: <span className="text-orange-300">string</span>;
            </div>
            <div>{"}"}</div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 text-center">
            <p className="text-2xl font-bold text-gray-900 mb-1">40개</p>
            <p className="text-sm text-gray-600">타입 정의</p>
            <p className="text-xs text-gray-500 mt-1">API 연동 시 타입 에러 사전 차단</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 text-center">
            <p className="text-2xl font-bold text-gray-900 mb-1">Zod</p>
            <p className="text-sm text-gray-600">런타임 유효성 검증</p>
            <p className="text-xs text-gray-500 mt-1">스키마 기반 데이터 검증</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 text-center">
            <p className="text-2xl font-bold text-gray-900 mb-1">90%↓</p>
            <p className="text-sm text-gray-600">런타임 에러 감소</p>
            <p className="text-xs text-gray-500 mt-1">QA 피드백 기준</p>
          </div>
        </div>
      </div>
    </section>
  );
};
