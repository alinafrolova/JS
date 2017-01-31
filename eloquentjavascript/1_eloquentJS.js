//Треугольник. Напишите цикл,  выводит такой треугольник:
//   Источник: http://www.itmathrepetitor.ru/zadachi-po-javascript-iz-knigi-vyrazitelnyjj-javascript/
function triangle(){
  var j = 7,
      i = 0,
      hash= "#";
  while (i < j) {
    var newLi = document.createElement('li');
    newLi.innerHTML= "№1Task: " + hash;
     list.appendChild(newLi);
     i++;
     hash = hash + "#";
  }
}
