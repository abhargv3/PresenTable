var app=angular.module("myApp",[]);

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

app.controller("homeCtrl", function($scope){
    
    $scope.FBLogin=function(){
        FB.login(function(response) {
            if (response.authResponse) {
                console.log('Welcome!  Fetching your information.... ');
                FB.api('/me', function(response) {
                    console.log('Good to see you, ' + response.name + '.');
                    var accessCode = FB.getAuthResponse().accessToken;
                    console.log(accessCode);
                });
            } else {
             alert('User cancelled login or did not fully authorize.');
            }
        });

    };

	$scope.FBImage=function(){
    FB.api(
  			'/{user-id}/photos',
  			'GET',
  			{},
  			function(response) {
      // Insert your code here
      			console.log(response);
  			}
		);
  };
});
