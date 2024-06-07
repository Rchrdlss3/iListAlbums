import { React, useState, Component } from "react";
import { albumHeaderStyle, albumImageStyle } from "../Styles/StyleFunctions";


export default function AlbumComponent ({theme,album,albumId,currAlbum,albumsArray,setOpenSearch,setSpecifiedAlbum}) {
    return album.title ? 
     (   
            <div 
            id = {albumId}
            style = {{
                transform: currAlbum ? 'translateX(50%)' : `matrix(${album.matrix}) translateX(50%) skew(0,15deg)`,
                width: '50%',
                flexShrink : 0,
                transition: ' 2s'
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
                color: `${theme.font.regular}50`,
                color: '#00000050'
            }}>{album.artist}</div>
            </div>
            ) : (
                <div 
                id = {albumId}
                style = {{
                    transform: currAlbum ? 'translateX(50%)' : `matrix(${album.matrix}) translateX(50%) skew(0,15deg)`,
                    width: '50%',
                    flexShrink : 0,
                    transition: ' 2s'
                }}
                >
                    <h1 style = {albumHeaderStyle()}>{album.place}</h1>
                    <img 
                    src = "https://rchrdlss3.github.io/iListAlbumsAPI/lightSearchLogo.png"
                    style = {albumImageStyle(true)}
                    onClick = {() => {
                        setSpecifiedAlbum(album)
                        setOpenSearch(true)
                    }}
                    />
                    <p>Click on the icon to begin your search</p>
                </div>
            )
}