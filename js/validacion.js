"use strict";

function showAlertSuccess() {
  document.getElementById("alert-success").classList.add("show");
  esconderAlert()
}

function showAlertError() {
  document.getElementById("alert-danger").classList.add("show");
  esconderAlert()
}


function esconderAlert(){
  $('#alert-success').delay(2500).hide(300);
  $('#alert-danger').delay(2500).hide(300);
}
// Solucion posible sin usar BOOTSTRAP

// const btn = document.getElementById("regBtn");

// btn.addEventListener("click", function () {
//   let nombre = document.getElementById("nombre").value;
//   let apellido = document.getElementById("apellido").value;
//   let email = document.getElementById("email").value;
//   let psw1 = document.getElementById("password1").value;
//   let psw2 = document.getElementById("password2").value;
//   let terminos = document.getElementById("terminos");

//   if (
//     nombre !== "" &&
//     apellido !== "" &&
//     email !== "" &&
//     psw1 == psw2 &&
//     terminos.checked
//   ) {
//     document.getElementById("alert-success").style.display = "block";
//     showAlertSuccess();
//   } else {
//     document.getElementById("alert-danger").style.display = "block";
//     showAlertError();
//   }
// });
let checkbox = document.getElementById('terminos')

function validate(){

 let divError = document.getElementById('checkboxMsgError')
 let btn = document.getElementById('btnModal')

  if(checkbox.checked){
    btn.classList.remove("text-danger")
    divError.classList.add("text-success","d-none")
  }else{
    btn.classList.add("text-danger")
    divError.classList.remove("d-none")
    divError.classList.add("text-danger")
    
  }
}

checkbox.addEventListener("click", function(e){
  validate()
})
