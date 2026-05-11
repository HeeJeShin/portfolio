import { sampleTableData } from "../_data/constants";

interface DataTableSectionProps {
  viewMode: "desktop" | "mobile";
  setViewMode: (mode: "desktop" | "mobile") => void;
  activeTab: "regular" | "preliminary";
  setActiveTab: (tab: "regular" | "preliminary") => void;
}

export const DataTableSection = ({ viewMode, setViewMode, activeTab, setActiveTab }: DataTableSectionProps) => {
  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">DataTable 컴포넌트</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setViewMode("desktop")}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              viewMode === "desktop" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600"
            }`}
          >
            데스크톱
          </button>
          <button
            onClick={() => setViewMode("mobile")}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              viewMode === "mobile" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600"
            }`}
          >
            모바일
          </button>
        </div>
      </div>

      {/* Tab Buttons */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setActiveTab("regular")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === "regular" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          정규신청
        </button>
        <button
          onClick={() => setActiveTab("preliminary")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === "preliminary" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          예비신청
        </button>
      </div>

      <div className="bg-gray-50 rounded-xl p-4 overflow-hidden">
        {viewMode === "desktop" ? (
          /* Desktop Table View */
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-900 bg-gray-100 sticky left-0">
                    <input type="checkbox" className="rounded" />
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900 bg-gray-100 sticky left-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                    업체명
                  </th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">상태</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">부스번호</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-900">신청일</th>
                </tr>
              </thead>
              <tbody>
                {sampleTableData.map((row) => (
                  <tr key={row.id} className="border-b border-gray-100 hover:bg-white">
                    <td className="py-3 px-4 bg-white sticky left-0">
                      <input type="checkbox" className="rounded" />
                    </td>
                    <td className="py-3 px-4 font-medium text-gray-900 bg-white sticky left-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                      {row.company}
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        row.status === "승인완료" ? "bg-green-100 text-green-700" :
                        row.status === "입금대기" ? "bg-yellow-100 text-yellow-700" :
                        row.status === "입금완료" ? "bg-blue-100 text-blue-700" :
                        "bg-gray-100 text-gray-700"
                      }`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-600">{row.booth}</td>
                    <td className="py-3 px-4 text-gray-600">{row.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          /* Mobile Card View */
          <div className="space-y-3">
            {sampleTableData.slice(0, 3).map((row) => (
              <div key={row.id} className="bg-white rounded-lg p-4 border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-gray-900">{row.company}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    row.status === "승인완료" ? "bg-green-100 text-green-700" :
                    row.status === "입금대기" ? "bg-yellow-100 text-yellow-700" :
                    "bg-gray-100 text-gray-700"
                  }`}>
                    {row.status}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="text-gray-500">부스번호</span>
                    <p className="font-medium">{row.booth}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">신청일</span>
                    <p className="font-medium">{row.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {/* Features */}
        <div className="mt-4 pt-4 border-t border-gray-200 flex flex-wrap gap-2">
          <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">✓ Sticky 컬럼</span>
          <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">✓ 반응형 자동 전환</span>
          <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">✓ 행 선택</span>
          <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">✓ 페이지네이션</span>
        </div>
      </div>
    </section>
  );
};
