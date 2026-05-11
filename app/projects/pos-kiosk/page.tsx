"use client";

import Link from "next/link";

const techStack = ["JavaScript", "KCP 결제", "비콘"];

const features = [
  {
    icon: "🛒",
    title: "상품 카테고리 화면",
    desc: "푸드, 입장권 등 상품별 카테고리 화면 구성",
  },
  {
    icon: "💳",
    title: "KCP 결제 연동",
    desc: "KCP 결제모듈 연동 및 결제 시스템 구축",
  },
  {
    icon: "🧾",
    title: "영수증 출력",
    desc: "영수증 출력, 결제모듈 호출 등 C++ 모듈 연동",
  },
  {
    icon: "📡",
    title: "비콘 시스템",
    desc: "입장 시 비콘 대여/반납 상태 관리 및 실시간 모니터링",
  },
];

export default function PosKioskPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium">돌아가기</span>
          </Link>
          <span className="text-sm text-gray-400">프로젝트 상세</span>
        </div>
      </header>

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

        {/* 하드웨어 연동 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">하드웨어 연동</h2>
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <p className="text-gray-600 mb-4">
              영수증 출력, 결제모듈 호출 등 하드웨어 연동 기능을 <strong className="text-blue-600">C++ 모듈 호출 방식</strong>으로 구현했습니다.
              JavaScript에서 파라미터를 전달하여 네이티브 모듈을 실행합니다.
            </p>
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <code className="text-xs font-mono text-gray-100">
                <span className="text-gray-500">// C++ 모듈 호출 예시</span><br/>
                <span className="text-yellow-300">callNativeModule</span>(<span className="text-green-300">&apos;printReceipt&apos;</span>, {"{"} orderId, items, totalAmount {"}"});
              </code>
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
