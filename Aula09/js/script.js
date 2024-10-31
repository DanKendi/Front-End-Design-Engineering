function mostrarMensagem(){
    alert("Olá Mundo!")
}

// tipos de Variáveis: let, const e var

let nome = "João"; //tipo String
let idade = 25; //tipo int
let isAluno = true; //tipo boolean
let altura = 1.75; //tipo float/double

const pessoa = {nome: "Ana", idade: 22}; //objeto

let aluno = {nome: "Luiz", idade: 25}; //objeto

console.log("let aluno:", typeof aluno);

console.log("const pessoa:",typeof pessoa);

let contador = 0;
function incrementarContador(){

    contador++;

    document.getElementById("contador").textContent = contador;
}

function mudarCor(){
    document.body.style.backgroundColor = "#333";
}

function mostrarHora(){
    const agora = new Date();
    const horas = agora.getHours().toString().padStart(2, '0');
    const minutos = agora.getMinutes().toString().padStart(2, '0');
    const segundos = agora.getSeconds().toString().padStart(2, '0');
    document.getElementById("hora").textContent = `${horas}:${minutos}:${segundos}`;
}

let intervalo;
let contagem =10;

intervalo = setInterval(
    function() {
        document.getElementById("contadorRegressivo").textContent = contagem;
        contagem--;

        if(contagem < 0){
            clearInterval(intervalo);
            document.getElementById("contadorRegressivo").textContent = "Tempo esgotado!";
        }
    }
, 1000);
