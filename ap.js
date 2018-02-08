let button = document.querySelector('#button');
let buttonReset = document.querySelector('#reset');
let url = 'https://swapi.co/api/people/';
let name = document.querySelector('#name');
let mass = document.querySelector('#mass');


function getInfo() {
    let random = Math.floor((Math.random() * 88) + 1);
    let url = 'https://swapi.co/api/people/' + random;

        axios.get(url).then(function(response) {
        updateInfo(response.data)
    })
}

function getReset() {
    $('#name').empty();
    $('#mass').empty();
}


function updateInfo(data) {
    name.innerText = 'Characters:' + ' ' + data.name;
    mass.innerText = 'Mass:' + ' ' + data.mass
}

button.addEventListener('click', getInfo);
buttonReset.addEventListener('click', getReset);