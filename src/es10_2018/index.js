let array = [1,2,3, [4,5,6, [7,8,9]]]

console.log(array.flat(2))

let array = [ 1, 2, 3, 4, 5]
let newArray = array.flatMap(value => [value, value*2])
console.log(newArray)

let hello = '                hello world'
console.log(hello)
console.log(hello.trimStart())

let hello2 = 'hello world                '
console.log(hello2)
console.log(hello2.trimEnd())

try{

}catch{
    error
}

let entries = [['name', 'Jesus'], ['age', 24]]

let arrayToObject = Object.fromEntries(entries)
console.log(arrayToObject)


let mySymbol = `My Symbol`
let symbol = Symbol(mySymbol)
console.log(symbol.description)