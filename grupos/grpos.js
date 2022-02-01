const texto = "Você é muito engraçado! Hehehehehe!!!"

const regex = /(he)+/gi

console.log(texto.match(regex))

const texto2 = 'http://www.site.info www.escola.ninja.br google.com.ag'

const regex2 = /(http:\/\/)?(www\.)\w+.{02,}(\.w{2})?/gi

console.log(texto2.match(regex2))