/**
 * Created by adib on 2/28/15.
 */
(function(){
    "use strict";
    angular.module("common.services")
        .factory("productResource",["$resource",productResource]);

    function productResource($resource){
        return $resource("/api/products/:id",null,{'update':{method:'PUT'}});
    }
}());