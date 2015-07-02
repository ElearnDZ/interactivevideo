window.addEventListener('load', init, false);
var canvas, stage, exportRoot;
var vidCon, vid, timer;
var currentQue = 0;

var QuesArr = [{
    time: 5,
    type: 'choose',
    txt: 'عاصمة مصر هى',
    ch0: 'القاهرة',
    ch1: '',
    ch2: '',
    correct: 'mc_0'
}];

function init() {
    canvas = document.getElementById("canvas");
    vid = document.getElementById("vid")
    exportRoot = new lib.intVideo();

    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);

    vidCon = new createjs.Container();
    stage.addChild(vidCon);

    var content = new createjs.DOMElement("vidcon");
    vidCon.addChild(content);

     exportRoot.visibility = false;
    stage.update();

    createjs.Ticker.setFPS(31);
    createjs.Ticker.addEventListener("tick", stage);

   
    vid.onplay = function() {
        mytimer = setInterval(function() {
            console.log("playin at" + Math.round(vid.currentTime));
            if (Math.round(vid.currentTime) == QuesArr[currentQue].time) {

                createQues();

            }
        }, 1000);
        console.log("played");
    }
    vid.onpause = function() {
        clearInterval(mytimer);
    };
}

function createQues() {
    vid.pause();
    vidCon.alpha = 0;
    exportRoot.alpha = 1;
    switch (QuesArr[currentQue].type) {
        case 'choose':
            exportRoot.gotoAndStop(1);
            break;
    }
    console.log("stoped");
}