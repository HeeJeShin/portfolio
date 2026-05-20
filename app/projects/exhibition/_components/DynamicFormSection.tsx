import { fieldTypes } from "../_data/constants";

export const DynamicFormSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">DynamicForm 컴포넌트</h2>
      <p className="text-gray-600 mb-6">
        백엔드 API 응답에 따라 <strong>폼 필드를 동적으로 생성</strong>하는 범용 컴포넌트입니다.
        출입증, 독립부스, 홍보자료 등 다양한 신청 페이지에서 공용으로 사용됩니다.
      </p>

      <WhyDynamicForm />
      <FieldTypes />
      <ApiToFormFlow />
      <ZipcodeField />
      <TextOptionField />
      <AdminLayoutSettings />
      <UtilityFunctions />
      <DynamicFormConclusion />
    </section>
  );
};

const WhyDynamicForm = () => (
  <div className="bg-white rounded-xl p-6 mb-8 border border-gray-200">
    <h3 className="text-lg font-bold text-gray-900 mb-4">왜 DynamicForm을 설계했는가?</h3>
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        {[
          { title: "프로젝트마다 다른 요구사항", desc: "전시회 A는 출입증에 차량번호 필요, 전시회 B는 불필요 등 프로젝트별 폼 구성이 상이" },
          { title: "반복되는 유사 페이지", desc: "출입증, 독립부스, 가구비품, 홍보자료 등 10개 이상의 신청 페이지가 비슷한 폼 구조" },
        ].map((item, i) => (
          <div key={i} className="mb-4">
            <p className="font-medium text-gray-900">{item.title}</p>
            <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
          </div>
        ))}
      </div>
      <div>
        {[
          { title: "백엔드와 협업 설계", desc: "API 스펙 협의를 통해 itemTypeCd, metaData 등 프론트 렌더링에 필요한 정보를 API에 포함" },
          { title: "사용자 경험 통일", desc: "프로젝트가 달라도 동일한 UX, 필드 레이아웃, 유효성 검사 방식 제공" },
        ].map((item, i) => (
          <div key={i} className="mb-4">
            <p className="font-medium text-gray-900">{item.title}</p>
            <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="mt-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
      <p className="text-sm text-gray-700 text-center">
        <strong>결과:</strong> 새 프로젝트 생성 시 백엔드 설정만으로 폼 구성 완료 →
        <strong className="text-gray-900"> 프론트엔드 코드 수정 0%</strong>
      </p>
    </div>
  </div>
);

const FieldTypes = () => (
  <>
    <h3 className="text-lg font-bold text-gray-900 mb-4">지원 필드 타입 (8종)</h3>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
      {fieldTypes.map((field) => (
        <div key={field.type} className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors border border-gray-200">
          <p className="font-medium text-gray-900 text-sm">{field.type}</p>
          <p className="text-xs text-gray-500">{field.desc}</p>
        </div>
      ))}
    </div>
  </>
);

const ApiToFormFlow = () => (
  <>
    <h3 className="text-lg font-bold text-gray-900 mb-4">API → Form 렌더링 흐름</h3>
    <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200">
      <div className="flex flex-col lg:flex-row items-stretch gap-4">
        <div className="flex-1 bg-gray-900 rounded-lg p-4 text-sm font-mono">
          <div className="text-gray-400 mb-2">// API Response</div>
          <div className="text-green-400">{"{"}</div>
          <div className="text-white pl-4">items: [</div>
          <div className="text-yellow-300 pl-8">{`{ fieldKey: "managerInfo",`}</div>
          <div className="text-yellow-300 pl-10">{`itemTypeCd: "GROUP" }`}</div>
          <div className="text-white pl-4">]</div>
          <div className="text-green-400">{"}"}</div>
        </div>
        <div className="flex items-center justify-center lg:flex-col">
          <span className="text-gray-400 text-2xl">→</span>
          <span className="text-xs text-gray-500 mt-1">DynamicForm</span>
        </div>
        <div className="flex-1 bg-white border border-gray-200 rounded-lg p-4">
          <div className="text-sm font-medium text-gray-900 mb-3 border-b pb-2">담당자 정보</div>
          <div className="space-y-3">
            <div>
              <label className="text-xs text-gray-500">이름 <span className="text-red-500">*</span></label>
              <div className="mt-1 h-8 bg-gray-100 rounded border border-gray-200"></div>
            </div>
            <div>
              <label className="text-xs text-gray-500">이메일 <span className="text-red-500">*</span></label>
              <div className="mt-1 h-8 bg-gray-100 rounded border border-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-4 text-center">
        itemTypeCd에 따라 적절한 Input/Select/Checkbox 등으로 자동 렌더링
      </p>
    </div>
  </>
);

const ZipcodeField = () => (
  <>
    <h3 className="text-lg font-bold text-gray-900 mb-4">ZIPCODE 필드 - 사용자 친화적 설계</h3>
    <div className="bg-white rounded-xl p-6 mb-8 border border-gray-200">
      <p className="text-sm text-gray-700 mb-4">
        주소 입력은 <strong>우편번호 + 기본주소 + 상세주소 + 영문주소</strong>로 구성됩니다.
        API에서는 각 필드를 개별 관리하지만, <strong className="text-gray-900">사용자에게는 하나의 통합된 주소 입력 UI</strong>를 제공합니다.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <div className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
            <span>기존 방식</span>
            <span className="text-xs bg-gray-200 px-2 py-0.5 rounded">비효율</span>
          </div>
          <div className="space-y-2 text-sm text-gray-600">
            <p>• 프로젝트마다 주소 필드 구성이 다름</p>
            <p>• 우편번호만 있는 경우, 상세주소 없는 경우...</p>
            <p>• 매번 조건 분기 처리 필요</p>
            <p>• 코드 복잡도 증가</p>
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 border border-gray-300">
          <div className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span>DynamicForm 방식</span>
            <span className="text-xs bg-gray-300 px-2 py-0.5 rounded">해결</span>
          </div>
          <div className="space-y-2 text-sm text-gray-600">
            <p>• ZIPCODE 타입 하나로 <strong>통합 처리</strong></p>
            <p>• 관련 필드 자동 감지 (addr, addrDetail, addrEn)</p>
            <p>• 우편번호 검색 시 자동 채움</p>
            <p>• <strong className="text-gray-900">사용자는 검색 한 번으로 완료</strong></p>
          </div>
        </div>
      </div>
      <div className="mt-6 bg-gray-50 rounded-lg p-4 border border-gray-200">
        <div className="text-sm font-bold text-gray-900 mb-3">통합 주소 입력 UI</div>
        <div className="space-y-2">
          <div className="flex gap-2">
            <div className="w-24 h-8 bg-gray-100 rounded border text-xs flex items-center px-2 text-gray-600">12345</div>
            <button className="px-3 py-1 bg-gray-900 text-white text-xs rounded">우편번호 검색</button>
          </div>
          <div className="h-8 bg-gray-50 rounded border text-xs flex items-center px-2 text-gray-500">서울특별시 강남구 테헤란로 123 (자동 입력)</div>
          <div className="h-8 bg-white rounded border text-xs flex items-center px-2 text-gray-900">101동 202호 (사용자 입력)</div>
          <div className="h-8 bg-gray-50 rounded border text-xs flex items-center px-2 text-gray-500">123, Teheran-ro, Gangnam-gu (자동 입력)</div>
        </div>
      </div>
    </div>
  </>
);

const TextOptionField = () => (
  <>
    <h3 className="text-lg font-bold text-gray-900 mb-4">TEXT_OPTION 처리 (RADIO/CHECKBOX)</h3>
    <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-200">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="text-sm font-bold text-gray-700 mb-3">RADIO + TEXT_OPTION</div>
          <div className="space-y-3">
            <label className="flex items-center gap-2">
              <input type="radio" name="demo-radio" defaultChecked />
              <span className="text-sm text-gray-700">표준부스</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="demo-radio" />
              <span className="text-sm text-gray-700">프리미엄부스</span>
            </label>
            <div className="flex items-center gap-2">
              <input type="radio" name="demo-radio" />
              <span className="text-sm text-gray-700">기타</span>
              <input type="text" placeholder="직접 입력" className="flex-1 px-2 py-1 text-sm border rounded" />
            </div>
          </div>
          <div className="mt-3 p-2 bg-gray-100 rounded text-xs font-mono">
            value: <span className="text-gray-600">&quot;other|커스텀부스&quot;</span>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="text-sm font-bold text-gray-700 mb-3">CHECKBOX + TEXT_OPTION</div>
          <div className="space-y-3">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" defaultChecked />
              <span className="text-sm text-gray-700">전기 설치</span>
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" className="rounded" defaultChecked />
              <span className="text-sm text-gray-700">인터넷 설치</span>
            </label>
            <div className="flex items-center gap-2">
              <input type="checkbox" className="rounded" defaultChecked />
              <span className="text-sm text-gray-700">기타</span>
              <input type="text" placeholder="직접 입력" className="flex-1 px-2 py-1 text-sm border rounded" defaultValue="추가장비" />
            </div>
          </div>
          <div className="mt-3 p-2 bg-gray-100 rounded text-xs font-mono">
            value: <span className="text-gray-600">[&quot;electric&quot;, &quot;internet&quot;, &quot;other|추가장비&quot;]</span>
          </div>
        </div>
      </div>
      <p className="text-xs text-gray-600 mt-4 text-center">
        TEXT_OPTION 선택 시 &apos;fieldKey|텍스트값&apos; 형태로 저장하여 기타 항목 입력 지원
      </p>
    </div>
  </>
);

const AdminLayoutSettings = () => (
  <>
    <h3 className="text-lg font-bold text-gray-900 mb-4">어드민에서 폼 레이아웃 조절</h3>
    <div className="bg-white rounded-xl p-6 mb-8 border border-gray-200">
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
        <p className="text-sm text-gray-700">
          프로젝트마다 폼 레이아웃 요구사항이 다릅니다.
          <strong className="text-gray-900"> 개발자 개입 없이 어드민에서 직접 레이아웃을 조절</strong>할 수 있도록
          metaData 기반 설정 시스템을 구현했습니다.
        </p>
      </div>

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-6">
        <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex items-center gap-2">
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          <span className="text-xs text-gray-500 ml-2">슈퍼어드민 - 폼 필드 설정</span>
        </div>
        <div className="p-4">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 text-gray-600 font-medium">필드명</th>
                <th className="text-left py-2 text-gray-600 font-medium">타입</th>
                <th className="text-left py-2 text-gray-600 font-medium">너비</th>
                <th className="text-left py-2 text-gray-600 font-medium">필수</th>
              </tr>
            </thead>
            <tbody>
              {[
                { field: "담당자명", type: "TEXT", width: "md (50%)" },
                { field: "회사 소개", type: "TEXTAREA", width: "lg (100%)" },
                { field: "연락처", type: "TEXT", width: "sm (25%)" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-gray-100">
                  <td className="py-2">{row.field}</td>
                  <td className="py-2 text-gray-500">{row.type}</td>
                  <td className="py-2">
                    <select className="text-xs border rounded px-2 py-1 bg-gray-50 border-gray-300 text-gray-700">
                      <option>{row.width}</option>
                    </select>
                  </td>
                  <td className="py-2"><input type="checkbox" defaultChecked={i !== 1} className="rounded" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-4">
        {[
          { size: "sm (25%)", width: "25%", desc: "연락처, 우편번호" },
          { size: "md (50%)", width: "50%", desc: "이름, 이메일 (기본)" },
          { size: "lg (100%)", width: "100%", desc: "주소, 설명" },
        ].map((item) => (
          <div key={item.size} className="text-center">
            <div className="text-sm font-bold text-gray-700 mb-2">{item.size}</div>
            <div className="h-8 bg-gray-200 rounded border border-gray-300 mx-auto" style={{ width: item.width, minWidth: '40px' }}></div>
            <p className="text-xs text-gray-500 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <p className="text-sm text-gray-700 text-center">
          <strong>어드민 설정 변경</strong> → <strong>API 응답 자동 반영</strong> → <strong>유저 화면 즉시 적용</strong>
          <br />
          <span className="text-gray-600">프론트엔드 배포 없이 레이아웃 변경 완료</span>
        </p>
      </div>
    </div>
  </>
);

const UtilityFunctions = () => (
  <>
    <h3 className="text-lg font-bold text-gray-900 mb-4">유틸리티 함수</h3>
    <div className="grid md:grid-cols-3 gap-4 mb-8">
      {[
        { name: "validateRequiredFields()", desc: "필수 필드 검증 및 에러 메시지 생성", ret: "returns: Record<string, string>" },
        { name: "initializeFormData()", desc: "메뉴 아이템 기반 폼 데이터 초기화", ret: 'CHECKBOX: [] / 나머지: ""' },
        { name: "normalizeAdditionalInfoData()", desc: "중첩 API 데이터 → flat 형태 변환", ret: 'nested → "group.field"' },
      ].map((util) => (
        <div key={util.name} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
          <div className="font-medium text-gray-900 mb-2">{util.name}</div>
          <p className="text-xs text-gray-600">{util.desc}</p>
          <div className="mt-2 text-xs font-mono text-gray-700">{util.ret}</div>
        </div>
      ))}
    </div>
  </>
);

const DynamicFormConclusion = () => (
  <div className="bg-gray-900 rounded-xl p-6 text-white">
    <h3 className="font-bold mb-3">DynamicForm 도입 효과</h3>
    <div className="grid md:grid-cols-3 gap-4 text-sm">
      {[
        { value: "0줄", desc: "새 프로젝트 시 프론트 코드 수정" },
        { value: "10+", desc: "동일 컴포넌트로 처리하는 페이지 수" },
        { value: "100%", desc: "프로젝트 간 UX 일관성" },
      ].map((item) => (
        <div key={item.value} className="bg-white/10 rounded-lg p-3">
          <p className="text-2xl font-bold text-white">{item.value}</p>
          <p className="text-gray-300">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
);
