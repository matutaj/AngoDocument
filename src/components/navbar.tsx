import React, { useState } from "react";
import { Menu, Item, AllITem } from "./style";
import { Link } from "react-router-dom";

function NavBar(){

   
    return(
        <>
        <Menu>
            <img src="https://th.bing.com/th/id/OIP.ebBPNI9s-oZiXztIlK6PyAAAAA?rs=1&pid=ImgDetMain" alt="" />
        <AllITem>
        <Item>
                <Link to="/">Home</Link>
                
            </Item>
            
            <Item>
            <Link to="/">Agências</Link>
                
            </Item>
            
            <Item>
            <Link to="/">Documentos</Link>
                
            </Item>

            <Item>
            <Link to="/">Cadastro</Link>
                
            </Item>

            <Item>
            <Link to="/">Login</Link>
                
            </Item>

        </AllITem>
           
        </Menu>
        </>
    )
}

export default NavBar;