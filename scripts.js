let inputUser = document.querySelector('input');
const ul = document.querySelector('ul')
let elem = document.getElementsByTagName('li')
const body = document.getElementsByTagName('body')[0]

function createItem(value) {

    return `<li class="li">${value}<button class="newBtn">${'Удалить'}</button></li>`
}

function clear(el){
    el.remove()
}

function addElement(){
    elem = inputUser.value
    ul.innerHTML += createItem(elem)
}

body.addEventListener('click', function (event) {
        let target = event.target

        if(target.tagName === 'BUTTON' && target.className === 'add-new-string' && inputUser.value !== '') {
            addElement()
            inputUser.value = ''
        }

        if(target.tagName === 'LI')  {
            target.classList.toggle('active')
        }

        if(target.tagName === 'BUTTON' &&  target.className ==='newBtn') {

            clear(target.closest('li'))
        }
    }
)
