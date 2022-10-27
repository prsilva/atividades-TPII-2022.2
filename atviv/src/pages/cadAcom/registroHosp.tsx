import { Button, Form, Table } from "react-bootstrap";
import NavBar from "../../components/navbar";

import "./regHosp.css"

export default function RegHosp(){
    return(
        <>
            <NavBar/>
            <div className="cadastro row">
                <div className="col-5 hosp">
                    <h1>Registro de hospedagem</h1>
                    <hr/>
                    <Form className="row">
                        <Form.Group className="mb-3 col-12">
                            <Form.Label>Hospedagem</Form.Label>
                            <Form.Select className="input-cadcli">
                                <option>Nomenclatura da hospedagem</option>
                                <option>Casal simples</option>
                                <option>Família simples</option>
                                <option>Família Mais</option>
                                <option>Família Super</option>
                                <option>Solteiro Simples</option>
                                <option>Solteiro Mais</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3 col-12">
                            <Form.Label>Cliente</Form.Label>
                            <Form.Control type="text" className="input-cadcli"/>
                        </Form.Group>
                    </Form>
                    <hr/>
                    <Button size="lg" className="botao-cadcli">Registrar</Button>
                </div>
                

                <div className="col-7">
                    <Table className="tabela-hosp">
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Cama solteiro</th>
                                <th>Cama casal</th>
                                <th>Suíte</th>
                                <th>Climatização</th>
                                <th>Garagem</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Casal Simples</td>
                                <td>0</td>
                                <td>1</td>
                                <td>1</td>
                                <td>Sim</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>Família simples</td>
                                <td>2</td>
                                <td>1</td>
                                <td>1</td>
                                <td>Sim</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>Família Mais</td>
                                <td>5</td>
                                <td>1</td>
                                <td>2</td>
                                <td>Sim</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>Família Super</td>
                                <td>6</td>
                                <td>2</td>
                                <td>3</td>
                                <td>Sim</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>Solteiro Simples</td>
                                <td>1</td>
                                <td>0</td>
                                <td>1</td>
                                <td>Sim</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Solteiro Mais</td>
                                <td>0</td>
                                <td>1</td>
                                <td>1</td>
                                <td>Sim</td>
                                <td>1</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    )
}