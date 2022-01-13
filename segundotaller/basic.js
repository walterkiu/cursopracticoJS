function calcularDescuento(precio, descuento){
    let precioFinal = precio * ((100 - descuento) / 100);
    return precioFinal;
}
function calcPrecioFinal (){
    let inputPrice = document.getElementById("inputPrecio")
    let priceValue = inputPrice.value;
    let inputDescount = document.getElementById("inputDescuento");
    let descountValue = inputDescount.value;
    let precioConDescuento = calcularDescuento(priceValue, descountValue)

    let calcResult = document.getElementById("calcResult");
    calcResult.innerText = "El precio con descuento es de $" + precioConDescuento.toFixed(2);
}

function calcPrecioFinal2(){
    let inputPrice2 = document.getElementById("inputPrecio2");
    let priceValue2 = inputPrice2.value;
    let selectCupon = document.getElementById("selectCupon");
    let cuponValue = selectCupon.value;
    let descuento; let cupon;
    switch (true){
        case cuponValue === "cupon1":
        descuento = 20; cupon = 1;
        break;
        case cuponValue === "cupon2":
        descuento = 30; cupon = 2;
        break;
        case cuponValue === "cupon3":
        descuento = 50; cupon = 3;
        break;
        case cuponValue === "cupon4":
        descuento = 80; cupon = 4;
        break;
    }
    let precioConCupon = calcularDescuento(priceValue2, descuento)
    let cuponResult = document.getElementById("cuponResult");
    cuponResult.innerText = "El precio con el descuento del cupón " + cupon + " es de $" + precioConCupon.toFixed(2);
}