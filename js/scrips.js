const links = document.querySelectorAll('.header-navegacao a')
const url = document.location.href

function ativarLink(item) {
    if(url.includes(item.href)) {
        item.classList.add('ativar')
    }
}

links.forEach(ativarLink)

// ------------------------------------------------------

const parametros = new URLSearchParams(location.search)

function ativarParametros(parametro) {
    const element = document.getElementById(parametro)
    if(element) {
        element.checked = true
    }
}

parametros.forEach(ativarParametros)

// -------------------------------------------------------

