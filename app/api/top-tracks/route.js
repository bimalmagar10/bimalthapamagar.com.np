import { NextResponse } from 'next/server'
import {getTopTracks} from "../../../lib/spotify";

export const dynamic = 'force-dynamic';
export async function GET(request) {
    const response = await getTopTracks();

    if(response.status === 204 || response.status > 400) {
        return NextResponse.json({tracks:[]},{status:200});
    }
    try {
        const {items} = await response.json();
        const tracks = items.slice(0,10).map(track => {
            return {
                artist:track.artists.map(artist => artist.name).join(", "),
                songUrl:track.external_urls.spotify,
                title:track.name,
                imageUrl:track.album.images.map(image => image.url)[1]
            };
        });
        return NextResponse.json({tracks},{
            status:200
        });
     } catch(err){
        return NextResponse.json({tracks},{status:200});
     }
}