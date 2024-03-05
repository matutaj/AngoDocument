import React, { useState } from "react";
import { Menu, Item } from "./style";
import { Link } from "react-router-dom";
function NavBar(){
    const [algo, setalgo] = useState([])
    return(
        <>
        <Menu>

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
        </Menu>
        </>
    )
}

export default NavBar;