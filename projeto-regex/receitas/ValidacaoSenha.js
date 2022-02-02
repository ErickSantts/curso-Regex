const senha = `
123456
cod3r
QUASE123!
#0pA1
#essaSenhaEGrande1234


#0pA1?
Foi123!
`

const regex1 = /^.{6,20}$/gm
const regex2 = /^(?=.*[A-Z]).{6,20}$/gm
const regex3 = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%!^&*]).{6,20}$/gm

console.log(senha.match(regex1))
console.log(senha.match(regex2))
console.log(senha.match(regex3))