// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import { useState, useContext} from "react";
import { CurrentUserContext } from "../contexts/CurrentUser";
import { useNavigate } from "react-router-dom";


const LogIn = () => {
    const navigate = useNavigate();

    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    })

    const {setCurrentUser} = useContext(CurrentUserContext)

    async function handleSubmit (e){
        e.preventDefault()
        const response = await fetch ("http://localhost:3001/auth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        const data = await response.json()
        if (response.status===200){
            const {user, token}=data
            localStorage.setItem("token", token)
            setCurrentUser(user)
            navigate('/')

        }
    }

    return(
    
        <div>
            <div className="Form">
                <h2>Log In</h2>
                <form action="/login" method="get">

                    <label>Username: </label>
                    <input 
                        id="username"
                        name="username"
                        required
                        onChange={e=> setCredentials({
                            ...credentials,
                            username: e.target.value
                        })}
                    />
                    <label>Password: </label>
                    <input 
                        id="password"
                        name="password"
                        required
                        type="password"
                        onChange={e=> setCredentials({
                            ...credentials,
                            password: e.target.value
                        })}
                    />
                    <input 
                        onClick={LogIn}
                        className="btn"
                        value="Log In"
                    />
                </form>
            </div>
        </div>
    );
};

export default LogIn;
