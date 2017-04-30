import Ember from 'ember';

export default Ember.Component.extend({
	classNames:['poster'],
	year:Ember.computed(function(){
		var d = new Date(this.get('film.release_date'));
		return d.getFullYear();
	}),
	imgUrl : Ember.computed('windowWidth', function(){
		//use a wide image for small screens, poster for big
		let url = (this.get('windowWidth') < 450) ? this.film.backdrop_path : this.film.poster_path;
		return url;
	}),
	didRender:function(){
	//	var comp = this;
		//set initial width so user does not have to resize
		this.set('windowWidth',window.innerWidth);

			//on resize, set window width which is observed above to change the image path dep on size
	    this.get('resizeService').on('debouncedDidResize', () => {
				this.set('windowWidth',window.innerWidth);
		});
	}
});
