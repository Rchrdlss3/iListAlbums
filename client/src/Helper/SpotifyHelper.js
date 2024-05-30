import { requestAccessToken } from "../Functions/SpotifyCalls";

export const verifyAccessToken = () => {
    const expiration_time = localStorage.getItem("TOKEN_EXPIRATION");

    let access_token = localStorage.getItem("ACCESS_TOKEN");
    let date = new Date()
    if (access_token == null || expiration_time == null || Date.now() > expiration_time) {
        localStorage.setItem("TOKEN_EXPIRATION",date.setHours(date.getHours()+1))
        requestAccessToken().then(data => localStorage.setItem("ACCESS_TOKEN",data.access_token))
    } 
    return access_token
}
export const SPOTIFY_API_URL = "https://api.spotify.com/v1/";