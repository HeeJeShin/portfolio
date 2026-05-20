export const DomainExpertiseSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">디자인 없이 개발한 배경</h2>

      <div className="bg-white rounded-xl p-6 border border-gray-200 mb-6">
        <div className="mb-6">
          <h3 className="font-bold text-gray-900 text-lg mb-2">도메인 이해 기반 UI/UX 설계</h3>
          <p className="text-gray-600">
            다년간 기존 행사 프로젝트를 진행하며 <strong className="text-gray-900">도메인에 대한 깊은 이해</strong>를 보유하고 있었습니다.
            전시부스 신청 업무의 요구사항과 운영 담당자들의 실무 고충을 이미 파악하고 있었기에,
            <strong className="text-gray-900"> 피그마 없이</strong> 프론트엔드 개발자가 직접 UI/UX를 설계하고 제안할 수 있었습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-gray-700 font-bold text-lg">01</span>
              <span className="font-bold text-gray-900">사업팀과 긴밀한 협업</span>
            </div>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-0.5">•</span>
                <span>주기적인 <strong>화면 설계 회의</strong> 진행</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-0.5">•</span>
                <span>합리적인 화면 구성을 협의하며 개발</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-0.5">•</span>
                <span>실사용자(운영팀) 불편사항 파악 및 개선안 제안</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-gray-700 font-bold text-lg">02</span>
              <span className="font-bold text-gray-900">운영 실무 이해</span>
            </div>
            <ul className="text-sm text-gray-600 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-0.5">•</span>
                <span>전시회 참가신청 접수 → 심사 → 승인 워크플로우</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-0.5">•</span>
                <span>입금 확인, 인보이스 발행 등 정산 업무</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-400 mt-0.5">•</span>
                <span>여러 탭을 오가며 작업하는 운영자 패턴 파악</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 어려움과 극복 */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <h3 className="font-bold text-gray-900 text-lg mb-4">진행 중 발생한 이슈와 해결</h3>
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm font-medium text-gray-900 mb-2">문제</p>
            <p className="text-sm text-gray-600">
              디자인 시안 없이 개발을 시작해야 하는 상황. 처음에는 화면 구성에 대한 막막함이 있었습니다.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm font-medium text-gray-900 mb-2">해결</p>
            <p className="text-sm text-gray-600">
              사업 담당 실무자와 <strong>유기적으로 소통</strong>하며 화면을 구성해 나갔습니다.
              도메인에 대한 이해도가 있었기에 요구사항을 빠르게 파악하고 제안할 수 있었고,
              그 과정에서 <strong className="text-gray-900">함께 만들어가는 즐거움</strong>을 느꼈습니다.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-300">
            <p className="text-sm font-medium text-gray-700 mb-2">아쉬운 점 & 교훈</p>
            <p className="text-sm text-gray-600">
              서류화된 화면 구성/로직 문서가 부족해 운영 배포 후 문서 작성에 어려움이 있었습니다.
              이후 프로젝트에서는 <strong>개발과 문서화를 병행</strong>하는 습관을 들이게 되었습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
