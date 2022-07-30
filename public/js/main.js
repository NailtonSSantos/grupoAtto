//VALIDAÇÃO DE CPF
function verificarCPF(cpf) {  
    // Remove os pontos/traço da expressão regular, caso exista
    cpf = cpf.replace(/[^\d]+/g,'');    
    if(cpf == '') return false;     

    // Elimina CPFs invalidos conhecidos    
    if (cpf.length != 11 ||         
    cpf == "00000000000" ||         
    cpf == "11111111111" ||         
    cpf == "22222222222" ||         
    cpf == "33333333333" ||         
    cpf == "44444444444" ||         
    cpf == "55555555555" ||         
    cpf == "66666666666" ||         
    cpf == "77777777777" ||         
    cpf == "88888888888" ||         
    cpf == "99999999999")       
    return false; 

    if (!/[0-9]{11}/.test(cpf)) return false;

    var soma = 0;

    for (var i = 1; i <= 9; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    var resto = soma % 11;

    if (resto === 10 || resto === 11 || resto < 2) {
        resto = 0;
    } else {
        resto = 11 - resto;
    }

    if (resto !== parseInt(cpf.substring(9, 10))) {
        return false;
    }

    soma = 0;

    for (var i = 1; i <= 10; i++) {
        soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    resto = soma % 11;

    if (resto === 10 || resto === 11 || resto < 2) {
        resto = 0;
    } else {
        resto = 11 - resto;
    }

    if (resto !== parseInt(cpf.substring(10, 11))) {
        return false;
    }

    return true;
}

//VALIDAÇÃO DE CNPJ
function verificarCNPJ(cnpj) {
    cnpj = cnpj.replace(/[^\d]+/g,'');

    if(cnpj == '') return false;
    if (cnpj.length != 14)
        return false;
    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" ||
        cnpj == "11111111111111" ||
        cnpj == "22222222222222" ||
        cnpj == "33333333333333" ||
        cnpj == "44444444444444" ||
        cnpj == "55555555555555" ||
        cnpj == "66666666666666" ||
        cnpj == "77777777777777" ||
        cnpj == "88888888888888" ||
        cnpj == "99999999999999")
        return false;
         

    // Valida DVs
    tamanho = cnpj.length - 2
    numeros = cnpj.substring(0,tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }

    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
        return false;
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }

    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
          return false;         

    return true;   

}




//FUNÇÃO DE CONFIRMAÇÃO DE EXCLUSÃO
function desejaExcluir(){
    var mensagem;
    var opcao=confirm("Tem certeza que deseja Excluir o Cadastro?");
    if (opcao==true)
      {
        mensagem="você pressionou OK!";
        window.location.reload();
      }
    else
      {
        mensagem="Você pressionou Cancelar!";
      }
    document.getElementById("demo").innerHTML=mensagem;
}

/*function desejaExcluir(){
var opcao=confirm("Tem certeza que deseja Excluir o Cadastro?");
    if (opcao==true)
      {
        $.ajax({
            URL: `/excluirAgricultores/${id}`,
            type: 'DELETE',
            sucess: function(resultado){
                if(resultado == 'OK'){
                    window.location.reload();
                }else{
                    alert(resultado)
                }
            }
        })
      }
}*/


function validarDoc() {
    var cpf = document.getElementById('cpf').value;
    var cnpj = document.getElementById('cnpj').value;
    if(cpf ==="" && cnpj === ""){
        alert("Insira um CPF ou CNPJ!");
        return;
    }else{
        if(cpf !== ""){
            if (!verificarCPF(cpf)) {
                alert("CPF inválido");
                return;
            }
        }else if (cnpj !==""){
            if (!verificarCNPJ(cnpj)) {
                alert("CNPJ inválido");
                return;
            }
        }else{
            if (!verificarCPF(cpf)) {
                alert("CPF inválido");
                return;
            }
            if (!verificarCNPJ(cnpj)) {
                alert("CNPJ inválido");
                return;
            }
        }
    }
    document.getElementById('formCadastroAgric').submit();
}