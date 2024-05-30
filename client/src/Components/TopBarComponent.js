import SwitchBarComponent from "./SwitchBarComponent";

export default function TopBarComponent({theme,setTheme}) {
    return (
        <div>
            <div> Fake Apple Logo Here</div>
            <div>... Music (Prop 100) Best Albums</div>
            <img src = ""></img>
            <SwitchBarComponent setTheme = {setTheme}/>
        </div>
    )
}