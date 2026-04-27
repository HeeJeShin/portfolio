"use client";

import Link from "next/link";

export default function Home() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header with PDF Button */}
      <header className="no-print sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-semibold text-gray-900">신희제</span>
          <button
            onClick={handlePrint}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            PDF 저장
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">신희제</h1>
          <p className="text-xl text-blue-600 font-medium mb-4">
            Frontend Developer
          </p>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            주체적으로 일하는 프론트엔드 개발자입니다.
            <br />
            문제를 발견하면 스스로 해결책을 제안하고, 사용자 관점에서 더 나은
            경험을 만들기 위해 능동적으로 움직입니다.
          </p>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
            기술 스택
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Framework</h3>
              <div className="flex flex-wrap gap-2">
                {["Next.js", "React", "TypeScript"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-md text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">상태관리</h3>
              <div className="flex flex-wrap gap-2">
                {["Zustand", "TanStack Query"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-md text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">스타일링</h3>
              <div className="flex flex-wrap gap-2">
                {["Tailwind CSS"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-md text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">폼 & 검증</h3>
              <div className="flex flex-wrap gap-2">
                {["React Hook Form", "Zod"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-md text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">빌드 & 테스트</h3>
              <div className="flex flex-wrap gap-2">
                {["Turborepo", "pnpm", "Playwright"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-md text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">국제화</h3>
              <div className="flex flex-wrap gap-2">
                {["next-intl (KR/EN/JA)"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-50 text-blue-700 rounded-md text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Project Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
            프로젝트
          </h2>

          <div className="bg-gray-50 rounded-xl p-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  Exhibition Booth
                </h3>
                <p className="text-gray-600">전시 부스 신청 플랫폼</p>
              </div>
              <Link
                href="/exhibition"
                className="no-print inline-flex items-center gap-1 px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors mt-2 md:mt-0"
              >
                상세 보기
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <p className="text-gray-700 mb-4">
              Turborepo 모노레포 구조로 User 앱과 Admin 앱을 개발했습니다.
            </p>

            {/* 주요 구현 기능 */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">주요 구현 기능</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-medium text-gray-900 mb-2">인증 시스템</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• JWT 토큰 기반 인증 (Access + Refresh)</li>
                    <li>• 401/403 에러 시 자동 토큰 갱신</li>
                    <li>• User/Admin 토큰 분리 관리</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-medium text-gray-900 mb-2">동적 폼 시스템</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• API 응답 기반 폼 필드 동적 생성</li>
                    <li>• 다양한 타입 지원 (TEXT, FILE, RADIO 등)</li>
                    <li>• 파일 드래그앤드롭 업로드</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-medium text-gray-900 mb-2">데이터 테이블</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 반응형 (데스크톱: 테이블, 모바일: 카드)</li>
                    <li>• Sticky 컬럼 + 그림자 효과</li>
                    <li>• 페이지네이션, 검색, 필터</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h5 className="font-medium text-gray-900 mb-2">기타</h5>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• 3개국어 지원 (KR/EN/JA)</li>
                    <li>• 인쇄/PDF 최적화 인보이스</li>
                    <li>• E2E 테스트 자동화 (14/15 통과)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 해결한 기술적 과제 */}
            <div className="mb-6">
              <h4 className="font-semibold text-gray-900 mb-3">
                해결한 기술적 과제
              </h4>
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-medium text-gray-900">
                    React Query 캐시 오염
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="text-red-600">문제:</span> 로그인 후 이전
                    사용자 데이터 표시 →{" "}
                    <span className="text-blue-600">해결:</span> 로그인/로그아웃
                    시 queryClient.clear() 호출
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-medium text-gray-900">
                    DataTable 스크롤 깜빡임
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="text-red-600">문제:</span> Sticky 컬럼
                    그림자 flickering →{" "}
                    <span className="text-blue-600">해결:</span> 상태 기반 → 고정
                    그림자로 변경
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <p className="font-medium text-gray-900">
                    폼 단계 이동 시 데이터 손실
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="text-red-600">문제:</span> ProgressBar 클릭
                    시 유효성 검사 없이 이동 →{" "}
                    <span className="text-blue-600">해결:</span> 클릭 이벤트에
                    validateForm() 연동
                  </p>
                </div>
              </div>
            </div>

            {/* UX 제안 */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">
                주도적 UX 개선 제안
              </h4>
              <p className="text-sm text-gray-600 mb-3">
                비개발자(기획자, 운영팀)와 협업하며 사용자 관점의 UI/UX 개선을
                제안하고 구현했습니다.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 text-gray-900 font-medium">
                        발견한 문제
                      </th>
                      <th className="text-left py-2 text-gray-900 font-medium">
                        제안 및 구현
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    <tr className="border-b border-gray-100">
                      <td className="py-2">입력 후 필드 구분 어려움</td>
                      <td className="py-2">placeholder → 상단 라벨로 변경</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2">신청 개수 파악 어려움</td>
                      <td className="py-2">타이틀에 (현재/최대) 표시 추가</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2">첫 번째 폼 삭제 가능</td>
                      <td className="py-2">두 번째 폼부터만 삭제 버튼 표시</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-2">필수 입력 없이 다음 단계 이동</td>
                      <td className="py-2">ProgressBar에 유효성 검사 연동</td>
                    </tr>
                    <tr>
                      <td className="py-2">저장 버튼 눈에 안 띔</td>
                      <td className="py-2">버튼 크기 및 여백 확대</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
            연락처
          </h2>
          <div className="flex items-center gap-2 text-gray-700">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>010-2390-2038</span>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center text-sm text-gray-500">
          <p>Claude Code로 구현했습니다.</p>
        </div>
      </footer>
    </div>
  );
}
