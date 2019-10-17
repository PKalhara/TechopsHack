myApp.controller('LoginController', ['$scope','$http','$location','toastr', function($scope,$http,$location,toastr) {

    $scope.init = function(){

        console.log("Init started AdmiLT");
        $scope.appConfig="http://localhost:3001";
        $scope.all;
       // $scope.getAll();
        $scope.email="p@gmail.com";   
        $scope.password="123";
        $scope.isLoading=false;


       // $scope.login();

    };

    $scope.wait = function(ms){

           var start = new Date().getTime();
           var end = start;
           while(end < start + ms) {
             end = new Date().getTime();
          }
     }

    $scope.login = function (){
        console.log("Logged");
        $scope.isLoading=true;
        //$scope.wait(3000);

        $location.path('/home');


    }
    
    $scope.getAll = function () {
    
    
        $http.post($scope.appConfig+'/getAll').success(
                function(data){
                    console.log(data)
                    $scope.all=data
                }
            ).error(
                function(error){
                  console.log(error)
                }
            );
        
    }

    
    $scope.init();


}]);