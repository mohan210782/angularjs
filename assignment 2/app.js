(function(){
'use strict';
	angular.module('ShoppingListCheckOff',[])
	.controller('ToBuyController',ToBuyController)
	.controller('AlreadyBoughtController',AlreadyBoughtController)
	.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

//Controller1
ToBuyController.$inject=['ShoppingListCheckOffService'];
	function ToBuyController(ShoppingListCheckOffService){
		var toBuy = this;
			toBuy.buyItems = ShoppingListCheckOffService.getBuyItems();
		 	toBuy.modifyItem = function (name,quantity,index) {
            ShoppingListCheckOffService.modifyItem(name,quantity,index);
      }

}


//Controller2
AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
	function AlreadyBoughtController(ShoppingListCheckOffService){
		var bought = this;
			bought.boughtItems = ShoppingListCheckOffService.getBoughtItems();

}


//Service
function ShoppingListCheckOffService(){
	var service=this;
	var boughtItems=[];
	var buyItems=[ {name:"Cherries",quantity:2},
			{name:"Cookies",quantity:10},
			{name:"Cakes",quantity:1},
			{name:"Chocolates",quantity:3},
			{name:"Berries",quantity:5}
	];

 	service.modifyItem = function (name,quantity,index) {
    	var item = {
      	name:name,
      	quantity: quantity
    };
    boughtItems.push(item);
    buyItems.splice(index, 1);

};
	service.getBoughtItems = function () {
    	return boughtItems;
  	};
	service.getBuyItems = function () {
    	return buyItems;
  	};

}










})();