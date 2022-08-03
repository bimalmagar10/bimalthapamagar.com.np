import {getNowPlaying} from "../../lib/spotify";

export default async function handler(req, res) {
   const response = await getNowPlaying();
   
   if(response.status === 204 || response.status > 400) {
      return res.status(200).json({isPlaying:false});
   }
   try {
      const song = await response.json();
      const isPlaying = song.is_playing;
      const name = song.item.name;
      const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
      const album = song.item.album.name;
      const albumImageUrl = song.item.album.images[0].url;
      const songUrl = song.item.album.external_urls.spotify;
      return res.status(200).json({
          isPlaying,
          album,
          albumImageUrl,
          name,
          songUrl,
          artist
      });
   } catch(err){
      return res.status(200).json({isPlaying:false});
   }
}