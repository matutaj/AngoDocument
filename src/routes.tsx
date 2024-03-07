import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/main/index"

function PageRoute(){
 return(
    <BrowserRouter>
    <Routes>
       <Route path="/"    Component={Home}/>
    </Routes>
    </BrowserRouter>
 )
}
export default PageRoute;