let isModalOpen = false
let contrastToggle = false

function toggleContrast() {
    contrastToggle = !contrastToggle
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}



// template_xyb4feo
// service_q8rzjit
// public API key.    OWK-6DazwWjbaMWPP




function contact(event) {
    event.preventDefault()
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')

    loading.classList += " modal__overlay--visible"

    emailjs
        .sendForm(
            'service_q8rzjit',
            'template_xyb4feo',
            event.target,
            'OWK-6DazwWjbaMWPP'
        ).then(() => {
            setTimeout(() => {
                loading.classList.remove("modal__overlay--visible")
            }, 500)
            setTimeout(() => {
                success.classList += " modal__overlay--visible"
            }, 10)
        }).catch(() => {
            loading.classList.remove('modal__overlay--visible')
            alert(
                "Email service unavailable. Contact directly at mtanderson64@gmail.com"
            )
        })
            
}



function toggleModal() {
    if (isModalOpen) {
        isModalOpen = !isModalOpen
        return document.body.classList.remove("modal--open")
    }

    isModalOpen = !isModalOpen
    document.body.classList += " modal--open"

    //console.log('toggleModal()')
}

