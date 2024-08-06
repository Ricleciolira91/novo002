// LISTA DE EXERCÍCIO

// QUESTÃO 01

//var valor1 = prompt('Informe o Primeiro Valor')
//var valor2 = prompt('Informe o Segundo Valor')
//var valor3 = prompt('Informe o Terceiro Valor')
//var media = (parseInt(valor1) + parseInt(valor2) + parseInt(valor3) / 3)

//alert(' O valor da média é :' + media)



// QUESTÃO 02

//var valor1 = prompt('Informe a Primeira Nota')
//var valor2 = prompt('Informe a Segunda Nota')
//var valor3 = prompt('Informe a Terceira Nota')
//var media = ((parseInt(valor1) + parseInt(valor2) + parseInt(valor3)) / 3)


//alert(' A Primeira avaliação foi : ' + valor1)
//alert(' A Segunda avaliação foi : ' + valor2)
//alert(' A Terceira avaliação foi : ' + valor3)
//alert(' A Média das avaliações é : ' + media)


// QUESTÃO 03

//var nome = prompt('Informe o seu nome')
//var valor1 = prompt('Informe sua Primeira Nota')
//var valor2 = prompt('Informe sua Segunda Nota')
//var media = (parseInt(valor1) + parseInt(valor2)) / 2

//alert( nome + ', sua média total é : ' + media)


// ---------------------- QUESTÃO 04


//let antigo = prompt('Informe o seu antigo salário')
//let novo = prompt('Informe o seu novo salário')

//let porcentagem = ((novo - antigo) / novo) * 100


//alert ('seu aumento foi de: ' + porcentagem +'%')


// ----------------------- QUESTÃO 05

let km = prompt('Insira a quilometragem inicial');
let km2 = prompt('Insira a quilometragem final');

let kmfinal = km2 - km
let preçocombustivel = 5.50
let valorgasto = parseInt(kmfinal) * parseInt(preçocombustivel)


document.write('Quilometragem Inicial = ' + km)
document.write("<br>")

document.write('Quilometragem Final = ' + km2)
document.write("<br>")

document.write('Quilometragem Percorrida = ' + kmfinal)
document.write("<br>")

document.write('Valor gasto = ' + valorgasto + ' R$')
document.write("<br>")


