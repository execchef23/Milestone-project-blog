import NavBar from './NavBar';
import { useState } from 'react';
// import ReactDOM from 'react-dom/client';

const SignUp = () => {
    const [name, SetName] = useState("");
    const [password, SetPassword] = useState("");
    const Testing  = (event) => {
      event.preventDefault();
      alert(`The name you entered was: ${name}, and your password is: ${password}`);
    }
    return(
        <div>
            <NavBar />
            <div className="Form">
                <h2>Sign Up</h2>
                <form onSubmit={Testing}>
                    <label>Username: </label>
                    <input 
                        id="name"
                        value={name}
                        onChange={(e) => SetName(e.target.value)}
                        required
                    />
                    <label>Password: </label>
                    <input 
                        id="password"
                        value={password}
                        onChange={(e) => SetPassword(e.target.value)}
                        required
                    />
                    <input 
                        onClick={SignUp}
                        className="btn"
                        value="Sign Up"
                    />
                </form>
            </div>
        </div>
    );
};

export default SignUp;