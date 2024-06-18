function validarCampos() {

  const mailaddr = mailValid();
  const passwdValid = passwdisValid();
  
  if (mailaddr && passwdValid) {
    // alert(mailaddr+" "+passwdValid);
    document.getElementById('botaoLogin').disabled = false;
  } else {
    document.getElementById('botaoLogin').disabled = true;
  }

}

function login() {

  window.location.href = " Display.html";
  console.log('Window = ', window)
  console.log('Location = ', window.location)

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