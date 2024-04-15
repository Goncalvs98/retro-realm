// manipulaçao do DOM
//let = local
//var = global
//cons = constante
// Exemplo da aula
/*document.querySelector('#notaRange').addEventListener("change", calcular);
document.querySelector('#game_title').addEventListener("change", calcular);
function calcular(){
    const notaRange = document.querySelector('#notaRange').value;
    const nome = document.querySelector('#game_title').value;
    let texto = "nota: " + notaRange;
    if(nome) texto = nome + " com " + texto;
    document.querySelector('#notaFinal').innerText = texto;
}*/

// Funções
function atualizarPosicaoRotulo() {
    const valorRange = parseInt(notaRange.value);
    const larguraRange = notaRange.offsetWidth;
    const novaPosicao = (larguraRange / 10) * valorRange;
    
    notaValor.style.left = novaPosicao + 'px';
}

// Função para criar um card com a plataforma selecionada
function createPlatformCard(platform) {
    let card = document.createElement("div");
    card.classList.add("platform-card");

    let platformName = document.createElement("span");
    platformName.textContent = platform;

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "x";
    deleteButton.classList.add("delete-button");

    deleteButton.addEventListener("click", function() {
        // Remove o card da plataforma quando o botão de exclusão é clicado
        card.remove();
        // Remove a plataforma do array de plataformas selecionadas
        const index = selectedPlatforms.indexOf(platform);
        if (index !== -1) {
            selectedPlatforms.splice(index, 1);
        }
    });

    card.appendChild(platformName);
    card.appendChild(deleteButton);

    return card;
}

// Variaveis e chamadas de eventos
// Adicione um evento de mudança ao controle deslizante da nota para atualizar o valor da nota exibido em tempo real conforme o usuário move o controle deslizante.
const notaRange = document.getElementById('notaRange');
const notaValor = document.getElementById('notaValorBox');

// Array para armazenar os valores das plataformas selecionadas
let selectedPlatforms = [];

atualizarPosicaoRotulo();
notaValor.textContent = notaRange.value;

notaRange.addEventListener("input", function() {
    notaValor.textContent = notaRange.value;
    atualizarPosicaoRotulo();
});

// addEventListeners
// Adicione validação de campos para garantir que os campos obrigatórios sejam preenchidos antes de enviar o formulário.
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    var inputs = document.querySelectorAll("input[required], textarea[required]");
    inputs.forEach(e => {
        if (!e.value) {
            event.preventDefault();
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }
    });
    if(selectedPlatforms.length == 0){
        event.preventDefault();
            alert("Por favor, selecione pelo menos uma plataforma.");
            return;
    }
});

// Adiciona um evento de seleção à entrada de texto
document.getElementById("platformInput").addEventListener("change", function() {
    var platformInput = this.value.trim();
    if (platformInput !== "") {
        // Verifica se a plataforma já foi selecionada
        if (selectedPlatforms.includes(platformInput)) {
            alert("Esta plataforma já foi adicionada.");
            this.value = "";
            return;
        }

        // Adiciona a plataforma ao array de plataformas selecionadas
        selectedPlatforms.push(platformInput);

        // Cria o card da plataforma e adiciona à seção
        var platformCardsSection = document.getElementById("platformCards");
        var platformCard = createPlatformCard(platformInput);
        platformCardsSection.appendChild(platformCard);

        // Limpa a entrada de texto após adicionar o card
        this.value = "";
    }
});

