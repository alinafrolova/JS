
(function(){
  /*https://learn.javascript.ru/task/calculator*/
var calculator = {

read: function() { this.value1 = +prompt("Enter please 1 value");
                  this.value2 = +prompt("Enter please 3 value");},
sum: function() {
                return this.value1 + this.value2;
},
mul: function() {
                return this.value1 * this.value2; 
}
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

/*https://learn.javascript.ru/task/chain-calls*/

function sum(a) {

  var currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function() {
    return currentSum;
  };

  return f;
}
}());
