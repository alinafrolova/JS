/*Обращаем массив вспять. Напишите две функции, reverseArray и reverseArrayInPlace.
Первая получает массив как аргумент и выдаёт новый массив, с обратным порядком элементов.
Вторая работает как оригинальный метод reverse – она меняет порядок элементов на обратный
в том массиве, который был ей передан в качестве аргумента. Не используйте стандартный метод reverse.
 Источник: http://www.itmathrepetitor.ru/zadachi-po-javascript-iz-knigi-vyrazitelnyjj-javascript/*/
function reverseArray(array){
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i-- ){
   newArray.push(array[i]);
  }
  var newLi = document.createElement('li');
  newLi.innerHTML= "№8Task:reverseArray " + newArray;
  list.appendChild(newLi);
   }
function reverseArrayInPlace(array){
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i-- ){
    newArray.push(array[i]);
  }
  var newLi = document.createElement('li');
  newLi.innerHTML= "№8Task:reverseArrayInPlace " + newArray;
  list.appendChild(newLi);
}


