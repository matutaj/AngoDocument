
import React, {useRef, useEffect} from "react";
import {BackgroundBanner} from "./style"
import Button from "./button"
import styled from "styled-components";


export const SlideImg = styled.div`
   display: flex;
    transition: 0.7s ease-in-out;
    transform: translateX(0);

  
  img {
    margin-top: -100px;
    width: 1250px;
    height: 720px;
  }
`


/*let contador = 0;

function slider() {
  contador++;

  if (contador > imagens.length - 1) {
    contador = 0;
  }

  box.style.transform = `translateX(${-contador * 1250}px)`;
}

setInterval(slider, 2000);
*/

interface IDataBanner{
title: string,
text:string
}

function Banner( {title, text}:IDataBanner){
    const box = useRef(null);
    const imagens = useRef(null);

        return(
        <BackgroundBanner>
            <SlideImg ref={box}>
            <img src="./img/OIF.jpg" alt="Upsi! erro inesperado" />
            <img src="./img/OIF.jpg" alt="Upsi! erro inesperado" />
            <img src="./img/OIF.jpg" alt="Upsi! erro inesperado" />
            </SlideImg>
            <h1>{title}</h1>
            <p>{text}</p>
            <br/>
            <Button title="Solicitar Agora!" />
        </BackgroundBanner>
    )
}
export default Banner;