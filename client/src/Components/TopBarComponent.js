import { useEffect, useState } from "react";
import {lightTheme } from "../Styles/Themes";
import { DARK_LOGO_IMAGE, LIGHT_LOGO_IMAGE } from "../Helper/ThemeHelper";

export default function TopBarComponent({theme,setTheme,customRange}) {
    const [logoImage,setLogoImage] = useState("");
    useEffect(() => {
        theme == lightTheme ? setLogoImage(DARK_LOGO_IMAGE) : setLogoImage(LIGHT_LOGO_IMAGE)
    },[theme])

    return (
        <div style = {{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            alignItems: 'center',
            gap: 5
            }}>
            <img 
            style = {{
                width: '25px',
                height: '25px',
                verticalAlign: 'middle',
            }}
            alt = "Innovative Rich Logo"
            src = {logoImage}/> 
  
            {customRange > 0 ? <h2 style = {{
                width: '100%',
                margin: '0px',
                padding: '0px',
                transition: '2s'
                }}> {`iList My Top ${customRange}`} Albums</h2> : null}
        </div>
    )
}