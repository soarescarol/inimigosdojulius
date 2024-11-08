const carouselContainer = document.querySelector('.carousel-container');
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
const itemsPerView = 3; // Número de itens visíveis no carrossel
let index = 0;

// Configura o evento para o botão "Próximo"
document.querySelector('.carousel-next').addEventListener('click', () => {
    index = (index + 1) % totalItems; // Move para o próximo item, e volta para o início se chegar ao final
    updateCarousel();
});

// Configura o evento para o botão "Anterior"
document.querySelector('.carousel-prev').addEventListener('click', () => {
    index = (index - 1 + totalItems) % totalItems; // Move para o item anterior, e volta para o final se estiver no começo
    updateCarousel();
});

// Função para atualizar a posição do carrossel
function updateCarousel() {
    const itemWidth = carouselContainer.clientWidth / itemsPerView; // Calcula a largura de cada item com base no container
    carousel.style.transform = `translateX(-${index * itemWidth}px)`; // Move o carrossel para o índice atual
}
