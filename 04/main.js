const bodyOne = document.querySelector("#bodyone");
const slider = document.querySelector(".slider1");

slider.oninput = () => {
    let value = slider.value;
    if (value != 1) {
        bodyOne.style.visibility = "hidden"
    }
}