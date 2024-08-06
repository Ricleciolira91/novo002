// Java Script - Exceções 23/07

// Forma de feedback para saber o que fazer quandoc air num situação de erro.


// * Erros de sintaxe (muitas vezes de digitação);
// * Recursos inexistentes (diferentes browsers);
// * Entrada de dados errada;
// * E muitas outras coisas misteriosas do além;


// try, tenta executar o código. 
// catch, captura o erro no código


// try 
// {document.writ('Sem erro')}

// catch(erro)
// {document.write("Teve um erro pra chegar aqui. Socorro!")}



// try
// {document.writeeeeeee('sem erro')}

// catch (erro)
// { document.write("Teve um erro até chegar aqui")
//   console.log("O erro foi esse: " + erro.mensage) 
//   console.log("O erro foi esse: " + erro.console) 
//      }

// finally
// { document.write("<br>" + "Aqui finaliza o tratamento de exceções")}






// function verificar() { 
//     try {
    
//  let x=document.getElementById("valor").value;
//     if (x =="") throw new TypeError( "Campo Vazio");
//     if(isNaN(x)) throw new TypeError ( "Não é um número Válido");
//     if (x > 10) throw new RangeError ( "Alto demais")
//     if (x < 5) throw new RangeError ( "Baixo demais")
//     document.getElementById("msg").innerHTML = "Número aceito"; }

//     catch(err)
//     {document.getElementById("msg").innerHTML = "Erro " + err + ".";}

// finally
// {document.getElementById("msgfinal").innerHTML = "Obrigado pela Preferência"; }}