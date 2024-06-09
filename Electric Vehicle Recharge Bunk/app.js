// Add your JavaScript code here

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyC1jTJ5s4JkTo9wIPj6jsKx5nJJaU8y8i0",
	authDomain: "soil-1a3e8.firebaseapp.com",
	databaseURL: "https://soil-1a3e8-default-rtdb.firebaseio.com",
	projectId: "soil-1a3e8",
	storageBucket: "soil-1a3e8.appspot.com",
	messagingSenderId: "780672681598",
	appId: "1:780672681598:web:a429e402538d3f90497a2f",
	measurementId: "G-9PJD0MC3QP"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Function to check login status and update message
function updateLoginStatusMessage() {
  const loginStatusMessage = document.getElementById('login-status-message');
  const user = firebase.auth().currentUser;

  if (user) {
    loginStatusMessage.textContent = `Logged in as ${user.email}`;
  } else {
    loginStatusMessage.textContent = 'Not logged in';
  }
}

// Example function for user login
function loginUser() {
  // Implement your login functionality using Firebase authentication
  // ...

  // After login, update the login status message
  updateLoginStatusMessage();
}

// Call the function to initially update login status message
updateLoginStatusMessage();

$(document).ready(function() {
	// var test = $('#map-container').hasClass('mapit');
	var test = window.google != undefined;

	$('.ismap').click(function() {
		console.log("Map is clicked");
		$gmap = true;
		$mapit = false;
		
		yepnope({  
		    test : test,
		    yep: {
		    	"alreadyLoaded":"timeout=1!"
		    },
		    nope: {
		    	"googleMap": "https://maps.google.com/maps/api/js?v=3&sensor=true&callback=initMap"
		    },
		    callback: {
		    	"alreadyLoaded": function() {
		    		console.log("Already Loaded");
		    		initMap();
		    	}
		    },			
			complete : function(url, result, key){
				console.log("Complete");
		    }
		});
		console.log("I should run before YepNope");
	});

});

function initMap() {
	$("#map-canvas").show();
    console.log("Type Of Google: " + typeof google);
    var geocodeString = $("#map-canvas").data("geocode");
	var geocode = geocodeString.split(',');
	var myLatlng = new google.maps.LatLng(parseFloat(geocode[0]), parseFloat(geocode[1]));

	var myOptions = {
	    zoom: 18,
	    center: myLatlng,
	    mapTypeControl: true,
	    mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
	    navigationControl: true,
	    mapTypeId: google.maps.MapTypeId.ROADMAP,
	}

	var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
	var marker = new google.maps.Marker({
	    position: myLatlng,
	    title:"Hello World!"
	});

	// To add the marker to the map, call setMap();
	marker.setMap(map);
}
