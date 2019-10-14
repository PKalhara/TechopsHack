myApp.controller('AnalyticsController', ['$scope','$http', function($scope,$http) {

    $scope.init = function(){

        console.log("Init started Anatlitics");
        $scope.appConfig="http://localhost:3000";
//        $scope.all;
//        $scope.getAll();
//        $scope.x=[];
        $scope.majorOne;
        $scope.majorTwo;
        $scope.majorThree;
        $scope.majorFour;
        $scope.majorFive;
        $scope.majorSix;
        $scope.majorSeven;
        $scope.majorEight;
//        
//        $scope.xTag=[];
//        $scope.subDomain=[];
//        $scope.majorOneTag;
//        $scope.majorTwoTag;
//        $scope.majorThreeTag;
//        $scope.majorFourTag;
        $scope.load();

    };
    
    
    $scope.getAll = function () {
    
    
        $http.get('https://api.builtwith.com/v11/api.json?KEY=92cd75b1-99fd-4dc7-ba32-3193e3fb9052&LOOKUP=https://www.ubuntu.com/').success(
                function(data){
                 //   console.log(data);
                    for(var i=0;i<data.Results[0].Result.Paths.length;i++){
                       // console.log(data.Results[0].Result.Paths[i].Technologies);
                        for(var x=0;x<data.Results[0].Result.Paths[i].Technologies.length;x++){
                           // console.log(data.Results[0].Result.Paths[i].Technologies[x])
                            $scope.x.push(data.Results[0].Result.Paths[i].Technologies[x].Name);
                        }
                        
                    }
                        $scope.majorOne=$scope.x[0];
                        $scope.majorTwo=$scope.x[1];
                        $scope.majorThree=$scope.x[2];
                        $scope.majorFour=$scope.x[3];
                    
                    
                    
                     //   console.log(data);
                    for(var i=0;i<data.Results[0].Result.Paths.length;i++){
                       // console.log(data.Results[0].Result.Paths[i].Technologies);
                        for(var x=0;x<data.Results[0].Result.Paths[i].Technologies.length;x++){
                           // console.log(data.Results[0].Result.Paths[i].Technologies[x])
                            $scope.xTag.push(data.Results[0].Result.Paths[i].Technologies[x].Tag);
                        }
                        
                    }
                        $scope.majorOneTag=$scope.xTag[0];
                        $scope.majorTwoTag=$scope.xTag[1];
                        $scope.majorThreeTag=$scope.xTag[2];
                        $scope.majorFourTag=$scope.xTag[3];
                    
                    
                    for(var i=0;i<data.Results[0].Result.Paths.length;i++){
                        //console.log(data.Results[0].Result.Paths[i].SubDomain);
                        $scope.subDomain.push(data.Results[0].Result.Paths[i].Url);
                    }
                   // console.log($scope.subDomain);

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
                    
                    $scope.majorOne=data.applications[0].name;
                    $scope.majorTwo=data.applications[1].name;
                    $scope.majorThree=data.applications[2].name;
                    $scope.majorFour=data.applications[3].name;
                    $scope.majorFive=data.applications[4].name;
                    $scope.majorSix=data.applications[5].name;
                    $scope.majorSeven=data.applications[6].name;
                    $scope.majorEight=data.applications[8].name;
//                    $scope.majorFive=data.applications[4].name;
//                    $scope.majorSix=data.applications[5].name;
//                    $scope.majorSeven=data.applications[6].name;
//                    $scope.majorEight=data.applications[7].name;
                    
                    $scope.majorOneConfidence=data.applications[0].confidence;
                    $scope.majorTwoConfidence=data.applications[1].confidence;
                    $scope.majorThreeConfidence=data.applications[2].confidence;
                    $scope.majorFourConfidence=data.applications[3].confidence;
                    $scope.majorFiveConfidence=data.applications[4].confidence;
                    $scope.majorSixConfidence=data.applications[5].confidence;
                    $scope.majorSevenConfidence=data.applications[6].confidence;
                    $scope.majorEightConfidence=data.applications[8].confidence;
                    
                     $scope.majorOneFrame=data.applications[0].categories[0];
                     $scope.majorTwoFrame=data.applications[1].categories[0];
                     $scope.majorThreeFrame=data.applications[2].categories[0];
                     $scope.majorFourFrame=data.applications[3].categories[0];
                     $scope.majorFiveFrame=data.applications[4].categories[0];
                     $scope.majorSixFrame=data.applications[5].categories[0];
                     $scope.majorSevenFrame=data.applications[6].categories[0];
                     $scope.majorEightFrame=data.applications[8].categories[0];
                    
                     $scope.majorOneTag=data.applications[0].icon;
                     $scope.majorTwoTag=data.applications[1].icon;
                     $scope.majorThreeTag=data.applications[2].icon;
                     $scope.majorFourTag=data.applications[3].icon;
                     $scope.majorFiveTag=data.applications[4].icon;
                     $scope.majorSixTag=data.applications[5].icon;
                     $scope.majorSevenTag=data.applications[6].icon;
                     $scope.majorEightTag=data.applications[8].icon;
                }
            ).error(
                function(error){
                  console.log(error)
                }
            );
        
    }
    
    $scope.init();


}]);