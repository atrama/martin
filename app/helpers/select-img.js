import Ember from 'ember';

export function selectImg(film, size/*, hash*/) {
	if(film[1] === 'small'){
		return film[0].poster_path;
	}else{
		return film[0].backdrop_path;
	}
}

export default Ember.Helper.helper(selectImg);
