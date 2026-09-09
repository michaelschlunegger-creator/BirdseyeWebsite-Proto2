import { PageView } from "@/components/page-view";
import { getPage } from "@/lib/site-content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Understand Your Assets | Birdseye Digital Asset Solutions",
  description: "Inspection, outdoor asset intelligence, digital engineering and assessment to help reduce downtime, avoid rework and make better asset decisions.",
};

export default function Home() {
  return <PageView page={getPage("/")!} />;
}
