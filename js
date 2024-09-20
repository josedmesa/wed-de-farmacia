// Función para calcular la dosis
function calcularDosis() {
    const peso = document.getElementById('peso').value;
    if (peso) {
        const dosis = peso * 0.5; 
        document.getElementById('resultado-dosis').textContent = `La dosis recomendada es: ${dosis} mg.`;
    } else {
        document.getElementById('resultado-dosis').textContent = 'Por favor ingresa un peso válido.';
    }
}

// Función para añadir comentarios
function agregarComentario() {
    const comentario = document.getElementById('comentario').value;
    if (comentario) {
        const listaComentarios = document.getElementById('lista-comentarios');
        const nuevoComentario = document.createElement('li');
        nuevoComentario.textContent = comentario;
        listaComentarios.appendChild(nuevoComentario);
        document.getElementById('comentario').value = ''; 
    } else {
        alert('Por favor ingresa un comentario.');
    }
}

// Función para calificar productos
function calificarProducto() {
    const estrellas = document.getElementById('calificacion').value;
    document.getElementById('resultado-calificacion').textContent = `Producto calificado con ${estrellas} estrellas.`;
}
