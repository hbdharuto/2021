
function harutoEvolve () {

if (localStorage.getItem("hbdHawwu2021_arrCorrectAnswer") === null) {
  arrCorrectAnswer = [];
  localStorage.setItem("hbdHawwu2021_arrCorrectAnswer", JSON.stringify(arrCorrectAnswer)); 
}

else {
  arrCorrectAnswer = JSON.parse(localStorage.getItem("hbdHawwu2021_arrCorrectAnswer"));
}

	if ((localStorage.getItem("hbdHawwu2021_curHawwu") == "2018") && (arrCorrectAnswer.length == 20) ) {


			//// evolving scene;
			$(".biggest_window ").fadeIn();
			$(".haruto_notification").css('background-image','url(https://raw.githubusercontent.com/hbdharuto/2021/gh-pages/images/2020haruto_correct.PNG)');


			localStorage.setItem("hbdHawwu2021_curHawwu", 2020);

			$(".haruto_normal").removeClass("selected");
			$(".haruto_incorrect").removeClass("selected");
			$(".haruto_correct").removeClass("selected")

			$(".haruto_2020.haruto_normal").addClass("selected");



			if (localStorage.getItem("hbdHawwu2021_appLanguage") == "0") {
					// english message

					$(".haruto_comment").html('<span class="t_en">It seems that you know quite a lot about me!! Well then, shall we answer more questions?</span>');
			}

			else {
					// japanese message

					$(".haruto_comment").html('<span class="t_jp">俺のこと沢山知ってくれてるんですね。ありがとうございます。<br><br>もっと答えて久慈川マスターを目指しませんか？</span>');
			}


	}

	else if ((localStorage.getItem("hbdHawwu2021_curHawwu") == "2020") && (arrCorrectAnswer.length == 40) ) {
			//// evolving scene;
			$(".biggest_window ").fadeIn();
			$(".haruto_notification").css('background-image','url(https://raw.githubusercontent.com/hbdharuto/2021/gh-pages/images/2021haruto_correct.PNG)');

			localStorage.setItem("hbdHawwu2021_curHawwu", 2021);

			$(".haruto_normal").removeClass("selected");
			$(".haruto_incorrect").removeClass("selected");
			$(".haruto_correct").removeClass("selected")

			$(".haruto_2021.haruto_normal").addClass("selected");
			
			if (localStorage.getItem("hbdHawwu2021_appLanguage") == "0") {
					// english message

					$(".haruto_comment").html('<span class="t_en">I can feel your love!!! Now I’m growing even stronger!!!!</span>');
			}

			else {
					// japanese message

					$(".haruto_comment").html('<span class="t_jp">あなたの愛を感じます……！久慈川、成長中です。にょきにょき久慈川です</span>');
			}
			
	}


}


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

	//// evolving scene;
			$(".biggest_window ").fadeIn();

			if (arrCorrectAnswer.length < 20) {

					$(".haruto_notification").css('background-image','url(https://raw.githubusercontent.com/hbdharuto/2021/gh-pages/images/2018haruto_normal.PNG)');

					if (localStorage.getItem("hbdHawwu2021_appLanguage") == "0") {
						// english message

						$(".haruto_comment").html('<span class="t_en">It’s okay, you can do it again! You can click for hints from the others too if it’s too hard!!!</span>');
					}

					else {
						// japanese message

						$(".haruto_comment").html('<span class="t_jp">お疲れ様です。もう一回やってみませんか？<br><br>クイズが難しい時は、アイコンクリックでヒントを出すこともできるらしいですよ。ハイテクですね</span>');
					}
			}

			else if ((arrCorrectAnswer.length > 19) && (arrCorrectAnswer.length < 40)){
					$(".haruto_notification").css('background-image','url(https://raw.githubusercontent.com/hbdharuto/2021/gh-pages/images/2020haruto_normal.PNG)');

					if (localStorage.getItem("hbdHawwu2021_appLanguage") == "0") {
						// english message

						$(".haruto_comment").html('<span class="t_en">Not bad, but I know you can do more!!! I know you want to know about me!!!</span>');
					}

					else {
						// japanese message

						$(".haruto_comment").html('<span class="t_jp">悪くないです……が、あなたならきっともっと高みを目指せます！<br><br>あなたが俺のことを知りたいと思ってくれている気持ち、伝わっていますよ。さあどうぞ！！！</span>');
					}
			}

			else if ((arrCorrectAnswer.length > 39) && (arrCorrectAnswer.length < 50)){
					$(".haruto_notification").css('background-image','url(https://raw.githubusercontent.com/hbdharuto/2021/gh-pages/images/2021haruto_normal.PNG)');

					if (localStorage.getItem("hbdHawwu2021_appLanguage") == "0") {
						// english message

						$(".haruto_comment").html('<span class="t_en">Just a little bit more!!! Don’t you want to know all the answers?!</span>');
					}

					else {
						// japanese message

						$(".haruto_comment").html('<span class="t_jp">凄い、惜しいな……あと少しです。もっともっと、久慈川悠人の全てを知りたいと思いませんか？</span>');
					}
			}
			else if (arrCorrectAnswer.length == 50) {
					$(".haruto_notification").css('background-image','url(https://raw.githubusercontent.com/hbdharuto/2021/gh-pages/images/2021haruto_correct.PNG)');

					if (localStorage.getItem("hbdHawwu2021_appLanguage") == "0") {
						// english message

						$(".haruto_comment").html('<span class="t_en">Whoa, you really did it!!! Thank you so much for taking your time to know about me. I will keep growing to become an even better version of myself, more and more!!!</span>');
					}

					else {
						// japanese message

						$(".haruto_comment").html('<span class="t_jp">おめでとうございます！！凄いですね……！<br><br> 俺のことを知ろうと時間を割いてくださって、本当にありがとうございます。もっともっと、高みの久慈川、スーパー久慈川を目指して成長していきますので、これからもよろしくお願いしますね！</span>');
					}
			}

			

			


	console.log("You made " + arrCorrectAnswer.length + " correct answer out of " + arrAnswered.length + " questions.");

	$('.window_holder').fadeOut();
  $("#main_welcome").fadeIn();

	newGame();

}


function resetHint(){
	$("#hint_desc_container").html('<div class="hint_desc_paragraph"></div>');
	$(".hint_desc_paragraph").html("...");
 	$(".the_big_catto").removeClass("selected");
 	$("#big_5").addClass("selected");
 	$(".catto_button").removeClass("selected");
}

function gotoNewQuestion() {

	resetHint();
	harutoEvolve ();

	if (parseInt(localStorage.getItem("hbdHawwu2021_curQuestionProg")) < arrQuestion.length) {


		

		while (arrAnswered.includes(newQuestionID)) {
			 newQuestionID =  Math.floor(Math.random() * arrQuestion.length);
		}

		localStorage.setItem("hbdHawwu2021_curQuestionProg", (parseInt(localStorage.getItem("hbdHawwu2021_curQuestionProg")) + 1));
		
		$("#question_current").html(localStorage.getItem("hbdHawwu2021_curQuestionProg"));
		loadQuestion(newQuestionID);

		}

	else {
		reviewResult();
	}

}




function loadQuestion(questionID) {

	if (localStorage.getItem("hbdHawwu2021_appLanguage") == "0") {
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
			localStorage.setItem("hbdHawwu2021_arrCorrectAnswer", JSON.stringify(arrCorrectAnswer));

			arrListRightWrong[arrListRightWrong.length] = 1;
			localStorage.setItem("hbdHawwu2021_listRightWrong", JSON.stringify(arrListRightWrong));

			$(this).addClass("selected");

			$(".haruto_normal").removeClass("selected");
			$(".haruto_incorrect").removeClass("selected");
			$(".haruto_correct").removeClass("selected");
			$(".haruto_" + localStorage.getItem("hbdHawwu2021_curHawwu") + ".haruto_correct").addClass("selected");

			$("#question_" + (parseInt(localStorage.getItem("hbdHawwu2021_curQuestionProg")) - 1)).addClass("correct");

		}

		else {
			// wrong answer
			console.log("your answer is wrong!");
			$(this).removeClass("selected");
			$(this).addClass("wrong");

			arrListRightWrong[arrListRightWrong.length] = 0;
			localStorage.setItem("hbdHawwu2021_listRightWrong", JSON.stringify(arrListRightWrong));
			
			$(".haruto_normal").removeClass("selected");
			$(".haruto_incorrect").removeClass("selected");
			$(".haruto_correct").removeClass("selected");
			$(".haruto_" + localStorage.getItem("hbdHawwu2021_curHawwu") + ".haruto_incorrect").addClass("selected");
			$("#question_" + (parseInt(localStorage.getItem("hbdHawwu2021_curQuestionProg")) - 1)).addClass("incorrect");
		}

		arrAnswered[arrAnswered.length] = questionID;
		localStorage.setItem("hbdHawwu2021_arrAnswered", JSON.stringify(arrAnswered));

		$(this).effect( "shake", { direction: "up", times: 3, distance: 6}, 1000 );

		setTimeout(function() { gotoNewQuestion(); }, 1000);

	});

}

$("#question_current").html(localStorage.getItem("hbdHawwu2021_curQuestionProg"));
$("#question_maksimum").html('/' + arrQuestion.length);



function continueGame() {
	newQuestionID = Math.floor(Math.random() * arrQuestion.length);

while (arrAnswered.includes(newQuestionID)) {
			 newQuestionID =  Math.floor(Math.random() * arrQuestion.length);
		}

loadQuestion(newQuestionID);

$(".haruto_" + localStorage.getItem("hbdHawwu2021_curHawwu") + ".haruto_normal").addClass("selected");
}

function newGame() {
	localStorage.removeItem("hbdHawwu2021_arrAnswered");
	arrAnswered = [];

	localStorage.removeItem("hbdHawwu2021_arrCorrectAnswer");
	arrCorrectAnswer = [];

	localStorage.removeItem("hbdHawwu2021_listRightWrong");
	arrListRightWrong = [];

	localStorage.setItem("hbdHawwu2021_curQuestionProg", 1); 
	localStorage.setItem("hbdHawwu2021_curHawwu", 2018);

newQuestionID = Math.floor(Math.random() * arrQuestion.length);

while (arrAnswered.includes(newQuestionID)) {
			 newQuestionID =  Math.floor(Math.random() * arrQuestion.length);
		}

loadQuestion(newQuestionID);

$(".haruto_normal").removeClass("selected");
$(".haruto_correct").removeClass("selected");
$(".haruto_incorrect").removeClass("selected");

$(".haruto_2018.haruto_normal").addClass("selected");

$("#question_current").html(1);

$("#question_maksimum").html('/' + arrQuestion.length);

$(".question_bullet").removeClass("correct");
	
$(".question_bullet").removeClass("incorrect");
}

continueGame();



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
	 
	 if (localStorage.getItem("hbdHawwu2021_appLanguage") == "0") {
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




for (var j = 0; j < arrListRightWrong.length; j++) {
  if (arrListRightWrong[j] == 0) {
      // shade black
      $("#question_" + j).addClass("incorrect");
  }

  else {
      // shade red
      $("#question_" + j).addClass("correct");
  }

}


$("#menu_continue").click(function() {
  $('.window_holder').fadeOut();
  $("#main_game").fadeIn();
  continueGame();
});

$("#menu_newgame").click(function() {
  $('.window_holder').fadeOut();
  $("#main_game").fadeIn();
  newGame();
});

$("#menu_langsel").click(function() {
  $('.window_holder').fadeOut();
  $("#main_language").fadeIn();
});

$("#menu_credits").click(function() {
  $('.window_holder').fadeOut();
  $("#main_credits").fadeIn();
});

$(".backto_main").click(function() {
  $('.window_holder').fadeOut();
  $("#main_welcome").fadeIn();
});

$(".open_lang").click(function() {
  $('.window_holder').fadeOut();
  $("#main_language").fadeIn();
});

$("#menu_sel_en").click(function() {
 localStorage.setItem("hbdHawwu2021_appLanguage", 0); 
 $('.window_holder').fadeOut();
  $("#main_welcome").fadeIn();

  continueGame();
});

$("#menu_sel_jp").click(function() {
  localStorage.setItem("hbdHawwu2021_appLanguage", 1); 
  $('.window_holder').fadeOut();
  $("#main_welcome").fadeIn();

   continueGame();
});

$(".biggest_window").click(function() {
$(".biggest_window").fadeOut();
});






if ($( window ).height() > $( window ).width()) {

$("html").width($( window ).height());
$("#wrapper").width($( window ).height());
$(".window_holder").width($( window ).height());

$("html").height($( window ).width());
$("#wrapper").height($( window ).width());
$(".window_holder").height($( window ).width());

}