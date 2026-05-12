export const ArchitectureSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">프로젝트 아키텍처</h2>

      {/* 모노레포 구조 */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <span className="text-white text-xl font-bold">T</span>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 text-lg">Turborepo + pnpm workspace</h3>
            <p className="text-sm text-gray-600">모노레포 아키텍처로 코드 재사용 극대화</p>
          </div>
        </div>

        {/* 패키지 구조 다이어그램 */}
        <div className="bg-white rounded-lg p-4 border border-blue-200 mb-4">
          <div className="flex flex-col md:flex-row items-stretch gap-4">
            {/* Root */}
            <div className="flex-1">
              <div className="text-xs text-gray-400 mb-2">exhibition/</div>
              <div className="space-y-2">
                <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-3">
                  <div className="font-bold text-blue-700 text-sm mb-2">apps/</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white rounded p-2 border border-blue-200 text-center">
                      <span className="text-sm font-medium">user</span>
                      <p className="text-xs text-gray-500">유저 앱</p>
                    </div>
                    <div className="bg-white rounded p-2 border border-blue-200 text-center">
                      <span className="text-sm font-medium">admin</span>
                      <p className="text-xs text-gray-500">어드민 앱</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-3">
                  <div className="font-bold text-blue-700 text-sm mb-2">packages/</div>
                  <div className="bg-white rounded p-2 border border-gray-200 text-center">
                    <span className="text-sm font-medium">shared</span>
                    <p className="text-xs text-gray-500">공용 컴포넌트, 훅, 타입</p>
                    <div className="flex gap-1 mt-1 justify-center flex-wrap">
                      <span className="text-[10px] bg-blue-100 px-1.5 py-0.5 rounded">56개 컴포넌트</span>
                      <span className="text-[10px] bg-blue-100 px-1.5 py-0.5 rounded">23개 훅</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="flex-1 flex flex-col justify-center space-y-3">
              <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                <span className="text-blue-600 text-lg">✓</span>
                <div>
                  <p className="font-medium text-gray-900 text-sm">중복 코드 37% 절감</p>
                  <p className="text-xs text-gray-500">공용 패키지로 양쪽 앱에서 import</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                <span className="text-blue-600 text-lg">✓</span>
                <div>
                  <p className="font-medium text-gray-900 text-sm">1회 수정으로 양쪽 반영</p>
                  <p className="text-xs text-gray-500">버그 수정, 기능 개선 동시 적용</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                <span className="text-blue-600 text-lg">✓</span>
                <div>
                  <p className="font-medium text-gray-900 text-sm">독립 배포 지원</p>
                  <p className="text-xs text-gray-500">user/admin 별도 빌드 & 배포</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <code className="text-xs bg-gray-900 text-green-400 px-3 py-1.5 rounded font-mono">
            pnpm --filter @exhibition/admin build && pnpm --filter @exhibition/user build
          </code>
        </div>
      </div>

      {/* 공용 컴포넌트 활용 예시 */}
      <h3 className="text-lg font-bold text-gray-900 mb-4">공용 컴포넌트 활용</h3>
      <div className="bg-white rounded-xl p-6 border border-gray-200 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <span className="text-blue-600 text-lg">♻️</span>
          </div>
          <div>
            <p className="font-bold text-gray-900">동일한 컴포넌트, 다른 페이지</p>
            <p className="text-sm text-gray-600">유저/어드민이 같은 UI 컴포넌트를 공유하여 일관성 유지</p>
          </div>
        </div>

        {/* DynamicForm 공용 컴포넌트 예시 */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="grid md:grid-cols-2 divide-x divide-gray-100">
            {/* User Side */}
            <div>
              <div className="bg-blue-600 text-white px-4 py-2 text-sm font-medium flex items-center gap-2">
                <span className="w-2 h-2 bg-white/50 rounded-full"></span>
                User: /booth/company-info
              </div>
              <div className="p-4">
                <div className="text-xs font-mono bg-gray-100 rounded p-3 mb-3">
                  <span className="text-purple-600">import</span> {`{ DynamicForm }`}<br/>
                  <span className="text-gray-500">  </span><span className="text-purple-600">from</span> <span className="text-blue-600">&apos;@shared/components&apos;</span>
                </div>
                {/* Mini Form Preview */}
                <div className="border border-gray-200 rounded-lg p-3 space-y-2">
                  <p className="text-xs font-bold text-gray-700 border-b pb-1">회사 정보</p>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[9px] text-gray-500">회사명 (국문)</label>
                      <div className="h-6 bg-gray-50 rounded border text-[9px] flex items-center px-2">(주)이즈피엠피</div>
                    </div>
                    <div>
                      <label className="text-[9px] text-gray-500">회사명 (영문)</label>
                      <div className="h-6 bg-gray-50 rounded border text-[9px] flex items-center px-2">EZPMP CO., LTD.</div>
                    </div>
                  </div>
                  <div>
                    <label className="text-[9px] text-gray-500">사업자등록번호</label>
                    <div className="h-6 bg-gray-50 rounded border text-[9px] flex items-center px-2">220-88-93270</div>
                  </div>
                  <div>
                    <label className="text-[9px] text-gray-500">주소</label>
                    <div className="h-6 bg-gray-50 rounded border text-[9px] flex items-center px-2">서울특별시 서초구 사임당로 26</div>
                  </div>
                </div>
                <p className="text-[9px] text-gray-500 mt-2 text-center">유저가 직접 회사정보 입력/수정</p>
              </div>
            </div>

            {/* Admin Side */}
            <div>
              <div className="bg-purple-600 text-white px-4 py-2 text-sm font-medium flex items-center gap-2">
                <span className="w-2 h-2 bg-white/50 rounded-full"></span>
                Admin: /exhibition/[companyNo]/company
              </div>
              <div className="p-4">
                <div className="text-xs font-mono bg-gray-100 rounded p-3 mb-3">
                  <span className="text-purple-600">import</span> {`{ DynamicForm }`}<br/>
                  <span className="text-gray-500">  </span><span className="text-purple-600">from</span> <span className="text-blue-600">&apos;@shared/components&apos;</span>
                </div>
                {/* Mini Form Preview - Admin View */}
                <div className="border border-gray-200 rounded-lg p-3 space-y-2">
                  <div className="flex items-center justify-between border-b pb-1">
                    <p className="text-xs font-bold text-gray-700">회사 정보</p>
                    <span className="px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded text-[8px]">승인완료</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-[9px] text-gray-500">회사명 (국문)</label>
                      <div className="h-6 bg-purple-50 rounded border border-purple-200 text-[9px] flex items-center px-2">(주)이즈피엠피</div>
                    </div>
                    <div>
                      <label className="text-[9px] text-gray-500">회사명 (영문)</label>
                      <div className="h-6 bg-purple-50 rounded border border-purple-200 text-[9px] flex items-center px-2">EZPMP CO., LTD.</div>
                    </div>
                  </div>
                  <div>
                    <label className="text-[9px] text-gray-500">사업자등록번호</label>
                    <div className="h-6 bg-purple-50 rounded border border-purple-200 text-[9px] flex items-center px-2">220-88-93270</div>
                  </div>
                  <div>
                    <label className="text-[9px] text-gray-500">주소</label>
                    <div className="h-6 bg-purple-50 rounded border border-purple-200 text-[9px] flex items-center px-2">서울특별시 서초구 사임당로 26</div>
                  </div>
                </div>
                <p className="text-[9px] text-gray-500 mt-2 text-center">어드민이 유저 정보 조회/수정</p>
              </div>
            </div>
          </div>

          {/* Code Explanation */}
          <div className="bg-gray-900 text-white p-4">
            <p className="text-xs text-gray-400 mb-2">// 유저/어드민 각 페이지에서 동일한 DynamicForm 사용</p>
            <div className="text-xs font-mono space-y-1">
              <div><span className="text-gray-500">// API 응답의 필드 정의에 따라 폼 자동 렌더링</span></div>
              <div>&lt;<span className="text-blue-300">DynamicForm</span></div>
              <div className="pl-4"><span className="text-purple-400">fields</span>=<span className="text-green-300">{`{apiResponse.fields}`}</span></div>
              <div className="pl-4"><span className="text-purple-400">values</span>=<span className="text-green-300">{`{formValues}`}</span></div>
              <div className="pl-4"><span className="text-purple-400">onChange</span>=<span className="text-green-300">{`{handleChange}`}</span></div>
              <div className="pl-4"><span className="text-purple-400">readonly</span>=<span className="text-orange-300">{`{isReadonly}`}</span></div>
              <div>/&gt;</div>
            </div>
          </div>
        </div>

        {/* 다른 공용 컴포넌트 목록 */}
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="bg-white rounded-lg p-3 border border-gray-200 text-center">
            <p className="text-sm font-medium text-gray-900">BadgeForm</p>
            <p className="text-[10px] text-gray-500">출입증 신청 폼</p>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200 text-center">
            <p className="text-sm font-medium text-gray-900">DynamicForm</p>
            <p className="text-[10px] text-gray-500">동적 폼 렌더링</p>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200 text-center">
            <p className="text-sm font-medium text-gray-900">InvoiceContent</p>
            <p className="text-[10px] text-gray-500">인보이스 출력</p>
          </div>
          <div className="bg-white rounded-lg p-3 border border-gray-200 text-center">
            <p className="text-sm font-medium text-gray-900">DataTable</p>
            <p className="text-[10px] text-gray-500">테이블 + 카드뷰</p>
          </div>
        </div>

        <div className="mt-4 bg-blue-100 border border-gray-300 rounded-lg p-3">
          <p className="text-sm text-blue-800 text-center">
            <strong>56개 공용 컴포넌트</strong>를 유저/어드민이 공유 →
            <strong className="text-blue-700"> UI 일관성 100%</strong> +
            <strong className="text-blue-700"> 유지보수 비용 50% 절감</strong>
          </p>
        </div>
      </div>

      {/* 앱 구성 미리보기 */}
      <h3 className="text-lg font-bold text-gray-900 mb-4">앱 화면 구성</h3>

      {/* 어드민 - UserList (Full Width) */}
      <AdminPreview />

      {/* 유저 - MyPage (Full Width) */}
      <UserMyPagePreview />
    </section>
  );
};

const AdminPreview = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6">
      <div className="bg-gray-800 text-white px-4 py-2 flex items-center gap-2">
        <span className="w-2.5 h-2.5 bg-red-500 rounded-full"></span>
        <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></span>
        <span className="w-2.5 h-2.5 bg-gray-500 rounded-full"></span>
        <span className="text-xs text-gray-400 ml-2">admin.exhibition.co.kr/user-list</span>
      </div>
      <div className="flex">
        {/* Sidebar */}
        <div className="w-40 bg-white border-r border-gray-100 p-3 hidden md:block">
          <div className="mb-4">
            <span className="px-2 py-0.5 text-[10px] font-medium text-white rounded bg-lime-500">Ongoing</span>
            <p className="text-sm font-bold text-blue-600 mt-2">GreenEnerTEC 2026</p>
          </div>
          <nav className="space-y-1 bg-gray-50 rounded-lg p-2">
            <div className="flex items-center gap-2 px-2 py-1.5 text-[10px] text-gray-600 rounded">
              <span className="w-3 h-3 bg-gray-300 rounded"></span>
              관리자 정보
            </div>
            <div className="flex items-center gap-2 px-2 py-1.5 text-[10px] text-gray-600 rounded">
              <span className="w-3 h-3 bg-gray-300 rounded"></span>
              기본정보
            </div>
            <div className="flex items-center gap-2 px-2 py-1.5 text-[10px] text-white bg-blue-600 rounded font-medium">
              <span className="w-3 h-3 bg-white/30 rounded"></span>
              참가신청
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 bg-gray-50">
          <h2 className="text-lg font-bold text-gray-900 mb-3">참가신청</h2>

          {/* Tabs */}
          <div className="flex gap-4 mb-4 border-b border-gray-200">
            <button className="pb-2 text-xs text-gray-500">참가신청(예비)</button>
            <button className="pb-2 text-xs text-blue-600 font-medium border-b-2 border-blue-600">참가신청</button>
          </div>

          {/* Dashboard Cards */}
          <div className="grid grid-cols-4 gap-3 mb-4">
            <div className="bg-white rounded-xl border border-gray-200 p-3 relative">
              <span className="text-[10px] text-gray-600">전체</span>
              <p className="text-xl font-bold text-gray-900 mt-1">25</p>
              <div className="absolute top-3 right-3 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-[10px]">👥</span>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-3 relative">
              <span className="text-[10px] text-gray-600">승인대기</span>
              <p className="text-xl font-bold text-gray-900 mt-1">3</p>
              <div className="absolute top-3 right-3 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-yellow-600 text-[10px]">⏰</span>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-3 relative">
              <span className="text-[10px] text-gray-600">승인</span>
              <p className="text-xl font-bold text-gray-900 mt-1">11</p>
              <div className="absolute top-3 right-3 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-[10px]">✓</span>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-3 relative">
              <span className="text-[10px] text-gray-600">참가취소</span>
              <p className="text-xl font-bold text-gray-900 mt-1">11</p>
              <div className="absolute top-3 right-3 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-600 text-[10px]">✕</span>
              </div>
            </div>
          </div>

          {/* Search & Filter */}
          <div className="bg-white rounded-xl p-3 mb-4">
            <div className="flex gap-2 items-center">
              <select className="h-8 px-2 text-[10px] border border-gray-300 rounded-lg bg-white">
                <option>전체 상태</option>
              </select>
              <div className="flex-1 max-w-xs relative">
                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 text-[10px]">🔍</span>
                <input className="w-full h-8 pl-7 pr-3 text-[10px] border border-gray-300 rounded-lg" placeholder="아이디, 업체명으로 검색..." />
              </div>
              <button className="ml-auto h-8 px-3 text-[10px] border border-blue-600 text-blue-600 rounded-lg">
                엑셀 다운로드 ▼
              </button>
            </div>
          </div>

          {/* DataTable */}
          <div className="bg-white rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-[9px]">
                <thead>
                  <tr className="bg-gray-50 border-b">
                    <th className="py-2 px-2 text-left font-medium text-gray-500 w-8">
                      <input type="checkbox" className="w-3 h-3 rounded" />
                    </th>
                    <th className="py-2 px-1 text-center font-medium text-gray-500 w-6">No</th>
                    <th className="py-2 px-2 text-center font-medium text-gray-500">상태</th>
                    <th className="py-2 px-2 text-left font-medium text-gray-500">아이디</th>
                    <th className="py-2 px-2 text-left font-medium text-gray-500">업체명</th>
                    <th className="py-2 px-2 text-left font-medium text-gray-500">담당자정보</th>
                    <th className="py-2 px-2 text-center font-medium text-gray-500">신청부스</th>
                    <th className="py-2 px-2 text-right font-medium text-gray-500">총액</th>
                    <th className="py-2 px-2 text-center font-medium text-gray-500">진행</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr className="hover:bg-gray-50">
                    <td className="py-2 px-2"><input type="checkbox" className="w-3 h-3 rounded" /></td>
                    <td className="py-2 px-1 text-center text-gray-500">1</td>
                    <td className="py-2 px-2 text-center">
                      <span className="px-1.5 py-0.5 bg-blue-100 text-blue-700 rounded text-[8px]">승인 ▼</span>
                    </td>
                    <td className="py-2 px-2 text-blue-600">hong@email.com</td>
                    <td className="py-2 px-2">
                      <div className="font-medium text-gray-900">(주)이즈피엠피</div>
                      <div className="text-gray-500">EZPMP</div>
                    </td>
                    <td className="py-2 px-2">
                      <div className="text-gray-900">hong@email.com</div>
                      <div className="text-gray-500">홍길동</div>
                    </td>
                    <td className="py-2 px-2 text-center">
                      <div>독립부스 (2개)</div>
                      <div>조립 부스 (1개)</div>
                    </td>
                    <td className="py-2 px-2 text-right">
                      <div className="font-medium">3,300,000원</div>
                      <div className="text-gray-500">0원</div>
                    </td>
                    <td className="py-2 px-2 text-center">
                      <div className="text-[8px] font-medium">3/9</div>
                      <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mt-0.5">
                        <div className="w-1/3 h-full bg-blue-500 rounded-full"></div>
                      </div>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-2 px-2"><input type="checkbox" className="w-3 h-3 rounded" /></td>
                    <td className="py-2 px-1 text-center text-gray-500">2</td>
                    <td className="py-2 px-2 text-center">
                      <span className="px-1.5 py-0.5 bg-yellow-100 text-yellow-700 rounded text-[8px]">대기 ▼</span>
                    </td>
                    <td className="py-2 px-2 text-blue-600">kim@company.kr</td>
                    <td className="py-2 px-2">
                      <div className="font-medium text-gray-900">방송통신대학교</div>
                      <div className="text-gray-500">KNOU</div>
                    </td>
                    <td className="py-2 px-2">
                      <div className="text-gray-900">kim@company.kr</div>
                      <div className="text-gray-500">김담당</div>
                    </td>
                    <td className="py-2 px-2 text-center">
                      <div>독립부스 (2개)</div>
                      <div>프리미엄부스 (1개)</div>
                    </td>
                    <td className="py-2 px-2 text-right">
                      <div className="font-medium">6,600,000원</div>
                      <div className="text-gray-500">0원</div>
                    </td>
                    <td className="py-2 px-2 text-center">
                      <div className="text-[8px] font-medium">0/9</div>
                      <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mt-0.5"></div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Pagination */}
            <div className="px-3 py-2 border-t border-gray-100 flex items-center justify-between">
              <span className="text-[9px] text-gray-500">총 25개</span>
              <div className="flex gap-1">
                <button className="px-2 py-0.5 text-[9px] bg-blue-600 text-white rounded">1</button>
                <button className="px-2 py-0.5 text-[9px] border border-gray-300 rounded">2</button>
                <button className="px-2 py-0.5 text-[9px] border border-gray-300 rounded">3</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const UserMyPagePreview = () => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <div className="bg-gray-800 text-white px-4 py-2 flex items-center gap-2">
        <span className="w-2.5 h-2.5 bg-red-500 rounded-full"></span>
        <span className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></span>
        <span className="w-2.5 h-2.5 bg-gray-500 rounded-full"></span>
        <span className="text-xs text-gray-400 ml-2">user.exhibition.co.kr/mypage</span>
      </div>

      {/* Header */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="flex items-center justify-center py-2 border-b border-gray-100">
          <div className="w-24 h-4 bg-gray-300 rounded"></div>
        </div>
        {/* Navigation */}
        <nav className="flex justify-center gap-4 py-2 text-[10px] overflow-x-auto">
          <span className="text-blue-600 font-bold border-b-2 border-blue-600 pb-1">마이페이지</span>
          <span className="text-gray-600">참가신청</span>
          <span className="text-gray-600">홍보자료 신청</span>
          <span className="text-gray-600">출입증 신청</span>
          <span className="text-gray-600">상호간판 신청</span>
          <span className="text-gray-600">독립부스 신청</span>
          <span className="text-gray-600">부대시설 신청</span>
        </nav>
      </div>

      <div className="p-4 bg-white">
        {/* Page Title */}
        <div className="flex items-center justify-between mb-4">
          <div></div>
          <h1 className="text-lg font-bold text-gray-900">마이페이지</h1>
          <button className="px-3 py-1 text-[10px] border border-blue-600 text-blue-600 rounded-lg">로그인 정보</button>
        </div>

        {/* 전시 부스신청 Section */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-blue-600 mb-3">전시 부스신청</h2>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="grid grid-cols-4 divide-x divide-gray-100">
              <div className="p-3 text-center">
                <p className="text-[10px] text-gray-500 mb-1">상태</p>
                <p className="text-sm font-semibold text-gray-900">승인</p>
              </div>
              <div className="p-3 text-center">
                <p className="text-[10px] text-gray-500 mb-1">신청 현황</p>
                <button className="px-3 py-1 text-[10px] bg-blue-600 text-white rounded-lg">확인하기</button>
              </div>
              <div className="p-3 text-center">
                <p className="text-[10px] text-gray-500 mb-1">부스참가 신청</p>
                <p className="text-sm font-bold text-gray-900">3,000,000 원</p>
              </div>
              <div className="p-3 text-center">
                <p className="text-[10px] text-gray-500 mb-1">인보이스</p>
                <button className="px-3 py-1 text-[10px] border border-blue-600 text-blue-600 rounded-lg">Invoice</button>
              </div>
            </div>
          </div>
        </section>

        {/* 체크리스트 Section */}
        <section>
          <h2 className="text-sm font-bold text-gray-900 mb-3">체크리스트 (제출서류)</h2>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full text-[9px]">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th rowSpan={2} className="py-2 px-2 text-left font-medium text-gray-600 w-[18%]">제출 서류</th>
                  <th rowSpan={2} className="py-2 px-2 text-center font-medium text-gray-600 w-[10%]">신청현황</th>
                  <th rowSpan={2} className="py-2 px-2 text-left font-medium text-gray-600 w-[22%]">안내</th>
                  <th colSpan={2} className="py-1 px-2 text-center font-medium text-gray-600 border-b">필수제출</th>
                  <th rowSpan={2} className="py-2 px-2 text-center font-medium text-gray-600 w-[10%]">마감일</th>
                  <th rowSpan={2} className="py-2 px-2 text-center font-medium text-gray-600 w-[10%]">신청내역</th>
                  <th rowSpan={2} className="py-2 px-2 text-center font-medium text-gray-600 w-[8%]">인보이스</th>
                </tr>
                <tr className="bg-gray-50">
                  <th className="py-1 px-1 text-center font-medium text-gray-600 text-[8px]">조립·프리미엄</th>
                  <th className="py-1 px-1 text-center font-medium text-gray-600 text-[8px]">독립부스</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { form: "FORM 1", name: "홍보자료 신청", desc: "기업 및 전시품 소개", req1: "필수", req2: "필수", hasInvoice: false },
                  { form: "FORM 2", name: "출입증 신청", desc: "전시장 상주인원 명찰", req1: "필수", req2: "필수", hasInvoice: false },
                  { form: "FORM 3", name: "상호간판 신청", desc: "상호간판 및 현황판명", req1: "필수", req2: "필수", hasInvoice: false },
                  { form: "FORM 4", name: "독립부스 신청", desc: "부스 평면도/입면도", req1: "해당없음", req2: "필요시", hasInvoice: false },
                  { form: "FORM 5", name: "부대시설 사용 신청", desc: "전기, 인터넷 등", req1: "필요시", req2: "필요시", hasInvoice: true },
                ].map((item, i) => (
                  <tr key={i} className="hover:bg-gray-50">
                    <td className="py-2 px-2">
                      <span className="text-gray-500">{item.form}</span>
                      <p className="font-medium text-gray-900">{item.name}</p>
                    </td>
                    <td className="py-2 px-2 text-center text-gray-600">제출대기</td>
                    <td className="py-2 px-2 text-gray-500">{item.desc}</td>
                    <td className="py-2 px-1 text-center text-gray-600">{item.req1}</td>
                    <td className="py-2 px-1 text-center text-gray-600">{item.req2}</td>
                    <td className="py-2 px-2 text-center text-gray-500">2026. 7. 3.</td>
                    <td className="py-2 px-2 text-center">
                      <button className="px-2 py-0.5 text-[8px] border border-blue-600 text-blue-600 rounded">제출하기</button>
                    </td>
                    <td className="py-2 px-2 text-center">
                      {item.hasInvoice ? (
                        <button className="px-2 py-0.5 text-[8px] border border-blue-600 text-blue-600 rounded opacity-50">Invoice</button>
                      ) : (
                        <span className="text-gray-300">-</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 bg-gray-50 py-3 px-4">
        <div className="text-center text-[9px] text-gray-500">
          <p>업체명 : GreenEnerTEC | 사업자등록번호 : 220-88-93270</p>
          <p className="mt-1 text-gray-400">COPYRIGHT © 2026 GreenEnerTEC 2026. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </div>
  );
};
