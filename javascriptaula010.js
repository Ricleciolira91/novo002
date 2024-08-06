


// JAVASCRIPT - Recursividade

// - ato de uma função chamar a sí mesma.
// chamar até que cumpra uma função



// function fatorial(fat)

// { if(fat == 0){ 
//     return 1}
//   else {
//     return fat * fatorial(fat - 1)}}


// console.log(fatorial(parseInt(prompt("Insira um número inteiro"))))



// - EXERCÍCIO

// - 06 - Escreva uma função que mostre na tela um número fornecido pelo usuário, porém invertido.
// - Por exemplo, o usuário fornece o número 875 e a função mostra na tela o número 578 (Não está completa)


// let num1 = prompt ("Insira o Primeiro número")
// let num2 = prompt ("Insira o Segundo número")
// let num3 = prompt ("Insira o Terceiro número")


// function inverter (num1 , num2 , num3)

// { let inv = (num3, num2, num1)
//  return inv

// }

// console.log(inverter("num + num2 + num1"))






// - 07 - Escreva uma função que permita contar o número de vogais contidas em uma string fornecida pelo usuário.
// - Por exemplo: o usuário informa a string "Beterraba", e a função retorna o número 4 (Há 4 vogais nessa palavra)
// - Obs: Ignore vogais acentuadas, para simplificar.






// - 08 - Escreva uma função que informe o retorno de um investimento (montante) com base nos valores do capital inicial, 
// - tempo em meses e taxa de juros mensal, fornecidos pelo usuário.

// Use a fórmula: M = C * (1+i)^t

// Onde:
// C = Capital Inicial investido
// i = Taxa de juros, em percentual
// t = Tempo do investimento em meses


// - Exiba o resultado com duas casas decimais


// - Incompleto - Verificar /////////////////////////////////////

let capitalinicial = parseFloat(prompt("Insira o capital inicial"))
let taxadejuros = parseFloat(prompt("Insira a taxa de juros"))
let tempomeses = parseFloat(prompt("Insira o tempo em meses"))


function calc (capitalinicial,taxadejuros,tempomeses)

{let calcularvalor = ( capitalinicial * (( 1 + taxadejuros) * tempomeses))
return calcularvalor}

console.log(calc(capitalinicial,taxadejuros,tempomeses))




