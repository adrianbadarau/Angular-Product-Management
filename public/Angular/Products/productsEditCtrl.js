 /**
 * Created by adib on 3/1/15.
 */
 (function(){
     "use strict";
     angular.module('Products')
         .controller('ProductsEditCtrl',['product','$state','productsService',ProductsEditCtrl]);

     function ProductsEditCtrl(product,$state, productsService){
         var vm = this;
         vm.product = product;
         vm.product.cost = parseFloat(vm.product.cost);
         vm.product.price = parseFloat(vm.product.price);
         if(vm.product && vm.product.id){
             vm.title = "Edit product: "+vm.product.name;
         }else{
             vm.title = "New Product";
         }
         vm.priceOptions = 'percent';

         vm.calculatePrice = function(){
             vm.product.price = productsService.getPriceProc(vm.product.cost, vm.markupProc);
         };
         vm.calculatePriceFromAmmpunt =function(){
             vm.product.price = productsService.getPrice(vm.product.cost,vm.markupAmm);
         };
         vm.marginPercent = function(){
             return productsService.getMarginProc(vm.product.price,vm.product.cost);
         };
         vm.open = function ($event) {
             $event.preventDefault();
             $event.stopPropagation();

             vm.opened = !vm. opened;
         };
         vm.submit = function(){
             if (vm.product.id > 0){
                 console.log("PRODUSUL:  ",vm.product);
                 vm.product.$update({id:vm.product.id},vm.product);
                 toastr.success("Product successfully updated!");
             }else{
                 vm.product.$save();
                 toastr.success("Product successfully saved!")
             }
         };
         vm.cancel = function(){
             $state.go('productsIndex');
         };
         vm.back = function(){
             $state.go('^.info');
         };
     }
 }());