//                                                       1               
function sumaTodosImpares(array) {
  // La funcion llamada 'sumaTodosImpares' recibe como argumento un array de enteros.
  // y debe devolver la suma total entre todos los numeros impares.
  // ej:
  // sumaTodosImpares([1, 5, 2, 9, 6, 4]) devuelve 1 + 5 + 9 = 15

  // Tu código aca: 


    let suma = 0;
    for (const num of array) {
      if (num % 2 !== 0) {
        suma += num;
      }
    }
    return suma;
  }
  const numeros = [5, 2, 9, 4, 7, 6, 3, 1, 8];
  const resultado = sumaTodosImpares(numeros);

  console.log(resultado);



//                                                       2               
function stringMasLarga(str) {
  // La función llamada 'stringMasLarga', recibe como argumento un frase (string) 'str'
  // y debe devolver la palabra (string) más larga que haya en esa frase (Es decir el de mayor cantidad de caracteres)
  // Ej:
  // stringMasLarga('Ayer fui a pasear a una plaza') debe retornar 'pasear'
  // stringMasLarga('Me gusta mucho javascript') debe retornar 'javascript'
  // Tip: podes usar el metodo de String 'split'

  // Tu código aca: 

    var palabras = str.split(" ");
    var palabraMasLarga = "";
  
    for (var i = 0; i < palabras.length; i++) {
      var palabraActual = palabras[i];
      if (palabraActual.length > palabraMasLarga.length) {
        palabraMasLarga = palabraActual;
      }
    }
  
    return palabraMasLarga;
  }
  console.log(stringMasLarga('Ayer fui a pasear a una plaza'));
  console.log(stringMasLarga('Me gusta mucho javascript'));
  


//                                                       3               
function estaOffline(usuarios, nombre) {
  // La funcion llamada "estaOffline" recibe como argumento un array de objetos llamado 'usuarios' y un string llamada 'nombre'.
  // cada objeto tiene una property 'nombre' que es un string y otra llamada 'online' que es un booleano.
  // La función debe retornar true si el usuario se encuentra offline, de lo contrario false.
  // ej:
  // var usuarios = [
  //     {
  //       nombre: 'toni',
  //       online: true
  //     },
  //     {
  //       nombre: 'emi',
  //       online: true
  //     },
  //     {
  //       nombre: 'agus',
  //       online: false
  //     }
  // ];
  // estaOffline(usuarios, 'agus') retorna true
  // estaOffline(usuarios, 'emi') retorna false

  // Tu código aca:

    for (let i = 0; i < usuarios.length; i++) {
      if (usuarios[i].nombre === nombre) {
        return !usuarios[i].online;
      }
    }
    return false;
  }
  var usuarios = [
    {
      nombre: 'emi',
      online: true
    },
    {
      nombre: 'agus',
      online: false
    }
  ];
  console.log(estaOffline(usuarios, 'agus')); 
  console.log(estaOffline(usuarios, 'emi')); 


//                                                       4
function actividadesEnComun(persona1, persona2) {
  // La funcion llamada 'actividadesEnComun' recibe como argumento dos arrays de actividades (strings) llamados 'persona1' y 'persona2'
  // y debe devolver un array de strings con las actividades en comun ( aquellas que se repiten ) entre cada array.
  // ej: persona1 = ['leer', 'comer', 'pasear', 'dormir', 'jugar']
  //     persona2 = ['comer', 'dormir', 'futbol']
  // actividadesEnComun(persona1, persona2) => ['comer', 'dormir']
  // Tip: podes usar ciclos for anidados.
  // 
  // Tu código aca:


  let actividadesComunes = [];
  for (let i = 0; i < persona1.length; i++) {
    for (let j = 0; j < persona2.length; j++) {
      if (persona1[i] === persona2[j]) {
        actividadesComunes.push(persona1[i]);
      }
    }
  }
  return actividadesComunes;
}
const persona1 = ['leer', 'comer', 'pasear', 'dormir', 'jugar'];
const persona2 = ['comer', 'dormir', 'futbol'];
const actividadesComunes = actividadesEnComun(persona1, persona2);

console.log(actividadesComunes);



//                                                       5
function buscaDestruye(arreglo, num) {
  // La funcion 'buscaDestruye' recibe como argumento un array de enteros 'arreglo' y un entero 'num'.
  // Esta funcion tiene que eliminar los numeros del array que coincidan el numero recibido como argumento.
  // La función debe retornar el array sin los números sacados.
  // Ej: buscaDestruye([1, 2, 3, 4], 2) devuelve => [1, 3, 4]
  // Nota: Si el numero se repite mas de una vez, tambien hay que eliminarlo.
  // Ej: buscaDestruye([1, 2, 3, 4, 1], 1) devuelve => [2, 3, 4]
  //
  // Tu código aca:


    const newArray = arreglo.filter((elemento) => elemento !== num);
    return newArray;
  }
  const resultadoo = buscaDestruye([1, 2, 3, 4], 2);
  console.log(resultadoo);
  

//                                                       6
function sumaDeArrays(array) {
  // El array recibido por parametro es un array multidimencional con array's que 
  //contienen elementos de tipo number
  // Tienen que devolver UN SOLO array que solo contenga elementos de tipo number
  // Sumando los elementos de cada array que contenga dos elementos,
  // y devolviendo la suma del mismo
  // OJO: Si el elemento dentro del array que ingresa por prop, 
  //ya es de tipo number, deben devolverlo como tal dentro del array que retornan.
  //let a = [[5, 5], 4, [10, 15], [25, 10]]. 

  let resultado = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) && array[i].length === 2) {
      resultado.push(array[i][0] + array[i][1]);
    } else if (typeof array[i] !== "number") {
      resultado.push(array[i]);
    }
  }
  return resultado;
};
let inputArray = [[5, 5], 4, [10, 15], [25, 10]];
let resultad = sumaDeArrays(inputArray);
console.log(resultad);


//                                                       7
// function mismoValorMismosElementos(numero, divisor)
  // Tiene que devolver un array con la misma cantidad de elementos que el valor del divisor
  // Todos los elementos deben tener el mismo valor
  // OJO: Si el resultado de la division no es un entero, deben devolver false
  

//                                                       8
function map(array, cb) {
  // Crea un nuevo array
  // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
  // El nuevo array debe tener la misma longitud que el array del argumento
  //Tu código: 

    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      newArray.push(cb(array[i]));
    }
    return newArray;
  }
  
  function duplicar(num) {
    return num * 2;
  }
  const numeross = [1, 2, 3, 4, 5];
  const result = map(numeross, duplicar);
  console.log(result);
  


//                                                       9
function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:

    const newArray = array.filter(item => item[0].toLowerCase() === "a");
    return newArray;
  }
  const ejemploArray = ["Manzana", "Naranja", "Agua", "Banana", "Acelga"];
  const resultt = filter(ejemploArray);
  console.log(resultt);
  


//                                                       10
function sumarElTipo(arreglo) {
  // La funcion llamada 'sumarElTipo' recibe un array de strings como argumento
  // que contiene tipos de vehiculos y debe devolver un objeto con la cantidad
  // de veces que se repita cada tipo.
  // El objeto que devuelve tiene como propiedades el nombre de cada vehiculo y su valor es la cantidad de veces que se repite.
  // Ej:
  // sumarElTipo(['auto', 'moto', 'auto']); debe retornar {auto: 2, moto: 1}
  // Tip: podes usar el ciclo for o el metodo de Array 'reduce'

  // Tu código aca: 

    let contador = {};
    for (let i = 0; i < arreglo.length; i++) {
      if (contador[arreglo[i]] === undefined) {
        contador[arreglo[i]] = 1;
      } else {
        contador[arreglo[i]] += 1;
      }
    }
    return contador;
  }
  const arreglo = [1, 2, 3, 2, 1, 3, 1, 1, 2];
  const resulta = sumarElTipo(arreglo);
  console.log(resulta);
  


//                                                       11
function crearGato(nombre, edad) {
  // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
  // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
  // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
  // Devuelve el objeto
  // Tu código: 

    let gato = {};
    gato.nombre = nombre;
    gato.edad = edad;
    gato.meow = function () {
      return "Meow!";
    };
    return gato;
  }
  let miGato = crearGato("Tom", 3);
  console.log(miGato.nombre);
  console.log(miGato.edad);
  console.log(miGato.meow());


//                                                      12
function agregarPropiedad(objeto, property) {
  // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
  // Devuelve el objeto 
  // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "property" (una cadena/string)
  // Tu código: 
  //objeto [property]= null;  

    objeto[property] = null;
    return objeto;
  }
  let miObbjeto = { nombre: "Ejemplo" };
  console.log(miObbjeto);
  agregarPropiedad(miObbjeto, "edad");
  console.log(miObbjeto);


//                                                       13
function invocarMetodo(objeto, metodo) {
  // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
  // Invoca ese método
  // Nada necesita ser devuelto ("returned")
  // Tu código: 

    objeto[metodo]();
  }
  let miObjjeto = {
    saludar: function () {
      console.log("Hola");
    },
  };
  invocarMetodo(miObjjeto, "saludar");


//                                                       14
function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
  // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
  // Multiplica el numeroMisterioso por 5 y devuelve el producto
  // Tu código:

    return objetoMisterioso.numeroMisterioso * 5;
  }
  let miObjetoo = {
    numeroMisterioso: 7,
  };
  let resultadd = multiplicarNumeroDesconocidoPorCinco(miObbjeto);
  console.log(resultadd);


//                                                       15
function eliminarPropiedad(objeto, unaPropiedad) {
  // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad 
  // tip: tenes que usar bracket notation = Notacion de corchetes. 
  // Devuelve el objeto 
  // Tu código:

    const newObjeto = { ...objeto };
    delete newObjeto[unaPropiedad];
    return newObjeto;
  }
  const miObbjet = {
    nombre: "Ejemplo",
    edad: 20,
  };
  const objetoSinPropiedad = eliminarPropiedad(miObbjet, "edad");
  console.log(objetoSinPropiedad);
  
  

//                                                       16
function nuevoUsuario(nombre, email, password) {
  // Crea un nuevo objeto con las propiedades coincidiendo con los 
  // argumentos que se pasan a la función
  // Devuelve el objeto
  // Tu código:

    let usuario = {
      nombre,
      email,
      password,
    };
    return usuario;
  }
  const miUsuarioo = nuevoUsuario("Juan", "juan@example.com", "123456");
  console.log(miUsuarioo);


//                                                       17
function tieneEmail(usuario) {
  // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
  // De lo contratio, devuelve "false"
  // Tu código

    return usuario.email !== undefined && usuario.email !== null;
  }
  const usuario1 = { nombre: "Juan", email: "juan@example.com" };
  console.log(tieneEmail(usuario1));
  const usuario2 = { nombre: "María", email: null };
  console.log(tieneEmail(usuario2));


//                                                       18
function tienePropiedad(objeto, propiedad) {
  // Devuelve "true" si el objeto (parámetro "objeto") tiene una propiedad (key) 
  //cuyo nombre es igual al valor del argumento "propiedad"
  // "propiedad" es un string
  // De lo contrario, devuelve "false"
  // Tu código:

    return objeto.hasOwnProperty(propiedad);
  }
  const miObjet = { nombre: "Ejemplo", edad: 20 };
  console.log(tienePropiedad(miObbjeto, "nombre"));
  console.log(tienePropiedad(miObbjeto, "apellido"));


//                                                       19
function verificarPassword(usuario, password) {
  // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
  // Devuelve "true" si coinciden
  // De lo contrario, devuelve "false"
  // // Tu código: 

    return usuario.password === password;
  }
  const miUssuario = { nombre: "Juan", password: "secreto" };
  console.log(verificarPassword(miUssuario, "secreto"));


//                                                       20
function actualizarPassword(usuario, nuevaPassword) {
  // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevaPassword"
  // Devuelve el objeto
  // Tu código:

    usuario.password = nuevaPassword;
    return usuario;
  }
  const miUsuaario = { nombre: "Juan", password: "secreto" };
  console.log(actualizarPassword(miUsuaario, "nuevaContraseña"));
  console.log(miUsuaario);


//                                                       21
function agregarAmigo(usuario, nuevoAmigo) {
  // "usuario" tiene una propiedad llamada "amigos" que es un array
  // Agrega "nuevoAmigo" al final de ese array
  // Devuelve el objeto "usuario"
  // // Tu código: 

    usuario.amigos.push(nuevoAmigo);
    return usuario;
  }
  const miUsuari = { nombre: "Juan", amigos: ["María", "Pedro"] };
  console.log(agregarAmigo(miUsuari, "Ana"));
  console.log(miUsuari);


//                                                       22
function pasarUsuarioAPremium(usuariosss) {
  // "usuarios" es un array de objetos "usuario"
  // Cada objeto "usuario" tiene la propiedad "esPremium"
  // Define cada propiedad "esPremium" de cada objeto como "true"
  // Devuelve el  array de usuarios
  // Tu código: 

    for (let i = 0; i < usuariosss.length; i++) {
      usuarios[i].esPremium = true;
    }
    return usuariosss;
  }
  const usuariosss = [
    { nombre: "Juan", esPremium: false },
    { nombre: "María", esPremium: false },
    { nombre: "Pedro", esPremium: false },
  ];
  console.log(pasarUsuarioAPremium(usuarios));


//                                                       23
function sumarLikesDeUsuario(usuario) {
  // "usuario" tiene una propiedad llamada "posts" que es un array
  // "posts" es un array de objetos "post"
  // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
  // Suma todos los likes de todos los objetos "post"
  // Devuelve la suma
  // Tu código: 

    let suma = 0;
    for (let i = 0; i < usuario.posts.length; i++) {
      suma += usuario.posts[i].likes;
    }
    return suma;
  }
  const usuario = {
    nombre: "Juan",
    posts: [
      { id: 1, likes: 10 },
      { id: 2, likes: 5 },
      { id: 3, likes: 3 },
    ],
  };
  console.log(sumarLikesDeUsuario(usuario)); 


//                                                       24
function agregarMetodoCalculoDescuento(producto) {
  // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
  // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
  // El método resta el descuento del precio y devuelve el precio con descuento
  // Devuelve el objeto "producto" al final de la función
  // Ejemplo:
  // producto.precio -> 20
  // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
  // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
  // Tu código: 

    producto.calcularPrecioDescuento = function () {
      return this.precio - this.precio * this.porcentajeDeDescuento;
    };
    return producto;
  }
  const miProducto = {
    nombre: "Camiseta",
    precio: 20,
    porcentajeDeDescuento: 0.2,
  };
  agregarMetodoCalculoDescuento(miProducto);
  console.log(miProducto.calcularPrecioDescuento());


//                                                       25
//-------------------------------------------Interacción con el DOM--------------------------------------------------------
// En la página 'index.html' hay un elemento span cuyo texto es 'Aplicación creada por:'.
// Usando querySelector seleccionar dicho span por su id ('createdBy') y luego usando innerHTML
// agregar tu nombre al final del texto actual. Ej: 'Aplicación creada por Franco'
// Tu código acá: 

document.querySelector("#createdBy").innerHTML += " facundo";

//                                                       26

// La función debe realizar lo siguiente:

function createToDoElement(toDo, index) {
  // 1) Crear un elemento 'div' y asignárselo a una variable denominada 'toDoShell'
  var toDoShell = document.createElement('div');
  
  // 2) Asignarle a 'toDoShell' la clase 'toDoShell'
  toDoShell.className = 'toDoShell';
  
  // 3) Crear un elemento 'span' y asignárselo a una variable denominada 'toDoText'
  var toDoText = document.createElement('span');
  
  // 4) Utilizando el objeto toDo pasado como argumento, setear el 'toDoText' innerHTML
  //    asignándole el valor de la propiedad 'description' del objeto ToDo.
  toDoText.innerHTML = toDo.description;
  
  // 5) Asignarle como id del 'toDoText' el valor 'index' recibido como argumento
  toDoText.id = index;
  
  // 6) En función del atributo 'complete' del objeto ToDo recibido como argumento:
  //    - Si es true: asignarle a 'toDoText' la clase 'completeText'
  //    - Si es false: no asignarle ninguna clase
  if (toDo.complete) {
    toDoText.className = 'completeText';
  }
  
  // 7) Agregar 'toDoText' como hijo de 'toDoShell'
  toDoShell.appendChild(toDoText);
  
  // 8) Devolver la variable toDoShell
  return toDoShell;
}


function buildToDo(todo, index) { //todo es un objeto de la clase TODO. //index numerico 
  // Tu código acá:

  // Consigna 3

  // Consigna 4

  // Consigna 5

  // Consigna 6

  // Consigna 7

  // Consigna 8


}

//                                                       27

// La función 'displayToDos' se va a encargar de que se vean los toDo's en pantalla
//  1) Seleccionr el elemento cuyo id es 'toDoContainer' y almacenarlo en una variable denominada 'toDoContainer'
//  2) Setear el innerHTML de 'toDoContainer' como un string vacio ("")
//  3) Llamar a la función previemante creada 'buildToDos' pasándole como argumento el array toDoItems
//  4) Iterar sobre el resultado devuelto por la función 'buildToDos' e ir agregndo cada elemento a 'toDoContainer'
//  5) Al final de este archivo, escribe una línea para hacer el llamado a esta funcion (displayToDos)
//  6) Abrir o en el caso de ya tenerlo abierto, recargar, la página

function displayToDos() {
  // Tu código acá:
  //Paso 1; 
  var toDoContainer = document.getElementById('toDoContainer');
  toDoContainer.innerHTML = "";
  // Paso 2: 
  var toDoItems = ['ToDo 1', 'ToDo 2', 'ToDo 3'];
  var builtToDos = buildToDos(toDoItems);
  // Paso 3;
  for (var i = 0; i < builtToDos.length; i++) {
    toDoContainer.appendChild(builtToDos[i]);
  }
};
  //Paso 4; 
  displayToDos();