let nome: string = "Luiz"; //Tipando a variável "nome" como string

// function saudacao(nome){
//     console.log("Olá, " + nome);
// }

// saudacao("Luiz");

// saudacao(42);

let a:number = 0;
let b:number = 0;

function somar(a:number, b:number):number{
    return (a+b);
}

console.log(somar(10,20));

interface Usuario{
    nome:string;
    idade:number;
    email:string;
}

let usuario:Usuario={
    nome:"Luiz",
    idade:37,
    email:"qqlcoisa@gmail.com"
};

usuario.idade = 50;