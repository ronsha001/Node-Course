const incBtn = document.getElementById("incBtn");
const decBtn = document.getElementById("decBtn");

let incVal = 0;
let decVal = 0;

const increaseMe = () => {
    incVal += 1;
    incBtn.innerHTML = incVal;
}

const decreaseMe = () => {
    decVal -= 1;
    decBtn.innerHTML = decVal;
}