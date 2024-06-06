import React, { createRef, useEffect } from 'react'
import { albumLayoutStyle, buttonStyle } from '../Styles/StyleFunctions'
import AlbumComponent from './AlbumComponent'
import { useState } from 'react';
import { AlbumClass } from '../Helper/AlbumHelper';
import ButtonComponent from './ButtonComponent';


export default function AlbumLayoutComponent({theme,albumsArray,setAlbumsArray}) {
    const [currentAlbumNumber,setCurrentAlbumNumber] = useState(1);

    useEffect(() => {
      let mainLayout = document.getElementById('main-layout')
      if (albumsArray[currentAlbumNumber-1]) {
        // const currAlbum = document.getElementById(`album-${currentAlbumNumber}`);
        // currAlbum.style.transform = `matrix(1,0,0,1,0,0)`
        mainLayout.style.backgroundColor = albumsArray[currentAlbumNumber-1].backgroundColor
        mainLayout.style.transition = 'linear background-color 1s'
      } else {
        mainLayout.style.backgroundColor = theme.background
      }
    },[currentAlbumNumber]
    )
  return (
      <div>
        <ButtonComponent 
        currentAlbumNumber = {currentAlbumNumber} 
        setCurrentAlbumNumber = {setCurrentAlbumNumber} 
        albumsArray = {albumsArray} 
        setAlbumsArray = {setAlbumsArray}
        />
        <div className = "album-layout-wrapper"  style = {albumLayoutStyle()}>
        {albumsArray.length > 0 ?  albumsArray.map((album,idx) => {
          let albumId = `album-${idx+1}`;
            return <AlbumComponent 
            index = {idx}
            album = {album}
            albumId = {albumId} 
            place = {idx+1} 
            currAlbum = {currentAlbumNumber} 
            theme = {theme}
            albumsArray = {albumsArray}
            setAlbumsArray = {setAlbumsArray}
            />
        })  : null}
    </div>
    </div>
  )
}
