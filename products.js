(function(){
	var app =angular.module('store-products',[]);

	/*moved this controller into the productPanels directive
	app.controller('PanelController', function(){
	this.tab=1;
	this.selectTab = function(setTab){
	  this.tab = setTab;
	};
	this.isSelected = function(checkTab){
	  return this.tab === checkTab;
	};
	});*/
  	//element directive for product panels
	app.directive('productPanels',function(){
		return{
		  restrict:'E',
		  templateUrl:"product-panels.html",
		  controller: function(){
		    this.tab=1;
		    this.selectTab = function(setTab){
		      this.tab = setTab;
		    };
		    this.isSelected = function(checkTab){
		      return this.tab === checkTab;
		    };
		  },
		  controllerAs:'panel'
		};
	});
	//MOVED GALLERY CONTROLLER INTO GALLERY DIRECTIVE
	/*app.controller('GalleryController', function(){
	this.current = 0;
	this.setCurrent = function(value){
	  this.current = value || 0;
	};
	});*/
	app.directive('productGallery',function(){
		return {
		  restrict: 'E',
		  templateUrl: "product-gallery.html",
		  controller: function(){
		    this.current = 0;
		    this.setCurrent = function(value){
		      this.current = value || 0;
		    };
		  },
		  controllerAs:'gallery'
		};
	});
	app.directive('productsTitle',function(){
	    return{
	      restrict: 'E',
	      templateUrl:"products-title.html"
	    };
	});
  	app.directive('productSpecs',function(){
		return{
		  restrict:'E',
		  templateUrl:"product-specs.html"
		};
  	});

})();