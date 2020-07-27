//*************TYPEWRITER EFFECT ********//
//CREDITS TO GEOFF GRAHAM: https://css-tricks.com/snippets/css/typewriter-effect/

// set up text to print, each item in array is new line
var infoText = new Array(
"Hey! It's April &#127773;",
"I’m a visual & motion designer living in San Francisco Bay Area &#127745;. I graduated from UCLA with a BA in Design Media Arts &#128187;. On the side, I like to take photos &#128248;, make things move &#127786;, and think about interactivity of organic forms &#127803;."
);
var iSpeed = 80; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = infoText[0].length; // the length of the text array
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
  sContents += infoText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + infoText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != infoText.length ) {
   iArrLength = infoText[iIndex].length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}


typewriter();
