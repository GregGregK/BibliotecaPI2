 // Espera o evento 'DOMContentLoaded' para garantir que o código seja executado após o carregamento da página
 window.addEventListener('DOMContentLoaded', function() {
    // Obtém o elemento com o ID 'num-pedido'
    var numPedidoElement = document.getElementById('num-pedido');
    
    // Gera um número de pedido aleatório com 7 caracteres
    var numPedido = generateRandomNumber(7);
    
    // Atribui o número do pedido ao conteúdo do elemento 'numPedidoElement'
    numPedidoElement.textContent = numPedido;
  });

  // Função para gerar um número aleatório com o comprimento especificado
  function generateRandomNumber(length) {
    var result = '#';
    var characters = '0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      // Gera um índice aleatório com base no comprimento da string 'characters'
      var randomIndex = Math.floor(Math.random() * charactersLength);
      
      // Adiciona o caractere correspondente ao índice aleatório ao resultado
      result += characters.charAt(randomIndex);
    }
    return result;
  }

  function redirectToHome() {
    window.location.href = "home.html";
}