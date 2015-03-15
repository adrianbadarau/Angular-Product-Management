(function(){
    "use strict";
    var app = angular.module('Products',["common.services","ui.router","ui.mask","ui.bootstrap","ngMessages","angularCharts"],function($interpolateProvider) {
        $interpolateProvider.startSymbol('<%');
    $interpolateProvider.endSymbol('%>');
    });
    app.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/products');
        $stateProvider
            .state('productsIndex',{
                url:'/products',
                templateUrl:'Angular/Products/Views/productsIndex.html',
                controller: 'ProductsCtrl as vm'
            })
            .state('productEdit',{
                abstract:true,
                url:'/products/edit/:id',
                templateUrl: 'Angular/Products/Views/productsEdit.html',
                controller: 'ProductsEditCtrl as vm',
                resolve:{
                    productResource:'productResource',
                    product: function(productResource, $stateParams){
                        var id = $stateParams.id;
                        return productResource.get({id:id}).$promise;
                    }
                }
            })
            .state('productEdit.info',{
                url:'/info',
                templateUrl: 'Angular/Products/Views/Edit/info.html'
            })
            .state('productEdit.price',{
                url:'/price',
                templateUrl: 'Angular/Products/Views/Edit/price.html'

            })
            .state('productEdit.tags',{
                url:'/tags',
                templateUrl:'Angular/Products/Views/Edit/tags.html',
                controller: 'TagsCtrl as vm'
            })
            .state('productDetails',{
                url:'/products/:id',
                templateUrl: 'Angular/Products/Views/productDetailView.html',
                controller: 'ProductDetailsCtrl as vm',
                resolve:{
                    productResource:"productResource",
                    product: function(productResource,$stateParams){
                        var id = $stateParams.id;
                        return productResource.get({id:id}).$promise;
                    }
                }
            })
            .state('priceAnalytics',{
                url:'/priceAnalytics',
                templateUrl:'Angular/Products/Views/chartsView.html',
                controller: 'PriceAnalyticsCtrl',
                resolve:{
                    productResource: 'productResource',
                    products: function(productResource){
                        return productResource.query().$promise;
                    }
                }

            })
    }])
}());