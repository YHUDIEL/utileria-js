function mostrarError(id, mostrar) {
    var el = document.getElementById(id);
    if (mostrar) {
        el.classList.add('visible');
    } else {
        el.classList.remove('visible');
    }
}

function iniciarSesion() {
    var correo = document.getElementById('correo').value;
    var password = document.getElementById('password').value;

    var correoOk = validarCorreo(correo);
    var passwordOk = validarPassword(password);

    mostrarError('errCorreo', !correoOk);
    mostrarError('errPassword', !passwordOk);

    if (correoOk && passwordOk) {
        alert('Sesión iniciada correctamente.');
    }
}
