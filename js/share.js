$(document).ready(function(){
    // Se verifica si el navegador es compatible con dicha característica:
    if(navigator.share) {
        let $buttonShare = document.getElementById("btsahre");

        $buttonShare.addEventListener("click", function(e) {
            // Evitamos el comportamiento por default del enlace
            e.preventDefault();
        
            html2canvas(document.body).then(function(canvas) {
                console.log(canvas);
                
                /*// navigator.share recibe un objeto con los siguientes parámetros:
                navigator.share({
                    title: "Screenshot Share", // Título
                    text: "Envio captura de pantalla", // Texto
                    files: [canvas]
                })
                */

                const options = {type: 'text/plain'};
                const first = new File(['one'], 'first.txt', options);
                const data = {
                    title: 'Files 1',
                    text: 'Here are the numbers',
                    url: 'https://example.com/',
                    files: [first]
                }
                setupManualShareTest(data);
                callWhenButtonClicked(() => navigator.share(data)

                .then(() => console.log("Successful share")) // Si todo sale bien
                .catch((err) => console.log(`Error sharing ${err}`)); // Si hubo un error
  
            })
            return false;
        });

    }else {
        alert("Tu navegador no es compatible con Web share API")
    }
});

/* 
    https://filisantillan.com/web-share-comparte-un-sitio-web-como-si-fuera-una-app-nativa/

*/