import ProjectsPageContent from "@/components/projects/ProjectsPageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Usama Javed",
  description: "A showcase of projects developed by Usama Javed.",
};

export default function ProjectsPage() {
  return (
    <ProjectsPageContent />
  );
}

