import { useEffect, useState } from "react";
import { spotifyAlbumSearch } from "../Functions/SpotifyCalls";
import { albumResultsStyle, albumRowStyle, albumSearchButton, dialogBackgroundStyle, inputAlbumStyle, inputSearchField } from "../Styles/StyleFunctions";
import {extractColors} from 'extract-colors';
import { albumResultsData } from "../Helper/HelperFunctions";

async function getBackgroundColor (url) {
    try {
        return extractColors(url,{
            crossOrigin: "anonymous"
        })
    } catch (e) {
        console.log(e)
    }
}

export default function AlbumSearchComponent ({specifcAlbum,albumsArray,setAlbumsArray,openSearch,setOpenSearch}) {
    const [albumSearch,setAlbumSearch] = useState("");
    const [albumsResult,setAlbumsResult] = useState(albumResultsData);

    return (
        <div style = {{
            display: openSearch ? 'block' : 'none',
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            zIndex: 1
            }}>
            <div style = {dialogBackgroundStyle()}>
                <div style = {inputAlbumStyle()}>
                    <input 
                    value = {albumSearch}
                    style = {inputSearchField()}
                    placeholder= "Search for an album..." 
                    onChange = {(e) => setAlbumSearch(e.target.value)}
                    onKeyDown = {
                        (e) => 
                        {
                            setAlbumSearch(e.target.value);
                            if (e.key === 'Enter') {
                                spotifyAlbumSearch(albumSearch)
                                .then(res => res.json())
                                .then(data => setAlbumsResult(data))
                        }}
                        }>
                    </input>
                    <br />
                <div style = {albumResultsStyle()}>
                    {albumsResult.albums.items.map((album,idx) => {
                        return <div style = {albumRowStyle(idx)}
                        onClick = {() => {     
                            const arrayCopy = albumsArray;
                            const specificIndex = specifcAlbum.place-1;
                            getBackgroundColor(album.images[0].url)
                            .then((finalColor) => {
                                arrayCopy[specificIndex] = {
                                    ...arrayCopy[specificIndex],
                                    title: album.name,
                                    artist: album.artists[0].name,
                                    image: album.images[0].url,
                                    backgroundColor: finalColor[0].hex
                                }
                                setAlbumsArray([...arrayCopy])      
                            })  
                            setAlbumSearch("")
                            setAlbumsResult(albumResultsData)           
                            setOpenSearch(false)
                        }}
                        >
                            {album.images[0].url ? 
                            <img style = {{
                            width: '100px',
                            height: '100px'
                            }} src = {album.images[0].url}/> : null
                        }
                            <div style = {{
                                flexDirection : 'column',
                                marginLeft: '10px'
                            }}> 
                            <p>{album.artists[0].name}</p>
                            {album.name}
                            </div>
                        </div>
                    })}
                </div>
                <div style = {{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: 5,
                    margin: '10px'
                    }}>
                <button 
                style = {albumSearchButton()}
                onClick = {() =>                                 
                                spotifyAlbumSearch(albumSearch)
                                .then(res => res.json())
                                .then(data => setAlbumsResult(data))}>Search</button>
                <button 
                style = {albumSearchButton()}
                onClick = {() => {
                                    setAlbumSearch("")
                                    setAlbumsResult(albumResultsData)
                                    setOpenSearch(false)
                }}>
                Close
                </button>  
                </div>

                </div>
            </div>
        </div>
    )
}