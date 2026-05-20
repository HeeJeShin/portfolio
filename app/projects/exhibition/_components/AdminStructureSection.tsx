export const AdminStructureSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">2단계 어드민 구조</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Super Admin */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="mb-4">
            <h3 className="font-bold text-gray-900">슈퍼어드민</h3>
            <p className="text-sm text-gray-500">SystemSidebar</p>
          </div>
          <ul className="space-y-2 text-sm text-gray-600">
            {["전시회 프로젝트 CRUD", "관리자 계정 관리", "시스템 전역 설정"].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* Project Admin */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="mb-4">
            <h3 className="font-bold text-gray-900">프로젝트 어드민</h3>
            <p className="text-sm text-gray-500">AdminSidebar</p>
          </div>
          <ul className="space-y-2 text-sm text-gray-600">
            {["참가신청 관리", "신청 상태 변경", "인보이스 발행"].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
