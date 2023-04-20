document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});

function validarFormulario(evento) {
    evento.preventDefault();
    var Name = document.getElementById('Name').value;
    if(Name.length == 0) {
    alert('Rellenar el campo de nombres');
    return;
    }
    var Surname = document.getElementById('Surname').value;
    if(Surname.length == 0) {
    alert('Rellenar el campo de apellidos');
    return;
    }
    var email= document.getElementById('email').value;
    if(email.length == 0) {
    alert('Rellenar el campo correo');
    return;
    }
    var mobile= document.getElementById('mobile').value;
    if(mobile.length == 0) {
    alert('Rellenar con numero celular');
    return;
    }
    var password= document.getElementById('password').value;
    if (password.length < 6) {
    alert('La contraseña no es válida');
    return;
    }

}
