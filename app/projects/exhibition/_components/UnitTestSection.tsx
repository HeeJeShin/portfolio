export const UnitTestSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">단위테스트 루틴</h2>
      <div className="bg-gray-50 rounded-xl p-6">
        <p className="text-gray-600 mb-6">
          QA팀 없이 개발자가 직접 품질을 보장해야 하는 환경에서,
          <strong className="text-gray-900"> 테스트 문서화 → 구현 → 자동화</strong>의 루틴을 구축했습니다.
        </p>

        {/* Vitest 소개 섹션 */}
        <VitestSection />

        {/* 테스트 플로우 */}
        <div className="flex flex-col md:flex-row items-stretch gap-4 mb-6">
          {/* Step 1: 테스트 케이스 문서화 */}
          <div className="flex-1 bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-2 text-sm font-medium">
              Step 1. 테스트 케이스 문서화
            </div>
            <div className="p-4">
              <div className="text-xs font-mono bg-gray-100 rounded p-3 overflow-x-auto">
                <div className="text-gray-500"># admin-unit-test.csv</div>
                <div className="mt-1">
                  <span className="text-blue-600">ADM-U001</span>, Login, 로그인 성공
                </div>
                <div>
                  <span className="text-blue-600">ADM-U002</span>, Login, 빈값 검사
                </div>
                <div>
                  <span className="text-blue-600">ADM-U003</span>, Login, 잘못된 정보
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">기능 개발 전 테스트 케이스 먼저 정의</p>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-400 rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>

          {/* Step 2: 테스트 코드 작성 */}
          <div className="flex-1 bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="bg-green-600 text-white px-4 py-2 text-sm font-medium">
              Step 2. 테스트 코드 작성
            </div>
            <div className="p-4">
              <div className="text-xs font-mono bg-gray-100 rounded p-3">
                <div className="text-purple-600">describe</div>
                <div className="pl-2 text-gray-600">{`it('로그인 성공', () => {`}</div>
                <div className="pl-4 text-green-600">// Vitest + Testing Library</div>
                <div className="pl-2 text-gray-600">{`});`}</div>
              </div>
              <p className="text-xs text-gray-500 mt-2">문서 기반으로 테스트 코드 구현</p>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-400 rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>

          {/* Step 3: 결과 반영 */}
          <div className="flex-1 bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="bg-purple-600 text-white px-4 py-2 text-sm font-medium">
              Step 3. 결과 문서 반영
            </div>
            <div className="p-4">
              <div className="text-xs font-mono bg-gray-100 rounded p-3">
                <div className="flex items-center gap-2">
                  <span className="text-blue-600">ADM-U001</span>
                  <span className="px-1.5 py-0.5 bg-green-100 text-green-700 rounded text-[10px]">Passed</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-blue-600">ADM-U002</span>
                  <span className="px-1.5 py-0.5 bg-green-100 text-green-700 rounded text-[10px]">Passed</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-blue-600">ADM-U003</span>
                  <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Not Tested</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">테스트 결과를 CSV에 자동 반영</p>
            </div>
          </div>
        </div>

        {/* 테스트 통계 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
            <p className="text-2xl font-bold text-blue-600">216</p>
            <p className="text-sm text-gray-600">전체 테스트 케이스</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
            <p className="text-2xl font-bold text-green-600">2</p>
            <p className="text-sm text-gray-600">테스트 문서 (Admin/User)</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
            <p className="text-2xl font-bold text-purple-600">10+</p>
            <p className="text-sm text-gray-600">테스트 파일</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
            <p className="text-2xl font-bold text-orange-600">90%</p>
            <p className="text-sm text-gray-600">작성 시간 단축</p>
          </div>
        </div>

        {/* 시간 단축 비교 차트 */}
        <TimeComparisonChart />

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-800 text-center">
            <strong>AI 활용</strong>으로 테스트 케이스 문서 작성 → 테스트 코드 자동 생성 → 결과 문서화까지
            <strong className="text-blue-600"> 5일 → 4시간 이내로 단축</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

const VitestSection = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
          <span className="text-white text-xl font-bold">⚡</span>
        </div>
        <div>
          <h3 className="font-bold text-gray-900 text-lg">Vitest + React Testing Library</h3>
          <p className="text-sm text-gray-600">차세대 초고속 테스트 프레임워크</p>
        </div>
      </div>

      {/* Vitest란? */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
        <h4 className="font-bold text-yellow-800 mb-2">왜 Vitest인가?</h4>
        <p className="text-sm text-yellow-900 leading-relaxed">
          Jest 호환 API를 제공하면서 <strong>ESM(ES Modules) 네이티브 지원</strong>으로 변환 없이 바로 실행됩니다.
          Next.js 프로젝트에서 독립 테스트 러너로 사용하며,
          <strong> 빠른 실행 속도와 간단한 설정</strong>이 장점입니다.
        </p>
      </div>

      {/* 활용 방법 */}
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs">1</span>
            컴포넌트 테스트
          </h4>
          <div className="text-xs font-mono bg-gray-900 text-gray-100 rounded p-3">
            <div><span className="text-purple-400">import</span> {`{ render, screen }`}</div>
            <div className="text-gray-500">  from &apos;@testing-library/react&apos;</div>
            <div className="mt-2"><span className="text-yellow-300">test</span>(<span className="text-green-300">&apos;버튼 클릭&apos;</span>, () =&gt; {`{`}</div>
            <div className="pl-2">render(&lt;Button&gt;저장&lt;/Button&gt;)</div>
            <div className="pl-2">expect(screen.getByText(<span className="text-green-300">&apos;저장&apos;</span>))</div>
            <div className="pl-4">.toBeInTheDocument()</div>
            <div>{`})`}</div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center text-xs">2</span>
            커스텀 훅 테스트
          </h4>
          <div className="text-xs font-mono bg-gray-900 text-gray-100 rounded p-3">
            <div><span className="text-purple-400">import</span> {`{ renderHook, act }`}</div>
            <div className="text-gray-500">  from &apos;@testing-library/react&apos;</div>
            <div className="mt-2"><span className="text-yellow-300">test</span>(<span className="text-green-300">&apos;useForm 초기화&apos;</span>, () =&gt; {`{`}</div>
            <div className="pl-2"><span className="text-purple-400">const</span> {`{ result }`} = renderHook(</div>
            <div className="pl-4">() =&gt; useForm(initialData)</div>
            <div className="pl-2">)</div>
            <div className="pl-2">expect(result.current.values)</div>
            <div className="pl-4">.toEqual(initialData)</div>
            <div>{`})`}</div>
          </div>
        </div>
      </div>

      {/* 개선점 비교 */}
      <h4 className="font-bold text-gray-900 mb-3">Jest 대비 개선점</h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: "테스트 실행 속도", before: "~30초", after: "~3초", icon: "🚀" },
          { label: "Watch 모드 반응", before: "2-3초", after: "즉시", icon: "⚡" },
          { label: "초기 설정", before: "복잡함", after: "간단함", icon: "⚙️" },
          { label: "ESM 지원", before: "변환 필요", after: "네이티브", icon: "📦" },
        ].map((item) => (
          <div key={item.label} className="bg-gradient-to-b from-gray-50 to-white rounded-lg p-3 border border-gray-200">
            <div className="text-lg mb-1">{item.icon}</div>
            <p className="text-xs font-medium text-gray-700 mb-2">{item.label}</p>
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <span className="text-[10px] text-red-500 line-through">{item.before}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xs font-bold text-green-600">{item.after}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 테스트 커버리지 */}
      <div className="mt-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-green-800">프로젝트 테스트 적용 범위</p>
            <p className="text-xs text-green-600 mt-1">컴포넌트, 훅, 유틸 함수, API 호출 로직</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-green-700">216개</p>
            <p className="text-xs text-green-600">테스트 케이스</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TimeComparisonChart = () => {
  const items = [
    { label: "테스트 케이스 문서 작성 (216개)", manual: "3일 (24시간)", ai: "3시간", aiWidth: "12.5%", reduction: "87.5%" },
    { label: "테스트 코드 구현 (10+ 파일)", manual: "2일 (16시간)", ai: "1시간", aiWidth: "6.25%", reduction: "93.7%" },
    { label: "테스트 실행 & 결과 문서화", manual: "2시간", ai: "10분", aiWidth: "8.3%", reduction: "91.7%" },
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
      <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
        <span>⏱️</span>
        테스트 작성 시간 비교
      </h4>

      <div className="space-y-6">
        {items.map((item, i) => (
          <div key={i}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">{item.label}</span>
              {i === 0 && <span className="text-xs text-gray-500">예상 vs 실제</span>}
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-400 w-16">수동 작성</span>
                <div className="flex-1 bg-gray-100 rounded-full h-6 relative overflow-hidden">
                  <div className="absolute inset-y-0 left-0 bg-red-400 rounded-full" style={{ width: '100%' }}></div>
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white">{item.manual}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-emerald-600 w-16">AI 협업</span>
                <div className="flex-1 bg-gray-100 rounded-full h-6 relative overflow-hidden">
                  <div className="absolute inset-y-0 left-0 bg-emerald-500 rounded-full" style={{ width: item.aiWidth }}></div>
                  <span className="absolute left-2 inset-y-0 flex items-center text-xs font-medium text-white">{item.ai}</span>
                </div>
                <span className="text-xs font-bold text-emerald-600 whitespace-nowrap">{item.reduction} ↓</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 총합 비교 */}
      <div className="mt-6 pt-4 border-t-2 border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-center">
              <p className="text-xs text-gray-400">수동 작성 예상</p>
              <p className="text-xl font-bold text-red-500 line-through">~5일</p>
            </div>
            <div className="text-2xl text-gray-300">→</div>
            <div className="text-center">
              <p className="text-xs text-emerald-600 font-medium">AI 협업 실제</p>
              <p className="text-xl font-bold text-emerald-600">~4시간</p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-4 py-2 rounded-lg">
            <p className="text-2xl font-bold">90%+</p>
            <p className="text-xs opacity-90">시간 단축</p>
          </div>
        </div>
      </div>
    </div>
  );
};
