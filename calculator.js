var zero = document.querySelector('#zero');
var one = document.querySelector('#one');
var two = document.querySelector('#two');
var three = document.querySelector('#three');
var four = document.querySelector('#four');
var six = document.querySelector('#six');
var seven = document.querySelector('#seven');
var eight = document.querySelector('#eight');
var nine = document.querySelector('#nine');


var ce = document.querySelector('#ce');
var percent = document.querySelector('#percent');
var times = document.querySelector('#times');
var plus = document.querySelector('#plus');
var minus = document.querySelector('#minus');
var dot = document.querySelector('#dot');

var equals = document.querySelector('#equals');

var ac = document.querySelector('#ac');



//Button Styling when clicked
var keysArray = [zero, one, two, three, four, five, six, seven, eight, nine,  minus, dot, percent, times, plus,  equals, ac, ce,];


var valZero = zero;

function buttonDown() {
   this.classList.add("clicked");
}

function buttonUp() {
   this.classList.remove("clicked");
}

for (var i = 0; i <18; i ++){
 keysArray[i].addEventListener("mousedown", buttonDown);
 keysArray[i].addEventListener("mouseup", buttonUp);
  console.log(keysArray[i]);
}
//button styling end

//Calculations
var valueArray = [];
var calc = [];
var total = 0;
var displayValue = document.getElementById('display-value');
var displayCalculation = document.getElementById('display-calculation');

displayValue.textContent = 0;

displayCalculation.textContent = 0;


function pushToArray(e){

  valueArray.push(this.value);
  console.log(this.value);

  displayValue.textContent = this.value;
  displayCalculation.textContent = valueArray.join('');



   console.log(valueArray);
}


function operatorPush(e){

  if (valueArray.length === 0) {
    return}
  else
    valueArray.push(this.value);
    console.log(this.value);

    displayValue.textContent = this.value;
    displayCalculation.textContent = valueArray.join('');
    console.log(valueArray);
  }
//Equals
function sumArray(e){

//***** ONLY SUM IF CONTAINS A NUMBER*****
  if (valueArray.length === 0){
    return;
  }

  else
  total = eval(valueArray.join(""));
  displayCalculation.textContent = valueArray.join('')+ "=" +total;
  valueArray = [total];
  displayValue.textContent = total;

  console.log(total);
}


function clearAll(e){
 valueArray = [];
 total = 0;
 displayValue.textContent = 0;
 displayCalculation.textContent = 0;
 console.log(valueArray);
 console.log(total);
}

function clearLast(e){
  valueArray.pop();
  if (valueArray.length === 0){
    displayValue.textContent = 0;
    displayCalculation.textContent = 0;
  }
   else {displayCalculation.textContent = valueArray.join('')};

  console.log(valueArray);
  console.log(total);
}
//Push key value to array
for (var i = 0; i <12; i ++){

keysArray[i].addEventListener("click", pushToArray);
}

for (var i = 12; i <15; i ++){

keysArray[i].addEventListener("click", operatorPush);
}

// 
// dot.addEventListener("click", dotPush);

//Evaluate array once equals is pushed
equals.addEventListener("click", sumArray);

//AC - clear All
ac.addEventListener("click", clearAll);

//CE - clear Last
ce.addEventListener("click", clearLast);



//Calculations end


//***Last and First numbers clicked after equals//must be a number, else do nothing***



//Display values in screen//
