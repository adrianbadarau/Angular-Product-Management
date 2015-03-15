/**
 * Created by adib on 08/03/15.
 */
(function () {
    'use strict';
    angular.module('common.services')
        .factory('productsService',productsService);

    function productsService(){
        function calculateMarginProc(price, cost){
            return Math.round(((100*(price-cost))/price));
        }
        function calculateMarginAmm(price, cost){
            return price - cost;
        }
        function calculatePriceFromProc(cost, proc){
            var price = cost+(cost*proc/100);
            return (Math.round(price*100))/100;
        }
        function calculatePriceFromAmm(cost,ammount){
            return (Math.round((cost+ammount)*100))/100;
        }

        return{
            getMarginProc: calculateMarginProc,
            getMargin: calculateMarginAmm,
            getPriceProc: calculatePriceFromProc,
            getPrice: calculatePriceFromAmm
        }
    }
}());