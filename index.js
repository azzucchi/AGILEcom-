function validarCampos() {

  const mailaddr = mailValid();
  const passwdValid = passwdisValid();
  document.getElementById('botaoLogin').disable = !mailaddr || !passwdValid;

}

function mailValid(){

  const email = document.getElementById('email').value;
  if (!email){
    return false;
  } else {
    return emailValido(email);
  }

}

function passwdisValid(){
  
  const passwd = document.getElementById('senha').value;
  if (!passwd) {
    return false;
  }
  return true;

}

function emailValido(vmail) {

  return /\S+@\S+\.\S+/.test(vmail);

}