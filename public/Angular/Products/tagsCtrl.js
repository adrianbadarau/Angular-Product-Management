/**
 * Created by adib on 07/03/15.
 */
(function(){
    "use strict";
    angular.module('Products')
        .controller('TagsCtrl',['product','$http','$state',TagsCtrl]);

    function TagsCtrl(product,$http,$state){
        var vm = this;
        vm.product = product;
        vm.test = "ADD";
        vm.addTag = function(tag){
            var url = 'api/addTag/'+vm.product.id;
            console.log(tag);
            $http.post(url,{name:tag})
                .success(function(response){
                    console.log(response);
                    vm.product = response;
                    toastr.success("Product Updated!");
                })
        };
        vm.removeTag = function(tagId){
            var url = 'api/product/'+product.id+'/rmTag/'+tagId;
            $http.delete(url)
                .success(function(response){
                    console.log(response);
                    vm.product = response;
                    toastr.success("Tag Removed!");
                })
        };
        vm.cancel = function(){
            $state.go('^.price');
        }
    }
}());