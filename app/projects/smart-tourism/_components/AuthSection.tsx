export const AuthSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">로그인 유지 시스템</h2>

      {/* 토큰 저장 전략 */}
      <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 mb-6">
        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-8 h-8 bg-[#191979] rounded-lg flex items-center justify-center text-white text-sm">🔑</span>
          토큰 저장과 복구
        </h3>

        <p className="text-sm text-gray-600 mb-4">
          토큰은 <strong className="text-[#191979]">쿠키(서버 전송용)와 localStorage(지속용)에 함께 저장</strong>하고, 새로고침되면 <strong className="text-[#191979]">메모리 → 쿠키 → localStorage 순서로 확인해 복구</strong>합니다. Safari ITP로 쿠키가 지워져도 localStorage에서 다시 살릴 수 있고, localStorage에 두는 위험은 액세스 토큰 만료를 짧게 두고 리프레시 토큰으로 재발급해 줄였습니다.
        </p>

        <div className="flex flex-col md:flex-row items-stretch gap-4">
          {[
            {
              priority: "복구 1",
              storage: "메모리",
              icon: "⚡",
              color: "green",
              pros: "현재 페이지에서 바로 사용",
              cons: "새로고침 시 소멸",
            },
            {
              priority: "복구 2",
              storage: "쿠키",
              icon: "🍪",
              color: "blue",
              pros: "저장 ① 서버 전송용",
              cons: "스크립트로 만든 쿠키는 ITP가 최대 7일로 제한",
            },
            {
              priority: "복구 3",
              storage: "localStorage",
              icon: "💾",
              color: "blue",
              pros: "저장 ② 지속용, 쿠키가 지워져도 복구",
              cons: "XSS 주의 → 짧은 만료로 범위 제한, 7일간 방문 없으면 ITP가 삭제",
            },
          ].map((item) => (
            <div key={item.priority} className="flex-1 bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className={`bg-${item.color}-100 px-3 py-2 border-b border-${item.color}-200`}>
                <div className="flex items-center justify-between">
                  <span className="text-lg">{item.icon}</span>
                  <span className={`text-xs font-bold text-${item.color}-700`}>{item.priority}</span>
                </div>
              </div>
              <div className="p-3">
                <p className="font-bold text-gray-900 mb-2">{item.storage}</p>
                <div className="space-y-1">
                  <p className="text-xs text-green-600 flex items-center gap-1">
                    <span>✓</span> {item.pros}
                  </p>
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    <span>!</span> {item.cons}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Safari ITP 대응 */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6">
        <h4 className="font-bold text-blue-800 mb-2 flex items-center gap-2">
          <span>🍎</span> Safari ITP (Intelligent Tracking Prevention) 대응
        </h4>
        <p className="text-sm text-blue-900 mb-3">
          Safari ITP는 스크립트로 저장한 쿠키(<code>Cookies.set</code>)의 수명을 최대 7일로 제한해, 쿠키만 쓰면 로그인이 풀렸습니다. 서비스 시작 전 QA에서 iOS Safari에서만 생기는 것을 실기기로 재현해 원인을 찾았고, 저장할 때부터 쿠키와 localStorage에 함께 넣어 위의 순서로 복구하게 바꿨습니다.
        </p>
        <div className="bg-white rounded-lg p-3">
          <div className="text-xs font-mono bg-gray-900 text-gray-100 rounded p-3">
            <div className="text-gray-500">// tokenManager - 저장: 쿠키(서버 전송) + localStorage(지속)</div>
            <div className="mt-1">
              <span className="text-purple-400">const</span> setTokens = (access, refresh) =&gt; {`{`}
            </div>
            <div className="pl-4">memory.accessToken = access</div>
            <div className="pl-4">Cookies.set(<span className="text-green-300">&apos;accessToken&apos;</span>, access)</div>
            <div className="pl-4 text-yellow-300">localStorage.setItem(<span className="text-green-300">&apos;accessToken&apos;</span>, access)</div>
            <div>{`}`}</div>
          </div>
        </div>
      </div>

      {/* 토큰 복원 흐름 */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6">
        <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
          <h4 className="font-bold text-gray-900">토큰 복구 흐름 (페이지 새로고침 시)</h4>
        </div>
        <div className="p-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            {[
              { step: "1", title: "메모리 확인", result: "토큰 있음?", yes: "사용", no: "다음 단계" },
              { step: "2", title: "쿠키 확인", result: "토큰 있음?", yes: "메모리 복원", no: "다음 단계" },
              { step: "3", title: "localStorage", result: "토큰 있음?", yes: "메모리+쿠키 복원", no: "로그아웃" },
            ].map((item, i) => (
              <div key={item.step} className="flex items-center gap-3 flex-1">
                <div className="bg-gray-50 rounded-lg p-4 flex-1 text-center">
                  <div className="w-8 h-8 bg-[#191979] text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-2">
                    {item.step}
                  </div>
                  <p className="font-medium text-gray-900 text-sm">{item.title}</p>
                  <p className="text-xs text-gray-500 mt-1">{item.result}</p>
                  <div className="flex justify-center gap-2 mt-2">
                    <span className="text-[10px] px-2 py-0.5 bg-green-100 text-green-700 rounded">Y: {item.yes}</span>
                    <span className="text-[10px] px-2 py-0.5 bg-gray-100 text-gray-600 rounded">N: {item.no}</span>
                  </div>
                </div>
                {i < 2 && (
                  <svg className="w-5 h-5 text-gray-300 flex-shrink-0 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 자동 로그인 & 토큰 갱신 */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="bg-[#191979] text-white px-4 py-3">
            <h4 className="font-bold flex items-center gap-2">
              <span>🔄</span> 자동 로그인 (AutoLogin)
            </h4>
          </div>
          <div className="p-4">
            <div className="text-xs font-mono bg-gray-900 text-gray-100 rounded p-3">
              <div className="text-gray-500">// authStore.autoLogin()</div>
              <div className="mt-1">
                <span className="text-purple-400">const</span> autoLogin = <span className="text-purple-400">async</span> () =&gt; {`{`}
              </div>
              <div className="pl-4 text-gray-500">// 1. 자동로그인 플래그 확인</div>
              <div className="pl-4">
                <span className="text-purple-400">if</span> (!localStorage.get(<span className="text-green-300">&apos;auto-login&apos;</span>))
              </div>
              <div className="pl-6"><span className="text-purple-400">return</span></div>
              <div className="pl-4 mt-2 text-gray-500">// 2. refreshToken으로 갱신</div>
              <div className="pl-4">
                <span className="text-yellow-300">await</span> tokenRefresh()
              </div>
              <div className="pl-4 mt-2 text-gray-500">// 3. 사용자 정보 복원</div>
              <div className="pl-4">restoreUserInfo()</div>
              <div>{`}`}</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="bg-[#191979] text-white px-4 py-3">
            <h4 className="font-bold flex items-center gap-2">
              <span>🔃</span> 토큰 자동 갱신
            </h4>
          </div>
          <div className="p-4">
            <div className="text-xs font-mono bg-gray-900 text-gray-100 rounded p-3">
              <div className="text-gray-500">// API 응답에서 401 감지 시</div>
              <div className="mt-1">
                <span className="text-purple-400">if</span> (returnCode === <span className="text-green-300">&apos;401&apos;</span>) {`{`}
              </div>
              <div className="pl-4 text-gray-500">// refreshToken으로 갱신 시도</div>
              <div className="pl-4">
                <span className="text-purple-400">const</span> newToken = <span className="text-yellow-300">await</span>
              </div>
              <div className="pl-6">refreshAccessToken()</div>
              <div className="pl-4 mt-2 text-gray-500">// 성공 시 원래 요청 재시도</div>
              <div className="pl-4">
                <span className="text-purple-400">return</span> retryRequest(config)
              </div>
              <div>{`}`}</div>
            </div>
          </div>
        </div>
      </div>

      {/* 탭 간 동기화 */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6">
        <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
          <span>🔗</span> 탭 간 인증 상태 동기화
        </h4>
        <div className="bg-white rounded-lg p-4">
          <div className="text-xs font-mono bg-gray-900 text-gray-100 rounded p-3">
            <div className="text-gray-500">// AuthSync.tsx - storage 이벤트 감지</div>
            <div className="mt-1">
              <span className="text-yellow-300">useEffect</span>(() =&gt; {`{`}
            </div>
            <div className="pl-4">
              <span className="text-purple-400">const</span> handleStorage = () =&gt; {`{`}
            </div>
            <div className="pl-6">checkAuthStatus() <span className="text-gray-500">// 다른 탭 로그아웃 감지</span></div>
            <div className="pl-4">{`}`}</div>
            <div className="pl-4 mt-1">window.addEventListener(<span className="text-green-300">&apos;storage&apos;</span>, handleStorage)</div>
            <div className="pl-4">window.addEventListener(<span className="text-green-300">&apos;focus&apos;</span>, handleStorage)</div>
            <div>{`}, [])`}</div>
          </div>
        </div>
        <p className="text-xs text-[#191979] mt-3">
          다른 탭에서 로그아웃하면 현재 탭에서도 자동으로 로그아웃 상태가 반영됩니다.
        </p>
      </div>

      {/* 토큰 만료 시간 */}
      <div className="bg-gray-100 rounded-xl p-4">
        <h4 className="font-bold text-gray-900 mb-1">토큰 만료 정책</h4>
        <p className="text-xs text-gray-600 mb-3">localStorage에 저장하는 대신 액세스 토큰 만료를 짧게 두고, 리프레시 토큰으로 재발급해 탈취 시 피해 범위를 줄였습니다.</p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-[#191979]">1시간</p>
            <p className="text-sm text-gray-600">Access Token</p>
            <p className="text-xs text-gray-400 mt-1">API 요청 인증용</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <p className="text-2xl font-bold text-[#191979]">7일</p>
            <p className="text-sm text-gray-600">Refresh Token</p>
            <p className="text-xs text-gray-400 mt-1">Access Token 갱신용</p>
          </div>
        </div>
      </div>

      {/* 한계와 개선안 */}
      <div className="bg-white rounded-xl border border-gray-200 p-5 mt-6">
        <h4 className="font-bold text-gray-900 mb-3">돌아보면: 한계와 다시 한다면</h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-xs font-medium text-gray-500 mb-2">한계</p>
            <p className="text-sm text-gray-700">
              localStorage도 ITP 대상이라 그 사이트에 7일간 방문이 없으면 지워집니다. 자주 오는 사용자는 로그인이 유지됐지만 완전한 해결은 아니었고, XSS 위험은 줄였을 뿐 없어지지 않았습니다.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-xs font-medium text-gray-500 mb-2">다시 한다면</p>
            <p className="text-sm text-gray-700">
              리프레시 토큰은 서버가 <code>Set-Cookie: HttpOnly; Secure; SameSite</code>로 내려주고, 액세스 토큰은 메모리에만 두겠습니다. 서버가 내려준 쿠키는 ITP 7일 제한을 받지 않고 스크립트로 읽을 수 없습니다. 인증 구조를 정할 때부터 백엔드와 함께 정해야 하는 일입니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
