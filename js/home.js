

//merge test
//p5
var canvas;
let rectX = 0;
let rectY = 0;
let patternNum = 1;
let sqSize = 10;


    function moveBackground() {
     x += (lFollowX - x) * friction;
     y += (lFollowY - y) * friction;

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
