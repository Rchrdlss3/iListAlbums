import { darkTheme, lightTheme } from "./Themes"

export const mainStyle = (theme,isMobile) => {
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
export const albumContainer = (isMobile) => {
    let tilt = isMobile ? 0 : 90
    return {
        overflowX: isMobile ? 'hidden' : 'scroll',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        width: '80%',
        margin: 'auto',
        overflowY: isMobile ? 'scroll':'hidden',
        height: 'inherit',
        width: '100%',
        maskImage: `linear-gradient(${tilt}deg, transparent , #000 15%, #000 85%, transparent 100%)`
      }
}
export const albumRowStyle = (idx,theme) => {
    let oddRow = theme.secondary;
    return {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: idx%2 == 0 ? null : oddRow,
        margin: '5px',
        padding: '5px',
        borderRadius: '5px',
        color: theme.font.regular
    }
}

export const albumImageStyle = (emptied,theme,isMobile) => {
    let size = isMobile ? 4 : 2
    return {
        width: (window.innerHeight/size),
        height: (window.innerHeight/size),
        fontSize: '96px',
        borderRadius: '10px',
        margin: '25px',
        boxShadow: '10px 10px 10px 5px rgba(0,0,0,0.3)',
        transition: '2s',
        backgroundColor: emptied ? 'black' : null,
        opacity: '80%'
    }
}

export const buttonStyle = (isLeft,theme) => {
    return {
            background : theme.transparent,
            border: 'none',
            borderRadius: '50%',
            height: '25px', 
            color: theme.tertiary,
            margin: '25px',
            right: isLeft? '90%' : null,
            left: isLeft ? null : '90%'
        }
}

export const dialogBackgroundStyle = (theme) => {
    return {
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.8)'
    }
}

export const inputAlbumStyle = (theme,isMobile) => {
    return {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        width: isMobile ? '100vw' : '70vh',
        height: '70vh',
        justifyContent: 'center',
        borderRadius: '10px',
        backgroundColor: theme.background,
        marginTop: '5%'
    }
}
export const albumSearchButton = (theme) => {
    return {
        width: '100px',
        height: '30px',
        textAlign: 'center',
        justifyContent: 'center',
        color: theme.font.regular,
        backgroundColor: `${theme.primary}80`,
        border: 'none',
        borderRadius: '5px'
    }
}
export const inputSearchField = (theme,width) => {
    return {
        backgroundColor: `${theme.primary}50`,
        color: theme.font.regular,
        border: 'none',
        padding: '7px',
        borderRadius: '5px',
        width: width? width : '50%',
        margin: 'auto',
        marginBottom: '0',
        marginTop: '0'
    }
}

export const selectStyle = (theme) => {
    return {
        margin : '5px',
        background: theme.transparent,
        border: 'none',
        borderRadius: '5px',
        color: `${theme.font.regular}50`
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

export const checkHexCode = (hexCode) => {
    // If the brightness value is greater than or equal to 128, the color is considered light.
    let values = hexCode.split('')

    for (let i = 1; i <= values.length; i+=2) {
        let val = parseInt(values[i],16) * parseInt(values[i+1],16)
        if (val>=128) {
            return lightTheme
        }
    }
    return darkTheme
}