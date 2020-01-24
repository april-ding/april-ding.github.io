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

    //if(windowWidth > 426){
        drawBackground();
    //}
}

function drawBackground(){
    if (frameCount % 45 == 0) {
        timeIt();

        patternNum = int(random(1, 6));
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

    if(frameCount % 3600 == 0){
        background('white');
    }
}

if(window.innerWidth > 770){
  console.log('innerWidth checked');

  $('#empty-three-d').mouseenter(function () {

      $('.thumbnail-flex').css('opacity', 0);
      $('.thumbnail-flex').css('z-index', 0);
      $('.thumbnail-flex-three-d').css('opacity', 1);
      $('.thumbnail-flex-three-d').css('z-index', 4);

      $('#three-d').css('color', 'black');
      $('#gd').css('color', 'lightGrey');
      $('#mg').css('color', 'lightGrey');
      $('#about').css('color', '#FFCE94');

      $('#three-d').css('text-decoration', 'line-through');
      $('#gd').css('text-decoration', 'none');
      $('#mg').css('text-decoration', 'none');
      $('#about').css('text-decoration', 'none');

      $('#intro').css('display', 'none');

  });


  $('#empty-gd').mouseenter(function () {

      $('.thumbnail-flex').css('opacity', 0);
      $('.thumbnail-flex').css('z-index', 0);
      $('.thumbnail-flex-gd').css('opacity', 1);
      $('.thumbnail-flex-gd').css('z-index', 4);

      $('#gd').css('color', 'black');
      $('#three-d').css('color', 'lightGrey');
      $('#mg').css('color', 'lightGrey');
      $('#about').css('color', '#FFCE94');

      $('#gd').css('text-decoration', 'line-through');
      $('#three-d').css('text-decoration', 'none');
      $('#mg').css('text-decoration', 'none');
      $('#about').css('text-decoration', 'none');

      $('#intro').css('display', 'none');

  });
  $('#empty-mg').mouseenter(function () {

      $('.thumbnail-flex').css('opacity', 0);
      $('.thumbnail-flex').css('z-index', 0);
      $('.thumbnail-flex-mg').css('opacity', 1);
      $('.thumbnail-flex-mg').css('z-index', 4);

      $('#mg').css('color', 'black');
      $('#gd').css('color', 'lightGrey');
      $('#three-d').css('color', 'lightGrey');
      $('#about').css('color', '#FFCE94');

      $('#mg').css('text-decoration', 'line-through');
      $('#gd').css('text-decoration', 'none');
      $('#three-d').css('text-decoration', 'none');
      $('#about').css('text-decoration', 'none');

      $('#intro').css('display', 'none');
  });
  $('#empty-about').mouseenter(function () {

      $('.thumbnail-flex').css('opacity', 0);
      $('.thumbnail-flex').css('z-index', 0);
      $('.thumbnail-flex-about').css('opacity', 1);
      $('.thumbnail-flex-about').css('z-index', 4);

      $('#about').css('color', 'darkOrange');
      $('#gd').css('color', 'lightGrey');
      $('#mg').css('color', 'lightGrey');
      $('#three-d').css('color', 'lightGrey');

      $('#about').css('text-decoration', 'line-through');
      $('#gd').css('text-decoration', 'none');
      $('#mg').css('text-decoration', 'none');
      $('#three-d').css('text-decoration', 'none');

      $('#intro').css('display', 'none');

  });
  $('#three-d').mouseenter(function () {

      $('.thumbnail-flex').css('opacity', 0);
      $('.thumbnail-flex').css('z-index', 0);
      $('.thumbnail-flex-three-d').css('opacity', 1);
      $('.thumbnail-flex-three-d').css('z-index', 4);

      $('#three-d').css('color', 'black');
      $('#gd').css('color', 'lightGrey');
      $('#mg').css('color', 'lightGrey');
      $('#about').css('color', '#FFCE94');

      $('#three-d').css('text-decoration', 'line-through');
      $('#gd').css('text-decoration', 'none');
      $('#mg').css('text-decoration', 'none');
      $('#about').css('text-decoration', 'none');

      $('#intro').css('display', 'none');
  });
  $('#gd').mouseenter(function () {

      $('.thumbnail-flex').css('opacity', 0);
      $('.thumbnail-flex').css('z-index', 0);
      $('.thumbnail-flex-gd').css('opacity', 1);
      $('.thumbnail-flex-gd').css('z-index', 4);

      $('#gd').css('color', 'black');
      $('#three-d').css('color', 'lightGrey');
      $('#mg').css('color', 'lightGrey');
      $('#about').css('color', '#FFCE94');

      $('#gd').css('text-decoration', 'line-through');
      $('#three-d').css('text-decoration', 'none');
      $('#mg').css('text-decoration', 'none');
      $('#about').css('text-decoration', 'none');

      $('#intro').css('display', 'none');
  });
  $('#mg').mouseenter(function () {

      $('.thumbnail-flex').css('opacity', 0);
      $('.thumbnail-flex').css('z-index', 0);
      $('.thumbnail-flex-mg').css('opacity', 1);
      $('.thumbnail-flex-mg').css('z-index', 4);

      $('#mg').css('color', 'black');
      $('#gd').css('color', 'lightGrey');
      $('#three-d').css('color', 'lightGrey');
      $('#about').css('color', '#FFCE94');

      $('#mg').css('text-decoration', 'line-through');
      $('#gd').css('text-decoration', 'none');
      $('#three-d').css('text-decoration', 'none');
      $('#about').css('text-decoration', 'none');

      $('#intro').css('display', 'none');
  });
  $('#about').mouseenter(function () {

      $('.thumbnail-flex').css('opacity', 0);
      $('.thumbnail-flex').css('z-index', 0);
      $('.thumbnail-flex-about').css('opacity', 1);
      $('.thumbnail-flex-about').css('z-index', 4);

      $('#about').css('color', 'darkOrange');
      $('#gd').css('color', 'lightGrey');
      $('#mg').css('color', 'lightGrey');
      $('#three-d').css('color', 'lightGrey');

      $('#about').css('text-decoration', 'line-through');
      $('#gd').css('text-decoration', 'none');
      $('#mg').css('text-decoration', 'none');
      $('#three-d').css('text-decoration', 'none');

      $('#intro').css('display', 'none');
  });
}else{//tablet or mobile land on mg
  $('.thumbnail-flex').css('opacity', 0);
  $('.thumbnail-flex').css('z-index', 0);
  $('.thumbnail-flex-mg').css('opacity', 1);
  $('.thumbnail-flex-mg').css('z-index', 4);

  $('#mg').css('color', 'black');
  $('#gd').css('color', 'lightGrey');
  $('#three-d').css('color', 'lightGrey');
  $('#about').css('color', '#FFCE94');

  $('#mg').css('text-decoration', 'line-through');
  $('#gd').css('text-decoration', 'none');
  $('#three-d').css('text-decoration', 'none');
  $('#about').css('text-decoration', 'none');

  $('#intro').css('display', 'none');


  $('#three-d').mouseenter(function () {

      $('.thumbnail-flex').css('opacity', 0);
      $('.thumbnail-flex').css('z-index', 0);
      $('.thumbnail-flex-three-d').css('opacity', 1);
      $('.thumbnail-flex-three-d').css('z-index', 4);

      $('#three-d').css('color', 'black');
      $('#gd').css('color', 'lightGrey');
      $('#mg').css('color', 'lightGrey');
      $('#about').css('color', '#FFCE94');

      $('#three-d').css('text-decoration', 'line-through');
      $('#gd').css('text-decoration', 'none');
      $('#mg').css('text-decoration', 'none');
      $('#about').css('text-decoration', 'none');

      $('#intro').css('display', 'none');

  });


  $('#gd').mouseenter(function () {

      $('.thumbnail-flex').css('opacity', 0);
      $('.thumbnail-flex').css('z-index', 0);
      $('.thumbnail-flex-gd').css('opacity', 1);
      $('.thumbnail-flex-gd').css('z-index', 4);

      $('#gd').css('color', 'black');
      $('#three-d').css('color', 'lightGrey');
      $('#mg').css('color', 'lightGrey');
      $('#about').css('color', '#FFCE94');

      $('#gd').css('text-decoration', 'line-through');
      $('#three-d').css('text-decoration', 'none');
      $('#mg').css('text-decoration', 'none');
      $('#about').css('text-decoration', 'none');

      $('#intro').css('display', 'none');

  });
  $('#mg').mouseenter(function () {

      $('.thumbnail-flex').css('opacity', 0);
      $('.thumbnail-flex').css('z-index', 0);
      $('.thumbnail-flex-mg').css('opacity', 1);
      $('.thumbnail-flex-mg').css('z-index', 4);

      $('#mg').css('color', 'black');
      $('#gd').css('color', 'lightGrey');
      $('#three-d').css('color', 'lightGrey');
      $('#about').css('color', '#FFCE94');

      $('#mg').css('text-decoration', 'line-through');
      $('#gd').css('text-decoration', 'none');
      $('#three-d').css('text-decoration', 'none');
      $('#about').css('text-decoration', 'none');

      $('#intro').css('display', 'none');
  });
  $('#about').mouseenter(function () {

      $('.thumbnail-flex').css('opacity', 0);
      $('.thumbnail-flex').css('z-index', 0);
      $('.thumbnail-flex-about').css('opacity', 1);
      $('.thumbnail-flex-about').css('z-index', 4);

      $('#about').css('color', 'darkOrange');
      $('#gd').css('color', 'lightGrey');
      $('#mg').css('color', 'lightGrey');
      $('#three-d').css('color', 'lightGrey');

      $('#about').css('text-decoration', 'line-through');
      $('#gd').css('text-decoration', 'none');
      $('#mg').css('text-decoration', 'none');
      $('#three-d').css('text-decoration', 'none');

      $('#intro').css('display', 'none');

  });
  $('#three-d').mouseenter(function () {

      $('.thumbnail-flex').css('opacity', 0);
      $('.thumbnail-flex').css('z-index', 0);
      $('.thumbnail-flex-three-d').css('opacity', 1);
      $('.thumbnail-flex-three-d').css('z-index', 4);

      $('#three-d').css('color', 'black');
      $('#gd').css('color', 'lightGrey');
      $('#mg').css('color', 'lightGrey');
      $('#about').css('color', '#FFCE94');

      $('#three-d').css('text-decoration', 'line-through');
      $('#gd').css('text-decoration', 'none');
      $('#mg').css('text-decoration', 'none');
      $('#about').css('text-decoration', 'none');

      $('#intro').css('display', 'none');
  });
  $('#gd').mouseenter(function () {

      $('.thumbnail-flex').css('opacity', 0);
      $('.thumbnail-flex').css('z-index', 0);
      $('.thumbnail-flex-gd').css('opacity', 1);
      $('.thumbnail-flex-gd').css('z-index', 4);

      $('#gd').css('color', 'black');
      $('#three-d').css('color', 'lightGrey');
      $('#mg').css('color', 'lightGrey');
      $('#about').css('color', '#FFCE94');

      $('#gd').css('text-decoration', 'line-through');
      $('#three-d').css('text-decoration', 'none');
      $('#mg').css('text-decoration', 'none');
      $('#about').css('text-decoration', 'none');

      $('#intro').css('display', 'none');
  });
  $('#mg').mouseenter(function () {

      $('.thumbnail-flex').css('opacity', 0);
      $('.thumbnail-flex').css('z-index', 0);
      $('.thumbnail-flex-mg').css('opacity', 1);
      $('.thumbnail-flex-mg').css('z-index', 4);

      $('#mg').css('color', 'black');
      $('#gd').css('color', 'lightGrey');
      $('#three-d').css('color', 'lightGrey');
      $('#about').css('color', '#FFCE94');

      $('#mg').css('text-decoration', 'line-through');
      $('#gd').css('text-decoration', 'none');
      $('#three-d').css('text-decoration', 'none');
      $('#about').css('text-decoration', 'none');

      $('#intro').css('display', 'none');
  });
  $('#about').mouseenter(function () {

      $('.thumbnail-flex').css('opacity', 0);
      $('.thumbnail-flex').css('z-index', 0);
      $('.thumbnail-flex-about').css('opacity', 1);
      $('.thumbnail-flex-about').css('z-index', 4);

      $('#about').css('color', 'darkOrange');
      $('#gd').css('color', 'lightGrey');
      $('#mg').css('color', 'lightGrey');
      $('#three-d').css('color', 'lightGrey');

      $('#about').css('text-decoration', 'line-through');
      $('#gd').css('text-decoration', 'none');
      $('#mg').css('text-decoration', 'none');
      $('#three-d').css('text-decoration', 'none');

      $('#intro').css('display', 'none');
  });
}
