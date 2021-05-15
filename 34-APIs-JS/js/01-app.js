
const notificarBtn = document.querySelector('#notificar');
const notificarBtnq = document.querySelector('#abrir-pantalla-completa');
const notificarBtnw = document.querySelector('#salir-pantalla-completa');
const notificarBtnd = document.querySelector('#microfono');

notificarBtn.addEventListener('click', () => {
    Notification
    .requestPermission()
    .then( resultado => {
        console.log('El resultado es ', resultado);
    })
});

const verNotificacion = document.querySelector('#verNotificacion');
verNotificacion.addEventListener('click', () => {
    if(Notification.permission === 'granted') {
        const notificacion = new Notification('Esta es la notificación', {
            icon: 'img/ccj.png',
            body: 'Aprende con Gaby'
        });

        notificacion.onclick = function() {
            window.open('https://www.codigoconjuan.com')
        }
    }
})