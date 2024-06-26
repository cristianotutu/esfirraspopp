// Seleciona o botão do WhatsApp flutuante
const whatsappButton = document.getElementById('whatsapp-button');

// Adiciona um evento de clique ao botão
whatsappButton.addEventListener('click', function(event) {
  // Evita que o link padrão seja seguido
  event.preventDefault();
  
  // Abre o link do WhatsApp em uma nova aba
  window.open(this.href, '_blank');
});

// Função para mostrar ou ocultar o botão com base na posição da página
function toggleWhatsAppButton() {
  if (window.scrollY > 100) {
    whatsappButton.style.display = 'block';
  } else {
    whatsappButton.style.display = 'none';
  }
}

// Adiciona um evento de rolagem para verificar a posição da página
window.addEventListener('scroll', toggleWhatsAppButton);

// Chama a função toggleWhatsAppButton para verificar a posição inicial da página
toggleWhatsAppButton();
