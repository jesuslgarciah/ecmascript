//Object.entries(data)
//DEVUELVE UNA MATRIZ CON LO QUE ESTA CONTENIDO DENTRO DEL OBJETO
const data = {
    frontend: 'Jesus',
    backend: 'Isabel',
    design: 'Ana',
}
const entries = Object.entries(data)
console.log(entries)
console.log(entries.length)

///Object.values(data)
////DEVUELVE UN ARREGLO CON LOS VALORES, NO TRAE LA ASIGNACION
const data = {
    frontend: 'Jesus',
    backend: 'Isabel',
    design: 'Ana',
}
const values = Object.values(data)
console.log(values)
console.log(values.length)


//PADDING 
const string = 'hello'
console.log(string.padStart(7, 'hi'))
console.log(string.padEnd(14, '**-----**'))


//LLAMADO DE TRAILING COMMAS
const data = {
    name: 'Jesus',
}

////ASYNC Y AWAIT
const helloworld = valor => {
    return new Promise((resolve, reject) => {
        (valor)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('***Test Error***'))
    })
}

const helloAsync = async () => {
    const hello = await helloworld(true);
    console.log(hello)
}

helloAsync()

const anotherFunction = async () => {
    try{
        const hello = await helloworld(false);
        console.log(hello)
    } catch (error){
        console.log(error)
    }
}

anotherFunction()