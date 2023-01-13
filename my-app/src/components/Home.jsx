import NavBar from './NavBar';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';

const Home = () => {
  const [name, SetName] = useState("");
  const [password, SetPassword] = useState("");
  const Testing  = (event) => {
    event.preventDefault();
    alert(`The name you entered was: ${name}, and your password is: ${password}`);
  }
    return(
// Form to signup
      <>
  <NavBar />
      <h1>Sign up here!</h1>
      <form onSubmit={Testing}>
        <fieldset>
          <label>Set your username here! 
            <input 
              type="name" 
              value={name} 
              onChange={(e) => SetName(e.target.value)} 
            />
          </label>
          <label>Set your Password here!
            <input
              type="password"
              value={password}
              onChange={(e) => SetPassword(e.target.value)}
            />
          </label>
          <input type="submit" />
        </fieldset>
      </form>
      </>
    );
};

export default Home;