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

export function createAlbumCardArray (numberOfAlbums) {
    console.log(window.innerHeight,window.innerWidth)
    let albumCardArray = [];
    let tx = -(window.innerWidth/100)*2;
    for (let i = 1; i <= numberOfAlbums; i++) {
        let newAlbum = new AlbumClass();
        newAlbum.place = i
        if (i == 1) {
            newAlbum.matrix = FOCUSED_MATRIX
        } else {
            newAlbum.matrix = `0.38,0,0,0.38,${tx},0`
            tx = tx-400;
        }
        albumCardArray.push(newAlbum)
    }
    return albumCardArray
}

export const handleScroll = (albumsArray,currAlbumNumber) => {
    for (let i = 0; i < albumsArray.length; i++) {
        const matrixValues = albumsArray[i].matrix.split(',')
        let a = matrixValues[0]; let b = matrixValues[1]; let c = matrixValues[2];
        let d = parseInt(matrixValues[3]); let tx = parseInt(matrixValues[4]); let ty = parseInt(matrixValues[5]);
        let place = albumsArray[i].place
        switch(true || false) {
            case place > currAlbumNumber+1:
                console.log(`${place} is greater than ${currAlbumNumber} so we add tx and subtract ty`)
                albumsArray[i].matrix = `0.38,0,0,0.38,${tx+400},0`
                break;
            case place < currAlbumNumber+1: 
            console.log(`${place} is less than ${currAlbumNumber} so we're going to subtract 400 tx and add 100 ty`)
                albumsArray[i].matrix = `0.38,0,0,0.38,${tx-600},0`
                break;
            case place == currAlbumNumber+1:
                albumsArray[i].matrix = `1,0,0,1,${tx-600},0`
                break;
            default:
                throw new Error('Invalid input')
        }
    }
    return albumsArray
}