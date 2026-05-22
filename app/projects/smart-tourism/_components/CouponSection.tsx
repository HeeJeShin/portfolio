export const CouponSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">쿠폰 시스템</h2>

      {/* 쿠폰 타입 분류 */}
      <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 mb-6">
        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-8 h-8 bg-[#191979] rounded-lg flex items-center justify-center text-white text-sm">🎟️</span>
          쿠폰 타입 분류
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {[
            { type: "앱 사용", badge: "1", color: "blue", desc: "앱 내 결제 할인" },
            { type: "현장 정액", badge: "2", color: "blue", desc: "현장에서 금액 할인" },
            { type: "현장 비율", badge: "3", color: "blue", desc: "현장에서 % 할인" },
            { type: "교환권", badge: "4", color: "blue", desc: "상품 교환" },
            { type: "앱+현장", badge: "0", color: "blue", desc: "앱/현장 모두 사용" },
          ].map((item) => (
            <div key={item.badge} className="bg-white rounded-lg p-3 border border-gray-200 text-center">
              <span className={`inline-block px-2 py-0.5 bg-${item.color}-100 text-${item.color}-700 text-xs font-bold rounded mb-2`}>
                type: {item.badge}
              </span>
              <p className="font-medium text-gray-900 text-sm">{item.type}</p>
              <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 쿠폰 상태 관리 */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
            <h4 className="font-bold text-gray-900">쿠폰 상태 (useAblStat)</h4>
          </div>
          <div className="p-4 space-y-2">
            {[
              { code: "0", label: "사용 가능", color: "green" },
              { code: "1", label: "사용 기간 전", color: "blue" },
              { code: "2", label: "기간 만료", color: "gray" },
              { code: "3", label: "사용 완료", color: "blue" },
            ].map((item) => (
              <div key={item.code} className="flex items-center gap-3">
                <code className="text-xs bg-gray-100 px-2 py-1 rounded">&apos;{item.code}&apos;</code>
                <span className={`px-2 py-0.5 bg-${item.color}-100 text-${item.color}-700 text-xs rounded`}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
            <h4 className="font-bold text-gray-900">정렬 옵션</h4>
          </div>
          <div className="p-4 space-y-2">
            {[
              { code: "0", label: "마감 임박순", field: "endDate" },
              { code: "1", label: "가격 높은순", field: "couponAmt" },
              { code: "2", label: "최신 등록순", field: "startDate" },
            ].map((item) => (
              <div key={item.code} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <code className="text-xs bg-gray-100 px-2 py-1 rounded">&apos;{item.code}&apos;</code>
                  <span className="text-sm text-gray-700">{item.label}</span>
                </div>
                <code className="text-xs text-gray-500">{item.field}</code>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 데이터 변환 파이프라인 */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6">
        <div className="bg-[#191979] text-white px-4 py-3">
          <h4 className="font-bold flex items-center gap-2">
            <span>🔄</span> 데이터 변환 파이프라인
          </h4>
        </div>
        <div className="p-4">
          <div className="flex flex-col md:flex-row items-center gap-4">
            {[
              { step: "API 응답", type: "ApiCoupon", desc: "백엔드 원본 데이터" },
              { step: "Transform", type: "함수 변환", desc: "transform*Coupon()" },
              { step: "UI 타입", type: "CouponResponseType", desc: "프론트 표시용" },
              { step: "필터링", type: "useCouponFilter", desc: "검색/정렬 적용" },
            ].map((item, i) => (
              <div key={item.step} className="flex items-center gap-3 flex-1">
                <div className="flex-1 bg-gray-50 rounded-lg p-4 text-center">
                  <p className="font-medium text-gray-900 text-sm">{item.step}</p>
                  <code className="text-xs text-[#191979] bg-blue-50 px-2 py-0.5 rounded mt-1 inline-block">
                    {item.type}
                  </code>
                  <p className="text-xs text-gray-500 mt-2">{item.desc}</p>
                </div>
                {i < 3 && (
                  <svg className="w-5 h-5 text-gray-300 flex-shrink-0 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 결제 시 쿠폰 적용 */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6">
        <div className="bg-[#191979] text-white px-4 py-3">
          <h4 className="font-bold flex items-center gap-2">
            <span>💰</span> 결제 시 쿠폰 적용 (paymentStore)
          </h4>
        </div>
        <div className="p-4">
          <div className="text-xs font-mono bg-gray-900 text-gray-100 rounded p-4 overflow-x-auto">
            <div className="text-gray-500">// paymentStore.ts (Zustand)</div>
            <div className="mt-2">
              <span className="text-purple-400">interface</span> <span className="text-yellow-300">PaymentState</span> {`{`}
            </div>
            <div className="pl-4">coupons: Coupon[] <span className="text-gray-500">// 적용된 쿠폰 목록</span></div>
            <div className="pl-4">addCoupon: (coupon) =&gt; <span className="text-orange-300">void</span></div>
            <div className="pl-4">removeCoupon: (id) =&gt; <span className="text-orange-300">void</span></div>
            <div className="pl-4 mt-2 text-gray-500">// 계산 함수</div>
            <div className="pl-4">
              <span className="text-yellow-300">getTotalDiscountAmount</span>: () =&gt; <span className="text-orange-300">number</span>
            </div>
            <div className="pl-4">
              <span className="text-yellow-300">getFinalPrice</span>: () =&gt; <span className="text-orange-300">number</span>
            </div>
            <div>{`}`}</div>
            <div className="mt-3 text-gray-500">// 사용 예</div>
            <div>
              <span className="text-purple-400">const</span> finalPrice = getFinalPrice()
            </div>
            <div className="text-gray-500">// = paymentData.finalPrice - getTotalDiscountAmount()</div>
          </div>
        </div>
      </div>

      {/* API 엔드포인트 */}
      <div className="bg-gray-50 rounded-xl p-4">
        <h4 className="font-bold text-gray-900 mb-3">쿠폰 API 엔드포인트</h4>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            { path: "COUPON.DWL_LIST", desc: "다운로드 가능 쿠폰 목록" },
            { path: "COUPON.OWN", desc: "내 쿠폰 목록" },
            { path: "COUPON.OWN_ORDER", desc: "주문 시 사용 가능 쿠폰" },
            { path: "COUPON.USE", desc: "쿠폰 사용 처리" },
            { path: "COUPON.DWL", desc: "쿠폰 다운로드" },
            { path: "COUPON.PROM", desc: "프로모션 쿠폰 검증" },
          ].map((api) => (
            <div key={api.path} className="bg-white rounded-lg p-3 border border-gray-200 flex items-center justify-between">
              <code className="text-xs text-[#191979]">{api.path}</code>
              <span className="text-xs text-gray-600">{api.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
