
// Cuando el usuario haga clic en el botón para abrir el modal, mostrar el modal
function openModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "block";
}

// Cuando el usuario haga clic en el botón para cerrar el modal, ocultar el modal
function closeModal() {
  modal.style.display = "none";
}

// Cuando el usuario haga clic en cualquier parte fuera del modal, cerrar el modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


function openModalLogin(){
  var modal=document.getElementById("modalLogin");
  modal.style.display="block";
}

function closeModalLogin(){
  modal.style.display="none";
}

function openModalFromLogin(){
  var modal=document.getElementById("modal");
  var cerrarlogin=document.getElementById("modalLogin");
  cerrarlogin.style.display="none";
  modal.style.display="block";
}


//movimiento del encabezado
window.onscroll = function() {
  var encabezado = document.getElementById("encabezado");
  if (window.pageYOffset > 0) {
    encabezado.style.top = "0px";
  } else {
    encabezado.style.top = "-100px";
  }
  if (window.pageYOffset == 0) {
    encabezado.style.top = "0px";
  }
}

//Mensaje de registro
function showPopup() {
  event.preventDefault(); // Evita que el formulario se envíe
  // Muestra la ventana emergente
  document.getElementById("popup").classList.add("show");
  modal.style.display="none"
}

function closePopup() {
  // Cierra la ventana emergente
  document.getElementById("popup").classList.remove("show");
}

//login
function redirectToPrincipal() {
  // Redirige al usuario a principal.html
  window.location.href = "principal.html";
}

//cerrarsesion

function cerrarSesion(){
  window.location.href="index.html";
}
