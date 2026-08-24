const LASTFM_API_ENDPOINT = "https://ws.audioscrobbler.com/2.0/";
const LASTFM_PLACEHOLDER_IMAGE_HASH =
  "2a96cbd8b46e442fc41c2b86b821562f.png";

const LASTFM_PERIODS = [
  "7day",
  "1month",
  "3month",
  "6month",
  "12month",
  "overall",
] as const;

type LastFmPeriod = (typeof LASTFM_PERIODS)[number];

export interface LastFmImage {
  size: string;
  "#text": string;
}

export interface LastFmTrack {
  name: string;
  mbid: string;
  url: string;
  playcount: string;
  artist: {
    name: string;
    mbid: string;
    url: string;
  };
  image: LastFmImage[];
}

export interface LastFmRecentTrack {
  name: string;
  mbid: string;
  url: string;
  artist: {
    mbid: string;
    "#text": string;
  };
  album: {
    mbid: string;
    "#text": string;
  };
  image: LastFmImage[];
  "@attr"?: {
    nowplaying?: string;
  };
}

interface LastFmApiResponse {
  error?: number;
  message?: string;
}

interface LastFmTopTracksResponse extends LastFmApiResponse {
  toptracks?: {
    track?: LastFmTrack[];
  };
}

interface LastFmRecentTracksResponse extends LastFmApiResponse {
  recenttracks?: {
    track?: LastFmRecentTrack[];
  };
}

interface LastFmTrackInfoResponse extends LastFmApiResponse {
  track?: {
    album?: {
      title: string;
      image: LastFmImage[];
    };
  };
}

export class LastFmConfigError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "LastFmConfigError";
  }
}

function getPeriod(value: string | undefined): LastFmPeriod {
  const period = value || "6month";

  if (!LASTFM_PERIODS.includes(period as LastFmPeriod)) {
    throw new LastFmConfigError(
      `LASTFM_TOP_TRACKS_PERIOD must be one of: ${LASTFM_PERIODS.join(", ")}`,
    );
  }

  return period as LastFmPeriod;
}

function getCredentials() {
  const apiKey = process.env.LASTFM_API_KEY?.trim();
  const username = process.env.LASTFM_USERNAME?.trim();

  if (!apiKey || !username) {
    throw new LastFmConfigError(
      "LASTFM_API_KEY and LASTFM_USERNAME must both be configured.",
    );
  }

  return { apiKey, username };
}

async function requestLastFm<T extends LastFmApiResponse>(
  params: Record<string, string>,
  revalidate: number,
  includeUser = true,
) {
  const { apiKey, username } = getCredentials();
  const searchParams = new URLSearchParams({
    ...params,
    ...(includeUser ? { user: username } : {}),
    api_key: apiKey,
    format: "json",
  });

  const response = await fetch(`${LASTFM_API_ENDPOINT}?${searchParams}`, {
    headers: {
      "User-Agent": "bimalthapamagar.com.np/1.0",
    },
    next: { revalidate },
  });

  if (!response.ok) {
    const message = (await response.text()).slice(0, 200);
    throw new Error(
      `Last.fm returned ${response.status}${message ? `: ${message}` : ""}`,
    );
  }

  const data = (await response.json()) as T;

  if (data.error) {
    throw new Error(
      `Last.fm API error ${data.error}${data.message ? `: ${data.message}` : ""}`,
    );
  }

  return data;
}

export function getLargestLastFmImage(images: LastFmImage[]) {
  return [...images]
    .reverse()
    .find((image) => {
      const url = image["#text"].trim();
      return url && !url.endsWith(LASTFM_PLACEHOLDER_IMAGE_HASH);
    })?.["#text"];
}

export async function getLastFmAlbumImage(artist: string, track: string) {
  const data = await requestLastFm<LastFmTrackInfoResponse>(
    {
      method: "track.getinfo",
      artist,
      track,
      autocorrect: "1",
    },
    3600,
    false,
  );

  return getLargestLastFmImage(data.track?.album?.image ?? []);
}

export async function getLastFmTopTracks(limit = 10) {
  const data = await requestLastFm<LastFmTopTracksResponse>(
    {
      method: "user.gettoptracks",
      period: getPeriod(process.env.LASTFM_TOP_TRACKS_PERIOD),
      limit: String(limit),
    },
    3600,
  );

  return data.toptracks?.track ?? [];
}

export async function getLastFmNowPlaying() {
  const data = await requestLastFm<LastFmRecentTracksResponse>(
    {
      method: "user.getrecenttracks",
      limit: "1",
    },
    5,
  );
  const track = data.recenttracks?.track?.[0];

  return track?.["@attr"]?.nowplaying === "true" ? track : null;
}
