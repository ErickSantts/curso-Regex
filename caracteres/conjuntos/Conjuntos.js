const texto="1,2,3,4,5,6,q.b c!d?e[f"

//para definir uma classe (ou conjunto) de caracteres usa []


const regexPares = /[02468]/g //conjunto
const regexPares2 = /02468/g //literal

console.log(texto.match(regexPares))
console.log(texto.match(regexPares2))


const texto2 = 'João não vai passear de moto.'

const regexComESemAcento = /n[aã]/g
console.log(texto2.match(regexComESemAcento))