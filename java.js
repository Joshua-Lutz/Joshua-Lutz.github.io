// Initialize the Datepicker widget
$(document).ready(function () {
    $("#datepicker").datepicker();
});

// Initializes the international telephone input with a dropdown for country codes
var input = document.querySelector("#telephone");
window.intlTelInput(input,({allowDropdown:true
}));


function loadDoc() { // Retained original function name
    const url = "https://api.openweathermap.org/data/2.5/weather?q=greensboro&appid=ed4bf7fe7c5834b1ea2aca4e7e89790e&units=imperial";
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const jsonResponse = JSON.parse(this.responseText);
            // Update the weather display
            document.getElementById("demo1").innerHTML = jsonResponse.main.temp + "&deg;F"; // Change here: Updated display
        } else if (this.readyState == 4) {
            // Handle errors
            document.getElementById("demo1").innerText = "Error fetching data."; // Change here: Added error handling
        }
    };

    xhttp.open("GET", url, true);
    xhttp.send();
}
