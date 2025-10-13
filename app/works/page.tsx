import { Alert, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";

export const metadata = {
  title: "Works",
  description:
    "Welcome! This is Bimal Thapa Magar's page about his works. It demonstrates what work he has done or accomplished and the projects he had built using various tech stacks.",
};

export default function Works() {
  return (
    <div className="h-80 w-full p-8 relative">
      <Alert className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Info className="h-4 w-4" />
        <AlertDescription>
          This page is under development. I will get back to you soon with all
          my fabulous works.
        </AlertDescription>
      </Alert>
    </div>
  );
}
