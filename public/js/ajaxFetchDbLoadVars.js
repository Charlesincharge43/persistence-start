// var Promise = require('bluebird');
// CAN'T DO REQUIRE IN BROWSER/CLIENT SIDE JAVASCRIPT

var hotels, restaurants, activities;

$(document).ready(function(){
	$.get('/api/options')
	  .then(function ([dbHotels, dbRestaurants, dbActivities]) {
	    hotels=dbHotels;
	    restaurants=dbRestaurants;
	    activities=dbActivities;
	    attractionsModule();
	    options();
	    // dayModule();
	    return;
	  })
	  .then(function(){
	  	dayModule();
	  	tripModule();
	  })
	  .catch( console.error.bind(console) );

})