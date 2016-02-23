import Ember from 'ember';

export default Ember.Component.extend({
	tagName:'li',
	classNames:['voteGuessButton'],
	actions:{
		guess:function(isTrue){
			if(isTrue){
				this.set('correct', true);
			}else{
				this.set('wrong', true);
			}
			this.get('onCheck')(this.get('correct'));
		}
	}
});
