import {getTopTracks} from "../../lib/spotify";
export default async function handler(_,res) {
	const response = await getTopTracks();

	if(response.status === 204 || response.status > 400){
		res.status(200).json({tracks:null})
	}
	const {items} = await response.json();
	 const tracks = items.slice(0,10).map(track => {
	 	return {
	 		artist:track.artists.map(artist => artist.name).join(", "),
	 		songUrl:track.external_urls.spotify,
	 		title:track.name,
	 		imageUrl:track.album.images.map(image => image.url)[1]
	 	};
	 });

	return res.status(200).json({tracks});
};