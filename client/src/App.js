import './App.css';
import { useState } from "react";
import TopBarComponent from "./Components/TopBarComponent";
import { checkTheme } from "./Helper/ThemeHelper";
import { mainStyle } from "./Styles/StyleFunctions";
import { verifyAccessToken } from './Helper/SpotifyHelper';
import PreliminaryInputComponent from './Components/PreliminaryInputComponent';
import AlbumLayoutComponent from './Components/AlbumLayoutComponent';

export default function App() {
  const [theme,setTheme] = useState(checkTheme());
  const [customRange,setCustomRange] = useState(0);
  const [albumsArray,setAlbumsArray] = useState([]);
  
  verifyAccessToken();
  return (
    <div 
    id = "main-layout"
    style = {mainStyle(theme)}>
      <TopBarComponent theme = {theme} setTheme = {setTheme} customRange = {customRange}/>
      <PreliminaryInputComponent theme = {theme} customRange = {customRange} setCustomRange = {setCustomRange} setAlbumsArray = {setAlbumsArray}/>
      <AlbumLayoutComponent theme = {theme} setTheme = {setTheme} customRange = {customRange} albumsArray = {albumsArray}  setAlbumsArray = {setAlbumsArray}/>
    </div>
  )
}