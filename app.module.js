window.fbAsyncInit = function() {
    FB.init({
      appId      : '152005755273941',
      status     : true,
      cookie     : true,
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
    var user_photos;
    $scope.FBLogin=function(){
        FB.login(function(response) {
            if (response.authResponse) {
                console.log('Welcome!  Fetching your information.... ');
                FB.api('/me', function(response) {
                    console.log('Good to see you, ' + response.name + '.');              
                    //accessCode = FB.getAuthResponse().accessToken;
                    user_photos = FB.getAuthResponse().user_photos;
                    userId = response.id;
                });
            } else {
             console.log('User cancelled login or did not fully authorize.');
            }
            FB.api(
                  '/me/photos',
                  'GET',
                  {"fields":"images"},
                  function(response) {
                    console.log(response.data); //This is an array
                    $scope.links = response.data;
                    console.log($scope.links[0].images[0].source);
                    for(var i=0; i<$scope.links.length; i++){
                        //console.log($scope.images[i].source);
                        $scope.imageObj.push({url:$scope.links[i].images[0].source, id:userId+i});
                        $scope.ids.push(userId+i);
                    };
                    console.log($scope.imageObj);
                    clarifaiApp.inputs.create($scope.imageObj)
                    .then(
                        $scope.searchByTag(),
                        function(err){
                            console.error(err);
                        }
                    );
                });
        },{scope:'user_photos', return_scopes:true});
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

