import { ProjectHeader } from "@/app/_components/ProjectHeader";

export const Header = () => {
  return (
    <ProjectHeader
      title="전시부스 신청 관리 어드민"
      period="2025.02 - 2025.04"
      techStack={["Next.js", "TypeScript", "TanStack Query", "Vitest"]}
    />
  );
};
