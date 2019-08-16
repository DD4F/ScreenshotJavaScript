$(document).ready(function(){
    // Se verifica si el navegador es compatible con dicha característica:
    if(navigator.share) {
        let $buttonShare = document.getElementById("btsahre");

        $buttonShare.addEventListener("click", function(e) {
            // Evitamos el comportamiento por default del enlace
            e.preventDefault();

            html2canvas(document.body).then(function(canvas) {
                console.log(canvas);
                canvas.toBlob(blob => navigator.share({blob: blob, mimeType: 'image/png'}),
                'image/png');
            })

            /*
            // navigator.share recibe un objeto con los siguientes parámetros:
            navigator.share({
                title: "Screenshot Share", // Título
                text: "Envio captura de pantalla" // Texto
            })
            */

            //.then(() => console.log("Successful share")) // Si todo sale bien
            //.catch((err) => console.log(`Error sharing ${err}`)); // Si hubo un error

            return false;
        });

    }else {
        alert("Tu navegador no es compatible con Web share API")
    }
});

/* 
    https://filisantillan.com/web-share-comparte-un-sitio-web-como-si-fuera-una-app-nativa/

*/