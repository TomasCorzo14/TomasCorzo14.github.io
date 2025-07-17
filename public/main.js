const datoNombre = document.querySelector("#datoNombre");
const datoMensaje = document.querySelector("#datoMensaje");
const datoDireccion = document.querySelector('#datoDireccion');

const datoAbonar = document.querySelector('#datoAbonar')
const textAbonar = document.querySelector('#textAbonar')

const btnEnviar = document.querySelector('#btnEnviar');

function manejarCambioRadio() {
    const valorRadio = document.querySelector('input[name="formaEntrega"]:checked');
    if (valorRadio.value === 'Envio a domicilio') {
        datoDireccion.disabled = false;
        datoDireccion.style.opacity='1'
    } else{
        datoDireccion.disabled = true;
        datoDireccion.style.opacity='0'
    }
}

// Agrega evento change a todos los radio buttons
const radios = document.querySelectorAll('input[name="formaEntrega"]');
radios.forEach(radio => {
    radio.addEventListener('change', manejarCambioRadio);
});

function MetodoDePago() {
    const valorRadio = document.querySelector('input[name="metodoPago"]:checked');
    if (valorRadio.value === 'En efectivo') {
        textAbonar.style.opacity = '1'

        datoAbonar.disabled = false;
        datoAbonar.style.opacity='1'
    } else{
        textAbonar.style.opacity = '0'

        datoAbonar.disabled = true;
        datoAbonar.style.opacity='0'
    }
}

// Agrega evento change a todos los radio buttons
const radiosMetodoPago = document.querySelectorAll('input[name="metodoPago"]');
radiosMetodoPago.forEach(rad => {
    rad.addEventListener('change', MetodoDePago);
});


function enviar() {
    const valorRadio = document.querySelector('input[name="formaEntrega"]:checked');
    const valorRadioMetodoPago = document.querySelector('input[name="metodoPago"]:checked');

    if (datoNombre.value === '' || !valorRadio || !valorRadioMetodoPago || datoAbonar.value < 1) {
        alert('Para realizar un pedido, se deben llenar todos los campos obligatorios con respuestas validas.');
    } else {
        const valorCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
        let nombresSeleccionados = "";

        for (let i = 0; i < valorCheckbox.length; i++) {
            nombresSeleccionados += valorCheckbox[i].value;
            if (i < valorCheckbox.length - 1) {
                nombresSeleccionados += " ";
            }
        }
        mensaje = `https://api.whatsapp.com/send?phone=+5493547672596&text=${'*PEDIDO*'}%0A${'Nombre: '}${datoNombre.value}%0A${'Dirección: '}${datoDireccion.value}%0A${'Producto: '}${nombresSeleccionados}%0A${'Metodo de pago: '}${valorRadioMetodoPago.value}%20${'$'}${datoAbonar.value}%0A${'Forma de entrega: '}${valorRadio.value}%0A${datoMensaje.value}`;
        btnEnviar.href = mensaje;
    }
}