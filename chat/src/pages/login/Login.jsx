import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls"
import { AuthContext } from "../../context/AuthContext";
import {CircularProgress} from "@material-ui/core";

export default function Login() {
    const email = useRef();
    const password = useRef();
    const { user, isFetching, dispatch} = useContext(AuthContext);

    const handleClick = (e)=>{
        e.preventDefault();
        loginCall({email:email.current.value, password:password.current.value}, dispatch);
    };

    console.log(user)
    return (
        <div className="login">
            <div className="LoginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">React Chat</h3>
                    <span className="loginDesc">Conectate</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Email" type="email" required className="loginInput" ref={email} />
                        <input placeholder="Pasword" type="password" required minLength="6" className="loginInput" ref={password} />
                        <button className="loginButton" type="submit" disabled={isFetching}>
                            {isFetching ? <CircularProgress color="white" size="20px"/> : "Log In"}
                        </button>
                        <span className="loginForgot"> Contrasena olvidada?</span>
                        <button className="loginRegisterButton">
                            {isFetching ? (
                                <CircularProgress color="White" size="20px" />
                            ) : (
                                "Create a New Acount"
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}