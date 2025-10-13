import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { useId } from "react";

const TopTracksSkeleton = () => {
  const id = useId();

  return (
    <div className="space-y-0">
      {Array.from({ length: 10 }, (_, idx) => idx).map((_, idx) => (
        <div
          key={id + idx}
          className={cn(
            "flex items-center gap-4 py-4 px-2 rounded-lg cursor-not-allowed"
          )}
        >
          <div className="flex items-center gap-4 flex-1">
            <Skeleton className="flex-shrink-0 w-12 h-12 rounded-md" />
            <div className="flex-1 min-w-0 space-y-2">
              <Skeleton className="h-5 w-full max-w-[250px] sm:max-w-[300px] md:max-w-[400px] rounded" />
              <Skeleton className="h-4 w-full max-w-[180px] sm:max-w-[220px] md:max-w-[280px] rounded" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopTracksSkeleton;
