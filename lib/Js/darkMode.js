var bouton = document.getElementById('darkmode')




bouton.addEventListener('click', function() {
    var element = document.body;
    element.classList.toggle("night-mode");
    if (element.classList.contains("night-mode")) {
        localStorage.setItem('night-mode', 'true');
        bouton.innerText = "Jour";

    } else {
        localStorage.setItem('night-mode', 'false');
        bouton.innerText = "Nuit";
    }
});