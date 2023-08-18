const showMsjError = 'show';
const hiddenMsjError = 'hidden';

const formSignUp = document.querySelector('.form-signUp');
let inputPassword = document.querySelector("[name='password']");
let inputConfirmPassword = document.querySelector("[name='confirmPassword']");
let elMsjError = document.querySelector('.msjError');
let formEl = document.forms['form'];



// Event Listener
formSignUp.addEventListener('submit', getData);
inputConfirmPassword.addEventListener('input', samePassword);

function getData(e){
  e.preventDefault();

  let [name, lastname, email, phoneNumber, password] = formEl.elements;
  
  const userData = {
    'name': name.value,
    'lastname': lastname.value,
    'email': email.value,
    'phoneNumber': phoneNumber.value,
    'password': password.value
  }

  console.log(userData);

  msjWelcome(userData);  
}

function samePassword(params) {

  if(inputPassword.value !== inputConfirmPassword.value){
    elMsjError.style.display = 'block';
    inputConfirmPassword.style.borderBottom = '2px #ff0000d1 solid';
    msjErrorForm('Password fields are not the same', showMsjError);    
  }else{
    msjErrorForm('', hiddenMsjError);        
  }
  
}

function msjErrorForm(msj, type){

  if (type == showMsjError) {

    elMsjError.innerHTML = msj;    

  }else if(type == hiddenMsjError){
    inputConfirmPassword.style.borderBottom = '2px #0000004f solid';     
    elMsjError.style.display = 'none';
  }

}