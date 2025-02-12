let nome2 = "Luiz";
nome = 42; // Funciona, porém pode trazer problemas para o código
console.log(nome);

function saudacao(nome){
    console.log("Olá, " + nome);
}
 saudacao("Luiz");

 saudacao(42);

 function somar1(a,b){
    return(a+b);
 }

 console.log(somar(10,20));
 console.log(somar("10",20));
