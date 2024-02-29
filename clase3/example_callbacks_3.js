let operation = ""

const sumar = (n1, n2) => {
    operation = "Sumar";
    return n1 + n2
}
const restar = (n1, n2) => {
    operation = "Restar";
    return n1 - n2
}
const multiplicar = (n1, n2) => {
    operation = "Multiplicar";
    return n1 * n2
}

const dividir = (n1, n2) => {
    operation = "Dividir";
    return n1 / n2
}

const realizarOperacion = (n1, n2, callback) => {
    const resultado = callback(n1, n2)

    console.log(`Se van a ${operation} los numeros ${n1} y ${n2}`)
    console.log(`El resultado es ${resultado}`)
}


realizarOperacion(2, 3, sumar)

realizarOperacion(10, 5, restar)

realizarOperacion(4, 3, multiplicar)

realizarOperacion(15, 5, dividir)