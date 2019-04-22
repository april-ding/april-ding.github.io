//p5
var canvas;
let rectX = 0;
let rectY = 0;
//var time = millis();

function setup(){
    canvas = createCanvas(windowWidth, windowHeight);

}
function timeIt(){
    rectX = 30*random(0, windowWidth/30);
    rectY = 30*random(0, windowHeight/30);
}

function draw() {
    stroke(255, 216, 230);
    strokeWeight(2);
    //draw grid
    for (var x = 30; x <= windowWidth; x += 30){
        line(x, 0, x, windowHeight);
    }
    for (var y = 30; y <= windowHeight; y += 30){
        line(0, y, windowWidth, y);
    }
    noStroke();
    fill(255, 216, 230);

    if (frameCount % 60 == 0) {
        timeIt();
    }
    // rect(rectX, rectY, 30, 30);
    // rect(rectX + 30, rectY, 30, 30);
    // rect(rectX + 30, rectY + 30, 30, 30);




}//end of draw


// var mouseX = event.clientX;
// var mouseY = event.clientY;
/*
window.onMouseMove = function() {
    var mouseX = event.pageX;
    var mouseY = event.pageY;
    var element = document.getElementById('image-hover');
    console.log(mouseX);

    if (mouseX > 0.5*$(window).width()) {
        element.style.opacity = "1";
    }else{
        element.style.opacity = "0";
    }

};
*/
