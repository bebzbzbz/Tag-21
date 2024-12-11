// ! Level 1_1

function adult() {
    const age = Number(document.querySelector("#age").value);

    if (age >= 18) {
        document.querySelector("#ageCheck").innerText = "Volljährig"
    } else {
        document.querySelector("#ageCheck").innerText = "Minderjährig"
    }
}

// ! Level 1_2

function weather() {
    const rating = Number(document.querySelector("#rating").value);
    let review = document.querySelector("#review");
    review.innerText = "Das Wetter ist:"

    if (rating >= 8) {
        review.innerText += " super"
    } else if (rating >= 6 && rating <= 7) {
        review.innerText += " gut"
    } else if (rating >= 3 && rating <= 5) {
        review.innerText += " okay"
    } else if (rating <= 2) {
        review.innerText += " schlecht"
    }
}

// ! Level 1_3

function shisha() {
    event.preventDefault();
    const age = Number(document.querySelector("#shishaAge").value);

    if (age >= 18) {
        document.querySelector("#shishaOderNicht").innerText = "Ja, Du kannst Shisha rauchen"
    } else {
        document.querySelector("#shishaOderNicht").innerText = "Du darfst noch nicht Shisha rauchen"
    }
}