/*Ejercicio 1
Declara una función que acepte una palabra como parámetro y la devuelva con todos sus caracteres en mayúsculas y separados por espacios. Ejemplo: Para "Ana" devolverá "A N A".*/
/*INICIO 
    declarar un funcion que acepte un parametro 
    leer parametro
        (validar que sea texto
            si no es texto leer parametro nuevamente 
            si es texto continuar con la funcion )
    recorrer parametro nombre 
        escribir caracteres en mayuscula (metodo toUpperCase )
        convertir la palabra en en array
        escribir espacios entre las letras (metodo join)
        convetrtir array en string nueveamente 
    pintar parametro en consola 
FIN*
/*
    let nombre = prompt("Por favor ingresa tu nombre.");
     if {(isNan (mayusEspacio()}
}
console.log(mayusEspacio())*/

function ejercicio1 (nombre) {

    let hacerArray = nombre.split("");
    let separar = hacerArray.join(" "); 
    let mayuscula = separar.toUpperCase();

return separar.toUpperCase();
}
console.log(ejercicio1("ana"));


/*Ejercicio 2
Declara una función que acepte un nombre como parámetro y devuelva el número de palabras que tiene el nombre. Ejemplo: Para "Antonio Alberto Jesús" devolverá 3.*/
/*INICIO 
    declarar un funcion 
    la función tiene que recibir un parametro nombre 
    leer parametro  
    recorrer parametro nombre (for ... of )
        separar las palabras (separar teniendo en cuanta los espacios)
        contar cada palabra (con metodo split)
    pintar parametro en consola (tiene que devolver un numero = cantidad de palabras)
FIN*/

function numeroPalabras () {
    for (const palabras of numeroPalabras) {
  console.log(palabras);
}
return numeroPalabras(Antonio Alberto Jesús);
}

/*console.log(numeroPalabras("Antonio Alberto Jesús"));*/

/*Ejercicio 3:
Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase.*/
/*INICIO 
    declarar un funcion 
    la funcion tiene que recibir un string (frase)
    leer el string 
    transfromar el string en array 
    recorrer array 
        generar forEach (utilizando al funcion callback)
        especificar un parametro (letra) para contar las veces que aparece 
        contar con metodo filter
    pintar parametro en consola (tiene que devolver un numero)
FIN*
*/
