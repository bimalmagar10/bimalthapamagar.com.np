import ResourcesPage from "@/components/ResourcesPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description: "Useful links I keep coming back to — project ideas, deployment platforms, ML/AI tools, frameworks, and design resources.",
};

export default function Resources() {
  return <ResourcesPage />;
}
