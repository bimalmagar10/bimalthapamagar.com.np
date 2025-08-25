import { WarningIcon } from "@chakra-ui/icons";
import { Alert, useColorModeValue } from "@chakra-ui/react";
import { Music } from "lucide-react";
import Link from "next/link";
import useSWR from "swr";
import { fetcher } from "../lib/helpers";
import TopTracksSkeleton from "./TopTracksSkeleton";
import Image from "next/image";
import { Separator } from "./ui/separator";

const MyTopTracks = () => {
  const bg = useColorModeValue("gray.100", "gray.800");
  const { data, isLoading } = useSWR(`/api/top-tracks`, fetcher);

  return (
    <>
      <div className="flex items-center gap-2 mb-4">
        <h1 className="text-2xl font-bold text-foreground">
          My Top Ten Tracks on Spotify
        </h1>
        <Music className="h-5 w-5 text-primary text-yellow-500" />
      </div>
      <Separator className="my-2" />
      <div className="space-y-0 mb-0">
        {!isLoading ? (
          data && data?.tracks?.length > 0 ? (
            data.tracks.map((track: any, idx: any) => (
              <div
                key={track.id + "-" + idx}
                className="group flex items-center gap-4 py-4 px-0 hover:bg-muted/30 transition-colors duration-200 rounded-lg"
              >
                <div className="flex items-center gap-4 flex-1">
                  <div className="relative flex-shrink-0 w-12 h-12 overflow-hidden rounded-md bg-muted">
                    <Image
                      src={track.imageUrl || "/placeholder.svg"}
                      alt={`${track.title} cover`}
                      height={48}
                      width={48}
                      objectFit="cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <Link
                      href={track.songUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-foreground text-base leading-tight mb-1 truncate"
                    >
                      {track.title}
                    </Link>
                    <p className="text-muted-foreground text-sm truncate">
                      {track.artist}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <>
              <Alert status="error">
                <WarningIcon mr="1rem" color="crimson" />
                No Tracks to Show!
              </Alert>
            </>
          )
        ) : (
          <TopTracksSkeleton />
        )}
      </div>
    </>
  );
};

export default MyTopTracks;
