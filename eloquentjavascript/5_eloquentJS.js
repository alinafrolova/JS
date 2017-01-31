/*Рекурсия. Ноль чётный. Единица нечётная. У любого числа N чётность такая же, как у N-2.Напишите рекурсивную функцию isEven согласно этим правилам.
Она должна принимать число и возвращать булевское значение. Потестируйте её на 50 и 75. Попробуйте задать ей -1.
 Почему она ведёт себя таким образом? Можно ли её как-то исправить?
   Источник: http://www.itmathrepetitor.ru/zadachi-po-javascript-iz-knigi-vyrazitelnyjj-javascript/*/
//Зачем здесь рекурсию использовать
function isEven(N) {
  var newLi = document.createElement('li');
  var even = N / 2;
  if (isInteger(even)){ newLi.innerHTML= "№5Task: " + true; list.appendChild(newLi); return true;}
  else     { newLi.innerHTML= "№5Task: " + false; list.appendChild(newLi); return false;}

 }
function isInteger(num) {
  return (num ^ 0) === num;
}