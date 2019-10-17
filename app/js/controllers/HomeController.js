myApp.controller('HomeController', ['$scope','$http','$q','$location','toastr', function($scope,$http,$q,$location,toastr) {

    $scope.init = function(){

        console.log("Init started URL");
        $scope.appConfig="http://localhost:3000";
        $scope.isLoading=false;
        $scope.isAnalyse=true;
        $scope.isSuccess=false;
        $scope.isFailed=false;
        $scope.progressValue=0;
        $scope.number=0;
        $scope.speeach();
      //  $scope.readTextFile("/progress.txt");



    };

    $scope.execute = function (){

        console.log($scope.esxi)
        $scope.isLoading=true;
        $http.get($scope.appConfig+'/execute/:'+$scope.drpone+'/'+$scope.drptwo+'/'+$scope.drpthree+'/'+Array.from($scope.esxi),{
                scriptParam1: $scope.drpone,
                scriptParam2: $scope.drptwo,
                scriptParam3: $scope.drpthree,
                scriptParam4: Array.from($scope.esxi),
            }).success(
                function(data){

                    $scope.isLoading=false;
                    $scope.move();
                    if(data=="success"){
                    $scope.alertStatus=data;
                    $scope.isSuccess=true;
                    }else if(data=="failed"){
                    $scope.alertStatus=data;
                    $scope.isFailed=true;
                    }

                }
            ).error(
                function(error){
                  console.log(error)
                }
            );
    }

   $scope.readTextFile =  function (file)
    {
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function ()
        {
            if(rawFile.readyState === 4)
            {
                if(rawFile.status === 200 || rawFile.status == 0)
                {
                    var allText = rawFile.responseText;
                    $scope.number=parseInt(allText)

                      return $scope.number;


                }
            }
        }
        rawFile.send(null);
    }



//    $scope.getProgress = function (){
//
//
//
//      $http.get($scope.appConfig+'/progress.txt', {
//                                      }).success(
//                                          function(data){
//
//                                                 console.log($scope.number)
//                                                 $scope.number=parseInt(data)
//                                                 console.log($scope.number)
//
//                                          }
//                                      ).error(
//                                          function(error){
//                                            console.log(error)
//                                          }
//                                      );
//
//
//
//
//
//    }

    $scope.wait = function(ms){

       var start = new Date().getTime();
       var end = start;
       while(end < start + ms) {
         end = new Date().getTime();
      }
    }

    $scope.progress = function(){
            for (i = 0; i < 10; i++) {
                    $scope.wait(1000);
                    document.getElementById("pbar").style.width=i+"px";
            }

    }

    $scope.move = function (){

            document.getElementById("pbar").style.width="0px";
            var i= 0;
            if (i == 0) {
                i = 1;
                var elem = document.getElementById("pbar");

                var width = 1;
                var id = setInterval(frame, 500);

                function frame() {
                  if (width >= 100) {
                    clearInterval(id);
                    i = 0;

                  } else {
                    width++;
                    elem.style.width = width + "%";
                  }
                }
              }

    }


    $scope.speeach = function (){
    // talkify.config.remoteService.host = 'http://talkify.net';
    // talkify.config.remoteService.apiKey = '46b32f4e-6b73-40ee-8ae1-4a17cb1b18f6';

    // talkify.config.ui.audioControls = {
    //   enabled: false //<-- Disable to get the browser built in audio controls
    // };

    // talkify.config.debug = true;

    // $(document).ready(function() {
    //   var textContainer = $('p');

    //   talkify.messageHub.subscribe("fiddle", "*.player.tts.play", function(){
    //   	textContainer.text("playing...");
    //   });

    //   talkify.messageHub.subscribe("fiddle", "*.player.tts.ended", function(){
    //   	textContainer.text("Not playing...");
    //   });

    //   var player = new talkify.TtsPlayer();

    // 	player.playText("Testing, testing");


    // });



    }




    $scope.init();


}]);