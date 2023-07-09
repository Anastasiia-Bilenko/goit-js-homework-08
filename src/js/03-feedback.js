const emailEl = document.querySelector("input[name='email']");
const messageEl = document.querySelector("textarea[name='message']");
const formEl = document.querySelector(".feedback-form");
// const buttonEl = document.querySelector("button");
var throttle = require('lodash.throttle');

formEl.addEventListener('input',throttle(addValueInputToLS, 500));
function addValueInputToLS(evt){
const value = {
    email: `${emailEl.value}`,
    message: `${messageEl.value}`
}
localStorage.setItem("feedback-form-state", JSON.stringify(value));

}
const addedValueInLS = localStorage.getItem("feedback-form-state");
const valuesInLS = JSON.parse(addedValueInLS);
try {
emailEl.value = valuesInLS.email;
messageEl.value = valuesInLS.message;  
} catch (error) {
   emailEl.value = '' 
   messageEl.value = ''
}

formEl.addEventListener('submit', submitFun)
function submitFun(evt){
    evt.preventDefault()
    if(emailEl.value === '' || messageEl.value === ''){
        alert("Всі поля мають бути заповнені!")
        formEl.reset()
        return 
    } 
    console.log (`email:${emailEl.value} , message: ${messageEl.value}`)
     localStorage.clear();
     formEl.reset();   
}   


