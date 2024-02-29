let array = [1, 2, 3, 4, 5]

const myMapFunction = (array, callback) => {
    let newArray = []

    for (let i = 0; i < array.length; i++) {
        
        let newValue = callback(array[i])
        newArray.push(newValue)
    }
    return newArray
}

let originalValues = [1, 2, 3, 4, 5]

let newValues = myMapFunction(originalValues, n => n + 1)

let otherValues = myMapFunction(originalValues, n => n * 1)

let moreValues = myMapFunction(originalValues, n => "a")


console.log(
    "\noriginalValues", originalValues,
    "\newValues", newValues,
    "\notherValues", otherValues,
    "\nmoreValues", moreValues)