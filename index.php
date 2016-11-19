<!DOCTYPE html>

<!-- Classes -->

<head>
    <title> PresenTable</title>
      <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
      <script type="text/javascript" src="app.module.js"></script>
</head>

  <body ng-app="myApp">
    <div class="container-fluid" ng-controller="homeCtrl">
    {{2+3}}
      <border1>
          <h1>
           <strong>Welcome to PresenTable </strong>
         </h1>
      </border1>
      <p class = "border1">PresenTable fixes up your Facebook page to make you more presentable to recruiters </p> 
      <button type="button" class="btn btn-info btn-lg" ng-click=FBImage()>Login</button>
      <a href="#" class="btn btn-info btn-lg active" role="button" aria-pressed="true">Be PresenTable </a>

  </div>

  </body>
</html>
