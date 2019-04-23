// $("#empty-three-d").one("mouseover", function() {
//   $("#thumbnail-flex-3d").addClass('permahover');
//   $("#thumbnail-flex-2-3d").addClass('permahover');
// });
// $("#empty-gd").one("mouseover", function() {
//   $("#thumbnail-flex-gd").addClass('permahover');
//   $("#thumbnail-flex-2-gd").addClass('permahover');
// });
// $("#empty-mg").one("mouseover", function() {
//   $(".thumbnail-flex").addClass('permahover');
//   $(".thumbnail-flex-2").addClass('permahover');
// });


//p5
var canvas;
let rectX = 0;
let rectY = 0;
let patternNum = 1;
let sqSize = 10;

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);

}
function timeIt(){
    rectX = int(sqSize*random(0, windowWidth/sqSize));
    rectY = int(sqSize*random(0, windowHeight/sqSize));
}

function pattern1(){
    rect(rectX, rectY, sqSize, sqSize);
    rect(rectX + sqSize, rectY, sqSize, sqSize);
    rect(rectX + sqSize, rectY + sqSize, sqSize, sqSize);
}
function pattern2(){
     rect(rectX, rectY, sqSize, sqSize);
    rect(rectX + sqSize, rectY, sqSize, sqSize);

}
function pattern3(){
   rect(rectX, rectY, sqSize, sqSize);
    rect(rectX + sqSize, rectY + sqSize, sqSize, sqSize);
    rect(rectX + sqSize*2, rectY + sqSize*2, sqSize, sqSize);
}
function pattern4(){
    rect(rectX, rectY, sqSize, sqSize);
    rect(rectX, rectY + sqSize, sqSize, sqSize);
    rect(rectX, rectY + sqSize, sqSize, sqSize);
    rect(rectX, rectY + sqSize, sqSize, sqSize);
}
function pattern5(){
    rect(rectX, rectY, sqSize, sqSize);
    rect(rectX + sqSize, rectY, sqSize, sqSize);
    rect(rectX + sqSize, rectY + sqSize, sqSize*2, sqSize);
    rect(rectX, rectY + sqSize, sqSize*3, sqSize);
}

function draw() {
    stroke(255, 216, 230);
    strokeWeight(2);
    //draw grid
    // for (var x = 30; x <= windowWidth; x += 30){
    //     line(x, 0, x, windowHeight);
    // }
    // for (var y = 30; y <= windowHeight; y += 30){
    //     line(0, y, windowWidth, y);
    // }
    noStroke();
     // fill(255, 216, 230);
    fill('cornFlowerBlue');

    if (frameCount % 30 == 0) {
        timeIt();

        patternNum = int(random(1,6));
        console.log(patternNum);
        if(patternNum == 1){
            pattern1();
        }else if (patternNum == 2){
            pattern2();
        }else if (patternNum == 3){
            pattern3();
        }else if (patternNum == 4){
            pattern4();
        }else if (patternNum == 5){
            pattern5();
        }
    }




     translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

     $('.bg').css({
       '-webit-transform': translate,
       '-moz-transform': translate,
       'transform': translate
     });

     window.requestAnimationFrame(moveBackground);
    }

    $(window).on('mousemove click', function(e) {

     var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
     var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
     lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
     // lFollowY = (10 * lMouseY) / 100;

    });
    if ( $(window).width() > 1020) {
    moveBackground();
    }
