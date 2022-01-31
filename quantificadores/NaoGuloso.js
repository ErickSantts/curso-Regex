const texto = '<div>Conteudo 01</div><div>Conteudo 02</div>'

//quantificadores são gullosos (greedy)...

console.log(texto.match(/<div>.+<\/div>/g))
console.log(texto.match(/<div>.*<\/div>/g))
console.log(texto.match(/<div>.{0,100}<\/div>/g))


//quantificadores NÃO gullosos (LAZY)...

console.log(texto.match(/<div>.+?<\/div>/g))
console.log(texto.match(/<div>.*?<\/div>/g))
console.log(texto.match(/<div>.{0,100}?<\/div>/g))