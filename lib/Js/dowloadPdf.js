document.getElementById('dowloadPDF').addEventListener('click',function (){ //fonctionalité pour telecharger le cv
    window.alert("Tu as téléchargé mon CV !")
    const cv = "./src/cv/CV_ClementHugo_BLOC2_INFORMATIQUE.pdf";
    window.open(cv,'_blank');
});

document.addEventListener('DOMContentLoaded',()=>{
   window.onbeforeprint = (event) =>{
     event.preventDefault();
     window.location.href ="./src/cv/CV_ClementHugo_BLOC2_INFORMATIQUE.pdf";
   };
});