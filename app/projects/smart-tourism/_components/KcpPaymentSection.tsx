export const KcpPaymentSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">KCP 결제 연동</h2>

      {/* 결제 흐름 다이어그램 */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 mb-6">
        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm">💳</span>
          결제 처리 흐름
        </h3>

        <div className="flex flex-col md:flex-row items-stretch gap-2">
          {[
            { step: "1", title: "거래 등록", desc: "trade-register API", color: "blue" },
            { step: "2", title: "결제창 호출", desc: "PC/Mobile 분기", color: "indigo" },
            { step: "3", title: "결제 승인", desc: "KCP 서버 처리", color: "purple" },
            { step: "4", title: "Callback", desc: "결과 수신 & 검증", color: "violet" },
            { step: "5", title: "완료 처리", desc: "주문 상태 업데이트", color: "green" },
          ].map((item, i) => (
            <div key={item.step} className="flex-1 flex items-center gap-2">
              <div className={`flex-1 bg-white rounded-lg p-3 border border-${item.color}-200`}>
                <div className={`w-6 h-6 bg-${item.color}-100 text-${item.color}-700 rounded-full flex items-center justify-center text-xs font-bold mb-2`}>
                  {item.step}
                </div>
                <p className="font-medium text-gray-900 text-sm">{item.title}</p>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
              {i < 4 && (
                <svg className="w-4 h-4 text-gray-300 hidden md:block flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* PC vs Mobile 분기 */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="bg-gray-800 text-white px-4 py-2 text-sm font-medium flex items-center gap-2">
            <span>🖥️</span> PC 결제
          </div>
          <div className="p-4">
            <div className="text-xs font-mono bg-gray-900 text-gray-100 rounded p-3 mb-3">
              <div className="text-gray-500">// KCP 제공 스크립트 함수 호출</div>
              <div className="mt-1">
                <span className="text-yellow-300">KCP_Pay_Execute_Web</span>(payForm)
              </div>
              <div className="mt-2 text-gray-500">// 팝업 방식 결제창</div>
              <div>window.open(<span className="text-green-300">&apos;결제창&apos;</span>)</div>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              팝업 창에서 결제 진행
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="bg-emerald-600 text-white px-4 py-2 text-sm font-medium flex items-center gap-2">
            <span>📱</span> Mobile 결제
          </div>
          <div className="p-4">
            <div className="text-xs font-mono bg-gray-900 text-gray-100 rounded p-3 mb-3">
              <div className="text-gray-500">// 거래 등록 후 form POST</div>
              <div className="mt-1">
                <span className="text-purple-400">const</span> tradeRes = <span className="text-yellow-300">await</span>
              </div>
              <div className="pl-2">tradeRegister(orderData)</div>
              <div className="mt-2 text-gray-500">// 결제 페이지로 이동</div>
              <div>form.<span className="text-yellow-300">submit</span>()</div>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              페이지 전환 방식 결제
            </div>
          </div>
        </div>
      </div>

      {/* API Routes 구조 */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6">
        <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
          <h4 className="font-bold text-gray-900 flex items-center gap-2">
            <span>📁</span> API Routes 구조
          </h4>
        </div>
        <div className="p-4">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                path: "/api/kcp/trade-register",
                method: "POST",
                desc: "거래 등록 (토큰 발급)",
                detail: "KCP에 결제 정보 등록 후 거래 토큰 수신",
              },
              {
                path: "/api/kcp/payment",
                method: "POST",
                desc: "결제 승인 요청",
                detail: "거래 토큰으로 실제 결제 승인 처리",
              },
              {
                path: "/api/kcp/callback",
                method: "POST",
                desc: "결제 결과 수신",
                detail: "KCP에서 결제 완료 후 콜백 처리",
              },
            ].map((api) => (
              <div key={api.path} className="bg-gray-50 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded">
                    {api.method}
                  </span>
                  <code className="text-xs text-gray-700">{api.path}</code>
                </div>
                <p className="text-sm font-medium text-gray-900">{api.desc}</p>
                <p className="text-xs text-gray-500 mt-1">{api.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Callback 처리 상세 */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6">
        <div className="bg-violet-600 text-white px-4 py-3">
          <h4 className="font-bold flex items-center gap-2">
            <span>🔄</span> Callback 처리 로직
          </h4>
        </div>
        <div className="p-4">
          <div className="text-xs font-mono bg-gray-900 text-gray-100 rounded p-4 overflow-x-auto">
            <div className="text-gray-500">// /api/kcp/callback/route.ts</div>
            <div className="mt-2">
              <span className="text-purple-400">export const</span> <span className="text-yellow-300">POST</span> = <span className="text-purple-400">async</span> (req) =&gt; {`{`}
            </div>
            <div className="pl-4 mt-1">
              <span className="text-gray-500">// 1. FormData로 결제 결과 수신</span>
            </div>
            <div className="pl-4">
              <span className="text-purple-400">const</span> formData = <span className="text-yellow-300">await</span> req.formData()
            </div>
            <div className="pl-4 mt-2">
              <span className="text-gray-500">// 2. 결제 성공 여부 확인</span>
            </div>
            <div className="pl-4">
              <span className="text-purple-400">const</span> res_cd = formData.get(<span className="text-green-300">&apos;res_cd&apos;</span>)
            </div>
            <div className="pl-4 mt-2">
              <span className="text-purple-400">if</span> (res_cd === <span className="text-green-300">&apos;0000&apos;</span>) {`{`}
            </div>
            <div className="pl-8">
              <span className="text-gray-500">// 3. 백엔드 API로 주문 완료 처리</span>
            </div>
            <div className="pl-8">
              <span className="text-yellow-300">await</span> redirectKCP(paymentData)
            </div>
            <div className="pl-8 mt-1">
              <span className="text-gray-500">// 4. 성공 페이지로 리다이렉트</span>
            </div>
            <div className="pl-8">
              <span className="text-purple-400">return</span> redirect(<span className="text-green-300">&apos;/payment/success&apos;</span>)
            </div>
            <div className="pl-4">{`}`}</div>
            <div>{`}`}</div>
          </div>
        </div>
      </div>

      {/* 보안 설정 */}
      <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
        <h4 className="font-bold text-orange-800 mb-3 flex items-center gap-2">
          <span>🔒</span> 보안 설정 (middleware.ts)
        </h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm font-medium text-gray-900 mb-1">CSP 정책</p>
            <p className="text-xs text-gray-600">KCP 도메인 script-src, frame-src 허용</p>
            <code className="text-[10px] text-orange-600 mt-1 block">*.kcp.co.kr</code>
          </div>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm font-medium text-gray-900 mb-1">쿠키 설정</p>
            <p className="text-xs text-gray-600">결제 정보 임시 저장 (1시간 만료)</p>
            <code className="text-[10px] text-orange-600 mt-1 block">Secure, HttpOnly, SameSite=Lax</code>
          </div>
        </div>
      </div>
    </section>
  );
};
