/*Déclaration de la fonction.*/
function verif() {
  var pass = document.getElementById('password');
  var confirm = document.getElementById('confirmPassword');

  if (pass.value === confirm.value) {
    pass.style.borderColor = 'green';
    confirm.style.borderColor = 'green';
    confirm.border = '3px';
  }
  else {
    pass.style.borderColor = 'red';
    confirm.style.borderColor = 'red';
    confirm.border = '3px';
  }
}
