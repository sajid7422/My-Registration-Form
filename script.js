const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const username = document.getElementById('username');
const email = document.getElementById('email');
const number = document.getElementById('number');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');
const dob = document.getElementById('dob');

form.addEventListener('submit', (event) =>  {
    event.preventDefault();
    console.log('form submitted');
    validate();
    myFunction();
})

let sendData = (usernameVal, sRate, count) => {  
    if (sRate === count) {
    alert('Registration Successfully Completed');
    swal("Welcome!", "Your Registraction successfully completed", "success");
    location.href = "https://www.google.com";


}
}
const successMsg = (usernameVal) => {
     formCon = document.getElementsByClassName('form-control');
    let count = formCon.length - 1;
    for ( let i = 0; i < formCon.length; i++) {
        if (formCon[i].className === "form-control success") {
            let sRate = 0 + i;
            console.log(sRate);
            sendData(usernameVal, sRate, count);

        } else {
            return false;
        }
    }

}

const isEmail = (emailVal) => {
    var atsymbol = emailVal.indexOf("@");
    if(atsymbol < 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if(dot <= atsymbol + 3) return false;
    if(dot === emailVal.length - 1) return false;
    return true;
}

const validate = () => {
const fullnameVal = fullname.value.trim();
const usernameVal = username.value.trim();
const emailVal = email.value.trim();
const numberVal = number.value.trim();
const passwordVal = password.value.trim();
const cpasswordVal = cpassword.value.trim();
const dobVal = dob.value.trim();

if(fullnameVal === ""){
    setErrorMsg(fullname, 'Name can not be blank*');
}else if(fullnameVal.length <= 2){
    setErrorMsg(fullname, 'Name should be at least 3 characters*');
}else{
    setSuccessMsg(fullname);
}


if(usernameVal === ""){
    setErrorMsg(username, 'name can not be blank');
}else if(usernameVal.length <= 2){
    setErrorMsg(username, 'username min 3 character');
}else{
    setSuccessMsg(username);
}

if(emailVal === ""){
    setErrorMsg(email, 'email can not be blank');
}else if (!isEmail(emailVal)){
    setErrorMsg(email, 'not a valid email id')
}else{
    setSuccessMsg(email);
}

if(numberVal === ""){
    setErrorMsg(number, 'mobile number can not be blank');
}else if(numberVal.length < 10){
    setErrorMsg(number, 'invalid mobile number');
}else{
    setSuccessMsg(number);
}

if(passwordVal === ""){
    setErrorMsg(password, 'password can not be blank');
}else if(passwordVal.length <= 5){
    setErrorMsg(password, 'password must be 6 character');
}else{
    setSuccessMsg(password);
}

if(cpasswordVal === ""){
    setErrorMsg(cpassword, 'Confirm password can not be blank');
}else if(cpasswordVal != passwordVal){
    setErrorMsg(cpassword, 'passsword not match')
}else{
    setSuccessMsg(cpassword);
}

if(dobVal === ""){
    setErrorMsg(dob, 'Date of birth can not be blank');
}
else{
    setSuccessMsg(dob);
}

    successMsg(usernameVal);

}

function myFunction() {
    var show = document.getElementById('cpassword');
    var eye = document.getElementById('password');
    if(show.type == 'password') {
        show.type = 'text';
    }
    else{
        show.type = 'password';
    }
    if(eye.type == 'password'){
        eye.type = 'text';

    }else {
        eye.type = 'password';
    }

}

function setErrorMsg(input, errormsgs) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs

}

function setSuccessMsg(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}


