import Ember from 'ember';
import ResizeAware from 'ember-resize/mixins/resize-aware';

export default Ember.Component.extend({
	classNames:['poster'],
	setWindowSize : Ember.computed('windowWidth', function(){
		//we have width, set a size based on that and let url look for string not specific #.
		//this was size is set in one spot, not many
		let size = this.windowWidth > 450 ? 'large' : 'small';
		this.set('windowSize', size);
		return size;
	}),
	imgUrl : Ember.computed('windowSize', function(){
		//use a wide image for small screens, poster for big
		let url = (this.windowSize==='small') ? this.film.backdrop_path : this.film.poster_path
		return url;
	}),
	init:function(){
		this._super();
		var comp = this;
		//set initial width so user does not have to resize
		comp.set('windowWidth',window.innerWidth);

			//on resize, set window width which is observed above to change the image path dep on size
	    this.get('resizeService').on('debouncedDidResize', event => {
				comp.set('windowWidth',window.innerWidth);
		});
	}
});
