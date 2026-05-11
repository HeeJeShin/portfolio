export const CommunitySection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">커뮤니티 기능</h2>

      {/* 주요 기능 */}
      <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 mb-6">
        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
          <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm">💬</span>
          구현 기능
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {[
            { title: "게시글 목록", icon: "📋", desc: "페이지네이션, 검색" },
            { title: "공지사항", icon: "📢", desc: "상단 고정, 중요 표시" },
            { title: "댓글", icon: "💬", desc: "작성/수정/삭제" },
            { title: "댓글 신고", icon: "🚨", desc: "부적절 댓글 신고" },
            { title: "글 신고", icon: "⚠️", desc: "부적절 게시글 신고" },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-lg p-4 border border-gray-200 text-center">
              <span className="text-2xl">{item.icon}</span>
              <p className="font-medium text-gray-900 text-sm mt-2">{item.title}</p>
              <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 게시글 목록 구조 */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6">
        <div className="bg-blue-600 text-white px-4 py-3">
          <h4 className="font-bold flex items-center gap-2">
            <span>📋</span> 게시글 목록 구현
          </h4>
        </div>
        <div className="p-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h5 className="font-bold text-gray-900 mb-3">목록 기능</h5>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  페이지네이션 (무한스크롤 / 페이지 번호)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  키워드 검색 (제목, 내용)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  카테고리 필터링
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  정렬 (최신순, 조회순, 댓글순)
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h5 className="font-bold text-gray-900 mb-3">공지사항 처리</h5>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  목록 상단 고정 표시
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  공지 배지 UI 구분
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  중요 공지 하이라이트
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* 댓글 시스템 */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-6">
        <div className="bg-blue-600 text-white px-4 py-3">
          <h4 className="font-bold flex items-center gap-2">
            <span>💬</span> 댓글 시스템
          </h4>
        </div>
        <div className="p-4">
          <div className="text-xs font-mono bg-gray-900 text-gray-100 rounded p-4 overflow-x-auto mb-4">
            <div className="text-gray-500">// 댓글 컴포넌트 구조</div>
            <div className="mt-2">
              <span className="text-purple-400">interface</span> <span className="text-yellow-300">Comment</span> {`{`}
            </div>
            <div className="pl-4">id: <span className="text-orange-300">number</span></div>
            <div className="pl-4">content: <span className="text-orange-300">string</span></div>
            <div className="pl-4">author: <span className="text-orange-300">User</span></div>
            <div className="pl-4">createdAt: <span className="text-orange-300">Date</span></div>
            <div className="pl-4">isEdited: <span className="text-orange-300">boolean</span></div>
            <div className="pl-4">replies?: <span className="text-orange-300">Comment[]</span> <span className="text-gray-500">// 대댓글</span></div>
            <div>{`}`}</div>
          </div>

          <div className="grid md:grid-cols-3 gap-3">
            {[
              { action: "작성", desc: "로그인 유저만 가능", method: "POST" },
              { action: "수정", desc: "본인 댓글만 가능", method: "PUT" },
              { action: "삭제", desc: "본인 댓글만 가능", method: "DELETE" },
            ].map((item) => (
              <div key={item.action} className="bg-gray-50 rounded-lg p-3 flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900 text-sm">{item.action}</p>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
                <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-bold rounded">
                  {item.method}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 신고 기능 */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="bg-blue-600 text-white px-4 py-3">
          <h4 className="font-bold flex items-center gap-2">
            <span>🚨</span> 신고 기능
          </h4>
        </div>
        <div className="p-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-sm">📝</span> 글 신고
              </h5>
              <div className="space-y-2">
                {[
                  "스팸/광고",
                  "욕설/비방",
                  "음란물",
                  "개인정보 노출",
                  "기타",
                ].map((reason) => (
                  <div key={reason} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    {reason}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="text-sm">💬</span> 댓글 신고
              </h5>
              <div className="text-xs font-mono bg-gray-900 text-gray-100 rounded p-3">
                <div className="text-gray-500">// 신고 API 호출</div>
                <div className="mt-1">
                  <span className="text-purple-400">const</span> reportComment = <span className="text-yellow-300">async</span> (
                </div>
                <div className="pl-2">commentId: <span className="text-orange-300">number</span>,</div>
                <div className="pl-2">reason: <span className="text-orange-300">ReportReason</span></div>
                <div>) =&gt; {`{`}</div>
                <div className="pl-4">
                  <span className="text-yellow-300">await</span> post(<span className="text-green-300">&apos;/report/comment&apos;</span>, {`{`}
                </div>
                <div className="pl-6">commentId, reason</div>
                <div className="pl-4">{`})`}</div>
                <div>{`}`}</div>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="text-xs text-blue-800">
              <strong>신고 처리 흐름:</strong> 신고 접수 → 관리자 검토 → 게시글/댓글 숨김 또는 삭제 → 신고자에게 결과 안내
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
