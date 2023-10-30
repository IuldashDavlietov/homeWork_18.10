const input_form = document.querySelector('.inputForm')
const input_adress = document.querySelector('#adress')
const input_price = document.querySelector('#price')
const input_cost = document.querySelector('#cost')
const submit = document.querySelector('.submit')

const all_buttons = document.querySelector('.all_buttons')
const url = "https://jsonplaceholder.typicode.com/posts"

let obj = {
    adress: '',
    price: '',
    cost: ''
}

let data = function(obj) {
obj.adress = input_adress.value
obj.price = input_price.value
obj.cost = input_cost.value
return obj
}

function createMessage() {
    const message = document.createElement('h2')
    message.innerHTML = 'Order created'
    all_buttons.append(message)
}

function createBtn() {
    const btn_pay = document.createElement('button')
    const btn_send = document.createElement('button')
    const btn_accept = document.createElement('button')
    const btn_complete = document.createElement('button')
    const btn_exit = document.createElement('button')
    btn_pay.textContent = 'Pay'
    btn_send.textContent = 'Send'
    btn_accept.textContent = 'Accept'
    btn_complete.textContent = 'Complete'
    btn_exit.textContent = 'Exit'
    all_buttons.append(btn_pay, btn_send, btn_accept, btn_complete, btn_exit)

    const text = document.createElement('p')
    btn_pay.addEventListener('click', () => {
        getFetch()
        text.innerHTML = 'Order has been paid'
        all_buttons.append(text)
        
    })
    btn_send.addEventListener('click', () => {
        getFetch()
        text.innerHTML = 'The order has been sent, please wait'
        all_buttons.append(text)
    })
    btn_accept.addEventListener('click', () => {
        getFetch()
        text.innerHTML = 'Order is accepted'
        all_buttons.append(text)
    })
    btn_complete.addEventListener('click', () => {
        getFetch()
        text.innerHTML = 'Order completed'
        all_buttons.append(text)
    })
    btn_exit.addEventListener('click', () => {
        all_buttons.innerHTML = ''
    })
}

async function getFetch() {
    let fetchName = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(),
        headers: { 'Content-Type': 'application/json' }
    })
    const data = fetchName
    console.log(data);
}

async function newOrder(url) {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json'
        }
    })
    submit.addEventListener('click', (e) => {
        e.preventDefault()
        all_buttons.innerHTML = ''
            if (input_adress.value === ''|| input_price.value === '' || input_cost.value === ''){
                let text_input = document.createElement('h2')
                text_input.innerHTML = 'Fill in the input fields'
                all_buttons.append(text_input)
            }
            else {
                createBtn()
                createMessage()
                data(obj)
                console.log(data(obj));
            }
    })
}
newOrder(url)
