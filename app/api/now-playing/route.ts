import { NextResponse, NextRequest } from "next/server";
import { getNowPlaying } from "../../../lib/spotify";
import { SpotifyNowPlayingResponse, SpotifyArtist } from "../../../lib/types";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  const response = await getNowPlaying();
  if (response?.status === 204 || response?.status > 400) {
    return NextResponse.json({ isPlaying: false }, { status: 200 });
  }

  try {
    const song: SpotifyNowPlayingResponse = await response.json();
    const isPlaying = song?.is_playing;
    const name = song?.item?.name;
    const artist = song?.item?.artists
      .map((artist: SpotifyArtist) => artist.name)
      .join(", ");
    const album = song?.item?.album.name;
    const albumImageUrl = song?.item?.album.images[0].url;
    const songUrl = song?.item?.external_urls.spotify;

    return NextResponse.json(
      {
        isPlaying,
        album,
        albumImageUrl,
        name,
        songUrl,
        artist,
      },
      {
        status: 200,
      }
    );
  } catch (err) {
    return NextResponse.json(
      {
        isPlaying: false,
      },
      {
        status: 200,
      }
    );
  }
}
