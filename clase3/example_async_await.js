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



const objetos = [
    {
        manzanas: 3,
        peras: 2,
        carne: 1,
        jugos: 5,
        dulces: 2
    },
    {
        manzanas: 1,
        sandias: 1,
        huevos: 6,
        jugos: 1,
        panes: 2
    },
];
// Define un array de objetos, donde cada objeto representa productos con sus respectivas cantidades.

const new_list = new Set(objetos.map(obj => Object.keys(obj)).flat());
// Crea un conjunto (Set) a partir de los tipos de productos de cada objeto en el array 'objetos'.
// Primero, 'objetos.map(obj => Object.keys(obj))' obtiene las claves de cada objeto (los nombres de los productos).
// Luego, '.flat()' aplana el array de arrays resultante en un solo array.
// Finalmente, 'new Set(...)' elimina los duplicados, resultando en una lista única de todos los tipos de productos.

let total = {};
// Inicializa un objeto vacío que se usará para almacenar el total de productos vendidos.

objetos.map((obj) => {
    // Recorre cada objeto en el array 'objetos'.
    obj_entries = Object.entries(obj);
    // Convierte cada objeto en un array de pares clave-valor.
    obj_entries.map((value) => {
        // Recorre cada par clave-valor en el array de entradas.
        if (total[value[0]]) {
            // Si la clave (nombre del producto) ya existe en el objeto 'total'.
            total[value[0]] += value[1];
            // Suma la cantidad actual a la cantidad existente en 'total'.
        } else {
            // Si la clave (nombre del producto) no existe en el objeto 'total'.
            total[value[0]] = value[1];
            // Crea una nueva entrada en 'total' con la cantidad actual.
        }
    });
});
