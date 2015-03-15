<?php

class Product extends \Eloquent {
	protected $guarded = ['id'];

	public function category(){
		return $this->belongsTo('Category','category_id');
	}
	public function tags(){
		return $this->belongsToMany('Tag','product_tag','product_id','tag_id');
	}

    public function setReleaseDateAttribute($value){
        if(isset($value)&&($value!=null)&&($value!=0)){
            $date1 = date('Y-m-d', strtotime($value));
            $this->attributes['release_date'] = $date1;
        }else{
            $this->attributes['release_date'] = null;
        }
    }
}