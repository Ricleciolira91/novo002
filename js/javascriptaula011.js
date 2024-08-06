

// MATRIZES

// Array de Arrays
// 

// let listaElementos = Array()

// listaElementos['Frutas'] = ['Banana', 'Manga', 'Abacaxi', 'Maracujá']
// listaElementos['Pessoas'] = ['Rick', 'Rai','Vevé', 'Ricardo', 'Rick2']

// listaElementos['Frutas'].push('Laranjas')
// listaElementos['Frutas'].unshift('Uvas')

// console.log(listaElementos)
// document.write(listaElementos['Pessoas'][2])
// document.write('<br>')
// document.write(listaElementos['Frutas'][3])


// - Exercício
// Faça um programa para calcular a média de todos os números de um Array



function calcularmediaArray (array)
{let numeros = array.length
 let soma = 0
 for(var i = 0; i < numeros; i++)
{soma+= array[i]}

 return soma / numeros}

 let ar = [5, 3, 9, 15, 90]
 let media = calcularmediaArray(ar)
 console.log('O calculo da média é: ', media)













