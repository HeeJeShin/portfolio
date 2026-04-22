"use client";

import { useState } from "react";
import Link from "next/link";

type Screen = "super-admin" | "project-list" | "admin-sidebar" | "user-list" | "data-table" | "user-detail";

export default function ExhibitionPage() {
  const [activeScreen, setActiveScreen] = useState<Screen>("super-admin");

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-gray-500 hover:text-gray-900 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Link>
            <span className="text-gray-400">-</span>
          </div>
          <span className="text-sm text-gray-400">-</span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* 프로젝트 개요 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">프로젝트 개요</h2>
          <div className="bg-gray-50 rounded-xl p-6">
            <p className="text-gray-700 mb-4">
              전시회 부스 신청 및 관리를 위한 플랫폼입니다. <strong>Turborepo 모노레포</strong> 구조로
              User 앱과 Admin 앱을 개발했습니다.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Next.js 16", "React 19", "TypeScript", "Zustand", "TanStack Query", "Tailwind CSS 4", "Turborepo"].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-md text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 어드민 구조 설명 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Admin 구조</h2>

          {/* 구조 다이어그램 */}
          <div className="bg-gray-900 rounded-xl p-6 mb-6 text-white">
            <div className="flex gap-4 items-start">
              {/* Super Admin */}
              <div className="flex-shrink-0">
                <div className="bg-gray-800 rounded-lg p-3 w-14">
                  <div className="text-xs text-gray-400 mb-2 text-center">System</div>
                  <div className="space-y-2">
                    <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center mx-auto">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6z" />
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center mx-auto">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                      </svg>
                    </div>
                    <div className="w-8 h-8 bg-gray-700 rounded flex items-center justify-center mx-auto">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-2 text-center">슈퍼어드민</p>
              </div>

              {/* Arrow */}
              <div className="flex items-center pt-12">
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>

              {/* Project Admin */}
              <div className="flex-1">
                <div className="bg-gray-800 rounded-lg overflow-hidden">
                  <div className="flex">
                    {/* Admin Sidebar */}
                    <div className="w-40 bg-white p-3 border-r border-gray-200">
                      <div className="text-xs text-gray-500 mb-2">프로젝트 메뉴</div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 px-2 py-1.5 bg-blue-600 text-white rounded text-xs">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                          </svg>
                          내정보
                        </div>
                        <div className="flex items-center gap-2 px-2 py-1.5 text-gray-600 hover:bg-gray-100 rounded text-xs">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
                          </svg>
                          기본정보
                        </div>
                        <div className="flex items-center gap-2 px-2 py-1.5 text-gray-600 hover:bg-gray-100 rounded text-xs">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
                          </svg>
                          참가신청
                        </div>
                      </div>
                    </div>
                    {/* Content Area */}
                    <div className="flex-1 p-3 bg-gray-50">
                      <div className="text-xs text-gray-500">콘텐츠 영역</div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mt-2 text-center">프로젝트 어드민</p>
              </div>
            </div>
          </div>

          {/* 구조 설명 테이블 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-gray-900 text-white rounded flex items-center justify-center text-xs">S</span>
                슈퍼어드민 (SystemSidebar)
              </h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  프로젝트 관리 - 전시회 프로젝트 CRUD
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  관리자 계정 - 어드민 계정 관리
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  시스템 설정 - 전역 설정
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-blue-600 text-white rounded flex items-center justify-center text-xs">A</span>
                프로젝트 어드민 (AdminSidebar)
              </h3>
              <ul className="text-sm text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  내정보 - 관리자 프로필
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  기본정보 - 프로젝트 설정
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  참가신청 - 예비/정규 신청 관리
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 화면 선택 탭 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Admin 화면 구현</h2>

          {/* 탭 네비게이션 */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {[
              { id: "super-admin", label: "슈퍼어드민" },
              { id: "project-list", label: "프로젝트 목록" },
              { id: "admin-sidebar", label: "어드민 사이드바" },
              { id: "user-list", label: "참가신청 목록" },
              { id: "data-table", label: "데이터 테이블" },
              { id: "user-detail", label: "신청 상세" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveScreen(tab.id as Screen)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  activeScreen === tab.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* 화면 목업 */}
          <div className="border border-gray-200 rounded-xl overflow-hidden shadow-lg">
            {/* 브라우저 탭 바 */}
            <div className="bg-gray-100 px-4 py-2 flex items-center gap-2 border-b border-gray-200">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="flex-1 ml-4">
                <div className="bg-white rounded px-3 py-1 text-xs text-gray-500 max-w-xs">
                  exhibition-admin.vercel.app
                </div>
              </div>
            </div>

            {/* 화면 콘텐츠 */}
            <div className="bg-gray-50 min-h-[400px]">
              {activeScreen === "super-admin" && <SuperAdminScreen />}
              {activeScreen === "project-list" && <ProjectListScreen />}
              {activeScreen === "admin-sidebar" && <AdminSidebarScreen />}
              {activeScreen === "user-list" && <UserListScreen />}
              {activeScreen === "data-table" && <DataTableScreen />}
              {activeScreen === "user-detail" && <UserDetailScreen />}
            </div>
          </div>
        </section>

        {/* 주도적 UI/UX 설계 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">주도적 UI/UX 설계</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">데이터 테이블 구조 설계</h3>
              </div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">→</span>
                  좌우 스크롤 시에도 핵심 정보 확인 가능하도록 <strong>Sticky 컬럼</strong> 적용
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">→</span>
                  고정 컬럼 너비를 직접 정의하여 일관된 레이아웃 유지
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-0.5">→</span>
                  스크롤 위치에 따른 그림자 효과로 시각적 구분
                </li>
              </ul>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-green-600 text-white rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">대시보드 실시간 업데이트</h3>
              </div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">→</span>
                  페이지 새로고침 없이 <strong>실시간 데이터 반영</strong>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">→</span>
                  TanStack Query로 자동 리페칭 및 캐시 무효화
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-0.5">→</span>
                  운영팀이 여러 탭에서 동시 작업 시에도 최신 상태 유지
                </li>
              </ul>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-purple-600 text-white rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">반응형 테이블 전환</h3>
              </div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">→</span>
                  데스크톱: 테이블 뷰 / 모바일: <strong>카드 뷰</strong> 자동 전환
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">→</span>
                  화면 크기에 따른 최적화된 정보 표시
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-0.5">→</span>
                  터치 환경에서도 편리한 조작 가능
                </li>
              </ul>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-orange-600 text-white rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">비개발자 협업</h3>
              </div>
              <ul className="text-sm text-gray-700 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-0.5">→</span>
                  기획자/운영팀과 소통하며 <strong>사용자 관점 개선</strong> 제안
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-0.5">→</span>
                  Before/After 스크린샷으로 명확한 설명
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-600 mt-0.5">→</span>
                  빠른 프로토타입 → 피드백 → 수정 사이클
                </li>
              </ul>
            </div>
            <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-5 md:col-span-2">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-cyan-600 text-white rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900">상세 페이지 고정 헤더 (도메인 이해 기반)</h3>
              </div>
              <p className="text-sm text-gray-700 mb-3">
                전시 부스 운영 업무를 이해하고, 어드민이 <strong>여러 탭을 오가며 작업</strong>할 때
                핵심 정보를 매번 확인하기 어렵다는 점을 파악하여 <strong>사업팀에 직접 제안</strong>했습니다.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-0.5">→</span>
                    <strong>상단 고정 헤더</strong>: 회사명, 상태, ID, 등록일, 신청일 표시
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-0.5">→</span>
                    탭 이동/스크롤해도 <strong>핵심 정보 항상 노출</strong>
                  </li>
                </ul>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-0.5">→</span>
                    <strong>상태 뱃지 클릭</strong>으로 상세에서 바로 상태 변경
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-600 mt-0.5">→</span>
                    운영팀 <strong>업무 효율성 향상</strong> 실현
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 구현 플로우 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">구현 플로우</h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
              <div>
                <h3 className="font-semibold text-gray-900">로그인</h3>
                <p className="text-sm text-gray-600">JWT 토큰 발급 (Access + Refresh), 슈퍼어드민/어드민 권한 분기</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
              <div>
                <h3 className="font-semibold text-gray-900">프로젝트 선택</h3>
                <p className="text-sm text-gray-600">슈퍼어드민은 프로젝트 목록에서 선택, 일반 어드민은 할당된 프로젝트로 자동 이동</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
              <div>
                <h3 className="font-semibold text-gray-900">참가신청 관리</h3>
                <p className="text-sm text-gray-600">예비/정규 탭으로 신청 목록 조회, 검색/필터, 상세 페이지에서 상태 변경</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
              <div>
                <h3 className="font-semibold text-gray-900">신청 상세</h3>
                <p className="text-sm text-gray-600">업체정보, 부스, 출입증, 인보이스 등 탭별 상세 정보 관리</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-500">
          <p>Claude Code로 구현했습니다.</p>
        </div>
      </footer>
    </div>
  );
}

// 슈퍼어드민 화면
function SuperAdminScreen() {
  return (
    <div className="flex h-[400px]">
      {/* System Sidebar */}
      <aside className="w-14 bg-gray-900 flex flex-col">
        <div className="h-14 flex items-center justify-center border-b border-gray-800">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
          </svg>
        </div>
        <nav className="flex-1 py-4">
          <ul className="space-y-1 px-2">
            <li>
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mx-auto">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6z" />
                </svg>
              </div>
            </li>
            <li>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto hover:bg-white/10">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
            </li>
            <li>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto hover:bg-white/10">
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
                </svg>
              </div>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-50">
        <h2 className="text-lg font-bold text-gray-900 mb-4">프로젝트 관리</h2>
        <div className="text-sm text-gray-500 mb-4">슈퍼어드민만 접근 가능한 시스템 메뉴</div>

        {/* 설명 */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-sm font-medium text-blue-900">SystemSidebar 컴포넌트</p>
              <p className="text-xs text-blue-700 mt-1">
                슈퍼어드민용 좁은 사이드바로, 프로젝트 관리/관리자 계정/시스템 설정 메뉴를 아이콘으로 표시합니다.
                Tooltip으로 메뉴명을 표시합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 프로젝트 목록 화면
function ProjectListScreen() {
  return (
    <div className="p-6 bg-gray-50">
      <h2 className="text-lg font-bold text-gray-900 mb-4">프로젝트 목록</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { name: "2024 국제 전시회", period: "2024.05.10 - 2024.05.15", location: "서울 코엑스", status: "Ongoing" },
          { name: "테크 페스티벌 2024", period: "2024.06.01 - 2024.06.05", location: "부산 벡스코", status: "Upcoming" },
          { name: "산업 박람회", period: "2024.03.20 - 2024.03.25", location: "대구 엑스코", status: "Completed" },
        ].map((project, i) => (
          <div key={i} className="bg-white rounded-xl border border-gray-200 p-4 hover:border-blue-500 transition-colors cursor-pointer">
            <div className="flex items-center gap-2 mb-3">
              <span className={`px-2 py-0.5 text-xs font-medium text-white rounded ${
                project.status === "Ongoing" ? "bg-lime-500" :
                project.status === "Upcoming" ? "bg-blue-500" : "bg-gray-400"
              }`}>
                {project.status}
              </span>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">{project.name}</h3>
            <div className="space-y-1 text-xs text-gray-500">
              <p>{project.period}</p>
              <p>{project.location}</p>
            </div>
            <button className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700">
              상세보기
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// 어드민 사이드바 화면
function AdminSidebarScreen() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex h-[400px]">
      {/* Admin Sidebar */}
      <aside className={`bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-56'}`}>
        {!isCollapsed ? (
          <>
            <div className="px-4 pt-4 pb-4">
              <div className="flex items-center justify-between mb-3">
                <span className="px-2 py-0.5 text-xs font-medium text-white rounded bg-lime-500">Ongoing</span>
                <button onClick={() => setIsCollapsed(true)} className="p-1.5 text-blue-600 hover:bg-gray-100 rounded-lg">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                </button>
              </div>
              <h2 className="text-lg font-bold text-blue-600">2024 국제 전시회</h2>
            </div>
            <nav className="flex-1 py-4 bg-gray-50">
              <ul className="space-y-1 px-2">
                <li>
                  <div className="flex items-center gap-3 px-3 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-medium">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                    <span>내정보</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-3 px-3 py-2.5 text-gray-700 hover:bg-blue-600 hover:text-white rounded-lg text-sm font-medium transition-colors cursor-pointer">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281" />
                    </svg>
                    <span>기본정보</span>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-3 px-3 py-2.5 text-gray-700 hover:bg-blue-600 hover:text-white rounded-lg text-sm font-medium transition-colors cursor-pointer">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192" />
                    </svg>
                    <span>참가신청</span>
                  </div>
                </li>
              </ul>
            </nav>
            <div className="bg-gray-50 px-2 py-2">
              <div className="flex justify-center gap-1 px-3 py-2">
                <button className="px-3 py-1.5 rounded text-xs font-bold border border-gray-400">KR</button>
                <button className="px-3 py-1.5 rounded text-xs opacity-40">EN</button>
                <button className="px-3 py-1.5 rounded text-xs opacity-40">JA</button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center justify-center px-2 py-2">
              <button onClick={() => setIsCollapsed(false)} className="p-2 text-blue-600 hover:bg-gray-100 rounded-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
            <div className="px-2 pt-2 pb-3">
              <div className="flex justify-center mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-lime-500"></div>
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-sm mx-auto text-white">
                2
              </div>
            </div>
            <nav className="flex-1 py-4 bg-gray-50">
              <ul className="space-y-1 px-2">
                <li>
                  <div className="flex items-center justify-center p-2.5 bg-blue-600 text-white rounded-lg">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0" />
                    </svg>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-center p-2.5 text-gray-700 hover:bg-blue-600 hover:text-white rounded-lg transition-colors cursor-pointer">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593" />
                    </svg>
                  </div>
                </li>
                <li>
                  <div className="flex items-center justify-center p-2.5 text-gray-700 hover:bg-blue-600 hover:text-white rounded-lg transition-colors cursor-pointer">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h3.75M9 15h3.75" />
                    </svg>
                  </div>
                </li>
              </ul>
            </nav>
          </>
        )}
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-50">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-blue-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <p className="text-sm font-medium text-blue-900">AdminSidebar 컴포넌트</p>
              <p className="text-xs text-blue-700 mt-1">
                프로젝트별 어드민 사이드바입니다. 접기/펼치기, 프로젝트 상태 표시,
                다국어 선택(KR/EN/JA), 로컬스토리지 상태 저장 기능이 있습니다.
              </p>
              <p className="text-xs text-blue-700 mt-2">
                <strong>접기 버튼을 클릭</strong>해서 축소 상태를 확인해보세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 참가신청 목록 화면
function UserListScreen() {
  const [activeTab, setActiveTab] = useState<"preliminary" | "regular">("preliminary");

  return (
    <div className="flex h-[400px]">
      {/* Admin Sidebar (collapsed) */}
      <aside className="w-16 bg-white border-r border-gray-200 flex flex-col flex-shrink-0">
        <div className="flex items-center justify-center px-2 py-2">
          <div className="p-2 text-blue-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        </div>
        <div className="px-2 pt-2 pb-3">
          <div className="flex justify-center mb-2">
            <div className="w-2.5 h-2.5 rounded-full bg-lime-500"></div>
          </div>
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xs mx-auto text-white">
            2
          </div>
        </div>
        <nav className="flex-1 py-4 bg-gray-50">
          <ul className="space-y-1 px-2">
            <li>
              <div className="flex items-center justify-center p-2.5 text-gray-700 rounded-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-center p-2.5 text-gray-700 rounded-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593" />
                </svg>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-center p-2.5 bg-blue-600 text-white rounded-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h3.75M9 15h3.75" />
                </svg>
              </div>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-4 bg-gray-50 overflow-auto">
        <h2 className="text-lg font-bold text-gray-900 mb-4">참가신청</h2>

        {/* Tabs */}
        <div className="flex gap-4 mb-4 border-b border-gray-200">
          <button
            onClick={() => setActiveTab("preliminary")}
            className={`pb-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "preliminary"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            참가신청(예비)
          </button>
          <button
            onClick={() => setActiveTab("regular")}
            className={`pb-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "regular"
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            참가신청
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="p-3 border-b border-gray-200 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-900">
              {activeTab === "preliminary" ? "예비 신청 목록" : "정규 신청 목록"}
            </h3>
            <div className="relative">
              <input
                type="text"
                placeholder="검색..."
                className="pl-8 pr-3 py-1.5 text-xs border border-gray-300 rounded-lg w-40"
              />
              <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-2 text-xs font-medium text-gray-500 text-left">번호</th>
                <th className="px-3 py-2 text-xs font-medium text-gray-500 text-left">업체명</th>
                <th className="px-3 py-2 text-xs font-medium text-gray-500 text-left">담당자</th>
                <th className="px-3 py-2 text-xs font-medium text-gray-500 text-center">상태</th>
                <th className="px-3 py-2 text-xs font-medium text-gray-500 text-left">신청일</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                { id: 1, company: "ABC 테크놀로지", manager: "김철수", status: "승인", date: "2024.04.01" },
                { id: 2, company: "XYZ 솔루션", manager: "이영희", status: "대기", date: "2024.04.02" },
                { id: 3, company: "글로벌 시스템", manager: "박지민", status: "승인", date: "2024.04.03" },
              ].map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 cursor-pointer">
                  <td className="px-3 py-2 text-xs text-gray-900">{item.id}</td>
                  <td className="px-3 py-2 text-xs text-gray-900">{item.company}</td>
                  <td className="px-3 py-2 text-xs text-gray-600">{item.manager}</td>
                  <td className="px-3 py-2 text-xs text-center">
                    <span className={`px-2 py-0.5 rounded text-xs ${
                      item.status === "승인" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-3 py-2 text-xs text-gray-600">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="p-3 border-t border-gray-200 flex items-center justify-between">
            <span className="text-xs text-gray-500">총 3개</span>
            <div className="flex gap-2">
              <button className="px-2.5 py-1 text-xs border border-gray-300 rounded disabled:opacity-50" disabled>이전</button>
              <span className="px-2.5 py-1 text-xs text-gray-600">1 / 1</span>
              <button className="px-2.5 py-1 text-xs border border-gray-300 rounded disabled:opacity-50" disabled>다음</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 신청 상세 화면
function UserDetailScreen() {
  return (
    <div className="flex h-[500px]">
      {/* Admin Sidebar (collapsed) */}
      <aside className="w-16 bg-white border-r border-gray-200 flex flex-col flex-shrink-0">
        <div className="flex items-center justify-center px-2 py-2">
          <div className="p-2 text-blue-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        </div>
        <div className="px-2 pt-2 pb-3">
          <div className="flex justify-center mb-2">
            <div className="w-2.5 h-2.5 rounded-full bg-lime-500"></div>
          </div>
          <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xs mx-auto text-white">
            2
          </div>
        </div>
        <nav className="flex-1 py-4 bg-gray-50">
          <ul className="space-y-1 px-2">
            <li>
              <div className="flex items-center justify-center p-2.5 text-gray-700 rounded-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-center p-2.5 text-gray-700 rounded-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593" />
                </svg>
              </div>
            </li>
            <li>
              <div className="flex items-center justify-center p-2.5 bg-blue-600 text-white rounded-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h3.75M9 15h3.75" />
                </svg>
              </div>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 bg-gray-50 overflow-auto flex flex-col">
        {/* 고정 헤더 - 핵심 정보 (빨간 박스로 강조) */}
        <div className="relative">
          <div className="absolute -inset-1 border-2 border-red-500 rounded-lg z-20 pointer-events-none">
            <div className="absolute -top-3 left-3 bg-red-500 text-white text-[10px] px-2 py-0.5 rounded font-bold">
              직접 제안한 UI
            </div>
          </div>
          <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button className="p-1 text-gray-500 hover:text-gray-900">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <h2 className="text-base font-bold text-gray-900">ABC 테크놀로지 / ABC Technology</h2>
              </div>
              {/* 핵심 정보 - 사업팀 제안 UI */}
              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1">
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded font-medium cursor-pointer hover:opacity-80">승인 ▼</span>
                </div>
                <div>
                  <span className="text-gray-400">ID:</span>
                  <span className="ml-1 text-gray-700">user@abc.com</span>
                </div>
                <div>
                  <span className="text-gray-400">등록일:</span>
                  <span className="ml-1 text-gray-700">2024.04.01</span>
                </div>
                <div>
                  <span className="text-gray-400">신청일:</span>
                  <span className="ml-1 text-gray-700">2024.04.05</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 flex-1 overflow-auto">
          {/* 상세 탭 */}
          <div className="flex gap-2 mb-4 overflow-x-auto">
            {["사용자 정보", "기업정보", "부스 신청", "출입증", "인보이스"].map((tab, i) => (
              <button
                key={tab}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap ${
                  i === 0 ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* 상세 내용 */}
          <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
            <h3 className="font-semibold text-gray-900 mb-4">기본 정보</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-500 mb-1">회사명 (국문)</p>
                <p className="text-sm text-gray-900">ABC 테크놀로지</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">회사명 (영문)</p>
                <p className="text-sm text-gray-900">ABC Technology</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">담당자명</p>
                <p className="text-sm text-gray-900">김철수</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">연락처</p>
                <p className="text-sm text-gray-900">+82 010-1234-5678</p>
              </div>
            </div>
          </div>

          {/* 능동적 제안 + 컴포넌트 분리 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {/* 능동적 제안 */}
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-red-500 text-white rounded flex items-center justify-center">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-sm font-bold text-red-900">능동적 UI 제안</p>
              </div>
              <ul className="text-xs text-red-700 space-y-1">
                <li>• 운영팀 업무 흐름 파악 후 <strong>먼저 제안</strong></li>
                <li>• "탭 이동 시 핵심 정보 확인 어려움" 문제 발견</li>
                <li>• 사업팀에 <strong>상단 고정 헤더</strong> 직접 제안</li>
                <li>• <strong>상태 뱃지 클릭</strong>으로 즉시 상태 변경</li>
              </ul>
            </div>

            {/* 컴포넌트 분리 */}
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-purple-500 text-white rounded flex items-center justify-center">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                  </svg>
                </div>
                <p className="text-sm font-bold text-purple-900">컴포넌트 분리</p>
              </div>
              <ul className="text-xs text-purple-700 space-y-1">
                <li>• <strong>StatusBadge</strong>: 상태 + 드롭다운 선택</li>
                <li>• <strong>ContentCard</strong>: 콘텐츠 카드 레이아웃</li>
                <li>• <strong>UserDetailBottomBar</strong>: 하단 고정 액션바</li>
                <li>• <strong>TabNav</strong>: 동적 탭 네비게이션</li>
              </ul>
            </div>
          </div>

          {/* shared 패키지 컴포넌트 구조 */}
          <div className="mt-3 bg-gray-100 border border-gray-300 rounded-lg p-3">
            <p className="text-xs font-bold text-gray-700 mb-2">📦 packages/shared/components (26+ 컴포넌트)</p>
            <div className="flex flex-wrap gap-1">
              {["Button", "Input", "Select", "Modal", "DataTable", "ResponsiveTable", "DynamicForm", "TabNav", "ProgressBar", "StatusBadge", "Toast", "Alert"].map((c) => (
                <span key={c} className="px-1.5 py-0.5 bg-white text-gray-600 rounded text-[10px] border border-gray-200">{c}</span>
              ))}
              <span className="px-1.5 py-0.5 text-gray-400 text-[10px]">+14 more</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// 데이터 테이블 화면 (좌우 스크롤 + Sticky 컬럼)
function DataTableScreen() {
  return (
    <div className="p-4 bg-gray-50 h-[400px] overflow-auto">
      <div className="mb-4">
        <h2 className="text-lg font-bold text-gray-900 mb-2">데이터 테이블 UI 설계</h2>
        <p className="text-sm text-gray-600">좌우로 긴 테이블에서 핵심 정보를 항상 확인할 수 있도록 설계했습니다.</p>
      </div>

      {/* 테이블 컨테이너 */}
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
        <div className="p-3 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900">참가업체 목록</h3>
        </div>

        {/* 스크롤 가능한 테이블 영역 */}
        <div className="overflow-x-auto">
          <table className="w-full" style={{ minWidth: "900px" }}>
            <thead className="bg-gray-50">
              <tr>
                {/* Sticky 컬럼 - 번호 */}
                <th className="px-3 py-2 text-xs font-medium text-gray-500 text-center w-12 sticky left-0 bg-gray-50 z-10 border-r border-gray-200">
                  번호
                </th>
                {/* Sticky 컬럼 - 업체명 */}
                <th className="px-3 py-2 text-xs font-medium text-gray-500 text-left w-32 sticky left-12 bg-gray-50 z-10 border-r border-gray-200 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                  업체명
                </th>
                {/* 일반 컬럼들 */}
                <th className="px-3 py-2 text-xs font-medium text-gray-500 text-left">담당자</th>
                <th className="px-3 py-2 text-xs font-medium text-gray-500 text-left">이메일</th>
                <th className="px-3 py-2 text-xs font-medium text-gray-500 text-left">연락처</th>
                <th className="px-3 py-2 text-xs font-medium text-gray-500 text-center">부스 타입</th>
                <th className="px-3 py-2 text-xs font-medium text-gray-500 text-center">부스 수</th>
                <th className="px-3 py-2 text-xs font-medium text-gray-500 text-center">출입증</th>
                <th className="px-3 py-2 text-xs font-medium text-gray-500 text-center">상태</th>
                <th className="px-3 py-2 text-xs font-medium text-gray-500 text-left">신청일</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                { id: 1, company: "ABC 테크놀로지", manager: "김철수", email: "kim@abc.com", phone: "010-1234-5678", boothType: "프리미엄", boothCount: 2, badge: 5, status: "승인", date: "2024.04.01" },
                { id: 2, company: "XYZ 솔루션", manager: "이영희", email: "lee@xyz.co.kr", phone: "010-2345-6789", boothType: "스탠다드", boothCount: 1, badge: 3, status: "대기", date: "2024.04.02" },
                { id: 3, company: "글로벌 시스템", manager: "박지민", email: "park@global.com", phone: "010-3456-7890", boothType: "프리미엄", boothCount: 3, badge: 8, status: "승인", date: "2024.04.03" },
                { id: 4, company: "테크 이노베이션", manager: "최수진", email: "choi@tech.io", phone: "010-4567-8901", boothType: "베이직", boothCount: 1, badge: 2, status: "반려", date: "2024.04.04" },
              ].map((item) => (
                <tr key={item.id} className="hover:bg-gray-50">
                  {/* Sticky 컬럼 - 번호 */}
                  <td className="px-3 py-2 text-xs text-gray-900 text-center sticky left-0 bg-white z-10 border-r border-gray-100">
                    {item.id}
                  </td>
                  {/* Sticky 컬럼 - 업체명 */}
                  <td className="px-3 py-2 text-xs text-gray-900 font-medium sticky left-12 bg-white z-10 border-r border-gray-100 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                    {item.company}
                  </td>
                  {/* 일반 컬럼들 */}
                  <td className="px-3 py-2 text-xs text-gray-600">{item.manager}</td>
                  <td className="px-3 py-2 text-xs text-gray-600">{item.email}</td>
                  <td className="px-3 py-2 text-xs text-gray-600">{item.phone}</td>
                  <td className="px-3 py-2 text-xs text-gray-600 text-center">{item.boothType}</td>
                  <td className="px-3 py-2 text-xs text-gray-600 text-center">{item.boothCount}</td>
                  <td className="px-3 py-2 text-xs text-gray-600 text-center">{item.badge}</td>
                  <td className="px-3 py-2 text-xs text-center">
                    <span className={`px-2 py-0.5 rounded text-xs ${
                      item.status === "승인" ? "bg-green-100 text-green-700" :
                      item.status === "대기" ? "bg-yellow-100 text-yellow-700" :
                      "bg-red-100 text-red-700"
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-3 py-2 text-xs text-gray-600">{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-3 border-t border-gray-200">
          <span className="text-xs text-gray-500">총 4개</span>
        </div>
      </div>

      {/* 설명 */}
      <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p className="text-sm font-medium text-blue-900">직접 설계한 UI 구조</p>
            <ul className="text-xs text-blue-700 mt-2 space-y-1">
              <li>• <strong>번호 + 업체명 컬럼 고정</strong>: 좌우 스크롤해도 핵심 정보 확인 가능</li>
              <li>• <strong>고정 너비 지정</strong>: 일관된 레이아웃으로 데이터 비교 용이</li>
              <li>• <strong>그림자 효과</strong>: 고정 영역과 스크롤 영역 시각적 구분</li>
              <li>• 테이블을 <strong>좌우로 스크롤</strong>해서 확인해보세요</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
