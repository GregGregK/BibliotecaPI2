function filtrarCards() {
    var searchTerm = document.getElementById('search-input').value.toLowerCase(); 
    var cards = document.getElementsByClassName('cards'); 
    var noResultsParagraph = document.getElementById('no-results'); 
    
    // Percorre os cards e exibe apenas aqueles que possuem o título ou autor correspondente ao valor digitado
    var foundResults = false; 
    
    for (var i = 0; i < cards.length; i++) {
      var title = cards[i].querySelector('.title').innerText.toLowerCase(); // Obtém o título do card e converte para minúsculas
      var autor = cards[i].querySelector('.autor').innerText.toLowerCase(); // Obtém o autor do card e converte para minúsculas
      

      if (title.includes(searchTerm) || autor.includes(searchTerm)) {
        cards[i].style.display = 'block'; // Exibe o card
        foundResults = true; // Indica que foram encontrados resultados
      } else {
        cards[i].style.display = 'none'; // Oculta o card
      }
    }
    
    // Exibe ou oculta o parágrafo de acordo com os resultados encontrados
    if (foundResults) {
      noResultsParagraph.style.display = 'none'; // Oculta o parágrafo
    } else {
      noResultsParagraph.style.display = 'block'; // Exibe o parágrafo
    }
  }
  
  // Obtém referência ao elemento da textarea
  var searchInput = document.getElementById('search-input');
  
  // Adiciona um ouvinte de evento de tecla pressionada na textarea
  searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault(); // Impede o comportamento padrão (quebra de linha)
      filtrarCards();
    }
  });


   // Embaralha os cards (livros)
   function shuffleCards() {
    var grid = document.getElementById('grid');
    for (var i = grid.children.length; i >= 0; i--) {
       grid.appendChild(grid.children[Math.random() * i | 0]);
    }
 }
 window.onload = shuffleCards;
  