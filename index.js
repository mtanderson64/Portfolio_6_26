let isModalOpen = false
let contrastToggle = false

const scaleFactor = 1/20

/* function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor
    const y = event.clientY * scaleFactor

    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0
        const boolInt = isOdd ? -1 : 1
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }

} */


// ===== NEW: track target mouse position and current shape positions =====
let targetX = 0
let targetY = 0
const currentPositions = []

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape")
    // ===== CHANGED: store target instead of applying transform directly =====
    targetX = event.clientX * scaleFactor
    targetY = event.clientY * scaleFactor
}

// ===== NEW: animation loop that eases shapes toward the target =====
function animateBackground() {
    const shapes = document.querySelectorAll(".shape")
    const delay = 0.02 // lower = slower/dreamier trailing, higher = snappier

    for (let i = 0; i < shapes.length; ++i) {
        const isOdd = i % 2 !== 0
        const boolInt = isOdd ? -1 : 1
        const goalX = targetX * boolInt
        const goalY = targetY * boolInt

        if (!currentPositions[i]) {
            currentPositions[i] = { x: 0, y: 0 }
        }

        // ===== NEW: lerp current position toward goal =====
        currentPositions[i].x += (goalX - currentPositions[i].x) * delay
        currentPositions[i].y += (goalY - currentPositions[i].y) * delay

        shapes[i].style.transform = `translate(${currentPositions[i].x}px, ${currentPositions[i].y}px)`
    }

    requestAnimationFrame(animateBackground)
}

// ===== NEW: kick off the loop once =====
requestAnimationFrame(animateBackground)



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

