"use client";

import Image from "next/image";
import Link from "next/link";
import { ProjectHeader } from "@/app/_components/ProjectHeader";

const techStack = ["JavaScript", "jQuery", "JSP", "KCP 결제"];

const kioskScreenshots = [
  { src: "/키오스크_초기대기화면.png", label: "초기 대기 화면" },
  { src: "/키오스크_메인화면_상품리스트.png", label: "상품 리스트" },
  { src: "/키오스크_장바구니.png", label: "장바구니" },
  { src: "/키오스크_결제화면_담은상품.png", label: "결제 화면" },
  { src: "/키오스크_결제완료화면_영수증출력버튼.png", label: "결제 완료" },
];

const posScreenshots = [
  { src: "/포스기본화면.png", label: "기본 화면" },
  { src: "/포스_상품장바구니.png", label: "장바구니" },
  { src: "/포스_결제화면.png", label: "결제 화면" },
];

const features = [
  {
    icon: "🛒",
    title: "키오스크 UI 화면 구성",
    desc: "상품 카테고리/리스트, 장바구니, 결제 화면 전체 UI 개발",
  },
  {
    icon: "🛍️",
    title: "장바구니 시스템",
    desc: "상품 추가/삭제, 수량 조절, 옵션 선택 팝업, 실시간 금액 계산",
  },
  {
    icon: "💳",
    title: "KCP 결제 연동",
    desc: "KCP 결제모듈 프론트엔드 연동 및 결제 플로우 구현",
  },
  {
    icon: "🌐",
    title: "다국어 지원",
    desc: "한국어/영어 등 다국어 UI 지원 (spring:message 활용)",
  },
  {
    icon: "📡",
    title: "비콘 대여/반납 UI",
    desc: "입장 시 비콘 대여 상태 관리 및 실시간 모니터링 대시보드",
  },
  {
    icon: "📱",
    title: "회원/비회원 처리",
    desc: "전화번호 입력 UI, 회원 조회, 진동벨 번호 입력 등",
  },
];

export default function PosKioskPage() {
  return (
    <div className="min-h-screen bg-white">
      <ProjectHeader
        period="2024.11 - 2025.02"
        techStack={["JavaScript", "jQuery", "JSP", "KCP 결제"]}
      />

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Hero */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              2024.11 - 2025.02
            </span>
            <span className="text-gray-400">|</span>
            <span className="text-gray-600 text-sm">프론트엔드 · 선임</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            POS/Kiosk 프로젝트
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
            동대문역사문화공원역 어린이 키즈카페 <strong className="text-blue-600">&apos;디키디키&apos;</strong>용 POS/Kiosk 시스템 개발.
            초기 프론트엔드 개발자 부재로 화면 구성 및 초기 개발을 담당했습니다.
          </p>
        </section>

        {/* Kiosk Screenshots */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">키오스크 화면</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {kioskScreenshots.map((shot) => (
              <div key={shot.label} className="flex flex-col items-center">
                <div className="relative w-full aspect-[9/16] rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
                  <Image
                    src={shot.src}
                    alt={shot.label}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="mt-2 text-xs text-gray-600 font-medium">{shot.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* POS Screenshots */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">POS 화면</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {posScreenshots.map((shot) => (
              <div key={shot.label} className="flex flex-col items-center">
                <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-gray-200 bg-gray-50">
                  <Image
                    src={shot.src}
                    alt={shot.label}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="mt-2 text-xs text-gray-600 font-medium">{shot.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">주요 기능</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl border border-gray-200 p-5 hover:border-blue-200 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 키오스크 UI 개발 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">키오스크 UI 개발</h2>
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <p className="text-gray-600 mb-4">
              상품 선택부터 결제까지 전체 키오스크 UI를 구현했습니다.
              <strong className="text-blue-600">장바구니 실시간 업데이트</strong>, 옵션 선택 팝업, 페이지네이션 등을 포함합니다.
            </p>
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <code className="text-xs font-mono text-gray-100">
                <span className="text-gray-500">// 장바구니 금액 계산</span><br/>
                <span className="text-purple-400">function</span> <span className="text-yellow-300">updateTotal</span>() {"{"}<br/>
                &nbsp;&nbsp;<span className="text-purple-400">let</span> totalPrice = <span className="text-orange-300">0</span>;<br/>
                &nbsp;&nbsp;$(<span className="text-green-300">&apos;#selectOptionList .qty_it&apos;</span>).<span className="text-yellow-300">each</span>(<span className="text-purple-400">function</span>() {"{"}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">const</span> quantity = $(<span className="text-purple-400">this</span>).<span className="text-yellow-300">val</span>();<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-400">const</span> price = $(<span className="text-purple-400">this</span>).<span className="text-yellow-300">data</span>(<span className="text-green-300">&apos;price&apos;</span>);<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;totalPrice += quantity * price;<br/>
                &nbsp;&nbsp;{"}"});<br/>
                &nbsp;&nbsp;$(<span className="text-green-300">&apos;#totalPrice&apos;</span>).<span className="text-yellow-300">text</span>(totalPrice.<span className="text-yellow-300">toLocaleString</span>());<br/>
                {"}"}
              </code>
            </div>
          </div>
        </section>

        {/* 상품 옵션 선택 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">상품 옵션 선택 시스템</h2>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-3">옵션 선택 팝업</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">•</span>
                    <span>메인 상품 선택 시 옵션 팝업 자동 표시</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">•</span>
                    <span>사이드 메뉴(옵션 상품) 수량 조절</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">•</span>
                    <span>옵션별 추가 금액 실시간 반영</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-3">장바구니 관리</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">•</span>
                    <span>동일 상품+옵션 조합 시 수량 자동 증가</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">•</span>
                    <span>개별 삭제 및 전체 취소 기능</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">•</span>
                    <span>총 수량/금액 실시간 업데이트</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 다국어 지원 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">다국어 지원 (spring:message)</h2>
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <p className="text-gray-600 mb-4">
              Spring의 <code className="bg-gray-100 px-1 rounded text-blue-600">spring:message</code> 태그를 활용하여 한국어/영어 다국어 UI를 지원합니다.
            </p>
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <code className="text-xs font-mono text-gray-100">
                <span className="text-gray-500">&lt;!-- JSP 다국어 처리 --&gt;</span><br/>
                <span className="text-blue-300">&lt;button&gt;</span><br/>
                &nbsp;&nbsp;<span className="text-green-300">&lt;spring:message code=&quot;diki.order.payment&quot; text=&quot;결제하기&quot;/&gt;</span><br/>
                <span className="text-blue-300">&lt;/button&gt;</span><br/><br/>
                <span className="text-blue-300">&lt;h2&gt;</span><span className="text-green-300">&lt;spring:message code=&quot;diki.buy&quot; text=&quot;구매하기&quot;/&gt;</span><span className="text-blue-300">&lt;/h2&gt;</span><br/>
                <span className="text-blue-300">&lt;p&gt;</span><span className="text-green-300">&lt;spring:message code=&quot;diki.guide.select.order&quot; text=&quot;상품을 선택해 주세요.&quot;/&gt;</span><span className="text-blue-300">&lt;/p&gt;</span>
              </code>
            </div>
          </div>
        </section>

        {/* POS 프로그램 모듈 연동 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">POS 프로그램 모듈 연동</h2>
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 mb-4">
            <p className="text-gray-600 mb-4">
              영수증 출력, 프린터 상태 체크, 세컨드 모니터 제어 등 하드웨어 기능은 C++ 개발자와 협업하여 연동했습니다.
              <code className="bg-white px-1 rounded text-blue-600">CefSharp.PostMessage</code>를 통해
              JS에서 POS 프로그램을 호출하고, 콜백으로 결과를 받는 구조입니다.
            </p>
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <code className="text-xs font-mono text-gray-100">
                <span className="text-gray-500">// 프린터 상태 체크</span><br/>
                <span className="text-purple-400">function</span> <span className="text-yellow-300">printInfo</span>() {"{"}<br/>
                &nbsp;&nbsp;<span className="text-blue-300">CefSharp</span>.<span className="text-yellow-300">PostMessage</span>({"{"} printerCheck: <span className="text-green-300">&quot;responsePrint&quot;</span> {"}"});<br/>
                {"}"}<br/><br/>
                <span className="text-gray-500">// POS 프로그램에서 호출하는 콜백</span><br/>
                <span className="text-purple-400">function</span> <span className="text-yellow-300">responsePrint</span>(code, msg) {"{"}<br/>
                &nbsp;&nbsp;<span className="text-purple-400">if</span> (code !== <span className="text-green-300">&apos;18&apos;</span>) <span className="text-yellow-300">kioskAlert</span>(<span className="text-green-300">&apos;프린터 이상&apos;</span>, msg);<br/>
                {"}"}
              </code>
            </div>
          </div>

          {/* 환경 분기 처리 */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-3">개발 환경 분기 처리</h3>
            <p className="text-sm text-gray-600 mb-4">
              POS 프로그램 환경(<code className="bg-gray-100 px-1 rounded">CefSharp</code>)과 로컬 브라우저 환경을 분기 처리하여,
              <strong className="text-blue-600"> 로컬에서도 편하게 개발/테스트</strong>할 수 있도록 설계했습니다.
            </p>
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto mb-4">
              <code className="text-xs font-mono text-gray-100">
                <span className="text-gray-500">// 세컨드 모니터 데이터 전송</span><br/>
                <span className="text-purple-400">function</span> <span className="text-yellow-300">setSecondMonitorData</span>(data) {"{"}<br/>
                &nbsp;&nbsp;<span className="text-purple-400">const</span> result = data ? <span className="text-blue-300">JSON</span>.<span className="text-yellow-300">stringify</span>(data) : <span className="text-green-300">&quot;ready&quot;</span>;<br/><br/>
                &nbsp;&nbsp;<span className="text-purple-400">if</span> (window?.<span className="text-blue-300">CefSharp</span> === <span className="text-purple-400">undefined</span>) {"{"}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500">// 로컬 환경: 콘솔에 로그 출력</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-300">customLog</span>(<span className="text-green-300">&apos;포스환경아님&apos;</span>, result);<br/>
                &nbsp;&nbsp;{"}"} <span className="text-purple-400">else</span> {"{"}<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500">// POS 환경: 실제 모듈 호출</span><br/>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-blue-300">CefSharp</span>.<span className="text-yellow-300">PostMessage</span>({"{"} screen: result {"}"});<br/>
                &nbsp;&nbsp;{"}"}<br/>
                {"}"}
              </code>
            </div>
            <div className="flex items-start gap-2 text-sm text-gray-600">
              <span className="text-blue-500 mt-0.5">•</span>
              <span>POS 프로그램에서만 동작하는 기능도 로컬에서 오류 없이 테스트 가능</span>
            </div>
            <div className="flex items-start gap-2 text-sm text-gray-600 mt-1">
              <span className="text-blue-500 mt-0.5">•</span>
              <span>환경별 로깅 처리로 디버깅 효율성 향상</span>
            </div>
          </div>
        </section>

        {/* 어려움과 극복 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">진행 중 발생한 이슈와 해결</h2>
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <span className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm">1</span>
                  모듈 배포 시 오류 예측의 어려움
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  POS/키오스크 기기에 모듈 형태로 배포할 때 어떤 오류가 발생할지 예측하기 어려웠습니다.
                  개발 환경(PC 브라우저)과 실행 환경(POS/키오스크 기기)이 달라 디버깅이 까다로웠습니다.
                </p>
                <div className="bg-white rounded-lg p-4 border border-blue-100">
                  <p className="text-sm font-medium text-blue-700 mb-2">해결 방법</p>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-0.5">•</span>
                      <span><strong>커스텀 로그 시스템</strong>을 구현하여 기기에서 발생하는 오류를 추적 가능하게 함</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-0.5">•</span>
                      <span><code className="bg-gray-100 px-1 rounded">window.CefSharp</code> 존재 여부로 환경 분기 처리</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-0.5">•</span>
                      <span>로컬에서도 오류 없이 개발/테스트 가능한 구조로 설계</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">기술 스택</h2>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-blue-50 hover:text-blue-700 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            메인으로 돌아가기
          </Link>
        </div>
      </footer>
    </div>
  );
}
