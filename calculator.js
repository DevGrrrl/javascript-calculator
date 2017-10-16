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
var keysArray = [zero, one, two, three, four, five, six, seven, eight, nine,  minus, percent, times, plus, dot, equals, ac, ce,];

var displayCount = 0;
var operator = /\+|\=|\*|\/|\-/;

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
var displayMax;
var valueArrayLength = 0;

displayValue.textContent = 0;

displayCalculation.textContent = 0;


function pushToArray(e){

 displayCount += 1;

 if (displayCount > 8){
  if (this !== /\+|\=|\*|\/|\-/){
  displayValue.textContent = 0;
  displayCalculation.textContent = "Digit Limit Met";
  displayCount = 0;
  valueArray =[];
  console.log(displayCount);
}}

 else {
  valueArray.push(this.value);
  console.log(this.value);
  displayValue.textContent = this.value;
  displayCalculation.textContent = valueArray.join('');
  console.log(displayCount);
  displayMax = (valueArray.join('')).length;
  valueArrayLength = valueArray.length;
}

}

function operatorPush(e){

  if (valueArray.length === 0 ) {
    if (this.value !== '-'){
        return}
    }

  if (valueArray[valueArrayLength-1] === this.value) {
    return;
  }

  if
  // (valueArray.join('').charAt(valueArrayLength-1).match(operator))

    (valueArray.join('').charAt(((valueArray.join('')).length)-1).match(operator))

   {

    console.log(valueArray);
    return;
  }

    displayCount =0;
    valueArray.push(this.value);
    console.log(this.value);
    displayValue.textContent = this.value;
    displayCalculation.textContent = valueArray.join('');
    console.log(valueArray);
    valueArrayLength = valueArray.length;

}

//decimal point//

function dotPush(e){

  //Why not valueArray[valueArrayLength-1]?
  if (valueArray[valueArrayLength] === this.value){
    return;
  }
  else {
    valueArray.push(this.value);
    console.log(this.value);

    displayValue.textContent = this.value;
    displayCalculation.textContent = valueArray.join('');
    console.log(valueArray);
  }
}

//Equals
function sumArray(e){

//***** ONLY SUM IF CONTAINS A NUMBER*****


  if (valueArray.length === 0){
    return;
  }



  total = eval(valueArray.join(""));

  if (total
    === Infinity){

        displayCalculation.textContent = "error";
        valueArray = [];
        displayValue.textContent = "error";
        total === 0;
      }

  else {

  displayCalculation.textContent = valueArray.join('')+ "=" +total;
  valueArray = [total];
  displayValue.textContent = total;
  }

}


function clearAll(e){
 valueArray = [];
 total = 0;
 displayValue.textContent = 0;
 displayCalculation.textContent = 0;
 displayCount = 0;
 valueArrayLength = 0;
 console.log(valueArray);
 console.log(total);
}

function clearLast(e){
  displayCount = 0;
  valueArray.pop();
  valueArrayLength = valueArray.length;
  if (valueArray.length === 0){
    displayValue.textContent = 0;
    displayCalculation.textContent = 0;
  }
   else {displayCalculation.textContent = valueArray.join('')};


  console.log(valueArray);
  console.log(total);
}
//Push key value to array
for (var i = 0; i <10; i ++){

keysArray[i].addEventListener("click", pushToArray);
}

for (var i = 10; i <14; i ++){

keysArray[i].addEventListener("click", operatorPush);
}



dot.addEventListener("click", dotPush);

//Evaluate array once equals is pushed
equals.addEventListener("click", sumArray);

//AC - clear All
ac.addEventListener("click", clearAll);

//CE - clear Last
ce.addEventListener("click", clearLast);



//Calculations end


//***Last and First numbers clicked after equals//must be a number, else do nothing***



//Display values in screen//
