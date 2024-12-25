import queryString from "query-string";

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;
const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;

const getAccessToken = async () => {
  try {
    const response = await fetch(TOKEN_ENDPOINT, {
      method:"POST",
      headers: {
        Authorization: `Basic ${basic}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:queryString.stringify({
        grant_type: "refresh_token",
        refresh_token,
      }),
    });
    const responseData = await response.json();
    return responseData;
  } catch (err) {
    throw new Error(JSON.stringify(err));
  }
};
export const getNowPlaying = async () => {
  try {
    const { access_token } = await getAccessToken();

    return fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  } catch (err) {
    throw new Error(JSON.stringify(err));
  }
};

export const getTopTracks = async () => {
  try {
    const { access_token } = await getAccessToken();
    return fetch(TOP_TRACKS_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
  } catch (err) {
    throw new Error(JSON.stringify(err));
  }
};
