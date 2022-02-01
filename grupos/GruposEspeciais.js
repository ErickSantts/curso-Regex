const texto = 'João é calmo, mas no transito fica nervoso.'

console.log(texto.match(/[\wÀ-ú]+/g))


//positive lookahead
console.log(texto.match(/[\wÀ-ú]+(?=,)/g))
console.log(texto.match(/[\wÀ-ú]+(?=\.)/g))
console.log(texto.match(/[\wÀ-ú]+(?=, mas)/g))


//Negative lookahead
console.log(texto.match(/[\wÀ-ú]+\b(?!,)/g))
console.log(texto.match(/[\wÀ-ú]+[\s|\.](?!,)/g))