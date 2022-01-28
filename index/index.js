window.onload = () => {
    var foco = false;
    document.getElementById("botonSend").onclick = () => {
        pasarInfo(document.getElementById("inputIP").value, document.getElementById("outputIP"), document.getElementById("outputLocation"), document.getElementById("outputTimeZone"), document.getElementById("outputISP"));
    }
}
document.addEventListener("keydown",
    function (event) {
        if (event.keyCode == 13 && foco == true) {
            pasarInfo(document.getElementById("inputIP").value, document.getElementById("outputIP"), document.getElementById("outputLocation"), document.getElementById("outputTimeZone"), document.getElementById("outputISP"));
        }
    }
)
function pasarInfo(inputIP, IP, location, timeZone, ISP) {
    let URL = `https://geo.ipify.org/api/v2/country,city?apiKey=at_1o6pFR27TaqhKkLg44eIGqiAVASlM&ipAddress=${inputIP}`
    const https = new XMLHttpRequest();
    https.open('GET', URL, true);
    https.send();
    https.onreadystatechange = function () {
        if (this.status == 200 && this.readyState == 4) {
            let datos = JSON.parse(this.responseText);
            IP.innerText = datos.ip;
            location.innerText = datos.location.city + " " + datos.location.country + " " + datos.location.postalCode;
            timeZone.innerText = datos.location.timezone;
            ISP.innerText = datos.isp;
        }
    }
}