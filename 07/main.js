// SLIDER ONE : HEIGHT //
// SLIDER ONE : HEIGHT //
const bodyOne = document.querySelector("#bodyone");
const bodyTwo = document.querySelector("#bodytwo");
const bodyThree = document.querySelector("#bodythree");
const bodyFour = document.querySelector("#bodyfour");
const bodyFive = document.querySelector("#bodyfive");

const slider = document.querySelector(".slider1");

slider.oninput = () => {
    let value = slider.value;

    if (value <= 1) {
        bodyOne.style.marginLeft = "0px";
    }

    if (value >= 2) {
        bodyOne.style.marginLeft = "-300px";

        bodyTwo.style.marginLeft = "0px";
        bodyTwo.style.marginTop = "20px";
    }

    if (value >= 3) {
        bodyOne.style.marginLeft = "-600px";
        bodyTwo.style.marginLeft = "-300px";

        bodyThree.style.marginLeft = "0px";
        bodyThree.style.marginTop = "50px";
    }

    if (value >= 4) {
        bodyOne.style.marginLeft = "-900px";
        bodyTwo.style.marginLeft = "-600px";
        bodyThree.style.marginLeft = "-300px";

        bodyFour.style.marginLeft = "0px";
        bodyFour.style.marginTop = "75px";
    }

    if (value >= 5) {
        bodyOne.style.marginLeft = "-1200px";
        bodyTwo.style.marginLeft = "-900px";
        bodyThree.style.marginLeft = "-600px";
        bodyFour.style.marginLeft = "-300px";

        bodyFive.style.marginLeft = "0px";
        bodyFive.style.marginTop = "100px";
    }

}

// SLIDER TWO : ARMS //
// SLIDER TWO : ARMS //
const armOne = document.querySelector("#armone");
const armTwo = document.querySelector("#armtwo");
const armThree = document.querySelector("#armthree");
const armFour = document.querySelector("#armfour");
const armFive = document.querySelector("#armfive");

const slider2 = document.querySelector(".slider2");

slider2.oninput = () => {
    let value = slider2.value;

    if (value <= 1) {
        armOne.style.marginTop = "0px";
        armTwo.style.marginTop = "100px";
    }

    if (value >= 2) {
        armOne.style.marginTop = "-100px";
        armTwo.style.marginTop = "-100px";

        armThree.style.marginTop = "100px";
    }

    if (value >= 3) {
        armOne.style.marginTop = "-300px";
        armTwo.style.marginTop = "-200px";

        armThree.style.marginTop = "50px";

        armFour.style.marginTop = "100px";
    }

    if (value >= 4) {
        armOne.style.marginTop = "-400px";
        armTwo.style.marginTop = "-300px";
        armThree.style.marginTop = "-200px";

        armFour.style.marginTop = "-25px";

        armFive.style.marginTop = "100px";
    }

    if (value >= 5) {
        armOne.style.marginTop = "-500px";
        armTwo.style.marginTop = "-400px";
        armThree.style.marginTop = "-300px";
        armFour.style.marginTop = "-200px";

        armFive.style.marginTop = "-25px";
    }
}

// SLIDER THREE : EYES //
// SLIDER THREE : EYES //
const eyesOne = document.querySelector("#eyesone");
const eyesTwo = document.querySelector("#eyestwo");

const slider3 = document.querySelector(".slider3");

slider3.oninput = () => {
    let value = slider3.value;

    if (value <= 1) {
        eyesOne.style.marginTop = "0px";
    }
    if (value >= 2) {
        eyesOne.style.marginTop = "-60px";
        eyesTwo.style.marginTop = "0px";
    }

}

// SLIDER SIX : BODY ROUNDNESS //
// SLIDER SIX : BODY ROUNDNESS //
const slider6 = document.querySelector(".slider6");

slider6.oninput = () => {
    let value = slider6.value;

    if (value <= 1) {
        bodyOne.style.borderRadius = "0px";
        bodyTwo.style.borderRadius = "0px";
        bodyThree.style.borderRadius = "0px";
        bodyFour.style.borderRadius = "0px";
        bodyFive.style.borderRadius = "0px";
    }

    if (value >= 2) {
        bodies.style.borderRadius = "10px";
        bodyTwo.style.borderRadius = "10px";
        bodyThree.style.borderRadius = "10px";
        bodyFour.style.borderRadius = "10px";
        bodyFive.style.borderRadius = "10px";
    }

    if (value >= 3) {
        bodies.style.borderRadius = "20px";
        bodyTwo.style.borderRadius = "20px";
        bodyThree.style.borderRadius = "20px";
        bodyFour.style.borderRadius = "20px";
        bodyFive.style.borderRadius = "20px";
    }

    if (value >= 4) {
        bodies.style.borderRadius = "40px";
        bodyTwo.style.borderRadius = "40px";
        bodyThree.style.borderRadius = "40px";
        bodyFour.style.borderRadius = "40px";
        bodyFive.style.borderRadius = "40px";
    }

    if (value >= 5) {
        bodies.style.borderRadius = "50px";
        bodyTwo.style.borderRadius = "50px";
        bodyThree.style.borderRadius = "50px";
        bodyFour.style.borderRadius = "50px";
        bodyFive.style.borderRadius = "50px";
    }
}