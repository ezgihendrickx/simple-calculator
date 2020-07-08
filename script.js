function calc() {

let firstNumber = parseFloat (document.getElementById("firstNumber").value)
let secondNumber = parseFloat (document.getElementById("secondNumber").value)
let result;

let op = document.getElementById("calc").value

if(op === "+") {
    document.getElementById('result').value = firstNumber+secondNumber;
}

if(op === "-") {
    document.getElementById('result').value = firstNumber-secondNumber;
}
if(op === "x") {
    document.getElementById('result').value = firstNumber*secondNumber;
}
if(op === "/") {
    document.getElementById('result').value = firstNumber/secondNumber;
}


}