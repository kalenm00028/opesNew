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
		} else {
			userAuth();
		}
	});
}

var userAuth = function() {
	const txtEmail = document.getElementById('emailForm');
	const txtPassword = document.getElementById('passForm');
	const btnLogin = document.getElementById('btnLogin');
	btnLogin.addEventListener('click', e => {
		const email = txtEmail.value;
		const pass = txtPassword.value;
		const auth = firebase.auth();
		const promise = auth.signInWithEmailAndPassword(email, pass);
		promise.catch(e => console.log(e.message));
	});
}

var signIn = function() {
	const txtEmail = document.getElementById('emailForm');
	const txtPassword = document.getElementById('passForm');
	const btnLogin = document.getElementById('btnLogin');
	const email = txtEmail.value;
	const pass = txtPassword.value;
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