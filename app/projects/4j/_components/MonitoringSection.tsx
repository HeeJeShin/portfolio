export const MonitoringSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">실시간 혼잡도 모니터링</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* 모니터링 기능 */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-xl">📊</span>
            모니터링 대시보드
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                1
              </span>
              <div>
                <div className="font-medium text-gray-900">실시간 인원 표시</div>
                <p className="text-sm text-gray-600">현재 입장 인원을 실시간으로 업데이트</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                2
              </span>
              <div>
                <div className="font-medium text-gray-900">혼잡도 게이지</div>
                <p className="text-sm text-gray-600">현재 혼잡도 레벨을 시각적으로 표시</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                3
              </span>
              <div>
                <div className="font-medium text-gray-900">히스토리 테이블</div>
                <p className="text-sm text-gray-600">인원 변동 내역을 시간순으로 기록</p>
              </div>
            </li>
          </ul>
        </div>

        {/* 카카오톡 알림 */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <span className="text-xl">💬</span>
            카카오톡 알림
          </h3>

          {/* 아이폰 목업 미니 */}
          <div className="bg-gray-100 rounded-2xl p-3 max-w-[200px] mx-auto">
            <div className="bg-sky-100 rounded-xl p-3 space-y-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-xs">
                  💬
                </div>
                <span className="text-xs font-bold text-gray-800">4J 혼잡도 알림</span>
              </div>
              <div className="bg-yellow-300 rounded-lg rounded-bl-sm px-2 py-1.5 text-xs">
                <div className="flex items-center gap-1">
                  <span>⚠️</span>
                  <span className="font-bold text-yellow-700">혼잡 상태!</span>
                </div>
                <p className="text-gray-700 mt-1">현재 인원: 1,234명</p>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-600 text-center mt-4">
            Level 3 이상 시 관리자에게 즉시 알림
          </p>
        </div>
      </div>

      {/* 갱신 주기 */}
      <div className="mt-6 bg-blue-50 rounded-xl p-6 border border-blue-100">
        <h3 className="font-bold text-gray-900 mb-3">갱신 주기 설정</h3>
        <div className="flex flex-wrap gap-3">
          <div className="px-4 py-2 bg-white rounded-lg border border-blue-200 text-sm">
            <span className="font-medium text-blue-600">1분</span>
            <span className="text-gray-500 ml-2">고빈도 모니터링</span>
          </div>
          <div className="px-4 py-2 bg-white rounded-lg border border-blue-200 text-sm">
            <span className="font-medium text-blue-600">10분</span>
            <span className="text-gray-500 ml-2">일반 모니터링</span>
          </div>
          <div className="px-4 py-2 bg-white rounded-lg border border-blue-200 text-sm">
            <span className="font-medium text-blue-600">1시간</span>
            <span className="text-gray-500 ml-2">저빈도 모니터링</span>
          </div>
        </div>
      </div>
    </section>
  );
};
