import Main from "@/components/Main";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio - Alston Soares",
  description: "Alston Soares Next.js Portfolio Website (DEV from INDIA)",
};

export default function Home() {
  return (
    <div className="text-white">
      <Main />
    </div>
  );
}
