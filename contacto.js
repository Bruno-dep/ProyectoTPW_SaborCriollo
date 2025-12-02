document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('.formulario-criollo');
    const mensajeDiv = document.createElement('div');
    mensajeDiv.id = 'mensaje-feedback'; 
    
    // Solo dejar estilos que son necesarios para el COMPORTAMIENTO (ocultar inicialmente)
    mensajeDiv.style.display = 'none';
    const botonEnviar = formulario.querySelector('.btn-enviar');
    formulario.insertBefore(mensajeDiv, botonEnviar);
    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); 
        // Siempre limpiar y ocultar antes de volver a mostrar
        mensajeDiv.textContent = '';
        mensajeDiv.style.display = 'none';
        
        //Validar los campos requeridos
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();

        if (nombre === "" || email === "" || mensaje === "") {
            mensajeDiv.textContent = "Error: Por favor, complete todos los campos requeridos.";
            mensajeDiv.style.backgroundColor = '#ffebee'; // Fondo rojo claro
            mensajeDiv.style.color = '#c62828'; // Texto rojo oscuro
            mensajeDiv.style.display = 'block';
            return; 
        }
        //Mostrar mensaje de éxito
        mensajeDiv.textContent = "¡Enviado exitoso! Gracias por contactarnos. Pronto te responderemos.";
        mensajeDiv.style.backgroundColor = '#e8f5e9'; // Fondo verde claro
        mensajeDiv.style.color = '#2e7d32'; // Texto verde oscuro
        mensajeDiv.style.display = 'block';
        //Reiniciar el formulario
        formulario.reset(); 
        //Desactivar el mensaje después de 5 segundos
        setTimeout(() => {
            mensajeDiv.style.display = 'none';
        }, 6000);
    });
});