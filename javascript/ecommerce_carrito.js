let carrito = JSON.parse(localStorage.getItem('Carrito')) || [];

function agregarCarrito(e){

    let hijo = e.target;
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode;

    let nombreProducto = padre.querySelector("h5").innerText;

    let precioProducto = padre.querySelector("span").innerText;

    let imgProducto = abuelo.querySelector("img").src;
    
//Condición que busca si el producto está en el carrito para que no se dupliquen los productos
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
//Condición que busca si el producto está en el carrito para que no se dupliquen los productos
    

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

    if (carrito.length > 0){   
        let total = calcularTotal();
        let totalElement = document.getElementById ("resultado");
        totalElement.textContent = `Total: $${total}`;
    }    
}
//Función que calcula costo total al borrar y agregar productos y al finalizar la compra
function calcularTotal(){
    let total = 0;
    for (let producto of carrito){
        total += parseInt(producto.precio) * producto.cantidad;
    }
    return total;
}
//Función que calcula costo total al borrar y agregar productos y al finalizar la compra

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
    if (carrito.length > 0){
        totalElement.textContent = `Total: $${total}`;
    } else{
        totalElement.textContent = ``;
    }    

    localStorage.setItem ("Carrito", JSON.stringify(carrito));

    if (carrito.length == 0){
        localStorage.clear();
    }
}

//Función que vacía carrito y LocalStorage y renderiza nuevamente carrito vacío
function vaciarCarrito (){
    if (localStorage.length >= 1){
        let vaciar_carro = document.getElementById ("carrito")
        carrito = [];
        localStorage.clear ();
        let total = calcularTotal();
        let totalElement = document.getElementById ("resultado");
        totalElement.textContent = "";
        mostrarCarrito();
        Toastify({
            text: "¡Carrito vaciado!",
            className: "info",
            gravity: "bottom",
            style: {
              background: "linear-gradient(to right, #FF0000, #8B0000)",
            }
        }).showToast();
           
    } else{
        Swal.fire({
            icon: 'error',
            title: 'No hay productos en el carrito',
            showConfirmButton: true
        })

    }
}
//Función que vacía carrito y LocalStorage y renderiza nuevamente carrito vacío



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
        totalElement.textContent = ``;
        localStorage.clear();
    } else{
            Swal.fire({
            icon: 'error',
            title: 'No ha añadido ningún producto',
            showConfirmButton: true
        })
    }
}


//Eventos
let btnCompra = document.querySelectorAll(".botonCompra");


for( let boton of btnCompra ){

    boton.addEventListener("click" , agregarCarrito);
}

let vaciar_carrito = document.getElementById ("vaciar-carrito");

vaciar_carrito.addEventListener ("click", vaciarCarrito)

let finalizar_compra = document.getElementById ("finalizar-compra");

finalizar_compra.addEventListener ("click", finalizarCompra);
//Eventos

mostrarCarrito();

//Funcion que muestra la localización actual del usuario en Nav
function mostrarUbicacion(localizacion){
    let latitude =  localizacion.coords.latitude;
    let longitude = localizacion.coords.longitude;
    let apiKey = "882245ce1b449bb04e49a4c38a3cbfb9";

    fetch (`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}&lang=es`)
    .then ((response) => response.json())
    .then (data =>{
        let locUsuario = document.getElementById("userLocation");
   
        let localizacionNav = document.createElement("div");
        localizacionNav.innerHTML = `<span> Usted está comprando desde ${data.name}, ${data.sys.country}</span>`;
        locUsuario.append(localizacionNav);
    })
}

navigator.geolocation.getCurrentPosition (mostrarUbicacion);
//Funcion que muestra la localización actual del usuario en Nav
