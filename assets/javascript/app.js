

//define object
var Trivia = {

	questionList: [
	"The team throwing the last rock has the:",
	"What country originated curling?",
	"In Olympic competition, how many ends are played:",
	"The entire scoring area on the ice is called the:",
	"The curling ice surface is:",
	"Which curling club is not in Twin Cities?",
	"The player calling the shots from the house is the:",
	"Which is not a curling shot call?",
	"Which player was the vice-skip on the 2014 USA Olympic Team?"
	],
	

	ansList: [
		{"list": ["Driver",  "Force", "Steal", "Hammer", "Shooter"]},
		{"list": ["Sweden", "Norway", "Scotland", "Russia", "Canada"]},
		{"list": [6, 8, 10, 11, 12]},
		{"list": ["Target",  "Bullseye", "House", "Button", "Board"]},
	 	{"list": ["Smooth",  "Pebbled", "Wet", "Wavy", "Frosted"]},
	 	{"list": ["Dakota",  "Chaska",  "Frogtown", "Four Seasons",  "Wauwatosa"]},
	 	{"list": ["Captain", "Skip", "Hop", "Jump", "Coach"]},
	 	{"list": ["Draw", "Raise", "Tick", "Knockout", "Flyer"]},
	 	{"list": ["Isaacson", "Shuster", "Polo", "Landsteiner", "Zezel"]}
	],

	answers:[3,2,2,2,1,4,1,4,0],



//define function that adds questions and answer list to the div
	// addAnsInfo: function(){
	// 	for (var j = 0; j < 6; j++) {
	// 		$(".question").append("<input type='radio' id='radio'>" + "&nbsp" + this.ansList[i].list[j] + "&nbsp&nbsp&nbsp&nbsp");
	// 	};

	// },


	// <input type="radio" id="myRadio">

	addInfo: function() {
		for (var i = 0; i < this.questionList.length; i++) {
    		$(".question").append(this.questionList[i] + "<br>");
    		// Trivia.addAnsInfo();
    		// $(".question").append(this.ansList[i]);
    		ansLength=this.ansList[i].list.length;
    		console.log("answer length is " + ansLength);
    		for (var j = 0; j < ansLength; j++) {
				$(".question").append("<input type='radio' id='radio'>" + "&nbsp" + this.ansList[i].list[j] + "&nbsp&nbsp&nbsp&nbsp");
			};

	
    		$(".question").append("<hr>");
  		};

	},
}

var i = 0;
var j = 0;


Trivia.addInfo();
// Trivia.addAnsInfo();