function sleep(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    })
}

async function render_name() {
    let name = document.getElementById('meu-nome')
    name.innerHTML=''
    let nomeCompleto = 'Eduardo Amaro Maciel'

    for (let i in nomeCompleto) {
        name.innerHTML += nomeCompleto[i]
        await sleep(100)
    }
}