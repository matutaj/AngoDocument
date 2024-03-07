import React from "react";
import styled from "styled-components";

export const ButtonStyle = styled.button`
 
    padding: 4px;
    font-size: 15px;
    border-radius: 10px;
    width: 150px;
    height: 40px;
    font-weight: 600;
    border: none;
    color:#ffffff;
    background:#155e9d ;

&:hover{
    background: none ;
    border:  1px solid  #fdfeff;
    color: #fdfeff;
}

`
interface propsButton{
    title:string
}

function Button({title}:propsButton){
     return(
        <ButtonStyle>
            {title}
        </ButtonStyle>
     )
}
export default Button;