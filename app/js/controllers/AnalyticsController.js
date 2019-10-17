myApp.controller('AnalyticsController', ['$scope','$http', function($scope,$http) {

    $scope.init = function(){

        console.log("Init started Anatlitics");
        $scope.appConfig="http://localhost:3000";


    };





    
    $scope.init();


}]);