console.log('hola');

const formSignUp = document.querySelector('.sign-up__form');
let formEl = document.forms['form'];

// Event Listener
formSignUp.addEventListener('submit', getData);


function getData(e){
  e.preventDefault();

  let [name, lastname, email, phoneNumber, password] = formEl.elements;

  console.log(name.value, lastname.value, email.value, phoneNumber.value, password.value);
  console.log(e);  

}