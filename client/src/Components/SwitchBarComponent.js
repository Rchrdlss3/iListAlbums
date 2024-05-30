import { switchTheme } from "../Helper/ThemeHelper"

export default function SwitchBarComponent({setTheme}){
    return (
        <input 
        type = "checkbox" 
        onChange = {(e) => setTheme(switchTheme(e.target.checked))}
        > 
        </input>
    )
}