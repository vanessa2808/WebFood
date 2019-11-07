<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <base href="{{asset('')}}">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Shop</title>
   
    <link rel="stylesheet" href="page/css/open-iconic-bootstrap.min.css">
    <link rel="stylesheet" href="page/css/animate.css">
    
    <link rel="stylesheet" href="page/css/owl.carousel.min.css">
    <link rel="stylesheet" href="page/css/owl.theme.default.min.css">
    <link rel="stylesheet" href="page/css/magnific-popup.css">

    <link rel="stylesheet" href="page/css/aos.css">

    <link rel="stylesheet" href="page/css/ionicons.min.css">

    <link rel="stylesheet" href="page/css/bootstrap-datepicker.css">
    <link rel="stylesheet" href="page/css/jquery.timepicker.css">
    <link rel="stylesheet" href="page/css/flaticon.css">
    <link rel="stylesheet" href="page/css/icomoon.css">
    <link rel="stylesheet" href="page/css/style.css">
    
    <script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false);
    function hideURLbar(){ window.scrollTo(0,1); } </script>
  
    
</head>
<body>  
    <div id="example">
      
    </div>
    <script src="js/app.js"></script>
    <script src="page/js/jquery.min.js"></script>
    <script src="page/js/jquery-migrate-3.0.1.min.js"></script>
    <script src="page/js/popper.min.js"></script>
    <script src="page/js/bootstrap.min.js"></script>
    <script src="page/js/jquery.easing.1.3.js"></script>
    <script src="page/js/jquery.waypoints.min.js"></script>
    <script src="page/js/jquery.stellar.min.js"></script>
    <script src="page/js/owl.carousel.min.js"></script>
    <script src="page/js/jquery.magnific-popup.min.js"></script>
    <script src="page/js/aos.js"></script>
    <script src="page/js/jquery.animateNumber.min.js"></script>
    <script src="page/js/bootstrap-datepicker.js"></script>
    <script src="page/js/scrollax.min.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false"></script>
    <script src="page/js/google-map.js"></script>
    <script src="page/js/main.js"></script>


     @yield('script')
</body>
</html>
