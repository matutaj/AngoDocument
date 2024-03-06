import {BrowserRouter, Route, Routes} from "react-router-dom"
import App from "./App";

function MyRoutes(){
 return(
    <BrowserRouter>
    <Routes>
    <Route path="/"  Component={App}/>
    </Routes>
    </BrowserRouter>
 )
}
export default MyRoutes;