// Aguarda o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efeito de Header Compacto ao Rolar
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.background = 'rgba(26, 42, 108, 0.98)';
        } else {
            header.style.padding = '15px 0';
            header.style.background = 'rgba(26, 42, 108, 0.95)';
        }
    });

    // 2. Animação de Entrada (Scroll Reveal)
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Aplicar a animação aos cartões de livros e títulos
    const elementsToAnimate = document.querySelectorAll('.card-livro, .section-title');
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });

    // 3. Log de Boas-vindas Profissional
    console.log("%c Global Gospel - Ativo ", "color: white; background: #1a2a6c; font-weight: bold; padding: 5px; border-radius: 3px;");
});
const chatBtn = document.getElementById('chat-button');
const chatWin = document.getElementById('chat-window');
const chatContent = document.getElementById('chat-content');

chatBtn.addEventListener('click', () => {
    chatWin.style.display = chatWin.style.display === 'none' ? 'block' : 'none';
});

function responder(tipo) {
    if(tipo === 'manual') {
        chatContent.innerHTML = "Pode descarregar o <b>Manual da Igreja</b> na secção de Recursos abaixo!";
    } else if(tipo === 'licao') {
        chatContent.innerHTML = "A <b>Lição da Escola Sabatina</b> está disponível no segundo cartão da biblioteca!";
    } else if(tipo === 'biblia') {
        chatContent.innerHTML = "Pode ler as <b>Escrituras Sagradas</b> diretamente no nosso leitor central!";
    }
}

