function calcularInteres(dinero, año, interes, tipoDeInteres){
if (tipoDeInteres === "simple"){
    var totalInteres = dinero * (interes/100) * año;
} else{
    var totalInteres = dinero * (1 + (interes/100))**año;
}
 return totalInteres;
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
   let parrafo = document.getElementById("pResult");
   parrafo.innerText = "El interés " + tipoDeInteresValue + " es de $" + interes.toFixed(2);
}