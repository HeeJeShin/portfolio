// 사이드바: 이름·한 줄 소개·연락처·이력서 PDF. 연락처는 여기에만 둠 (본문 연락처 섹션은 중복이라 제거)
export const Sidebar = () => {
  return (
    <aside className="no-print lg:sticky lg:top-0 lg:h-screen lg:w-[380px] lg:flex-shrink-0 bg-white border-b lg:border-b-0 lg:border-r border-gray-200">
      <div className="flex flex-col h-full px-8 py-10 lg:py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">신희제</h1>
          <p className="text-base text-[#191979] font-medium">Developer</p>
          <p className="mt-3 text-sm text-gray-600 leading-relaxed break-keep">
            주어진 상황에서 할 수 있는 방법을 찾아, 함께 일하는 사람과 맞춰가는 프론트엔드 개발자입니다. 경력·기술은 아래 이력서와 경력기술서 PDF에 정리했습니다.
          </p>
        </div>


        <div className="mb-8 space-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-900 w-12">Email</span>
            <a href="mailto:heeheehee.hj@gmail.com" className="hover:text-[#191979] truncate">
              heeheehee.hj@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-900 w-12">Phone</span>
            <span>010-2390-2038</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-900 w-12">GitHub</span>
            <a
              href="https://github.com/HeeJeShin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#191979] hover:underline"
            >
              HeeJeShin
            </a>
          </div>
        </div>

        <div className="mt-auto">
          <a
            href="/개발자_신희제_이력서.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-4 py-3 bg-[#191979] text-white rounded-lg hover:bg-blue-500 transition-colors text-sm font-medium flex items-center justify-center gap-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
              />
            </svg>
            이력서 PDF 보기
          </a>
          <a
            href="/경력기술서_신희제.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 w-full px-4 py-3 bg-white border border-[#191979] text-[#191979] rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium flex items-center justify-center"
          >
            경력기술서 PDF 보기
          </a>
        </div>
      </div>
    </aside>
  );
};
