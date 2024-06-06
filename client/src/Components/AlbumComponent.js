import { React, useState, Component } from "react";
import { AlbumClass } from "../Helper/AlbumHelper";
import { albumHeaderStyle, albumImageStyle } from "../Styles/StyleFunctions";
import AlbumSearchComponent from "./AlbumSearchComponent";


export default function AlbumComponent ({album,albumId,albumsArray,setAlbumsArray}) {
    const [openSearch,setOpenSearch] = useState(false);

    return album.title ? 
     (   
            <div 
            id = {albumId}
            style = {{
                transform: ` matrix(${album.matrix})`
            }}
            >
                <h1 style = {albumHeaderStyle()}
                >{album.place}</h1>
            <img 
            src = {album.image}
            style = {albumImageStyle()}
            onClick = {() => setOpenSearch(true)}
            >
            </img>
            <h3>{album.title}</h3>
            <div style = {{ 
                color: '#00000050'
            }}>{album.artist}</div>
            </div>
            ) : (
                <div 
                id = {albumId}
                style = {{
                    transform: `matrix(${album.matrix})`
                }}
                >
                    <h1 style = {albumHeaderStyle()}>{album.place}</h1>
                    <img 
                    src = "https://media.istockphoto.com/id/187722063/photo/funny-man-with-watermelon-helmet-and-goggles.jpg?s=612x612&w=0&k=20&c=gRAm8vtLqdOU8a-mJVt6m_Wnv8pLpa3TBh2vRQP4208="
                    style = {albumImageStyle()}
                    onClick = {() => setOpenSearch(true)}
                    />
                      <AlbumSearchComponent 
                      specifcAlbum = {album} 
                      albumsArray = {albumsArray}
                      setAlbumsArray = {setAlbumsArray}
                      openSearch = {openSearch} 
                      setOpenSearch = {setOpenSearch} 
                      />
                </div>
            )
}