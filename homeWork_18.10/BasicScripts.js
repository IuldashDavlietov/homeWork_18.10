
// Bret
// Sincere@april.biz
const submit = document.querySelector('.submit');
const emailUser = document.querySelector('#email')
const nameUser = document.querySelector('#name')

const url = "https://jsonplaceholder.typicode.com/users"

async function getUsers(urlData) {
    const response = await fetch(urlData);
    const data = await response.json();
    findUser(data);
}

function findUser(data) {
submit.addEventListener('click', () => {
    for (elem of data){
        if (nameUser.value === elem.username && emailUser.value === elem.email){
            window.location.href ='http://127.0.0.1:5500/OrderPage.html'
        }
        else{
            let div_text = document.querySelector('.div_text')
            let text = document.createElement('h2')
            text.innerHTML = 'Not found'
            div_text.append(text)
            break;
        }
    }
})
}
getUsers(url)



