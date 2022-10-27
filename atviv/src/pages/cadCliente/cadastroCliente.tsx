import { Button, Form, InputGroup } from "react-bootstrap";
import NavBar from "../../components/navbar";

import "./cadcli.css"

export default function CadCliente(){
    return(
        <>
            <NavBar/>
            <div className="cadastro">
                <h1>Cadastro de Clientes</h1>

                <hr/>

                <Form className="row">
                    <Form.Group className="mb-3 col-6">
                        <Form.Label>Nome completo</Form.Label>
                        <Form.Control type="text" className="input-cadcli"/>
                    </Form.Group>
                    <Form.Group className="mb-3 col-6">
                        <Form.Label>Nome social</Form.Label>
                        <Form.Control type="text" className="input-cadcli"/>
                    </Form.Group>

                    <h3>Documentos</h3>
                    <Form.Group className="mb-3 col-2">
                        <Form.Label>Tipo de documento</Form.Label>
                        <Form.Select className="input-cadcli">
                            <option>Tipo de documento</option>
                            <option>CPF</option>
                            <option>RG</option>
                            <option>Passaporte</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3 col-5">
                        <Form.Label>Data de expedição</Form.Label>
                        <Form.Control type="text" className="input-cadcli"/>
                    </Form.Group>
                    <Form.Group className="mb-3 col-5">
                        <Form.Label>Número</Form.Label>
                        <Form.Control type="text" className="input-cadcli"/>
                    </Form.Group>

                    <h3>Telefone</h3>
                    <Form.Group className="mb-3 col-2">
                        <Form.Label>DDD</Form.Label>
                        <Form.Control type="text" className="input-cadcli"/>
                    </Form.Group>
                    <Form.Group className="mb-3 col-5">
                        <Form.Label>Número do telefone</Form.Label>
                        <Form.Control type="text" className="input-cadcli"/>
                    </Form.Group>

                    <Form.Group className="mb-3 col-5">
                        <Form.Label>Tipo de cliente</Form.Label>
                        <Form.Select className="input-cadcli">
                            <option>Modalidade de cliente</option>
                            <option>Titular</option>
                            <option>Dependente</option>
                        </Form.Select>
                    </Form.Group>
                </Form>

                <hr/>

                <Form className="row">
                <h3>Endereço</h3> 
                    <Form.Group className="mb-3 col-6">
                        <Form.Label>Rua</Form.Label>
                        <Form.Control type="text" className="input-cadcli"/>
                    </Form.Group>
                    <Form.Group className="mb-3 col-6">
                        <Form.Label>Bairro</Form.Label>
                        <Form.Control type="text" className="input-cadcli"/>
                    </Form.Group>
                    <Form.Group className="mb-3 col-4">
                        <Form.Label>País</Form.Label>
                        <Form.Control type="text" className="input-cadcli"/>
                    </Form.Group>
                    <Form.Group className="mb-3 col-4">
                        <Form.Label>Estado</Form.Label>
                        <Form.Control type="text" className="input-cadcli"/>
                    </Form.Group>
                    <Form.Group className="mb-3 col-4">
                        <Form.Label>Cidade</Form.Label>
                        <Form.Control type="text" className="input-cadcli"/>
                    </Form.Group>
                </Form>

                <hr/>

                <Button size="lg" className="botao-cadcli">Cadastrar!</Button>
            </div>
        </>
    )
}