/**
 * Created by иарвар on 05.08.2016.
 */

function getAverageValue() {
    var taskOneArr = ['10', 12, true, {username: 'Task1'}, 20.67, 18, 20, ['Apple', 'Banana', 'Kiwi'], 2e2, +'14.7'],
        sum = 0,
        avg = 0,
        count = 0;
    for (var i = 0; i < taskOneArr.length; i++){

        if (typeof (taskOneArr[i]) !== 'number'){
            console.log(taskOneArr[i]+ 'this element is not number');
        }else {
            sum = sum+ taskOneArr[i];
            count = count+ 1;
            console.log('There is sum all numbers in the arr'+ sum + 'count' + count);
        }

        }
        avg = sum / count;
        console.log('The AverageValue is' + avg );
        return avg;

}
function saveUsernamesFromDatabase() {
    var usernamesDatabase = {
        'NastyaBinas': true,
        'bro16574': false,
        'ololo17': false,
        'OlyaYakovleva': true,
        'AlenaZinchenko': true,
        '675test-20': false,
        '@@@': false,
        'AlexTratyak': true,
        '-=uganda=-': false,
        'AlinaFrolova': true,
        'dataIsNotAvailable': false
    },
        newArr = [];
    for (var key in usernamesDatabase) {
        // этот код будет вызван для каждого свойства объекта
        // ..и выведет имя свойства и его значение

        console.log( "Ключ: " + key + " значение: " + usernamesDatabase[key] );
        if (usernamesDatabase[key]===true){
            newArr.push(key)
        }
    }
    return newArr;
}
function multiplicateValues() {
    var result = 0;

    for (var i = 0; i < arguments.length; i++) {
        switch (true){
            case (arguments.length ===1):
                return function calculate(y) { return result =  y * arguments[i]; };
            case (arguments.length ===2):
                result = arguments[i] * arguments[i+1];
                break;
            case (arguments.length ===3):
                result = arguments[i] * arguments[i+1] * arguments[i+2];
                break;
        }
        return result;
    }


}
function showValuesStack(value) {
    if (value === 0)
        return console.log(" ");
    else
        var min = value-1;
    return console.log(min, showValuesStack (value-1));
}
function flatten(arr){
  return arr.toString();
   
};
//flatten([1,2,3,[50,11,[34,56,8],4,5,6]]);
//result "1,2,3,50,11,34,56,8,4,5,6"
 var count =0;

function makeCounter(){
   count++;
    return count;
}
var counter = makeCounter();
counter;
counter;
console.log(counter);

var users = [{name: "foo", age: 50},
              {name: "baz", age: 10},
              {name: "bar", age: 20}];

function sortByAge(arr){
    for (var i = 0; i < arr.length; i++) {
         if (arr[i] > arr[i+1]) return 1;
    };
  
}
console.log(users.sort(sortByAge()));