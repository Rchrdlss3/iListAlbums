import { useState } from "react";
import { createAlbumCardArray } from "../Helper/AlbumHelper";
import { validatePreliminaryValue } from "../Helper/HelperFunctions";
import {buttonStyle, inputSearchField, selectStyle} from "../Styles/StyleFunctions";


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
            <input 
            key = "number-input" 
            type = "number" 
            style = {inputSearchField('25%',true)}
            onChange = {(e) => {
                const value = e.target.value
                setInputText(value)
                }} > 
            </input>
            <select 
            style = {selectStyle()}
            onChange = {(e) => {
                const value = e.target.value
                setInputText(value)
                }}>
                {numberOptions()}
            </select>
            <button 
            style = {{
                background: 'none',
                border: '1px solid #00000050',
                borderRadius: '5px',
                margin: '5px',
                height: '25px', 
            }} 
            onClick = {(e) => {
                if(validatePreliminaryValue(inputText) == true) {
                    setCustomRange(inputText)
                    showDisplay(inputText<=0)
                    setAlbumsArray(createAlbumCardArray(inputText))
                } else {
                    console.log('Invalid input value')
                }
                }}>Click to Begin</button>
        </div>
    )
}