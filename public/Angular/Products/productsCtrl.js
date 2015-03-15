(function(){
    "use strict";
    angular.module("Products")
           .controller("ProductsCtrl",['productResource',ProductsCtrl]);

    function ProductsCtrl(productResource){
        var vm = this;
        productResource.query(function(data){
            vm.products = data;
            console.log(data);
        });
        vm.showImage = false;
        vm.toggleImage = function(){
            vm.showImage = !vm.showImage;
        }
    }
}());
