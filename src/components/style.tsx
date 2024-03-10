import styled from "styled-components";

export const Menu = styled.div`
display:flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
background-color: #2b8bde;
height: 50px;

img{
  width: 300px;
  height: 40px;
  margin-left: 60px;
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

   &:hover{
  
  background: none ;
  border:  1px solid  #fdfeff;
  color: #fdfeff;

}
}
input{
    padding: 5px;
    border: none;
    border-radius: 10px;

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
export const BackgroundBanner= styled.div`
    background-image:linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url("https://th.bing.com/th/id/OIF.O0h2AlfnybTmKpX77QKReg?rs=1&pid=ImgDetMain") ;
    background-position: center;
    background-size: cover;
    height: 82vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #ffffff;

    h1{
        font-size: 70px;
        padding: 12px 0;
    }
    p{
        font-size: 20px;
    }
`
    
export const Render= styled.div<{}>`
position: absolute;
top: 50px;
right: 0px;
display: flex;
flex-direction: column;
align-items: start;
justify-content: start;
width: 500px;
height: 800px;
color: aliceblue;
background:linear-gradient(rgba(33, 68, 224, 0.75), rgba(40, 107, 231, 0.75)) ;
div{
    font-size: 20px;
    padding: 30px;
    border-bottom: 1px solid #c0c0c075;
    width: 400px;
  list-style: none;
  span{
    font-size: 16px;
    font-weight: 600;
    line-height: 25px;
}
  p{
    font-size: 12px;
    margin: 5px 0;
  }
}

`