import Ember from 'ember';
import ResizeAware from 'ember-resize/mixins/resize-aware';

export default Ember.Component.extend({
	classNames:['poster'],
	windowWidth:window.innerWidth,
	windowSize:null,
	windowSize: function(){
			var comp = this,
			imgPath;

			
		function setWidth(){
			var windowWidth = window.innerWidth,
				size;
			if(windowWidth < 410){
				size = 'small';
			}else{
				size = 'large';
			}
			
			setProps(size);
		}
		setWidth();

		var temp = this.temp;
		var temp2 = this.film.temp;

		function setProps(size){

			if(size === 'small'){
				imgPath = comp.film.imgPath = comp.film.backdrop_path;
			}else{
		temp = false;
		temp2 = false;
				imgPath = comp.film.imgPath = comp.film.poster_path;
			}
	
			comp.setProperties({
				imgPath: imgPath,
			});
		}

		return imgPath;

	},//.property(),
	setWindowSize : Ember.computed('windowWidth', function(){
		let size = this.windowWidth > 450 ? 'large' : 'small'; 
		this.set('windowSize', size);
		return size;
	}),
	imgUrl : Ember.computed('windowSize', function(){
		let url = (this.windowSize==='small') ? this.film.backdrop_path : this.film.poster_path
		return url;
	}),
	init:function(){
		this._super();
		var comp = this;
		var test2 = this.film;
		comp.temp = 500;
//		test2.temp = 501;
//		this.temp = true;
//		this.film.temp = true;
	
	    Ember.observer('temp', function() {
		    debugger;
	    });

	    this.get('resizeService').on('debouncedDidResize', event => {
			comp.set('temp',window.innerWidth);
			comp.set('windowWidth',window.innerWidth);
//		test2.set('temp',3501);
			console.log(`width: ${window.innerWidth}, height: ${window.innerHeight}`);
		});
	}
});
