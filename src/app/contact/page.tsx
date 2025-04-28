import ContactPageContent from "@/components/contact/ContactPageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Usama Javed",
  description: "Contact information for Usama Javed.",
};

export default function ContactPage() {
  return (
    <ContactPageContent />
  );
}

