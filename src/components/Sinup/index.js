import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { register } from "../config/firebase"
import "./sinup.css"

function Register() {

    const navigate = useNavigate()
    const [Fullname, setFullname] = useState()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [age, setage] = useState()


    const sinup = async () => {
        try {
            await register({ Fullname, email, password, age })
            navigate("/login")
        } catch (e) {
            alert(e.message)
        }
    }



    return <div id="parent">
        <div id="signin">

            <div className="hading1">Sign in</div>

            <div className="inputDiv">
                <input onChange={(e) => setFullname(e.target.value)} placeholder="Full Name" />
                <input onChange={(e) => setemail(e.target.value)} placeholder="Email" type="email" />
                <input onChange={(e) => setpassword(e.target.value)} placeholder="password" type="password" />
                <input onChange={(e) => setage(e.target.value)} placeholder="Age" />
                <button onClick={sinup} id="sin-btn">Sign in</button>
            </div>

            <p className="suggestion1">Already have an account?
                <span onClick={() => navigate("/login")}>click here</span>
            </p>

        </div>
    </div>

}



export default Register