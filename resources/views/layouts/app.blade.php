<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravue</title>

        <!-- Fonts -->
        <!-- <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css"> -->
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
        @if(env('VUE_DEVELOP', false) == false)
            <link rel="stylesheet" href="{{ asset('css/vue-app.css') }}">
        @endif


        <!-- Styles -->
        <style>
            html, body {
                background-color: #fff;
                color: #636b6f;
                font-family: 'Raleway';
                font-weight: 100;
                margin: 0;
            }

            .full-height {
            }

            .flex-center {
                /* align-items: center;
                display: flex;
                justify-content: center; */
            }

            .position-ref {
                position: relative;
            }

            .top-right {
                position: absolute;
                right: 10px;
                top: 18px;
            }

            .content {
            }

            .title {
                font-size: 84px;
            }

            .links > a {
                color: #636b6f;
                padding: 0 25px;
                font-size: 12px;
                font-weight: 600;
                letter-spacing: .1rem;
                text-decoration: none;
                text-transform: uppercase;
            }

            .m-b-md {
                margin-bottom: 30px;
            }
        </style>

    </head>
    <body>
        @include('components.navigation')

        @yield('content')

        <script src="{{ asset('js/vendor.js') }}"></script>  {{--  EXTERNAL LIBRARIES (JQUERY,MATERIALIZE.JS ETC) --}}
        
         @if(env('VUE_DEVELOP', false) == true)  {{-- IF OUR APP IS IN DEV THEN LARAVEL BROWSERSYNC WILL BE ENABLED, FEEL FREE TO REMOVE IT IF YOU DON'T WANT IT --}}
            <script id="__bs_script__">
                //<![CDATA[
                document.write("<script async src='http://HOST:3000/browser-sync/browser-sync-client.2.15.0.js'><\/script>".replace("HOST", location.hostname));
                //]]>
            </script>
            {{-- PLEASE, CONSIDE THIS FILE (browser-sync-client.2.15.0.js) MAY CHANGE DEPENDING OF BROWSERSYNC VERSION  --}}
        
            {{-- THIS WILL INYECT OUR VUE APP, IN LARAVEL APP. THEN NO NEED TO MAKE A BUILD :)  --}}
            <script id="vue-script">  
                //<![CDATA[
                    document.write("<script src='http://HOST:8080/app.js'><\/script>".replace("HOST", location.hostname));
                //]]>
            </script>
        @else
            <script src="{{ asset('js/vue-app.js') }}"></script>  
        @endif


    </body>
</html>
