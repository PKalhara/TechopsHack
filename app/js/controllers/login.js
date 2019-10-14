myApp.controller('LoginController', ['$scope','$http','$location','toastr', function($scope,$http,$location,toastr) {

    $scope.init = function(){

        console.log("Init started AdmiLT");
        $scope.appConfig="http://localhost:3001";
        $scope.all;
       // $scope.getAll();
        $scope.email="p@gmail.com";   
        $scope.password="123";
       // $scope.login();

    };
    
    $scope.login = function (){
        console.log($scope.email);
        console.log($scope.password);
        
        $http.post($scope.appConfig+'/login', {
                email: $scope.email,
                password: $scope.password
            }).success(
                function(data){
                    console.log(data.status)
                    if(data.status){
                    $location.url('/analytics');
                    toastr.info('Successfully Logged In!!!', data.user[0].fname);
                    }else{
                        
                    }
                }
            ).error(
                function(error){
                  console.log(error)
                }
            );
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