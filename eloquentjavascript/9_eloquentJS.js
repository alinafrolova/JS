/*Список.Объекты могут быть использованы для построения различных структур данных.
Часто встречающаяся структура – список (не путайте с массивом). Список – связанный набор объектов,
 где первый объект содержит ссылку на второй, второй – на третий, и т.п.
 1 2 3 4 5 6 7 8 9 10 11 var list = {   value: 1,   rest: {     value: 2,     rest: {       value: 3,       rest: null     }   } };
   Списки удобны тем, что они могут делиться частью своей структуры. Например, можно сделать два списка,
    {value: 0, rest: list} и {value: -1, rest: list}, где list – это ссылка на ранее объявленную переменную.
    Это два независимых списка, при этом у них есть общая структура list, которая включает три последних элемента
    каждого из них. Кроме того, оригинальный список также сохраняет свои свойства как отдельный список из трёх элементов.
     Напишите функцию arrayToList, которая строит такую структуру, получая в качестве аргумента [1, 2, 3],
     а также функцию listToArray, которая создаёт массив из списка. Также напишите вспомогательную функцию prepend,
      которая получает элемент и создаёт новый список, где этот элемент добавлен спереди к первоначальному списку,
      и функцию nth, которая в качестве аргументов принимает список и число, а возвращает элемент на заданной позиции в списке,
      или же undefined в случае отсутствия такого элемента. Если ваша версия nth не рекурсивна, тогда напишите её рекурсивную версию.
       1 2 3 4 5 6 7 8 console.log(arrayToList([10, 20])); // → {value: 10, rest: {value: 20, rest: null}}
       console.log(listToArray(arrayToList([10, 20, 30]))); // → [10, 20, 30] console.log(prepend(10,
       prepend(20, null))); // → {value: 10, rest: {value: 20, rest: null}}
       console.log(nth(arrayToList([10, 20, 30]), 1)); // → 20
 Источник: http://www.itmathrepetitor.ru/zadachi-po-javascript-iz-knigi-vyrazitelnyjj-javascript*/
function arrayToList(){

   }


