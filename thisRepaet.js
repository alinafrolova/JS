(function(){
var calculator = {
read: function(){
  this.a = +prompt("Enter the first value  -a ",0);
  this.b = +prompt("Enter the second value  -b ",0);
},
sum: function(){
  return this.a + this.b;
},
mul: function(){
  return this.a * this.b;
}

 }
/*https://learn.javascript.ru/task/chain-calls*/
var ladder = {
  step: 0,
  up: function() { // вверх по лестнице
    this.step++;
    return this;
  },
  down: function() { // вниз по лестнице
    this.step--;
    return this;
  },
  showStep: function() { // вывести текущую ступеньку
    alert( this.step );
    return this;
  }
};

//Каждый метод должен возвращать объект с другими методами.
/*
var MyObj = {
    myMethod1: function() {
        alert('1');
        return this;
    },
    myMethod2: function() {
        alert('2');
        return MyObj;
    }
}; 
MyObj.myMethod1().myMethod2().myMethod1().myMethod2();
 */

function sum(a) {

   function f(b) {
    return b+= ; // возьмет a из внешнего LexicalEnvironment
  };
  getSum: to

}


}());
