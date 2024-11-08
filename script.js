document.querySelectorAll('.carousel-container').forEach((carouselContainer, index) => {
    const carousel = carouselContainer.querySelector('.carousel');
    const items = carousel.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    let itemsPerView = 3; // Número de itens visíveis por padrão
    let currentIndex = 0;

    // Configura o evento para o botão "Próximo"
    carouselContainer.querySelector('.carousel-next').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalItems; // Move para o próximo item, e volta para o início se chegar ao final
        updateCarousel();
    });

    // Configura o evento para o botão "Anterior"
    carouselContainer.querySelector('.carousel-prev').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Move para o item anterior, e volta para o final se estiver no começo
        updateCarousel();
    });

    // Função para atualizar a posição do carrossel
    function updateCarousel() {
        const itemWidth = carouselContainer.clientWidth / itemsPerView; // Calcula a largura de cada item com base no container
        // Garante que o carrossel não se mova para um valor inválido
        const maxTranslateX = (totalItems - itemsPerView) * itemWidth;
        const translateXValue = Math.min(Math.max(currentIndex * itemWidth, 0), maxTranslateX);
        carousel.style.transform = `translateX(-${translateXValue}px)`; // Move o carrossel para o índice atual
    }

    // Atualiza a quantidade de itens visíveis conforme o tamanho da tela
    function updateItemsPerView() {
        if (window.innerWidth < 600) {
            itemsPerView = 1; // Exibe 1 item em telas pequenas
        } else if (window.innerWidth < 1000) {
            itemsPerView = 2; // Exibe 2 itens em telas médias
        } else {
            itemsPerView = 3; // Exibe 3 itens em telas grandes
        }
        updateCarousel(); // Atualiza o carrossel após a mudança
    }

    // Chama a função de atualização no início e sempre que a janela for redimensionada
    window.addEventListener('resize', updateItemsPerView);
    updateItemsPerView(); // Chama inicialmente para garantir que a configuração esteja correta
});
