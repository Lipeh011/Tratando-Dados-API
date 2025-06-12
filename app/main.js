
let livros = [] // criando uma array vazia que sera usada para armazenar os conteudo da API
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'; // colocando api dentro de uma variavel para ser usada no futuro
getBuscarLivrosDaAPI();// chamando a função que foi criada logo abaixo !

async function getBuscarLivrosDaAPI() { // função assincrona que o objetivo dela e buscar o conteudo dentro da API 
    const res = await fetch(endpointDaAPI); // resposta recebendo await que vai esperar consumir a API 
    livros = await res.json() // atribuindo a variavel livros para receber o conteudo da API em formato e Arrays 
    console.table(livros); // Aqui exibira uma tabela com os conteudos de todos os livros e etc
    let livrosComDesconto = aplicarDesconto(livros);
    exibirOslivrosNaTela(livrosComDesconto) // aqui chamara a função responsavel por colocar os conteudos da pagina atualizados na tela 
}   

