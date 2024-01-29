import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../config/firebase";
import "./login.css"

function Login() {
    const navigate = useNavigate()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()

    const sinin = async () => {
        try {
            await login({ email, password })

            if(!email , !password){
                navigate("/Register")
            }
            navigate("/")
        } catch (e) {
        alert(e.message)
        }
    }





    
    return (<div id="parent">


        <div id="login">
            <div className="heading2">Login</div>
            <div className="inputDiv">
                <input onChange={(e) => setemail(e.target.value)} placeholder="Email" />
                <input onChange={(e) => setpassword(e.target.value)} placeholder="password" type="password"/>

                <button onClick={sinin} id="log-btn">login</button>
            </div>
            <p className="suggestion2">Don't have an account.<span onClick={() => navigate("/Register")}>click here</span></p>
        </div>

    </div>);
}


export default Login