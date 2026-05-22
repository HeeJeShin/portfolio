export const PrintHeader = () => {
  return (
    <header className="hidden print:block mb-8 pb-6 border-b border-gray-300">
      <h1 className="text-3xl font-bold text-gray-900">신희제</h1>
      <p className="text-base text-[#191979] font-medium mt-1">Frontend Developer</p>
      <div className="mt-3 text-sm text-gray-700 space-x-4">
        <span>heeheehee.hj@gmail.com</span>
        <span>010-2390-2038</span>
        <span>github.com/HeeJeShin</span>
      </div>
      <div className="mt-2 text-sm text-gray-700">
        <span className="font-semibold text-gray-900">현재 연봉</span>{" "}
        <span>50,000,000원</span>
      </div>
    </header>
  );
};
