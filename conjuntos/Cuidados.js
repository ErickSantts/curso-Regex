const texto = 'ABC [abc] a-c 1234'

console.log(texto.match(/[a-c]/g))
console.log(texto.match(/a-c/g)) //não
console.log(texto.match(/[A-z]/g))


// tem que respeitar a ordem 
//errado console.log(text.match(/[a-Z]/g))
//errado console.log(text.match(/[4-1]/g))
//certo console.log(text.match(/[Z-a]/g))