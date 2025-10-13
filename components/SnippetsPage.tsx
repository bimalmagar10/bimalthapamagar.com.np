"use client";

import dynamic from "next/dynamic";
import { getSnippetsFromCategory } from "../lib/helpers";
import { LoaderCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SnippetsLists = dynamic(() => import("./SnippetsList"), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center items-center min-h-[200px]">
      <LoaderCircle className="h-8 w-8 animate-spin text-primary" />
    </div>
  ),
});

interface Snippet {
  slug: string;
  title: string;
  date: string;
  category?: string;
}

interface SnippetsPageProps {
  snippets: Snippet[];
}

const SnippetsPage = ({ snippets }: SnippetsPageProps) => {
  return (
    <div className="flex flex-col items-start mb-8">
      <Tabs defaultValue="ml" className="w-full">
        <TabsList>
          <TabsTrigger value="ml">Machine Learning</TabsTrigger>
          <TabsTrigger value="js">JS</TabsTrigger>
        </TabsList>
        <TabsContent value="ml">
          <SnippetsLists
            data={getSnippetsFromCategory(snippets, "machine-learning")}
          />
        </TabsContent>
        <TabsContent value="js">
          <div className="text-muted-foreground">Coming soon!!</div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SnippetsPage;
