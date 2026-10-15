import Link from "next/link";

const challenges = [
  {
    title: "백엔드 공부: 데이터가 지켜지는 구조까지 직접 만들기",
    desc: "스마트관광 프로젝트에서 결제 완료 처리를 백엔드로 옮기자고 제안하며, 데이터의 정확성은 화면이 아니라 서버가 책임져야 한다는 걸 배웠습니다. 제안에서 그치지 않고 그 구조를 직접 만들어봐야 백엔드와 더 깊이 논의할 수 있다고 생각해 백엔드를 공부하고 있습니다. NestJS를 고른 이유는 프론트에서 쓰던 TypeScript를 그대로 쓸 수 있고, Module·Controller·Service로 구조가 정해져 있어 누가 봐도 흐름을 바로 읽을 수 있기 때문입니다. 중고차 구매 가이드(중구)를 만들며 고질병 같은 돈이 걸린 정보는 출처가 없으면 \'검증됨\'으로 저장되지 않도록 서버 규칙으로 막고, AI(Gemini)는 안내와 추천에만 쓰도록 역할을 나눴습니다.",
    link: "https://github.com/HeeJeShin/car-check",
  },
  {
    title: "신규 도메인(의료 헬스케어) 설계 및 개발",
    desc: "퇴원 후 자가관리 시 환자가 불안해하는 문제를 해결하기 위한 임상간호연구에 개발자로 참여했습니다. Claude Design으로 초기 기획서를 만들어 의료진에게 보여주며 방향을 맞추고, 이를 토대로 개발하며 기술명세서까지 작성했습니다.",
    link: "/projects/home-care",
  },
  {
    title: "AI를 쓰는 건 당연해졌다, 필요한 건 검증의 규격화",
    desc: "2023년부터 AI를 업무에 써왔습니다. 개발자마다 검증 방식이 달라 같은 문제가 반복되던 것을 보고, 제가 처음부터 구축하는 프로젝트에 검증을 미리 세팅하기로 했습니다. CLAUDE.md로 컨벤션과 검증 규칙을 정의하고, AI가 만든 코드는 타입 체크와 테스트 216개를 통과해야 반영되도록 규격화했습니다.",
    link: "/projects/exhibition#decisions",
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
