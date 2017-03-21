
(function(){
	/*https://learn.javascript.ru/task/calculator-constructor*/
function Calculator() {
this.read= function(){
  this.a = +prompt("Enter the first value  -a ",0);
  this.b = +prompt("Enter the second value  -b ",0);
},
this.sum= function(){
  return this.a + this.b;
},
this.mul= function(){
  return this.a * this.b;
}

 }
 var calculator = new Calculator();
 calculator.read();

alert( "Сумма=" + calculator.sum() );
alert( "Произведение=" + calculator.mul() );
//-----------------------
/*https://learn.javascript.ru/task/accumulator*/

function Accumulator(startingValue){
	this.value= startingValue;
	this.read = function(){
                this.enterValue = +prompt("Enter the value ",0);
                this.value+= this.enterValue ;
	}
}
var accumulator = new Accumulator(1); // начальное значение 1
accumulator.read(); // прибавит ввод prompt к текущему значению
accumulator.read(); // прибавит ввод prompt к текущему значению
alert( accumulator.value ); // выведет текущее значение

/*https://learn.javascript.ru/task/calculator-extendable*/
function Calculator() {
	
this.calculate= function(str){
  	var result;
		var arr = str.split(" ");
		for (var i = 0; i < arr.length; i++) {
            
			 var first = + arr[i];
             var second = +arr[i+2];
             var op = arr[i+1];
              if (isNaN(first) || isNaN(second)) {
              	 return NaN;
              };

			switch (true) {
             case (op ==="+"):
             return first+ second;
             break;
             
             case (op ==="-"):
             return first- second;
             break;
		                  };

      
    }

    }
 }
 var calc = new Calculator;
/*еще раз переосмыслить https://learn.javascript.ru/task/calculator-extendable*/
}());