let eH1 = document.querySelector("h1");
let eA = document.querySelector("a");
let eUl = document.querySelector("ul");
let eOl = document.querySelector("ol");

eH1.innerText = "Conteúdo textual da tag h1.";
eA.innerText = "Conteúdo textual da tag a.";
eUl.innerHTML = `
    <li>Item 01</li>
    <li>Item 02</li>
    <li>Item 03</li>
`;
eOl.innerHTML = `
    <li><a href="https://casasbahia.com.br">Casas Bahia</a></li>
    <li><a href="https://pernambucanas.com.br">Pernambucanas</a></li>
    <li><a href="https://americanas.com.br">Lojas Americanas</a></li>
`;
