var name1=document.getElementById("name1");
var hotel1=document.getElementById("hotel1");
var email1=document.getElementById("email1");
var ngo1=document.getElementById("ngo1");
var capacity1=document.getElementById("capacity1");
var loaction1=document.getElementById("location1");
var submitbtn=document.getElementById("submitbtn");


const database = firebase.database();


submitbtn.addEventListener('click',(e) => {
	e.preventDefault();
	database.ref('/Food Donation/'+name1.value).set({
		hotel : hotel1.value,
		email : email1.value,
		NGO :ngo1.value,
		capacity: capacity1.value,
		location : location1.value

		});
	
});