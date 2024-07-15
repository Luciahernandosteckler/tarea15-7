//Mostrar / ocultar  boton   Parametros showId, HideId

function toggleVisibility(showId, hideId) {
    let showElem = document.getElementById(showId);
    let hideElem = document.getElementById(hideId);

    showElem.classList.add('active');
    hideElem.classList.remove('active');
}