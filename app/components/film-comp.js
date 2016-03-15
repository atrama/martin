import Ember from 'ember';

export default Ember.Component.extend({
	classNames:['filmComp'],
	complete:false,
  classNameBindings:['complete'],
	actions:{
		addAllPoints:function(additionalPoints){
			let points = this.get('totalPoints');
			const oldPoints = points;
			points = points + additionalPoints;
			this.set('totalPoints', points);
			if(oldPoints !== points){
				this.set('complete', true);
			}
		}
	}
});
