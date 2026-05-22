export const I18nSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">4개국어 지원 (i18n)</h2>

      {/* 지원 언어 */}
      <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 mb-6">
        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-8 h-8 bg-[#191979] rounded-lg flex items-center justify-center text-white text-sm">🌍</span>
          지원 언어
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { code: "ko", name: "한국어", flag: "🇰🇷", native: "한국어" },
            { code: "en", name: "English", flag: "🇺🇸", native: "English" },
            { code: "ja", name: "日本語", flag: "🇯🇵", native: "日本語" },
            { code: "zh", name: "中文", flag: "🇨🇳", native: "中文" },
          ].map((lang) => (
            <div key={lang.code} className="bg-white rounded-lg p-4 border border-gray-200 text-center">
              <span className="text-3xl">{lang.flag}</span>
              <p className="font-bold text-gray-900 mt-2">{lang.native}</p>
              <code className="text-xs text-gray-500">locale: {lang.code}</code>
            </div>
          ))}
        </div>
      </div>

      {/* next-intl 구조 */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6">
        <div className="bg-[#191979] text-white px-4 py-3">
          <h4 className="font-bold flex items-center gap-2">
            <span>📦</span> next-intl 적용 구조
          </h4>
        </div>
        <div className="p-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-bold text-gray-900 mb-3">폴더 구조</h5>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="text-xs font-mono space-y-1">
                  <div className="text-gray-900 font-bold">/lib/i18n</div>
                  <div className="pl-4 text-gray-600">request.ts</div>
                  <div className="pl-4 text-gray-600">routing.ts</div>
                  <div className="text-gray-900 font-bold mt-2">/messages</div>
                  <div className="pl-4 text-[#191979]">ko.json</div>
                  <div className="pl-4 text-[#191979]">en.json</div>
                  <div className="pl-4 text-[#191979]">ja.json</div>
                  <div className="pl-4 text-[#191979]">zh.json</div>
                  <div className="text-gray-900 font-bold mt-2">/src/app/[locale]</div>
                  <div className="pl-4 text-gray-500">layout.tsx</div>
                  <div className="pl-4 text-gray-500">page.tsx</div>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-bold text-gray-900 mb-3">라우팅 설정</h5>
              <div className="text-xs font-mono bg-gray-900 text-gray-100 rounded p-3">
                <div className="text-gray-500">// lib/i18n/routing.ts</div>
                <div className="mt-1">
                  <span className="text-purple-400">export const</span> routing = defineRouting({`{`}
                </div>
                <div className="pl-4">
                  locales: [<span className="text-green-300">&apos;ko&apos;</span>, <span className="text-green-300">&apos;en&apos;</span>, <span className="text-green-300">&apos;ja&apos;</span>, <span className="text-green-300">&apos;zh&apos;</span>],
                </div>
                <div className="pl-4">
                  defaultLocale: <span className="text-green-300">&apos;ko&apos;</span>,
                </div>
                <div className="pl-4">
                  localePrefix: <span className="text-green-300">&apos;as-needed&apos;</span>
                </div>
                <div>{`})`}</div>
              </div>
              <p className="text-xs text-gray-500 mt-2">
                기본 언어(ko)는 URL에 locale prefix 없이 접근 가능
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 번역 파일 구조 */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6">
        <div className="bg-[#191979] text-white px-4 py-3">
          <h4 className="font-bold flex items-center gap-2">
            <span>📄</span> 번역 파일 구조
          </h4>
        </div>
        <div className="p-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <span>🇰🇷</span>
                <code className="text-sm font-bold text-gray-700">ko.json</code>
              </div>
              <div className="text-xs font-mono bg-gray-900 text-gray-100 rounded p-3">
                <div>{`{`}</div>
                <div className="pl-4"><span className="text-blue-300">&quot;common&quot;</span>: {`{`}</div>
                <div className="pl-6"><span className="text-blue-300">&quot;login&quot;</span>: <span className="text-green-300">&quot;로그인&quot;</span>,</div>
                <div className="pl-6"><span className="text-blue-300">&quot;logout&quot;</span>: <span className="text-green-300">&quot;로그아웃&quot;</span>,</div>
                <div className="pl-6"><span className="text-blue-300">&quot;cart&quot;</span>: <span className="text-green-300">&quot;장바구니&quot;</span></div>
                <div className="pl-4">{`}`},</div>
                <div className="pl-4"><span className="text-blue-300">&quot;payment&quot;</span>: {`{`}</div>
                <div className="pl-6"><span className="text-blue-300">&quot;total&quot;</span>: <span className="text-green-300">&quot;결제 금액&quot;</span></div>
                <div className="pl-4">{`}`}</div>
                <div>{`}`}</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <span>🇺🇸</span>
                <code className="text-sm font-bold text-gray-700">en.json</code>
              </div>
              <div className="text-xs font-mono bg-gray-900 text-gray-100 rounded p-3">
                <div>{`{`}</div>
                <div className="pl-4"><span className="text-blue-300">&quot;common&quot;</span>: {`{`}</div>
                <div className="pl-6"><span className="text-blue-300">&quot;login&quot;</span>: <span className="text-green-300">&quot;Login&quot;</span>,</div>
                <div className="pl-6"><span className="text-blue-300">&quot;logout&quot;</span>: <span className="text-green-300">&quot;Logout&quot;</span>,</div>
                <div className="pl-6"><span className="text-blue-300">&quot;cart&quot;</span>: <span className="text-green-300">&quot;Cart&quot;</span></div>
                <div className="pl-4">{`}`},</div>
                <div className="pl-4"><span className="text-blue-300">&quot;payment&quot;</span>: {`{`}</div>
                <div className="pl-6"><span className="text-blue-300">&quot;total&quot;</span>: <span className="text-green-300">&quot;Total Amount&quot;</span></div>
                <div className="pl-4">{`}`}</div>
                <div>{`}`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 사용 방법 */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6">
        <div className="bg-[#191979] text-white px-4 py-3">
          <h4 className="font-bold flex items-center gap-2">
            <span>💻</span> 컴포넌트에서 사용
          </h4>
        </div>
        <div className="p-4">
          <div className="text-xs font-mono bg-gray-900 text-gray-100 rounded p-3">
            <div className="text-gray-500">// 클라이언트 컴포넌트</div>
            <div><span className="text-purple-400">import</span> {`{ useTranslations }`} <span className="text-purple-400">from</span> <span className="text-green-300">&apos;next-intl&apos;</span></div>
            <div className="mt-2">
              <span className="text-purple-400">const</span> <span className="text-yellow-300">PaymentButton</span> = () =&gt; {`{`}
            </div>
            <div className="pl-4">
              <span className="text-purple-400">const</span> t = useTranslations(<span className="text-green-300">&apos;payment&apos;</span>)
            </div>
            <div className="pl-4 mt-1">
              <span className="text-purple-400">return</span> &lt;button&gt;{`{t('total')}`}&lt;/button&gt;
            </div>
            <div>{`}`}</div>
            <div className="mt-3 text-gray-500">// 결과: 한국어 → &quot;결제 금액&quot;, 영어 → &quot;Total Amount&quot;</div>
          </div>
        </div>
      </div>

      {/* 언어 전환 */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
        <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
          <span>🔄</span> 언어 전환 처리
        </h4>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm font-medium text-gray-900 mb-2">URL 기반 라우팅</p>
            <div className="space-y-1">
              <code className="text-xs block text-gray-600">/shop → 한국어 (기본)</code>
              <code className="text-xs block text-gray-600">/en/shop → 영어</code>
              <code className="text-xs block text-gray-600">/ja/shop → 일본어</code>
              <code className="text-xs block text-gray-600">/zh/shop → 중국어</code>
            </div>
          </div>
          <div className="bg-white rounded-lg p-3">
            <p className="text-sm font-medium text-gray-900 mb-2">언어 선택 UI</p>
            <div className="text-xs font-mono bg-gray-100 rounded p-2">
              <div>useRouter().replace(</div>
              <div className="pl-2">pathname,</div>
              <div className="pl-2">{`{ locale: 'en' }`}</div>
              <div>)</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
