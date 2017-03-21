/*✅ создать классы для групп товаров (одежда, электроника, продукты) унаследованные от класса Product со свойствами по своему усмотрению
✅ решить какие свойства товаров можно вынести в родительский класс и реализовать это.
✅ написать методы для вывода наименования товара в формате "Товар: [наименование], цена: [цена]"
✅ написать методы для валидации всех свойств товаров
✅ написать методы для вывода всех свойств товара в виде html таблицы (представьте что пишете для вывода на страницу товара)?
✅ напишите еще 2 класса наследника от электроники и проверьте как работают унаследованные методы в новых классах. если работают 
некорректно то переписать методы так, чтобы работали правильно при создании новых классов наследников.*/
//counstructor 

function Product(data) {

  var self = this;

   +function validate(data){
   if (data.count <= data.maxCount) {
   	self.name = data.name || "empty";
    self.price = data.price || 0;
    self.manufacturer = data.manufacturer || "unknown";
	self.count = data.count || 1;	
	self.maxCount = data.maxCount || 100;  
    } else {
    	throw new Error ("Max fuel");
    }
  }(data);



  this.getProductPrice = function(name){
  	return console.log("Product:"+ "["+ this.name + "], " +  "price" + "["+ this. price + "]" );
  }

  this.getProduct= function(name){
  	var event;
  	return console.log( data);
  }
}
// методы в прототипе
function Clothes(data){
	Product.apply(this, arguments);
   var size = data.size || 0;
}
Clothes.prototype = Object.create(Product.prototype);

function Electronics(data){
	Product.apply(this, arguments);
	var brand = data.brand || "unknown",
    model = data.model || "unknown";
}
Electronics.prototype = Object.create(Product.prototype);

function Foods(data){
	Product.apply(this, arguments);
	var weihgt = data.weihgt || 0;
}
Foods.prototype = Object.create(Product.prototype);

var dress = new Clothes({
	name: "red dress",
	price: 50,
	count : 1,	
	maxCount :10
    });


var phone = new Electronics({
	name: "Samsung", 
	price:5000, 
	manufacturer: "China",
	count : 5,	
	maxCount :100
});

var drink = new Foods({
	name:"pepsi",
	price:25, 
	manufacturer: "USA",
	count: 10,
	count : 10,	
	maxCount :10
});

drink.getProductPrice(drink);
phone.getProductPrice(phone);
dress.getProductPrice(dress);
dress.getProduct(dress);