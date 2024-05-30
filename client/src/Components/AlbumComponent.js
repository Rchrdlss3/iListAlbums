import { useState } from "react";
import { AlbumClass } from "../Helper/AlbumHelper";
import { albumImageStyle } from "../Styles/StyleFunctions";
import AlbumSearchComponent from "./AlbumSearchComponent";

export default function AlbumComponent ({place}) {
    const [album,setAlbum] = useState(new AlbumClass());
    const [openSearch,setOpenSearch] = useState(false);

    return album.title ? 
     (   
            <div>
                <h1>{place}</h1>
            <img 
            src = {album.image}
            style = {albumImageStyle()}
            >
            </img>
            <h3>{album.title}</h3>
            <div style = {{ 
                color: '#00000050'
            }}>{album.artist}</div>
            </div>
            ) : (
                <div>
                    <h1>{place}</h1>
                    <img 
                    src = "https://media.istockphoto.com/id/187722063/photo/funny-man-with-watermelon-helmet-and-goggles.jpg?s=612x612&w=0&k=20&c=gRAm8vtLqdOU8a-mJVt6m_Wnv8pLpa3TBh2vRQP4208="
                    style = {albumImageStyle()}
                    onClick = {() => setOpenSearch(true)}
                    />
                      <AlbumSearchComponent album = {album} setAlbum = {setAlbum} openSearch = {openSearch} setOpenSearch = {setOpenSearch}/>
                </div>
            )
}