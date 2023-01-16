import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const NavBar = () => {
  return (
    <nav className="main-nav">
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">
            <img src={logo} alt="Blog Central logo" />
          </Link>
        </div>

        <div className="nav-links">
          <Link to="/" className="home nav-link">
            Home
          </Link>
          <Link to="/SignUp" className="sign-up nav-link">
            Sign Up
          </Link>
          <Link to="/login" className="log-in nav-link">
            Log In
          </Link>
          <Link to="/new" className="new-blog nav-link">
            New Blog
          </Link>
        </div>
        {/* <div>
          <form action="/action_page.php">
            <input type="text" placeholder="Username" name="username"></input>
            <input type="text" placeholder="Password" name="psw"></input>
            <button type="submit">Login</button>
          </form>
        </div> */}
      </div>
    </nav>
  );
};

export default NavBar;
