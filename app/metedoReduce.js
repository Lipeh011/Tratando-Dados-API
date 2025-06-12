function calcularValorTotalDeLivrosDisponiveis(livros){ // essa função sera responsavel pelo calculo dos preços dos produtos que estao dentro do array utilizando o reduce
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2)
}