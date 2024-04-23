import React from "react";
import styled from "styled-components";
import Button from "./button"


export const ElementRight= styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: start;
padding: 12px;
p{
    line-height: 30px;
    width: 300px;
    text-align: justify;
    margin: 30px 0 0 0;
}
Button{
    margin: 20px 0 0 0 ;
}
`
export const Element =styled.div`
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
margin-top: 70px;
`;
export const Image= styled.img`
width:500px;
padding: 12px;
margin: 0 20px;

`
export const Title =styled.p`

font-size: 25px;

`

function RightLeft(){
    return(
        <Element>
        <ElementRight>
        <Title>SOBRE ANGDOC</Title>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Velit cupiditate maxime beatae voluptatem modi veniam rerum 
                 minima quam. Non quo suscipit eaque rem soluta ipsam nisi iure impedit ipsum alias?
            </p>
        <Button title="Ver Agencias"/>
        </ElementRight>

        <Image src="./img/R.jpg" alt="Ocorreu um erro com a imagem" />

       
        </Element>
    )
}
export default RightLeft;