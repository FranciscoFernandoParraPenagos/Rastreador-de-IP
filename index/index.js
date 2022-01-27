window.onload = function () {
    var foco = false;
    document.getElementById("botonSend").onclick = function () {
        pasarInfo();
    }

}
document.addEventListener("keydown",
    function (event) {
        if (event.keyCode == 13 && foco == true) {
            pasarInfo();
        }
    }
)
function pasarInfo() {
    document.getElementById("outputIP").innerHTML = document.getElementById("inputIP").value;
}