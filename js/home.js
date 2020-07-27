//************ WOW ****************//
new WOW().init();
//************ AOS ****************//
AOS.init();
/********* STATS ************/
var disableStats = true;

javascript: (function() {
    if(!disableStats){
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
