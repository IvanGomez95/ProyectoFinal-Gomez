import { useContext } from "react";
import Carrito from "../media/cart.svg"
import { CartContext } from "./Context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const {TotalProductsQuantity} = useContext (CartContext);
    
  return(

        TotalProductsQuantity() > 0 ? <Link to = {"/cart"} className="transparente btn btn-light position-relative">
            <img src={Carrito} alt="Carrito de compras" width={40} />
            <span className="position-absolute top-0 start-1 translate-middle badge rounded-pill bg-danger mt-3">{TotalProductsQuantity()}</span>
        </Link> : ""

    )
}

export default CartWidget;