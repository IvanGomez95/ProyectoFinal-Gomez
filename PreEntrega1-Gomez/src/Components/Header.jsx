import BrandName from "./BrandName";
import CartWidget from "./CartWidget";
import NavBar from "./NavBar";

const Header = () => {
    return(
        <div className="container-fluid my-5">
            <div className="row">
                <div className="col-md-5 d-flex align-items-center animate__animated animate__fadeInDown">
                    <NavBar/>
                </div>
                <div className="col md-5 d-flex align-items-end fs-5">
                    <BrandName />
                </div>

                <div className="col md-2 d-flex justify-content-end me-4 animate__animated animate__fadeInDown">
                    <CartWidget/>
                </div>
            </div> 
        </div>
    )
}

export default Header;