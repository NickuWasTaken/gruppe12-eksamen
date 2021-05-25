console.log("JS is running...");

var i = 0;
var billeder = [];
var tid = 2000;

//Billede liste
  billeder[0] = 'img/timer/timer1.jpg'
  billeder[1] = 'img/timer/timer2.jpg'
  billeder[2] = 'img/timer/timer3.jpg'

  //Skift billede
  function skiftImg() {
    document.getElementById('slide').src = billeder[i];

    if (i < billeder.length - 1) {
      i++;
    }
    else {
      i = 0;
    }

    setTimeout("skiftImg()", tid);
  }

window.onload = skiftImg;
