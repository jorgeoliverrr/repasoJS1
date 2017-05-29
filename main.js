// variables
// numericas
var miVariable = 1
// string 
var miVariable2 = 'Mi string'
// boolean
var miVariable3 = true
var miVariable4 = false
// nulos o indefinidos
var miVariable5 = null
var miVariable6 = undefined

// arreglos
var arr = []
var arr1 = [1, 2, 3, 4, 5]
var arr2 = ['hola', 'tchao']
var arr3 = [true, true, true]
var arr4 = [ [], [], [] ]
var arr5 = [1, 'Hola mundo', true, []]

arr1[0] // valor de la primera posición
arr1[4] // valor de la posicion 5

// Obj Key -> value
var obj = {}

// para asignar un valor a una propiedad de un objeto se utiliza : 
// para separar propiedades se utiliza la ,
var obj1 = {
    miPropiedad: 1,
    otraPropiedad: 'mi string!!',
    otraPropiedad2: true,
    arr: [],
    obj: {
        masPropiedades: 'mas propiedades'
    }
}

var x = obj1.miPropiedad
var y = obj1.otraPropiedad2

var z = obj1.obj.masPropiedades

obj1.miPropiedad = 10

var users =[{ name: 'Nicolas'}, { name: 'Richard'}, { name: 'Luna'}, { name: 'Silvana'}]

var luna = users[2].name
users[2].name = 'Joe Pino'

if(10 > 8) {
    console.log('se cumple!')
}else if(2 == 7){
    console.log('yo me ejecuto si no se cumple la condicion de if pero si se cumple la condicion de este else if')
}else if(1 < -6){
    console.log('si nada se cumple y esto si me ejecuto yo!')
}else{
    console.log('si absolutamente nada se cumple! aqui vengo yo')
}

// crear dos usuarios: juanito y chanchito feliz
// juanito tiene la propiedad de nombre que es carlos y tendra edad 42
// chanchito tiene nombre juan y edad 14

var juanito = {
    nombre: 'carlos',
    edad: 42,
}

var chanchitoFeliz = {
    nombre: 'juan',
    edad: 14,
}
var x = juanito.edad
var y = chanchitoFeliz.edad

if(x < y){
    console.log('el amigo' & chanchitoFeliz.nombre & ' es mayor')
}else if(x > y) {
    console.log('el amigo' & juanito.nombre & ' es mayor')
}else{
    console.log('ni el amigo' & chanchitoFeliz.nombre & ' el amigo' & juanito.nombre &' es mayor')
}

// esta es mi respuesta

if(x < y){
    console.log('juan es mayor')
}else if(x > y) {
    console.log('carlos es mayor')
}else{
    console.log('nadien es mayor ni menos que el otro')
}

// loops - ciclos - bucles
//  for y while
// ciclos for

for(var i = 0; i < 10; i++){
    console.log(i)
}

for(var i = 10; i > 0; i--){
    console.log(i)
}

// construir un array de 5 objetos y estos objetos van a hacer usuarios 
// debe comensar desde 0 y el valor mayor debe ser 4
// imprimir el nombre del arreglo de objetos

var john = {
    nombre: 'javi',
    edad: 43,
}

var pato = {
    nombre: 'carlos',
    edad: 14,
}

var javi = {
    nombre: 'dan',
    edad: 42,
}

var dan = {
    nombre: 'juan',
    edad: 15,
}

var homero = {
    nombre: 'john',
    edad: 6,
}

var perso =[john, pato, javi, dan, homero]

for(var i = 0; i < 5; i++){
    console.log(perso[i].nombre)
}

var largo = [1, 2, 3, 4, 5].length

// cambiar el for para que funcione con la propiedad .length
// borrar el ultimo elemento del arreglo
// el for tiene que seguir funcionando, no puede arrojar errores

var lar = perso.length

for(var i = 0; i < lar; i++){
    
    console.log(perso[i].nombre)
}

//crear un listado de 10 usuarios
// todos los usuarios debe tener la prop nombre y edad
// imprimir solamente los que son mayores de edad diciendo:
// --> bienvenido & nombrePersona & puedes pasar 
// de lo contrario
// --> SORRY & nombrePersona & no puedes pasar