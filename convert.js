function chooseCelsius() {
    document.getElementById("celsius").disabled = false;
    document.getElementById("fahrenheit").disabled = true;

    document.getElementById("fahrenheit").value = "";
}

function chooseFahrenheit() {
    document.getElementById("celsius").disabled = true;
    document.getElementById("fahrenheit").disabled = false;

    document.getElementById("celsius").value = "";

}

function convertTemperatures() {
    if (document.getElementById("celsius").disabled == false) {
        document.getElementById("result").innerHTML = (document.getElementById("celsius").value * 1.8 + 32).toFixed(1) + "&deg;F";
    } else {
        document.getElementById("result").innerHTML = ((document.getElementById("fahrenheit").value - 32) / 1.8).toFixed(1) + "&deg;C";
    }
}


window.onload = function () {
    document.getElementById("c").onclick = chooseCelsius;
    document.getElementById("f").onclick = chooseFahrenheit;
    document.getElementById("celsius").oninput = convertTemperatures;
    document.getElementById("fahrenheit").oninput = convertTemperatures;
}