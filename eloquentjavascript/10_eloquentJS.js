/*Глубокое сравнение. Оператор == сравнивает переменные объектов, проверяя, ссылаются ли они на один объект.
Но иногда полезно было бы сравнить объекты по содержимому.Напишите функцию deepEqual, которая принимает два
 значения и возвращает true, только если это два одинаковых значения или это объекты, свойства которых имеют
 одинаковые значения, если их сравнивать рекурсивным вызовом deepEqual.Чтобы узнать, когда сравнивать величины
 через ===, а когда – объекты по содержимому, используйте оператор typeof. Если он выдаёт “object” для обеих величин,
 значит нужно делать глубокое сравнение. Не забудьте об одном дурацком исключении, случившемся из-за исторических причин:
 “typeof null” тоже возвращает “object”.
 Источник: http://www.itmathrepetitor.ru/zadachi-po-javascript-iz-knigi-vyrazitelnyjj-javascript//*/
//не решила
function deepEqual(obj1, obj2){
  var result = false ;
  var newLi = document.createElement('li');
  if (obj1 === obj2){ result = true; }
  if ((null==obj1)||(null==obj2)){result = false;}
  if (typeof obj1 === !'object' || typeof obj2 === !'object') { result = false; }
  if (typeof obj1 === 'object' || typeof obj2 === 'object') {

  }
  newLi.innerHTML= "№10Task:deepEqual " + result;
  list.appendChild(newLi);
  return result;
   }


