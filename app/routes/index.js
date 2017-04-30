import Ember from 'ember';

export default Ember.Route.extend({
	model:function(){
		var url = 'https://api.themoviedb.org/3/discover/movie?api_key=e29347d54739a5cb876eb792701d0e08';

		var data = Ember.$.getJSON(url,{
				with_crew:1032,
				sort_by:'popularity.desc',
				page: 1
			}).done(function(d){
				//add points to the data returned
				d['totalPoints'] = 0;
				return d;
			});

			return data;

	}
});
