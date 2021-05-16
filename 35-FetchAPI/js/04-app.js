const cargarAPIBtn = document.querySelector('#cargarAPI');

cargarAPIBtn.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'https://picsum.photos/list';

    fetch(url)
    .then( respuesta => respuesta.json() )
    .then( resultado => mostrarHTML( resultado ) )
}

function mostrarHTML( datos ) {
    const contenido = document.querySelector('.contenido');

    let html = '';

    datos.forEach( perfil => {
        const { author, post_url } = perfil; 

        html += `
        <p>Autor: ${author};
        <a href="${post_url}" target="_blank">Ver Imagen<a>
        `;
    } )

    contenido.innerHTML = html;
}