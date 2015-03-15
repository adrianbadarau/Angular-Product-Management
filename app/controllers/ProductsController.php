<?php

class ProductsController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 * GET /products
	 *
	 * @return Response
	 */
	public function index()
	{
		$products = Product::with('tags','category')->get();
		return Response::json($products, 200);
	}

	/**
	 * Show the form for creating a new resource.
	 * GET /products/create
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 * POST /products
	 *
	 * @return Response
	 */
	public function store()
	{
		$product = new Product(Input::all());
        $product->save();
        return Response::json($product,200);
	}

	/**
	 * Display the specified resource.
	 * GET /products/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		$product = Product::with('category','tags')->find($id);
        return Response::json($product,200);
	}

	/**
	 * Show the form for editing the specified resource.
	 * GET /products/{id}/edit
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 * PUT /products/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
//        dd(Input::all());
		$product = Product::find($id);
        $product->update(Input::except('category','tags'));
        return Response::json($product,200);
	}

	/**
	 * Remove the specified resource from storage.
	 * DELETE /products/{id}
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		//
	}

}