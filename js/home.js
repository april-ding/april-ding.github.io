//************ WOW ****************//
new WOW().init();
//************ AOS ****************//
AOS.init();
/********* STATS ************/
var disableStats = true;

javascript: (function() {
    if (!disableStats) {
        var script = document.createElement('script');
        script.onload = function() {
            var stats = new Stats();
            document.body.appendChild(stats.dom);
            requestAnimationFrame(function loop() {
                stats.update();
                requestAnimationFrame(loop)
            });
        };
        script.src = 'js/stats.min.js';
        document.head.appendChild(script);
    }

})()
/********* NAV ************/
var transitionTime = 300;
$(document).ready(function() {
    $('.icon').on("click", function() {
        openNav();
    })

    $('.showAll').on('click', function(){
        $('.visual').show(transitionTime);
        $('.interactive').show(transitionTime);
        $('.motion').show(transitionTime);
    });

    $('.visualOnly').on('click', function(){
        $('.visual').show(transitionTime);
        $('.interactive').hide(transitionTime);
        $('.motion').hide(transitionTime);
    });
    $('.interactiveOnly').on('click', function(){
        $('.visual').hide(transitionTime);
        $('.interactive').show(transitionTime);
        $('.motion').hide(transitionTime);
    });
    $('.motionOnly').on('click', function(){
        $('.interactive').hide(transitionTime);
        $('.visual').hide(transitionTime);
        $('.motion').show(transitionTime);
    });
});

function showWork() {
    var y = document.getElementById("dropdown-content");
    if (y.style.display === "block") {
        y.style.display = "none";
    } else {
        y.style.display = "block";
    }
}

function openNav() {
    var x = $("#nav-mobile-links");

    if (x.css('display') == 'block') { //nav opened, need to close
        $("body").css("overflow", "visible");
        x.removeClass("nav-open").addClass("nav-close");
        setTimeout(function() {
            x.css('display', 'none');
        }, 200);
    } else { //nav closed, need to open
        $("body").css("overflow", "hidden");
        x.removeClass("nav-close").addClass("nav-open");
        x.css("display", "block");
    }
}
