export const RoadmapSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">추후 고도화 방향 (v2)</h2>

      {/* v1 vs v2 비교 */}
      <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 mb-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* v1 현재 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">v1</span>
              <span className="font-semibold text-gray-900">현재 구현</span>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>환자 정보 <strong>수동 입력</strong> (EMR 연동 없음)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>PDF <strong>다운로드</strong>만 지원</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span><strong>한국어</strong> 단일 언어</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>데이터 <strong>로컬 저장</strong> (서버 없음)</span>
              </li>
            </ul>
          </div>

          {/* v2 계획 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2 py-1 bg-[#191979] text-white text-xs font-bold rounded">v2</span>
              <span className="font-semibold text-gray-900">고도화 계획</span>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[#191979] mt-0.5">→</span>
                <span><strong>EMR 연동</strong> — QR 스캔 또는 서버 연동</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#191979] mt-0.5">→</span>
                <span><strong>공유하기</strong> — navigator.share() / 이메일</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#191979] mt-0.5">→</span>
                <span><strong>다국어</strong> — 영어 추가 (외국인 환자)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#191979] mt-0.5">→</span>
                <span><strong>어드민 콘솔</strong> — 병동별 통계/관리</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Open Questions */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-bold text-gray-900 mb-4">Open Questions (운영 후 결정)</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-xs font-medium text-gray-500 mb-2">의료진 PIN 정책</p>
            <p className="text-sm text-gray-700">병동별 / 환자별 / 단말 공통 중 운영 시나리오에 따라 결정</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-xs font-medium text-gray-500 mb-2">알람 재시도 정책</p>
            <p className="text-sm text-gray-700">30분 후 1회로 충분한지, 야간 알람은 어떻게 할지</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-xs font-medium text-gray-500 mb-2">사진 첨부 기능</p>
            <p className="text-sm text-gray-700">이상 보고 시 사진 첨부 옵션 (데이터 모델에 placeholder 준비됨)</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-xs font-medium text-gray-500 mb-2">어드민 콘솔 범위</p>
            <p className="text-sm text-gray-700">v1 운영 데이터를 보고 필요 기능 결정</p>
          </div>
        </div>
      </div>

    </section>
  );
};
