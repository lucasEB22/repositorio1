console.log("Boca Juniors")

/* const notas = [7, 5, 10]
const notas2 = [5, 8, 7]
const calcularPromedio = (notasAPromediar) => { // Cómo se define una función
    let acumulador = 0
    for(let i = 0; i < notasAPromediar.length; i = i + 1){
        acumulador = acumulador + notasAPromediar[i]
    }
    console.log("Su promedio es de: " + acumulador/notasAPromediar.length)
}
calcularPromedio(notas)
calcularPromedio(notas2) */

/* let consulta = prompt()
if(consulta == null){
    console.log("el usuario toco cancelar")
}
else if(consulta == ""){
    console.log("toco aceptar pero no escribio nada")
}
else if( !isNaN(consulta)){
    console.log("Es un numero ")
}else{
    console.log("Es una palabra")
}
 */

/* for(let i = 1; i <= 10; i = i + 1){
    if(i % 2 == 0){
        console.log(i + " es par")
    }
} */

/*16. hacer un programa donde se ingresan un conjunto de 5 alturas de personas por teclado. Mostrar la altura promedio de las personas */
/* let acumulador = 0
for(let i = 1; i <= 5; i = i + 1){
    acumulador = acumulador + Number(prompt("Ingrese una altura"))
}
console.log("El resultado del promedio de las 5 alturas es: " + (acumulador/5)) */

/* 29)Definí una función puedeVerPelicula que reciba como argumentos un número edad y un booleano tieneAutorizacion, y retorne true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.

datos con los cuales deben ser enviados a la función

puedeVerPelicula(12, false)
false
 puedeVerPelicula(12, true)
true
 puedeVerPelicula(16, false)
true
 puedeVerPelicula(18, true)
true */

/* const puedeVerPelicula = (edad, tieneAutorizacion) => {
    return edad >= 15 || tieneAutorizacion
} */
/* puedeVerPelicula(12, false)
puedeVerPelicula(12, true)
puedeVerPelicula(16, false)
puedeVerPelicula(18, true) */

// Operadores logicos || = O, && = Y
let estaSoleado = true
let tengoPlata = true
//Voy al parque si esta soleado o tengo dinero 
/* if(estaSoleado || tengoPlata){
    console.log("voy al parque")
} */

//Voy al parque si esta soleado y tengo dinero 
/* if(estaSoleado && tengoPlata){
    console.log("voy al parque")
}                    Con Windows y punto te abre el menú de iconos*/


/* 
let contador = 0
contador++
contador++ */

/* let contador = 20
contador += 20 */

const nombres = ["Maria", "Pepe", "Lucas"]
/* for(let i = 0; i < nombres.length; i++){               //FORMA PRIMITIVA
    console.log(nombres[i])
}
 */
// For ...of
for(let nombre of nombres){
    console.log(nombre)
}
