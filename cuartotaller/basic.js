function calcularInteres(dinero, año, interes, tipoDeInteres){
if (tipoDeInteres === "simple"){
    var totalInteres = dinero * (interes/100) * año;
} else{
    var totalInteres = dinero * (1 + (interes/100))**año;
}
 return totalInteres;
}

function calcularDeudas(ingreso, alquiler, comida, luz, agua, otros ){
    let deudas = alquiler + comida + luz + agua + otros;
    let calculo = ingreso - deudas;
    return calculo;
}
function calcularMedianaSalarios(lista){
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

function onclickCalcularInteres(){
   let inputDinero = document.getElementById("inputDinero")
   let dineroValue = inputDinero.value;
   let inputPorcentaje = document.getElementById("inputPorcentaje");
   let porcentajeValue = inputPorcentaje.value;
   let selectInteres = document.getElementById("selectInteres");
   let tipoDeInteresValue = selectInteres.value;
   let inputAño = document.getElementById("inputAño");
   let añoValue = inputAño.value;

   let interes = calcularInteres(dineroValue, añoValue, porcentajeValue, tipoDeInteresValue);
   console.log(interes);
   let parrafo = document.getElementById("resultInteres");
   parrafo.innerText = "El interés " + tipoDeInteresValue + " es de $" + interes.toFixed(2);
}
function onclickCalcularDeudas(){
    let inputIngreso = document.getElementById("ingreso")
    let ingreso = Number(inputIngreso.value);

    let inputAlquiler = document.getElementById("alquiler")
    let alquiler = Number(inputAlquiler.value);

    let inputComida = document.getElementById("comida")
    let comida = Number(inputComida.value);

    let inputLuz = document.getElementById("luz")
    let luz = Number(inputLuz.value);

    let inputAgua = document.getElementById("agua")
    let agua = Number(inputAgua.value);

    let inputOtros = document.getElementById("otros")
    let otros = Number(inputOtros.value);

    let result = calcularDeudas(ingreso, alquiler, comida, luz, agua, otros);

    let resultado = document.getElementById("resultDeudas")
    if (result < 0){
        let resultadoPositivo = result * -1;
        resultado.innerText = "Gastas $" + resultadoPositivo + " más de lo que ganas." ;
    }
    else{
        resultado.innerText = "Ahorras $" + result + " cada mes." ;    
    }

}
let lista = [];
function crearLista(numero){
    lista.push(numero)
    return lista;
}
function addSalary (){
    let inputNumero = document.getElementById("agregarSalario");
    let numero = inputNumero.value;
    if (numero){
            let list = crearLista(Number(numero));

            let listaParrafo = document.getElementById("listaSalarios");
            listaParrafo.innerText = list;
            let validarNumero = document.getElementById("validarNumero");
            validarNumero.innerText = null;
    } else{
        let validarNumero = document.getElementById("validarNumero");
        validarNumero.innerText = "Ingrese un numero válido!";
    }
    document.getElementById("agregarSalario").value = "";
}
function deleteSalary(){
    let inputNumero = document.getElementById("eliminarSalario");
    let numero = inputNumero.value;

    let parrafo = document.getElementById("listaSalarios")
    parrafo.innerText = "";
    lista.splice((numero-1), 1)
    parrafo.innerText = lista;
    document.getElementById("eliminarSalario").value = "";
}
function deleteList(){
    lista = [];
    let listaParrafo = document.getElementById("listaSalarios");
    listaParrafo.innerText = lista;
}
function onclickCalcularMediana(){
    let mediana = calcularMedianaSalarios(lista);
    let medianaResult = document.getElementById("resultSalarios");
    medianaResult.innerHTML = "<strong> Mediana: </strong> $" + mediana
}