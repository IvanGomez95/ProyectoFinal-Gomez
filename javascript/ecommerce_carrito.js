let carrito = []


function agregarCarrito(e){

    let hijo = e.target;
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode;

    let nombreProducto = padre.querySelector("h5").innerText;

    let precioProducto = padre.querySelector("span").innerText;

    let imgProducto = abuelo.querySelector("img").src;

    let productoExistente = carrito.find (item => item.nombre === nombreProducto);

    if (productoExistente){
        productoExistente.cantidad += 1;
    } else{
        let producto = {
            nombre: nombreProducto,
            precio: precioProducto,
            img:imgProducto,
            cantidad:1
        };
        carrito.push(producto);
    }

    

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
    let total = calcularTotal();
    let totalElement = document.getElementById ("resultado");
    totalElement.textContent = `Total: $${total}`;

}

function calcularTotal(){
    let total = 0;
    for (let producto of carrito){
        total += parseInt(producto.precio) * producto.cantidad;
    }
    return total;
}

function borrarProducto(e){

    let abuelo = e.target.parentNode.parentNode;
    let productoEliminar = abuelo.querySelector("p").innerText;  
    for (let i = 0; i < carrito.length; i++){
        if (carrito[i].nombre === productoEliminar){
            if (carrito[i].cantidad > 1){
                carrito[i].cantidad -= 1;
                abuelo.querySelector ("td:nth-child(3)").textContent = carrito[i].cantidad;
            } else{
                carrito.splice (i,1);
                abuelo.remove();
            }
            break
        }
    }
    Toastify({
        text: `Producto eliminado del carrito: ${productoEliminar}`,
        className: "info",
        gravity: "bottom",
        style: {
          background: "linear-gradient(to right, #FF0000, #8B0000)",
        }
    }).showToast();

    let total = calcularTotal();
    let totalElement = document.getElementById ("resultado");
    totalElement.textContent = `Total: $${total}`;

    localStorage.setItem ("Carrito", JSON.stringify(carrito));
}


function vaciarCarrito (){
    if (localStorage.length >= 1){
        let vaciar_carro = document.getElementById ("carrito")
        vaciar_carro.innerHTML = `<p>Carrito Eliminado!</p>
                              <a href = "index.html" class = "carrito_vacio">Volver a cargar productos</a>`;
        localStorage.clear ();
    } else{
        Swal.fire({
            icon: 'error',
            title: 'No hay productos en el carrito',
            showConfirmButton: true
        })

    }
}



function finalizarCompra (){
    let total = calcularTotal ();
    carrito.splice (0, carrito.length);
    
    mostrarCarrito();
    
    
       
    if (total > 0){
        Swal.fire({
        icon: 'success',
        title: `Compra realizada con éxito! El total es $${total}`,
        showConfirmButton: true,
        })

        let totalElement = document.getElementById ("resultado");
        totalElement.style.display = "none";
    } else{
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

fetch ("https://api.openweathermap.org/data/2.5/weather?q=Buenos Aires&units=metric&appid=882245ce1b449bb04e49a4c38a3cbfb9")
    .then ((response) => response.json())
    .then ((json) => console.log (json));

