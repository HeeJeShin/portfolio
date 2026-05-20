export const MonitoringSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">혼잡도 모니터링 (시뮬레이션)</h2>
      <p className="text-sm text-gray-500 mb-6">
        * 심사위원 중간평가를 반영한 기능입니다. CCTV 인원 추정 등으로 데이터가 수집된다는 가정 하에,
        해당 데이터가 있으면 바로 활용 가능한 모니터링 대시보드를 구현했습니다.
      </p>

      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="text-xl">📊</span>
          모니터링 대시보드
        </h3>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="flex items-start gap-3">
            <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
              1
            </span>
            <div>
              <div className="font-medium text-gray-900">실시간 인원 표시</div>
              <p className="text-sm text-gray-600">현재 입장 인원을 실시간으로 업데이트</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
              2
            </span>
            <div>
              <div className="font-medium text-gray-900">혼잡도 게이지</div>
              <p className="text-sm text-gray-600">현재 혼잡도 레벨을 시각적으로 표시</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
              3
            </span>
            <div>
              <div className="font-medium text-gray-900">히스토리 테이블</div>
              <p className="text-sm text-gray-600">인원 변동 내역을 시간순으로 기록</p>
            </div>
          </div>
        </div>
      </div>

      {/* 갱신 주기 */}
      <div className="mt-6 bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="font-bold text-gray-900 mb-3">갱신 주기 설정</h3>
        <div className="flex flex-wrap gap-3">
          <div className="px-4 py-2 bg-gray-50 rounded-lg border border-gray-200 text-sm">
            <span className="font-medium text-blue-600">1분</span>
            <span className="text-gray-500 ml-2">고빈도 모니터링</span>
          </div>
          <div className="px-4 py-2 bg-gray-50 rounded-lg border border-gray-200 text-sm">
            <span className="font-medium text-blue-600">10분</span>
            <span className="text-gray-500 ml-2">일반 모니터링</span>
          </div>
          <div className="px-4 py-2 bg-gray-50 rounded-lg border border-gray-200 text-sm">
            <span className="font-medium text-blue-600">1시간</span>
            <span className="text-gray-500 ml-2">저빈도 모니터링</span>
          </div>
        </div>
      </div>
    </section>
  );
};
