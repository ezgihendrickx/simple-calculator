function calc() {
  let firstNumber = parseFloat(document.getElementById("firstNumber").value);
  let secondNumber = parseFloat(document.getElementById("secondNumber").value);
  let result;

  let op = document.getElementById("calc").value;



  if (op === "+") {
    result = firstNumber + secondNumber; 
  }

  if (op === "-") {
    result = firstNumber - secondNumber; 
  }
  if (op === "x") {
    result = firstNumber * secondNumber; 
  }
  if (op === "/") {
    result = firstNumber / secondNumber; 
  }
//ISFINITE returns true if not n/a (error) or infinite (divide by 0)//
  if (isFinite(result)) {
    return (document.getElementById("result").innerHTML = result);
  }
  else {
    return (document.getElementById("result").innerHTML = "n/a");
  }
  

}


