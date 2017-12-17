

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




//define function that adds questions,answer list and button to the div
	

	addInfo: function() {
		//this looop adds the questions
		for (var i = 0; i < this.questionList.length; i++) {
    		$(".question").append(this.questionList[i] + "<br>");
    		
    		ansLength=this.ansList[i].list.length;
    		console.log("answer length is " + ansLength);

    		//this loop adds the answers for each question
    		for (var j = 0; j < ansLength; j++) {
				$(".question").append

			//adds the answer list with indexed questions(name) and question(value)

				("<input type='radio' id='radio' name='qnum" + i +"' value='"+j+"'>"

				 + "&nbsp" + this.ansList[i].list[j] + "&nbsp&nbsp&nbsp&nbsp");
			};

	
    		$(".question").append("<hr>");
  		};

  		$(".question").append("<button type='button' class='btn btn-secondary btn-lg'>Done</button>");

	},
}

var i = 0;
var j = 0;


//define function for click to start game and clock

function startTimer(){
   	$(".startClock").empty();
   	$(".startbox").empty();
  	var counter = 31;
  	var internal = setInterval(function() {
    counter--;
    if (counter >= 0) {
      $(".timereport").text("Time remaining: " + counter + " seconds");
    }
    if (counter === 0) {
        alert('Sorry, out of time.');
        clearInterval(this);
    }
    // console.log ("time is: " + counter);
  }, 1000);
}



// imageCrystal = $("<img>");
//     		imageCrystal.addClass("crystalsize");
//     		imageCrystal.attr("src", this.gempic[i]);
//     		imageCrystal.attr("data-crystalvalue", this.value[i]);
//     		$(".crystals").append(imageCrystal);
//   		};









//=================================================
//sets up the question div
$(".startClock").text("Click to Start");
// add curl rock image in this area
$(".startbox").click(function(){

    startTimer();
    Trivia.addInfo();
});

//=================================================




//Listen for click on a single radio button,compare click to correct answer and log





