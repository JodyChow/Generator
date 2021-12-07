const bodyOne = document.querySelector("#bodyone");
const bodyTwo = document.querySelector("#bodytwo");
const bodyThree = document.querySelector("#bodythree");

const slider = document.querySelector(".slider1");

slider.oninput = () => {
    let value = slider.value;

    if (value <= 1) {
        bodyOne.style.marginLeft = "0px";
    }

    if (value >= 2) {
        bodyOne.style.marginLeft = "-300px";

        bodyTwo.style.marginLeft = "0px";
        bodyTwo.style.marginTop = "50px";
    }

    if (value >= 3) {
        bodyOne.style.marginLeft = "-600px";
        bodyTwo.style.marginLeft = "-300px";

        bodyThree.style.marginLeft = "0px";
        bodyThree.style.marginTop = "100px";
    }

}