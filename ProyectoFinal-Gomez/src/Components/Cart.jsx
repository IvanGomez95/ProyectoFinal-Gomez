import { useContext } from "react";
import { CartContext } from "./Context/CartContext";
import { Link } from "react-router-dom";
import trash from "../assets/trash3.svg";

const Cart = () => {
    const {cart, removeItem, clear,TotalProductsQuantity , TotalProductsSum} = useContext(CartContext);

    if (TotalProductsQuantity() == 0) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <p className="display-1"></p>
                        <div className="alert alert-danger display-5 fs-1 animate__animated animate__pulse animate__infinite infinite" role="alert">¡No se encontraron productos en el carrito!</div>
                        <Link to={"/"} className="btn btnHover my-5">Volver a la página principal</Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
                <div className="row">
                    <div className="col text-center m-3 p-3">
                        <h1>Productos Seleccionados</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td className="text-end align-middle pe-5" colSpan = {6}><button className="btn btnCounter" onClick={clear}>Vaciar el Carrito</button></td>
                                </tr>
                                {cart.map(product =>
                                    <tr key={product.id}>
                                        <td><img src={product.image} alt={product.title} width={80} /></td>
                                        <td className="align-middle">{product.title}</td>
                                        <td className="align-middle">${product.price}</td>
                                        <td className="align-middle">{product.quantity}</td>
                                        <td className="align-middle">${product.quantity * product.price}</td>
                                        <td className="align-middle"><a href="#" onClick={() => {removeItem(product.id)}}><img src={trash} alt="Eliminar Producto" title="Eliminar Producto"  /></a></td>
                                    </tr>
                                )}
                                <tr>
                                    <td colSpan={4}><b>Suma Total</b></td>
                                    <td> <b>${TotalProductsSum()}</b></td>
                                    <td><Link to = {"/checkout"} className="btn btnCounter align-middle">Finalizar Compra</Link></td>
                                    
                                </tr>
                    
                            </tbody>
                        </table>
                    </div>
                </div>
        </div>
            
    )
}

export default Cart;