var zero = document.querySelector('#zero');
var one = document.querySelector('#one');
var two = document.querySelector('#two');
var three = document.querySelector('#three');
var four = document.querySelector('#four');
var six = document.querySelector('#six');
var seven = document.querySelector('#seven');
var eight = document.querySelector('#eight');
var nine = document.querySelector('#nine');

var minus = document.querySelector('#minus');
var percent = document.querySelector('#percent');
var times = document.querySelector('#times');
var plus = document.querySelector('#plus');
var dot = document.querySelector('#dot');

var equals = document.querySelector('#equals');
var ac = document.querySelector('#ac');
var ce = document.querySelector('#ce');


//Button Styling when clicked
var keysArray = [zero, one, two, three, four, five, six, seven, eight, nine,  minus, percent, times, plus, dot, equals, ac, ce,];

var displayCount = 0;
var operator = /\+|\=|\*|\/|\-/;
var displayArr = [];
var equalsTrack = 0;
//button styling//

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

}}

if (equalsTrack === 1){
   equalsTrack = 0;
   valueArray = [this.value];
   displayArr = [this.value];
   displayValue.textContent = valueArray;
   displayCalculation.textContent = this.value;
}


 else {
  equalsTrack = 0;
  valueArray.push(this.value);
  displayArr.push(this.value);
  displayValue.textContent = displayArr.join('');
  // displayValue.textContent = this.value;
  displayCalculation.textContent = valueArray.join('');
  displayMax = (valueArray.join('')).length;
  valueArrayLength = valueArray.length;
  console.log(valueArray);
  console.log(total);
  console.log(displayArr);
}

}

function operatorPush(e){

  equalsTrack = 0;

  if (valueArray.length === 0 ) {
    if (this.value === '-'){
     displayCount += 1;
     displayArr.push(this.value);
     valueArray.push(this.value);
     displayValue.textContent = this.value;
     displayCalculation.textContent = valueArray.join('');
     valueArrayLength = valueArray.length;
    }
     else if (this.value !== '-'){
        return}
    }

    //Can remove code below? Dupes line 98?//

  if (valueArray[valueArrayLength-1] === this.value) {
    return;
    }


  if
// if an operator is pushed more than once at a time //
   (valueArray.join('').charAt(((valueArray.join('')).length)-1).match(operator))

      {
        console.log(valueArray);
        console.log(total);
        console.log(displayArr);
      return;
      }

 else {

    displayCount = 0;
    valueArray.push(this.value);
    displayValue.textContent = this.value;
    displayCalculation.textContent = valueArray.join('');
    displayArr = [];
    valueArrayLength = valueArray.length;
    console.log(valueArray);
    console.log(total);
    console.log(displayArr);
}
}

//decimal point//

function dotPush(e){

  if (valueArray[valueArrayLength] === this.value){
    return;
  }
  else {
    valueArray.push(this.value);
    displayCount += 1;
    displayArr.push(this.value);
    //add preceeding digitst to displayValue;
    displayValue.textContent = this.value;
    displayCalculation.textContent = valueArray.join('');
    console.log(valueArray);
    console.log(total);
    console.log(displayArr);
  }
}

//Equals
function sumArray(e){
  equalsTrack = 1;
//***** ONLY SUM IF CONTAINS A NUMBER*****
  if (valueArray.length === 0){
    return;
  }
  total = eval(valueArray.join(""));

  if (total === Infinity){
        displayCalculation.textContent = "error";
        valueArray = [];
        displayArr = [];
        displayValue.textContent = "error";
        total === 0;
      //   }
      // else if (total.toString().length >8) {
      //       displayValue.textContent = 0;
      //       displayCalculation.textContent = "Digit Limit Met";
      //       displayCount = 0;
      //       valueArray =[];
      //       displayArr = [];
            }
      else  {

            displayCalculation.textContent = valueArray.join('')+ "=" +total;
            valueArray = [total];
            displayArr = [total];
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
 displayArr = [];
 console.log(valueArray);
 console.log(total);
 console.log(displayArr);
}

function clearLast(e){
  displayCount = 0;
  valueArray.pop();
  valueArrayLength = valueArray.length;
  displayArr.pop();

  if (valueArray.length === 0){
    displayValue.textContent = 0;
    displayCalculation.textContent = 0;
  }
   else {displayCalculation.textContent = valueArray.join('')};
   displayValue.textContent = 0;

   console.log(valueArray);
   console.log(total);
   console.log(displayArr);
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






//Display values in screen//
