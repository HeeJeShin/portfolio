export const ChallengesSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">진행 중 발생한 이슈와 해결</h2>

      <div className="space-y-4">
        {/* Safari 브라우저 호환성 이슈 */}
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
              1
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 mb-2">Safari 브라우저 호환성 이슈</h3>
              <div className="bg-white rounded-lg p-4 mb-3">
                <p className="text-sm font-medium text-gray-900 mb-1">문제</p>
                <p className="text-sm text-gray-600">
                  Safari는 다른 브라우저와 동작 방식이 달라 여러 이슈가 발생했습니다.
                  <strong> 팝업 차단 정책</strong>으로 인한 NICE 본인인증 플로우 오류,
                  <strong> ITP(Intelligent Tracking Prevention)</strong>로 인한 토큰 유실,
                  <strong> 결제 모듈 보안 처리</strong> 등 Safari 특유의 문제들이 있었습니다.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm font-medium text-blue-700 mb-1">해결</p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• NICE 본인인증 팝업 차단 → <strong className="text-blue-600">페이지 리다이렉트 방식</strong>으로 인증 플로우 전환</li>
                  <li>• ITP 토큰 유실 → <strong className="text-blue-600">쿠키 + localStorage 이중 저장</strong> 전략 적용</li>
                  <li>• 결제 보안 → <strong className="text-blue-600">CSP/CORS 헤더 화이트리스트</strong> 설정</li>
                  <li>• 테스트 환경 → Mac 장비 요청, Safari 원격 디버깅 환경 구축</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 결제 로직 이슈 */}
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
              2
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 mb-2">결제 로직 아키텍처 개선 제안</h3>
              <div className="bg-white rounded-lg p-4 mb-3">
                <p className="text-sm font-medium text-gray-900 mb-1">문제</p>
                <p className="text-sm text-gray-600">
                  사용자 네트워크 환경에 따라 <strong>결제는 완료되었으나 DB 업데이트가 누락</strong>되는 문제가 발생했습니다.
                  특히 <strong>모바일 환경</strong>에서는 네트워크가 불안정하여 결제 요청 후 응답을 받지 못하는 경우가 빈번했고,
                  프론트에서 결제 완료 처리를 담당하다 보니 데이터 정합성 문제가 심각했습니다.
                </p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm font-medium text-blue-700 mb-1">해결</p>
                <p className="text-sm text-gray-600">
                  프론트는 <strong className="text-blue-600">결제 요청만 담당</strong>하고,
                  결제 완료 후 DB 업데이트는 <strong className="text-blue-600">백엔드에서 처리</strong>하도록 구조 변경을 제안했습니다.
                  백엔드 팀을 설득하여 아키텍처를 재설계했고, 이미 구현된 프론트 로직을 다시 개발해야 했습니다.
                  추가 작업이 필요했지만, <strong className="text-blue-600">결제 안정성과 사용자 경험</strong>을 위해 필요한 결정이었습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
