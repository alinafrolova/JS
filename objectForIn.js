
//http://learn.javascript.ru/object-for-in
/*Есть объект salaries с зарплатами. Напишите код, который выведет сумму всех зарплат.

Если объект пустой, то результат должен быть 0.*/
"use strict";

function getSumSalaries() {
	var sum = 0;
	var salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250

};
  for (var name in salaries) {
  if (name) {
  	alert( "Ключ: " + name + " значение: " + salaries[name] );
  	sum +=  salaries[name]; 
  };
}
return sum;
}
/*Есть объект salaries с зарплатами. Напишите код, который выведет имя сотрудника, у которого самая большая зарплата.

Если объект пустой, то пусть он выводит «нет сотрудников».*/
function getMaxSalaries() {
	var max = 0,
        maxName = '';
	    salaries = {
  "Вася": 100,
  "Петя": 300,
  "Даша": 250
  
};
  for (var name in salaries) {
    if (max < salaries[name]) {
    max = salaries[name];
    maxName = name;
  }
}
return maxName;
}
/*Создайте функцию multiplyNumeric, которая получает объект и умножает все численные свойства на 2. */
function getMultiplyNumeric() {
	var multiply = 0,
	    parametr = 0,
        menu  = {
   width: 200,
  height: 300,
  title: "My menu"
};
  for (var param in menu ) {
       parametr = menu [param];
    if (typeof(parametr === 'number')) {
  	alert( "Ключ: " + param + " значение: " + menu [param] );
  	multiply =  menu [param] * 2; 
  };
  return multiply;
}

}