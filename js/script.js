// Você pode adicionar funcionalidades interativas aqui no futuro
console.log("Bem-vindo ao site Inimigo do Julius!");

function initCarrossel() {
    document.querySelectorAll('.carrossel').forEach(carrossel => {
        carrossel.addEventListener('wheel', (event) => {
            event.preventDefault();
            carrossel.scrollLeft += event.deltaY;
        });

        // Navegação por teclado
        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowRight') {
                carrossel.scrollLeft += 200; // Ajuste conforme necessário
            } else if (event.key === 'ArrowLeft') {
                carrossel.scrollLeft -= 200; // Ajuste conforme necessário
            }
        });
    });
}

// Inicializa as funcionalidades
function init() {
    initCarrossel();
}

// Chama a função de inicialização
init();

// Seleciona o carrossel e os indicadores
const carrossel = document.querySelector('.carrossel');
const indicadorEsquerda = document.getElementById('indicador-esquerda');
const indicadorDireita = document.getElementById('indicador-direita');

// Função para atualizar os indicadores
function atualizarIndicadores() {
    const scrollLeft = carrossel.scrollLeft; // Quantidade rolada para a esquerda
    const scrollWidth = carrossel.scrollWidth; // Largura total do carrossel
    const clientWidth = carrossel.clientWidth; // Largura visível do carrossel

    // Verifica se há produtos à esquerda
    if (scrollLeft > 0) {
        indicadorEsquerda.classList.add('visivel'); // Torna o indicador visível
    } else {
        indicadorEsquerda.classList.remove('visivel'); // Oculta o indicador
    }

    // Verifica se há produtos à direita
    if (scrollLeft + clientWidth < scrollWidth) {
        indicadorDireita.classList.add('visivel'); // Torna o indicador visível
    } else {
        indicadorDireita.classList.remove('visivel'); // Oculta o indicador
    }
}

// Adiciona evento de scroll no carrossel
carrossel.addEventListener('scroll', atualizarIndicadores);

// Inicializa os indicadores
atualizarIndicadores();
