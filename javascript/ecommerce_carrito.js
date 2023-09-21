let carrito = [];


function agregarCarrito(e){

    let hijo = e.target;
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode;

    let nombreProducto = padre.querySelector("h5").innerText;

    let precioProducto = padre.querySelector("span").innerText;

    let imgProducto = abuelo.querySelector("img").src;


    let producto = {
        nombre: nombreProducto,
        precio: precioProducto,
        img:imgProducto,
        cantidad:1
    };

    carrito.push(producto);
    

    let carritoJSON = JSON.stringify (carrito);
    localStorage.setItem ("Carrito", carritoJSON);

    Toastify({
        text: `Producto añadido al carrito: ${nombreProducto}`,
        className: "info",
        gravity: "bottom",
        style: {
          background: "linear-gradient(to right, #0000CD, #191970)",
        }
    }).showToast();

    mostrarCarrito();
}

function mostrarCarrito(){

    let tabla = document.getElementById("tbody");

    tabla.innerHTML = "";

    for( let producto of carrito ){
   
        let fila = document.createElement("tr");
        fila.innerHTML = `<td><img src="${producto.img}"></td>
                          <td><p>${producto.nombre}</p></td>
                          <td>${producto.cantidad}</td>
                          <td>${producto.precio}</td>
                          <td><button class="btn btn-danger btnBorrarProducto">Borrar</button></td>`;
        tabla.append(fila);
    }


    let btnBorrar = document.querySelectorAll(".btnBorrarProducto");
   
    for( let btn of btnBorrar){
        btn.addEventListener("click" , borrarProducto );
    }

}

function borrarProducto(e){

    let abuelo = e.target.parentNode.parentNode;
    let productoEliminar = abuelo.querySelector("p").innerText;  
    abuelo.remove();
    Toastify({
        text: `Producto eliminado del carrito: ${productoEliminar}`,
        className: "info",
        gravity: "bottom",
        style: {
          background: "linear-gradient(to right, #FF0000, #8B0000)",
        }
    }).showToast();



    function eliminarProductoLS( producto ){
        return producto.nombre != productoEliminar
    }


    let resultadoFilter = carrito.filter( eliminarProducto );
    carrito = resultadoFilter;

    function eliminarProducto (producto){
        return producto.nombre != productoEliminar
    }

    let carritoParseado = JSON.parse(localStorage.getItem ("Carrito"));
    let resultadoFilterLS = carritoParseado.filter (eliminarProductoLS);
    let nuevoCarritoLS = JSON.stringify (resultadoFilterLS);
    localStorage.setItem ("Carrito", nuevoCarritoLS);
}


function vaciarCarrito (){
    let vaciar_carro = document.getElementById ("carrito")
    vaciar_carro.innerHTML = `<p>Carrito Eliminado!</p>
                              <a href = "index.html" class = "carrito_vacio">Volver a cargar productos</a>`;
    localStorage.clear ();
}



function finalizarCompra (){
    function totalCompra (acu, producto){
        acu = acu + parseInt(producto.precio);
        return acu;
    }
    
    
    
    let compraFinal = carrito.reduce (totalCompra, 0);
       
    if (compraFinal > 0){
        let tabla = document.getElementById("resultado");

    tabla.innerHTML = "";


    let fila = document.createElement("tr");
    fila.innerHTML = `<td><p class="row totalEstilo">Total</p></td>
                      <td><p class="totalEstilo">$${compraFinal}</p></td>`;
    tabla.append(fila);


    Swal.fire({
        icon: 'success',
        title: 'Compra realizada con éxito!',
        showConfirmButton: true,
    })
    }
  
    else{
        Swal.fire({
            icon: 'error',
            title: 'No ha añadido ningún producto',
            showConfirmButton: true
        })
    }

}



let btnCompra = document.querySelectorAll(".botonCompra");


for( let boton of btnCompra ){

    boton.addEventListener("click" , agregarCarrito);
}

let vaciar_carrito = document.getElementById ("vaciar-carrito");

vaciar_carrito.addEventListener ("click", vaciarCarrito)

let finalizar_compra = document.getElementById ("finalizar-compra");

finalizar_compra.addEventListener ("click", finalizarCompra);