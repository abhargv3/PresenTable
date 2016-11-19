<!DOCTYPE html>

<!-- Classes -->
<html>
<head>
    <title> PresenTable</title>
      <!-- Latest compiled and minified AngularJavaScript -->
      <script src="/bower_components/angular/angular.js"></script>
      <script src="/bower_components/angular-route/angular-route.js"></script>

      <!-- Latest compiled and minified CSS -->
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

      <!-- Optional theme -->
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

      <!-- Latest compiled and minified JavaScript -->
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
      <script type="text/javascript" src="app.module.js"></script>
</head>
  <body ng-app="loginApp">
    <div class="container-fluid" ng-controller="loginCtrl">
    {{12+2}}
      <border1>
          <h1>
           <strong>Welcome to PresenTable </strong>
         </h1>
      </border1>
      <p class = "border1">PresenTable fixes up your Facebook page to make you more presentable to recruiters </p> 
      <button type="button" class="btn btn-info btn-lg" ng-click="FBLogin()">Login</button>
      <a class="btn btn-info btn-lg active" role="button" aria-pressed="true">Be PresenTable </a>

  </div>

  </body>
</html>
