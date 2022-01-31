const cpf = `CPF dos aprovados : 
015.660.072-57
029.660.072-57
029.660.0342-57
029.660072-57
029.660.071-33`
const telefone = `Numero dos aprovados : 
(95) 99156-0814
99156-0814
92 99156-0814
`
const email = `e- mails: _dsantoserick@gmail.com
edu_ardo@htomail.com 
ericksantosBatista1234@gmail.com.br`


const regexCpf = /[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}/g
const regexTelefone = /\(?[0-9]{0,2}\)?\s?[0-9]{4,5}-[0-9]{4}/g
const regexEmail = /[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-zA-Z0-9_]+.[a-zA-Z0-9_]*/gi
const regexEmail2 = /\w+@\w+\.\w{2,4}\.?\w{0,2}/gi
const regexEmail3 = /\w+@\w+\.\w{2,4}(\.?\w{0,2})?/gi

console.log(cpf.match(regexCpf))
console.log(telefone.match(regexTelefone))
console.log(email.match(regexEmail3))