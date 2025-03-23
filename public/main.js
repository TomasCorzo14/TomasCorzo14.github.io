const datoNombre = document.querySelector("#datoNombre");
const datoMensaje = document.querySelector("#datoMensaje");
const datoDireccion = document.querySelector('#datoDireccion')


const btnEnviar= document.querySelector('#btnEnviar');



/* %20 espacio %0A Salto de linea */
var mensaje;

function enviar(){
    const valorCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');
    let nombresSeleccionados = "";
        
    for (let i = 0; i < valorCheckbox.length; i++) {
          nombresSeleccionados += valorCheckbox[i].value;
        if (i < valorCheckbox.length - 1) {
            nombresSeleccionados += " "; // o coma, dependiendo del separador que prefieras
        }
        }

    const valorRadio = document.querySelector('input[type="radio"]:checked')



    mensaje = `https://api.whatsapp.com/send?phone=+5493547672596&text=${'*PEDIDO*'}%0A${'Nombre: '}${datoNombre.value}%0A${'Dirección: '}${datoDireccion.value}%0A${'Producto: '}${nombresSeleccionados}%0A${'Forma de entrega: '}${valorRadio.value}%0A${datoMensaje.value}`
    btnEnviar.href = mensaje
}