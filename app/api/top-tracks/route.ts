import { NextResponse, NextRequest } from "next/server";
import { getTopTracks } from "../../../lib/spotify";
import {
  SpotifyTopTracksResponse,
  SpotifyTrack,
  SpotifyArtist,
} from "../../../lib/types";

export const dynamic = "force-dynamic";
//eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(_request: NextRequest) {
  const response = await getTopTracks();
  if (response.status === 204 || response.status > 400) {
    console.log(await response.json());
    return NextResponse.json({ tracks: [] }, { status: 200 });
  }
  try {
    const data: SpotifyTopTracksResponse = await response.json();
    console.log("top-tracks", data);
    const tracks = data.items.slice(0, 10).map((track: SpotifyTrack) => {
      return {
        artist: track.artists
          .map((artist: SpotifyArtist) => artist.name)
          .join(", "),
        songUrl: track.external_urls.spotify,
        title: track.name,
        imageUrl: track.album.images.map((image) => image.url)[1],
        duration_ms: track.duration_ms,
      };
    });
    console.log("tracks", tracks);
    return NextResponse.json(
      { tracks },
      {
        status: 200,
      },
    );
    //eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (_err) {
    return NextResponse.json({ tracks: [] }, { status: 200 });
  }
}
