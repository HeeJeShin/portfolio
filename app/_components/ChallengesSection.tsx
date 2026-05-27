import Link from "next/link";

const challenges = [
  {
    title: "신규 도메인(의료 헬스케어) 설계 및 개발",
    desc: "퇴원 후 자가관리 시 환자가 불안해하는 문제를 해결하기 위한 임상간호연구에 개발자로 참여했습니다. Claude Design으로 초기 기획서를 만들어 의료진에게 보여주며 방향을 맞추고, 이를 토대로 개발하며 기술명세서까지 작성했습니다.",
    link: "/projects/home-care",
  },
  {
    title: "AI 에이전트(Claude Code) 기반 개발 워크플로우 구축",
    desc: "전시부스 신청 시스템(모노레포, 2개 앱 + 공유 패키지)에서 Claude Code를 활용해 설계 검토, 테스트 실행/분석, CSV 리포트 자동 갱신까지 AI 협업 워크플로우를 구축했습니다. CLAUDE.md로 프로젝트 컨벤션을 정의해 일관된 코드 품질을 유지했습니다.",
    link: "/projects/exhibition#unit-test",
  },
  {
    title: "1차 중단 → 2차 재도전: 성능 60% 개선",
    desc: "1차 중단 후 회고를 바탕으로 2차에서 부족한 점을 개선하여 LCP 50.1s→20.1s(60%↓), 미사용 코드 2,141KB→25KB(99%↓), CLS 0.248→0.000(100%↓)으로 성능을 개선했습니다. (측정: Lighthouse)",
    link: "/projects/o2meet-migration",
  },
  {
    title: "대규모 모노레포 설계 및 테스트 자동화",
    desc: "Turborepo + pnpm workspace로 apps/user, apps/admin, packages/shared 3-tier 구조를 설계했습니다. Vitest 기반 테스트 케이스 216개 작성, 자동 문서화로 수동 대비 80% 시간을 절감했습니다.",
    link: "/projects/exhibition#monorepo",
  },
  {
    title: "브라우저 호환성 이슈 분석 및 해결",
    desc: "스마트관광 프로젝트에서 Safari ITP로 인한 토큰 유실 문제를 발견하고, 쿠키 + localStorage 이중 저장 방식으로 해결했습니다. 팝업 차단 이슈도 리다이렉트 방식으로 전환해 크로스 브라우저 안정성을 확보했습니다.",
    link: "/projects/smart-tourism#browser-compatibility",
  },
  {
    title: "Google Gemini AI 프롬프트 설계",
    desc: "사내 AI Boost Challenge에서 행사장 도면을 분석해 수용인원을 자동 계산하는 서비스를 개발했습니다. Gemini AI 연동, 도면 분석용 프롬프트 설계, 응답 파싱 로직을 구현했습니다.",
    link: "/projects/4j",
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
              <h3 className="font-bold text-[#191979] mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              {item.link && (
                <p className="text-sm text-[#191979] underline mt-2">자세히 보기 →</p>
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
