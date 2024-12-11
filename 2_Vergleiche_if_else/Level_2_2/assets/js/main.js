// ! Level 2_2

function checkAirQuality() {
    const quality = document.querySelector("#quality").value;

    let body = document.querySelector("body");

    let status = document.querySelector("#status");
    status.innerText = quality;
    
    let healthConcern = document.querySelector("#health-concern");
    healthConcern.innerText = "Level of health concern:"
    
    let healthEffect = document.querySelector("#health-effect");
    healthEffect.innerText = "Level of health effect:"

    if(quality <= 50) {
        body.style.backgroundColor = "green";
        healthConcern.innerText += " Good";
        healthEffect.innerText += " Little to no risk";
    } else if(quality > 50 && quality <= 100) {
        body.style.backgroundColor = "yellow";
        healthConcern.innerText += " Moderate";
        healthEffect.innerText += " Acceptable quality";
    } else {
        body.style.backgroundColor = "orange";
        healthConcern.innerText += " Unhealthy for sensitive groups";
        healthEffect.innerText += " General public not likely affected";
    }

}