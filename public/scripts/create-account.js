let passwords = document.querySelectorAll('input[type="password"]')
let messageError = document.querySelector('p')
let button = document.querySelector('button')

function verifyPassword() {
    if (passwords[0].value != passwords[1].value) {
        messageError.classList.add('error')
        button.disabled = true
        button.style.backgroundColor = 'lightBlue'
        messageError.hidden = false
        passwords[1].classList.add('error')

    } else {
        messageError.classList.remove('error')
        button.disabled = false
        button.style.backgroundColor = 'rgb(40, 40, 235)'
        messageError.hidden = true
        passwords[1].classList.remove('error')

    }
}
