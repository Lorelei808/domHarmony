/*Hey Prepsters! Let's help Ronald McDonald find true love by revising his online dating profile!*/

//1. In the nav element, target the span element with the id of 'matCount' and change the number from 0 to 11.

var matchElem = document.getElementById("matCount");matchElem.innerHTML = 11;

//2. In the nav element, target the span element with the id of 'msgCount' and change the number from 0 to 23.

var messageElem = document.getElementById("msgCount");messageElem.innerHTML = 23;


//3. In the div id data section, target the div element with the id of 'fullname' and change Full Name to Ronald McDonald.

var nameElem = document.getElementById("fullname"); nameElem.innerHTML = 'Ronald McDonald';
data.appendChild(nameElem);

//4. In the div id data section, target the div element with the id of 'age' and change Age to 63 Years Old.

var ageElem = document.getElementById("age"); ageElem.innerHTML = 63;
data.appendChild(ageElem);

//5. In the div id data section, create a div with an id of job and give it the following information: Clown and Restauranteur.

var jobBox = document.createElement('div'); 
jobBox.id = 'job'; 
jobBox.innerHTML = 'Clown and Restauranteur';
data.appendChild(jobBox);

//6. In the div id data section, create a div with an id of hobbies and give it the following information: Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.

var hobbiesBox = document.createElement('div');
hobbiesBox.id = 'hobbies';
hobbiesBox.innerHTML = 'Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.';
data.appendChild(hobbiesBox);

//7. In the div id data section, create a div with an id of location and give it the following information: Honolulu, HI.

var locationBox = document.createElement('div');
locationBox.id = 'location';
locationBox.innerHTML = 'Honolulu, HI';
data.appendChild(locationBox);

//8. In the div id data section, create a div with an id of wants and give it the following information: Looking for a Mrs. McDonald.

var mrsRight = document.createElement('div');
mrsRight.id = 'wants';
mrsRight.innerHTML = 'Looking for a Mrs. McDonald!?!?!'
data.appendChild(mrsRight);


//9. In the div id profile section, create a paragraph element with an id of pro2 and create a your own profile for Ronald (at least 2 sentences).

var rmProfile = document.createElement('div');
rmProfile.id = 'pro2';
rmProfile.innerHTML = "Yeah, I'm a ginger with HUUUUGE ginger feet. I'm no Fred Estair, but I'm light on my feet. Come take a chance with me, and dance with me!";
profile.appendChild(rmProfile);

//10. In the div id matches section, target the first div element with the class name of firstName and change Name to Wendy.

var prospectOne = document.getElementsByClassName("firstName");
prospectOne[0].innerHTML = 'Wendy';

//11. In the div id matches section, target the first div element with the class name of otherAge and change Age to 48.

var prospectAge = document.getElementsByClassName('otherAge');
prospectAge[0].innerHTML = 48;

//12. In the div id matches section, target the first div element with the class name of status and change Status to Single Mother.

var prospectStatus = document.getElementsByClassName('status');
prospectStatus[0].innerHTML = 'Single Mother';

//13. In the div id matches section, target the second div element with the class name of firstName and change Name to Peko Chan.

var prospectName2 = document.getElementsByClassName('firstName');
prospectName2[1].innerHTML = 'Peko Chan';

//14. In the div id matches section, target the second div element with the class name of otherAge and change Age to 68.

var prospectAge2 = document.getElementsByClassName('otherAge');
prospectAge2[1].innerHTML = 68;

 //Final Boss Create your own profile into the page:
 //change image to match your profile
 //div with class name of firstName
 //div with class name of otherAge
 //div with class name of status
 //div with class anem of Motto

 




