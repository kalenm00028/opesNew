var config = {
	    apiKey: //removed
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
			//window.location = "file:///C:/Users/mccrea_ka/Desktop/opes/index.html";
			return true;
		}
	});
	const btnSignOut = document.getElementById("signOutButton");
	btnSignOut.addEventListener('click', e => {
		firebase.auth().signOut();
	});
}

var displayResources = function(){

	var kevinDiv = document.getElementById('kevin');

	var resourceRef = firebase.database().ref().child("Kevin Resources");
	resourceRef.on('value', function(snapshot){

		var table = document.createElement('table');
		
		//var list = document.createElement('ul');
		snapshot.forEach(function(childSnapshot) {
		    var childKey = childSnapshot.key;
		    var childData = childSnapshot.val();
		    console.log(childData);

		    
		    var tr = document.createElement('tr');   

		    var tag_td = document.createElement('td');
		    //var category_td = document.createElement('td');
		    var education_td = document.createElement('td');
		    var languages_td = document.createElement('td');
		    var profession_td = document.createElement('td');
		    var regions_td = document.createElement('td');
		    var skillset_td = document.createElement('td');

		    var text1 = document.createTextNode(childData.tag);
		    //var text2 = document.createTextNode('Text2');
		    var text3 = document.createTextNode(childData.education);
		    var text4 = document.createTextNode(childData.languages);
		    var text5 = document.createTextNode(childData.profession);
		    var text6 = document.createTextNode(childData.regions);
		    var text7 = document.createTextNode(childData.skillset);
			

		    tag_td.appendChild(text1);
		    //category_td.appendChild(text2);
		    education_td.appendChild(text3);
		    languages_td.appendChild(text4);
		    profession_td.appendChild(text5);
		    regions_td.appendChild(text6);
		    skillset_td.appendChild(text7);

		    tr.appendChild(tag_td);
		    //tr.appendChild(td2);
		    tr.appendChild(education_td);
		    tr.appendChild(languages_td);
		    tr.appendChild(profession_td);
		    tr.appendChild(regions_td);
		    tr.appendChild(skillset_td);

		    table.append(tr);
		    
	  	});

		// Add the contents of Things:
		kevinDiv.appendChild(table);

	});

}
