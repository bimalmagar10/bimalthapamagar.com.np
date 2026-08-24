import { NextResponse } from "next/server";
import {
  getLargestLastFmImage,
  getLastFmAlbumImage,
  getLastFmNowPlaying,
  LastFmConfigError,
} from "@/lib/lastfm";

export const revalidate = 5;

export async function GET() {
  try {
    const song = await getLastFmNowPlaying();
    let albumImageUrl = song
      ? getLargestLastFmImage(song.image)
      : undefined;

    if (song && !albumImageUrl) {
      try {
        albumImageUrl = await getLastFmAlbumImage(
          song.artist["#text"],
          song.name,
        );
      } catch (error) {
        console.warn(
          `Unable to load album art for ${song.artist["#text"]} - ${song.name}:`,
          error instanceof Error ? error.message : error,
        );
      }
    }

    return NextResponse.json(
      song
        ? {
            isPlaying: true,
            album: song.album["#text"],
            albumImageUrl: albumImageUrl ?? "",
            name: song.name,
            songUrl: song.url,
            artist: song.artist["#text"],
          }
        : { isPlaying: false },
      {
        status: 200,
        headers: {
          "Cache-Control": "public, s-maxage=5",
        },
      },
    );
  } catch (error) {
    const isConfigError = error instanceof LastFmConfigError;
    console.error(
      "Unable to load Last.fm now playing:",
      error instanceof Error ? error.message : error,
    );

    return NextResponse.json(
      {
        isPlaying: false,
        error: isConfigError
          ? "Last.fm now playing is not configured."
          : "Now playing is temporarily unavailable.",
      },
      {
        status: isConfigError ? 503 : 502,
        headers: {
          "Cache-Control": "no-store",
        },
      },
    );
  }
}
