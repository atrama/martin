import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'ul',
	randomizeVotes:function(){
		var trueVote = this.vote;
		
		var votes = [
			{
				vote:this.vote,
				isTrue:true
			},
			{
				vote:null,
				isTrue:false
			},
			{
				vote:null,
				isTrue:false
			},
			{
				vote:null,
				isTrue:false
			}
		];
		
		function randomizeVotes(arr){
			var randomVotes = [],
				//random numbers within a range of the vote average
				max = trueVote + 3,
				min = trueVote - 3;
				
			function makeRandom (tempScore){
				var score;
								
				while (!score || score >= 10.0 || score === trueVote){
					score = Math.random() * (max - min) + min;
					//round score to #.##
					score = score.toFixed(1);
				}
						
				return score;
			}
			
			//move to top
			var counter = 4;
			
			do {
				let tempScore = {
					vote:null,
					isTrue: counter === 4 ? true : false
				};

				if(!tempScore.isTrue){
					tempScore.vote = makeRandom(tempScore);
					randomVotes.push(tempScore);
				}else{
					tempScore.vote = trueVote.toFixed(1);
					randomVotes.push(tempScore);
				}

				counter--;
				
			} while (counter > 0);
			
/*THIS WORKS
			var counter = votes.length;

			votes.map(function(vote){
				counter--;

				var tempScore = {
					vote:null,
					isTrue: vote.isTrue
				};

				if(!tempScore.isTrue){
					tempScore.vote = makeRandom(tempScore);
					randomVotes.push(tempScore);
				}else{
					tempScore.vote = vote.vote;
					randomVotes.push(tempScore);
				}
//				randomVotes.push(tempScore);
			});	*/

					return randomVotes;
		}
		
		var options = randomizeVotes(votes);
/*		options = [{
			'isTrue':true,
			'vote':99
		},
		{
			'isTrue':false,
			'vote':909
		}]
		function returnOut(){
			return options;
		}*/

		var shuffle = function (o) {
			for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
			return o;
		};
		options = shuffle(options);
		return options;
		
	}.property()
});
