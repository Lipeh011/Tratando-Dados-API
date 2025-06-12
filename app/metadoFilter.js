const botoes = document.querySelectorAll('.btn'); // pega o elemento la do HTML e traz para aqui
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros)) // pega a const botão atribuie com forEach para percorer a array  e pega o btn  com uma arrow function com evento escutador do tipi click chaamando a função filtrar livros

const manipularElementoDOM = document.getElementById('valor_total_livros_disponiveis'); // malipulando elemento HTMl para exibir somente a aba 'Categorias'

function filtrarLivros(){
    const elementoBtn = document.getElementById(this.id); // aqui esta pegando o ID do elemento que esta sendo interagido que no caso eo BTN
    const categoria = elementoBtn.value // cria um const recebendo o valor do elemento que foi interagido 
    let livrosFiltrados = categoria  == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria); // aqui e onde filtrara os livros, criou uma let recebendo os livros 
    // do array atribuido com o filter com o parametro de livro com uma arrow function livro.categoria comparando com a categoria //Imprementamos uma teste condicional para saber
    // se o livros esta disponivel ou nao 
    exibirOslivrosNaTela(livrosFiltrados); // aqui exibira os livro na quando clicado 
    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados) // aqui chamara a função que foi criada logo abaixo com parametro
        exibirOvalorTotalDosLivrosNaTela(valorTotal); // chamando a função que foi criada logo abaixo 
      
    }
   
}
function filtrarPorCategoria(categoria) { 
    return livros.filter(livro => livro.categoria == categoria); // aqui pegara filtrara os livros por categoria 
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0); // aqui pegara o livro quantidade e vera se esta disponivel ou nao 
}

function exibirOvalorTotalDosLivrosNaTela(valorTotal){ // função para exibição do elemento HTML somamando todos os itens utilizando o metedo reducer para calcular com tamplates strings
 manipularElementoDOM.innerHTML = `<section id="valor_total_livros_disponiveis">
 <div class="livros__disponiveis">
   <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
 </div>`
}



