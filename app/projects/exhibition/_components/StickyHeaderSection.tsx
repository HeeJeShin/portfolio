export const StickyHeaderSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">상세 페이지 고정 헤더</h2>

      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <div className="mb-6">
          <h3 className="font-bold text-gray-900 text-lg mb-2">직접 제안한 UI 개선</h3>
          <p className="text-gray-600">
            운영팀 업무 흐름을 파악한 후, 여러 탭을 오가며 작업할 때 핵심 정보 확인이 어렵다는 점을 발견했습니다.
            사업팀에 <strong className="text-gray-900">상단 고정 헤더</strong>를 직접 제안하여 도입했습니다.
          </p>
        </div>

        {/* 고정 헤더 미리보기 */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6">
          {/* 브라우저 바 */}
          <div className="bg-gray-800 text-white px-4 py-2 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-red-500 rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></span>
            <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
            <span className="text-xs text-gray-400 ml-2">admin.exhibition.co.kr/application/12345</span>
          </div>

          {/* 고정 헤더 */}
          <div className="bg-gray-900 text-white px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div>
                  <p className="text-xs text-gray-400">회사명</p>
                  <p className="font-bold text-lg">(주)이즈피엠피</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">ID</p>
                  <p className="font-medium">hong@email.com</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">등록일</p>
                  <p className="font-medium">2026.03.15</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {/* 상태 뱃지 - 클릭 가능 */}
                <button className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium flex items-center gap-2 transition-colors">
                  <span>승인완료</span>
                </button>
              </div>
            </div>
          </div>

          {/* 탭 내비게이션 */}
          <div className="border-b border-gray-200">
            <div className="flex gap-1 px-4">
              {["기본정보", "회사정보", "부스신청", "출입증", "인보이스"].map((tab, i) => (
                <button
                  key={tab}
                  className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
                    i === 2
                      ? "border-gray-900 text-gray-900"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* 컨텐츠 영역 (스크롤) */}
          <div className="p-6 bg-gray-50 h-32 overflow-y-auto">
            <div className="text-center text-gray-400 text-sm">
              스크롤해도 헤더는 상단에 고정
            </div>
          </div>
        </div>

        {/* 개선 효과 */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 text-center">
            <p className="font-bold text-gray-900">핵심 정보 상시 노출</p>
            <p className="text-xs text-gray-500 mt-1">회사명, 상태, ID, 날짜</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 text-center">
            <p className="font-bold text-gray-900">상태 즉시 변경</p>
            <p className="text-xs text-gray-500 mt-1">뱃지 클릭으로 바로 상태 변경</p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 text-center">
            <p className="font-bold text-gray-900">실시간 동기화</p>
            <p className="text-xs text-gray-500 mt-1">TanStack Query + Zustand</p>
          </div>
        </div>
      </div>
    </section>
  );
};
