//*************TYPEWRITER EFFECT ********//
//CREDITS TO GEOFF GRAHAM: https://css-tricks.com/snippets/css/typewriter-effect/

// set up text to print, each item in array is new line
var aText = new Array(
"Hey! It's April &#127773;",
"I’m a visual & motion designer living in San Francisco Bay Area &#127745;. I graduated from UCLA with a BA in Design Media Arts &#128187;. On the side, I like to take photos &#128248;, make things move &#127786;, and think about interactivity of organic forms &#127803;."
);
var iSpeed = 80; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typewriter");

 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}


typewriter();
//************ AOS ****************//
AOS.init();

//************* lightbox video ******//
// $('main').append(`
//     <div class="lightboxV">
//       <a href="#lightboxV" class="lightboxV-close lightboxV-toggle">X</a>
//       <div class="lightboxV-container">
//         <div class="row">
//           <div class="col-sm-12 lightboxV-column">
//
//           </div>
//         </div>
//       </div>
//     </div>
//   `);
//
// $('.lightboxV-toggle').on('click', (event) => {
//   event.preventDefault();
//   $('.lightboxV').fadeToggle('fast');
//
//   let context = $(event.currentTarget).attr('data-lightboxV-type');
//   let content = $(event.currentTarget).attr('data-lightboxV-content');
//   console.log(event);
//   if (context == 'video') {
//     $('.lightboxV-column').append(`
//         <div class="lightboxV-video">
//         <iframe src="${content}" frameborder="0" allowfullscreen> </iframe>
//         </div>
//     `);
// }
// });
//
// $('.lightboxV-close').on('click', (event) => {
//   event.preventDefault();
//   $('.lightboxV-column > *').remove();
// });

//************ p5 birds ************//

//disable p5 canvas
let disableCanvas = true;

//public variables
let flock;
let num_of_boids = 0;
let max_num_boids = 50;
let lastMouseX;
let lastMouseY;

let boidsFill;
let boidsStroke;

function setup() {

    var p5Canvas = createCanvas(windowWidth, windowHeight);
    p5Canvas.parent("p5-canvas");



    if (!disableCanvas) {
        boidsFill = color(240);
        boidsStroke = color(180);

        flock = new Flock();
        // Add an initial set of boids into the system
        for (let i = 0; i < 50; i++) {
            let b = new Boid(width / 8, 200);
            flock.addBoid(b);
            num_of_boids++;
        }
    }

}

function draw() {
    if (!disableCanvas) {
        background('#f4f4f4');

        if (lastMouseX != mouseX && lastMouseY != mouseY) {
            //check if max number of boids is reached, if not, add a new boid
            if (num_of_boids < max_num_boids) {
                flock.addBoid(new Boid(mouseX, mouseY)); //Add a new boid into the System
                num_of_boids++;
            } else if (num_of_boids == max_num_boids) {
                flock.removeFirstBoid();
                num_of_boids--;
            }
        }

        flock.run();

        lastMouseX = mouseX;
        lastMouseY = mouseY;
    }



}

// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Flock object
// Does very little, simply manages the array of all the boids

function Flock() {
    // An array for all the boids
    this.boids = []; // Initialize the array
}

Flock.prototype.run = function() {
    for (let i = 0; i < this.boids.length; i++) {
        this.boids[i].run(this.boids); // Passing the entire list of boids to each boid individually
    }
}

Flock.prototype.addBoid = function(b) {
    this.boids.push(b);
}

Flock.prototype.removeFirstBoid = function() {
    this.boids.shift();
}

// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Boid class
// Methods for Separation, Cohesion, Alignment added

function Boid(x, y) {
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(random(-1, 1), random(-1, 1));
    this.position = createVector(x, y);
    this.r = 10.0;
    this.maxspeed = 3; // Maximum speed
    this.maxforce = 0.05; // Maximum steering force
}

Boid.prototype.run = function(boids) {
    this.flock(boids);
    this.update();
    this.borders();
    this.render();
}

Boid.prototype.applyForce = function(force) {
    // We could add mass here if we want A = F / M
    this.acceleration.add(force);
}

// We accumulate a new acceleration each time based on three rules
Boid.prototype.flock = function(boids) {
    let sep = this.separate(boids); // Separation
    let ali = this.align(boids); // Alignment
    let coh = this.cohesion(boids); // Cohesion
    // Arbitrarily weight these forces
    sep.mult(1.5);
    ali.mult(1.0);
    coh.mult(1.0);
    // Add the force vectors to acceleration
    this.applyForce(sep);
    this.applyForce(ali);
    this.applyForce(coh);
}

// Method to update location
Boid.prototype.update = function() {
    // Update velocity
    this.velocity.add(this.acceleration);
    // Limit speed
    this.velocity.limit(this.maxspeed);
    this.position.add(this.velocity);
    // Reset accelertion to 0 each cycle
    this.acceleration.mult(0);
}

// A method that calculates and applies a steering force towards a target
// STEER = DESIRED MINUS VELOCITY
Boid.prototype.seek = function(target) {
    let desired = p5.Vector.sub(target, this.position); // A vector pointing from the location to the target
    // Normalize desired and scale to maximum speed
    desired.normalize();
    desired.mult(this.maxspeed);
    // Steering = Desired minus Velocity
    let steer = p5.Vector.sub(desired, this.velocity);
    steer.limit(this.maxforce); // Limit to maximum steering force
    return steer;
}

Boid.prototype.render = function() {
    // Draw a triangle rotated in the direction of velocity
    let theta = this.velocity.heading() + radians(90);
    fill(boidsFill);
    strokeWeight(0.5);
    stroke(boidsStroke);
    push();
    translate(this.position.x, this.position.y);
    rotate(theta);

    // beginShape();
    // vertex(0, -this.r * 3);
    // vertex(-this.r * 1.5, this.r * 3);
    // vertex(this.r * 1.5, this.r * 3);
    // endShape(CLOSE);

    beginShape();
    curveVertex(0, -this.r);
    curveVertex(0, -this.r);
    curveVertex(-this.r / 3, this.r / 3);
    curveVertex(-this.r / 3, this.r / 2);
    curveVertex(0, this.r);
    curveVertex(0, this.r);
    endShape();

    beginShape();
    curveVertex(0, -this.r);
    curveVertex(0, -this.r);
    curveVertex(this.r / 3, this.r / 3);
    curveVertex(this.r / 3, this.r / 2);
    curveVertex(0, this.r);
    curveVertex(0, this.r);
    endShape();

    beginShape();
    curveVertex(0, this.r);
    curveVertex(0, this.r);
    curveVertex(-this.r / 3, this.r + this.r / 3);
    curveVertex(-this.r / 3, this.r + this.r * 2 / 3);
    curveVertex(0, this.r * 1.5);
    curveVertex(0, this.r * 1.5);
    endShape();

    beginShape();
    curveVertex(0, this.r);
    curveVertex(0, this.r);
    curveVertex(this.r / 3, this.r + this.r / 3);
    curveVertex(this.r / 3, this.r + this.r * 2 / 3);
    curveVertex(0, this.r * 1.5);
    curveVertex(0, this.r * 1.5);
    endShape();

    pop();
}

// Wraparound
Boid.prototype.borders = function() {
    if (this.position.x < -this.r) this.position.x = width + this.r;
    if (this.position.y < -this.r) this.position.y = height + this.r;
    if (this.position.x > width + this.r) this.position.x = -this.r;
    if (this.position.y > height + this.r) this.position.y = -this.r;
}

// Separation
// Method checks for nearby boids and steers away
Boid.prototype.separate = function(boids) {
    let desiredseparation = 25.0;
    let steer = createVector(0, 0);
    let count = 0;
    // For every boid in the system, check if it's too close
    for (let i = 0; i < boids.length; i++) {
        let d = p5.Vector.dist(this.position, boids[i].position);
        // If the distance is greater than 0 and less than an arbitrary amount (0 when you are yourself)
        if ((d > 0) && (d < desiredseparation)) {
            // Calculate vector pointing away from neighbor
            let diff = p5.Vector.sub(this.position, boids[i].position);
            diff.normalize();
            diff.div(d); // Weight by distance
            steer.add(diff);
            count++; // Keep track of how many
        }
    }
    // Average -- divide by how many
    if (count > 0) {
        steer.div(count);
    }

    // As long as the vector is greater than 0
    if (steer.mag() > 0) {
        // Implement Reynolds: Steering = Desired - Velocity
        steer.normalize();
        steer.mult(this.maxspeed);
        steer.sub(this.velocity);
        steer.limit(this.maxforce);
    }
    return steer;
}

// Alignment
// For every nearby boid in the system, calculate the average velocity
Boid.prototype.align = function(boids) {
    let neighbordist = 50;
    let sum = createVector(0, 0);
    let count = 0;
    for (let i = 0; i < boids.length; i++) {
        let d = p5.Vector.dist(this.position, boids[i].position);
        if ((d > 0) && (d < neighbordist)) {
            sum.add(boids[i].velocity);
            count++;
        }
    }
    if (count > 0) {
        sum.div(count);
        sum.normalize();
        sum.mult(this.maxspeed);
        let steer = p5.Vector.sub(sum, this.velocity);
        steer.limit(this.maxforce);
        return steer;
    } else {
        return createVector(0, 0);
    }
}

// Cohesion
// For the average location (i.e. center) of all nearby boids, calculate steering vector towards that location
Boid.prototype.cohesion = function(boids) {
    let neighbordist = 50;
    let sum = createVector(0, 0); // Start with empty vector to accumulate all locations
    let count = 0;
    for (let i = 0; i < boids.length; i++) {
        let d = p5.Vector.dist(this.position, boids[i].position);
        if ((d > 0) && (d < neighbordist)) {
            sum.add(boids[i].position); // Add location
            count++;
        }
    }
    if (count > 0) {
        sum.div(count);
        return this.seek(sum); // Steer towards the location
    } else {
        return createVector(0, 0);
    }
}




//************ end of p5 birds ***************/



/********* STICKY DETECTOR *********/
// get the sticky element
const stickyElm = document.querySelector('nav')

const observer = new IntersectionObserver(
    ([e]) => e.target.classList.toggle('isSticky', e.intersectionRatio < 1), {
        threshold: [1]
    }
);

observer.observe(stickyElm)

/********* STATS ************/

javascript: (function() {
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
})()



// //p5
// var canvas;
// let rectX = 0;
// let rectY = 0;
// let patternNum = 1;
// let sqSize = 10;
//
// function setup() {
//     canvas = createCanvas(windowWidth, windowHeight);
//
// }
//
// function timeIt() {
//     rectX = int(sqSize * random(0, windowWidth / sqSize));
//     rectY = int(sqSize * random(0, windowHeight / sqSize));
// }
//
// function pattern1() {
//     rect(rectX, rectY, sqSize, sqSize);
//     rect(rectX + sqSize, rectY, sqSize, sqSize);
//     rect(rectX + sqSize, rectY + sqSize, sqSize, sqSize);
// }
//
// function pattern2() {
//     rect(rectX, rectY, sqSize, sqSize);
//     rect(rectX + sqSize, rectY, sqSize, sqSize);
//
// }
//
// function pattern3() {
//     rect(rectX, rectY, sqSize, sqSize);
//     rect(rectX + sqSize, rectY + sqSize, sqSize, sqSize);
//     rect(rectX + sqSize * 2, rectY + sqSize * 2, sqSize, sqSize);
// }
//
// function pattern4() {
//     rect(rectX, rectY, sqSize, sqSize);
//     rect(rectX, rectY + sqSize, sqSize, sqSize);
//     rect(rectX, rectY + sqSize, sqSize, sqSize);
//     rect(rectX, rectY + sqSize, sqSize, sqSize);
// }
//
// function pattern5() {
//     rect(rectX, rectY, sqSize, sqSize);
//     rect(rectX + sqSize, rectY, sqSize, sqSize);
//     rect(rectX + sqSize, rectY + sqSize, sqSize * 2, sqSize);
//     rect(rectX, rectY + sqSize, sqSize * 3, sqSize);
// }
//
// function draw() {
//     stroke(255, 216, 230);
//     strokeWeight(2);
//
//     noStroke();
//     fill('cornFlowerBlue');
//
//     //if(windowWidth > 426){
//         drawBackground();
//     //}
// }//end of p5

//
//
// function drawBackground(){
//     if (frameCount % 45 == 0) {
//         timeIt();
//
//         patternNum = int(random(1, 6));
//         if (patternNum == 1) {
//             pattern1();
//         } else if (patternNum == 2) {
//             pattern2();
//         } else if (patternNum == 3) {
//             pattern3();
//         } else if (patternNum == 4) {
//             pattern4();
//         } else if (patternNum == 5) {
//             pattern5();
//         }
//     }
//
//     if(frameCount % 3600 == 0){
//         background('white');
//     }
// }
//
// if(window.innerWidth > 770){
//   console.log('innerWidth checked');
//
//   $('#empty-three-d').mouseenter(function () {
//
//       $('.thumbnail-flex').css('opacity', 0);
//       $('.thumbnail-flex').css('z-index', 0);
//       $('.thumbnail-flex-three-d').css('opacity', 1);
//       $('.thumbnail-flex-three-d').css('z-index', 4);
//
//       $('#three-d').css('color', 'black');
//       $('#gd').css('color', 'lightGrey');
//       $('#mg').css('color', 'lightGrey');
//       $('#about').css('color', '#FFCE94');
//
//       $('#three-d').css('text-decoration', 'line-through');
//       $('#gd').css('text-decoration', 'none');
//       $('#mg').css('text-decoration', 'none');
//       $('#about').css('text-decoration', 'none');
//
//       $('#intro').css('display', 'none');
//
//   });
//
//
//   $('#empty-gd').mouseenter(function () {
//
//       $('.thumbnail-flex').css('opacity', 0);
//       $('.thumbnail-flex').css('z-index', 0);
//       $('.thumbnail-flex-gd').css('opacity', 1);
//       $('.thumbnail-flex-gd').css('z-index', 4);
//
//       $('#gd').css('color', 'black');
//       $('#three-d').css('color', 'lightGrey');
//       $('#mg').css('color', 'lightGrey');
//       $('#about').css('color', '#FFCE94');
//
//       $('#gd').css('text-decoration', 'line-through');
//       $('#three-d').css('text-decoration', 'none');
//       $('#mg').css('text-decoration', 'none');
//       $('#about').css('text-decoration', 'none');
//
//       $('#intro').css('display', 'none');
//
//   });
//   $('#empty-mg').mouseenter(function () {
//
//       $('.thumbnail-flex').css('opacity', 0);
//       $('.thumbnail-flex').css('z-index', 0);
//       $('.thumbnail-flex-mg').css('opacity', 1);
//       $('.thumbnail-flex-mg').css('z-index', 4);
//
//       $('#mg').css('color', 'black');
//       $('#gd').css('color', 'lightGrey');
//       $('#three-d').css('color', 'lightGrey');
//       $('#about').css('color', '#FFCE94');
//
//       $('#mg').css('text-decoration', 'line-through');
//       $('#gd').css('text-decoration', 'none');
//       $('#three-d').css('text-decoration', 'none');
//       $('#about').css('text-decoration', 'none');
//
//       $('#intro').css('display', 'none');
//   });
//   $('#empty-about').mouseenter(function () {
//
//       $('.thumbnail-flex').css('opacity', 0);
//       $('.thumbnail-flex').css('z-index', 0);
//       $('.thumbnail-flex-about').css('opacity', 1);
//       $('.thumbnail-flex-about').css('z-index', 4);
//
//       $('#about').css('color', 'darkOrange');
//       $('#gd').css('color', 'lightGrey');
//       $('#mg').css('color', 'lightGrey');
//       $('#three-d').css('color', 'lightGrey');
//
//       $('#about').css('text-decoration', 'line-through');
//       $('#gd').css('text-decoration', 'none');
//       $('#mg').css('text-decoration', 'none');
//       $('#three-d').css('text-decoration', 'none');
//
//       $('#intro').css('display', 'none');
//
//   });
//   $('#three-d').mouseenter(function () {
//
//       $('.thumbnail-flex').css('opacity', 0);
//       $('.thumbnail-flex').css('z-index', 0);
//       $('.thumbnail-flex-three-d').css('opacity', 1);
//       $('.thumbnail-flex-three-d').css('z-index', 4);
//
//       $('#three-d').css('color', 'black');
//       $('#gd').css('color', 'lightGrey');
//       $('#mg').css('color', 'lightGrey');
//       $('#about').css('color', '#FFCE94');
//
//       $('#three-d').css('text-decoration', 'line-through');
//       $('#gd').css('text-decoration', 'none');
//       $('#mg').css('text-decoration', 'none');
//       $('#about').css('text-decoration', 'none');
//
//       $('#intro').css('display', 'none');
//   });
//   $('#gd').mouseenter(function () {
//
//       $('.thumbnail-flex').css('opacity', 0);
//       $('.thumbnail-flex').css('z-index', 0);
//       $('.thumbnail-flex-gd').css('opacity', 1);
//       $('.thumbnail-flex-gd').css('z-index', 4);
//
//       $('#gd').css('color', 'black');
//       $('#three-d').css('color', 'lightGrey');
//       $('#mg').css('color', 'lightGrey');
//       $('#about').css('color', '#FFCE94');
//
//       $('#gd').css('text-decoration', 'line-through');
//       $('#three-d').css('text-decoration', 'none');
//       $('#mg').css('text-decoration', 'none');
//       $('#about').css('text-decoration', 'none');
//
//       $('#intro').css('display', 'none');
//   });
//   $('#mg').mouseenter(function () {
//
//       $('.thumbnail-flex').css('opacity', 0);
//       $('.thumbnail-flex').css('z-index', 0);
//       $('.thumbnail-flex-mg').css('opacity', 1);
//       $('.thumbnail-flex-mg').css('z-index', 4);
//
//       $('#mg').css('color', 'black');
//       $('#gd').css('color', 'lightGrey');
//       $('#three-d').css('color', 'lightGrey');
//       $('#about').css('color', '#FFCE94');
//
//       $('#mg').css('text-decoration', 'line-through');
//       $('#gd').css('text-decoration', 'none');
//       $('#three-d').css('text-decoration', 'none');
//       $('#about').css('text-decoration', 'none');
//
//       $('#intro').css('display', 'none');
//   });
//   $('#about').mouseenter(function () {
//
//       $('.thumbnail-flex').css('opacity', 0);
//       $('.thumbnail-flex').css('z-index', 0);
//       $('.thumbnail-flex-about').css('opacity', 1);
//       $('.thumbnail-flex-about').css('z-index', 4);
//
//       $('#about').css('color', 'darkOrange');
//       $('#gd').css('color', 'lightGrey');
//       $('#mg').css('color', 'lightGrey');
//       $('#three-d').css('color', 'lightGrey');
//
//       $('#about').css('text-decoration', 'line-through');
//       $('#gd').css('text-decoration', 'none');
//       $('#mg').css('text-decoration', 'none');
//       $('#three-d').css('text-decoration', 'none');
//
//       $('#intro').css('display', 'none');
//   });
// }else{//tablet or mobile land on mg
//   $('.thumbnail-flex').css('opacity', 0);
//   $('.thumbnail-flex').css('z-index', 0);
//   $('.thumbnail-flex-mg').css('opacity', 1);
//   $('.thumbnail-flex-mg').css('z-index', 4);
//
//   $('#mg').css('color', 'black');
//   $('#gd').css('color', 'lightGrey');
//   $('#three-d').css('color', 'lightGrey');
//   $('#about').css('color', '#FFCE94');
//
//   $('#mg').css('text-decoration', 'line-through');
//   $('#gd').css('text-decoration', 'none');
//   $('#three-d').css('text-decoration', 'none');
//   $('#about').css('text-decoration', 'none');
//
//   $('#intro').css('display', 'none');
//
//
//   $('#three-d').mouseenter(function () {
//
//       $('.thumbnail-flex').css('opacity', 0);
//       $('.thumbnail-flex').css('z-index', 0);
//       $('.thumbnail-flex-three-d').css('opacity', 1);
//       $('.thumbnail-flex-three-d').css('z-index', 4);
//
//       $('#three-d').css('color', 'black');
//       $('#gd').css('color', 'lightGrey');
//       $('#mg').css('color', 'lightGrey');
//       $('#about').css('color', '#FFCE94');
//
//       $('#three-d').css('text-decoration', 'line-through');
//       $('#gd').css('text-decoration', 'none');
//       $('#mg').css('text-decoration', 'none');
//       $('#about').css('text-decoration', 'none');
//
//       $('#intro').css('display', 'none');
//
//   });
//
//
//   $('#gd').mouseenter(function () {
//
//       $('.thumbnail-flex').css('opacity', 0);
//       $('.thumbnail-flex').css('z-index', 0);
//       $('.thumbnail-flex-gd').css('opacity', 1);
//       $('.thumbnail-flex-gd').css('z-index', 4);
//
//       $('#gd').css('color', 'black');
//       $('#three-d').css('color', 'lightGrey');
//       $('#mg').css('color', 'lightGrey');
//       $('#about').css('color', '#FFCE94');
//
//       $('#gd').css('text-decoration', 'line-through');
//       $('#three-d').css('text-decoration', 'none');
//       $('#mg').css('text-decoration', 'none');
//       $('#about').css('text-decoration', 'none');
//
//       $('#intro').css('display', 'none');
//
//   });
//   $('#mg').mouseenter(function () {
//
//       $('.thumbnail-flex').css('opacity', 0);
//       $('.thumbnail-flex').css('z-index', 0);
//       $('.thumbnail-flex-mg').css('opacity', 1);
//       $('.thumbnail-flex-mg').css('z-index', 4);
//
//       $('#mg').css('color', 'black');
//       $('#gd').css('color', 'lightGrey');
//       $('#three-d').css('color', 'lightGrey');
//       $('#about').css('color', '#FFCE94');
//
//       $('#mg').css('text-decoration', 'line-through');
//       $('#gd').css('text-decoration', 'none');
//       $('#three-d').css('text-decoration', 'none');
//       $('#about').css('text-decoration', 'none');
//
//       $('#intro').css('display', 'none');
//   });
//   $('#about').mouseenter(function () {
//
//       $('.thumbnail-flex').css('opacity', 0);
//       $('.thumbnail-flex').css('z-index', 0);
//       $('.thumbnail-flex-about').css('opacity', 1);
//       $('.thumbnail-flex-about').css('z-index', 4);
//
//       $('#about').css('color', 'darkOrange');
//       $('#gd').css('color', 'lightGrey');
//       $('#mg').css('color', 'lightGrey');
//       $('#three-d').css('color', 'lightGrey');
//
//       $('#about').css('text-decoration', 'line-through');
//       $('#gd').css('text-decoration', 'none');
//       $('#mg').css('text-decoration', 'none');
//       $('#three-d').css('text-decoration', 'none');
//
//       $('#intro').css('display', 'none');
//
//   });
//   $('#three-d').mouseenter(function () {
//
//       $('.thumbnail-flex').css('opacity', 0);
//       $('.thumbnail-flex').css('z-index', 0);
//       $('.thumbnail-flex-three-d').css('opacity', 1);
//       $('.thumbnail-flex-three-d').css('z-index', 4);
//
//       $('#three-d').css('color', 'black');
//       $('#gd').css('color', 'lightGrey');
//       $('#mg').css('color', 'lightGrey');
//       $('#about').css('color', '#FFCE94');
//
//       $('#three-d').css('text-decoration', 'line-through');
//       $('#gd').css('text-decoration', 'none');
//       $('#mg').css('text-decoration', 'none');
//       $('#about').css('text-decoration', 'none');
//
//       $('#intro').css('display', 'none');
//   });
//   $('#gd').mouseenter(function () {
//
//       $('.thumbnail-flex').css('opacity', 0);
//       $('.thumbnail-flex').css('z-index', 0);
//       $('.thumbnail-flex-gd').css('opacity', 1);
//       $('.thumbnail-flex-gd').css('z-index', 4);
//
//       $('#gd').css('color', 'black');
//       $('#three-d').css('color', 'lightGrey');
//       $('#mg').css('color', 'lightGrey');
//       $('#about').css('color', '#FFCE94');
//
//       $('#gd').css('text-decoration', 'line-through');
//       $('#three-d').css('text-decoration', 'none');
//       $('#mg').css('text-decoration', 'none');
//       $('#about').css('text-decoration', 'none');
//
//       $('#intro').css('display', 'none');
//   });
//   $('#mg').mouseenter(function () {
//
//       $('.thumbnail-flex').css('opacity', 0);
//       $('.thumbnail-flex').css('z-index', 0);
//       $('.thumbnail-flex-mg').css('opacity', 1);
//       $('.thumbnail-flex-mg').css('z-index', 4);
//
//       $('#mg').css('color', 'black');
//       $('#gd').css('color', 'lightGrey');
//       $('#three-d').css('color', 'lightGrey');
//       $('#about').css('color', '#FFCE94');
//
//       $('#mg').css('text-decoration', 'line-through');
//       $('#gd').css('text-decoration', 'none');
//       $('#three-d').css('text-decoration', 'none');
//       $('#about').css('text-decoration', 'none');
//
//       $('#intro').css('display', 'none');
//   });
//   $('#about').mouseenter(function () {
//
//       $('.thumbnail-flex').css('opacity', 0);
//       $('.thumbnail-flex').css('z-index', 0);
//       $('.thumbnail-flex-about').css('opacity', 1);
//       $('.thumbnail-flex-about').css('z-index', 4);
//
//       $('#about').css('color', 'darkOrange');
//       $('#gd').css('color', 'lightGrey');
//       $('#mg').css('color', 'lightGrey');
//       $('#three-d').css('color', 'lightGrey');
//
//       $('#about').css('text-decoration', 'line-through');
//       $('#gd').css('text-decoration', 'none');
//       $('#mg').css('text-decoration', 'none');
//       $('#three-d').css('text-decoration', 'none');
//
//       $('#intro').css('display', 'none');
//   });
// }
