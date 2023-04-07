
function tocaSom (idSom){
    const element = document.querySelector(idSom);
    if(element !== null && element.localName === 'audio'){
        element.play();
    }else{
        console.log('elemento não encontrado');
    }
}

const lista_de_teclas = document.querySelectorAll('.tecla');


for (let cont = 0; cont < lista_de_teclas.length; cont++) {
    
    const tecla = lista_de_teclas[cont];
    const instrumento = tecla.classList[1];
    
    tecla.onclick = function (event){
        tocaSom(`#som_${instrumento}`);
    }
    
    tecla.onkeydown = function(event){
        if(event.code === 'Space' || event.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function(event){
        if(event.code === 'Space' || event.code === 'Enter' || event.code === 'Tab'){
            tecla.classList.remove('ativa');
        }
    }
}
