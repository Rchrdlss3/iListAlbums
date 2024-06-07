import { useState } from "react";
import { handleScroll } from "../Helper/AlbumHelper";
import { buttonStyle } from "../Styles/StyleFunctions";

export default function ButtonComponent({currentAlbumNumber,setCurrentAlbumNumber,albumsArray,setAlbumsArray}) {
    let [widthScroll,setWidthScroll] = useState(0);

    return (
        <div style = {{
            width: '100%',
            flexDirection: 'row',
            top: 'auto',
          }}>  
        <button style = {buttonStyle(true)} onClick = {() => {
              if (currentAlbumNumber > 1) {
                setCurrentAlbumNumber(currentAlbumNumber-1)
                setAlbumsArray(handleScroll(albumsArray,currentAlbumNumber))
                let newScroll = widthScroll - (document.getElementById(`album-container`).offsetWidth/2);
                setWidthScroll(newScroll)
                document.getElementById(`album-container`).scrollTo(newScroll,0)
              }}}>←</button>
        
        <button style = {buttonStyle(false)} 
        onClick = {() => {
            if (currentAlbumNumber <= albumsArray.length -1) {
                setCurrentAlbumNumber(currentAlbumNumber+1)
                setAlbumsArray(handleScroll(albumsArray,currentAlbumNumber))
                let newScroll = widthScroll + (document.getElementById(`album-container`).offsetWidth/2);
                setWidthScroll(newScroll)
                document.getElementById(`album-container`).scrollTo(newScroll,0)
            }}}>→</button>
          </div>
    )
}