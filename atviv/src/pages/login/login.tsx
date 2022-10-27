import { Button } from "react-bootstrap"
import InputLogin from "../../components/inputLogin"
import "./login.css"

export default function Login(){
    return(
        <>
            <div className="body"></div>
                <div className="login-box">
                    <h1 className="login-title">Log In</h1>
                    <InputLogin/>
                    <Button className="login-botao" href="/registro-hospedagem">Log in</Button>
                </div>
        </>
    )
}