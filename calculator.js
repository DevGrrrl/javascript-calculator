var zero = document.querySelector('#zero');
var one = document.querySelector('#one');
var two = document.querySelector('#two');
var three = document.querySelector('#three');
var four = document.querySelector('#four');
var six = document.querySelector('#six');
var seven = document.querySelector('#seven');
var eight = document.querySelector('#eight');
var nine = document.querySelector('#nine');

var subtract = document.querySelector('#subtract');
var divide = document.querySelector('#divide');
var multiply = document.querySelector('#multiply');
var add = document.querySelector('#add');
var decimal = document.querySelector('#decimal');

var equals = document.querySelector('#equals');
var clear = document.querySelector('#clear');
var ce = document.querySelector('#ce');


//Button Styling when clicked
var keysArray = [zero, one, two, three, four, five, six, seven, eight, nine,  subtract, divide, multiply, add, decimal, equals, clear, ce,];

var displayCount = 0;
var operator = /\+|\=|\*|\/|\-/;
var displayArr = [];
var equalsTrack = 0;
var operatorTrack = 0;
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
  // console.log(keysArray[i]);
}
//button styling end

//Calculations
var newNumber =[];
var valueArray = [];
var calc = [];
var total = 0;
var displayValue = document.getElementById('display');
var displayCalculation = document.getElementById('display-calculation');
var displayMax;
var valueArrayLength = 0;

displayValue.textContent = 0;

displayCalculation.textContent = 0;


function pushToArray(e){
 operatorTrack = 0;
 displayCount += 1;

if (displayCount > 8){
    if (this !== /\+|\=|\*|\/|\-/){
    displayValue.textContent = 0;
    displayCalculation.textContent = "Digit Limit Met";
    displayCount = 0;
    displayArr = [];
    valueArray =[];
    newNumber = [];
    }}

       else if (equalsTrack === 1){
         equalsTrack = 0;
         valueArray = [this.value];
         displayArr = [this.value];
         displayValue.textContent = valueArray;
         displayCalculation.textContent = this.value;
         newNumber = [];
        }

          else if (this.value === '0'){
             if(valueArrayLength === 0){
               displayCount = 0;
               return;
             }

if (newNumber[0] === "0"){
       if(newNumber[1] !== "."){
         displayCount -=1;
         return;
       }
         else

         newNumber.push(this.value);
         equalsTrack = 0;
         valueArray.push(this.value);
         displayArr.push(this.value);
         displayValue.textContent = displayArr.join('');
         displayCalculation.textContent = valueArray.join('');
         displayMax = (valueArray.join('')).length;
         valueArrayLength = valueArray.length;
       }

    else {
      newNumber.push(this.value);
      equalsTrack = 0;
      valueArray.push(this.value);
      displayArr.push(this.value);
      displayValue.textContent = displayArr.join('');
      displayCalculation.textContent = valueArray.join('');
      displayMax = (valueArray.join('')).length;
      valueArrayLength = valueArray.length;
      }
}

  else {
    newNumber.push(this.value);
    equalsTrack = 0;
    valueArray.push(this.value);
    displayArr.push(this.value);
    displayValue.textContent = displayArr.join('');
    displayCalculation.textContent = valueArray.join('');
    displayMax = (valueArray.join('')).length;
    valueArrayLength = valueArray.length;
  }
}

function operatorPush(e){

  equalsTrack = 0;
  operatorTrack = 1;
  newNumber = [];

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
                return
                }
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
      }
}


//decimal point//

function decimalPush(e){

  var dec = [];
  var slice;

  if (valueArray[valueArrayLength] === this.value){
    return;
  }
  //no more than one decimal point per number
  for (var i = 1; i < 8; i++){
    //replace with reg exp?
    if (valueArray[valueArrayLength-i] === "+" || valueArray[valueArrayLength-i] === "-" || valueArray[valueArrayLength-i] === "*" || valueArray[valueArrayLength-i] === "/"){
      dec.push(i);
    }
  }

  slice = valueArray.slice(-dec[0]);

  if (slice.indexOf(".") !== -1){
    return
    }

  else {
    newNumber.push(this.value);
    valueArray.push(this.value);
    valueArrayLength = valueArray.length;
    displayCount += 1;
    displayArr.push(this.value);
    //add preceeding digitst to displayValue;
    displayValue.textContent = this.value;
    displayCalculation.textContent = valueArray.join('');
    }
}



//SUM
function sumArray(e){

//***** ONLY SUM IF CONTAINS A NUMBER or last value is a number*****

  if (valueArrayLength === 0 ){
  return;
  }

   else if (valueArray[valueArrayLength-1] === "+" ||
            valueArray[valueArrayLength-1] === "-" ||
            valueArray[valueArrayLength-1] === "/" ||
            valueArray[valueArrayLength-1] === "*" ||
            valueArray[valueArrayLength-1] === ".")
            {return;
            }




if (total === Infinity){
        displayCalculation.textContent = "error";
        valueArray = [];
        displayArr = [];
        displayValue.textContent = "error";
        total === 0;
        newNumber = [];
        }

        else  {
              newNumber = [];
              equalsTrack = 1;
              total = (eval(valueArray.join("")).toFixed(4))/1;

                if (total.toString().length > 9){

                  displayValue.textContent = 0;
                  displayCalculation.textContent = "Digit Limit Met";
                  displayCount = 0;
                  displayArr = [];
                  valueArray =[];
                  newNumber = [];

                }
                    else {
                    displayCalculation.textContent = valueArray.join('')+ "=" +total;
                    valueArray = [total];
                    displayArr = [total];
                    displayValue.textContent = total;
                    }
    }

}

function clearAll(e){

     valueArray = [];
     equalsTrack = 0;
     total = 0;
     displayValue.textContent = 0;
     displayCalculation.textContent = 0;
     displayCount = 0;
     valueArrayLength = 0;
     displayArr = [];
     newNumber = [];
      }

function clearLast(e){
    displayCount = 0;
    valueArray.pop();
    valueArrayLength = valueArray.length;
    displayArr.pop();
    newNumber.pop();

    if (valueArray.length === 0){
      displayValue.textContent = 0;
      displayCalculation.textContent = 0;
    }
       else {
         displayCalculation.textContent = valueArray.join('');
         displayValue.textContent = valueArray[valueArrayLength-1];
       }


  }


//Push key value to array
for (var i = 0; i <10; i ++){

keysArray[i].addEventListener("click", pushToArray);
}

for (var i = 10; i <14; i ++){

keysArray[i].addEventListener("click", operatorPush);
}

decimal.addEventListener("click", decimalPush);

//Evaluate array once equals is pushed
equals.addEventListener("click", sumArray);

//AC - clear All
clear.addEventListener("click", clearAll);

//CE - clear Last
ce.addEventListener("click", clearLast);
