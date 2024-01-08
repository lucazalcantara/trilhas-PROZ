const tituloProduto = document.createElement("h1");
const boxProduto = document.createElement("div");
const nomeProduto = document.createElement("h2");
const descricaoProduto = document.createElement("p");
const precoProduto = document.createElement("p");
const imagemProduto = document.createElement("img");
const formProduto = document.createElement("div");
const elementoPai = document.querySelector("body");



tituloProduto.innerText = "Vende-se esta casa.";
tituloProduto.id = "titulo";
nomeProduto.innerText = "Casa de campo";
descricaoProduto.innerText = "Casa de campo localizada na região rural do município de Pato Branco - PR. Sendo 580m2 de área construída e 13.285m2 de área total,  conta com 4 quartos (sendo 2 suítes), sala de jantar, sala de visitas, 2 banheiros, 1 lavabo, cozinha planejada, lavanderia, copa, garagem coberta para 2 veículos de médio porte."
precoProduto.innerText = "À vista R$3.000.000,00 ou entrada de 30% mais 24 parcelas."

boxProduto.appendChild(nomeProduto);
boxProduto.appendChild(descricaoProduto);
boxProduto.appendChild(precoProduto);

console.log(tituloProduto);
console.log(boxProduto);



formProduto.innerHTML =
`
    <h1 id="titulo">Vende-se esta casa.</h1>
    <div>
        <h2>Casa de campo</h2>
        <p>
        Casa de campo localizada na região rural do município de Pato Branco - PR. Sendo 580m2 de área construída e 13.285m2 de área total,  conta com 4 quartos (sendo 2 suítes), sala de jantar, sala de visitas, 2 banheiros, 1 lavabo, cozinha planejada, lavanderia, copa, garagem coberta para 2 veículos de médio porte.
        </p>
        <p>
        À vista R$3.000.000,00 ou entrada de 30% mais 24 parcelas.
        </p>
        <img src="./prints/casadecampo.jpg" width=450px/>
    </div>
`;

elementoPai.appendChild(formProduto);

