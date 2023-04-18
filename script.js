var fullName = prompt('Please enter your full name:');
var userName = prompt('Please enter your username:');
var genderConfirm = confirm("What is your gender?\nPress OK if you are Male\nCancel if Female");
var gender;
if (genderConfirm){
	alert('Your Profile gender is set to MALE');
	gender = "M";
} else {
	alert('Your Profile gender is set to FEMALE');
	gender = "F";
}
var description = prompt('Please type a brief description of yourself');
var birthYear = prompt('Please enter your Birth Year');
var profilePicture = confirm("Do you want to use a custom profile picture?");
if (profilePicture){
	var profileImage = prompt('Please enter the file name of the picture. (Ex. wow.jpg)');
	if (profileImage){
		alert('Profile picture has been updated');
	}
} else {
	alert('No image has been set');
	profileImage = "prof.png";
}

var fName = document.getElementById('fname');
fName.textContent = fullName;
var sex = document.getElementById('gender');
sex.textContent = gender;
var username = document.getElementById('username');
username.textContent = userName;
var desc = document.getElementById('desc');
desc.textContent = description;
var year = document.getElementById('year');
if (isNaN(birthYear) || birthYear == null){
	year.textContent = "NaN";
} else {
	year.textContent = birthYear;
}
var age = document.getElementById('age');
var currentYear = new Date().getFullYear();
var yearDiff = currentYear - birthYear;
if (isNaN(birthYear) || birthYear == null){
	age.textContent = "NaN";
} else {
	age.textContent = yearDiff;
}
var img = document.getElementById('ppic');
img.src = profileImage;