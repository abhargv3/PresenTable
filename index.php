<!DOCTYPE html>

<!-- Classes -->
<html>
<head>
    <title> PresenTable</title>
      <!-- Latest compiled and minified AngularJavaScript -->
      <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js"></script>
      <!--<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular-route.js"></script>-->
      <!-- Latest compiled and minified Bootstrap CSS -->
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
      </link>
</head>
  <body ng-app="myApp">
    <div class="container-fluid" ng-controller="homeCtrl">
    {{11+12}}
      <border1>
          <h1>
           <strong>Welcome to PresenTable </strong>
         </h1>
      </border1>
      <p class = "border1">PresenTable fixes up your Facebook page to make you more presentable to recruiters </p> 
      <button type="button" class="btn btn-info btn-lg" ng-click=FBLogin()>Login</button>
      <a class="btn btn-info btn-lg active" role="button" aria-pressed="true" ng-click=FBImage()>Be PresenTable </a>

  </div>

  </body>
</html>
