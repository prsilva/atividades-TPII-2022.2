import { Route, BrowserRouter, Routes as Switch } from "react-router-dom";
import RegHosp from "../pages/cadAcom/registroHosp";
import CadCliente from "../pages/cadCliente/cadastroCliente";
import ListaCliente from "../pages/listaCliente/listaCliente";
import Login from "../pages/login/login";


const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" element={<Login/>}/>
                <Route path="/clientes" element={<ListaCliente/>}/>
                <Route path="/cadastro-cliente" element={<CadCliente/>}/>
                <Route path="/registro-hospedagem" element={<RegHosp/>}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes