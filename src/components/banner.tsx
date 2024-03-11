
import React from "react";
import {BackgroundBanner} from "./style"
import Button from "./button"


interface IDataBanner{
title: string,
text:string

}

function Banner( {title, text}:IDataBanner){

        return(
        <BackgroundBanner>
            <h1>{title}</h1>
            <p>{text}</p>
            <br/>
            <Button title="Solicitar Agora!" />
        </BackgroundBanner>
    )
}
export default Banner;