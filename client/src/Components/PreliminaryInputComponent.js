import { useState } from "react";
import { AlbumClass } from "../Helper/AlbumHelper";
import { createAlbumCardArray } from "../Helper/AlbumHelper";


export default function PreliminaryInputComponent({theme,customRange,setCustomRange,setAlbumsArray}) {
    const [inputText,setInputText] = useState(0);
    const [display,showDisplay] = useState(customRange<=0)

    const numberOptions = () => {
        let numberList = [];
        for (let i = 0; i<= 100; i+=25) {
            numberList.push(
                <option>{i}</option>
            )
        }
        return numberList;
    }
    return (
        <div style = {{
            display: display ? 'flex': 'none',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <h1>Enter any number from 0-100</h1>
            <input key = "number-input" type = "number" onChange = {(e) => setInputText(e.target.value)} > 
            </input>
            <select onChange = {(e) => setInputText(e.target.value)}>
                {numberOptions()}
            </select>
            <button 
            style = {{
                background: 'none',
                border: 'none',
                margin: '5px',
                color: theme.font.regular
            }} 
            onClick = {(e) => {
                setCustomRange(inputText)
                showDisplay(inputText<=0)
                setAlbumsArray(createAlbumCardArray(inputText))
                }}>Click to Begin</button>
        </div>
    )
}