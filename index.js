precio = 400000;
precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

let contador = 1;
const stock = 10;

// 1) CAPTURAR ELEMENTOS

const sumar = document.querySelector("#sumar");
const restar = document.querySelector("#restar");
const contadorHTML = document.querySelector("#contador");
const totalHTML = document.querySelector("#total");
const cantidad = document.querySelector(".cantidad");
// 2) DECLARAR UNA FUNCION

function sumarFunction() {
    // contador = contador + 1;
    // contador += 1
    if (contador < stock) {
        contador++;
        cantidad.innerHTML = contador;
        precioTotal = contador * precio;
        totalHTML.innerHTML = precioTotal;
    } else {
        alert("No podes comprar mas de " + stock + " productos");
    }
}
function restarFunction() {
    // contador = contador - 1;
    // contador -= 1
    if (contador > 1) {
        contador--;
        cantidad.innerHTML = contador;
        precioTotal = contador * precio;
        totalHTML.innerHTML = precioTotal;
    } else {
        alert("No podes comprar menos de un producto")
    }
}
function renderHTML() {
    contadorHTML.innerHTML = contador;
    totalHTML.innerHTML = `$ ${contador * precio}`;
}

//3) AGREGAMOS EL EVENTO  TIPO EVENTO - FUNCION QUE QUEREMOS EJECUTAR

sumar.addEventListener("click", sumarFunction);
restar.addEventListener("click", restarFunction);
renderHTML();