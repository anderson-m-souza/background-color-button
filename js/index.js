//guarda o botao em uma variavel
const button = document.querySelector('.button');
//mostra botao no console
console.log(button);

//guarda tag body em uma variavel
const body = document.querySelector('body');
//mostra body no console
console.log(body);

//criando array com as cores usadas
const colors = [
    '#556B2F',
    '#008B8B',
    '#483D8B',
    '#7B68EE',
    '#696969',
    '#2F4F4F'
];
//mostra array no console
console.log(colors);

//adiciona evento de clique com funcao de call-back
button.addEventListener('click', function(event) {

    /*cria variavel que sorteia apenas numeros
    disponiveis para acessar o array colors*/
    let numeroAleatorio = Math.floor(Math.random() * colors.length);
    //mostra numero resultante do sorteio
    console.log(numeroAleatorio);

    /*muda a cor de fundo do body de
    acordo com a posicao do array colors*/
    body.style.backgroundColor = colors[numeroAleatorio];

});
