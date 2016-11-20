var app=angular.module("myApp",["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
    .when("/home",
            {
                templateUrl:"partials/login.htm",
                controller:"loginCtrl"
            }
        )
    .when("/my-bukits",
            {
                templateUrl:"partials/results.htm",
                controller:"loginCtrl"
            }  
         )
    .otherwise(
            {
                redirectTo:"/home"
            }
    );

});
