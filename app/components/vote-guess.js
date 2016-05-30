import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'ul',
	classNames:['voteGuess'],
	classNameBindings:['disableAll:disableAll'],
	disableAll:false,
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
			//arr to hold all the score options
			var randomVotes = [],
				//random numbers within a range of the vote average
				max = trueVote + 3,
				min = trueVote - 3,
				counter = arr.length;

			function makeRandom (){
				var score;

				//keep score eq/lt 10 and not eq to correct score
				while (!score || score >= 10.0 || (score.toFixed(1) === trueVote.toFixed(1))){
					score = Math.random() * (max - min) + min;
					//round score to #.##. divide by 1 to keep as a number not string
					score = score.toFixed(1) / 1;
				}
				return score;
			}


			do {
				//create a temp obj for each. we know that the first item is true
				let tempScore = {
					vote:null,
					isTrue: counter === arr.length ? true : false
				};

				if(!tempScore.isTrue){
					//create a fake score if not the the correct score
					tempScore.vote = makeRandom();
					randomVotes.push(tempScore);
				}else{
					//correct one
					tempScore.vote = trueVote.toFixed(1);
					randomVotes.push(tempScore);
				}

				counter--;

			} while (counter > 0);
					return randomVotes;
				}

		var options = randomizeVotes(votes);

		var shuffle = function (o) {
			for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x){}
			return o;
		};
		//shuffle vote options so true isnt always first
		options = shuffle(options);
		return options;
	}.property(),
	numGuessLeft: 4,
	pointsBase: 25,
	points: 0,
	disable:false,
	actions:{
		calcPoints:function(isRight){
			var score = this.get('numGuessLeft') * this.get('pointsBase');

			if(isRight === true){
				this.set('points', score);
				//disable from more clicks
				this.set('disable', true);
				this.set('disableAll', true);
			}

			this.numGuessLeft --;
			this.get('onAdd')(this.get('points'));
		}
	}
});
