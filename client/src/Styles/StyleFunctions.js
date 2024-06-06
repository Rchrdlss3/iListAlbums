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
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        transition: '2s',
        marginLeft: '40%'
    }
}

export const albumImageStyle = () => {
    return {
        width: (window.innerHeight/2),
        height: (window.innerHeight/2),
        fontSize: '96px',
        borderRadius: '10px',
        transform: 'skew(0,15deg)',
        margin: '25px',
        boxShadow: '10px 10px 10px 5px rgba(0,0,0,0.3)'
    }
}

export const buttonStyle = (theme) => {
    return {
        background : 'none',
        border: 'none',
        color: '#fff',
        margin: '25px',
    }
}

export const dialogBackgroundStyle = () => {
    return {
        width: '100vw',
        height: '100vh',
        position: 'fixed',

        backgroundColor: 'rgba(0,0,0,0.7)'
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
        border: `1px solid #fff`,
        borderRadius: '10px',
        backgroundColor: 'rgba(0,0,0)'
    }
}

export const albumResultsStyle = () => {
    return {
        height: '300px',
        overflowY: 'scroll'
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