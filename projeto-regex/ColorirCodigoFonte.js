const aplicarCor = (txt, reg, cor) =>
    txt.replace(reg, `<span style="color: #${cor}"><b>$1</b></span>`)

const files = require('./receitas/files')

const texto = files.read('codigoFonte.html')


const codeRegex = /<code>[\s\S]*<\/code>/gi

let codigo = texto.match(codeRegex)[0]


//strings...

codigo = aplicarCor(codigo, /(\".*\")/gi, 'ce9178')

//palavras reservadas

codigo = aplicarCor(codigo, /\b(packger|public|class|static|if|else)\b/gi, 'd857cf')


//tipos...

codigo = aplicarCor(codigo, /\b(void|int)\b/gi, '1385e2')

//comentários de multiplas linhas...
codigo = aplicarCor(codigo, /(\/\*[\s\S]*\*\/)/gi, '267703')


//comentario de uma linha

codigo = aplicarCor(codigo, /(\/\/(\s\S).*?\n)/gi, '267703')


const conteudoFinal = texto.replace(codeRegex, codigo)

files.write('codigoFonte.html', conteudoFinal)