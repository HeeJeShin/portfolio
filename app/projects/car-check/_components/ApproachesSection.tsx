import { approaches } from "../_data/constants";

export const ApproachesSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">기술적 접근법</h2>

      <div className="space-y-6">
        {approaches.map((approach) => (
          <ApproachCard key={approach.id} approach={approach} />
        ))}
      </div>
    </section>
  );
};

interface ApproachCardProps {
  approach: (typeof approaches)[number];
}

const ApproachCard = ({ approach }: ApproachCardProps) => {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <h3 className="font-bold text-gray-900 text-lg mb-4">{approach.title}</h3>

      <div className="grid md:grid-cols-3 gap-4">
        {/* 문제 */}
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-xs font-medium text-gray-500 mb-2">문제</p>
          <p className="text-sm text-gray-700">{approach.problem}</p>
        </div>

        {/* 해결 */}
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-xs font-medium text-gray-500 mb-2">접근</p>
          <p className="text-sm text-gray-700">{approach.solution}</p>
        </div>

        {/* 효과 */}
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-xs font-medium text-gray-500 mb-2">효과</p>
          <p className="text-sm font-medium text-[#191979]">{approach.effect}</p>
        </div>
      </div>

      {approach.code && <CodeBlock {...approach.code} />}
    </div>
  );
};

// 실제 코드 발췌. 주석(//) 줄은 회색으로
const CodeBlock = ({ file, url, snippet }: { file: string; url: string; snippet: string }) => {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between mb-1.5">
        <p className="text-xs font-mono text-gray-500">{file}</p>
        <a href={url} target="_blank" rel="noopener noreferrer" className="text-xs text-[#191979] hover:underline">
          GitHub에서 보기 ↗
        </a>
      </div>
      <pre className="text-xs font-mono bg-gray-900 text-gray-100 rounded p-3 overflow-x-auto leading-relaxed">
        {snippet.split("\n").map((line, i) => (
          <div key={i} className={line.trim().startsWith("//") ? "text-gray-500" : undefined}>
            {line || " "}
          </div>
        ))}
      </pre>
    </div>
  );
};
