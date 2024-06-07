import { useState } from "react";
import { handleButtonClick } from "../Helper/AlbumHelper";
import { buttonStyle } from "../Styles/StyleFunctions";

export default function ButtonComponent({currentAlbumNumber,setCurrentAlbumNumber,albumsArray,setAlbumsArray,theme}) {
    let [widthScroll,setWidthScroll] = useState(0);

    return (
        <div style = {{
            width: '100%',
            flexDirection: 'row',
            top: 'auto',
          }}>  
        <button style = {buttonStyle(true,theme)} 
                onClick = {() => {
              if (currentAlbumNumber > 1) {
                setCurrentAlbumNumber(currentAlbumNumber-1)
                setAlbumsArray(handleButtonClick(albumsArray,currentAlbumNumber))
                let newScroll = widthScroll - (document.getElementById(`album-container`).offsetWidth/2);
                setWidthScroll(newScroll)
                document.getElementById(`album-container`).scrollTo(newScroll,0)
              }}}>←</button>
        
        <button style = {buttonStyle(false,theme)} 
        onClick = {() => {
            if (currentAlbumNumber <= albumsArray.length -1) {
                setCurrentAlbumNumber(currentAlbumNumber+1)
                setAlbumsArray(handleButtonClick(albumsArray,currentAlbumNumber))
                let newScroll = widthScroll + (document.getElementById(`album-container`).offsetWidth/2);
                setWidthScroll(newScroll)
                document.getElementById(`album-container`).scrollTo(newScroll,0)
            }}}>→</button>
          </div>
    )
}