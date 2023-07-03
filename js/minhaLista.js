 // Função para atualizar o contador de cards
 function updateCardCount() {
    var cards = document.querySelectorAll('.cards');
    var livrosPerfil = cards.length;
    document.getElementById('livros-perfil').textContent = 'Livros no seu perfil: ' + livrosPerfil;
}

// Atualiza o contador de cards no carregamento da página
window.addEventListener('DOMContentLoaded', function() {
    updateCardCount();
});

// Função para remover o card e atualizar o contador
function removeCardAndRedirect(button) {
    var card = button.parentNode.parentNode;
    card.parentNode.removeChild(card);
    updateCardCount();
    window.open("comprovanteDevolucao.html", "_blank");
}