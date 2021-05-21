
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

document.addEventListener('DOMContentLoaded', () => {
    formulario.addEventListener('submit', validarBusqueda);
})

function validarBusqueda(e) {
    e.preventDefault();

const busqueda = document.querySelector('#busqueda').value;

if(busqueda.length < 3) {
    mostrarMensaje('Búsqueda muy corta... Añade más información');
    return;
}

consultarAPI(busqueda);
}

function consultarAPI(busqueda) {
    const githubUrl = `https://jobs.github.com/positions.json?search=${busqueda}`;
    const url = `https://api.allorigins.win/get?url=${ encodeURIComponent(githubUrl) }`;

    axios.get(url)
    .then( respuesta => mostrarVacante(JSON.parse(respuesta.data.contents)) ); 
}

function mostrarMensaje(msj) { 
    const alertaPrevia = document.querySelector('.alerta');

    if(!alertaPrevia){
        const alerta = document.createElement('div');
        alerta.classList.add('bg-gray-100', 'p-3', 'text-center', 'mt-3', 'alerta' );
        alerta.textContent = msj;
    
        formulario.appendChild(alerta);
    
        setTimeout( () => {
            alerta.remove();
        }, 3000)
    }
}

function mostrarVacante(vacantes) {
    while( resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }

    if(vacantes.length > 0) {
        resultado.classList.add('grid');

        vacantes.forEach(vacante => {
            const { company } = vacante;

            resultado.innerHTML += `
            <div class="shadow bg-white p-6 rounded">
            </div>
            `
        })
    }
}