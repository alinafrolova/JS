/*Шахматная доска. Напишите программу, создающую строку, содержащую решётку 8х8, в которой линии разделяются символами новой строки.
На каждой позиции либо пробел, либо #. В результате должна получиться шахматная доска.
   Источник: http://www.itmathrepetitor.ru/zadachi-po-javascript-iz-knigi-vyrazitelnyjj-javascript/*/
function board (){
     var k = 9,
         second = 2,
         secondtxt = "# # # #",
         txt = "&emsp;# # # #";
  for (var i = 1; i < k; i++) {
    var newLi = document.createElement('li');
    if (isInteger(i/second)) {
      newLi.innerHTML= secondtxt;
      list.appendChild(newLi);
    }else {
        newLi.innerHTML= txt;
        list.appendChild(newLi);
            }

   }
  }
function isInteger(num) {
  return (num ^ 0) === num;
}
