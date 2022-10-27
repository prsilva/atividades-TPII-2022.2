import Form from 'react-bootstrap/Form';

function InputLogin() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formPlaintextPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password"/>
      </Form.Group>
    </Form>
  );
}

export default InputLogin;