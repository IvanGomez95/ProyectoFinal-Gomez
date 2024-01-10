import Vox30 from "../media/vox30.jpg"
import BossKatana from "../media/boss-katana.jpg"
import FenderChampion from "../media/fender-champion.jpg"
const Amplificadores = () => {
    return(
        <div className="container my-5">
            <div className="row">
                <h2 className="text-center p-3">AMPLIFICADORES</h2>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className="card text-center">
                        <img src= {Vox30} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">VOX AC 30</h5>
                            <p className="card-text">Amplificador VOX AC 30 Watts RMS</p>
                            <p className="card-text">Origen: Taiwan</p>
                            <a href="#" className="btn btnHover">Comprar</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-center">
                        <img src= {BossKatana} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Boss Katana MK2</h5>
                            <p className="card-text">Amplificador Boss Katana digital de 100W</p>
                            <p className="card-text">Origen: Alemania</p>
                            <a href="#" className="btn btnHover">Comprar</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-center">
                        <img src= {FenderChampion} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Fender Champion</h5>
                            <p className="card-text">Amplificador Fender Champion 100W.</p>
                            <p className="card-text">Origen: Mexico</p>
                            <a href="#" className="btn btnHover">Comprar</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Amplificadores;