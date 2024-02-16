document.forms['reg-form'].onsubmit = function (event) {
  // (C1) INIT
  var valid = true, error = "", field = "";

  // (C2) NAME
  field = document.getElementById("name");

  if (!field.checkValidity()) {
    valid = false;
    field.classList.add("err");
    field.classList.remove("valid");

  } else {
    field.classList.remove("err");
    field.classList.add("valid");

  }


  // (C3) NUMBER
  field = document.getElementById("number");

  if (!field.checkValidity()) {
    valid = false;
    field.classList.add("err");
    field.classList.remove("valid");

  } else {
    field.classList.remove("err");
    field.classList.add("valid");

  }
  //c4
  field = document.getElementById("age");
  if (!field.checkValidity()) {
    valid = false;
    field.classList.add("err");
    field.classList.remove("valid");

  } else {
    field.classList.remove("err");
    field.classList.add("valid");

  }
  //c5
  field = document.getElementById("email");
  if (!field.checkValidity()) {
    valid = false;
    field.classList.add("err");
    field.classList.remove("valid");

  } else {
    field.classList.remove("err");
    field.classList.add("valid");

  }
  //c6
  field = document.getElementById("number");
  if (!field.checkValidity()) {
    valid = false;
    field.classList.add("err");
    field.classList.remove("valid");

  } else {
    field.classList.remove("err");
    field.classList.add("valid");

  }
  //c7
  field = document.getElementById("idtype");
  if (!field.checkValidity()) {
    valid = false;
    field.classList.add("err");
    field.classList.remove("valid");

  } else {
    field.classList.remove("err");
    field.classList.add("valid");

  }
  //c8
  console.log('working')
  field = document.getElementById("idnum");
  if (!field.checkValidity()) {
    valid = false;
    field.classList.add("err");
    field.classList.remove("valid");
    event.preventDefault();
    return false;

  } else {
    field.classList.remove("err");
    field.classList.add("valid");
  }
}
 const field=document.getElementById("email");



 field.addEventListener("input",()=>{
  var valid = true;
  if(!field.checkValidity()) {
    valid = false;
    field.classList.remove("err");
    field.classList.remove("valid");

  } else {
    field.classList.remove("err");
    field.classList.add("valid");

  }
 })