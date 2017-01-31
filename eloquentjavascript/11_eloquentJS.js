/*Свертка. Используйте метод reduce в комбинации с concat для свёртки массива массивов в один массив,
 у которого есть все элементы входных массивов.
  Источник: http://www.itmathrepetitor.ru/zadachi-po-javascript-iz-knigi-vyrazitelnyjj-javascript/*/
function convolution(array){
     var newArray = [];
     var result = array.reduce(function(previousValue , currentItem ) {
         if (previousValue){newArray = newArray.concat(previousValue);}

         newArray = newArray.concat(currentItem);

     });
    var newLi = document.createElement('li');
    newLi.innerHTML= "№11 Task:convolution " + newArray;
    list.appendChild(newLi);

   }


