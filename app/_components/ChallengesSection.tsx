import Link from "next/link";

const challenges = [
  {
    title: "어드민 프로젝트에서 UI 가이드 먼저 설계",
    desc: "전시부스 신청 시스템은 어드민 특성상 디자이너 없이 진행했습니다. 도메인을 먼저 파악한 뒤 가이드 페이지를 만들어 기본 화면 구성 규칙을 정리했고, 이를 기반으로 사업부서와 회의하며 방향을 맞춰나갔습니다.",
    link: "/projects/exhibition#documentation",
  },
  {
    title: "브라우저 호환성 이슈 분석 및 해결",
    desc: "스마트관광 프로젝트에서 Safari ITP로 인한 토큰 유실 문제를 발견하고, 쿠키 + localStorage 이중 저장 방식으로 해결했습니다. 팝업 차단 이슈도 리다이렉트 방식으로 전환해 크로스 브라우저 안정성을 확보했습니다.",
  },
  {
    title: "아키텍처 개선 제안",
    desc: "결제 로직이 프론트엔드에 집중되어 상태 관리가 복잡해지는 문제를 발견하고, 백엔드 분리를 제안해 아키텍처를 재설계했습니다.",
  },
  {
    title: "레거시 시스템 마이그레이션",
    desc: "JSP 기반 O2MEET 플랫폼을 Next.js로 전환하며 컴포넌트 기반 구조를 도입했습니다. 소스코드가 가벼워지고 유지보수가 용이해졌습니다.",
  },
  {
    title: "테스트 문화 도입",
    desc: "Vitest 기반 테스트 케이스 216개를 작성하고, TypeScript 타입 시스템을 도입해 런타임 에러를 사전에 방지했습니다. 단위테스트 결과물이 자동으로 문서화되도록 구현해 동료들도 쉽게 활용할 수 있도록 했습니다.",
    link: "/projects/exhibition#unit-test",
  },
];

export const ChallengesSection = () => {
  return (
    <section id="challenges" className="mb-16 scroll-mt-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
        도전과 성장
      </h2>
      <div className="space-y-4">
        {challenges.map((item) => {
          const content = (
            <>
              <h3 className="font-bold text-blue-600 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              {item.link && (
                <p className="text-sm text-blue-600 underline mt-2">자세히 보기 →</p>
              )}
            </>
          );

          if (item.link) {
            return (
              <Link
                key={item.title}
                href={item.link}
                className="block bg-white rounded-xl border border-gray-200 p-5 hover:border-blue-300 hover:shadow-md transition-all cursor-pointer"
              >
                {content}
              </Link>
            );
          }

          return (
            <div
              key={item.title}
              className="bg-white rounded-xl border border-gray-200 p-5"
            >
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
};
