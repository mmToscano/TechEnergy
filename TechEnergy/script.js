let valor1;
let valor2;


function mudou(){

    valor1 = Number(document.querySelectorAll('#input')[0].value);
    valor2 = Number(document.querySelectorAll('#input')[1].value);
    calcular();
}

function calcular(){
    let valorFinal = valor1 * valor2;
    document.querySelector('#resultado').innerHTML = "R$: " + valorFinal.toFixed(2);
}

function ocultar(e){
    let lavadoras = document.querySelector('#lavadoras');
    let geladeiras = document.querySelector('#geladeiras');
    let microondas = document.querySelector('#microondas');
    let chuveiros = document.querySelector('#chuveiros');

    switch(e.target.id){
        case 'lavadoras':
            lavadoras.classList.add('destaque');
            geladeiras.classList.remove('destaque');
            microondas.classList.remove('destaque');
            chuveiros.classList.remove('destaque');
            mostrarLavadora();
            break;
        case 'geladeiras':
            lavadoras.classList.remove('destaque');
            geladeiras.classList.add('destaque');
            microondas.classList.remove('destaque');
            chuveiros.classList.remove('destaque');
            mostrarGeladeira();
            break;   
        case 'microondas':
            lavadoras.classList.remove('destaque');
            geladeiras.classList.remove('destaque');
            microondas.classList.add('destaque');
            chuveiros.classList.remove('destaque');
            break; 
        case 'chuveiros':
            lavadoras.classList.remove('destaque');
            geladeiras.classList.remove('destaque');
            microondas.classList.remove('destaque');
            chuveiros.classList.add('destaque');
            break;          
    }
}



function mostrarGeladeira(){
    var img1 = document.getElementById('img1')
    img1.src =("C:/Users/MMora/Documents/imagens eletrodomésticos/geladeira a.jpg");
    img1.classList.add('imagensLavadora')

    var img2 = document.getElementById('img2')
    img2.src =("C:/Users/MMora/Documents/imagens eletrodomésticos/geladeira b.jpg");
    img2.classList.add('imagensLavadora')
}


function mostrarLavadora(){
    var img1 = document.getElementById('img1')
    img1.src =("C:/Users/MMora/Documents/imagens eletrodomésticos/lavadora a.jpg")
    img1.classList.add('imagensLavadora')

    var img2 = document.getElementById('img2')
    img2.src =("C:/Users/MMora/Documents/imagens eletrodomésticos/lavadora b.jpg")
    img2.classList.add('imagensLavadora')
}

function eletrodomesticoFactory(tipo, modelo, kWh) {
    return {
      tipo: tipo,
      modelo: modelo,
      kWh: kWh
    }
  }

let img1lavadora = eletrodomesticoFactory('lavadora', 'consul', 0.80);
let img2lavadora = eletrodomesticoFactory('lavadora','Brastemp', 1);
let img1geladeira = eletrodomesticoFactory('geladeira', 'wiz', 0.75);
let img2geladeira = eletrodomesticoFactory('geladeira', 'brastemp', 2);


function comparacao(){

    let lavadoras = document.querySelector('#lavadoras');
    let geladeiras = document.querySelector('#geladeiras');
    let microondas = document.querySelector('#microondas');
    let chuveiros = document.querySelector('#chuveiros');

    let tipos = [lavadoras, geladeiras, microondas, chuveiros];

    for(item in tipos){
        if(item.style){
            calcularComparacao();
        }
    }
}

function calcularComparacao(tipo){

    switch(tipo){
        case 0:
        document.querySelector('result1').innerHTML = (img1lavadora.kWh * 24).toFixed(2);
        document.querySelector('result2').innerHTML = (img2lavadora.kWh * 24).toFixed(2);
        break;
    }
    
}





    /*
function mostrarLavadora(){
    var divImagens = document.getElementById("imagens");
    divImagens.textContent = '';
    var image = document.createElement("img");
    image.src =("/imagem/Lavadora-Brastemp.png")
    image.classList.add('imagensLavadora');
    var image2 = document.createElement("img");
    image2.src =("/imagem/Lavadora-Brastemp2.png")
    image2.classList.add('imagensLavadora');
    divImagens.appendChild(image)
    divImagens.appendChild(image2)
}
function mostrarGeladeira(){
    var divImagens = document.getElementById("imagens");
    divImagens.textContent = '';
    var image = document.createElement("img");
    var image2 = document.createElement("img");
    image.src =("/imagem/geladeira-brastemp.png")
    image.classList.add('imagensLavadora');
    
    image2.src =("/imagem/geladeira-brastemp2.png")
    image2.classList.add('imagensLavadora');
    divImagens.appendChild(image)
    divImagens.appendChild(image2)
}
*/