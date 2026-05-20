export const AIAnalysisSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">AI 도면 분석</h2>

      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <div className="mb-6">
          <h3 className="font-bold text-blue-600 mb-1">Google Gemini AI 활용</h3>
          <p className="text-sm text-gray-600">
            도면 이미지를 업로드하면 AI가 자동으로 분석하여 필요한 정보를 추출합니다.
          </p>
        </div>

        {/* AI 분석 항목 */}
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <div className="font-bold text-blue-600 mb-1">면적 추정</div>
            <p className="text-xs text-gray-600">
              도면의 스케일과 형태를 분석하여 행사장 면적을 자동 추정
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <div className="font-bold text-blue-600 mb-1">출입구 감지</div>
            <p className="text-xs text-gray-600">
              비상구 및 출입구 개수를 파악하여 안전 인원 산출에 반영
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <div className="font-bold text-blue-600 mb-1">부스 개수</div>
            <p className="text-xs text-gray-600">
              전시 부스 배치를 인식하여 실제 사용 가능 면적 계산
            </p>
          </div>
        </div>

        {/* 코드 미리보기 */}
        <div className="mt-6">
          <div className="text-xs font-mono bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
            <div className="text-gray-500">// AI 도면 분석 API 호출</div>
            <div>
              <span className="text-purple-400">const</span>{" "}
              <span className="text-yellow-300">analyzeFloorPlan</span> ={" "}
              <span className="text-purple-400">async</span> (image: File) {"=> {"}{" "}
            </div>
            <div className="pl-4">
              <span className="text-purple-400">const</span> response ={" "}
              <span className="text-purple-400">await</span>{" "}
              <span className="text-yellow-300">fetch</span>(
              <span className="text-green-300">&apos;/api/analyze&apos;</span>, {"{"}{" "}
            </div>
            <div className="pl-8">
              method: <span className="text-green-300">&apos;POST&apos;</span>,
            </div>
            <div className="pl-8">
              body: <span className="text-yellow-300">formData</span>
            </div>
            <div className="pl-4">{"}"});</div>
            <div className="pl-4">
              <span className="text-purple-400">return</span> response.json();{" "}
              <span className="text-gray-500">// {"{"} area, entranceCount, boothCount {"}"}</span>
            </div>
            <div>{"}"}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
