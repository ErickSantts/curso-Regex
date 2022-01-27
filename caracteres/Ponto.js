const texto = 'Bom\ndia'

console.log(texto.match(/./gi))

const texto2 = 'Bom\tdia'

console.log(texto2.match(/./gi))
console.log(texto2.match(/.../gi))
console.log(texto2.match(/..../gi)) //o ponto não engloba o /n

