let inputUser = document.querySelector('input');
const ul = document.querySelector('ul')
let elem = document.getElementsByTagName('li')
const form = document.getElementsByTagName('form')[0]

function createItem(value) {

    return `<li class="li">${value}<button class="newBtn">${'Удалить'}</button></li>`
}

function clear(el) {
    el.remove()
}

function addElement() {
    elem = inputUser.value
    ul.innerHTML += createItem(elem)
}

function getValid() {
    let regExp = /^[\w\s]{2,15}$/i;
    return regExp.test(inputUser.value)
}

inputUser.addEventListener('input', function () {

    if (getValid() !== true ) {
        inputUser.classList.add('invalid')
    } else {
        inputUser.classList.remove('invalid')

    }

})

ul.addEventListener('click', function (event) {
    let target = event.target

    if (target.tagName === 'LI') {
        target.classList.toggle('active')
    }

    if (target.tagName === 'BUTTON' && target.className === 'newBtn') {

        clear(target.closest('li'))
    }
})

form.addEventListener('submit', function (event) {
        event.preventDefault()
        if (inputUser.value !== '' && getValid() === true) {

            addElement()
            inputUser.value = ''

        }
    }
)

