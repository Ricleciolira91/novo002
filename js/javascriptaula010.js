// JAVA SCRIPT - ARRAYS




// Lista
// estruturas que servem para guardar dados, e organizá-los
// Seu objetivo é ser um espaço fixo na memória do computador que armazena elementos.
// Esses elementos podem ser acessados por um tipo de indicação, que chamamos de índice.

//  Serve para guardar elementos em um espaço de memória (variáveis).


// podem ter diversas dimensões
// Unidimensionais são normalmente conhecidos por VETORES;

// Enquanto os arranjos com mais de uma dimensão são chamados de MATRIZES;

// 



let arrayvazio = []
let numeros = [72, 75, 79, 79, 81, 81]
let nomes = ['Rick', 'Verônica', 'Raimundo', 'Ric']
let tiposdiferentes = ['Verônica', '12', 'Rick', true]


console.log(numeros[0])
console.log(nomes[1])
console.log(tiposdiferentes[2])



let listafrutas = ['Banana', 'Laranja', 'Limão', 'Manga', 'Abacaxi']
let listavalores = [ 5,12,10,11,9,4,8]
listafrutas.push('Laranja') // Empurra o que foi escolhido para o final da lista
listafrutas.unshift('Maracujá') // Adiciona a lista
listafrutas.pop('Abacaxi') // Remove no final da lista
listafrutas.shift('Banana') // Remove no início da lista


let addfrutas = prompt("Insira uma fruta")
console.log(listafrutas) 


console.log(listafrutas.indexOf('Limão'))
console.log(listavalores.sort()) // ordena em ordem alfabética, apenas o que for string

console.log(listavalores.sort(ordenarvalores))

function ordenarvalores(a, b)
{ return b - a}



// Faça um programa para calcular a soma dos números de um array


// var total = 0;
// var numeros = [25,8,2,10,5];


// for ( var i = 0; i < numeros.length; i++ )
//     {total += numeros[i]}

// console.log(total)




