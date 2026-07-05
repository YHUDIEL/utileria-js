document.getElementById('nombre').addEventListener('blur', function() {
    if (this.value.trim() !== '' && soloLetras(this.value)) {
        this.value = capitalizarNombre(this.value);
    }
});

document.getElementById('telefono').addEventListener('blur', function() {
    var formateado = formatearTelefono(this.value);
    if (formateado !== '') {
        this.value = formateado;
        var lada = this.value.slice(0, 3);
        document.getElementById('region').value = obtenerRegionOaxaca(lada);
    } else {
        document.getElementById('region').value = '';
    }
});

function mostrarError(id, mostrar) {
    var el = document.getElementById(id);
    if (mostrar) {
        el.classList.add('visible');
    } else {
        el.classList.remove('visible');
    }
}

function enviarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var telefono = document.getElementById('telefono').value;
    var fecha = document.getElementById('fecha').value;
    var codigo = document.getElementById('codigo').value;
    var valido = true;

    var nombreOk = nombre.trim() !== '' && soloLetras(nombre);
    var correoOk = validarCorreo(correo);
    var telefonoOk = formatearTelefono(telefono) !== '';
    var fechaOk = fecha !== '' && esMayorDeEdad(fecha);
    var codigoOk = codigo.trim() !== '' && validarLongitud(codigo, 5);

    mostrarError('errNombre', !nombreOk);
    mostrarError('errCorreo', !correoOk);
    mostrarError('errTelefono', !telefonoOk);
    mostrarError('errFecha', !fechaOk);
    mostrarError('errCodigo', !codigoOk);

    if (!nombreOk || !correoOk || !telefonoOk || !fechaOk || !codigoOk) {
        valido = false;
    }

    if (valido) {
        var edad = calcularEdad(fecha);
        document.getElementById('edadMostrar').textContent = edad;
        document.getElementById('nombreMostrar').textContent = 'Bienvenido, ' + capitalizarNombre(nombre);
        document.getElementById('modalOverlay').classList.add('activo');
    }
}

function cerrarModal() {
    document.getElementById('modalOverlay').classList.remove('activo');
}
