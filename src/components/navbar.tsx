import React, { useState } from "react";
import { Menu, Item, AllITem, Render } from "./style";
import { Link } from "react-router-dom";
import Banner from "./banner"

const ListarBI=[


    {
        id:1,
        bi:"872348734AL0890",
        nome:"Agencia de Talatona",
        data:"12-09-1999",
        morada:"Luanda/Viana-Zona Verde",
        filiacao:"José Kamussumbo",
        mae:"Felicia Kamussumbo",
        dataAgedamento:"12-09-2023"


    },
    {
        id:2,
        bi:"9839850734AL0890",
        nome:"Agencia de Viana",
        data:"12-09-1999",
        morada:"Luanda/Viana-Estalagem",
        filiacao:"Virgílio Mendes",
        mae:"Alda António",
        dataAgedamento:"12-09-2023"

    },
    {
        id:3,
        bi:"764685494AL0890",
        nome:"Agencia de Cacuaco",
        data:"12-09-1999",
        morada:"Luanda/Rangel-Dona Mália",
        filiacao:"José da Silva",
        mae:"Silva José",
        dataAgedamento:"12-09-2023"

    },
    {
        id:4,
        bi: "345743324AL0890",
        nome:"Agencia da Mutamba",
        data:"12-09-1999",
        morada:"Luanda/Sambizanga",
        filiacao:"José André",
        mae:"Manuela André",
        dataAgedamento:"12-09-2023"

    }, 
     {
        id:5,
        bi:  "74356746AL0890",
        nome:"Agencia do Cazenga",
        data:"12-09-1999",
        morada:"Luanda/Viana-Estalagem",
        filiacao:"José Vence",
        mae:"Josefina Vence",
        dataAgedamento:"12-09-2023"


    },
]

function NavBar(){
    const [busca, setBusca] = useState('')
    const filtroBI = ListarBI.filter((bilhete)=> bilhete.nome.includes(busca.toLocaleLowerCase()))

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
            Solicitar
                
            </button>

            <input
             type="text"
              placeholder="Pesquisar Agente certificado" 
              value={busca}
              onChange={(ev)=> setBusca(ev.target.value)} 
            
              />
            
           {busca? <Render>
            {filtroBI.map((item)=>(
                <div>

                <li key={item.id}>Nome: {item.nome}</li>
                <p>Local: {item.morada}</p>
                
                </div>
            ))}
        </Render>:null}
        </AllITem>
           
        </Menu>
        <Banner title="AngDocument" text="Tecnologia ao seu dispo, faça solicitação de documento Online"/>

                
        </>
    )
}

export default NavBar;