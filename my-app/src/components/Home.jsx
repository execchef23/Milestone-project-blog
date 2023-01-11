// import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// const Home = () => {
//     return(
//       <>
//        {/* <Form>
//         Inside the form
//       </Form>  */}
//       <nav className="main-nav">
//       <div className="nav-container">
//         <div className="nav-logo">
//           <Link to="/">
//             Home
//           </Link>
//         </div>
//         <div className="nav-links">
//           {/* <Link to="/" className="home nav-link">
//             home
//           </Link>
//           <Link to="/new" className="new-post nav-link">
//             add movie
//           </Link>
//           <Link to="/signup" className="sign-up nav-link">
//             sign up */}
//           {/* </Link>  */}
//         </div>
//       </div>
//     </nav>

//       </>
//     );
// };

// export default Home;

import NavBar from './NavBar';

const Home = () => {
    return (
        <>
          <NavBar />
          
        </>
    )
};

export default Home;