
nav = document.querySelectorAll(".step-nav")
if (nav[0].id == "back-0") {
	nav[0].style.display = "none";
} else {
	nav[0].style.display = "flex";
}

if (nav[1].id == "next-7") {
	nav[1].style.display = "none";
} else {
	nav[1].style.display = "flex";
}

var id

if (id == undefined ){
	currentId = 0;
}

if (currentId > 6) {
	currentId = 0;
}

function previousStep(stepId){

	var stepId = stepId.id
	var regex = /\d+/g;
	currentId = stepId.match(regex);  // creates array from matches

	var backId = "back-"+ currentId;
	var back = document.getElementById(backId);

	var nextId = "next-"+ currentId;
	var next = document.getElementById(nextId);

	console.log(back);
	console.log(backId);

	currentId--;
	back.setAttribute("id", "back-" + currentId);
	next.setAttribute("id", "next-" + currentId);

}

function nextStep(stepId){
	var stepId = stepId.id
	var regex = /\d+/g;
	currentId = stepId.match(regex);  // creates array from matches

	var backId = "back-"+ currentId;
	var back = document.getElementById(backId);

	var nextId = "next-"+ currentId;
	var next = document.getElementById(nextId);

	currentId++;
	back.setAttribute("id", "back-" + currentId);
	next.setAttribute("id", "next-" + currentId);

}

function stepByStep(currentStep){

	if (currentStep.id !== null) {
		var id = currentStep.id;
		var regex = /\d+/g;
		id = id.match(regex);  // creates array from matches
	}

	currentId = id;
	nav[0].setAttribute('id','back-' + id)
	nav[1].setAttribute('id','next-' + id)
	if (nav[0].id == "back-0") {
		nav[0].style.display = "none";
	} else {
		nav[0].style.display = "flex";
	}

	if (nav[1].id == "next-7") {
		nav[1].style.display = "none";
	} else {
		nav[1].style.display = "flex";
	}
	console.log(nav[1].id)

	var imgSteps = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img6.jpg', 'img7.jpg', 'img8.jpg'];
	var titleSteps = ['Step 1: Creating the mission', 'Step 2: Calibrating the software', 'Step 3: Overview', 'Step 4: Starting a new scan', 'Step 5: Overview', 'Step 6: Importing a new dataset', 'Step 7: Match Data with Scans', 'Step 8: Plot Data and Analyze!'];
	var textSteps = ['The first time you start the software you will be greeted by this screen. From here you can either choose to import an existing mission or create a new one from scratch.', 'Having chosen to create a new mission you will have to fill out the software’s mission wizard which will ask for specifications of the test, the drone which will be perform the test and finally the calibrations of the antenna. <br><br> When everything is ready click the Blue “Create” button in the left corner', 'You now have access to the Overview. From here you can do few things, if you need to recalibrate for the mission, you can access your calibrations in the calibrations tab. <br><br> When everything is ready click the Blue “New Scan” button in the left corner.', 'When creating a new scan, you must input the relevant calibrations for the drone’s flight mission. Once this is done press the create button and export the mission via the “Export Flight“ button in the overview.', 'Once you have performed your flight mission and have set up some scans, you are ready to import the datasets. <br><br>Click the “Import Data” button.', 'Simply drag and drop flies into the window or find your datasets using the browse button. <br><br>Once you are done importing your datasets press accept.', 'Once you have imported the data from the drone test you are ready to match the data with the scans you prepared earlier. If you are having trouble finding an exact dataset, use the search tool located at the upper right of either table view. <br><br>Once you are done matching your data with your scans press accept.', 'Now all there is left to do is going to the plot tab and analyze your data to your needs.'  ];

	console.log(id);
	document.getElementById("steps").innerHTML = "";

	if (id !== null) {
		document.getElementById("stepImg").setAttribute("src", "img/steps/" + imgSteps[id]);
		document.getElementById("stepTitle").innerHTML = titleSteps[id];
		document.getElementById("stepText").innerHTML = textSteps[id];
	}

	for (var i = 0; i < imgSteps.length; i++) {
		var step = document.createElement("li");

		step.setAttribute("id", "step" + i);
		step.setAttribute("onclick", "stepByStep(this)");

		if (i > 0){
			var connector = document.createElement("div");
			step.appendChild(connector);
		}

		if (i <= id){
			step.setAttribute("class", "completed");
		}

		document.getElementById("steps").appendChild(step);
	}
}


// Burger menu js

let menu = document.querySelector(".menu");
let ham = document.querySelector(".ham");
let xIcon = document.querySelector(".xIcon");
let menuIcon = document.querySelector(".menuIcon");

ham.addEventListener("click", toggleMenu);

function toggleMenu() {
	if (menu.classList.contains("showMenu")) {
		menu.classList.remove("showMenu");
		xIcon.style.display = "block";
		menuIcon.style.display = "none";
	} else {
		menu.classList.add("showMenu");
		xIcon.style.display = "none";
		menuIcon.style.display = "block";
	}
}

let menuLinks = document.querySelectorAll(".menuLink");

menuLinks.forEach(
	function (menuLink) {
		menuLink.addEventListener("click", toggleMenu);
	}
	)

// Burger menu slut

//Antons JS - Slider
//Variabler
var i = 0;
var billeder = [];
var tid = 3000;

//Billede array
billeder[0] = 'img/timer/timer1.jpg'
billeder[1] = 'img/timer/timer2.jpg'
billeder[2] = 'img/timer/timer3.jpg'

  //Skift billede og bubble
  function skiftImg() {

    document.getElementById('slide').src = billeder[i];
    //Skifter bubble med billeder
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
    //Skift billede
    if (i < billeder.length - 1) {
      i++;
    }
    else {
      i = 0;
    }
    //Metode så billederne skifter efter varibalen tids værdi
    setTimeout("skiftImg()", tid);
  }

  //Søger for at loade skiftImg funktion når siden åbnes
  window.onload = skiftImg;

//For at vise at jeg kan for loops
  for (var count = 0; count <= 12; count++) {
    console.log(count)
  }

//Slider slut
