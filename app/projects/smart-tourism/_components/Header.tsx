import { ProjectHeader } from "@/app/_components/ProjectHeader";

export const Header = () => {
  return (
    <ProjectHeader
      title="스마트관광 플랫폼"
      period="2025.06 - 2025.11"
      techStack={["Next.js", "TypeScript", "KCP 결제"]}
    />
  );
};
