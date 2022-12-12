//Ejercicio 1
//Escribir una función que tome un arreglo de números y devuelva el número mayor de la lista. Ejemplo del arreglo : [3, 5, 7, 1, 6]

let numeros = [3, 5, 7, 1, 6];


function buscarMayor(misNumeros) {
    let mayor = misNumeros[0]

    for (let index= 0; index < misNumeros.length; index++) {
        if (misNumeros[index] > mayor){
            mayor = misNumeros[index]            
        }
    }

    return mayor;   
}
console.log('El arreglo es: ' + numeros)
console.log('El número mayor es: ' + buscarMayor(numeros))


//Ejercicio 2
//Dada una lista de números [-1, 3, 4, 2, 6], escribe una función en javascript para calcular el número más pequeño.

numeros = [-1, 3, 4, 2, 6]

function buscarMenor(misNumeros) {
    let menor = misNumeros[0]

    for (let index = 0; index < misNumeros.length; index++) {
        if (misNumeros[index] < menor){
            menor = misNumeros[index]            
        }
    }

    return menor;   
}
console.log('El arreglo es: ' + numeros)
console.log('El número menor es: ' + buscarMenor(numeros))

//Ejercicio 3
//Escribir una función que permita saber si un número se repite dentro de un arreglo.

numeros =  [0, 2, 3, 9, 4, 5, 6,2]

function buscarRepetidos(misNumeros) {
    for(let index1 = 0; index1 < misNumeros.length; index1++) {
        for(let index2 = 0; index2 < misNumeros.length; index2++) {
            if( index1 != index2 && misNumeros[index1] == misNumeros[index2] ){
                return `El número  ${misNumeros[index1]} se encuentra  más de una vez [${misNumeros}]`
            }
        }
    }

    return `No hay números repetidos  [${misNumeros}]`

}
console.log(buscarRepetidos(numeros))

//Ejercicio 3
// Escribir una función que tome un arreglo ordenado y devuelva un arreglo completamente desordenado 
// Entrada: [1, 2, 5, 14, 24, 31, 50, 105] Posible salida: [105, 31, 14, 1, 2, 50, 24, 5]

numeros =  [1, 2, 3, 4, 5, 6, 7, 8]

function desordenar(misNumeros) {
    let nuevoArreglo = [];
    for(let index = 0; index < misNumeros.length; index++) {
        let indexAleatorio = Math.random() * misNumeros.length;
        console.log(indexAleatorio)
        nuevoArreglo[parseInt(indexAleatorio)] = misNumeros[index];
    }

    return nuevoArreglo;
}
console.log('Salida: ' + desordenar(numeros))
