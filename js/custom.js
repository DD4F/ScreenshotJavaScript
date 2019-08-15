function saveAs(uri, filename) {

    var link = document.createElement('a');

    if (typeof link.download === 'string') {
        link.href = uri;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }else{
        window.open(uri);
    }
}

$(document).ready(function() {

    $("#screenshot").click(function(){
        console.log("Click en screenshot");
        var fecha = new Date().toLocaleTimeString();
        html2canvas(document.body).then(function(canvas) {
            console.log(canvas);
            var name = "captura" + fecha +".png"; 
            saveAs(canvas.toDataURL(), name);

            location.href = 'whatsapp://send?text=Envia%20la%20captura%20descargada';
        });
    });
});

/*
    Documentacion html2canvas
    https://html2canvas.hertzen.com/
    https://html2canvas.hertzen.com/documentation

*/