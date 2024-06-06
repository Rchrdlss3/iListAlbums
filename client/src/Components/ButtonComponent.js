import { handleScroll } from "../Helper/AlbumHelper";
export default function ButtonComponent({currentAlbumNumber,setCurrentAlbumNumber,albumsArray,setAlbumsArray}) {
    return (
        <div style = {{
            width: '100%',
            right: 0,
            flexDirection: 'row',
            bottom: '80%',
            top: 'auto',
            transform: 'translateY(-50%)',
            // position: 'absolute'
          }}>
          
        <button style = {{
          background : 'none',
          border: 'none',
          color: '#fff',
          margin: '25px',
          right: '90%',
        //   position: 'absolute'
      }} onClick = {() => {
              document.getElementById(`album-${currentAlbumNumber}`).scrollIntoView()
              currentAlbumNumber > 1 ? setCurrentAlbumNumber(currentAlbumNumber-1) : null;
              setAlbumsArray(handleScroll(albumsArray,currentAlbumNumber))
              }}>←</button>
        
        <button style = {{
          background : 'none',
          border: 'none',
          color: '#fff',
          margin: '25px',
          left: '90%',
        //   position: 'absolute'
      }} 
        onClick = {() => {
            currentAlbumNumber <= albumsArray.length -1 ? setCurrentAlbumNumber(currentAlbumNumber+1) : null;
            setAlbumsArray(handleScroll(albumsArray,currentAlbumNumber))
            console.log(albumsArray)
          }}>→</button>
          </div>
    )
}