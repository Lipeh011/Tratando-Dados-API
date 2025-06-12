const elementosParainserirLivros = document.getElementById('livros')// pegando o elemento do HTML e trazendo para aqui


function exibirOslivrosNaTela (listaDeLivros) { // criando a função que exibira o conteudo da pagina na tela
   manipularElementoDOM.innerHTML = ''; //  limpando tela
   elementosParainserirLivros.innerHTML = ''; // limpando tela
    listaDeLivros.forEach(livros => { // vai atribuir o parametro que foi criado com o forEach que vara a varredura dos intens dentro da array livros com uma arrow function com os conteudo de HTML
       /* pegara o elemento do HTML que foi transferido para JS 
       e adicionara mais items a com innerHTML com += */

                     // Se a quantidade do libro for maior do que 0 vai executar 'livro__imagens' e se for menor executura 'livro__imagen indisponivel', o : significa uma condição e o ? esta perguntando 
       let disponibilidade = livros.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'  // criando verificação com o operador ternario 
       elementosParainserirLivros.innerHTML += `<div class="livro">   
      <img class="${disponibilidade}" src="${livros.imagem}" alt=" ${livros.alt}" /> 
      <h2 class="livro__titulo">
       ${livros.titulo}
      </h2>
      <p class="livro__descricao">${livros.autor}</p>
      <p class="livro__preco" id="preco">R$ ${livros.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livros.categoria}</span>
      </div>
    </div>
`  
// em cima pegara um trecho do codigo HTML com a tamplate strings e atribuira de acordo com classe e o conteudo selecionado da API que esta exibido no console
    });
}
// Criando de verificação com condicional
/*function verificarDisponibilidadeDoLivro(livro) {
  if (livro.quantidade > 0) {
    return 'livro__imagens'
  }
  else {
    return 'livros__imagens indisponivel'
  }
}
*/ 


