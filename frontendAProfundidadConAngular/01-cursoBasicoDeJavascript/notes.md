# 01 -  CURSO BÁSICO DE JAVASCRIPT

## Qué es JavaScript.

Permite interactuar con el contenido. Generar páginas dinámicas que luego se convierten en aplicaciones Web. JavaScript como lenguaje es un lenguaje interpretado, orientado a objetos, débilmente tipado y dinámico.

### Débilmente tipado

Permite realizar operaciones tipos de datos de número con otros tipos de dato:
4 + "7"; // 47
4 * "7"; // 28
2 + true; // 3
false -3; // -3

### Lenguaje interpretado

Significa que se va a leer y ejecutar linea por linea. En el momento que haya un error va a indicar que ya no puede continuar. El motor V8 realiza un proceso llamado "just-in-time-compiler" que lee, interpreta, y finalmente compila el código hacia código binario, y se lo entrega al navegador para que el navegador sepa que tenga que hacer.

### Backward y Forwads

Forwads. Indica que cuando salga una nueva versión ya lo vas a poder usar pero podría romper el código anterior.
Backward. Indica que las novedades no van a romper el código que ya se haya hecho (mantiene la funcionalidad del código legacy). Existe el compilador "Babel" que te permite cambiar tu código de última generación a código legacy para hacerlo compatible con más navegadores.

### Frameworks

Angular, Vue, React. Permiten realizar proyectos en JS de forma mucho más rápida y mucho más robusta.
React Native. Permite aplicaciones nativas que sean Android o iOS
Electron. Permite crear aplicaciones para escritorio en Mac o Windows
NodeJS. Permite realizar aplicaciones para Back-end / IOT

Web Assembly es un nuevo lenguaje para hacer productos web sin depender de html o css.

## Componentes principales

1. Data que guardamos en memoria
2. Tareas (funciones) que haremos con esa data

## Tipos de Valor

### Primitivos

1. Number. Números.
1, 2, 3.

2. String. Cadenas de carácteres. Se ponen entre comillas "".
"Hola mundo"

3. Boolean. Booleano. true / false. Se limita a veradero o falso.
true
false

4. Empty Values. null / undefined. Son valores reservados para llenar "espacios de valor vacios". Es importante evitar undefined.
null
undefined (un valor que todavía no está definido)

### No Primitivos o Valores tipo Objetos

1. Array. Arreglos de valores (usualmente valores primitivos). Se pone entre corchetes [].
[1,2,3], [1,"hola",false]

2. Objeto. Se pone entre llaves.
{ nombre: "Bryan" }
{ edad: 32 }

La palabra reservada typeof devuelve el tipo de dato al que hace referencia lo que se ponga inmediatamente despues de la typeof y un espacio.

## Variables

Una variable es la representación de un lugar que reservamos en memoria para guardar un valor. El valor puede ser cualquier tipo de dato, inclusive objetos o funciones.

// Declarar una variable
var nombre;

// Inicializar una variable (asignarle un valor)
nombre = "Bryan";

// Llamar a una variable (para usarla)
nombre;

### Scope


## Funciones

// Declarativas
function miFuncion () {
    return 3;
}

// Expresivas (funciones anonimas)
var miFuncion = function() {
    return a + b;
}

## Coerción

1. Coerción implícita. La coerción implícita consiste en la transformación de tipos mediante la ayuda de JavaScript. Esto ocurre en operaciones de diferentes tipos, ya que es un lenguaje débil y dinámicamente tipado.
4 + "7" // 47
4 * "7" // 28
2 + true // 3
false - 3 // -3
!3 // false

2. Coerción explícita. La coerción explícita es la transformación de tipos de datos que controlamos el resultado. Para realizar estas transformaciones utiliza las funciones Number(), String() y Boolean(), para convertir a tipo número, string y lógico, respectivamente.
Number("47") // 47
String(51) // "51"
Boolean(1) // true

## Truty y Falsy

1. Falsy. Un valor falsy es aquel que es falso en un contexto booleano, estos son: 0, "" (string vacío), false, NaN (not a number), undefined o null.
// Coersión explícita
Boolean(0) // false
Boolean("") // false
Boolean(null) // false
Boolean(undefined) // false
Boolean(NaN) // false
Boolean(false) // false

También puedes realizar una coerción implícita con el operador de negación (!), pero solo es para que la conozcas, no es recomendable.

// Coersión implícita (no la uses)
!!0 // false
!!"" // false
!!null // false
!!undefined // false
!!NaN // false
!!false // fals

2. Truty. Un valor truthy es aquel que es verdadero en un contexto booleano, son todos los valores que no sean falsy, que especificamos en la anterior sección.
// Coersión explícita
Boolean(12) // true
Boolean("hola") // true
Boolean(true) // true
Boolean([1, 2, 3]) // true
Boolean(function hola() {}) // true
Boolean({ a: 1, b: 2 }) // true

Cabe recalcar que en JavaScript todo valor que no sea falsy es truthy incluyendo las estructuras vacías de array y objetos.
Boolean([]) // true
Boolean({}) // true

## Operadores de Asignación, Comparación y Aritméticos

### Operadores Aritméticos

// Suma
2 + 3 // 5

// Resta
5 - 3 // 2

// Multiplicación
4 * 2 // 8

// División (Recuerda que no existe la división entre 0. En ese caso JavaScript devolverá el valor Infinity)
6 / 2 // 3

// Residuo
21 % 5 // 1

// Concatenación
"Hola" + "Platzi" // "Hola Platzi"

// Incremento (Si se emplea antes o después, el comportamiento es diferente. Si está previamente, el valor de la variable aumenta y devuelve el valor actual. Si está después, el valor de la variable aumenta, pero devuelve el valor anterior)
variable++
++variable

// Decremento
variable--
--variable

### Operadores de Asignación

// Asignación
var saludo = "Hola Mundo"

// Asignación combinada
var contador = 1
contador = contador + 1
contador = contador + 1
console.log(contador) // 3

Tipo	Operador	Forma larga
Asignación de suma	a += b	a = a + b
Asignación de resta	a -= b	a = a - b
Asignación de multiplicación	a *= b	a = a * b
Asignación de multiplicación	a /= b	a = a / b

### Operadores de Comparación

//Igualdad. Compara dos variables solamente por su valor. Por ejemplo: "3" de tipo string y 3 de tipo número son iguales.
"3" == 3 // true
3 == 3 // true

// Igualdad estricta. Compara dos variables por su valor y tipo de dato. Por ejemplo: "3" de tipo string y 3 de tipo número no son iguales. Solamente 3 y 3, ambos de tipo número son iguales.
"3" === 3 // false
3 === 3 // true

En conclusión, siempre utiliza la comparación por valor y tipo de dato para evitar errores. Los operadores de igualdad son diferentes al operador de asignación (=).

### Operadores de Desigualdad

//Desigualdad. Desigualdad por valor (!=)
"3" != 3 // false
3 != 3 // false

// Desigualdad estricta. Desigualdad por valor y tipo de dato (!==)
"3" !== 3 // true
3 !== 3 // false

## Operadores Mayor y Menor

// Menor que
3 < 5 // true

// Mayor que
3 > 5 // false

// Mayor o igual a que
3 >= 3 // true
3 >= 5 // false

// Menor o igual a que
3 <= 3 // true
3 <= 5 // true

## Operadores Lógicos

// Operador de Disyunción o AND. Devuelve verdadero, si y solo si ambas expresiones son verdadero. Se lee de la siguiente manera: “La expresión 1 es verdadero Y la expresión 2 es verdadero, entonces es verdadero”.

var a = 15
var b = 5

(a >= 10) && (a <= 20) // true
(b >= 10) && (b <= 20) // false

// Operador de unión u OR (||). Devuelve verdadero, si y solo si, alguna expresión es verdadero. Se lee de la siguiente manera: “La expresión 1 es verdadero O la expresión 2 es verdadero, entonces es verdadero”.

var a = 15
var b = 5

(a <= 10) || (a >= 20) // false
(b <= 10) || (b >= 20) // true

// Operador de negación o NOT (!). Devuelve el valor lógico contrario a la expresión. Se lee de la siguiente manera: “La expresión es verdadero, entonces es falso”.

var a = 5
!(a < 0) // true

## Condicionales

### If, Else, else if

Los condicionales son estructuras de control que te permiten evaluar diferentes expresiones y realizar determinadas acciones en JavasScript.

if (edad >= 18){
    console.log("Puedes conducir")
} else {
    console.log("No puedes conducir")
}

Cómo anidar condicionales al programar

if (condicion1){
   // Bloque 1
} else if (condicion2){
    // Bloque 2
} else if (condicion3){
   // Bloque 3
} else {
    // Bloque else
}

#### Operador Ternario

El operador ternario consiste en evaluar si una expresión es verdadera o falsa. Parecido a un condicional, pero en una línea de código. Esto sirve para evaluar una condición de manera rápida. La estructura que sigue es la siguiente y se lee como: "La condición es verdadera (?), si es así ejecuta el “Bloque verdadero”, caso contrario (:), ejecuta el “Bloque falso”.

condicion ? Bloque verdadero : Bloque falso

function esPar(numero){
    return numero % 2 === 0 ? "Es par" : "No es par"
}
esPar(2) // "Es par"
esPar(3) // "No es par"

### Switch

La **estructura switch es otra manera de evaluar condiciones, la diferencia con if es que las condiciones deben ser iguales a un caso o algo específico.

switch (expresion) {
  case 1: {
    // Bloque 1
    break
  }
  case 2: {
   // Bloque 2
    break
  }
  default: {
    // Bloque por defecto
  }
}

Ejemplo. Semáforo

function semaforo(color) {
  switch (color) {
    case "verde": {
      console.log("¡Sigue!")
      break
    }
    case "amarillo": {
      console.log("¡Detente!")
      break
    }
    case "rojo": {
      console.log("¡No puedes avanzar!")
      break
    }
    default: {
      console.log("¡No reconozco ese color! :(")
    }
  }
}

semaforo("verde") //'¡Sigue!'

Deberías utilizar switch cuando tengas una gran cantidad de casos, que con el condicional if produciría más cantidad de código. El problema con switch es que no es muy utilizado y todo se resuelve con if. Sin embargo, conocer esta estructura te puede permitir escribir código más legible en ciertos casos.

## Arreglos

Un array es una estructura de datos que permite almacenar una serie de datos localizados por índices y separados por comas.

El índice es la forma en que accedemos a los elementos de los arrays. En JavaScript, los índices empiezan desde 0, es decir, la primera posición es el índice 0. Un array se inicia mediante la sintaxis de corchetes [] y es tipo de dato objeto.

array[índice]

Para saber la cantidad de elementos de un array se utiliza la propiedad length.

var array = [1,2,3,4]
var longitud = array.length
console.log(longitud) // 4

Para acceder a un elemento del array, únicamente podrás utilizar los índices desde el 0 hasta array.length -1. Si se accede a un índice que no existe, devolverá undefined.

var nombres = ["Andres", "Ramiro", "Silvia"]

nombres[0] // "Andres"
nombres[1] // "Ramiro"
nombres[2] // "Silvia"
nombres[3] // undefined

#### Método Push

El método push agrega uno o varios elementos al final del array original. El método recibe como argumento los valores a agregar. Retorna el número de elementos del array mutado.

var array = [1,2,3]
array.push(4,5)
console.log(array) // [ 1, 2, 3, 4, 5 ]

#### Método Unshift

El método unshift agrega uno o varios elementos al inicio del array original. El método recibe como argumento los valores a agregar. Retorna el número de elementos del array mutado.

var array = [3,4,5]
array.unshift(1,2)
console.log(array) // [ 1, 2, 3, 4, 5 ]

#### Método Pop

El método pop extrae el elemento del final del array original.

var array = [1,2,3,4]
var lastElement = array.pop()
console.log(lastElement) // 4
console.log(array) // [ 1, 2, 3 ]

#### Método Shift

El método shift extrae el elemento del inicio del array original.

var array = [1,2,3,4]
var firstElement = array.shift()
console.log(firstElement) // 1
console.log(array) // [ 2, 3, 4 ]

#### Método IndexOf

El método indexOf muestra el índice del elemento especificado como argumento.

var array = [1,2,3,4]
var index = array.indexOf(2)
console.log(index) // 1

Si el elemento no se encuentra en el array, el método devuelve el valor -1.

## Loops

### For y For of

Un bucle (loop) o ciclo repetitivo es una estructura de control que te permite realizar una o varias instrucciones mientras una condición sea verdadera.

for (condición) {
    // Bloque de código
}

La condición consta de tres partes:

Inicio: se debe inicializar una variable que será evaluada en la expresión a comparar. Esta variable puede ser declarada dentro o fuera de la condición.
Comparación: es una expresión que debe cumplir la variable inicial, cuando no se cumpla, el ciclo termina.
Pasos: son los intervalos que cambiará la variable inicial, mientras cumpla con la expresión de comparación.
Cada una de las partes debe estar separada por un punto y coma ( ;)

for (var num = 1; num <= 10; num++) {
  console.log(i)
}

#### For Of

El ciclo for ... of es una variación del ciclo for que se utiliza para recorrer los valores de los elementos de un array.

for ( var elemento of array){
    //Bloque de código
}

La variable elemento es la referencia a cada uno de los elementos del array. Este puede tener cualquier nombre, por eso se inicia con var, debido a que es una variable como el índice i en el bucle for.

var array = [5, 4, 3, 2, 1]

for (var elemento of array) {
  console.log(elemento) // 5 4 3 2 1
}

Por convención, se escribe la variable elemento en singular con respecto al nombre del array. Por ejemplo, si el nombre del array es datos, el nombre de la variable de cada elemento sería dato, y así sucesivamente.

for (var dato of datos) { ... }
for (var name of names) { ... }
for (var number of numbers) { ... }
for (var el of elements) { ... }

Limitaciones del ciclo for … of
El ciclo for ... of solo accede al valor de cada uno de los elementos del array. Por consiguiente, si quieres cambiar el array original, no podrás, porque necesitas su índice para acceder y cambiar su valor. Sin embargo, esto no es malo, depende del problema que estés afrontando. Una forma de solucionar el anterior problema utilizando for ... of, es creando otro array vacío para llenarlo con los nuevos valores, de esta manera no cambiará el array original.

### While

Para el ciclo while no conocemos la cantidad de veces que la estructura repetirá una o varias instrucciones. Aunque también se puede acoplar para que realice un determinado número de repeticiones.

while (condición) {
    // Bloque de código
    // Cambiar la condición para salir del bucle
}

var numero = 1

while ( numero <= 10 ){
    console.log(numero)
    numero++
}

## Objetos

Un objeto es una estructura de datos que permite almacenar valores mediante propiedad - valor a través de la sintaxis de llaves ({}) y separados por comas.

En las propiedades del objeto es opcional colocar las comillas. En el caso de que haya espacios, es obligatorio.

var objeto = {
    clave1: "valor1",
   "clave 2": "valor2",
}

Excepto por los primitivos y las funciones, todo es un objeto en JavaScript.

En programación orientada a objetos, un objeto es una representación de la realidad, en el cual sus características propias se definen como atributos y sus acciones se definen como métodos.

Por ejemplo, definamos el objeto miAuto. Se coloca entre comillas la propiedad año porque el lenguaje no admite caracteres especiales del español. Aunque en ciertas situaciones si admite.

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    "año": 2020,
    detalle: function () {
        console.log("Es un auto")
    }
}

Las propiedades marca, modelo y "año" son los atributos del objeto miAuto. La propiedad detalle es un método del objeto miAuto.

### Cómo acceder a los valores de un objeto

A diferencia de los arrays, únicamente es necesario saber la propiedad del objeto para acceder a su valor.

Existen tres formas para acceder al valor de un objeto:

Mediante la notación de corchetes
miAuto["marca"] // "Toyota"
miAuto["modelo"] // "Corolla"
miAuto["año"] // 2020
miAuto["detalle"] // ƒ detalle()

Mediante la notación de punto
miAuto.marca // "Toyota"
miAuto.modelo // "Corolla"
miAuto.añó // 2020
miAuto.detalle // ƒ detalle()

Igualmente, para ejecutar el método hay que utilizar los paréntesis.
miAuto.detalle() // "Es un auto"

Los arrays también son objetos

La notación punto te debe de parecer familiar, ya que así usábamos los diferentes atributos y métodos de los arrays, como length o map.

Esto es debido a que los arrays también son objetos en JavaScript. Por esta razón, también podemos utilizar la notación de corchetes, pero no es recomendable.

var array = [1, 2, 3]
array["length"] // 3
var newArray = array["map"](function (el) {
  return el * 2
})
newArray // [2,4,6]

### Cómo añadir propiedades de un objeto

miAuto["color"] = "rojo"
// o 
miAuto.color = "rojo"

console.log(miAuto)
/* {
  marca: 'Toyota',
  modelo: 'Corolla',
  'año': 2020,
  detalle: ƒ detalle(),
  color: 'rojo'  <---- nueva propiedad
} */

### Cómo modificar propiedades de un objeto

miAuto["marca"] = "Ford"
// o 
miAuto.marca = "Ford"

console.log(miAuto)
/* {
  marca: 'Ford', <--- Cambió de valor
  modelo: 'Corolla',
  'año': 2020,
  detalle: ƒ detalle(),
} */

### Cómo eliminar propiedades de un objeto

delete miAuto["marca"]
// o 
delete miAuto.marca

console.log(miAuto)
/* { 
  modelo: 'Corolla', <--- No existe la propiedad marca
  'año': 2020,
  detalle: ƒ detalle(),
} */

### El objeto contexto this

En JavaScript, el objeto contexto this hace referencia a diferentes valores según su contexto de ejecución. Como es un tema complejo de programación orientada a objetos, no profundizaré.

En objetos, el contexto this hace referencia al propio objeto. Esto sirve para acceder a los atributos y métodos propios del objeto.

Por ejemplo, cambiemos la función detalle del objeto miAuto para mostrar un mensaje personalizado.

var otroAuto = {
  // ...
  detalle: function () {
    console.log(`Auto ${this.modelo} del ${this.año}.`)
  },
}

otroAuto.detalle() //'Auto Corolla del 2020.'

## Función Constructora

Existe un problema al momento de construir varios objetos a partir de un código base, los atributos deben cambiar con respecto a la nueva información. Para esto se utiliza una función constructora.

Una función constructora sirve para crear varios objetos a partir de nueva información, esto es recibido argumentos.

### Cómo generar varios objetos a partir de una función constructora

Para crear una función constructora, debemos definir los parámetros correspondientes, que serán los atributos del objeto, que cambiarán con la nueva información mediante argumentos. Estos argumentos deben hacer referencia a cada uno del nuevo objeto, esto mediante el objeto contexto this.

Ten en cuenta que los parámetros de la función son diferentes a los atributos del objeto 😄.

function Auto(brand, model, year){
    this.marca = brand
    this.modelo = model
    this.año = year
    this.detalle = function () {
        console.log(`Auto ${this.modelo} del ${this.año}.`)
    }
}

Si ejecutamos la función Auto mostrará un error, necesitamos especificar que vamos a construir una instancia mediante la palabra reservada new.

var miAuto = new Auto("Toyota", "Corolla", 2020)
/* Auto {
  marca: 'Toyota',
  modelo: 'Corolla',
  'año': 2020,
  detalle: ƒ ()
}*/

De esta manera, puedes crear varios objetos a partir de una función constructora que permita especificar atributos y métodos personalizados.

var otroAuto = new Auto("Tesla", "Model 3", 2021)
var otroAuto2 = new Auto("Suzuki", "K-20", 2019)
var otroAuto3 = new Auto("Ferrari", "Model N", 2018)

## Métodos de recorridos de Arrays

Existen métodos de arrays para recorrerlos, y devolver un valor o un array con nuevos resultados. Entre estos están dos muy importantes: map y filter.

Utilizaremos el siguiente array de objetos para los ejemplos de los métodos:

var articulos = [
  { nombre: "Bici", costo: 3000 },
  { nombre: "TV", costo: 2500 },
  { nombre: "Libro", costo: 320 },
  { nombre: "Celular", costo: 10000 },
  { nombre: "Laptop", costo: 20000 },
  { nombre: "Teclado", costo: 500 },
  { nombre: "Audifonos", costo: 1700 },
]

### Cómo utilizar el método filter

El método filter consiste en crear un nuevo array a partir de los elementos originales filtrados mediante una función (callback) que indica la condición a cumplir y es inmutable. Si la condición se cumple, retorna el elemento completo.

El método filter recibe dos argumentos:

La función que itera y evalúa si cada elemento del array si cumple con la condición especificada (obligatorio).
Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined. Recuerde que this es diferente según el lugar donde sea invocado.

var otherArray = array.filter(function(), thisArg)

La función, que recibe como argumento el método filter, utiliza tres parámetros:

El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
El array que está iterando.

const other = array.filter(function(element, index, array))

### Cómo utilizar el método map

El método map es inmutable y consiste en crear un nuevo array a partir de los elementos originales transformados mediante una función (callback).

El método map recibe dos argumentos:

La función que itera y transforma cada elemento del array (obligatorio).
Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined. Recuerde que this es diferente según el lugar donde sea invocado.
var otherArray = array.map(function(), thisArg)

La función, que recibe como argumento el método map, utiliza tres parámetros opcionales:

El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
El array que está iterando.
var otherArray = array.map(function(element, index, array))

Practiquemos el uso del método map
Utilicemos el array articulos que definimos para crear un nuevo array con el nombre de cada uno de los artículos.

Entonces utilizamos el método map que retorne el nombre de cada artículo. Recuerda que el primer parámetro de la función callback es cada uno de los elementos del array.

var nombreArticulos = articulos.map(function (articulo) {
  return articulo.nombre
})
console.log(nombreArticulos)
/* 
[ 'Bici', 'TV', 'Libro', 'Celular', 'Laptop', 'Teclado', 'Audifonos' ]
*/

### Cómo utilizar el método find

El método find consiste en encontrar el primer elemento de un array que cumpla con la condición especificada en la función (callback). Si ningún elemento cumpla con la condición, retornará undefined.

El método find recibe dos argumentos:

La función que itera y evalúa cada elemento del array hasta encuentre uno que cumpla con la condición especificada (obligatorio).
Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined.
array.find(function(), thisArg)

La función, que recibe como argumento, utiliza tres parámetros opcionales:

El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
El array que está iterando.
array.find(function(element, index, array))

#### Practiquemos el uso del método find

Utilicemos el array articulos que definimos para encontrar algún artículo que su nombre sea Laptop.

Entonces utilizamos el método find que retorne la condición que necesitamos. Recuerda que el primer parámetro de la función callback es cada uno de los elementos del array.

var algunArticulo = articulos.find(function (articulo) {
  return (articulo.nombre = "Laptop")
})
console.log(algunArticulo)
/* 
{ nombre: 'Laptop', costo: 3000 }
*/

### Cómo utilizar el método forEach

El método forEach de los arrays consiste en ejecutar una función (callback) para cada uno de los elementos iterados. Iterar significa repetir una acción varias veces. Este método no retorna ningún valor.

Este método recibe dos argumentos:

La función que itera cada elemento del array (obligatorio).
Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined.

array.forEach(function(), thisArg)

La función, que recibe como argumento el método forEach, utiliza tres parámetros opcionales:

El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
El array que está iterando.

array.forEach(function(element, index, array))

#### Practiquemos el uso del método forEach

Utilicemos el array articulos que definimos para mostrar todos los artículos.

Entonces utilizamos el método forEach y que ejecute la función console.log para cada uno de los elementos. Recuerda que el primer parámetro de la función callback es cada uno de los elementos del array.

articulos.forEach(function (articulo) {
  console.log(articulo)
})
/* 
{ nombre: 'Bici', costo: 3000 }
{ nombre: 'TV', costo: 2500 }
...
{ nombre: 'Audifonos', costo: 1700 }
*/

### Cómo utilizar el método some

El método somees inmutable y consiste retornar un valor lógico verdadero si existe al menos un elemento que cumpla la condición establecida en la función (callback).

El método some recibe dos argumentos:

La función que itera y evalúa cada elemento del array hasta que al menos uno cumpla con la condición especificada (obligatorio).
Un objeto al que puede hacer referencia el contexto this en la función. Si se lo omite, será undefined.
array.some(function(), thisArg)
La función, que recibe como argumento el método some, utiliza tres parámetros:

El valor actual del elemento iterado. Es decir, si es la primera iteración, será el primer elemento, y así sucesivamente.
El índice del elemento iterado. Es decir, si es la primera iteración, será el índice 0, y así sucesivamente.
El array que está iterando.
array.some(function(element, index, array))

#### Practiquemos el uso del método some

Utilicemos el array articulos que definimos para saber si existe al menos un artículo con el costo menor o igual que 700.

Entonces utilizamos el método some que retorne la condición que necesitamos. Recuerda que el primer parámetro de la función callback es cada uno de los elementos del array.

var existeArticulo = articulos.some(function (articulo) {
  return articulo.costo <= 700
})
console.log(existeArticulo) // true