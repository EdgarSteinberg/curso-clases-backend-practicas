const sumar = (n1,n2) => {
    return new Promise((resolve,reject) =>{
        if(n1 === 0 || n2 === 0){
            reject ("Operacion innecesaria")
        }else{
            resolve(n1 + n2)
        }
    })
}

const restar = (n1,n2) => {
    return new Promise((resolve,reject) =>{
        if(n1 === 0 || n2 === 0){
            reject ("Funcion innecesaria")
        }else if(n1 - n2 < 0){
            reject ("La calculadora solo puede devolver valores positivos")
        }else{
            resolve(n1 - n2)
        }
    })
}

const multiplicar = (n1,n2) => {
    return new Promise((resolve,reject) => {
        if(n1 < 0 || n2 < 0){
            reject ("Funcion innecesaria")
        }
        else{
            resolve(n1 * n2)
        }
    })
}

const dividir = (n1,n2) => {
    return new Promise((resolve,reject) => {
        if(n1 === 0 || n2 === 0){
            reject ("Funcion innecesaria")
        }else{
            resolve(n1 / n2)
        }
    })
}

const functionAsync = async (n1,n2) => {
    try{
        const suma = await sumar(n1, n2)
        const resta = await restar(n1, n2)
        const multiplicacion = await multiplicar(n1,n2)
        const division = await dividir(n1,n2)

        console.log(`Se operan los numeros ${n1} y ${n2}\n`)
        console.log(` Suma: ${suma}\n Resta: ${resta}\n Multiplicar: ${multiplicacion}\n Division: ${division}`)
    }catch(error){
        console.error(error)
    }
}

functionAsync(5,6)