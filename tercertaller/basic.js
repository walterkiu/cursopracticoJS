function calcularPromedio(lista){
    let suma = lista.reduce(function(suma, valorActual)
        {return suma + valorActual;}
        )
    let promedio = suma / (lista.length);
    return promedio;
}
function calcularMediana(lista){
    let listaOrden = lista.sort(function(a,b){return a - b;})
    var mitad = parseInt(lista.length / 2) ;

    if (lista.length % 2 === 0){
        var sumaMitad = listaOrden[mitad] + listaOrden[mitad - 1];
        var mediana = sumaMitad / 2;
    } else{
        var mediana = listaOrden[mitad];
    }
    return mediana;
}
function calcularModa(lista){
    let objeto = {};
    lista.map(function(elemento){
        if (objeto[elemento]){
            objeto[elemento] += 1;
        }
        else{
            objeto[elemento] = 1;
        }
    })
    let objetoArray = Object.entries(objeto).sort(
        function(valorA, valorB){
        return valorA[1] - valorB[1]

    });
    return (objetoArray[objetoArray.length - 1])
}

let lista = [];
function crearLista(numero){
    lista.push(numero)
    return lista;
}
function addNumber (){
    let inputNumero = document.getElementById("agregarNumero");
    let numero = inputNumero.value;
    if (numero){
            let list = crearLista(Number(numero));

            let listaParrafo = document.getElementById("listaNumeros");
            listaParrafo.innerText = list;
            let validarNumero = document.getElementById("validarNumero");
            validarNumero.innerText = null;
    } else{
        let validarNumero = document.getElementById("validarNumero");
        validarNumero.innerText = "Ingrese un numero válido!";
    }
    document.getElementById("agregarNumero").value = "";
}
function deleteNumber(){
    let inputNumero = document.getElementById("eliminarNumero");
    let numero = inputNumero.value;

    let parrafo = document.getElementById("listaNumeros")
    parrafo.innerText = "";
    lista.splice((numero-1), 1)
    parrafo.innerText = lista;
    document.getElementById("eliminarNumero").value = "";
}
function deleteList(){
    lista = [];
    let listaParrafo = document.getElementById("listaNumeros");
    listaParrafo.innerText = lista;
}

function calcularMedidas(){
    let media = calcularPromedio(lista);
    let mediaResult = document.getElementById("mediaResult");
    mediaResult.innerHTML = "<strong> Media aritmética: </strong>" + media.toFixed(2);

    let mediana = calcularMediana(lista);
    let medianaResult = document.getElementById("medianaResult");
    medianaResult.innerHTML = "<strong> Mediana: </strong>" + mediana

    let arrayModa = calcularModa(lista);
    let moda = arrayModa[0];
    let numeroModa = arrayModa[1];
    let modaResult = document.getElementById("modaResult");
    modaResult.innerHTML = "<strong> Moda: </strong>" + moda + " con " + numeroModa + " repeticiones"
}