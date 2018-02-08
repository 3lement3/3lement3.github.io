let button = document.querySelector('#button');
let buttonReset = document.querySelector('#reset');
let name = document.querySelector('#name');
let url = 'https://swapi.co/api/people/';

function getInfo() {
    let random = Math.floor((Math.random() * 88) + 1)
    let url = 'https://swapi.co/api/people/' + random

        axios.get(url).then(function(response) {
        updateInfo(response.data)
    })
}

function getReset() {
    $('#name').empty();
}


function updateInfo(data) {
    name.innerText = ('Characters:') + ' ' + data.name
}

button.addEventListener('click', getInfo)
buttonReset.addEventListener('click', getReset)