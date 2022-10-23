/* Ejercicio de condicionales

Crea el juego de piedra, papel o tijera. Te dejo una pequeña ayuda para este reto:

Genera las variables correspondientes
Produce los condicionales que comparen tu resultado con el de la máquina u otra persona.
Encapsula los condicionales en una función que reciba las variables, compararlas y retornar un valor.

*/

obj1 = "piedra";
obj2 = "papel";
obj3 = "tijeras";

function juego(player1, player2){
    if(player1=="piedra"){
        if(player2==="piedra") return "nadie, empate";
        else if(player2==="papel") return player2;
        else if(player2==="tijeras") return player1;
    }
    if(player1=="papel"){
        if(player2==="papel") return "nadie, empate";
        else if(player2==="tijeras") return player2;
        else if(player2==="piedra") return player1;
    }
    if(player1=="tijeras"){
        if(player2==="tijeras") return "nadie, empate";
        else if(player2==="piedra") return player2;
        else if(player2==="papel") return player1;
    }
}

console.log('El ganador es '+juego(obj2,obj3));

/* Ejercicio Filter
Devolver los productos cuyo costo sea menor o igual a 500
*/

var articulos = [
    {
      nombre: "Bici",
      costo: 3000
    },
    {
      nombre: "TV",
      costo: 2500
    },
    {
      nombre: "Libro",
      costo: 320
    },
    {
      nombre: "Celular",
      costo: 10000
    },
    {
      nombre: "Laptop",
      costo: 20000
    },
    {
      nombre: "Teclado",
      costo: 500
    },
    {
      nombre: "Audifonos",
      costo: 1700
    }
  ]
  
  var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
  });
  
  console.log(articulosFiltrados);

  