function linkAtivo() {
    const links = document.querySelectorAll('.header-navegacao a')
    const url = document.location.href

    function ativarLink(item) {
        if(url.includes(item.href)) {
            item.classList.add('ativar')
        }
    }

    links.forEach(ativarLink)
}

linkAtivo()

// ------------------------------------------------------

function marcarItems() {
    const parametros = new URLSearchParams(location.search)

    function ativarParametros(parametro) {
        const element = document.getElementById(parametro)
        if(element) {
            element.checked = true
        }
    }

    parametros.forEach(ativarParametros)
}

marcarItems()

// -------------------------------------------------------

function mostrarLista() {
    const faqAsk = document.querySelectorAll('.faq dt')
    const faqAnswer = document.querySelectorAll('.faq dd')
    const button = document.querySelectorAll('.faq button')

    function accordionList(item, index) {
        item.addEventListener('click', function() { 
            faqAnswer[index].classList.toggle('ativo')
            const id = button[index].getAttribute('aria-expanded')
            if(id == 'true') {
                button[index].setAttribute('aria-expanded', 'false')
            }
            if(id == 'false') {
                button[index].setAttribute('aria-expanded', 'true')
            }
        })
    }

    faqAsk.forEach(accordionList)
}

mostrarLista()

// -------------------------------------------------------

function alterarImagens() {
    const imagens = document.querySelectorAll('.bicicleta-img img')
    const galeria = document.querySelector('.bicicleta-img div')

    function trocarImagens(imagem) {
        imagem.addEventListener('click', function(event) {
            const img = event.currentTarget
            galeria.prepend(img)
        })
    }

    imagens.forEach(trocarImagens)
}

alterarImagens()

// --------------------------------------------------------

if(window.SimpleAnime) {
    new SimpleAnime()
}

// TESTEEE