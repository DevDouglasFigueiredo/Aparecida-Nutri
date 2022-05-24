var titulo = document.querySelector('.titulo');
titulo.textContent = 'Cida Nutricionista';

var pacientes = document.querySelectorAll('.paciente');

for(var i = 0; i < pacientes.length; i++){

    paciente = pacientes[i]

    var tdPeso = paciente.querySelector('.info-peso');
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector('.info-altura');
    var altura = tdAltura.textContent;
    
    var tdImc = paciente.querySelector('.info-imc');
    
    
    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);
    
    if (!pesoValido) {
        pesoValido = false;
        tdImc.textContent = 'Peso Inválido';
        paciente.classList.add('paciente-invalido')
    
    }
    
    if (!alturaValida) {
        alturaValida = false;
        tdImc.textContent = 'Altura Inválida';
        paciente.classList.add('paciente-invalido')
    }
    
    if (pesoValido && alturaValida) {
        var imc = calculaImc(peso, altura);
    
        tdImc.textContent = imc;
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso <= 1000){
        return true;

    } else{

        return false;
    }
}

function validaAltura (altura){
    if(altura >= 0 && altura <= 3.00){
        return true;
    } else {
        return false;
    }
}



function calculaImc (peso, altura){
    var imc = 0;  // opcional

    imc = peso / (altura * altura)

    return imc.toFixed(2)
}



