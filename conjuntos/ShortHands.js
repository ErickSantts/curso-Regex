const texto = `1,2,3,4,5,6,a.b c!d?e	-
f_g`

console.log(texto.match(/\d/g)) //numeros [0-9]
console.log(texto.match(/\D/g))	// não numeros [^0-9]

console.log(texto.match(/\w/g)) // caracteres [a-zA-Z0-9]
console.log(texto.match(/\W/g)) // n'ao caracteres [^a-zA-Z0-9]

console.log(texto.match(/\s/g)) // espaco [\t\n\r\f]
console.log(texto.match(/\S/g)) // não espaco [^ \t\n\r\f]

