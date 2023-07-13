const oneBtn = document.getElementById("one");
const twoBtn = document.getElementById("two");
const threeBtn = document.getElementById("three");
const fourBtn = document.getElementById("four");
const fiveBtn = document.getElementById("five");
const sixBtn = document.getElementById("six");
const sevenBtn = document.getElementById("seven");
const eightBtn = document.getElementById("eight");
const nineBtn = document.getElementById("nine");
const zeroBtn = document.getElementById("zero");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const divideBtn = document.getElementById("divide");
const multiplyBtn = document.getElementById("multiply");
const equalBtn = document.getElementById("equal");
let display = document.querySelector(".display");
display.textContent = " ";
let plusIndex , minusIndex , multiplyIndex, divideIndex, equalIndex;
let exContent , nextContent;
oneBtn.addEventListener("click", () => {
    display.textContent += "1";
})
twoBtn.addEventListener("click", () => { 
    display.textContent += "2";
})
threeBtn.addEventListener("click", () => {
    display.textContent += "3";
})
fourBtn.addEventListener("click", () => {
    display.textContent += "4";
})
fiveBtn.addEventListener("click", () => {
    display.textContent += "5";
})
sixBtn.addEventListener("click", () => {
    display.textContent += "6";
})
sevenBtn.addEventListener("click", () => {
    display.textContent += "7";
})
eightBtn.addEventListener("click", () => {
    display.textContent += "8";
})
nineBtn.addEventListener("click", () => {
    display.textContent += "9";
})
zeroBtn.addEventListener("click", () => {
    display.textContent += "0";
})
plusBtn.addEventListener("click", () => {
   exContent = Number(display.textContent);
   display.textContent = exContent + "+";
})
minusBtn.addEventListener("click", () => {
    exContent = Number(display.textContent);
    display.textContent += "-";
})
multiplyBtn.addEventListener("click", () => {
    exContent = Number(display.textContent);
    display.textContent += "×" ;
})
divideBtn.addEventListener("click", () => {
    exContent = Number(display.textContent);
    display.textContent += "/" ;
})
equalBtn.addEventListener("click", () => {
    display.textContent += "=";
    equalIndex = (display.textContent).indexOf("=") ;
    if((display.textContent).includes("+") ){ 
       plusIndex = (display.textContent).indexOf("+") + 1 ;
       nextContent = Number((display.textContent).slice(plusIndex , equalIndex));
       display.textContent = exContent + nextContent;
    }
    else if((display.textContent).includes("-") ) {
       minusIndex = (display.textContent).indexOf("-") + 1 ;
       nextContent = Number((display.textContent).slice(minusIndex , equalIndex));
       display.textContent = exContent - nextContent;
    }
    else if((display.textContent).includes("/") ) {
        divideIndex = (display.textContent).indexOf("/") + 1 ;
        nextContent = Number((display.textContent).slice(divideIndex , equalIndex));
        display.textContent = exContent / nextContent;
    }
     else if((display.textContent).includes("×") ) {
        multiplyIndex = (display.textContent).indexOf("×") + 1 ;
        nextContent = Number((display.textContent).slice(multiplyIndex , equalIndex));
        display.textContent = exContent * nextContent;
    }
})

    




