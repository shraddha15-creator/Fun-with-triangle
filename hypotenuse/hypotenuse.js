const sideInput = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const output = document.querySelector("#output");

hypotenuseBtn.addEventListener("click", calculateHypotenuse);

function calculateSumOfSquares(a, b){
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}

function calculateHypotenuse(){
    const sumOfSquares = calculateSumOfSquares(Number(sideInput[0].value), Number(sideInput[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    output.innerText = "The lenght of hypotenuse is " + lengthOfHypotenuse;
    console.log(lengthOfHypotenuse);
}
