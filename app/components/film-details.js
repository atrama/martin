import Ember from 'ember';

export default Ember.Component.extend({
  totalPoints: 0,
  actions:{
    addThem:function(additionalPoints){
      let points = this.get('totalPoints');
      points = points + additionalPoints;
      this.set('totalPoints', points);
    }
  }
});
