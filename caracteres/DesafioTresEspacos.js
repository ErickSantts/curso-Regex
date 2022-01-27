const texto = 'a   b'
console.log("texto.match(/a\s+b/g) = ",texto.match(/a\s+b/g))  //minha solução

console.log("texto.match(/a   b/) = ", texto.match(/a   b/))
console.log("texto.match(/a\s\s\sb/) = ", texto.match(/a\s\s\sb/))

//nofuturo

console.log("texto.match(/a\s+b/) = ", texto.match(/a\s+b/))
console.log("texto.match(/a {3}b/) = ", texto.match(/a {3}b/))
console.log("texto.match(/a\s{3}b/) = ", texto.match(/a\s{3}b/))