//Crear un proyecto de node que genere 10000 numero aleatorios en un rango de 1 a 20.
//Crear un objeto cuyas claves sean los numeros solidos y el valor asociado a cada clave sera la cantidad de veces que salio dicho numero. Representar por consola los numeros dados

const numeroRandom = (min, max) => {
    return Math.round(Math.random() * (max - min )) + min
}

const arrayNumeros = []

for (let i = 0; i < 10000; i++) {
    arrayNumeros.push(numeroRandom(1, 20))
}

const contarNumeros = (numeros) => {

    const conteo = {}

    numeros.forEach(numero => {
        if (conteo[numero]) {
            conteo[numero]++
        } else {
            conteo[numero] = 1
        }
    });
    return conteo;
}

const resultado = contarNumeros(arrayNumeros)
console.log(resultado)