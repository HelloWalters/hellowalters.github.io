function map(value, in_min, in_max, out_min, out_max) {
    return (value / (in_max - in_min)) * (out_max - out_min) + out_min;
}

function rotate(event) {
    const width = box.getBoundingClientRect().width;
    const height = box.getBoundingClientRect().height;
    const mouseX = event.clientX - event.target.offsetLeft;
    const mouseY = event.clientY - event.target.offsetTop;
    const rotationX = map(mouseY, 0, width, 10, -10);
    const rotationY = map(mouseX, 0, height, -10, 10);
    const rotateStyle = `perspective(1000px) rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    box.style.transitionDuration = "0";
    box.style.transform = rotateStyle;
}

let box;
window.addEventListener("DOMContentLoaded", () => {
    box = document.getElementById("pokemon-card");
    box.addEventListener("mousemove", rotate);
});
function recenterObject(element){
    element.style.transform = "rotateX(0deg) rotateY(0deg)";
}