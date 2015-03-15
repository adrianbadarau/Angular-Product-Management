<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Acme Test APP</title>

    {{ HTML::style("packages/bootstrap-3.3.2-dist/css/bootstrap.css") }}
    {{ HTML::style('packages/toastr/toastr.css') }}
    {{ HTML::style("css/app.css") }}
    {{ HTML::script('js/jquery.js') }}
    {{ HTML::script('packages/angular-1.3.14/angular.js') }}
    {{ HTML::script('packages/angular-1.3.14/angular-resource.js') }}
    {{ HTML::script('packages/angular-1.3.14/angular-ui-router.js') }}
    {{ HTML::script('packages/bootstrap-3.3.2-dist/js/bootstrap.js') }}
    {{ HTML::script('packages/angular-1.3.14/ui-bootstrap-tpls-0.12.1.js') }}
    {{ HTML::script('packages/angular-1.3.14/ui-utils.js') }}
    {{ HTML::script('packages/toastr/toastr.js') }}
    {{ HTML::script('packages/angular-1.3.14/angular-messages.js') }}
    {{ HTML::script('packages/angular-charts-0.2.6/dist/d3.js') }}
    {{ HTML::script('packages/angular-charts-0.2.6/dist/angular-charts.js') }}
</head>
<body>
<div class="container" style="margin-top: 30px;">
    @yield('content')
</div>
</body>
</html>