/*✅ создать классы для групп товаров (одежда, электроника, продукты) унаследованные от класса Product со свойствами по своему усмотрению
✅ решить какие свойства товаров можно вынести в родительский класс и реализовать это.
✅ написать методы для вывода наименования товара в формате "Товар: [наименование], цена: [цена]"
✅ написать методы для валидации всех свойств товаров
✅ написать методы для вывода всех свойств товара в виде html таблицы (представьте что пишете для вывода на страницу товара)?
✅ напишите еще 2 класса наследника от электроники и проверьте как работают унаследованные методы в новых классах. если работают 
некорректно то переписать методы так, чтобы работали правильно при создании новых классов наследников.*/
//через прототип


//аналогия конуструктора в обычном объекте
var Product = {
	name : "empty",
    price : 0,
    manufacturer : "unknown",
	count :1,	
	maxCount : 100,
	getProductPrice : function(name){
  	return console.log("Product:"+ "["+ this.name + "], " +  "price" + "["+ this. price + "]" );
  }

}
///////////////////////////////////////////////////////////
var Clothes = {
	size : 0
    };
Clothes.__proto__ = Product;
console.log("clothes " + Clothes.name); //empty

var Electronics =  {
	brand :"unknown",
    model : "unknown"
};
Electronics.__proto__ = Product;
console.log("electronics " + Electronics.name); //empty

var Foods = {
	weihgt : 0
};
Foods.__proto__ = Product;
console.log("foods " + Foods.name); //empty
///////////////////////////////////////////////////////
var dress = {
	name: "red dress",	
	count : 1,	
	maxCount :10
    };
dress.__proto__ = Clothes;
console.log("dress price " + dress.price + " size "+ dress.size); //"dress price " + 0+ "size "+ 0

var phone =  {
	name: "Samsung", 
	price:5000, 
	manufacturer: "China",
	maxCount :100
};
phone.__proto__ = Electronics;
console.log("phone count " + phone.count); //"phone count" + 1

var tv =  {
	name: "Samsung", 	
	manufacturer: "China"
	
};
tv.__proto__ = Electronics;
console.log("tv maxCount " + tv.maxCount); // "tv maxCount " + 100

var drink = {
	name:"pepsi",
	price:25, 	
	count: 10,
	count : 10,	
	maxCount :10
};
drink.__proto__ = Foods;
console.log("drink " + drink.manufacturer +" weihgt " + drink.weihgt);//"drink" + unknown +"weihgt " + 0

drink.getProductPrice(drink);
phone.getProductPrice(phone);
tv.getProductPrice(tv);
dress.getProductPrice(dress);
//dress.getProduct(dress);