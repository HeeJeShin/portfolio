export const SmsEmailSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">문자인증 / 메일발송</h2>
      <div className="bg-gray-50 rounded-xl p-6">
        <p className="text-gray-600 mb-6">
          회원가입, 비밀번호 찾기 등 <strong className="text-gray-900">인증/알림 기능</strong>을 구현했습니다.
          재사용 가능한 훅으로 만들어 여러 페이지에서 동일한 방식으로 사용합니다.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* 문자 인증 */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="bg-emerald-600 text-white px-4 py-3 flex items-center gap-2">
              <span className="text-lg">📱</span>
              <span className="font-medium">SMS 문자 인증</span>
            </div>
            <div className="p-4">
              <div className="space-y-3 mb-4">
                {[
                  { title: "회원가입 본인 인증", desc: "휴대폰 번호로 인증번호 발송" },
                  { title: "비밀번호 찾기", desc: "등록된 번호로 임시 비밀번호 발송" },
                  { title: "담당자 정보 변경", desc: "연락처 수정 시 본인 확인" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-bold text-sm">{i + 1}</div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{item.title}</p>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-xs font-mono bg-gray-100 rounded p-3">
                <span className="text-purple-600">useSendAuthCode</span>() → SMS 발송<br/>
                <span className="text-purple-600">useVerifyAuthCode</span>() → 인증 확인
              </div>
            </div>
          </div>

          {/* 이메일 발송 */}
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
            <div className="bg-blue-600 text-white px-4 py-3 flex items-center gap-2">
              <span className="text-lg">✉️</span>
              <span className="font-medium">이메일 발송</span>
            </div>
            <div className="p-4">
              <div className="space-y-3 mb-4">
                {[
                  { title: "임시 비밀번호 발송", desc: "비밀번호 찾기 시 메일 발송" },
                  { title: "이메일 인증번호", desc: "회원가입 시 이메일 본인 확인" },
                  { title: "신청 완료 알림", desc: "전시 참가신청 접수 완료 안내" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">{i + 1}</div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{item.title}</p>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-xs font-mono bg-gray-100 rounded p-3">
                <span className="text-blue-600">MAIL_TEMPLATE_CODES</span>.EMAIL_VERIFICATION<br/>
                <span className="text-gray-500">// 템플릿 코드 기반 발송</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
