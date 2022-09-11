let valor1;
let valor2;

//Abaixo estão os botões usados nas funcionalidade "comparação de eltrodomésticos". Eles serão usados em alguns métodos abaixo.
let lavadoras = document.querySelector('#lavadoras');
let geladeiras = document.querySelector('#geladeiras');
let microondas = document.querySelector('#microondas');
let chuveiros = document.querySelector('#chuveiros');


function mudou(){

    valor1 = Number(document.querySelectorAll('#input')[0].value);
    valor2 = Number(document.querySelectorAll('#input')[1].value);
    calcular();
}

function calcular(){
    let valorFinal = valor1 * valor2;
    document.querySelector('#resultado').innerHTML = "Valor R$: " + valorFinal.toFixed(2);
}

function destacar(e){
    limparBordasDasImagens();


    document.querySelectorAll('.resultadoImagens')[0].innerHTML = 'Resultado R$';
    document.querySelectorAll('.resultadoImagens')[1].innerHTML = 'Resultado R$';
    document.querySelectorAll('.resultadoImagens')[2].innerHTML = 'Resultado R$';

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

function eletrodomesticoFactory(tipo, modelo, kWh) {
    return {
      tipo: tipo,
      modelo: modelo,
      kWh: kWh
    }
  }

let img1lavadora = eletrodomesticoFactory('lavadora', 'consul', 2);
let img2lavadora = eletrodomesticoFactory('lavadora','Brastemp', 1);
let img3lavadora = eletrodomesticoFactory('lavadora', 'samsung', 3);
let img1geladeira = eletrodomesticoFactory('geladeira', 'wiz', 1);
let img2geladeira = eletrodomesticoFactory('geladeira', 'brastemp', 2);
let img3geladeira = eletrodomesticoFactory('geladeira', 'seila', 3);


function comparacao(){
    limparBordasDasImagens();

    let tipos = [lavadoras, geladeiras, microondas, chuveiros];

    for(var i = 0; i < tipos.length; i++){
        if(tipos[i].classList.contains('destaque') == true){
            calcularComparacao(i);
        }
    }
}

function calcularComparacao(tipo){

    switch(tipo){
        case 0: //lavadoras
            resultadoImg1 = (img1lavadora.kWh * 24).toFixed(2);
            resultadoImg2 = (img2lavadora.kWh * 24).toFixed(2);
            resultadoImg3 = (img3lavadora.kWh * 24).toFixed(2);
            document.querySelector('#result1').innerHTML = "Resultado R$: " + resultadoImg1;
            document.querySelector('#result2').innerHTML = "Resultado R$: " + resultadoImg2;
            document.querySelector('#result3').innerHTML = "Resultado R$: " + resultadoImg3;

            testeBooleano(resultadoImg1, resultadoImg2, resultadoImg3);
            break;

        case 1: //geladeiras
            resultadoImg1 = (img1geladeira.kWh * 24).toFixed(2);
            resultadoImg2 = (img2geladeira.kWh * 24).toFixed(2);
            resultadoImg3 = (img3geladeira.kWh * 24).toFixed(2);
            document.querySelector('#result1').innerHTML = "Resultado R$: " + resultadoImg1;
            document.querySelector('#result2').innerHTML = "Resultado R$: " + resultadoImg2;
            document.querySelector('#result3').innerHTML = "Resultado R$: " + resultadoImg3;

            testeBooleano(resultadoImg1, resultadoImg2, resultadoImg3);
            break;
    }
    
}

var fila = [];
var elementos = document.getElementById('filaDeFato');
var quantidadeElementos = 0;

function adicionarNaFila(){
    let tipo = document.querySelectorAll('.formulario input')[0].value;
    let modelo = document.querySelectorAll('.formulario input')[1].value;
    let kWh = document.querySelectorAll('.formulario input')[2].value;

    item = eletrodomesticoFactory(tipo, modelo, kWh);

    fila.push(item);
    //limparInputs();
    
    var listItem = document.createElement('h4');
    listItem.textContent = "tipo: " + item.tipo + " modelo: " + item.modelo + " kWh: " + item.kWh;
    elementos.appendChild(listItem);
}

function retirarDaFila(){
    fila.shift();
    document.querySelectorAll('#filaDeFato h4')[quantidadeElementos].textContent = '';
    //document.querySelectorAll('#filaDeFato h4')[quantidadeElementos].remove();
    document.querySelectorAll('#filaDeFato h4')[quantidadeElementos].style.display = 'none';
    //document.querySelectorAll('#filaDeFato h4')[quantidadeElementos].style.backgroundColor = 'white';

    quantidadeElementos++;
}

function testeBooleano(resultadoImg1, resultadoImg2, resultadoImg3){
    if(resultadoImg1 < resultadoImg2 && resultadoImg1 < resultadoImg3){
        //document.getElementById('img1').classList.remove('mostrarImagens');
        document.getElementById('img1').classList.add('bordaImagens');
    }else if(resultadoImg2 < resultadoImg1 && resultadoImg2 < resultadoImg3){
        //document.getElementById('img2').classList.remove('mostrarImagens');
        document.getElementById('img2').classList.add('bordaImagens');
    }else if(resultadoImg3 < resultadoImg1 && resultadoImg3 < resultadoImg2){
        //document.getElementById('img3').classList.remove('mostrarImagens');
        document.getElementById('img3').classList.add('bordaImagens');
    }
}

function mostrarGeladeira(){
    var img1 = document.getElementById('img1')
    img1.src =("C:/Users/MMora/Documents/imagens eletrodomésticos/geladeira a.jpg");
    img1.classList.add('mostrarImagens')

    var img2 = document.getElementById('img2')
    img2.src =("C:/Users/MMora/Documents/imagens eletrodomésticos/geladeira b.jpg");
    img2.classList.add('mostrarImagens')

    var img3 = document.getElementById('img3')
    img3.src =("C:/Users/MMora/Documents/imagens eletrodomésticos/geladeira c.jpg")
    img3.classList.add('mostrarImagens')
}


function mostrarLavadora(){
    var img1 = document.getElementById('img1')
    img1.src =("C:/Users/MMora/Documents/imagens eletrodomésticos/lavadora a.jpg")
    img1.classList.add('mostrarImagens')

    var img2 = document.getElementById('img2')
    img2.src =("C:/Users/MMora/Documents/imagens eletrodomésticos/lavadora b.jpg")
    img2.classList.add('mostrarImagens')

    var img3 = document.getElementById('img3')
    img3.src =("C:/Users/MMora/Documents/imagens eletrodomésticos/lavadora c.jpg")
    img3.classList.add('mostrarImagens')
}

function limparBordasDasImagens(){
    document.getElementById('img1').classList.remove('bordaImagens');
    document.getElementById('img2').classList.remove('bordaImagens');
    document.getElementById('img3').classList.remove('bordaImagens');

}

function limparInputs(){
    document.querySelectorAll('.formulario input')[0].value = '';
    document.querySelectorAll('.formulario input')[1].value = '';
    document.querySelectorAll('.formulario input')[2].value = '';
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

