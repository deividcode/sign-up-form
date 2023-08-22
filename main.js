const showMsjError = 'show';
const hiddenMsjError = 'hidden';

let elModal = document.querySelector('.modal');

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

  let [name, lastName, email, phoneNumber, password] = formEl.elements;
  
  if(name.value !== null, lastName.value !== null, 
    email.value !== null, phoneNumber.value !== null, 
    password.value !== null){

      const userData = {
        'name': name.value ,
        'lastName': lastName.value,
        'email': email.value,
        'phoneNumber': phoneNumber.value,
        'password': password.value
      }
      
      formEl.reset();

      showModal(userData.name, userData.lastName);  
    }  

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

function showModal(name, lastName) { 

  let show = `        
    <div class="content-modal">
      <h2>Welcome ${name + ' ' + lastName}</h2>
      <p>Already a member of <span class="highlight">Music L.A.</span> Now you can enjoy the music you want</p>

      <div class="modal-buttons">
        <button class="form-signUp-button">Empezar</button>
        <button class="form-signUp-button button-gray close-modal">Cerrar</button>
      </div>

    </div>    
  `;
    
  elModal.style.display = 'grid';
  elModal.insertAdjacentHTML("beforeend", show);

  let elContentModal = document.querySelector('.content-modal');
  let elCloseModal = document.querySelector('.close-modal');
  
  
  elCloseModal.addEventListener('click', () =>{
    elModal.style.display = 'none';
    elModal.removeChild(elContentModal);
  });

}