export const ComponentDesignSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">컴포넌트 설계</h2>

      {/* 폴더 구조 */}
      <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl p-6 border border-slate-200 mb-6">
        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-8 h-8 bg-slate-700 rounded-lg flex items-center justify-center text-white text-sm">📁</span>
          프로젝트 구조
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-xs font-mono space-y-1">
              <div className="text-gray-900 font-bold">/src</div>
              <div className="pl-4 text-gray-600">
                /app <span className="text-gray-400 ml-2"># Next.js App Router</span>
              </div>
              <div className="pl-8 text-gray-500">/(auth) <span className="text-gray-400 ml-2"># 인증 페이지</span></div>
              <div className="pl-8 text-gray-500">/(user) <span className="text-gray-400 ml-2"># 유저 페이지</span></div>
              <div className="pl-8 text-gray-500">/api <span className="text-gray-400 ml-2"># API Routes</span></div>
              <div className="pl-8 text-gray-500">/payment <span className="text-gray-400 ml-2"># 결제</span></div>
              <div className="pl-8 text-gray-500">/shop <span className="text-gray-400 ml-2"># 상품</span></div>
              <div className="pl-4 text-gray-600">
                /components <span className="text-gray-400 ml-2"># UI 컴포넌트</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="text-xs font-mono space-y-1">
              <div className="text-gray-900 font-bold">/lib</div>
              <div className="pl-4 text-gray-600">
                /api <span className="text-gray-400 ml-2"># API 클라이언트</span>
              </div>
              <div className="pl-8 text-gray-500">/services <span className="text-gray-400 ml-2"># API 서비스</span></div>
              <div className="pl-8 text-gray-500">client.ts <span className="text-gray-400 ml-2"># HTTP 클라이언트</span></div>
              <div className="pl-8 text-gray-500">endpoints.ts <span className="text-gray-400 ml-2"># 엔드포인트 정의</span></div>
              <div className="pl-4 text-gray-600">
                /store <span className="text-gray-400 ml-2"># Zustand 스토어</span>
              </div>
              <div className="pl-4 text-gray-600">
                /hook <span className="text-gray-400 ml-2"># 커스텀 훅</span>
              </div>
              <div className="pl-4 text-gray-600">
                /i18n <span className="text-gray-400 ml-2"># 다국어</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 컴포넌트 분리 원칙 */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6">
        <div className="bg-blue-600 text-white px-4 py-3">
          <h4 className="font-bold flex items-center gap-2">
            <span>🧩</span> 컴포넌트 분리 원칙
          </h4>
        </div>
        <div className="p-4">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                title: "UI 컴포넌트",
                path: "/components/ui/",
                desc: "순수 표현 컴포넌트",
                examples: ["Button", "Input", "Modal", "Card"],
                color: "blue",
              },
              {
                title: "도메인 컴포넌트",
                path: "/components/{domain}/",
                desc: "비즈니스 로직 포함",
                examples: ["CouponCard", "ProductItem", "PaymentForm"],
                color: "green",
              },
              {
                title: "레이아웃 컴포넌트",
                path: "/components/layout/",
                desc: "페이지 구조 담당",
                examples: ["Header", "Footer", "Navigation"],
                color: "blue",
              },
            ].map((item) => (
              <div key={item.title} className={`bg-${item.color}-50 rounded-lg p-4 border border-${item.color}-200`}>
                <h5 className={`font-bold text-${item.color}-900 mb-1`}>{item.title}</h5>
                <code className="text-xs text-gray-500">{item.path}</code>
                <p className="text-sm text-gray-600 mt-2 mb-3">{item.desc}</p>
                <div className="flex flex-wrap gap-1">
                  {item.examples.map((ex) => (
                    <span key={ex} className="text-[10px] bg-white px-2 py-0.5 rounded border border-gray-200">
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 커스텀 훅 패턴 */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6">
        <div className="bg-blue-600 text-white px-4 py-3">
          <h4 className="font-bold flex items-center gap-2">
            <span>🪝</span> 커스텀 훅 패턴
          </h4>
        </div>
        <div className="p-4">
          <p className="text-sm text-gray-600 mb-4">
            비즈니스 로직을 컴포넌트에서 분리하여 <strong>재사용성</strong>과 <strong>테스트 용이성</strong>을 높였습니다.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                hook: "useKcpPayment",
                desc: "KCP 결제 처리 로직",
                returns: ["initPayment", "processCallback", "isLoading"],
              },
              {
                hook: "useCoupon",
                desc: "쿠폰 조회/적용 로직",
                returns: ["coupons", "applyCoupon", "removeCoupon"],
              },
              {
                hook: "useCouponFilter",
                desc: "쿠폰 검색/정렬 로직",
                returns: ["filteredCoupons", "setSort", "setSearch"],
              },
              {
                hook: "useAuth",
                desc: "인증 상태 관리",
                returns: ["user", "login", "logout", "isAuthenticated"],
              },
            ].map((item) => (
              <div key={item.hook} className="bg-gray-50 rounded-lg p-3">
                <div className="flex items-center gap-2 mb-2">
                  <code className="text-sm font-bold text-blue-700">{item.hook}</code>
                </div>
                <p className="text-xs text-gray-600 mb-2">{item.desc}</p>
                <div className="flex flex-wrap gap-1">
                  {item.returns.map((ret) => (
                    <code key={ret} className="text-[10px] bg-white px-1.5 py-0.5 rounded border border-gray-200 text-gray-600">
                      {ret}
                    </code>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Zustand Store 설계 */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6">
        <div className="bg-blue-600 text-white px-4 py-3">
          <h4 className="font-bold flex items-center gap-2">
            <span>🐻</span> Zustand Store 설계
          </h4>
        </div>
        <div className="p-4">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                store: "authStore",
                persist: "localStorage",
                desc: "로그인 상태, 유저 정보",
              },
              {
                store: "paymentStore",
                persist: "sessionStorage",
                desc: "결제 정보, 쿠폰 (탭별 독립)",
              },
              {
                store: "cartStore",
                persist: "localStorage",
                desc: "장바구니 상품",
              },
            ].map((item) => (
              <div key={item.store} className="bg-gray-50 rounded-lg p-4">
                <code className="text-sm font-bold text-blue-700">{item.store}</code>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
                    persist: {item.persist}
                  </span>
                </div>
                <p className="text-xs text-gray-600 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
            <p className="text-xs text-yellow-800">
              <strong>💡 paymentStore</strong>는 sessionStorage를 사용하여 탭 간 결제 정보가 공유되지 않도록 설계했습니다.
              (여러 탭에서 동시 결제 시 충돌 방지)
            </p>
          </div>
        </div>
      </div>

      {/* API 서비스 레이어 */}
      <div className="bg-gray-50 rounded-xl p-4">
        <h4 className="font-bold text-gray-900 mb-3">API 서비스 레이어 패턴</h4>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="text-xs font-mono bg-gray-900 text-gray-100 rounded p-3">
            <div className="text-gray-500">// lib/api/services/couponService.ts</div>
            <div className="mt-2">
              <span className="text-purple-400">export const</span> couponService = {`{`}
            </div>
            <div className="pl-4">
              <span className="text-yellow-300">getAvailableCoupons</span>: (params) =&gt;
            </div>
            <div className="pl-6">client.post(ENDPOINTS.COUPON.OWN_ORDER, params),</div>
            <div className="pl-4 mt-1">
              <span className="text-yellow-300">useCoupon</span>: (couponId) =&gt;
            </div>
            <div className="pl-6">client.post(ENDPOINTS.COUPON.USE, {`{ couponId }`}),</div>
            <div>{`}`}</div>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            API 호출 로직을 서비스 레이어로 분리하여 컴포넌트/훅에서 깔끔하게 사용
          </p>
        </div>
      </div>
    </section>
  );
};
