/*FizzBuzz. Напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями.
 Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’,
а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’.Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz»
для всех чисел, которые делятся и на 3 и на 5.
   Источник: http://www.itmathrepetitor.ru/zadachi-po-javascript-iz-knigi-vyrazitelnyjj-javascript/*/
function fizzBuzz (){
     var k = 101,
         three = 3,
         threetxt = "Fizz",
         five = 5,
         fivetxt = "Buzz";
  for (var i = 1; i < k; i++) {
    var newLi = document.createElement('li');
    if (isInteger(i/three)) {
      newLi.innerHTML= threetxt;
      list.appendChild(newLi);
    }else {
      if (isInteger(i/five)) {
        newLi.innerHTML= fivetxt;
        list.appendChild(newLi);
      }else {
        newLi.innerHTML= i;
        list.appendChild(newLi);
            }

         }

  }
}
function isInteger(num) {
  return (num ^ 0) === num;
}
