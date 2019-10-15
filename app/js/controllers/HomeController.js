myApp.controller('HomeController', ['$scope','$http','$q','$location','toastr', function($scope,$http,$q,$location,toastr) {

    $scope.init = function(){

        console.log("Init started URL");
        $scope.appConfig="http://localhost:3000";
        $scope.isLoading=false;
        $scope.isAnalyse=true;
        $scope.isSuccess=false;
        $scope.isFailed=false;

    };

    $scope.execute = function (){


//        console.log($scope.drpone)
//        console.log($scope.drptwo)
//        console.log($scope.drpthree)
        console.log((Array.from($scope.esxi)).length)
        $scope.isLoading=true;
        $http.get($scope.appConfig+'/execute/:'+$scope.drpone+'/'+$scope.drptwo+'/'+$scope.drpthree+'/'+Array.from($scope.esxi),{
                scriptParam1: $scope.drpone,
                scriptParam2: $scope.drptwo,
                scriptParam3: $scope.drpthree,
                scriptParam4: Array.from($scope.esxi),
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

    $scope.init();


}]);