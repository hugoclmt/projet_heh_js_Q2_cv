document.getElementById('darkmode').addEventListener('click', function() {
    var element = document.body;
    element.classList.toggle("night-mode");
    if (element.classList.contains("night-mode")) {
        localStorage.setItem('night-mode', 'true');
    } else {
        localStorage.setItem('night-mode', 'false');
    }
});