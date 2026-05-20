export const InvoiceSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">인보이스 발행</h2>
      <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
        <p className="text-gray-600 mb-6">
          부스 신청, 공급품 구매 등 <strong className="text-gray-900">각 항목별 인보이스 발행 기능</strong>을 제공합니다.
          유저는 마이페이지에서, 어드민은 상세페이지에서 인보이스를 확인하고 메일로 배포할 수 있습니다.
        </p>

        {/* 인보이스 발행 대상 */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {[
            { title: "부스 참가비", items: ["조립부스 / 독립부스", "조기신청 할인 적용", "추가 공간 요금"] },
            { title: "가구/비품", items: ["테이블, 의자, 진열대", "조명, 전기 설비", "수량별 자동 계산"] },
            { title: "커스텀 그래픽", items: ["파사드, 인포데스크", "사이즈별 단가 적용", "시안 파일 첨부"] },
          ].map((category, i) => (
            <div key={i} className="bg-white rounded-lg border border-gray-200 p-4">
              <p className="font-medium text-gray-900 mb-3">{category.title}</p>
              <ul className="text-sm text-gray-600 space-y-1">
                {category.items.map((item, j) => (
                  <li key={j}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 인보이스 UI 미리보기 */}
        <InvoicePreview />

        {/* 인보이스 워크플로우 */}
        <InvoiceWorkflow />

        {/* 기술 구현 */}
        <div className="mt-4 bg-gray-100 rounded-lg p-4">
          <p className="text-xs font-medium text-gray-700 mb-2">구현 컴포넌트</p>
          <div className="flex flex-wrap gap-2">
            {["InvoiceContent", "InvoiceModal", "useSendInvoice", "MAIL_TEMPLATE_CODES.INVOICE"].map((comp) => (
              <span key={comp} className="px-2 py-1 bg-white rounded border border-gray-200 text-xs font-mono text-gray-600">{comp}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const InvoicePreview = () => {
  const items = [
    { name: "접이식 테이블 (180x60)", qty: 3, price: "50,000원", total: "150,000원" },
    { name: "의자 (등받이형)", qty: 6, price: "20,000원", total: "120,000원" },
    { name: "LED 스포트라이트", qty: 4, price: "30,000원", total: "120,000원" },
  ];

  return (
    <div>
      <h4 className="font-medium text-gray-900 mb-4">인보이스 화면</h4>
      <div className="bg-white rounded-lg border border-gray-300 p-4 max-w-2xl mx-auto text-sm">
        {/* 인보이스 헤더 */}
        <div className="text-center mb-4 border-b-2 border-gray-900 pb-3">
          <h5 className="text-lg font-bold">INVOICE</h5>
          <p className="text-xs text-gray-500">2026 서울 국제 전시회</p>
        </div>

        {/* 참가기업 정보 */}
        <div className="border border-gray-200 rounded p-3 mb-3">
          <p className="text-xs font-bold text-gray-900 mb-2 border-b border-gray-100 pb-1">참가기업 / 담당자 정보</p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex gap-2"><span className="text-gray-400 w-14">업체명</span><span className="font-medium">(주)삼성전자</span></div>
            <div className="flex gap-2"><span className="text-gray-400 w-14">담당자</span><span className="font-medium">홍길동</span></div>
            <div className="flex gap-2"><span className="text-gray-400 w-14">연락처</span><span className="font-medium">010-1234-5678</span></div>
            <div className="flex gap-2"><span className="text-gray-400 w-14">이메일</span><span className="font-medium">hong@samsung.com</span></div>
          </div>
        </div>

        {/* 신청 내역 테이블 */}
        <div className="mb-3">
          <p className="text-xs font-bold text-gray-900 mb-2">가구/비품 구매 내역</p>
          <table className="w-full text-xs border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-1.5 px-2 text-left border border-gray-200">품목</th>
                <th className="py-1.5 px-2 text-center border border-gray-200">수량</th>
                <th className="py-1.5 px-2 text-right border border-gray-200">단가</th>
                <th className="py-1.5 px-2 text-right border border-gray-200">합계</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, i) => (
                <tr key={i}>
                  <td className="py-1.5 px-2 border border-gray-200">{item.name}</td>
                  <td className="py-1.5 px-2 text-center border border-gray-200">{item.qty}</td>
                  <td className="py-1.5 px-2 text-right border border-gray-200">{item.price}</td>
                  <td className="py-1.5 px-2 text-right border border-gray-200">{item.total}</td>
                </tr>
              ))}
              <tr className="bg-gray-50 font-medium">
                <td colSpan={3} className="py-1.5 px-2 text-right border border-gray-200">소계</td>
                <td className="py-1.5 px-2 text-right border border-gray-200">390,000원</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* 금액 요약 */}
        <div className="border-2 border-gray-900 rounded p-3 mb-3">
          <p className="text-xs font-bold text-gray-900 mb-2 border-b border-gray-300 pb-1">금액 요약</p>
          <div className="space-y-1 text-xs">
            <div className="flex justify-between"><span>공급가액</span><span>390,000원</span></div>
            <div className="flex justify-between"><span>부가세 (10%)</span><span>39,000원</span></div>
            <div className="flex justify-between border-t-2 border-gray-900 pt-2 mt-2 font-bold">
              <span>총액 (VAT 포함)</span><span>429,000원</span>
            </div>
          </div>
        </div>

        {/* 납입 안내 */}
        <div className="bg-gray-50 rounded p-3 text-xs">
          <p className="font-bold text-gray-900 mb-2">참가비 납입 안내</p>
          <div className="grid grid-cols-3 gap-2">
            <div><span className="text-gray-400 block">예금주</span><span className="font-medium">(주)이즈피엠피</span></div>
            <div><span className="text-gray-400 block">은행</span><span className="font-medium">우리은행</span></div>
            <div><span className="text-gray-400 block">계좌번호</span><span className="font-medium">1005-504-482555</span></div>
          </div>
        </div>

        {/* 어드민 버튼 */}
        <div className="mt-4 pt-3 border-t border-gray-200 flex justify-between items-center">
          <button className="px-3 py-1.5 bg-gray-900 text-white text-xs rounded font-medium">인보이스 배포</button>
          <div className="flex gap-2">
            <button className="px-3 py-1.5 border border-gray-300 text-gray-600 text-xs rounded">닫기</button>
            <button className="px-3 py-1.5 bg-gray-700 text-white text-xs rounded">인쇄하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const InvoiceWorkflow = () => {
  return (
    <div className="mt-6 grid md:grid-cols-2 gap-4">
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-gray-700 font-bold">유저</span>
          <span className="text-sm text-gray-500">(마이페이지)</span>
        </div>
        <ul className="text-sm text-gray-600 space-y-2">
          {["체크리스트에서 \"인보이스\" 버튼 클릭", "인보이스 모달에서 내역 확인", "인쇄하기 버튼으로 출력"].map((step, i) => (
            <li key={i}>• {step}</li>
          ))}
        </ul>
      </div>
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-gray-700 font-bold">어드민</span>
          <span className="text-sm text-gray-500">(상세페이지)</span>
        </div>
        <ul className="text-sm text-gray-600 space-y-2">
          {["각 탭(부스/가구/그래픽)에서 인보이스 확인", "\"인보이스 배포\" 클릭", "담당자 이메일로 인보이스 발송"].map((step, i) => (
            <li key={i}>• {step}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
