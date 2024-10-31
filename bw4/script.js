const menu = document.querySelectorAll('nav a');

menu.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const href = link.getAttribute('href');
        const alvo = document.querySelector(href);

        if (alvo) {
            window.scroll({
                top: alvo.offsetTop - 20,
                behavior: 'smooth'
            });
        }
    });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        menu.forEach(link => {
            link.classList.add('shrink');
        });
    } else {
        menu.forEach(link => {
            link.classList.remove('shrink');
        });
    }
});

// Configurações para o Carrossel
let currentSlide = 0;

function moveSlide(step) {
    const slides = document.querySelector('.carousel-slide');
    const totalSlides = slides.children.length;
    currentSlide = (currentSlide + step + totalSlides) % totalSlides;
    const slideWidth = slides.children[0].clientWidth;
    slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}
 
//comentarios

document.getElementById('comentarioForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita o envio do formulário e recarregamento da página

    // Obtendo os valores do formulário
    const nome = document.getElementById('nome').value;
    const comentario = document.getElementById('comentario').value;

    // Criando um novo elemento para o comentário
    const comentarioDiv = document.createElement('div');
    comentarioDiv.classList.add('comment');
    comentarioDiv.innerHTML = `<strong>${nome}</strong>: <p>${comentario}</p>`;

    // Adicionando o novo comentário à lista
    document.getElementById('comentariosList').appendChild(comentarioDiv);

    // Limpando os campos do formulário
    document.getElementById('comentarioForm').reset();
});
