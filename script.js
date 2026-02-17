document.addEventListener('DOMContentLoaded', () => {
    // 1. Efeito de Header e Animações (O que já tinhas)
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

    // 2. Lógica do Assistente Virtual (AGORA DENTRO DO BLOCO CORRETO)
    const chatBtn = document.getElementById('chat-button');
    const chatWin = document.getElementById('chat-window');
    const chatContent = document.getElementById('chat-content');

    if (chatBtn) {
        chatBtn.addEventListener('click', () => {
            chatWin.style.display = chatWin.style.display === 'none' ? 'block' : 'none';
        });
    }

    // Função de resposta global
    window.responder = function(tipo) {
        if(tipo === 'manual') {
            chatContent.innerHTML = "Pode descarregar o <b>Manual da Igreja</b> na secção de Recursos abaixo!";
        } else if(tipo === 'licao') {
            chatContent.innerHTML = "A <b>Lição da Escola Sabatina</b> está disponível no segundo cartão!";
        } else if(tipo === 'biblia') {
            chatContent.innerHTML = "Pode ler as <b>Escrituras Sagradas</b> no nosso leitor central!";
        }
    };
});

