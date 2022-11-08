import { Button, Table } from "react-bootstrap";
import NavBar from "../../components/navbar";

export default function ListaCliente(){
    return(
        <>
            <NavBar/>

            <div className="cadastro">
                <h1>Lista de clientes</h1>
                <div>
                    <Table>
                        <thead>
                            <tr>
                            <th>Tipo</th>
                            <th>Nome</th>
                            <th>Nome social</th>
                            <th>Telefone</th>
                            <th></th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Titular</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td><Button variant="outline-success" className="outline">Editar</Button></td>
                                <td><Button variant="outline-danger" className="outline">Excluir</Button></td>
                            </tr>
                            <tr>
                                <td>Dependente</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td><Button variant="outline-success" className="outline">Editar</Button></td>
                                <td><Button variant="outline-danger" className="outline">Excluir</Button></td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                
            </div>
        </>
    )
}