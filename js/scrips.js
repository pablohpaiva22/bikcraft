const links = document.querySelectorAll('.header-navegacao a')
const url = document.location.href

function ativarLink(item) {
    if(url.includes(item.href)) {
        item.classList.add('ativar')
    }
}

links.forEach(ativarLink)


