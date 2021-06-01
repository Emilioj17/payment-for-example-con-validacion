let loginForm = document.querySelector('#formulario');

loginForm.addEventListener('submit', function (evento) {
  //Valida Si input == '' && input tiene caracteres que no corresponden.

  evento.preventDefault();

  let regex = /[a-zA-Z0-9]/;
  let numerosRegex = /[0-9]/;

  //Validación para Numero de Tarjeta
  if (this.cardName.value === ''){
    alert('Por favor, revisa la información ingresada. Falta Numero de Tarjeta.');
    document.getElementById('cardName').focus();
    return;
  }
  if (!numerosRegex.test(this.cardName.value)){
    alert('Por favor, revisa la información ingresada. El número de la Tarjeta tiene caracteres que no Corresponden');
    document.getElementById('cardName').focus();
    return;
  }

  //Validacion para número CVC
  if (this.cvc.value === '') {
    alert('Por favor, revisa la información ingresada. Falta el CVC.');
    document.getElementById('cvc').focus();
    return;
  }
  if (!numerosRegex.test(this.cvc.value)){
    alert('Por favor, revisa la información ingresada. El número de CVC tiene caracteres que no Corresponden');
    document.getElementById('cvc').focus();
    return;
  }

  //Validacion para Cantidad
  if (this.inlineFormInputGroupUsername.value === '') {
    alert('Por favor, revisa la información ingresada. Falta la Cantidad.');
    document.getElementById('inlineFormInputGroupUsername').focus();
    return;
  }
  if (!numerosRegex.test(this.inlineFormInputGroupUsername.value)) {
    alert('Por favor, revisa la información ingresada. Cantidad tiene caracteres que no corresponden');
    document.getElementById('inlineFormInputGroupUsername').focus();
    return;
  }

  //Validacion para Nombre
  if (this.nombres.value === '') {
    alert('Por favor, revisa la información ingresada. Falta el Nombre.');
    document.getElementById('nombres').focus();
    return;
  }
  if (!regex.test(this.nombres.value)) {
    alert('Por favor, revisa la información ingresada. Nombre Con Caracteres Extraños.');
    document.getElementById('nombres').focus();
    return;
  }

  //Validacion para Apellido
  if (this.apellido.value === '') {
    alert('Por favor, revisa la información ingresada. Falta el Apellido.');
    document.getElementById('apellido').focus();
    return;
  }
  if (!regex.test(this.apellido.value)) {
    alert('Por favor, revisa la información ingresada. Nombre Con Caracteres Extraños.');
    document.getElementById('apellido').focus();
    return;
  }

  //Validacion para Ciudad
  if (this.ciudad.value === '') {
    alert('Por favor, revisa la información ingresada. Falta la Ciudad.');
    document.getElementById('ciudad').focus();
    return;
  }
  if (!regex.test(this.ciudad.value)) {
    alert('Por favor, revisa la información ingresada. Ciudad Incorrecta.');
    document.getElementById('ciudad').focus();
    return;
  }

  //Validacion para Region
  if (this.region.value === '') {
    alert('Por favor, revisa la información ingresada. Falta la Region.');
    document.getElementById('region').focus();
    return;
  }
  if (!regex.test(this.region.value)) {
    alert('Por favor, revisa la información ingresada. Region Incorrecta.');
    document.getElementById('region').focus();
    return;
  }

  //Validacion para Codigo Postal
  if (this.postalcode.value === '') {
    alert('Por favor, revisa la información ingresada. Falta el Codigo Postal.');
    document.getElementById('postalcode').focus();
    return;
  }
  if (!numerosRegex.test(this.postalcode.value)) {
    alert('Por favor, revisa la información ingresada. Falta el Codigo Postal.');
    document.getElementById('postalcode').focus();
    return;
  }

  //Validacion para We Accept
  if (this.exampleRadios1.checked == false && this.exampleRadios2.checked == false && this.exampleRadios3.checked == false && this.exampleRadios4.checked == false){
  // && (this.exampleRadios2.checked = false) && this.exampleRadios3.checked = false && this.exampleRadios4.checked = false){
    alert('Debes elegir una de las Opciones que Ofrecemos para Pago');
  }
  //Validacion para Comentario


});
