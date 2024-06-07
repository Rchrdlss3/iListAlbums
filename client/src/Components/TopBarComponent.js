import { useEffect, useState } from "react";
import { checkTheme } from "../Helper/ThemeHelper";
import { darkTheme,lightTheme } from "../Styles/Themes";
import { DARK_LOGO_IMAGE, LIGHT_LOGO_IMAGE } from "../Helper/ThemeHelper";

export default function TopBarComponent({theme,setTheme,customRange}) {
    const [logoImage,setLogoImage] = useState("");
    useEffect(() => {
        theme == lightTheme ? setLogoImage(DARK_LOGO_IMAGE) : setLogoImage(LIGHT_LOGO_IMAGE)
    },[theme])

    return (
        <div style = {{
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '5px',
            gap: 5
            }}>
            <img 
            style = {{
                width: '25px',
                height: '25px',
                verticalAlign: 'middle'
            }}
            src = {logoImage}></img>
            {customRange > 0 ? <div> {`iList My Top ${customRange}`} Albums</div> : null}
            <img src = ""></img>
        </div>
    )
}