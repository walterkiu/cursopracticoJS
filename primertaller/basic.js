function perimetroCuadrado(ladoCuadrado){
    var perimetro = ladoCuadrado * 4;
    return perimetro; 
}
function areaCuadrado (ladoCuadrado){
    var area = ladoCuadrado * ladoCuadrado;
    return area; 
}

function perimetroTriangulo (lado1, lado2, base){
    var perimetro = lado1 + lado2 + base;
    return perimetro;
}
function areaTriangulo (base, altura){
    var area = (base * altura) / 2;
    return area;
}
function alturaTriangulo(lado, base){
    let altura = Math.sqrt((lado**2)-((base**2)/4));
    return altura;
}
var PI = Math.PI;
function perimetroCirculo(radio, PI){
    let perimetro = 2 * PI * radio;
    return perimetro;
}
function areaCirculo(radio, PI){
    let area = PI * radio**2;
    return area;
}

function calcularPerimetroCuadrado(){
    var input = document.getElementById("InputCuadrado");
    var value = input.value;
    var perimetro = perimetroCuadrado(value);
    const Result = document.getElementById("squareResult");
    Result.innerText = "El perimetro del cuadrado es de " + perimetro;
}
function calcularAreaCuadrado(){
    var input = document.getElementById("InputCuadrado");
    var value = input.value;
    var area = areaCuadrado(value);
    const Result = document.getElementById("squareResult");
    Result.innerText = "El area del cuadrado es de " + area;
}
function calcularPerimetroTriangulo(){
    const input = document.getElementById("InputTrianguloLado");
    const inputLado = Number(input.value);
    const input2 = document.getElementById("InputTrianguloBase");
    const inputBase = Number(input2.value);

    const perimetro = perimetroTriangulo(inputLado, inputLado, inputBase)
    const Result = document.getElementById("triangleResult");
    Result.innerText = "El perimetro del triangulo es de " + perimetro;
}
function calcularAreaTriangulo(){
    const input2 = document.getElementById("InputTrianguloBase");
    const inputBase = Number(input2.value);
    const input = document.getElementById("InputTrianguloLado");
    const inputLado = Number(input.value);
    const altura = alturaTriangulo(inputLado, inputBase);
    const area = areaTriangulo (inputBase, altura)
    const Result = document.getElementById("triangleResult");
    Result.innerText = "El area del triangulo es de " + area.toFixed(2);
}
function calcularAlturaTriangulo(){
    const input2 = document.getElementById("InputTrianguloBase");
    const inputBase = Number(input2.value);
    const input = document.getElementById("InputTrianguloLado");
    const inputLado = Number(input.value);
    const altura = alturaTriangulo(inputLado, inputBase);
    const Result = document.getElementById("triangleResult") 
    Result.innerText = "La altura del triangulo es de " + altura.toFixed(2);
}
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const perimetro = perimetroCirculo(value, PI);
    const Result = document.getElementById("circleResult") 
    Result.innerText = "El perimetro del circulo es de " + perimetro.toFixed(2);
}
function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const area = areaCirculo(value, PI);
    
    const Result = document.getElementById("circleResult") 
    Result.innerText = "El area del circulo es de " + area.toFixed(2);
}