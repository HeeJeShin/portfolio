export const UnitTestSection = () => {
  return (
    <section id="unit-test" className="mb-16 scroll-mt-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">단위테스트 루틴</h2>
      <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
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
            <div className="bg-gray-900 text-white px-4 py-2 text-sm font-medium">
              Step 1. 테스트 케이스 문서화
            </div>
            <div className="p-4">
              <div className="text-xs font-mono bg-gray-100 rounded p-3 overflow-x-auto">
                <div className="text-gray-500"># admin-unit-test.csv</div>
                <div className="mt-1">
                  <span className="text-gray-700">ADM-U001</span>, Login, 로그인 성공
                </div>
                <div>
                  <span className="text-gray-700">ADM-U002</span>, Login, 빈값 검사
                </div>
                <div>
                  <span className="text-gray-700">ADM-U003</span>, Login, 잘못된 정보
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">기능 개발 전 테스트 케이스 먼저 정의</p>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center">
            <span className="text-gray-400 text-2xl rotate-90 md:rotate-0">→</span>
          </div>

          {/* Step 2: 테스트 코드 작성 */}
          <div className="flex-1 bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="bg-gray-700 text-white px-4 py-2 text-sm font-medium">
              Step 2. 테스트 코드 작성
            </div>
            <div className="p-4">
              <div className="text-xs font-mono bg-gray-100 rounded p-3">
                <div className="text-purple-600">describe</div>
                <div className="pl-2 text-gray-600">{`it('로그인 성공', () => {`}</div>
                <div className="pl-4 text-gray-500">// Vitest + Testing Library</div>
                <div className="pl-2 text-gray-600">{`});`}</div>
              </div>
              <p className="text-xs text-gray-500 mt-2">문서 기반으로 테스트 코드 구현</p>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex items-center justify-center">
            <span className="text-gray-400 text-2xl rotate-90 md:rotate-0">→</span>
          </div>

          {/* Step 3: 결과 반영 */}
          <div className="flex-1 bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="bg-gray-600 text-white px-4 py-2 text-sm font-medium">
              Step 3. 결과 문서 자동 반영
            </div>
            <div className="p-4">
              <div className="text-xs font-mono bg-gray-100 rounded p-3">
                <div className="flex items-center gap-2">
                  <span className="text-gray-700">ADM-U001</span>
                  <span className="px-1.5 py-0.5 bg-gray-200 text-gray-700 rounded text-[10px]">Passed</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-gray-700">ADM-U002</span>
                  <span className="px-1.5 py-0.5 bg-gray-200 text-gray-700 rounded text-[10px]">Passed</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-gray-700">ADM-U003</span>
                  <span className="px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded text-[10px]">Not Tested</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-2">테스트 결과를 CSV에 자동 반영</p>
            </div>
          </div>
        </div>

        {/* 자동화 구현 방식 설명 */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
          <h4 className="font-bold text-gray-900 mb-4">테스트 결과 자동 문서화 구현 방식</h4>
          <p className="text-sm text-gray-600 mb-4">
            동료들도 쉽게 테스트 결과를 확인할 수 있도록, 테스트 실행 시 결과가 자동으로 CSV 문서에 반영되도록 구현했습니다.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 bg-gray-900 text-white rounded-full text-xs flex items-center justify-center font-bold">1</span>
                <span className="font-medium text-gray-900 text-sm">JSON Reporter 설정</span>
              </div>
              <p className="text-xs text-gray-600">
                Vitest의 JSON Reporter를 활용해 테스트 실행 결과를 JSON 파일로 출력
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 bg-gray-900 text-white rounded-full text-xs flex items-center justify-center font-bold">2</span>
                <span className="font-medium text-gray-900 text-sm">CSV 변환 스크립트</span>
              </div>
              <p className="text-xs text-gray-600">
                JSON 결과를 파싱하여 테스트 파일, 그룹, 케이스명, 결과, 소요시간, 실행일시를 CSV로 변환
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-6 h-6 bg-gray-900 text-white rounded-full text-xs flex items-center justify-center font-bold">3</span>
                <span className="font-medium text-gray-900 text-sm">요약 정보 자동 생성</span>
              </div>
              <p className="text-xs text-gray-600">
                총 테스트 수, 성공/실패 개수, 총 소요시간 등 요약 정보를 문서 하단에 자동 추가
              </p>
            </div>
          </div>

          <div className="mt-4 bg-gray-50 border border-gray-200 rounded-lg p-4">
            <p className="text-sm text-gray-700">
              <strong className="text-gray-900">효과:</strong> npm 스크립트 한 번으로 테스트 실행 + 문서화가 동시에 완료되어,
              개발자가 아닌 동료도 Excel/Google Sheets에서 테스트 현황을 바로 확인할 수 있습니다.
            </p>
          </div>
        </div>

        {/* 테스트 통계 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
            <p className="text-2xl font-bold text-gray-900">216</p>
            <p className="text-sm text-gray-600">전체 테스트 케이스</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
            <p className="text-2xl font-bold text-gray-900">2</p>
            <p className="text-sm text-gray-600">테스트 문서 (Admin/User)</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
            <p className="text-2xl font-bold text-gray-900">10+</p>
            <p className="text-sm text-gray-600">테스트 파일</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
            <p className="text-2xl font-bold text-gray-900">90%</p>
            <p className="text-sm text-gray-600">작성 시간 단축</p>
          </div>
        </div>

        {/* 시간 단축 비교 차트 */}
        <TimeComparisonChart />

        <div className="bg-gray-100 border border-gray-200 rounded-lg p-4">
          <p className="text-sm text-gray-700 text-center">
            <strong>AI 활용</strong>으로 테스트 케이스 문서 작성 → 테스트 코드 자동 생성 → 결과 문서화까지
            <strong className="text-gray-900"> 5일 → 4시간 이내로 단축</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

const VitestSection = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
      <div className="mb-4">
        <h3 className="font-bold text-gray-900 text-lg">Vitest + React Testing Library</h3>
        <p className="text-sm text-gray-600">차세대 초고속 테스트 프레임워크</p>
      </div>

      {/* Vitest란? */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
        <h4 className="font-bold text-gray-900 mb-2">왜 Vitest인가?</h4>
        <p className="text-sm text-gray-700 leading-relaxed">
          Jest 호환 API를 제공하면서 <strong>ESM(ES Modules) 네이티브 지원</strong>으로 변환 없이 바로 실행됩니다.
          Next.js 프로젝트에서 독립 테스트 러너로 사용하며,
          <strong> 빠른 실행 속도와 간단한 설정</strong>이 장점입니다.
        </p>
      </div>

      {/* 활용 방법 */}
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <h4 className="font-bold text-gray-900 mb-3">컴포넌트 테스트</h4>
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

        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <h4 className="font-bold text-gray-900 mb-3">커스텀 훅 테스트</h4>
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
          { label: "테스트 실행 속도", before: "~30초", after: "~3초" },
          { label: "Watch 모드 반응", before: "2-3초", after: "즉시" },
          { label: "초기 설정", before: "복잡함", after: "간단함" },
          { label: "ESM 지원", before: "변환 필요", after: "네이티브" },
        ].map((item) => (
          <div key={item.label} className="bg-gray-50 rounded-lg p-3 border border-gray-200">
            <p className="text-xs font-medium text-gray-700 mb-2">{item.label}</p>
            <div className="space-y-1">
              <div className="flex items-center gap-1">
                <span className="text-[10px] text-gray-400 line-through">{item.before}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-xs font-bold text-gray-900">{item.after}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 테스트 커버리지 */}
      <div className="mt-4 bg-gray-50 border border-gray-200 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-900">프로젝트 테스트 적용 범위</p>
            <p className="text-xs text-gray-600 mt-1">컴포넌트, 훅, 유틸 함수, API 호출 로직</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-gray-900">216개</p>
            <p className="text-xs text-gray-600">테스트 케이스</p>
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
      <h4 className="font-bold text-gray-900 mb-4">테스트 작성 시간 비교</h4>

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
                  <div className="absolute inset-y-0 left-0 bg-gray-400 rounded-full" style={{ width: '100%' }}></div>
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white">{item.manual}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs text-gray-700 w-16">AI 협업</span>
                <div className="flex-1 bg-gray-100 rounded-full h-6 relative overflow-hidden">
                  <div className="absolute inset-y-0 left-0 bg-gray-700 rounded-full" style={{ width: item.aiWidth }}></div>
                  <span className="absolute left-2 inset-y-0 flex items-center text-xs font-medium text-white">{item.ai}</span>
                </div>
                <span className="text-xs font-bold text-gray-700 whitespace-nowrap">{item.reduction} ↓</span>
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
              <p className="text-xl font-bold text-gray-400 line-through">~5일</p>
            </div>
            <div className="text-2xl text-gray-300">→</div>
            <div className="text-center">
              <p className="text-xs text-gray-700 font-medium">AI 협업 실제</p>
              <p className="text-xl font-bold text-gray-900">~4시간</p>
            </div>
          </div>
          <div className="bg-gray-900 text-white px-4 py-2 rounded-lg">
            <p className="text-2xl font-bold">90%+</p>
            <p className="text-xs opacity-90">시간 단축</p>
          </div>
        </div>
      </div>
    </div>
  );
};
