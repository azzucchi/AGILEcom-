function validarCampos(valor){

    alert('opa!!!');
    // funcao de validacao de campos
    // document.getElementById("botaoLogin").disabled = !emailValido;
    // const passwdValida = asenhaEvalida();

    document.getElementById("botaoLogin").disabled = !mailEvalido || !asenhaEvalida;
    //document.getElementById("botaoLogin").disabled = false;
}

function asenhaEvalida(){
    const senha = document.getElementById("senha").value;
    if (!senha) {
      return false;
    }
    return true;
}

function mailEvalido(){
    const mail=document.getElementById("email").value;
    if (!mail) {
      return false;
    }
    return validarEmail(mail);
}

function validarEmail(email){
    return /\S+@\S+\.\S+/.test(email);
}
