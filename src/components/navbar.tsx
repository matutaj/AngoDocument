import React, { useState } from "react";
import { Menu, Item, AllITem, Render } from "./style";
import { Link } from "react-router-dom";
import Banner from "./banner"

const ListarBI=[


    {
        id:1,
        bi:"872348734AL0890",
        nome:"Ângelo Kamussumbo",
        data:"12-09-1999",
        morada:"Luanda/Viana-Zona Verde",
        filiacao:"José Kamussumbo",
        mae:"Felicia Kamussumbo",
        dataAgedamento:"12-09-2023"


    },
    {
        id:2,
        bi:"9839850734AL0890",
        nome:"Matuta Jorge",
        data:"12-09-1999",
        morada:"Luanda/Viana-Estalagem",
        filiacao:"Virgílio Mendes",
        mae:"Alda António",
        dataAgedamento:"12-09-2023"

    },
    {
        id:3,
        bi:"764685494AL0890",
        nome:"Bruno da Silva",
        data:"12-09-1999",
        morada:"Luanda/Rangel-Dona Mália",
        filiacao:"José da Silva",
        mae:"Silva José",
        dataAgedamento:"12-09-2023"

    },
    {
        id:4,
        bi: "345743324AL0890",
        nome:"Emanuel André",
        data:"12-09-1999",
        morada:"Luanda/Sambizanga",
        filiacao:"José André",
        mae:"Manuela André",
        dataAgedamento:"12-09-2023"

    }, 
     {
        id:5,
        bi:  "74356746AL0890",
        nome:"Sadraque Vence",
        data:"12-09-1999",
        morada:"Luanda/Viana-Estalagem",
        filiacao:"José Vence",
        mae:"Josefina Vence",
        dataAgedamento:"12-09-2023"


    },
]

function NavBar(){
    const [busca, setBusca] = useState('')
    const filtroBI = ListarBI.filter((bilhete)=> bilhete.bi.includes(busca.toLocaleLowerCase()))

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
            Agendar
                
            </button>

            <input
             type="text"
              placeholder="Pesquisar Pelo BI" 
              value={busca}
              onChange={(ev)=> setBusca(ev.target.value)} 
            
              />
            
           {busca? <Render>
            {filtroBI.map((item)=>(
                <div>

                <li key={item.id}>BI: {item.bi}</li>
                <span>Nome:{item.nome}</span>
                <p>Morada: {item.morada}</p>
                <p>Data do Agendamento:{item.dataAgedamento}</p>
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