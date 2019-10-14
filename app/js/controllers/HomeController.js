myApp.controller('HomeController', ['$scope','$http','$q','$location','toastr', function($scope,$http,$q,$location,toastr) {

    $scope.init = function(){

        console.log("Init started URL");
        $scope.appConfig="http://localhost:3000";
        $scope.all;
       // $scope.getAll();
        $scope.email="p@gmail.com"; 
        $scope.url="localhost:3000/";
        $scope.isLoading=false;
        $scope.isAnalyse=true;
        
        
       // $scope.login();

    };
    
    $scope.login = function (){
        
         $scope.isLoading=true;
         $scope.isAnalyse=false;
    
        console.log($scope.url);
         
        $http.get($scope.appConfig+'/an/'+$scope.url, {
                url: $scope.url
            }).success(
                function(data){
                    console.log(data);
                    
                     $location.url('/analytics');
                    
                }
            ).error(
                function(error){
                  console.log(error)
                }
            );
    }
    
    $scope.load = function () {
    
       $http.get($scope.appConfig+'/my_file.json', {
            }).success(
                function(data){
                    console.log(data.applications);
                }
            ).error(
                function(error){
                  console.log(error)
                }
            );
        
    }

    
    $scope.init();


}]);