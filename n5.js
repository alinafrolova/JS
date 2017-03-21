/**
 * Created by иарвар on 17.11.2016.
 */
(function ()  {
var products = [];

    function Cart() {

        this.products =  products; 

         // приватное свойство product

    this.addProduct = function(product) {      
           if (!checkProduct(product)) {
              if (!product.name) {console.log("The name is empty"); product.name = "empty";};
            if (!product.price) { console.log("The price is empty"); product.price = "0";};
            if (!product.count) { console.log("The price is empty"); product.count = "1";};
                    
            products.push(product);
             localStorage.setItem("cart",product.name, product.count );
                       
           };      
             
          
        }
     

    this.getProduct = function(index) {
            return products[index];
        };

    this.getProductDiscount = function (product){
       var discount = 0;
       var count = getProductCount(product);
       if (count >=5 ) {
        discount = (product.price *count) * 0.1;
       }else{
        if (count >=3 ) {
        discount = (product.price *count) * 0.05;

       };
       }
       return discount;
     };
      
     this.getProductPrice = function (product){
       var discount =  this.getProductDiscount(product);
        var count = getProductCount(product);
       if (discount) {
        var price = (product.price *count) - discount;
       };
       return price;
     }

    };

    function checkProduct(product){

           
        for (var i = 0; i < products.length; i++) {

            if (product.name === products[i].name) {
             product.count++;
      
        products.slice(i,products[i],product.name);        
        var jsonProducts = JSON.stringify(products);
        localStorage.setItem("cart",jsonProducts );
        return true;
              };
         
           
        };
       
  

        }
     function getProductCount(product){
        var count = 0;
        for (var i = 0; i < products.length; i++) {
            if (product.name === products[i].name) { count++ };
            
        };
        return count;
     }
  



    function ProductEmpty() {
        this.name = "empty";
        this.price = "0";
        

    }
    function ProductFull(name, price,count) {
        this.name = name;
        this.price = price;
        this.count = count;

    }
    var silpoCart = new Cart();
    var emptyProduct = new ProductEmpty();
    var foodProduct = new ProductFull("bred", 100);
    var someProduct = new ProductFull("potatoes", 200);
     
    silpoCart.addProduct(emptyProduct);
    silpoCart.addProduct(foodProduct);
    silpoCart.addProduct(foodProduct);
    silpoCart.addProduct(foodProduct);
    silpoCart.addProduct(foodProduct);
    silpoCart.addProduct(foodProduct);
    silpoCart.addProduct(someProduct);
    silpoCart.addProduct(someProduct);
    silpoCart.addProduct(someProduct);

    
    console.log(emptyProduct);
    console.log(someProduct);    

    console.log( getProductCount(foodProduct));
    console.log( silpoCart.getProductDiscount(foodProduct));
       console.log( getProductCount(someProduct));
    console.log( silpoCart.getProductDiscount(someProduct));
    console.log( silpoCart.getProductPrice(someProduct));
  
}());