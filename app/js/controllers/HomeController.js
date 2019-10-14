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
        $scope.isSuccess=false;
        $scope.isFailed=false;


        
        
       // $scope.login();

    };
    
    $scope.execute = function (){

        $scope.isLoading=true;
        console.log($scope.param)

        $http.get($scope.appConfig+'/execute/:'+$scope.param+'/'+$scope.param2, {
                param: $scope.param,
                param2: $scope.param2
            }).success(
                function(data){
                    console.log(data);
                    $scope.isLoading=false;
                    if(data=="success"){
                    $scope.isSuccess=true;
                    }else if(data=="failed"){
                    $scope.isFailed=true;
                    }

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