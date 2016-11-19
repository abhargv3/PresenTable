var app=angular.module("loginApp",["ngRoute"]);

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

app.controller("loginCtrl",function($scope){
    //Facebook Login
    $scope.imageURLs = [];
    var userId;
    $scope.FBLogin=function(){
        FB.login(function(response) {
            if (response.authResponse) {
                console.log('Welcome!  Fetching your information.... ');
                FB.api('/me', function(response) {
                    console.log('Good to see you, ' + response.name + '.');
                    var accessCode = FB.getAuthResponse().accessToken;
                    console.log(response);
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
            }
        );

    }
          
});

