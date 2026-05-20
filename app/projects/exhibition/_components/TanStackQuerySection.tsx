export const TanStackQuerySection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">TanStack Query 서버 상태 관리</h2>

      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <div className="mb-6">
          <h3 className="font-bold text-gray-900 text-lg mb-2">데이터 페칭 아키텍처 설계</h3>
          <p className="text-gray-600">
            useQuery/useMutation/useQueries를 활용한 체계적인 서버 상태 관리와
            도메인별 커스텀 훅 구조화를 구현했습니다.
          </p>
        </div>

        {/* 커스텀 훅 구조 */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-3">도메인별 커스텀 훅</h4>
            <div className="space-y-2">
              {[
                { name: "useApplicationQuery", desc: "참가신청 데이터" },
                { name: "useMypageQuery", desc: "마이페이지 데이터" },
                { name: "useFileQuery", desc: "파일 업로드/다운로드" },
                { name: "useInvoiceQuery", desc: "인보이스 조회/발행" },
              ].map((hook) => (
                <div key={hook.name} className="flex items-center gap-2 text-sm">
                  <code className="px-2 py-0.5 bg-gray-200 text-gray-700 rounded text-xs">{hook.name}</code>
                  <span className="text-gray-600">{hook.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h4 className="font-bold text-gray-900 mb-3">캐싱 전략</h4>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-gray-400">•</span>
                <span><strong>staleTime/gcTime</strong> 설정으로 불필요한 리페칭 방지</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400">•</span>
                <span><strong>invalidateQueries</strong>로 관련 데이터 자동 갱신</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400">•</span>
                <span>User/Admin 앱별 분리된 fetcher 구성</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Optimistic Updates 코드 예시 */}
        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
          <div className="text-xs text-gray-400 mb-2">// Optimistic Updates - 즉시 UI 반영 후 서버 동기화</div>
          <div className="text-xs font-mono text-gray-100 space-y-1">
            <div>
              <span className="text-purple-400">const</span> mutation ={" "}
              <span className="text-yellow-300">useMutation</span>({"{"}
            </div>
            <div className="pl-2">
              <span className="text-blue-300">mutationFn</span>: updateStatus,
            </div>
            <div className="pl-2">
              <span className="text-blue-300">onMutate</span>: <span className="text-purple-400">async</span> (newStatus) {"=> {"}
            </div>
            <div className="pl-4 text-gray-500">// 이전 데이터 백업</div>
            <div className="pl-4">
              <span className="text-purple-400">const</span> previous = queryClient.<span className="text-yellow-300">getQueryData</span>([<span className="text-green-300">&apos;application&apos;</span>]);
            </div>
            <div className="pl-4 text-gray-500">// 즉시 UI 업데이트</div>
            <div className="pl-4">
              queryClient.<span className="text-yellow-300">setQueryData</span>([<span className="text-green-300">&apos;application&apos;</span>], {"(old) => ({ ...old, status: newStatus })"});
            </div>
            <div className="pl-4">
              <span className="text-purple-400">return</span> {"{ previous }"};
            </div>
            <div className="pl-2">{"}"},</div>
            <div className="pl-2">
              <span className="text-blue-300">onError</span>: {"(err, _, ctx) => "}queryClient.<span className="text-yellow-300">setQueryData</span>([<span className="text-green-300">&apos;application&apos;</span>], ctx.previous),
            </div>
            <div>{"}"});</div>
          </div>
        </div>

        {/* 병렬 쿼리 */}
        <div className="mt-4 bg-gray-50 rounded-lg p-4 border border-gray-200">
          <h4 className="font-bold text-gray-900 mb-2">useQueries 병렬 쿼리</h4>
          <p className="text-sm text-gray-600">
            파일 메타데이터 등 다중 API를 <strong className="text-gray-900">useQueries</strong>로 동시 호출하여
            로딩 시간을 단축하고 사용자 경험을 개선했습니다.
          </p>
        </div>
      </div>
    </section>
  );
};
