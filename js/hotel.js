var name1=document.getElementById("name1");
var phone1=document.getElementById("phone1");
var email1=document.getElementById("email1");
var room=document.getElementById("room");
var location1=document.getElementById("location1");
var btn1=document.getElementById("btn1");


const database = firebase.database();


btn1.addEventListener('click',(e) => {
	e.preventDefault();
	database.ref('/Hotels as Quarantine Centers/'+name1.value).set({
		phone : phone1.value,
		email : email1.value,
		rooms :room.value,
		location : location1.value

		});
	
});