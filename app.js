//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os amigos
let amigos = [];

function adicionarAmigo() {
    // Captura o valor do campo de entrada
    const nomeAmigo = document.getElementById('amigo').value.trim();

    // Validação para garantir que o campo não esteja vazio
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nomeAmigo);

    // Atualiza a lista visualmente
    atualizarListaAmigos();

    // Limpa o campo de entrada
    document.getElementById('amigo').value = "";
}

function atualizarListaAmigos() {
    // Obtém o elemento da lista onde os amigos serão exibidos
    const listaAmigos = document.getElementById('listaAmigos');
    
    // Limpa a lista existente para garantir que não haja duplicados
    listaAmigos.innerHTML = "";

    // Percorre o array de amigos e adiciona cada um como um item <li>
    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;  // Define o texto do item de lista
        listaAmigos.appendChild(li);  // Adiciona o item à lista
    });
}

function sortearAmigo() {
    // Verifica se o array de amigos não está vazio
    if (amigos.length === 0) {
        alert("Por favor, adicione amigos antes de sortear.");
        return;
    }

    // Gera um índice aleatório entre 0 e o tamanho do array de amigos - 1
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtém o nome sorteado usando o índice aleatório
    const amigoSorteado = amigos[indiceAleatorio];

    // Atualiza o resultado na página
    const resultadoElemento = document.getElementById('resultado');
    resultadoElemento.innerHTML = `O amigo secreto sorteado é: <strong>${amigoSorteado}</strong>`;
}
