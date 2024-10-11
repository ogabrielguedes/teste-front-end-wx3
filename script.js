// Função para alternar o menu em dispositivos móveis

document.querySelector('.menu-toggle').addEventListener('.click', function() {
    document.querySelector('.menu').classList.toggle('show');
});


// BANNER CARROSSEL

let slideIndex = 0;
let totalSlides = document.querySelectorAll('.slide').length;
showSlides();

function showSlides() {
    let carousel = document.querySelector('.carousel-slide');

    // Incremento de índice
    slideIndex++;

    // Reseta o índice se passar do número total de slides
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }

    // Move o carrossel para a esquerda, com base no índice atual
    carousel.style.transform = `translateX(-${slideIndex * 100}%)`;

    // Atualiza os indicadores
    updateDots();

    // Muda o slide a cada 5 segundos
    setTimeout(showSlides, 5000);
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}

function updateDots() {
    let dots = document.getElementsByClassName('dot');

    // Remove a class 'active' de todas as bolinhas
    for(let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Adiciona a classe 'active' à bolinha correspondente
    dots[slideIndex].className += " active";
}

// Carregar produtos

function carregarProdutos() {
    fetch('produtos.json')  // Assumindo que o arquivo produtos.json está na mesma pasta
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar o arquivo produtos.json');
            }
            return response.json();
        })
        .then(produtos => {
            const container = document.getElementById('produtos-container');
            container.innerHTML = '';  // Limpa o container para inserir os produtos

            produtos.forEach(produto => {
                const produtoCard = `
                    <div class="produto-card">
                        <img src="${produto.imagem}" alt="${produto.nome}">
                        <h3>${produto.nome}</h3> <!-- Nome do produto -->
                        <div class="avaliacao">${renderizarEstrelas(produto.avaliacao)}</div> <!-- Avaliação -->
                        <p><span class="oculto">Preço:</span> R$ ${produto.preco.toFixed(2)}</p> <!-- Preço -->
                        <p><span class="oculto">Formas de pagamento:</span> ${produto.formasPagamento.join(', ')}</p> <!-- Formas de pagamento -->
                        <a href="${produto.link}" class="btn">COMPRE AGORA
                `;
                container.innerHTML += produtoCard;
            });
        })
        .catch(error => {
            console.error('Erro ao carregar os produtos:', error);
        });
}


// Função para renderizar as estrelas de avaliação
function renderizarEstrelas(avaliacao) {
    const estrelas = Math.round(avaliacao);  // Arredonda a avaliação para a estrela inteira mais próxima
    let html = '';
    
    for (let i = 1; i <= 5; i++) {
        if (i <= estrelas) {
            html += '&#9733';  // Estrela preenchida
        } else {
            html += '&#9733'; // Estrela vazia
        }
    }

    return html;

}

// Carregar os produtos quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', carregarProdutos);


// Carregar destaques

function carregarDestaques() {
    fetch('destaques.json')  // Assumindo que o arquivo destaques.json está na mesma pasta
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar o arquivo destaques.json');
            }
            return response.json();
        })
        .then(destaques => {
            const container = document.getElementById('destaques-container');
            container.innerHTML = '';  // Limpa o container para inserir os produtos

            destaques.forEach(destaque => {
                const destaqueCard = `
                    <div class="destaque-card">
                        <img src="${destaque.imagem}" alt="${destaque.nome}">
                        <h3>${destaque.nome}</h3> <!-- Nome do produto -->
                        <div class="avaliacao">${renderizarEstrelas(destaque.avaliacao)}</div> <!-- Avaliação -->
                        <p><span class="oculto">Preço:</span> R$ ${destaque.preco.toFixed(2)}</p> <!-- Preço -->
                        <p><span class="oculto">Formas de pagamento:</span> ${destaque.formasPagamento.join(', ')}</p> <!-- Formas de pagamento -->
                        <a href="${destaque.link}" class="btn">COMPRE AGORA</a> <!-- Botão -->
                    </div>
                `;
                container.innerHTML += destaqueCard;
            });
        })
        .catch(error => {
            console.error('Erro ao carregar os destaques:', error);
        });
}


// Função para renderizar as estrelas de avaliação
function renderizarEstrelas(avaliacao) {
    const estrelas = Math.round(avaliacao);  // Arredonda a avaliação para a estrela inteira mais próxima
    let html = '';
    
    for (let i = 1; i <= 5; i++) {
        if (i <= estrelas) {
            html += '&#9733';  // Estrela preenchida
        } else {
            html += '&#9733'; // Estrela vazia
        }
    }

    return html;

}

// Carregar os produtos quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', carregarDestaques);



// Carregar OUTLET

function carregarOutlet() {
    fetch('outlet.json')  // Assumindo que o arquivo destaques.json está na mesma pasta
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar o arquivo outlet.json');
            }
            return response.json();
        })
        .then(outlet => {
            const container = document.getElementById('outlet-container');
            container.innerHTML = '';  // Limpa o container para inserir os produtos

            outlet.forEach(outlet => {
                const outletCard = `
                    <div class="outlet-card">
                        <img src="${outlet.imagem}" alt="${outlet.nome}">
                        <h3>${outlet.nome}</h3> <!-- Nome do produto -->
                        <div class="avaliacao">${renderizarEstrelas(outlet.avaliacao)}</div> <!-- Avaliação -->
                        <p><span class="oculto">Preço:</span> R$ ${outlet.preco.toFixed(2)}</p> <!-- Preço -->
                        <p><span class="oculto">Formas de pagamento:</span> ${outlet.formasPagamento.join(', ')}</p> <!-- Formas de pagamento -->
                        <a href="${outlet.link}" class="btn">COMPRE AGORA</a> <!-- Botão -->
                    </div>
                `;
                container.innerHTML += outletCard;
            });
        })
        .catch(error => {
            console.error('Erro ao carregar o outlet:', error);
        });
}


// Função para renderizar as estrelas de avaliação
function renderizarEstrelas(avaliacao) {
    const estrelas = Math.round(avaliacao);  // Arredonda a avaliação para a estrela inteira mais próxima
    let html = '';
    
    for (let i = 1; i <= 5; i++) {
        if (i <= estrelas) {
            html += '&#9733';  // Estrela preenchida
        } else {
            html += '&#9733'; // Estrela vazia
        }
    }

    return html;

}

// Carregar os produtos quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', carregarOutlet);



// NEWSLETTER

document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    if (nome && email) {
        alert('Cadastro realizado com sucesso! Nome: ' + nome + ', E-mail: ' + email);
        // Aqui você poderia enviar esses dados para um servidor via AJAX
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
