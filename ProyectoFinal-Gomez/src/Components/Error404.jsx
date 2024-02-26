import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col text-center">
                    <p className="display-1"><iframe src="https://giphy.com/embed/sE1fbQPozKg3q5I2W2" width="300" height="300" frameBorder="0" className="giphy-embed" allowFullScreen></iframe><p></p></p>
                    <h1 className="display-3">Error 404</h1>
                    <h3 className="display-5">La página que estás buscando no existe!</h3>
                    <Link to={"/"} className="btn btnHover my-5">Volver a la página principal</Link>
                </div>
            </div>
        </div>
    )
}

export default Error404;