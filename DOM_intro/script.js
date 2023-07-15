// DOM methods can mostly be divided into getters and setters
// getters grab an element so we can do stuff to it
// setter change an element after we grab it

let resDiv = document.getElementById("res");

let clearButton = document.getElementById("clear");
clearButton.onclick = function(){
     document.querySelector(".first").value = ""
     document.querySelector(".second").value = ""
     document.getElementById("res").innerText = "";
}

function grabValues(){
    let firstNum = Number(document.querySelector(".first").value);
    let secondNum = Number(document.querySelector(".second").value);
    return {first: firstNum, second: secondNum}
}



let addButton = document.querySelector("#add");
addButton.onclick = () =>{
    resDiv.innerText = (grabValues().first + grabValues().second);
}


document.getElementById("subtract").onclick = () => {
    resDiv.innerText = (grabValues().first - grabValues().second);
}

let multBtn = document.getElementById("multiply")
multBtn.onclick = () =>{
  resDiv.innerText = grabValues().first * grabValues().second;
}

let divideBtn = document.getElementById("divide")
divideBtn.onclick = () =>{
    let firstNum = Number(document.querySelector(".first").value);
    let secondNum = Number(document.querySelector(".second").value);
    let result = firstNum / secondNum;
    document.getElementById("res").innerText = result;
}


let numCount = 1;
document.getElementById("add-new").onclick = function(event){
    numCount++;
    let newDiv = document.createElement("div");
    newDiv.classList.add("single-num");
    newDiv.innerHTML = `Num${numCount} <input type="number">`
    document.getElementById("nums-container").append(newDiv);
    document.querySelector(".single-num:last-child").append(event.currentTarget);
}






document.querySelector("#add-em-up > div > button").onclick = function(){
    let numDivs = document.querySelectorAll(".single-num input");
    let total = 0;
    for(let input of numDivs){
        total += Number(input.value)
    }
    document.getElementById("add-res").innerText = total;
}







