let soma = calculadora(5 ,10 ,"+");
let subtracao = calculadora(5 ,10 ,"-");
let divisao = calculadora(5 ,10 ,"*");
let multiplicacao= calculadora(5 ,10 ,"/");
let teste = calculadora(5 ,0 ,"iababa");
let divisao1 = calculadora(1,0,"/")
console.log(soma)
console.log(subtracao)
console.log(divisao)
console.log(multiplicacao)
console.log(teste)
console.log(divisao1)




function calculadora(a,b,operacao){

switch(operacao){
  case "+":
  return a + b;

  case "-":
  return a - b;

  case "*":
  return a * b;
    
  case "/":
  if (b===0) {
   return "não é possivel fazer esta operação";
  }
  else {
    a/b
  }
  default:
    return"Operação não permitida"
}
}