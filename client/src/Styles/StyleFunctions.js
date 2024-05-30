import { NoToneMapping } from "three"

export const mainStyle = (theme) => {
    return {
        backgroundColor: theme.background,
        color: theme.font.regular,
        width: '100vw',
        height: '100vh',
        padding: 0,
        margin: 0,
        justifyContent: 'center',
        textAlign: 'center'
    }
}

export const albumLayoutStyle = () => {
    return {
        width: '100%',
        height: '100vh',
        display: 'flex',

        alignItem: 'center',
        overflowX: 'scroll'
    }
}

export const albumImageStyle = () => {
    return {
        width: '300px',
        height: '300px',
        fontSize: '96px',
        borderRadius: '10px',
        transform: 'skew(0,15deg)',
        margin: '25px'
    }
}

export const buttonStyle = (theme) => {
    return {
        background : 'none',
        border: 'none',
        color: '#fff',
        margin: '25px'
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