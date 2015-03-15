<?php

class Tag extends \Eloquent {
	protected $guarded = ['id'];

	public function products(){
		return $this->belongsToMany('Product','product_tag','tag_id','product_id');
	}
}