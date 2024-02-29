const dividir = (dividendo, divisor) => {
    return new Promise(( resolve, reject) => {
        if (divisor === 0) {
            reject("no se puede dividir por cero")
        } else {
            resolve(dividendo / divisor)
        }
    })

}

const asyncFunction = async (n1,n2) => {
    try {
        const resultado = await dividir(n1,n2)
        console.log(resultado)
    } catch (error) {
        console.error(error)
    }finally {console.log("termino la ejecucion")}
}


asyncFunction(10,0);
asyncFunction(10,2);
