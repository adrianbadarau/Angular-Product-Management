@extends("main.home")
@section('content')
    <div ng-app = 'Products'>

            <div class="row">
                <div class="col-md-2">
                    <ul class="nav nav-pills nav-stacked">
                        <li ui-sref-active="active"><a ui-sref="productsIndex"><i class="glyphicon glyphicon-dashboard"></i> Products Index</a></li>
                        <li ui-sref-active="active"><a ui-sref="productEdit.info({id:0})"><i class="glyphicon glyphicon-plus-sign"></i> Add Product</a></li>
                        <li ui-sref-active="active"><a ui-sref="priceAnalytics"><i class="glyphicon glyphicon-stats"></i>Charts </a> </li>
                    </ul>
                </div>
                <div class="col-md-10">
                    <div ui-view>

                    </div>
                </div>
            </div>
    </div>
    {{--Include for app--}}
    {{ HTML::script("Angular/Products/app.js") }}
    {{--Includes for SERVICES--}}
    {{ HTML::script("Angular/Common/Services/common.services.js") }}
    {{ HTML::script("Angular/Common/Services/productResource.js") }}
    {{ HTML::script("Angular/Common/Services/productsService.js") }}
    {{--Includes for CONTROLLERS--}}
    {{ HTML::script('Angular/Products/productsCtrl.js') }}
    {{ HTML::script('Angular/Products/productsDetailsCtrl.js') }}
    {{ HTML::script('Angular/Products/productsEditCtrl.js') }}
    {{ HTML::script('Angular/Products/tagsCtrl.js') }}
    {{ HTML::script('Angular/Products/priceAnalyticsCtrl.js') }}


@stop