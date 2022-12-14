import React from "react";
import { SvgXml } from "react-native-svg";

const examplesvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 105">
    <g fill="#aabbcc" stroke="#aabbcc" stroke-linejoin="round" stroke-linecap="round">
      <path d="M14,40v24M81,40v24M38,68v24M57,68v24M28,42v31h39v-31z" stroke-width="12"/>
      <path d="M32,5l5,10M64,5l-6,10 " stroke-width="2"/>
    </g>
    <path d="M22,35h51v10h-51zM22,33c0-31,51-31,51,0" fill="#aabbcc"/>
    <g fill="#FFF">
      <circle cx="36" cy="22" r="2"/>
      <circle cx="59" cy="22" r="2"/>
    </g>
    </svg>`;


const ExampleSVG = () => {
    
    
    return <SvgXml xml={examplesvg} width='70%' height='70%' />
}

export { ExampleSVG }