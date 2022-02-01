const texto ='Dia diatonico diafragma media wikipedia bom_dia melodia radial'

console.log(texto.match(/\bdia\w+/gi))
console.log(texto.match(/\w+dia\b/gi))
console.log(texto.match(/\w+dia+\w/gi))
console.log(texto.match(/\bdia+\b/gi))

//borda é mão \w, que é [Â-Za-z0-9]... temos problemas com acentos!

const texto2 = 'dia diatônico diafragma, média wikipédia bom-dia melodia radial'
console.log(texto2.match(/\bdia\b/gi))
console.log(texto2.match(/(\S*)?dia(\S*)?/gi)) //a virgula entra
console.log(texto2.match(/([\wÁ-ú-]*)?dia([\wÁ-ú-]*)?/gi))

