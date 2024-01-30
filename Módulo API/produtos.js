const produtos = [
    {
        id: 1,
        nome: 'Notebook',
        marca: 'Avell',
        categoria: 'informática',
        preco: 8700,
        estoque: 20,
        disponivel: true
    },
    {
        id: 2,
        nome: 'Televisão',
        marca: 'LG',
        categoria: 'eletrodomésticos',
        preco: 4500,
        estoque: 60,
        disponivel: true
    },
    {
        id: 3,
        nome: 'Xbox Series S',
        marca: 'Microsoft',
        categoria: 'games',
        preco: 2600,
        estoque: 40,
        disponivel: true
    }
];

const produtosJSON = JSON.stringify(produtos);
console.log(produtosJSON);
console.log(typeof(produtosJSON));