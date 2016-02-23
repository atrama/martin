import Ember from 'ember';

export default Ember.Component.extend({
	classNames:['filmComp'],
	actions:{
		addAllPoints:function(additionalPoints){
			let points = this.get('totalPoints');
			points = points + additionalPoints;
			this.set('totalPoints', points);
		}
	}
});
