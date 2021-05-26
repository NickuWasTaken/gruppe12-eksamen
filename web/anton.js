console.log("JS is running...");

var i = 0;
var billeder = [];
var tid = 3000;

//Billede liste
billeder[0] = 'img/timer/timer1.jpg'
billeder[1] = 'img/timer/timer2.jpg'
billeder[2] = 'img/timer/timer3.jpg'

  //Skift billede
  function skiftImg() {

    document.getElementById('slide').src = billeder[i];

    if (i == 0) {
      document.getElementById('bubble1').setAttribute('class', 'selected')
      document.getElementById('bubble2').setAttribute('class', '')
      document.getElementById('bubble3').setAttribute('class', '')
    }

    if (i == 1) {
      document.getElementById('bubble1').setAttribute('class', '')
      document.getElementById('bubble2').setAttribute('class', 'selected')
      document.getElementById('bubble3').setAttribute('class', '')
    }

    if (i == 2) {
      document.getElementById('bubble1').setAttribute('class', '')
      document.getElementById('bubble2').setAttribute('class', '')
      document.getElementById('bubble3').setAttribute('class', 'selected')
    }

    if (i < billeder.length - 1) {
      i++;
    }
    else {
      i = 0;
    }

    setTimeout("skiftImg()", tid);
  }


  window.onload = skiftImg;


  for (var i = 0; i < Things.length; i++) {

  }