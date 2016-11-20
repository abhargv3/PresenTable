var app=angular.module("myApp",["ngRoute"]);

app.config(function($routeProvider){
    $routeProvider
    .when("/home",
            {
                templateUrl:"partials/login.htm",
                controller:"loginCtrl"
            }
        )
    .when("/results",
            {
                templateUrl:"partials/results.htm",
                controller:"loginCtrl"
            }  
         )
    .when("/table",
            {
                templateUrl:"partials/table.htm",
                controller:"loginCtrl"
            }  
         )
    .otherwise(
            {
                redirectTo:"/home"
            }
    );

});
