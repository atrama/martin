import Ember from 'ember';

export default Ember.Component.extend({
	actions:{
		guess:function(isTrue){
			if(isTrue){
				this.set('correct', true)
			}else{
				this.set('wrong', true)
			}			
		}
	}
});
