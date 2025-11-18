let pessoa = {
    nome: "Elaine",
    idade: 30,
    profissao: "Desenvolvedora"
}
let nome = "Elaine Matos"
console.log("Meu nome é : " + nome)

let nomes = ["Elaine", "Derick", "Ana", "Maria"]
let pessoas = [
    {
    nome: "Elaine",
    idade: 30,
    profissao: "Desenvolvedora"
    },
    {
    nome: "Derick",
    idade: 25,
    profissao: "Presidente"
    },
    {
    nome: "Ana",
    idade: 28,
    profissao: "Designer"
    }
]

function alterarNome() {
    nome = "Gata"
    console.log("Nome alterado para: " + nome)

}

console.log(pessoa)

function imprimirPessoa(pessoa){
    console.log("Nome: " + pessoa.nome)
    console.log("Idade: " + pessoa.idade)
    console.log("Profissão: " + pessoa.profissao)   
}

function adicionarPessoa(pessoa){
    pessoas.push(pessoa)
}

function imprimirPessoas(){
    console.log("*********  Imprimindo Pessoas  *********")
    pessoas.forEach((item) => {
        console.log("Nome: " + item.nome)
        console.log("Idade: " + item.idade)
        console.log("Profissão: " + item.profissao)
    })
}
imprimirPessoas()   

adicionarPessoa({
    nome: "Carlos Silva",
    idade: 35,
    profissao: "Gerente"
})

imprimirPessoas()   


//alterarNome()
//imprimirPessoa(pessoa)
//imprimirPessoa({
//    nome: "Derick",
//    idade: 25,
//    profissao: "Presidente"
//})


document.getElementById("link-conta").addEventListener("click", function() {
    alert("Redirecionando para a página de registro...");
});