/**
 * Created by adib on 3/1/15.
 */
(function(){
    "use strict";
    angular.module("Products")
        .controller("ProductDetailsCtrl",['product','productsService',ProductDetailsCtrl]);

    function ProductDetailsCtrl(product,productsService){
        var vm = this;
        vm.product = product;
        console.log(vm.product);
        vm.marginPercent = productsService.getMarginProc(vm.product.price, vm.product.cost);
        vm.title = "Product Details for: "+vm.product.name;
    }
}());