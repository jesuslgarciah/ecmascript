//valores por defecto en funciones
function newFunction(name = "Jesus", age = 25, country="CO"){
    console.log(name, age, country)
}
newFunction()
newFunction("pepito", 26, "MX")



//TEMPLATE LITERALS
let hello = "Hello";
let world = "World"
let epicPhrase = `${hello} ${world}`
console.log(epicPhrase)
//////////////////////////////


////MULTILINEAS
let frase = `otra frase epica
ahora es otra frase epica`;
console.log(frase)

//DESESTRUCTURACION DE ELEMENTOS
let person = {
    name: "Jesus",
    age: 24,
    country: "CO"
}

let { name, age, country } = person

console.log(name, age, country)
///////////////////////////////


///////SPREAD OPERATOR////////
let team1 = ['Jesus', 'Yuli', 'Mami']
let team2 = ['Pepo', 'Pepito', 'Juan']

let education = ['David', ...team1, ...team2]

console.log(education)
///////////////////////////////

/*
    var => uso global

    tienen un scope de solo el bloque de codigo donde son creadas
    let => disponible solo en un bloque de codigo,
    se puede reasignar
    const => similar al let pero no puede reasignar
*/

{
    var globalVar = "Global Var"
}
{
    let globalLet = "Global Let"
    console.log(globalLet)
}

console.log(globalVar)

const UN_VALOR_CONSTANTE = 8
//UN_VALOR_CONSTANTE = 10 //no se puede realizar reasignacion
console(UN_VALOR_CONSTANTE)
/////////////////////////


///PARAMETROS DE LOS OBJETOS
let name = 'Jesus'
let age = 24
//es5
obj = { name: name, age: age }

//es6
obj2 = { name, age }
console.log(obj2)


//ARROW FUNCTION (FUNCIONES FLECHAS)
const names = [
    { name: 'Jesus', age: 24 },
    { name: 'Pepito', age: 40 }
]

let listOfNames = names.map(function(item){
    console.log(item.name)
})

let listOfNames2 = names.map(item => {
    console.log(item.name)
})

let listOfNames3 = names.map(item => console.log(item.name))

const square = num => num * num
console.log(square(7))

///PROMESAS algo va a suceder
//resolve o reject => retorna

const helloPromise = (valor) => {
    return new Promise((resolve, reject) => {
        if (valor){
            resolve('Super bien!!! PROMESA RESUELTA')
        } else {
            reject('Lo siento mucho!!! PROMESA ERRADA')
        }
    })
}

//PROMESA RESULTA
helloPromise(true)
    .then(response => console.log(response))
    .catch(error => console.log(error))

//PROMESA ERRADA
helloPromise(false)
    .then(response => console.log(response))
    .catch(error => console.log(error))


/////CLASES
class Calculator{
    constructor() {
        this.valueA = 0
        this.valueB = 0
    }

    suma(valueA, valueB){
        this.valueA = valueA
        this.valueB = valueB
        return this.valueA + this.valueB
    }
}

let calc = new Calculator()
console.log(calc.suma())


///TRABAJAR CON MODULOS
import { hello } from './module'
hello()


//GENERATORS (GENERADORES)
function* helloWorld(){
    if (true){
        yield 'Hello, '
    }
    if (true){
        yield 'World'
    }
}

const generatorHello = helloWorld()
console.log(generatorHello.next().value) //Hello,
console.log(generatorHello.next().value) //World
console.log(generatorHello.next().value) //undefined