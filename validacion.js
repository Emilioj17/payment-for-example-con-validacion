var loginForm = document.querySelector('#formulario');
var cardName = document.querySelector('#cardName');
var cvc = document.querySelector('#cvc');
var cantidad = document.querySelector('#cantidad');
var nombres = document.querySelector('#nombres');
var apellido = document.querySelector('#apellido');
var ciudad = document.querySelector('#ciudad');
var region = document.querySelector('#region');
var postalcode = document.querySelector('#postalcode');
var numerosRegex = /[0-9]/;
var regex = /[a-zA-Z0-9]/;
var regex2=/^[a-zA-Z][a-zA-Z0-9-_\.]{5,20}$/;
var numerosRegex2 = /[0-9]{5,20}$/;  //Para Numero de Tarjeta
var numerosRegex2b = /[0-9]{3,4}$/;  //Para CVC

function errorInput(variables, id) {
  console.log("Funcion si Corre");
  var inputConsiderado = document.getElementById(id);
  if (variables=="verde") {
    inputConsiderado.classList.add("is-valid");
    inputConsiderado.classList.remove("is-invalid");
  } else if (variables=="rojo") {
    inputConsiderado.classList.add("is-invalid");
    inputConsiderado.classList.remove("is-valid");
  } else{
  };
}; //Cambia style del Input si cumple parametros. Verde es válido. Recibe el id.

/* Funciones al Hacer Input */
cardName.addEventListener('input', function (evento) {

  // Evento (input) llama a errorInput en funcion de lo ingresado
  if (!numerosRegex2.test(cardName.value)){
    console.log("if de cardName");
    errorInput("rojo","cardName");
    return;
  } else if (numerosRegex2.test(cardName.value)) {
    console.log("Else de cardName");
    errorInput("verde","cardName");
    return;
  }
});

cvc.addEventListener('input', function (evento) {

  // Evento (input) llama a errorInput en funcion de lo ingresado
  if (!numerosRegex2b.test(cvc.value)){
    console.log("if de cvc");
    errorInput("rojo","cvc");
    return;
  } else if (numerosRegex2b.test(cvc.value)) {
    console.log("Else de cvc");
    errorInput("verde","cvc");
    return;
  }
});

cantidad.addEventListener('input', function (evento) {
  console.log("Si");
  // Evento (input) llama a errorInput en funcion de lo ingresado
  if (!numerosRegex.test(cantidad.value)){
    console.log("if de cantidad");
    errorInput("rojo","cantidad");
    return;
  } else if (numerosRegex.test(cantidad.value)) {
    console.log("Else de cantidad");
    errorInput("verde","cantidad");
    return;
  }
});

nombres.addEventListener('input', function (evento) {
  console.log("");
  // Evento (input) llama a errorInput en funcion de lo ingresado
  if (!regex.test(nombres.value)){
    console.log("if de nombres");
    errorInput("rojo","nombres");
    return;
  } else if (regex.test(nombres.value)) {
    console.log("Else de nombres");
    errorInput("verde","nombres");
    return;
  }
});

apellido.addEventListener('input', function (evento) {
  // Evento (input) llama a errorInput en funcion de lo ingresado
  if (!regex.test(apellido.value)){
    console.log("if de apellido");
    errorInput("rojo","apellido");
    return;
  } else if (regex.test(apellido.value)) {
    console.log("Else de apellido");
    errorInput("verde","apellido");
    return;
  }
});

ciudad.addEventListener('input', function (evento) {
  // Evento (input) llama a errorInput en funcion de lo ingresado
  if (!regex.test(ciudad.value)){
    console.log("if de ciudad");
    errorInput("rojo","ciudad");
    return;
  } else if (regex.test(ciudad.value)) {
    console.log("Else de ciudad");
    errorInput("verde","ciudad");
    return;
  }
});

region.addEventListener('input', function (evento) {
  // Evento (input) llama a errorInput en funcion de lo ingresado
  if (!regex.test(region.value)){
    console.log("if de region");
    errorInput("rojo","region");
    return;
  } else if (regex.test(region.value)) {
    console.log("Else de region");
    errorInput("verde","region");
    return;
  }
});

postalcode.addEventListener('input', function (evento) {
  // Evento (input) llama a errorInput en funcion de lo ingresado
  if (!numerosRegex.test(postalcode.value)){
    console.log("if de postalcode");
    errorInput("rojo","postalcode");
    return;
  } else if (numerosRegex.test(postalcode.value)) {
    console.log("Else de postalcode");
    errorInput("verde","postalcode");
    return;
  }
});

/* Funcion al Hacer Submit  */
loginForm.addEventListener('submit', function (evento) {
  //Valida Si input == '' && input tiene caracteres que no corresponden.
  evento.preventDefault();
  //Validación para Numero de Tarjeta
  if (this.cardName.value === ''){
    alert('Por favor, revisa la información ingresada. Falta Numero de Tarjeta.');
    document.getElementById('cardName').focus();
    this.cardName.classList.add("is-invalid");
    return;
  }
  if (!numerosRegex2.test(this.cardName.value)){
    alert('Por favor, revisa la información ingresada. El número de la Tarjeta tiene caracteres que no Corresponden');
    document.getElementById('cardName').focus();
    this.cardName.classList.add("is-invalid");
    return;
  }
  //Validacion para número CVC
  if (this.cvc.value === '') {
    alert('Por favor, revisa la información ingresada. Falta el CVC.');
    document.getElementById('cvc').focus();
    this.cvc.classList.add("is-invalid");
    return;
  }
  if (!numerosRegex2b.test(this.cvc.value)){
    alert('Por favor, revisa la información ingresada. El número de CVC tiene caracteres que no ssCorresponden');
    document.getElementById('cvc').focus();
    this.cvc.classList.add("is-invalid");
    return;
  }
  //Validacion para Cantidad
  if (this.cantidad.value === '') {
    alert('Por favor, revisa la información ingresada. Falta la Cantidad.');
    document.getElementById('cantidad').focus();
    this.cantidad.classList.add("is-invalid");
    return;
  }
  if (!numerosRegex.test(this.cantidad.value)) {
    alert('Por favor, revisa la información ingresada. Cantidad tiene caracteres que no corresponden');
    document.getElementById('cantidad').focus();
    this.cantidad.classList.add("is-invalid");
    return;
  }
  //Validacion para Nombre
  if (this.nombres.value === '') {
    alert('Por favor, revisa la información ingresada. Falta el Nombre.');
    document.getElementById('nombres').focus();
    this.nombres.classList.add("is-invalid");
    return;
  }
  if (!regex.test(this.nombres.value)) {
    alert('Por favor, revisa la información ingresada. Nombre Con Caracteres Extraños.');
    document.getElementById('nombres').focus();
    this.nombres.classList.add("is-invalid");
    return;
  }
  //Validacion para Apellido
  if (this.apellido.value === '') {
    alert('Por favor, revisa la información ingresada. Falta el Apellido.');
    document.getElementById('apellido').focus();
    this.apellido.classList.add("is-invalid");
    return;
  }
  if (!regex.test(this.apellido.value)) {
    alert('Por favor, revisa la información ingresada. Nombre Con Caracteres Extraños.');
    document.getElementById('apellido').focus();
    this.apellido.classList.add("is-invalid");
    return;
  }
  //Validacion para Ciudad
  if (this.ciudad.value === '') {
    alert('Por favor, revisa la información ingresada. Falta la Ciudad.');
    document.getElementById('ciudad').focus();
    this.ciudad.classList.add("is-invalid");
    return;
  }
  if (!regex.test(this.ciudad.value)) {
    alert('Por favor, revisa la información ingresada. Ciudad Incorrecta.');
    document.getElementById('ciudad').focus();
    this.ciudad.classList.add("is-invalid");
    return;
  }
  //Validacion para Region
  if (this.region.value === '') {
    alert('Por favor, revisa la información ingresada. Falta la Region.');
    document.getElementById('region').focus();
    this.region.classList.add("is-invalid");
    return;
  }
  if (!regex.test(this.region.value)) {
    alert('Por favor, revisa la información ingresada. Region Incorrecta.');
    document.getElementById('region').focus();
    this.region.classList.add("is-invalid");
    return;
  }
  //Validacion para Codigo Postal
  if (this.postalcode.value === '') {
    alert('Por favor, revisa la información ingresada. Falta el Codigo Postal.');
    document.getElementById('postalcode').focus();
    this.postalcode.classList.add("is-invalid");
    return;
  }
  if (!numerosRegex.test(this.postalcode.value)) {
    alert('Por favor, revisa la información ingresada. Falta el Codigo Postal.');
    document.getElementById('postalcode').focus();
    this.postalcode.classList.add("is-invalid");
    return;
  }
  //Validacion para We Accept
  if (this.exampleRadios1.checked == false && this.exampleRadios2.checked == false && this.exampleRadios3.checked == false && this.exampleRadios4.checked == false){
    alert('Debes elegir una de las Opciones que Ofrecemos para Pago');
  }
});
