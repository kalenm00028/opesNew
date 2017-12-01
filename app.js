var config = {
	    apiKey: "AIzaSyDiFSo7Lntffp1h-XPA-w25RIEsrhwHaT0",
	    authDomain: "opes-e9bf7.firebaseapp.com",
	    databaseURL: "https://opes-e9bf7.firebaseio.com",
	    projectId: "opes-e9bf7",
	    storageBucket: "opes-e9bf7.appspot.com",
	    messagingSenderId: "93679273024"
	  };

firebase.initializeApp(config);

var indexLoad = function() {
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			window.location = "file:///C:/Users/mccrea_ka/Desktop/opes/mission.html"
		}
	});
}

var signIn = function() {
	const email = document.getElementById('emailForm').value;
	const pass = document.getElementById('passForm').value;
	const auth = firebase.auth();
	const promise = auth.signInWithEmailAndPassword(email, pass);
	promise.catch(e => console.log(e.message));
}

var isAuth = function() {
	firebase.auth().onAuthStateChanged(function(user) {
		if (user) {
			return true;
		} else {
			window.location = "file:///C:/Users/mccrea_ka/Desktop/opes/index.html";
		}
	});
	const btnSignOut = document.getElementById("signOutButton");
	btnSignOut.addEventListener('click', e => {
		firebase.auth().signOut();
	});
}

//This is how I removed values. Keeping it here so I don't forget.
var removeValues = function() {
	var ref = firebase.database().ref();
	ref.on("value",function(snapshot) {
	for(var i=1;i<=160;i++) {
		ref.child(i).remove();
		}
	});
}