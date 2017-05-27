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

obj1.miPropiedad
obj1.otraPropiedad2

obj1.obj.masPropiedades

var users =[{ name: 'Nicolas'}, { name: 'Richard'}, { name: 'Luna'}, { name: 'Silvana'}]
