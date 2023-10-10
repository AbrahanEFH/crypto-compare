const cryptomonedasSelect = document.querySelector('#criptomonedas')

document.addEventListener('DOMContentLoaded', () => {
    consultarCriptoMonedas()
})

function consultarCriptoMonedas() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => console.log(resultado))
}