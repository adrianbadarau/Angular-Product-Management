<?php

class FrontEndController extends \BaseController {

    public function showProducts(){
        return View::make("products.index");
    }

}