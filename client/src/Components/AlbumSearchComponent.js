import { useState } from "react";
import { spotifyAlbumSearch } from "../Functions/SpotifyCalls";
import { albumResultsStyle, dialogBackgroundStyle, inputAlbumStyle } from "../Styles/StyleFunctions";

export default function AlbumSearchComponent ({album,setAlbum,openSearch,setOpenSearch}) {

    const [albumSearch,setAlbumSearch] = useState("");
    const [albumsResult,setAlbumsResult] = useState({
        albums : {
            items: [
                {
                artists: [{
                    name: ""
                }
            ],
            images: [{
                url: ""
            }],
            name: ""
            }]
        }
    });

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
                    <input placeholder="Search for an album..." onKeyDown = {
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
                        return <div style = {{
                            display: 'flex',
                            flexDirection: 'row',
                            backgroundColor: idx%2 == 0 ? 'red' : 'blue',
                            margin: '5px',
                            padding: '5px',
                            borderRadius: '5px'
                        }}
                        onClick = {() => setAlbum({
                            title: album.name,
                            artist: album.artists[0].name,
                            image: album.images[0].url
                        })}
                        >
                            <img style = {{
                            width: '100px',
                            height: '100px'
                            }} src = {album.images[0].url}/>
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
                <button onClick = {() =>                                 
                                spotifyAlbumSearch(albumSearch)
                                .then(res => res.json())
                                .then(data => setAlbumsResult(data))}>Search</button><button onClick = {() => setOpenSearch(false)}>
                Close
                </button>  
                </div>
            </div>
        </div>
    )
}