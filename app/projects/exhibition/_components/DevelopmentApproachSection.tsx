export const DevelopmentApproachSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">개발 접근 방식</h2>
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-100">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <span className="text-2xl">🎯</span>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">혼자여도 팀처럼, 미래를 위한 설계</h3>
            <p className="text-gray-600">
              현재 프론트엔드 개발자는 저 혼자지만, <strong className="text-indigo-600">언제든 새로운 팀원이 합류해도 빠르게 적응할 수 있도록</strong>
              처음부터 체계적으로 정리하며 개발했습니다.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 border border-indigo-100">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-indigo-600 font-bold">01</span>
              <span className="font-medium text-gray-900">컨벤션 문서화</span>
            </div>
            <p className="text-sm text-gray-600">
              CLAUDE.md에 코드 스타일, API 패턴, 컴포넌트 사용법 등 <strong>모든 규칙을 문서화</strong>
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-indigo-100">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-indigo-600 font-bold">02</span>
              <span className="font-medium text-gray-900">공용 컴포넌트</span>
            </div>
            <p className="text-sm text-gray-600">
              56개 공용 컴포넌트로 <strong>일관된 UI 패턴</strong> 유지, 새 개발자도 바로 활용 가능
            </p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-indigo-100">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-indigo-600 font-bold">03</span>
              <span className="font-medium text-gray-900">테스트 케이스</span>
            </div>
            <p className="text-sm text-gray-600">
              216개 테스트 케이스 문서화로 <strong>기능 명세와 검증 기준</strong> 명확화
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
