window.fbAsyncInit = function() {
    FB.init({
      appId      : '152005755273941',
      xfbml      : true,
      version    : 'v2.6'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

app.controller("loginCtrl",function($scope,$location){
    //Facebook Login
    $scope.images = [];
    $scope.imageObj = [];
    $scope.ids = [];
    $scope.tag = [{type:'input', name:'Alcohol'}, {type:'input', name:'party'}, {type:'input', name:'profanity'}, {type:'input', name:'smoking'}, {type:'input', name:'solo cups'}];
    var userId;
    var accessCode;
    $scope.FBLogin=function(){
        FB.login(function(response) {
            if (response.authResponse) {
                console.log('Welcome!  Fetching your information.... ');
                FB.api('/me', function(response) {
                    console.log('Good to see you, ' + response.name + '.');
                    accessCode = FB.getAuthResponse().accessToken;
                    userId = response.id;
                });
            } else {
             console.log('User cancelled login or did not fully authorize.');
            }
        });

    };

    $scope.findPhoto = function(){
        FB.api(
            "/me/photos/",
            "GET",
            {"fields":"picture"},
            function (response) {
                console.log(response.data); //This is an array
                $scope.images = response.data;
                console.log($scope.images[0].picture);
                for(var i=0; i<$scope.images.length; i++){
                    console.log($scope.images[i].picture);
                    $scope.imageObj.push({url:$scope.images[i].picture, id:parseInt(userId)+i});
                    $scope.ids.push(parseInt(userId)+i);
                };
                console.log($scope.imageObj);
                clarifaiApp.inputs.create($scope.imageObj)
                .then(
                    $scope.searchByTag(),
                    function(err){
                        console.error(err);
                    }
                );
            }
        );
        $location.path('/results');
    };
    $scope.searchByTag = function(){
        console.log($scope.tag);
        clarifaiApp.inputs.search($scope.tag).then(
            function(response){
                console.log(response);
            },
            function(response){
                console.log(response);
            }
        );

    };    
});

