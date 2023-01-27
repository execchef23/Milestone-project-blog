import { useState, useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUser";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const { setCurrentUser } = useContext(CurrentUserContext);

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:3001/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    const data = await response.json();
    if (response.status === 200) {
      const { user, token } = data;
      localStorage.setItem("token", token);
      setCurrentUser(user);
      console.log(data.token)
      navigate("/");
    }
  }

  return (
    <div>
      <div className="Form">
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
          <label>Username: </label>
          <input
            id="username"
            name="username"
            required
            value={credentials.username}
            onChange={(e) =>
              setCredentials({
                ...credentials,
                username: e.target.value,
              })
            }
          />
          <label>Password: </label>
          <input
            id="password"
            name="password"
            required
            type="password"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({
                ...credentials,
                password: e.target.value,
              })
            }
          />
          <input className="btn btn-primary" type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default LogIn;
