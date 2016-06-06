var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/logo_white.jpg') {
		myImage.setAttribute ('src','images/logo_black.png');
	} else {
		myImage.setAttribute ('src','images/logo_white.jpg');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = "Welcome, " + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Welcome, ' + storedName;
}

myButton.onclick = function(){
	setUserName();
}