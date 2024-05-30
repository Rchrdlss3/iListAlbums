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

  verifyAccessToken();

  return (
    <div style = {mainStyle(theme)}>
      <TopBarComponent theme = {theme} setTheme = {setTheme}/>
      <PreliminaryInputComponent theme = {theme} customRange = {customRange} setCustomRange = {setCustomRange}/>
      <AlbumLayoutComponent theme = {theme} customRange = {customRange}/>
    </div>
  )
}