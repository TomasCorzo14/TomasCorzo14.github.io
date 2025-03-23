const datoNombre = document.querySelector("#datoNombre");
const datoMensaje = document.querySelector("#datoMensaje");
const datoDireccion = document.querySelector('#datoDireccion');
const btnEnviar = document.querySelector('#btnEnviar');

function manejarCambioRadio() {
    const valorRadio = document.querySelector('input[type="radio"]:checked');
    if (valorRadio.value === 'Envio a domicilio') {
        datoDireccion.disabled = false;
        datoDireccion.style.opacity='1'
    } else {
        datoDireccion.disabled = true;
        datoDireccion.style.opacity='0'
    }
}

// Agrega evento change a todos los radio buttons
const radios = document.querySelectorAll('input[type="radio"]');
radios.forEach(radio => {
    radio.addEventListener('change', manejarCambioRadio);
});


function enviar() {
    const valorRadio = document.querySelector('input[type="radio"]:checked');

    if (datoNombre.value === '' || !valorRadio) {
        alert('Para realizar un pedido, se deben llenar todos los campos obligatorios.');
    } else {
        const valorCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
        let nombresSeleccionados = "";

        for (let i = 0; i < valorCheckbox.length; i++) {
            nombresSeleccionados += valorCheckbox[i].value;
            if (i < valorCheckbox.length - 1) {
                nombresSeleccionados += " "; // o coma, dependiendo del separador
            }
        }

        mensaje = `https://api.whatsapp.com/send?phone=+5493547672596&text=${'*PEDIDO*'}%0A${'Nombre: '}${datoNombre.value}%0A${'Dirección: '}${datoDireccion.value}%0A${'Producto: '}${nombresSeleccionados}%0A${'Forma de entrega: '}${valorRadio.value}%0A${datoMensaje.value}`;
        btnEnviar.href = mensaje;
    }
}
