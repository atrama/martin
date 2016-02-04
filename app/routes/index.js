import Ember from 'ember';

export default Ember.Route.extend({
	model:function(){
	    var url = 'https://api.themoviedb.org/3/discover/movie?api_key=e29347d54739a5cb876eb792701d0e08';
	    
	    return Ember.$.getJSON(url,{
			with_crew:1032,
			sorteby:'release_date.asc',
			page: 1
	    });	

	}
/*	model:function(){
	    var url = 'https://api.themoviedb.org/3/discover/movie?api_key=e29347d54739a5cb876eb792701d0e08',
	    	modData = [],
	    	pageNum = 1;
	    	
	    function combineData(newArr){
			var i = 0;
			while (i <newArr.length){
				modData.push(newArr[i])
				i++;
			}
	    }

	    function dataFetch (pageNum){
		    Ember.$.getJSON(url,{
				with_crew:1032,
				sorteby:'primary_release_date.desc',
				page: pageNum || 1
		    }).then(function(data) {
			    combineData(data.results)
			    console.log(modData);
//		      var newData = modData.concat(data.results);
				if(pageNum){
				  pageNum ++;
				} else{
				  pageNum = 2;
				}
				if(data.page !== data.total_pages){
				  dataFetch(pageNum);
				}else{
					console.log(1);
				  return modData;
				}
		    });	
		    debugger
	    };
	    
	    var getMovies = function (page){
		    Ember.$.getJSON(url,{
				with_crew:1032,
				sort_by:'primary_release_date.desc',
				page: page || 1
		    }).then(function(r){
			    debugger
			    return r;
		    })
	    };
	    
//var promise = new Promise(function(resolve, reject) {
return new Promise(function(resolve, reject) {
		    Ember.$.getJSON(url,{
				with_crew:1032,
				sort_by:'primary_release_date.desc',
				page: pageNum
		    }).then(function(r){
			    pageNum ++;
			    //NEED TO GET NEXT SET OF MOVIES BEFORE CONTINUING
			    getMovies(pageNum);
			    debugger
			    return r;
		    }).then(function(pageNum){
			    pageNum ++;
			    debugger
			    resolve(s)
			    return s;
		    })

  // succeed
//  resolve('value');
  // or reject
//  reject('error');
});

promise.then(function(value) {
  // success
  console.log(value);
  return value;
}, function(value) {
  // failure
  console.log(3);
});
	    
/*	    getMovies().then(function(r){
		    console.log('r', r);
	    });*/
	    
//	    return false;
/*	    var promises = {
		    Ember.$.getJSON(url,{
				with_crew:1032,
				sort_by:'primary_release_date.desc',
				page: 1
		    }).then(function(data) {
			    combineData(data.results);
			    
		    });
	    };*/
	    
/*	    var t = ['a','b','c'];
	    debugger;
	    console.log(t)
	    return dataFetch();
    }/*,
    
    setupController:function(controller, model){
	    console.log('m', model);
    }*/
    
    
/*    init:function(){
//	       var url = 'http://api.themoviedb.org/3/',
	       var url = 'http://api.themoviedb.org/3/',
        mode = 'search/movie?query=',
        input = 'goodfellas',
        movieName = encodeURI(input),
        key = '?api_key=e29347d54739a5cb876eb792701d0e08';
        
	    $.ajax({
			type: 'GET',
//			url:url + 'discover/movie?sort_by=popularity.desc' + key,
//url: 'http://api.themoviedb.org/3/search/tv' + key,
//url:'https://api.themoviedb.org/3/movie/769/credits?api_key=e29347d54739a5cb876eb792701d0e08',
//url:'https://api.themoviedb.org/3/person/1032?api_key=e29347d54739a5cb876eb792701d0e08',
url:'https://api.themoviedb.org/3/discover/movie?api_key=e29347d54739a5cb876eb792701d0e08',
//            url: url + mode + input + key,
//            async: false,
//            jsonpCallback: 'testing',
//            jsonpCallback: 'testing',
data:{
	with_crew:1032,
	sort_by:'primary_release_date.desc'
},
	        contentType: 'application/json',
            dataType: 'jsonp',
            success: function(json) {
//	            console.log(json);
	            for(var i = 0; i<json.results.length; i++){
		            $('body').append('<h2>' + json.results[i].title + '</h2> <img src="https://image.tmdb.org/t/p/w396' + json.results[i].poster_path + '?api_key=e29347d54739a5cb876eb792701d0e08">')
	            }
            },
            error: function(e) {
                console.log(e.message);
            }


/*    url: '//api.github.com/repos/emberjs/ember.js/pulls',
    success: function (modelJson) {
	    debugger;
//        store.createRecord('summoner', modelJson); //or somehing
    }
});
    }*/
});
