
function calcularPromedio(lista){
    let suma = lista.reduce(function(suma, valorActual){
        return suma + valorActual;
    })
    let promedio = suma / lista.length;
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
    console.log(objetoArray[objetoArray.length - 1])
}
