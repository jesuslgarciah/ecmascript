///DESESTRUCTURACION DE OBJETOS
//OPERADOR DE REPOSO
const obj = {
    name: 'Jesus',
    last_name: 'Garcia',
    age: 24,
    country: 'CO',
}
//quita el parametro que se le indique, en el all queda el resto
let { name , ...all }  = obj
console.log(all)


///UNIR VARIOS OBJETOS EN UN OBJETO NUEVO
const obj = {
    name: 'Jesus',
    age: 24,
}

const obj1 = {
    country: 'CO',
    ...obj,
}

console.log(obj1)


///opcion finally
const helloWorld = (valor) => {
    return new Promise((resolve, reject) =>{
        (valor)
            ? resolve('Hello World')
            : reject(new Error('Test Error'))
    })
}

helloWorld(true)
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizó'))

///TRABAJAR CON REGEX POR GRUPOS
const regexData = /(\d{4})-(\d{2})-(\d{2})/
const date  = new Date()
const match = regexData.exec('2020-04-10')
const year = match[1]
const month = match[2]
const day = match[3]
console.log(year, month, day)