import Ampli from "../media/ampli.avif"
import Piano from "../media/piano.avif"
import Bajo from "../media/bass.avif"
const Carousel = () => {
    return(
        <div className="container-fluid p-5">
            <div className="row">
                <div className="col-md-12">
                    <div id="carouselExampleCaptions" className="carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active c-item">
                                <img src= {Bajo} className="d-block w-100 c-img" alt="Imagen de bajo"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className="display-4 fw-bolder text-capitalize">¿Buscando un bajo?</h5>
                                <p className="text-uppercase fs-4">SLAP!</p>
                            </div>
                            </div>
                            <div className="carousel-item c-item">
                                <img src= {Ampli} className="d-block w-100 c-img" alt="Imagen de amplificador Laney"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className="display-4 fw-bolder text-capitalize">Amplify this!</h5>
                                <p className="fs-4">Las mejores ofertas en amplificación</p>
                            </div>
                            </div>
                            <div className="carousel-item c-item">
                                <img src= {Piano} className="d-block w-100 c-img" alt="Imagen de persona tocando piano"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className="display-4 fw-bolder text-capitalize">¿Pianos?</h5>
                                <p className="fs-4">Hasta 6 cuotas sin interés</p>
                            </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel;