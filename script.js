let qrCode = document.querySelector("img");
let qrText = document.querySelector("textarea");
let qrBtn = document.querySelector("button");
// let dwnBtn = document.querySelector("dwnldBtn");

qrBtn.addEventListener('click', generateQR);
// dwnBtn.addEventListener('click', downloadFile(url, "QR-Code"));

function generateQR(){
    let size = "1000x1000";
    let data = qrText.value;
    let baseURL = "http://api.qrserver.com/v1/create-qr-code/";

    let url = `${baseURL}?data=${data}&size=${size}`;

    qrCode.src = url;
}

//Usng filesaver.js and dom-to-image.js to take the screenshot of the QR Code image and make it downloadable
$(document).ready(function(){
    $("#dwnldBtn").click(function(){
        domtoimage.toBlob(document.getElementById('imgDiv'))
        .then(function(blob){
            window.saveAs(blob, 'QR-Code.png');
        });
    });
});