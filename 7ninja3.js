/*✅ создать классы для групп товаров (одежда, электроника, продукты) унаследованные от класса Product со свойствами по своему усмотрению
✅ решить какие свойства товаров можно вынести в родительский класс и реализовать это.
✅ написать методы для вывода наименования товара в формате "Товар: [наименование], цена: [цена]"
✅ написать методы для валидации всех свойств товаров
✅ написать методы для вывода всех свойств товара в виде html таблицы (представьте что пишете для вывода на страницу товара)?
✅ напишите еще 2 класса наследника от электроники и проверьте как работают унаследованные методы в новых классах. если работают 
некорректно то переписать методы так, чтобы работали правильно при создании новых классов наследников.*/
//не работает


var Product = {
	   
    manufacturer : "unknown",
	count :1,	
	maxCount : 100,
	
}


// методы в прототипе

function Clothes(data){
	
   this.size = data.size || 0;
   this.name = data.name || "cloth";
   this.price = data.price|| 0
   
}


Clothes.prototype = Product;

Clothes.prototype.getProductPrice = function(data){
  	return console.log("Product:"+ "["+ this.name + "], " +  ",price" + "["+  this.price + "]" );
  };

function Electronics(data){
	this.name = data.name || "Electronic";
	this.brand = data.brand || "unknown";
    this.model = data.model || "unknown";
    this.price = data.price|| 0
}
Electronics.prototype = Product;

Electronics.prototype.getProductPrice = function(data){
  	return console.log("Product:"+ "["+ this.name + "], " +  ",price" + "["+  this.price + "]" );
  };

function Foods(data){
	  this.name = data.name || "Food";
	  this.weihgt = data.weihgt || 0;
	  this.price = data.price|| 0
}
Foods.prototype = Product;
Foods.prototype.getProductPrice = function(data){
  	return console.log("Product:"+ "["+ this.name + "], " +  ",price" + "["+  this.price + "]" );
  };

var dress = new  Clothes({
	name: "red dress",
	price: 50,	
	size: 50		
    });

console.log("dress " + dress.name + " ,maxCount " + dress.maxCount);

var phone = new Electronics({
	name: "Samsung", 
	price:5000, 
	count : 5,	
	maxCount :100
}); 
console.log("phone " + phone.name + " ,manufacturer " + phone.manufacturer);

var drink = new Foods({
	name:"pepsi",
	price:25, 
	manufacturer: "USA",	
	maxCount :10
}); 
console.log("drink " + drink.name + " ,count " + drink.count);

drink.getProductPrice(drink);
phone.getProductPrice(phone);
dress.getProductPrice(dress);
//dress.getProduct(dress);