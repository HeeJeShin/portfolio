import { ProjectHeader } from "@/app/_components/ProjectHeader";

export const Header = () => {
  return (
    <ProjectHeader
      title="4J - AI 수용인원 자동계산"
      period="2026.01"
      techStack={["Next.js 16", "TypeScript", "Google Gemini AI"]}
    />
  );
};
