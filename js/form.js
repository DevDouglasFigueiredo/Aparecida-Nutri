var adicionarPaciente = document.querySelector('#adicionar-paciente');

adicionarPaciente.addEventListener('click', (event) => {
    event.preventDefault();

    var form = document.querySelector('#form-adiciona');

    var paciente = obtemPacienteDoFormulario(form);

  

    var erros = validaPaciente(paciente)
    
    if (erros.length > 0 ){
       exibeMensagensDeErros(erros);
        return;
    }

    adicionarPacienteNaTabela(paciente);

    form.reset();
    var mensagensErro = document.querySelector('#mensagens-erro')
    mensagensErro.innerHTML = "";

});

function adicionarPacienteNaTabela (paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);

}

function exibeMensagensDeErros(erros){
    var ul = document.querySelector('#mensagens-erro');
    ul.innerHTML = ""

    erros.forEach(function(erro){
        var li = document.createElement('li')
        li.textContent = erro;
        ul.appendChild(li)
    })

}

function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add("classe");
    td.textContent = dado;

    return td;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;

}


function validaPaciente(paciente){

    var erros = [];

    if(paciente.nome.length == 0){
        erros.push("Informe o nome, por favor")
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    if(paciente.gordura.length == 0){
        erros.push("A Gordura não pode ser em branco")
    }

    if(paciente.peso.length == 0){
        erros.push("informe o peso, por favor")
    }

    if(paciente.altura.length == 0) {
        erros.push("Informe a altura, por favor")
    }

    return erros;
}
