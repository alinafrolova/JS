/*Рекурсия. Ноль чётный. Единица нечётная. У любого числа N чётность такая же, как у N-2.Напишите рекурсивную функцию isEven согласно этим правилам.
Она должна принимать число и возвращать булевское значение. Потестируйте её на 50 и 75. Попробуйте задать ей -1.
 Почему она ведёт себя таким образом? Можно ли её как-то исправить?
   Источник: http://www.itmathrepetitor.ru/zadachi-po-javascript-iz-knigi-vyrazitelnyjj-javascript/*/
function min (val1, val2){
  var newLi = document.createElement('li');
    if (val1 < val2 ) {
      newLi.innerHTML= val1;
    }else{newLi.innerHTML= val2;}
 list.appendChild(newLi);
   }
