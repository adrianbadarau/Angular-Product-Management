<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/
//Routes for the front end
Route::get('/showProducts',['as'=>'showProducts','uses'=>'FrontEndController@showProducts']);
//Backend routes
Route::group(['prefix'=>'api'],function(){
    Route::resource('products','ProductsController');
    Route::post('/addTag/{prodId}',['as'=>'addTag','uses'=>'TagsController@addTag']);
    Route::delete('/product/{id}/rmTag/{tagId}',['as'=>'rmTag','uses'=>'TagsController@rmTag']);
});

