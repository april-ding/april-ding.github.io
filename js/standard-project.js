//p5
var canvas;
let rectX = 0;
let rectY = 0;
let patternNum = 1;
let sqSize = 10;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
}

function timeIt() {
    rectX = int(sqSize * random(0, windowWidth / sqSize));
    rectY = int(sqSize * random(0, windowHeight / sqSize));
}

function pattern1() {
    rect(rectX, rectY, sqSize, sqSize);
    rect(rectX + sqSize, rectY, sqSize, sqSize);
    rect(rectX + sqSize, rectY + sqSize, sqSize, sqSize);
}

function pattern2() {
    rect(rectX, rectY, sqSize, sqSize);
    rect(rectX + sqSize, rectY, sqSize, sqSize);

}

function pattern3() {
    rect(rectX, rectY, sqSize, sqSize);
    rect(rectX + sqSize, rectY + sqSize, sqSize, sqSize);
    rect(rectX + sqSize * 2, rectY + sqSize * 2, sqSize, sqSize);
}

function pattern4() {
    rect(rectX, rectY, sqSize, sqSize);
    rect(rectX, rectY + sqSize, sqSize, sqSize);
    rect(rectX, rectY + sqSize, sqSize, sqSize);
    rect(rectX, rectY + sqSize, sqSize, sqSize);
}

function pattern5() {
    rect(rectX, rectY, sqSize, sqSize);
    rect(rectX + sqSize, rectY, sqSize, sqSize);
    rect(rectX + sqSize, rectY + sqSize, sqSize * 2, sqSize);
    rect(rectX, rectY + sqSize, sqSize * 3, sqSize);
}

function draw() {
    stroke(255, 216, 230);
    strokeWeight(2);
    noStroke();
    fill('cornFlowerBlue');

    if (frameCount % 30 == 0) {
        timeIt();

        patternNum = int(random(1, 6));
        console.log(patternNum);
        if (patternNum == 1) {
            pattern1();
        } else if (patternNum == 2) {
            pattern2();
        } else if (patternNum == 3) {
            pattern3();
        } else if (patternNum == 4) {
            pattern4();
        } else if (patternNum == 5) {
            pattern5();
        }
    }
}
