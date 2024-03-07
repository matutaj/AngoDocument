import styled from "styled-components";

export const Menu = styled.div`
display:flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
background-color: #2b8bde;
height: 50px;

img{
  
}
`
export const AllITem =styled.div`
display:flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100%;
button{
    padding: 4px;
    font-size: 15px;
    margin: 0 20px;
    border-radius: 10px;
    width: 90px;
    border: none;
    color:#155e9d;
}
button:hover{
  
    background: none ;
    border:  1px solid  #fdfeff;
    color: #fdfeff;

}
`;
export const Item = styled.li`

a{
    text-decoration: none;
    color: white;
}
list-style: none;
font-size: 15px;
margin: 0 30px;
`