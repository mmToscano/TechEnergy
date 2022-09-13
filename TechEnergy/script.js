//os dois valores a serem múltiplicados para obter o kWh diário
let valor1;
let valor2;

function mudou(){

    valor1 = Number(document.querySelectorAll('#input')[0].value);
    valor2 = Number(document.querySelectorAll('#input')[1].value);
    calcular();
}

function calcular(){
    let valorFinal = valor1 * valor2;
    document.querySelector('#resultado').innerHTML = "Valor R$: " + valorFinal.toFixed(2);
}

////////////////////////////////////////////////////////////////////////////////////////////////

//Abaixo estão os botões usados nas funcionalidade "comparação de eltrodomésticos". Eles serão usados em alguns métodos abaixo.

let lavadoras = document.querySelector('#lavadoras');
let geladeiras = document.querySelector('#geladeiras');
let microondas = document.querySelector('#microondas');
let chuveiros = document.querySelector('#chuveiros');

//Função para mudar a borda do botão e destacá-lo
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
            mostrarMicroondas();
            break; 
        case 'chuveiros':
            lavadoras.classList.remove('destaque');
            geladeiras.classList.remove('destaque');
            microondas.classList.remove('destaque');
            chuveiros.classList.add('destaque');
            mostrarChuveiros();
            break;          
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////

//função construtora para o objeto "eletrodomesticoFactory" com seus devidos valores e a manipulação deles
function eletrodomesticoFactory(tipo, modelo, kWh) {
    return {
      tipo: tipo,
      modelo: modelo,
      kWh: kWh
    }
}

let img1lavadora = eletrodomesticoFactory('lavadora', 'consul', Math.floor(Math.random() * 10) + 1);
let img2lavadora = eletrodomesticoFactory('lavadora','Brastemp', Math.floor(Math.random() * 10) + 1);
let img3lavadora = eletrodomesticoFactory('lavadora', 'samsung', Math.floor(Math.random() * 10) + 1);

let img1geladeira = eletrodomesticoFactory('geladeira', 'wiz', Math.floor(Math.random() * 10) + 1);
let img2geladeira = eletrodomesticoFactory('geladeira', 'brastemp', Math.floor(Math.random() * 10) + 1);
let img3geladeira = eletrodomesticoFactory('geladeira', 'continental', Math.floor(Math.random() * 10) + 1);

let img1microondas = eletrodomesticoFactory('microondas', 'eletrolux', Math.floor(Math.random() * 10) + 1);
let img2microondas = eletrodomesticoFactory('microondas', 'brastemp', Math.floor(Math.random() * 10) + 1);
let img3microondas = eletrodomesticoFactory('microondas', 'LG', Math.floor(Math.random() * 10) + 1);

let img1chuveiros = eletrodomesticoFactory('chuveiros', 'eletrolux', Math.floor(Math.random() * 10) + 1);
let img2chuveiros = eletrodomesticoFactory('chuveiros', 'brastemp', Math.floor(Math.random() * 10) + 1);
let img3chuveiros = eletrodomesticoFactory('chuveiros', 'LG', Math.floor(Math.random() * 10) + 1);



function comparacao(){
    limparBordasDasImagens();

    let tipos = [lavadoras, geladeiras, microondas, chuveiros];

    for(var i = 0; i < tipos.length; i++){
        if(tipos[i].classList.contains('destaque')){
            calcularComparacao(i);
        }
    }
}

function calcularComparacao(opcaoBotaoClicado){

    switch(opcaoBotaoClicado){

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
        case 2: //microondas
            resultadoImg1 = (img1microondas.kWh * 24).toFixed(2);
            resultadoImg2 = (img2microondas.kWh * 24).toFixed(2);
            resultadoImg3 = (img3microondas.kWh * 24).toFixed(2);
            document.querySelector('#result1').innerHTML = "Resultado R$: " + resultadoImg1;
            document.querySelector('#result2').innerHTML = "Resultado R$: " + resultadoImg2;
            document.querySelector('#result3').innerHTML = "Resultado R$: " + resultadoImg3;

            testeBooleano(resultadoImg1, resultadoImg2, resultadoImg3);
            break;
        case 3: //chuveiros    
            resultadoImg1 = (img1chuveiros.kWh * 24).toFixed(2);
            resultadoImg2 = (img2chuveiros.kWh * 24).toFixed(2);
            resultadoImg3 = (img3chuveiros.kWh * 24).toFixed(2);
            document.querySelector('#result1').innerHTML = "Resultado R$: " + resultadoImg1;
            document.querySelector('#result2').innerHTML = "Resultado R$: " + resultadoImg2;
            document.querySelector('#result3').innerHTML = "Resultado R$: " + resultadoImg3;

            testeBooleano(resultadoImg1, resultadoImg2, resultadoImg3);
            break;
    }
    
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Código para manipulação da fila

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
    document.querySelectorAll('#filaDeFato h4')[quantidadeElementos].style.display = 'none';

    quantidadeElementos++;
}

//teste booleano para o método comparação.

function testeBooleano(resultadoImg1, resultadoImg2, resultadoImg3){

    if(resultadoImg1 < resultadoImg2 && resultadoImg1 < resultadoImg3){
        document.getElementById('img1').classList.add('bordaImagens');

    }else if(resultadoImg2 < resultadoImg1 && resultadoImg2 < resultadoImg3){
        document.getElementById('img2').classList.add('bordaImagens');
        
    }else if(resultadoImg3 < resultadoImg1 && resultadoImg3 < resultadoImg2){
        document.getElementById('img3').classList.add('bordaImagens');
    }

    
    if(resultadoImg1 == resultadoImg2){
        document.getElementById('img1').classList.add('bordaImagens');
        document.getElementById('img2').classList.add('bordaImagens');

    }else if(resultadoImg1 == resultadoImg3){
        document.getElementById('img1').classList.add('bordaImagens');
        document.getElementById('img3').classList.add('bordaImagens');
        
    }else if(resultadoImg2 == resultadoImg3){
        document.getElementById('img2').classList.add('bordaImagens');
        document.getElementById('img3').classList.add('bordaImagens');
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////

//4 métodos para receber as 12 imagens. Cada método mexe com 3 imagens.

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

function mostrarMicroondas(){
    var img1 = document.getElementById('img1')
    img1.src =("C:/Users/MMora/Documents/imagens eletrodomésticos/microondas a.jpeg");
    img1.classList.add('mostrarImagens')

    var img2 = document.getElementById('img2')
    img2.src =("C:/Users/MMora/Documents/imagens eletrodomésticos/microondas b.jpg");
    img2.classList.add('mostrarImagens')

    var img3 = document.getElementById('img3')
    img3.src =("C:/Users/MMora/Documents/imagens eletrodomésticos/microondas c.jpg")
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

function mostrarChuveiros(){
    var img1 = document.getElementById('img1')
    img1.src =("C:/Users/MMora/Documents/imagens eletrodomésticos/chuveiro a.png")
    img1.classList.add('mostrarImagens')

    var img2 = document.getElementById('img2')
    img2.src =("C:/Users/MMora/Documents/imagens eletrodomésticos/chuveiro b.png")
    img2.classList.add('mostrarImagens')

    var img3 = document.getElementById('img3')
    img3.src =("C:/Users/MMora/Documents/imagens eletrodomésticos/chuveiro c.png")
    img3.classList.add('mostrarImagens')
}

////////////////////////////////////////////////////////////////////////////////////////////////////

//métodos auxiliares

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
