(function() {
'use strict'
var products = [];

  var Basket = function(){

    this.products =  products;  
  	this.getProduct = function(i){
                 return products[i].obj;             
  	};

  	this.addProduct = function(product){
             
      if(!checkValidation(product)){
        console.error();
      }else{
          var item = getProductByName(product.name);
        if (item) {
         item.count++;
        }else{
          products.push({obj:product, count: 1});
        }
        }
      
  	};
    this.getProductDiscount  = function(productName){
      if (productName) {
        var item = getProductByName(productName);
        count = item.count;
          if (count > 5) {
            return console.log((item.obj.price * 0.05) * count );
    }else if (count > 3) {
            return console.log((item.obj.price * 0.1) * count );
    };
    }else{
       var sum = 0;
       for (var i = 0; i < products.length; i++) {
        
       };
      }
    
   } ;

    this.getPriceAfterDiscount = function(product){
        var discount = getProductDiscount(productName);
       return console.log(this.price - discount);
    };

   

    /* напишите метод getProductCount([наименование товара]), возвращающий кол-во товара в корзине*/

     function getProductByName(productName){
      for (var i = 0; i < products.length; i++) {
        if (products[i].obj.name == productName) {
          return products[i];
        };
      };
      
    };
        /*3. напишите внутренний метод корзины валидирующий товары. у них обязаны быть непустые свойства наименование, цена. и сделайте валидацию товаров при добавлении */
  function checkValidation(product) { 
      return product.name != undefined && product.price != undefined; 
      }
      //
  
 function getdiscount(products){
  var count = product.count;

 }


}

/*2напишите конструктор (класс) товара с фабричными методами создания пустого товара и из данных.*/
function Product(name, price)  {
    this.name = name || "Default";
    this.price = price || 0; 
	
  	}
 Product.createEmptyProduct = function(){
  var product = new Product;
  product.name = "Default";
  product.price = "0";
  return product;
 }  

  var basket = new Basket;
  var newProduct = new Product.createEmptyProduct();
    console.log(newProduct);   
  //var tv = new Product("tv", 100);
   var car = new Product("car", 10000);
 // var phone = new Product("phone", 1000);
  var phone = new Product("phone2", 2000);
 // console.log(tv, car, phone);

//basket.addProduct({});
basket.addProduct(car);
basket.addProduct(phone);
basket.addProduct(phone);
basket.addProduct(phone);
console.log(basket.getProduct(0));
console.log(basket.getProductDiscount());
console.log(basket.getPriceAfterDiscount(phone));

//

//напишите метод получения цены товаров с учетом скидки getProductPrice([наименование товара]) 
/*function Product(name, price){
  this.name = name;
  this.price = price;

 this.getPriceAfterDiscount = function(){
       return console.log(this.price - (this.price * 0.1));
 }
}
*/
var tv = new Product("tv", 100);
var car = new Product("car", 10000);
var phone = new Product("phone", 1000);
console.log(tv);
console.log(car);
console.log(phone);


//Конструктор для создани различный товаров
/*function Product(name, price){
  this.name = name;
  this.price = price;

 this.getPriceAfterDiscount = function(){
       return console.log(this.price - (this.price * 0.1));
 }
}
*/
var tv = new Product("tv", 100);
var car = new Product("car", 10000);
var phone = new Product("phone", 1000);
console.log(tv);
console.log(car);
console.log(phone);
//



//Фабричнфе методыБ 
/*function Product(){
  this.price = null;
  this.name = null;
};

//фабрика для продуктов без данніх
Product.createEmpty = function(){
  var product = new Product;
  product.price = 100;
  product.name = "default";
  return product;

};
//фабрика для продуктов c данними
Product.createFromData = function(data){
   var product = new Product;
  product.price = data.price;
  product.name = data.name;
  return product;

};
var tv = Product.createEmpty();
console.log(tv);
var tv1 = Product.createFromData({price: 700, name: "television"});
console.log(tv);

*/

}());