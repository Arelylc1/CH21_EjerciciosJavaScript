let btnMayor = document.getElementById('btnMayor')
let btnMenor = document.getElementById('btnMenor')
let btnAdivina = document.getElementById('btnAdivina')
let btnMultiplo = document.getElementById('btnMultiplo')

btnMayor.addEventListener('click', function (event) {
    event.preventDefault();
    let n1 = parseInt(document.getElementById('inputNum1').value);
    let n2 = parseInt(document.getElementById('inputNum2').value); 
    let n3 = parseInt(document.getElementById('inputNum3').value); 

    let numMayor = n1;

    if(n2 > numMayor){
        numMayor = n2
    } 
    if ( n3 > numMayor) {
        numMayor = n3
    }
    
    let resultado = document.getElementById('alertMayor');
    resultado.innerHTML += '<strong>El número mayor es: </strong> ' + numMayor + '<br>'
    
})

btnMenor.addEventListener('click', function (event) {
    event.preventDefault();
    let n1 = parseInt(document.getElementById('inputNum1').value);
    let n2 = parseInt(document.getElementById('inputNum2').value); 
    let n3 = parseInt(document.getElementById('inputNum3').value); 

    let numMenor = n1;


    if(n2 < numMenor){
        numMenor = n2
    } 
    if ( n3 < numMenor) {
        numMenor = n3
    }
    
    let resultado = document.getElementById('alertMayor');
    resultado.innerHTML += '<strong>El número menor es: </strong> ' + numMenor  + '<br>'
    
})

btnAdivina.addEventListener('click', function (event) {
    event.preventDefault();
    let numAleatorio = Math.random() * 100

    let resultado = document.getElementById('alertMayor'); 
    resultado.innerHTML += '<strong>Número adivinado : </strong> ' + numAleatorio  + '<br>'
    
})