//Strin (cadena de carateres)
let str_1="Hola soy un texto con comillas";
let str_2=`Hola soy un texto con comillas simples`;
let str_3="Comillas dentro de las \"comillas\"";
let str_4=`comillas dentro  de comillas simple "Ejemplo"`
let str_5="comillas dentro de comillas `Ejemplo`"

console.log(str_1)
console.log(str_2)
console.log(str_3)
console.log(str_4)
console.log(str_5)

//comillas invertidas (backticks) Alt gr + { x2 ``
///para meter una variable dentro de una variable
let str_6=`comillas invertidas o backiticks`;
console.log(str_6);

let nombre ="Richie"
let saludar= `Hola, ${nombre} bienvenido`;
console.log(saludar);

let plantilla=`
<html>
<h3>pagina web de ${nombre}</h3>
<p>Esto es un parrafo</p>
</html>
`
console.log(plantilla)