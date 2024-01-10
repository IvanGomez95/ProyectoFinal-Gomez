import Carrito from "../media/cart.svg"

function alertaCarrito (){
    Swal.fire({
        title: "Carrito en proceso! Aún no se pueden agregar productos",
        showclassName: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideclassName: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
}
const CartWidget = () => {
    return(

        <button onClick={alertaCarrito} type="button" className="transparente btn btn-light position-relative">
            <img src={Carrito} alt="Carrito de compras" width={40} />
            <span className="position-absolute top-0 start-1 translate-middle badge rounded-pill bg-danger mt-3">2</span>
        </button>

    )
}

export default CartWidget;