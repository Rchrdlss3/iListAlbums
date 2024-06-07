
export default function TopBarComponent({theme,setTheme,customRange}) {
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
            src = 'https://rchrdlss3.github.io/InnovativeRichLogo/darkLogo.png'></img>
            {customRange > 0 ? <div> {`iList My Top ${customRange}`} Albums</div> : null}
            <img src = ""></img>
        </div>
    )
}