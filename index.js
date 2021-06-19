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
            name: "3",
            title: "Which of the following audios do you prefer?",
            isRequired: true,
            colCount: 4,
            choices: [
                "3.A",
                "3.B",
                "3.C",
                "None"
            ]
        }, {
            type: "html",
            name: "info",
            html: "<div class='container'><div class='item'>3.A <audio controls><source src='assets/01A.wav' type='audio/ogg'></audio></div><div class='item'>3.B <audio controls><source src='assets/01B.wav' type='audio/ogg'></audio></div><div class='item'>3.C <audio controls><source src='assets/01C.wav' type='audio/ogg'></audio></div></div>"
        }, {
            type: "radiogroup",
            name: "4",
            title: "Which of the following audios do you prefer?",
            isRequired: true,
            colCount: 4,
            choices: [
                "4.A",
                "4.B",
                "4.C",
                "None"
            ]
        }, {
            type: "html",
            name: "info",
            html: "<div class='container'><div class='item'>4.A <audio controls><source src='assets/02A.wav' type='audio/ogg'></audio></div><div class='item'>4.B <audio controls><source src='assets/02B.wav' type='audio/ogg'></audio></div><div class='item'>4.C <audio controls><source src='assets/02C.wav' type='audio/ogg'></audio></div></div>"
        }, {
            type: "radiogroup",
            name: "5",
            title: "Which of the following audios do you prefer?",
            isRequired: true,
            colCount: 4,
            choices: [
                "5.A",
                "5.B",
                "5.C",
                "None"
            ]
        }, {
            type: "html",
            name: "info",
            html: "<div class='container'><div class='item'>5.A <audio controls><source src='assets/03A.wav' type='audio/ogg'></audio></div><div class='item'>5.B <audio controls><source src='assets/03B.wav' type='audio/ogg'></audio></div><div class='item'>5.C <audio controls><source src='assets/03C.wav' type='audio/ogg'></audio></div></div>"
        }, {
            type: "radiogroup",
            name: "6",
            title: "Which of the following audios do you prefer?",
            isRequired: true,
            colCount: 4,
            choices: [
                "6.A",
                "6.B",
                "6.C",
                "None"
            ]
        }, {
            type: "html",
            name: "info",
            html: "<div class='container'><div class='item'>6.A <audio controls><source src='assets/04A.wav' type='audio/ogg'></audio></div><div class='item'>6.B <audio controls><source src='assets/04B.wav' type='audio/ogg'></audio></div><div class='item'>6.C <audio controls><source src='assets/04C.wav' type='audio/ogg'></audio></div></div>"
        }, {
            type: "radiogroup",
            name: "7",
            title: "Which of the following audios do you prefer?",
            isRequired: true,
            colCount: 4,
            choices: [
                "7.A",
                "7.B",
                "7.C",
                "None"
            ]
        }, {
            type: "html",
            name: "info",
            html: "<div class='container'><div class='item'>7.A <audio controls><source src='assets/05A.wav' type='audio/ogg'></audio></div><div class='item'>7.B <audio controls><source src='assets/05B.wav' type='audio/ogg'></audio></div><div class='item'>7.C <audio controls><source src='assets/05C.wav' type='audio/ogg'></audio></div></div>"
        }
    ]
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (sender) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
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