// 944aeebe158e4663bbc4feac0a1921f6

import { SPOTIFY_API_URL, verifyAccessToken } from "../Helper/SpotifyHelper";

export const requestAccessToken = async () => {
    let formData = new URLSearchParams();
    formData.append("grant_type","client_credentials"); formData.append("client_id",process.env.REACT_APP_CLIENT_ID); formData.append("client_secret",process.env.REACT_APP_CLIENT_SECRET)
    const response = await fetch("https://accounts.spotify.com/api/token",{
        method: "POST",
        body: formData
    })
    return response.json();
}
const SpotifyHttpClient = () => {
    return {

    }
}
export const spotifyAlbumSearch = async (search) => {
    return fetch(`${SPOTIFY_API_URL}search?q=${search}&type=album`, {
        headers : new Headers({
            'Authorization' : `Bearer ${verifyAccessToken()}`
        })
    })
}

export const spotifyGetAlbum = (url) => {
    fetch(url,{
        headers : new Headers({
            'Authorization' : `Bearer ${verifyAccessToken()}`
        })
    })
}