document.addEventListener("DOMContentLoaded", function () {
    const spans = document.querySelectorAll('span:not(.mi-clase)');

    for (let i = 0; i < spans.length; i++) {
        if (spans[i].textContent === 'External content') {
            spans[i].textContent = "Contenido Externo";
        }
    }
});