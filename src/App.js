import './App.css';
import { useState } from "react";
import TopBarComponent from "./Components/TopBarComponent";
import { checkTheme } from "./Helper/ThemeHelper";
import { mainStyle } from "./Styles/StyleFunctions";
import { verifyAccessToken } from './Helper/SpotifyHelper';
import PreliminaryInputComponent from './Components/PreliminaryInputComponent';
import AlbumLayoutComponent from './Components/AlbumLayoutComponent';
import {UAParser} from 'ua-parser-js';

export default function App() {
  const [theme,setTheme] = useState(checkTheme());
  const [customRange,setCustomRange] = useState(0);
  const [albumsArray,setAlbumsArray] = useState([]);
  let device = new UAParser(window.navigator.userAgent).getDevice()
  const [isMobile,setIsMobile] = useState(device.type == 'mobile');

  verifyAccessToken();

  return (
    <div 
    id = "main-layout"
    style = {mainStyle(theme,isMobile)}>
      <TopBarComponent theme = {theme} setTheme = {setTheme} customRange = {customRange}/>
      <PreliminaryInputComponent theme = {theme} isMobille = {isMobile} customRange = {customRange} setCustomRange = {setCustomRange} setAlbumsArray = {setAlbumsArray}/>
      <AlbumLayoutComponent theme = {theme} setTheme = {setTheme} isMobile = {isMobile} customRange = {customRange} albumsArray = {albumsArray}  setAlbumsArray = {setAlbumsArray}/>
    </div>
  )
}