
function calculateCoolingTime() {
    var roomTemp = document.getElementById("roomTemp").value;
    var wineTemp = document.getElementById("wineTemp").value;

    // Enkel algoritm (kan anpassas efter mer precisa data)
    var coolingTime = Math.max((roomTemp - wineTemp) * 10, 0); // Säkerställer att tiden inte är negativ

    document.getElementById("result").innerHTML = "Kylningsperiod: " + coolingTime + " minuter.";
}
