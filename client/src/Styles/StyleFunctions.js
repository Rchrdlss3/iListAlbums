export const mainStyle = (theme) => {
    return {
        backgroundColor: theme.background,
        color: theme.font.regular,
        width: '100vw',
        height: '100vh',
        padding: 0,
        margin: 0,
        justifyContent: 'center',
        textAlign: 'center',
        overflow: 'hidden'
    }
}

export const albumLayoutStyle = () => {
    return {
        width: '100vw',
        height: '100vh',
        margin: 0,
        padding: 0,
        scrollSnapAlign: 'center'
    }
}
export const albumContainer = () => {
    return {
        overflowX: 'scroll',
        display: 'flex',
        flexDirection: 'row',
        width: '80%',
        margin: 'auto',
        overflowY: 'hidden',
        height: 'inherit',
        maskImage: 'linear-gradient(90deg, transparent , #000 15%, #000 85%, transparent 100%)'
      }
}
export const albumRowStyle = (idx) => {
    let oddRow = 'rgba(100,100,100,0.5)';
    return {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: idx%2 == 0 ? null : oddRow,
        margin: '5px',
        padding: '5px',
        borderRadius: '5px',
        color: '#ccc'
    }
}

export const albumImageStyle = (emptied) => {
    return {
        width: (window.innerHeight/2),
        height: (window.innerHeight/2),
        fontSize: '96px',
        borderRadius: '10px',
        margin: '25px',
        boxShadow: '10px 10px 10px 5px rgba(0,0,0,0.3)',
        transition: '2s',
        backgroundColor: emptied ? 'black' : null,
        opacity: '80%'
    }
}

export const buttonStyle = (isLeft) => {
    return {
            background : 'rgba(255,255,255,0.2)',
            border: 'none',
            borderRadius: '50%',
            height: '25px', 
            color: '#fff',
            margin: '25px',
            right: isLeft? '90%' : null,
            left: isLeft ? null : '90%'
        }
}

export const dialogBackgroundStyle = () => {
    return {
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        backgroundColor: 'rgba(0,0,0,0.8)'
    }
}

export const inputAlbumStyle = () => {
    return {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        width: '500px',
        height: '700px',
        justifyContent: 'center',
        borderRadius: '10px',
        backgroundColor: 'rgba(0,0,0)',
        marginTop: '5%'
    }
}
export const albumSearchButton = () => {
    return {
        width: '100px',
        height: '30px',
        textAlign: 'center',
        justifyContent: 'center',
        color: '#ccc',
        backgroundColor: 'rgba(200,200,200,0.1)',
        border: 'none',
        borderRadius: '5px'
    }
}
export const inputSearchField = () => {
    return {
        backgroundColor: 'rgba(255,255,255,0.1)',
        color: '#ccc',
        border: 'none',
        padding: '5px',
        borderRadius: '5px',
        width: '50%',
        margin: 'auto',
        marginBottom: '0',
        marginTop: '0'
    }
}
export const albumResultsStyle = () => {
    return {
        height: '300px',
        overflowY: 'scroll',
        scrollbarColor: 'rgba(240,240,240,0.5) rgba(0,0,0,0)'
    }
}

export const albumHeaderStyle = () => {
    return {
        background: 'linear-gradient(to bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%)',
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: 'transparent',
        fontSize: '92px',
        margin: 0
    }
}