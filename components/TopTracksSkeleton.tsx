import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { useId } from "react";

const TopTracksSkeleton = () => {
  const id = useId();

  return (
    <div className="space-y-4">
      {Array.from({ length: 10 }, (_, idx) => idx).map((_, idx) => (
        <div
          key={id + idx}
          className={cn(
            "p-4 border border-gray-400 rounded-lg cursor-not-allowed",
            "flex justify-between items-center"
          )}
        >
          <div className="flex flex-col justify-between space-y-3">
            <Skeleton className="h-6 w-80 rounded-sm" />
            <Skeleton className="h-4 w-96 rounded-sm" />
          </div>
          <div>
            <Skeleton className="h-20 w-20 rounded-sm" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopTracksSkeleton;
