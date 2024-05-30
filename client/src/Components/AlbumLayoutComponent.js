import React from 'react'
import { albumLayoutStyle, buttonStyle } from '../Styles/StyleFunctions'
import AlbumComponent from './AlbumComponent'
import AlbumSearchComponent from './AlbumSearchComponent';
import { useState } from 'react';
import { useEffect } from 'react';
import { AlbumClass } from '../Helper/AlbumHelper';

export default function AlbumLayoutComponent({theme,customRange}) {
    let albumCardArray = [];


    for (let i = 1; i <=customRange;i++) {
        albumCardArray.push(
            <AlbumComponent place = {i} />
        )
    }
  return (
      <div>
        <div style = {albumLayoutStyle()}>
        <button style = {buttonStyle()}>←</button>
        {albumCardArray}
        <button style = {buttonStyle()}>→</button>
    </div>
    </div>
  )
}
