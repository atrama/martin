import Ember from 'ember';

export function selectImg(film, size/*, hash*/) {
//	var windowWidth = window.innerWidth;
	if(film[1] === 'small'){
//		debugger;
		return film[0].poster_path;
	}else{
//		debugger;
		return film[0].backdrop_path;
	}
//  return params;
}

export default Ember.Helper.helper(selectImg);
