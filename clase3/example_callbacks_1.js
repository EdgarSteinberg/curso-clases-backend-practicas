let originalValues = [1, 2, 3, 4, 5]

let newValues = originalValues.map(x => x + 1)

let otherValues = originalValues.map(x => x * 2)

let moreValues = originalValues.map(x => "a")

console.log(
    "\noriginalValues", originalValues,
    "\newValues", newValues,
    "\notherValues", otherValues,
    "\nmoreValues", moreValues)


const callbackFuction = (value) => {
    if (value % 2 === 0) {
        return value
    } else {
        return "No es par"
    }
}

const evaluatePair = originalValues.map(callbackFuction)
console.log(evaluatePair)