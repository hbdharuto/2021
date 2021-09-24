
for (var i = 0; i < 50; i ++) {

$("#test_progress_bar").append('<div class="question_bullet" id="question_'+i+'"></div>');

}

/*<div class="answer_box">
  <div class="answer_bg"></div>
  <div class="answer_bottom">A</div>
  <div class="answer_centering">test</div>
</div>*/

/// Ini buat loading Questions

function reviewResult() {

	console.log("You made " + arrCorrectAnswer.length + " correct answer out of " + arrAnswered.length + " questions.");
}


function resetHint(){
	$("#hint_desc_container").html('<div class="hint_desc_paragraph"></div>');
	$(".hint_desc_paragraph").html("...");
 	$(".the_big_catto").removeClass("selected");
 	$(".catto_button").removeClass("selected");
}

function gotoNewQuestion() {

	resetHint();


	if (curQuestionProg < arrQuestion.length) {


		

		while (arrAnswered.includes(newQuestionID)) {
			 newQuestionID =  Math.floor(Math.random() * arrQuestion.length);
		}

		curQuestionProg = curQuestionProg + 1;
		$("#question_current").html(curQuestionProg);
		loadQuestion(newQuestionID);

		}

	else {
		reviewResult();
	}

}




function loadQuestion(questionID) {

	if (curLang == 0) {
		// first, add question
	 	$("#question_content").html(arrQuestion[questionID][1]);
	 	// then, add the array of answers

	 	$("#answer_container").html("");

	 	 for (var ans = 0; ans < arrQuestion[questionID][3].length; ans++) {
	 	 	$("#answer_container").append('<div class="answer_box" id="ans_'+ ans +'"><div class="answer_bg"></div>' + arrQuestion[questionID][3][ans] + '</div>');
	 	 }
	}

	else {
		$("#question_content").html(arrQuestion[questionID][2]);

		$("#answer_container").html("");

		for (var ans = 0; ans < arrQuestion[questionID][4].length; ans++) {
	 	 	$("#answer_container").append('<div class="answer_box" id="ans_'+ ans +'"><div class="answer_bg"></div>' + arrQuestion[questionID][4][ans] + '</div>');
	 	 }
	}


	$(".answer_box").click(function() {

		//console.log($(this).attr("id"));

		var thisAnswerID = $(this).attr("id").split("_")[1];


		if (thisAnswerID == arrQuestion[questionID][5]) {
			// correct answer
			console.log("your answer is correct!");
			arrCorrectAnswer[arrCorrectAnswer.length] = questionID;

			$(".haruto_normal").removeClass("selected");
			$(".haruto_incorrect").removeClass("selected");
			$(".haruto_correct").removeClass("selected");
			$(".haruto_" + curHawwu + ".haruto_correct").addClass("selected");

			$("#question_" + (curQuestionProg - 1)).addClass("correct");

		}

		else {
			// wrong answer
			console.log("your answer is wrong!");
			$(".haruto_normal").removeClass("selected");
			$(".haruto_incorrect").removeClass("selected");
			$(".haruto_correct").removeClass("selected");
			$(".haruto_" + curHawwu + ".haruto_incorrect").addClass("selected");
			$("#question_" + (curQuestionProg - 1)).addClass("incorrect");
		}

		arrAnswered[arrAnswered.length] = questionID;

		gotoNewQuestion();

	});

}


$("#question_maksimum").html('/' + arrQuestion.length);

var curQuestionProg = 1;

var newQuestionID = Math.floor(Math.random() * arrQuestion.length);

loadQuestion(newQuestionID);

$(".haruto_" + curHawwu + ".haruto_normal").addClass("selected");



//// Ini buat loading Messages

/*  <div class="hint_desc_buttons">
    <span class="desc_button" id="desc_button_left"><i class="fas fa-caret-left"></i></span>
    <span class="desc_button" id="desc_button_right"><i class="fas fa-caret-right"></i></span>
  </div> */


function loadMessage(messageID) {

	$(".the_big_catto").removeClass("selected");
	 $("#big_"+ arrMessage[messageID][1]).addClass("selected");

	 $(".catto_button").removeClass("selected");
 	 $("#button_"+ arrMessage[messageID][1]).addClass("selected");


 	 $("#hint_desc_container").html('<div class="hint_desc_paragraph"></div>');
	 $("#hint_desc_paragraph").html("...");
	 
	 if (curLang == 0) {
	 	$(".hint_desc_paragraph").html(arrMessage[messageID][2]);
	 }
	 else {
	 	$(".hint_desc_paragraph").html(arrMessage[messageID][3]);
	 }

	 if ((arrMessage[messageID][4] > -1) || (arrMessage[messageID][5] > -1)) {

	 	var descButtons = '<div class="hint_desc_buttons">';

	 	if (arrMessage[messageID][4] > -1) {
	 		descButtons = descButtons + '<span class="desc_button" id="desc_button_left" onclick="loadMessage('+ arrMessage[messageID][4] +')"><i class="fas fa-caret-left"></i></span>';
	 	}

	 	else {
	 		descButtons = descButtons + '<span class="desc_button disabled" id="desc_button_left"><i class="fas fa-caret-left"></i></span>';
	 	}

	 	if (arrMessage[messageID][5] > -1) {
	 		descButtons = descButtons + '  <span class="desc_button" id="desc_button_right" onclick="loadMessage('+ arrMessage[messageID][5] +')"><i class="fas fa-caret-right"></i></span>';
	 	}

	 	else {
	 		descButtons = descButtons + '  <span class="desc_button disabled" id="desc_button_right"><i class="fas fa-caret-right"></i></span>';
	 	}

	 	descButtons = descButtons + '</div>';

	 	$("#hint_desc_container").append(descButtons);

	 }
}


$(".catto_button").click(function() {
 		var clickedCatID = $(this).attr("id").split("_")[1];
 		$(".catto_button").removeClass("selected");
 		$(this).addClass("selected");
 		if (clickedCatID == 2) {
 			var ayumuFirstMessage = arrQuestion[newQuestionID][7];
 			
 			loadMessage(ayumuFirstMessage);			
 		}

 		else { // first trigger member lain
 			var otherFM = arrQuestion[newQuestionID][6];
 			if (clickedCatID == arrMessage[otherFM][1]) {
 				loadMessage(otherFM);
 			}
 			else {
 				$("#hint_desc_container").html('<div class="hint_desc_paragraph"></div>');
 				$(".hint_desc_paragraph").html("...");
 				$(".the_big_catto").removeClass("selected");
	 			$("#big_"+ clickedCatID).addClass("selected");
 			}

 		}
});





