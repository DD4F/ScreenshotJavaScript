$(document).ready(function(){
    // Se verifica si el navegador es compatible con dicha característica:
    if(navigator.share) {
        let $buttonShare = document.getElementById("btsahre");

        $buttonShare.addEventListener("click", function(e) {
            // Evitamos el comportamiento por default del enlace
            e.preventDefault();
            var image = new Image();

            html2canvas(document.body).then(function(canvas) {
                console.log(canvas);
                image.src = canvas.toDataURL("image/png");
            })

            var fecha = new Date().toLocaleTimeString();
            var name = "captura" + fecha +".png";
            const fileName = name;
            const options = {type: 'image/png'};
            const file = new File(image, fileName, options);

            // navigator.share recibe un objeto con los siguientes parámetros:
            navigator.share({
                title: "Screenshot Share", // Título
                text: "Envio captura de pantalla", // Texto
                files: [file]
            })

            .then(() => console.log("Successful share")) // Si todo sale bien
            .catch((err) => console.log(`Error sharing ${err}`)); // Si hubo un error

            return false;
        });

    }else {
        alert("Tu navegador no es compatible con Web share API")
    }
});

/* 
    https://filisantillan.com/web-share-comparte-un-sitio-web-como-si-fuera-una-app-nativa/

*/