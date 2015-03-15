<?php

class Category extends \Eloquent {
	protected $guarded = ['id'];

	public function product(){
		return $this->hasMany('Product','category_id');
	}
}