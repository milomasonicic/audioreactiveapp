<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Pacifico&display=swap" rel="stylesheet">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Major+Mono+Display&family=Pacifico&family=UnifrakturMaguntia&family=Wavefont:wght@4..1000&display=swap" rel="stylesheet">


<!--wave--->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Pacifico&family=UnifrakturMaguntia&family=Wavefont:wght@4..1000&display=swap" rel="stylesheet">

        <!-- Scripts -->
     
              <!--script src=></script>
            <script src=" https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/addons/p5.sound.js"><script/>
        <script src="./p5/p5.js"></script>
        <scirpt src="./p5/addons/p5.dom.min.js"></scirpt>
        <script src="./sketch.js"></script-->
          



    
        
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
