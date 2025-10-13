// Types for Spotify API responses
export interface SpotifyArtist {
  name: string;
  id: string;
}

export interface SpotifyImage {
  url: string;
  height: number;
  width: number;
}

export interface SpotifyAlbum {
  name: string;
  images: SpotifyImage[];
}

export interface SpotifyTrack {
  name: string;
  artists: SpotifyArtist[];
  album: SpotifyAlbum;
  external_urls: {
    spotify: string;
  };
}

export interface SpotifyNowPlayingResponse {
  is_playing: boolean;
  item: SpotifyTrack;
}

export interface SpotifyTopTracksResponse {
  items: SpotifyTrack[];
}
