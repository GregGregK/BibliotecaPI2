window.addEventListener('DOMContentLoaded', function() {
    // Conta a quantidade de elementos com a classe '.cards'
    var livrosPerfil = document.querySelectorAll('.cards').length;
    
    // Atualiza o valor no elemento HTML
    document.getElementById('livros-perfil').textContent = 'Livros no seu perfil: ' + livrosPerfil;
});