document.getElementById('toggle').addEventListener('click', () => {
    let modeicon = document.getElementById('modeicon');
    document.getElementById('blender').classList.toggle('expand');
    document.getElementById('toggle').classList.toggle('toggleclass2');
    modeicon.src.includes('nuit')? modeicon.src = './src/img/jour.svg' : modeicon.src = './src/img/nuit.svg';
});