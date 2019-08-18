
function dataURItoBlob(dataURI) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
        byteString = atob(dataURI.split(',')[1]);
    else
        byteString = unescape(dataURI.split(',')[1]);
    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    // write the bytes of the string to a typed array
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ia], {type:mimeString});
}


$(document).ready(function(){
    // Se verifica si el navegador es compatible con dicha característica:
    if(navigator.share) {
        let $buttonShare = document.getElementById("btsahre");

        $buttonShare.addEventListener("click", function(e) {
            // Evitamos el comportamiento por default del enlace
            e.preventDefault();
        
            html2canvas(document.body).then(function(canvas) {
                console.log(canvas);
                
                var img = canvas.toDataURL();
                // Convert Base64 image to binary
                var file = dataURItoBlob(img);
                var dataimg = new FormData();
                dataimg.append('media[]', file, 'captura.png');

                const data = {
                    title: 'Captura APP',
                    text: 'Envio Captura de pantalla',
                    files: [dataimg]
                }
                navigator.share(dataimg)

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