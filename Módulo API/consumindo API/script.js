const nome = document.getElementById('nome')
const valor = document.getElementById('valor')
const desc = document.getElementById('desc')
const btnPostar = document.getElementById('btnPostar')
const container = document.getElementById('container')

function postarProduto(e){
    e.preventDefault()

    const jsonBody = JSON.stringify({
        nome: nome.value,
        valor: valor.value,
        desc: desc.value
    })

    fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: jsonBody
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        const postagem = document.createElement('div')
        postagem.classList.add('post')
        postagem.innerHTML = `
            <h3>${data.id} - ${data.nome}</h3>
            <h4>$${data.valor},00</h4>
            <p>${data.desc}</p>
        `
        container.appendChild(postagem)

        nome.value = '';
        valor.value = '';
        desc.value = '';
        alert('Produto postado com sucesso!');
    })
    .catch(()=> {
        alert('Cadastro não realizado. Favor, tentar novamente.')
    })
}

btnPostar.addEventListener('click', (e) => postarProduto(e))