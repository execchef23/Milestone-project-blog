import logo from "../assets/images/kitty-error.jpg";

const Error404 = () => {

    return (
        <>
            <div className="error404">
                <main>
                <h1>404: PAGE NOT FOUND</h1>
                <h3>Oops, sorry, we can't find this page!</h3>
                <hr />
                <div>
                    <img className="error-pic" src={logo} alt="Cat Image" />
                    <div>
                        Photo by <a href="AUTHOR_LINK">Daria Shatova</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                    </div>
                    </div>
                </main>
            </div>
        </>
    )
} 

export default Error404;