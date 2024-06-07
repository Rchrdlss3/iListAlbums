import React, { useEffect } from 'react'
import { albumContainer, albumLayoutStyle } from '../Styles/StyleFunctions'
import AlbumComponent from './AlbumComponent'
import { useState } from 'react';
import ButtonComponent from './ButtonComponent';
import AlbumSearchComponent from './AlbumSearchComponent';
import { AlbumClass, handleScroll,handleButtonClick } from '../Helper/AlbumHelper';
import { checkHexCode } from '../Styles/StyleFunctions';

export default function AlbumLayoutComponent({theme,setTheme,albumsArray,setAlbumsArray}) {
    const [currentAlbumNumber,setCurrentAlbumNumber] = useState(1);
    const [openSearch,setOpenSearch] = useState(false);
    const [specifiedAlbum,setSpecifiedAlbum] = useState(new AlbumClass())

    useEffect(() => {
      let mainLayout = document.getElementById('main-layout')
      if (albumsArray[currentAlbumNumber-1]) {
        let backgroundColor = albumsArray[currentAlbumNumber-1].backgroundColor;
        const currAlbum = document.getElementById(`album-${currentAlbumNumber}`);
        currAlbum.style.transform = `matrix(1,0,0,1,0,0) skew (0,0)`
        mainLayout.style.backgroundColor = backgroundColor ? backgroundColor : theme.background
        mainLayout.style.transition = 'linear background-color 1s'
        backgroundColor ? setTheme(checkHexCode(backgroundColor)) : null
      } else {
        mainLayout.style.backgroundColor = theme.background
      }
    },[currentAlbumNumber,albumsArray])

  return (
      <div id = 'album-layout'>
        <ButtonComponent 
        currentAlbumNumber = {currentAlbumNumber} 
        setCurrentAlbumNumber = {setCurrentAlbumNumber} 
        albumsArray = {albumsArray} 
        setAlbumsArray = {setAlbumsArray}
        theme = {theme}
        />
        <div className = "album-layout-wrapper"  style = {albumLayoutStyle()}>
          <div id = 'album-container' 
                onScrollCapture= {
                  () => {
                      const scrollPosition = document.getElementById('album-container').scrollLeft
                      setCurrentAlbumNumber(handleScroll(scrollPosition,albumsArray))
                      setAlbumsArray(handleButtonClick(albumsArray,currentAlbumNumber))
                }}
          style = {albumContainer()}>
        {albumsArray.length > 0 ?  albumsArray.map((album,idx) => {
          let albumId = `album-${idx+1}`;
            return <AlbumComponent 
            index = {idx}
            album = {album}
            albumId = {albumId} 
            place = {idx+1} 
            currAlbum = {currentAlbumNumber == idx+1} 
            theme = {theme}
            albumsArray = {albumsArray}
            setAlbumsArray = {setAlbumsArray}
            setOpenSearch = {setOpenSearch}
            setSpecifiedAlbum = {setSpecifiedAlbum}
            />
        })  : null}
        </div>
    </div>
    <AlbumSearchComponent 
      specifcAlbum = {specifiedAlbum} 
      albumsArray = {albumsArray}
      setAlbumsArray = {setAlbumsArray}
      openSearch = {openSearch} 
      setOpenSearch = {setOpenSearch} 
  />
    </div>
  )}
