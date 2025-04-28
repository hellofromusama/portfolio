import SkillsPageContent from "@/components/skills/SkillsPageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills - Usama Javed",
  description: "Technical skills possessed by Usama Javed.",
};

export default function SkillsPage() {
  return (
    <SkillsPageContent />
  );
}

