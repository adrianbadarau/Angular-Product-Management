<?php

class TagsController extends \BaseController {

    public function addTag($prodId){
        $tag = Tag::firstOrCreate(Input::all());
        $product = Product::find($prodId);
        $product->tags()->attach($tag->id);
        $product->category;
        $product->tags;
        return Response::json($product,200);
    }

    public function rmTag($prodId,$tagId){
        $product = Product::find($prodId);
        $product->tags()->detach([$tagId]);
        $product->category;
        $product->tags;
        return Response::json($product,200);
    }

}