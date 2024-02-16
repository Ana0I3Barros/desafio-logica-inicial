let resultado = saldo(10,5);
 
 
function saldo(vitorias, derrotas){
return vitorias - derrotas;
}
 
if (resultado > 10){
console.log("Ferro" + resultado);
 
} else if ( resultado >= 11 && <= 20){
  console.log(O Herói tem de saldo de " + resultado + " está no nível de Bronze);
} else if (resultado >= 21 && <= 50){
  console.log(O Herói tem de saldo de " + resultado + " está no nível de Prata);
} else if (resultado >= 51 && <= 80){
  console.log(O Herói tem de saldo de " + resultado + " está no nível de Ouro);
} else if (resultado >= 81 && <= 90){
  console.log(O Herói tem de saldo de " + resultado + " está no nível de Diamante);
} else if (resultado >= 91 && <= 100){
  console.log(O Herói tem de saldo de " + resultado + " está no nível de Lendário);
} else {
  console.log(O Herói tem de saldo de " + resultado + " está no nível de Imortal);
}
