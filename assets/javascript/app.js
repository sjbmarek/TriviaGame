

//define object
var Trivia = {

	questionList: [
	"The team throwing the last rock has the:",
	"What country originated curling?",
	"In Olympic competition, how many ends are played:",
	"The entire scoring area on the ice is called the:",
	"The curling ice surface is:",
	"Which curling club is not in Twin Cities?",
	"The player calling the shots is the:",
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
	 	{"list": ["Draw", "Raise", "Tick", "Takeout", "Flyer"]},
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

				("<input type='radio' id='radio" + i +"' name='qnum" + i +"' value='"+j+"'>"

				 + "&nbsp" + this.ansList[i].list[j] + "&nbsp&nbsp&nbsp&nbsp");
			};

	
    		$(".question").append("<hr>");
  		};

  		$(".question").append("<button type='button' class='btn finish btn-secondary btn-lg'>Done</button>");

	},
}

var i = 0;
var j = 0;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var done = false;

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
    if (counter === 0 && !done) {
        alert('Sorry, out of time.');
        $(".timereport").empty();
        clearInterval(this);
        done=true;
        finish();
    }
    if (done){
    	 $(".timereport").empty();
        clearInterval(this);
    }
    // console.log ("time is: " + counter);
  }, 1000);
}

function report(){
	$(".timereport").empty();
	$(".question").empty();
	$(".startbox").empty();
	$(".startClock").empty();
	$(".results").append("<br><br><br><br><strong>RESULTS</strong><br><br>");
	$(".results").append("Correct Answers: " + correct +"<br>");
	$(".results").append("Incorrect Answers: " + incorrect+"<br>");
	$(".results").append("Unanswered: " + unanswered+"<br>");
	if (correct===9){
		$(".results").append("<br><strong>YAY! You are a curling expert.</strong>");
	};
	if (incorrect>4 || unanswered>4){
		$(".results").append("<br><strong>Study up on the sport of curling.</strong>");
	};
	$(".results").append("<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>");
}


function finish(){
		if (done){

		for (var i = 0; i < Trivia.questionList.length; i++){
				// capture the value of the clicked radio button
				var selectedAnswer = $("input[name='qnum" + i + "']:checked").val();
				selectedAnswer=parseInt(selectedAnswer);
					console.log("selected: " + selectedAnswer);
					console.log("real answer: " + Trivia.answers[i]);
					// sorts the answers into result catagories
					if (selectedAnswer>=0){
						if (selectedAnswer===Trivia.answers[i]){
							correct++;
							console.log("correct: " + correct);		
						} else {
							incorrect++;
							console.log("wrong: " + incorrect);
						};
					} else {
							unanswered++;
							console.log("not answered: " + unanswered);
					};	
		}; //done with question for loop'radio" + i +"'

		report();
	};

}


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

// listen for done click
$(".question").on("click", ".finish",(function(){
	done=true;
	console.log("done: " + done)

	finish();

}));