/**
 * Created by adib on 12/03/15.
 */
(function(){
    'use strict';
    angular.module('Products')
        .controller('PriceAnalyticsCtrl',['$scope','$filter','products','productsService',PriceAnalyticsCtrl]);

    function PriceAnalyticsCtrl($scope,$filter,products,productsService){
        $scope.title="Price Analytics";
        for (var i=0;i<products.length;i++){
            products[i].marginAmount = productsService.getMargin(products[i].price,products[i].cost);
            products[i].marginPercent = productsService.getMarginProc(products[i].price,products[i].cost);
        }
        var orderedProductsAmount = $filter('orderBy')(products,'marginAmount');
        var filteredProductsAmount = $filter('limitTo')(orderedProductsAmount,5);
        var chartDataAmount=[];
        for(var i=0;i<filteredProductsAmount.length;i++){
            chartDataAmount.push({
                x: filteredProductsAmount[i].name,
                y: [filteredProductsAmount[i].cost,filteredProductsAmount[i].price,filteredProductsAmount[i].marginAmount]
            });
        }
        $scope.dataAmount = {
            series:['Cost','Price','MarginAmount'],
            data: chartDataAmount
        };
        $scope.configAmount={
            title: "TOP PRODUCTS BT MARGIN",
            tooltips:false,
            labels:false,
            mouseover: function(){},
            mouseout: function(){},
            click: function(){},
            legend: {
                display: true,
                position: 'right'
            }
        };
        var orderedProductsPercent = $filter('orderBy')(products,'marginAmount');
        var filteredProductsPercent = $filter('limitTo')(orderedProductsPercent,5);
        var chartDataPercent=[];
        for(var i=0;i<filteredProductsPercent.length;i++){
            chartDataPercent.push({
                x: filteredProductsPercent[i].name,
                y: [filteredProductsPercent[i].marginPercent]
            });
        }
        $scope.dataPercent = {
            series:['Margin %'],
            data: chartDataPercent
        };

        $scope.configPercent = {
            title: "Top % Margin Products",
            tooltips: true,
            labels: false,
            mouseover: function () { },
            mouseout: function () { },
            click: function () { },
            legend: {
                display: true,
                position: "right"
            }
        };
    }
}());