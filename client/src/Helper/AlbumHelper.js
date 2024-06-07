const FOCUSED_MATRIX = '1,0,0,1,0,0'
export class AlbumClass {
    constructor (title,artist,image,place,backgroundColor,matrix) {
        this.title = title
        this.place = place
        this.artist = artist
        this.image = image
        this.backgroundColor = backgroundColor
        this.matrix = ''
    }
}

export function createAlbumCardArray (numberOfAlbums,isMobile) {
    let albumCardArray = [];
    let tx = -(window.innerWidth/100)*2;
    for (let i = 1; i <= numberOfAlbums; i++) {
        let newAlbum = new AlbumClass();
        newAlbum.place = i
        if (i == 1) {
            newAlbum.matrix = FOCUSED_MATRIX
        } else {
            newAlbum.matrix = isMobile ? `1,0,0,1,0,0` :`1,0,0,1,${tx},0`
            tx = tx-400;
        }
        albumCardArray.push(newAlbum)
    }
    return albumCardArray
}

export const handleButtonClick = (albumsArray,currAlbumNumber) => {
    for (let i = 0; i < albumsArray.length; i++) {
        const matrixValues = albumsArray[i].matrix.split(',')
        let place = albumsArray[i].place
        switch(true || false) {
            case place > currAlbumNumber+1:
                albumsArray[i].matrix = `1,0,0,1,15,0`
                break;
            case place < currAlbumNumber+1: 
                albumsArray[i].matrix = `1,0,0,1,-15,0`
                break;
            case place == currAlbumNumber+1:
                albumsArray[i].matrix = `1,0,0,1,0,0`
                break;
            default:
                throw new Error('Invalid input')
        }
    }
    return albumsArray
}

export const handleScroll = (scrollPosition,albumsArray,isMobile) => {
    const scroll = isMobile ? document.getElementById(`album-container`).offsetHeight/2 :document.getElementById(`album-container`).offsetWidth/2
    return Math.round(scrollPosition/scroll)+1
}