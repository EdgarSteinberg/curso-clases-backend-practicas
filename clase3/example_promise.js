const dividir = (dividendo, divisor) => {
    return new Promise((resolve, reject) => {
        if (divisor === 0) {
            reject("No se puede dividir por cero")
        } else {
            resolve(dividendo / divisor)
        }
    })
}

/* const resultado = dividir(10, 2)
console.log(resultado) */

dividir(10, 0).then(res => console.log(`El resultado es : ${res}`))
.catch(error => console.error(`Error ${error}`))

dividir(10, 2).then(res => console.log(`El resultado es : ${res}`))
.catch(error => console.error(`Error ${error}`))