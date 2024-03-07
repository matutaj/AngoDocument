import React, { useState } from "react";
import { Menu, Item, AllITem } from "./style";
import { Link } from "react-router-dom";
import Banner from "./banner"

function NavBar(){
    const logo ="https://th.bing.com/th/id/OIP.ebBPNI9s-oZiXztIlK6PyAAAAA?rs=1&pid=ImgDetMain"
   
    return(
        <>
        <Menu>
            <img src={logo} alt="" />
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

            <button>
            Cadastro
                
            </button>

            <button>
            Login
                
            </button>

        </AllITem>
           
        </Menu>
        <Banner title="AngDocument" text="Tecnologia ao seu dispo, faça solicitação de documento Online"/>
        </>
    )
}

export default NavBar;