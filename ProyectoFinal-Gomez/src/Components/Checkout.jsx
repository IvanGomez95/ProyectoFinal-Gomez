import { useContext, useState } from "react";
import { CartContext } from "./Context/CartContext";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import BrandName from "./BrandName";

const Checkout = () => {
    const [nombre, setNombre] = useState();
    const [email, setEmail] = useState();
    const [telefono, setTelefono] = useState();
    const [orderId, setOrderId] = useState();
    const {cart, purchaseClear, TotalProductsSum} = useContext(CartContext);

    const generarOrden = () => {
        if (nombre.length === 0) {
            return false;
        }

        if (email.length === 0) {
            return false;
        }

        if (telefono.length === 0) {
            return false;
        }

        const buyer = {name:nombre, email:email, phone:telefono};
        const items = cart.map(item => ({id:item.idx, title:item.title, price:item.price}));
        const fecha = new Date();
        const date = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}`;
        const total = TotalProductsSum();
        const order = {buyer:buyer, items:items, date:date, total:total};

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(resultado => {
            purchaseClear();
            setOrderId(resultado.id);
            Toastify({

                text: "Estamos procesando su compra",
                duration: 3000,
                style: {
                    background: "linear-gradient(to right, Purple, Purple)",
                  },
                
                }).showToast();
        });
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col text-center">
                    <h1>Resumen de compra</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre y apellido</label>
                            <input type="text" className="form-control black_border" required onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control black_border" required onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label ">Teléfono</label>
                            <input type="text" className="form-control black_border" required onInput={(e) => {setTelefono(e.target.value)}} />
                        </div>
                        <button type="button" className="btn btnCounter offset-4" onClick={generarOrden}>Comprar</button>
                    </form>
                </div>
                <div className="col-md-8 text-center">
                    <table className="table">
                        <tbody>
                            {cart.map(product =>
                                <tr key={product.id}>
                                    <td className="align-middle"><img src={product.image} alt={product.title} width={80} /></td>
                                    <td className="text-start align-middle">{product.title}</td>
                                    <td className="text-start align-middle">${product.price}</td>
                                    <td className="text-start align-middle">{product.quantity}</td>
                                    <td className="text-start align-middle">${product.quantity * product.price}</td>
                                </tr>
                            )}
                            <tr>
                                <td className="text-center align-middle" colSpan={3}>&nbsp;</td>
                                <td className="text-center align-middle fw-bold">Total:</td>
                                <td className="text-start align-middle fw-bold">${TotalProductsSum()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row my-5">
                <div className="col text-center">
                    {orderId ? <div class="alert orderColor p-5 text-center" role="alert">
                        <p className="display-1"> <BrandName /></p>
                        <h1>Gracias por tu compra!</h1>
                        <p>Tu ID de Compra es: <b>{orderId}</b></p>
                    </div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;