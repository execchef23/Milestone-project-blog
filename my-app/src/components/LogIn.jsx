// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';


const LogIn = () => {

    return(
    
    

        <div>
            <div className="Form">
                <h2>Log In</h2>
                <form action="/login" method="post">

                    <label>Username: </label>
                    <input 
                        id="username"
                        name="username"
                        required
                    />
                    <label>Password: </label>
                    <input 
                        id="password"
                        name="password"
                        required
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
