<!DOCTYPE html>

<!-- Classes -->
<html>
<head>
    <title> PresenTable</title>
      <!-- Latest compiled and minified AngularJavaScript and JQuery-->
      <script src="/bower_components/angular/angular.js"></script>
      <script src="/bower_components/angular-route/angular-route.js"></script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
      <!-- Latest compiled and minified CSS -->
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

      <!-- Optional theme -->
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

      <!-- Latest compiled and minified JavaScript -->
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <!--Clarifai Script-->
      <script type="text/javascript" src="https://sdk.clarifai.com/js/clarifai-latest.js"></script>
      <script type="text/javascript">
        var clarifaiApp = new Clarifai.App(
            '9VKC0UBbx74gI39IkMyKxexyO_BUemWMMJFI0ukP',
            'KnGRksrndn6UFXGs-a5t0LFNqz-ri25mDEhbWBf5'
        );
      </script>
      <!--Local Script files -->
      <script type="text/javascript" src="app.route.js"></script>
      <script type="text/javascript" src="app.module.js"></script>


</head>
    <body ng-app="myApp">
       <ng-view></ng-view>
    </body>
</html>
