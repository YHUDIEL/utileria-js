function validarCorreo(correo) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}

function soloLetras(texto) {
    var regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/;
    return regex.test(texto);
}

function validarLongitud(numero, maxLongitud) {
    return String(numero).replace(/\D/g, '').length <= maxLongitud;
}

function calcularEdad(fechaNacimiento) {
    var hoy = new Date();
    var nacimiento = new Date(fechaNacimiento);
    var edad = hoy.getFullYear() - nacimiento.getFullYear();
    var mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }
    return edad;
}

function esMayorDeEdad(fechaNacimiento) {
    return calcularEdad(fechaNacimiento) >= 18;
}

function validarPassword(password) {
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/;
    return regex.test(password);
}

function formatearTelefono(telefono) {
    var digitos = telefono.replace(/\D/g, '');
    if (digitos.length !== 10) return '';
    return digitos.slice(0, 3) + '-' + digitos.slice(3, 6) + '-' + digitos.slice(6);
}

function capitalizarNombre(nombre) {
    return nombre.trim().split(' ').map(function(palabra) {
        return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    }).join(' ');
}

function obtenerRegionOaxaca(lada) {
    var regiones = {
        '951': 'Valles Centrales (Oaxaca de Juárez)',
        '971': 'Istmo de Tehuantepec (Juchitán / Tehuantepec)',
        '953': 'Cañada (Teotitlán del Camino / Cuicatlán)',
        '954': 'Costa (Puerto Escondido / Pinotepa Nacional)',
        '959': 'Sierra Sur (Pochutla / Miahuatlán)',
        '924': 'Mixteca (Huajuapan de León)',
        '272': 'Sierra Norte (Ixtlán de Juárez)'
    };
    var clave = String(lada).trim();
    return regiones[clave] || 'Región no identificada';
}
