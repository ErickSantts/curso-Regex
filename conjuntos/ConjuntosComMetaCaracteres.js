const texto = '.$+*?-'


console.log(texto.match(/[+.?*$]/g)) //nao precisa de escape dentro do conjunto
console.log(texto.match(/[$-?]/g)) //isso é um intervalo (range)

//não é um intervalo (range)
console.log(texto.match(/[$\-?]/g))
console.log(texto.match(/[-?]/g))