import { Button, Form, InputGroup, Tabs, Tab } from "react-bootstrap";

export default function Dependente(){
    return(
        <>
            <Form className="row">
                
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
                </Form>
                    <hr/>
                    <Button size="lg" className="botao-cadcli">Cadastrar!</Button>
            </Form>
        </>
    )
}