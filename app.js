// O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.

// Declaração de um array vazio para armazenar os participantes
let lista = [];

// Variável para armazenar o nome do usuário
let meuNome; 

// Loop que garante que o usuário insira um nome válido
do {
    meuNome = prompt("Para iniciar o sorteio, qual é o seu nome?").trim().toLowerCase();
} while (meuNome == "");  // Continua pedindo até que o usuário digite algo

// Adiciona o nome do usuário à lista de participantes
lista.push(meuNome);

// Exibe uma mensagem de boas-vindas e imprime a lista no console
alert("Bem-vindo, " + meuNome);
console.log("Bem-vindo, " + meuNome);
console.log("Lista de participantes:", lista);

// Função para adicionar um novo amigo à lista
function adicionarAmigo() {
    // Obtém o nome digitado no input e remove espaços extras
    let nome = document.getElementById("amigo").value.trim().toLowerCase();

    // Verifica se o nome é válido e se não está duplicado na lista
    if (nome === "" || lista.includes(nome)) {
        alert("Nome inválido ou já adicionado!");
        return; // Sai da função sem adicionar o nome duplicado
    }

    // Adiciona o nome à lista de participantes
    lista.push(nome);

    // Cria um novo item na lista <ul> do HTML para exibir o nome
    let itemLista = document.createElement("li");
    itemLista.textContent = nome;
    document.getElementById("listaAmigos").appendChild(itemLista);

    // Limpa o campo de entrada após adicionar o nome
    document.getElementById("amigo").value = "";
}

// Função para sortear amigos secretos
function sortearAmigo() {
    // Verifica se há pelo menos 2 participantes para o sorteio acontecer
    if (lista.length < 2) {
        alert("Adicione pelo menos 2 pessoas!");
        return;
    }

    // Objeto para armazenar os pares sorteados (quem sorteou quem)
    let sorteios = {};
    let copiaLista = [...lista]; // Faz uma cópia da lista original

    // Loop para sortear cada participante
    for (let i = 0; i < lista.length; i++) {
        let nome = lista[i];

        // Sorteia um índice aleatório para o amigo secreto
        let amigoIndex = Math.floor(Math.random() * copiaLista.length);

        // Garante que a pessoa não se sorteie a si mesma
        while (copiaLista[amigoIndex] === nome) {
            amigoIndex = Math.floor(Math.random() * copiaLista.length);
        }

        // Armazena a pessoa sorteada para cada participante
        sorteios[nome] = copiaLista[amigoIndex];

        // Remove o nome sorteado da lista para evitar repetições
        copiaLista.splice(amigoIndex, 1);
    }

    // Exibe os resultados do sorteio na tela
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // Limpa resultados anteriores

    for (let nome in sorteios) {
        let p = document.createElement("p");
        p.textContent = `${nome} sorteou ${sorteios[nome]}`;
        resultado.appendChild(p);
    }
}