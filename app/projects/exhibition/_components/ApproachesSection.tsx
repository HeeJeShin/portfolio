import { approaches } from "../_data/exhibition";

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
          <p className="text-sm font-medium text-blue-600">{approach.effect}</p>
        </div>
      </div>
    </div>
  );
};
