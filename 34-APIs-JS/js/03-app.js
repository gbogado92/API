window.addEventListener('online', actualizarEstado);
window.addEventListener('offline', actualizarEstado);

function actualizarEstado() {
    if(navigator.onLine) {
        console.log('Estás conectado a internet');
    } else {
        console.log('No estás conectado a internet');
    }
}