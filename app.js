// Entidades

class Pedido {
    constructor(nombre, apellido, email, tipo, tamano, precio){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.tipo = tipo;
        this.tamano = tamano;
        this.precio = precio;
    }
}

// Variables

let pedidos = [];
let precio = 0;
let boton1 = document.getElementById("efectoEnviar");
let boton2 = document.getElementById("efecto1");
let tipoIlustracion = document.getElementById("tipoIlustracion");
let tamano1 = document.getElementById("tamano");


// Funciones

function mostrarPedido(e) {
    
    e.preventDefault()

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let tipo = document.getElementById("tipoIlustracion").value;
    let tamano = document.getElementById("tamano").value;

    switch (tipo) {
        case "Artesanal":
            if ((tamano == "A4") || (tamano == "a4")) {
                precio = 6000;
            }
            else {
                alert("Solo viene en tamaño A4 y su precio es 6000");
                tamano = "A4";
                precio = 6000;
            }
            break;
        
        case "Digital":
            if ((tamano == "A4") || (tamano == "a4") || (tamano == "20x30")) {
                precio = 4000;
            }
            else if (tamano == "30x40") {
                precio = 5000;
            }
            else {
                alert("Refresque el navegador y vuelva a ingresar los datos, exactamente como está la información entre paréntesis");
            }
            break;
        
        default:
            alert("Refresque el navegador y vuelva a ingresar los datos, exactamente como está la información entre paréntesis");
    }

    pedidos.push(new Pedido(nombre, apellido, email, tipo, tamano, precio));

    pedidos.forEach(pedidos => {
        let p1 = document.createElement("p");
        p1.textContent = `${pedidos.nombre}`;
        p1.setAttribute("class", "parrafo-3");

        let p2 = document.createElement("p");
        p2.textContent = `${pedidos.apellido}`;
        p2.setAttribute("class", "parrafo-3");

        let p3 = document.createElement("p");
        p3.textContent = `${pedidos.email}`;
        p3.setAttribute("class", "parrafo-3");   
        
        let p4 = document.createElement("p");
        p4.textContent = `${pedidos.tipo}`;
        p4.setAttribute("class", "parrafo-3");

        let p5 = document.createElement("p");
        p5.textContent = `${pedidos.tamano}`;
        p5.setAttribute("class", "parrafo-3");

        let p6 = document.createElement("p");
        p6.textContent = `${pedidos.precio}`;
        p6.setAttribute("class", "parrafo-3");

        let div1 = document.createElement("div");
        div1.appendChild(p1);
        div1.appendChild(p2);
        div1.appendChild(p3);
        div1.appendChild(p4);
        div1.appendChild(p5);
        div1.appendChild(p6);

        let impresion = document.getElementById("prueba");
        impresion.appendChild(div1);

        refTamano.style.display = "none"
    })
}

function desplegarTexto(e) {
    e.preventDefault()
    efecto.style.display = "block"   
    refTipo.style.display = "none"
    refTamano.style.display = "none" 
    efecto2.style.display = "none"
}

function mostrarRefTipo() {
    refTipo.style.display = "block"
}

function ocultarRefTipo() {
    refTipo.style.display = "none"
}

function mostrarRefTamano() {
    refTamano.style.display = "block"
}


// Eventos

boton1.addEventListener("click", mostrarPedido);
boton2.addEventListener("click", desplegarTexto);

tipoIlustracion.addEventListener("focus", mostrarRefTipo);
tipoIlustracion.addEventListener("blur", ocultarRefTipo);

tamano1.addEventListener("focus", mostrarRefTamano);


