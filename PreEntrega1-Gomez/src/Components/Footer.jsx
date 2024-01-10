import BrandName from "./BrandName";
import LogoWhatsapp from "../media/whatsapp.svg"
import LogoFacebook from "../media/facebook.svg"
import LogoInstagram from "../media/instagram.svg"
import LogoCoder from "../media/logos_coderhouse.png"

const Footer = () => {
    return(
        <div className="container-fluid footer">
            <div className="row">
                <div className="col-md-3">
                    <BrandName />
                    <p className="lead parrafo">Desde 1995</p>
                </div>
                <div className="col-md-3 offset-6">
                    <a className="m-2" href="https://www.facebook.com/" target="blank"><img src={LogoFacebook} alt="Logo de Facebook" /></a>
                    <a className="m-2" href="https://web.whatsapp.com/" target="blank"><img src={LogoWhatsapp} alt="Logo de Whatsapp" /></a>
                    <a className="m-2" href="https://www.instagram.com/" target="blank"><img src={LogoInstagram} alt="Logo de Instagram" /></a>
                </div>
            </div>
        <div className="container text-center">
            <div className="row align-items-end">
                <div className="col align-items-end">
                    <p className="lead fw-bolder">Proyecto educativo de CoderHouse-Iván Gómez</p>
                    <img className="LogoCoder" src= {LogoCoder} alt="Logo de CoderHouse" />
                </div>
            </div>
        </div>
        </div>
    )
}

export default Footer;