import FenderJaguar from "../media/fender-jaguar.jpg"
import FenderTelecaster from "../media/fender-telecaster.webp"
import Epiphone from "../media/epiphone-g400.webp"
const Guitarras = () => {
    return(

        <div className="container my-5">
            <div className="row">
            <h2 className="text-center p-3">GUITARRAS</h2>
            </div>
            <div className="row mt-2">
                <div className="col-md-4">
                    <div className="card text-center">
                        <img src= {FenderJaguar} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Fender Jaguar</h5>
                            <p className="card-text">Fender Jaguar Sunburn con tremolo.</p>
                            <p className="card-text">Origen: Estados Unidos</p>
                            <a href="#" className="btn btnHover">Comprar</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-center">
                        <img src= {FenderTelecaster} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Fender Telecaster</h5>
                            <p className="card-text">Fender Telecaster Maple.</p>
                            <p className="card-text">Origen: Mexico</p>
                            <a href="#" className="btn btnHover">Comprar</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-center">
                        <img src= {Epiphone} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Epiphone SG G-400 Cream</h5>
                            <p className="card-text">Epiphone G-400 con acabado Cream.</p>
                            <p className="card-text">Origen: Mexico</p>
                            <a href="#" className="btn btnHover">Comprar</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Guitarras;