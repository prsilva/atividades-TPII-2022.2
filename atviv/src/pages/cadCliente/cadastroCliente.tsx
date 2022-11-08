import { Button, Form, InputGroup, Tabs, Tab } from "react-bootstrap";
import Dependente from "../../components/dependente";
import NavBar from "../../components/navbar";
import Titular from "../../components/titular";

import "./cadcli.css"

export default function CadCliente(){
    return(
        <>
            <NavBar/>
            <div className="cadastro">
                <h1>Cadastro de Clientes</h1>

                <hr/>

                <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="home" title="Titular">
                        <Titular/>
                    </Tab>
                    <Tab eventKey="profile" title="Dependente">
                        <Dependente/>
                    </Tab>
                </Tabs>


                
            </div>
        </>
    )
}