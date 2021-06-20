Survey
    .StylesManager
    .applyTheme("default");

var json = {
	title: "RaGaVeRa TTS Evaluation",
	description: "We seek your support for comparing 3 different TTS engines. \n Below you will find five sets of 3 audio clips each labeled A, B & C.  These audio clips are synthesized using three distinct TTS technologies.  We request you to kindly evaluate the relative quality of the synthesized speech outputs.  Please listen to the audio clips and choose the one you prefer.",
    questions: [
        {
            name: "name",
            type: "text",
            title: "Please enter your name:",
            placeHolder: "Dr. Shiva Kumar H R",
            isRequired: true,
            autoComplete: "name"
        }, {
            name: "email",
            type: "text",
            inputType: "email",
            title: "Your e-mail:",
            placeHolder: "shivahr@ragavera.com",
            isRequired: true,
            autoComplete: "email",
            validators: [
                {
                    type: "email"
                }
            ]
        }, {
            type: "radiogroup",
            name: "U1",
            title: "Which of the following audios do you prefer?",
            isRequired: true,
            colCount: 4,
            choices: [
                "A",
                "B",
                "C",
                "None"
            ]
        }, {
            type: "html",
            name: "info",
            html: "<div class='container'><div class='item'>A <audio controls><source src='assets/01A.wav' type='audio/mpeg'></audio></div><div class='item'>B <audio controls><source src='assets/01B.wav' type='audio/mpeg'></audio></div><div class='item'>C <audio controls><source src='assets/01C.wav' type='audio/mpeg'></audio></div></div>"
        }, {
            type: "radiogroup",
            name: "U2",
            title: "Which of the following audios do you prefer?",
            isRequired: true,
            colCount: 4,
            choices: [
                "A",
                "B",
                "C",
                "None"
            ]
        }, {
            type: "html",
            name: "info",
            html: "<div class='container'><div class='item'>A <audio controls><source src='assets/02A.wav' type='audio/mpeg'></audio></div><div class='item'>B <audio controls><source src='assets/02B.wav' type='audio/mpeg'></audio></div><div class='item'>C <audio controls><source src='assets/02C.wav' type='audio/mpeg'></audio></div></div>"
        }, {
            type: "radiogroup",
            name: "U3",
            title: "Which of the following audios do you prefer?",
            isRequired: true,
            colCount: 4,
            choices: [
                "A",
                "B",
                "C",
                "None"
            ]
        }, {
            type: "html",
            name: "info",
            html: "<div class='container'><div class='item'>A <audio controls><source src='assets/03A.wav' type='audio/mpeg'></audio></div><div class='item'>B <audio controls><source src='assets/03B.wav' type='audio/mpeg'></audio></div><div class='item'>C <audio controls><source src='assets/03C.wav' type='audio/mpeg'></audio></div></div>"
        }, {
            type: "radiogroup",
            name: "U4",
            title: "Which of the following audios do you prefer?",
            isRequired: true,
            colCount: 4,
            choices: [
                "A",
                "B",
                "C",
                "None"
            ]
        }, {
            type: "html",
            name: "info",
            html: "<div class='container'><div class='item'>A <audio controls><source src='assets/04A.wav' type='audio/mpeg'></audio></div><div class='item'>B <audio controls><source src='assets/04B.wav' type='audio/mpeg'></audio></div><div class='item'>C <audio controls><source src='assets/04C.wav' type='audio/mpeg'></audio></div></div>"
        }, {
            type: "radiogroup",
            name: "U5",
            title: "Which of the following audios do you prefer?",
            isRequired: true,
            colCount: 4,
            choices: [
                "A",
                "B",
                "C",
                "None"
            ]
        }, {
            type: "html",
            name: "info",
            html: "<div class='container'><div class='item'>A <audio controls><source src='assets/05A.wav' type='audio/mpeg'></audio></div><div class='item'>B <audio controls><source src='assets/05B.wav' type='audio/mpeg'></audio></div><div class='item'>C <audio controls><source src='assets/05C.wav' type='audio/mpeg'></audio></div></div>"
        }
    ]
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (sender) {
	  $.ajax({
		url: "/api/tts-survey",
		type: "POST",
		data: JSON.stringify(sender.data),
		contentType: "application/json; charset=utf-8",
		success : function(result) {
		  document.querySelector('#surveyResult').textContent = "Successfully submitted survey responses";
		},
		error: function(xhr, resp, text) {
		  console.log(xhr, resp, text);
		  document.querySelector('#surveyResult').textContent = "Error submitting survey responses:\n" +
		    xhr.status + ' ' + xhr.statusText + ' ' + xhr.responseText;
		}
	  });

    });

function onAngularComponentInit() {
    Survey
        .SurveyNG
        .render("surveyElement", {model: survey});
}
var HelloApp = ng
    .core
    .Component({selector: 'ng-app', template: '<div id="surveyContainer" class="survey-container contentcontainer codecontainer"><div id="surveyElement"></div></div> '})
    .Class({
        constructor: function () {},
        ngOnInit: function () {
            onAngularComponentInit();
        }
    });
document.addEventListener('DOMContentLoaded', function () {
    ng
        .platformBrowserDynamic
        .bootstrap(HelloApp);
});
