/*Векторный тип. Напишите конструктор Vector, представляющий вектор в двумерном пространстве.
Он принимает параметры x и y (числа), которые хранятся в одноимённых свойствах. Дайте прототипу
Vector два метода, plus и minus, которые принимают другой вектор в качестве параметра, и возвращают новый вектор,
который хранит в x и y сумму или разность двух
(один this, второй — аргумент) Добавьте геттер length в прототип, подсчитывающий длину вектора – расстояние от (0, 0) до (x, y).
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


