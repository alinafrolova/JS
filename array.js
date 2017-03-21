
/* Как получить последний элемент из произвольного массива?*/
function getLastelement() {
    var taskOneArr = ['10', 12, true, {username: 'Task1'}, 20.67, 18, 20, ['Apple', 'Banana', 'Kiwi'], 2e2, +'14.7'],
        lastElem = 0;
    for (var i = 0; i < taskOneArr.length; i++){
      lastElem = taskOneArr[taskOneArr.length-1]
       }
        return lastElem;

}
/*Как добавить элемент в конец произвольного массива?*/
function addLastElement(element) {
    var taskOneArr = ['10', 12, true, {username: 'Task1'}, 20.67, 18, 20, ['Apple', 'Banana', 'Kiwi'], 2e2, +'14.7'];
        
        taskOneArr.push(element);

        return taskOneArr;

}
/*Задача из 5 шагов-строк:

Создайте массив styles с элементами «Джаз», «Блюз».
Добавьте в конец значение «Рок-н-Ролл»
Замените предпоследнее значение с конца на «Классика». Код замены предпоследнего значения должен работать для массивов любой длины.
Удалите первое значение массива и выведите его alert.
Добавьте в начало значения «Рэп» и «Регги».
*/
function createArray() {
    var styles  = ['Джаз','Блюз'];
        console.log(styles);

        styles.push("Рок-н-Ролл");
        console.log(styles);

        styles[styles.length-2]= "Классика";
        console.log(styles);

        styles.shift();
        console.log(styles);

        styles.unshift("Рэп","Регги");
        console.log(styles);

        return styles;

}
/*Получить случайное значение из массива*/
function getRandElement() {
    var taskOneArr = ["Яблоко", "Апельсин", "Груша", "Лимон"],
        rand= 0,
        min = 0,
        max = 0;
        
        rand = Math.floor(Math.random() * taskOneArr.length);

        return taskOneArr[rand];
        

}
/*Создайте калькулятор для введённых значений https://learn.javascript.ru/array#создайте-калькулятор-для-введённых-значений*/
function getCalculateArray() {
   var newArray = [],
       newElement = 1,
       intValue,
       sumArrayElem;

     while (Boolean(newElement)===true){
      newElement = prompt("Enter element array", '');
     intValue= parseInt(newElement);

   if ((typeof (intValue)) === 'number' && !isNaN(intValue)) {
    newArray.push(intValue);
   }; 
     for (var i = 0; i < newArray.length; i++) {
     sumArrayElem += newArray[i]
   };
   }          
      
return sumArrayElem;
   
}
/*Поиск в массиве*/
function findArr(value) {
 var  arr = ["test", 2, 1.5, false],
      element;
      incorrect = -1;
for (var i = 0; i < arr.length; i++) {
     element = arr[i];
     if (value===element) {
      return i;
     };
     
   };
 return incorrect;
}
/*Фильтр диапазона*/
function filterRange (a, b) {
  var arr = [5, 4, 3, 8, 0],
      newArray = [];
    for (var i = 0; i < arr.length; i++) {   
     if (a <= arr[i] && arr[i] <= b) 
      newArray.push(arr[i]);
     };
return newArray;
}
/*Подмассив наибольшей суммы https://learn.javascript.ru/array#подмассив-наибольшей-суммы*/
var  arr = [1, -2, 3, 4, -9, 6];
function getArrMaxSum() {
var  sum = 0;
for (var i = 0; i < arr.length; i++) {   
     if (arr[i] > 0) 
      sum +=arr[i];
     };
return sum;
}

function getMaxSubSum() {
  var  arr = [1, -2, 3, 4, -9, 6];
  var maxSum = 0,
    partialSum = 0;
  for (var i = 0; i < arr.length; i++) {
    partialSum += arr[i];
    maxSum = Math.max(maxSum, partialSum);
    if (partialSum < 0) partialSum = 0;
  }
  return maxSum;
}
/*https://learn.javascript.ru/array-methods#добавить-класс-в-строку*/
function addClass (obj, cls) {


}

/*https://learn.javascript.ru/array-methods#перевести-текст-вида-border-left-width-в-borderleftwidth*/
function camelize(str) {


}
/*https://learn.javascript.ru/array-iteration#перепишите-цикл-через-map*/
function getArrMap(){
var arr = ["Есть", "жизнь", "на", "Марсе"];
var arrLength = [];
arrLength = arr.map(function(arr) {
   return arr.length;
});
return arrLength; 
}
/*https://learn.javascript.ru/array-iteration#массив-частичных-сумм*/
function getArrReduce() {
  var newArray = [];
  var arr = [ 1, 2, 3, 4, 5  ];
  var current, item;

    var result = arr.reduce(function(sum, item) {
          newArray.push(sum);
    return sum + item

  
}, 1);
    


return newArray;


}

/*https://learn.javascript.ru/task/check-arguments-undefined*/
function f(x) {

 var  result = (x === undefined) ? 0 : 1;
  // ..ваш код..
  // выведите 1, если первый аргумент есть, и 0 - если нет
return result;

}
/*https://learn.javascript.ru/task/sum-arguments */
function sum() {
 var arr = [];
 if (arguments.length>0) {
    for (var i = 0; i < arguments.length; i++) {
    arr.push(arguments[i])
    var result = arr.reduce(function(sum, current) {
  return sum + current;
}, 0);
  };
}else {
  return 0;
}


  return result;
}