// ! Level 1_1

function double() {
    let inputValue = Number(document.querySelector("#input-value").value);
    let outputValue = inputValue * 2;
    
    document.querySelector("#times-two").innerHTML += `<p>${inputValue} * 2 = ${outputValue}</p>`
}

// ! Level 1_2

function ageCalc() {
    let inputYear = Number(document.querySelector("#input-year").value);
    let outputAge = 2024 - inputYear;

    document.querySelector("#bday").innerHTML += `<p>You are ${outputAge} years old</p>`
}

// ! Level 1_3

function ageDiff() {
    let age1 = Number(document.querySelector("#age1").value);
    let age2 = Number(document.querySelector("#age2").value);
    let diff = Math.abs(age1 - age2);
    
    document.querySelector(".difference").innerText = diff;
}