/*Сумма диапазона.  Напишите функцию range, принимающую два аргумента, начало и конец диапазона,
и возвращающую массив, который содержит все числа из него, включая начальное и конечное.
Затем напишите функцию sum, принимающую массив чисел и возвращающую их сумму.
Запустите указанную выше инструкцию и убедитесь, что она возвращает 55.
В качестве бонуса дополните функцию range, чтобы она могла принимать необязательный третий аргумент –
шаг для построения массива. Если он не задан, шаг равен единице. Вызов функции range(1, 10, 2)
должен будет вернуть [1, 3, 5, 7, 9]. Убедитесь, что она работает с отрицательным шагом так,
что вызов range(5, 2, -1) возвращает [5, 4, 3, 2].
 Источник: http://www.itmathrepetitor.ru/zadachi-po-javascript-iz-knigi-vyrazitelnyjj-javascript/*/
function range(a, b,j){
  var j = j||0,
      array = [];
      elem = a;
    if (j === 0){
        while (j < b){
            array.push(elem);
            elem = elem + 1;
            j++;
        }
    }
      else {
        while (j <= b){
            array.push(elem);
            elem = elem - 1;
            j++;
        }
    }

  var newLi = document.createElement('li');
  newLi.innerHTML= "№7Task:range " + array;
  list.appendChild(newLi);
    return array;
   }


 function sum(array) {
 var result = 0;
 var result = array.reduce(function(sum, current) {
 return sum + current;
 });
     var newLi = document.createElement('li');
     newLi.innerHTML= "№7Task:sum " + result;
     list.appendChild(newLi);
     return result;
 }


