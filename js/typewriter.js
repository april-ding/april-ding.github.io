//*************TYPEWRITER EFFECT ********//
//CREDITS TO GEOFF GRAHAM: https://css-tricks.com/snippets/css/typewriter-effect/

// set up text to print, each item in array is new line
let infoText = new Array(
    "This is the design portfolio of April Ding. For her work as a full stack web developer, please visit her Github. &#127773; "
);
let iSpeed = 50; // time delay of print out
let iIndex = 0; // start printing array at this posision
let iArrLength = infoText[0].length; // the length of the text array
let iScrollAt = 20; // start scrolling up at this many lines

let iTextPos = 0; // initialise text position
let sContents = ''; // initialise contents variable
let iRow; // initialise current row


function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    let destination = document.getElementById("typewriter");

    while (iRow < iIndex) {
        sContents += infoText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + infoText[iIndex].substring(0, iTextPos);
    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != infoText.length) {
            iArrLength = infoText[iIndex].length;
            setTimeout("typewriter()", 500);
        }
    } else {
        setTimeout("typewriter()", iSpeed);
    }

}


typewriter();
