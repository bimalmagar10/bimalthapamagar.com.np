import { NextResponse } from "next/server";
import {
  getLargestLastFmImage,
  getLastFmAlbumImage,
  getLastFmTopTracks,
  LastFmConfigError,
} from "@/lib/lastfm";

export const revalidate = 3600;

export async function GET() {
  try {
    const topTracks = await getLastFmTopTracks(10);
    const tracks = await Promise.all(
      topTracks.map(async (track, index) => {
        const playcount = Number.parseInt(track.playcount, 10);
        let imageUrl = getLargestLastFmImage(track.image);

        if (!imageUrl) {
          try {
            imageUrl = await getLastFmAlbumImage(
              track.artist.name,
              track.name,
            );
          } catch (error) {
            console.warn(
              `Unable to load album art for ${track.artist.name} - ${track.name}:`,
              error instanceof Error ? error.message : error,
            );
          }
        }

        return {
          id: track.mbid || `${track.artist.name}:${track.name}:${index}`,
          artist: track.artist.name,
          songUrl: track.url,
          title: track.name,
          imageUrl: imageUrl ?? "",
          playcount: Number.isNaN(playcount) ? 0 : playcount,
        };
      }),
    );

    return NextResponse.json(
      { tracks },
      {
        status: 200,
        headers: {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
        },
      },
    );
  } catch (error) {
    const isConfigError = error instanceof LastFmConfigError;
    console.error(
      "Unable to load Last.fm top tracks:",
      error instanceof Error ? error.message : error,
    );

    return NextResponse.json(
      {
        tracks: [],
        error: isConfigError
          ? "Last.fm top tracks are not configured."
          : "Top tracks are temporarily unavailable.",
      },
      { status: isConfigError ? 503 : 502 },
    );
  }
}
