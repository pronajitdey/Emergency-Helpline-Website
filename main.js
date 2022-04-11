console.log("hello");

let btn = document.getElementsByTagName('button');
console.log(btn);

// Object for containing helpline numbers
let helplineNumber = {
  police: 100,
  ambulance: 102,
  fire: 101,
  women: 1091,
  railway: 131,
  antiragging: 18001805522
}

// Btn click for police station
btn[0].addEventListener('click', () => {
  alert("You are calling to Police Station");
  location.href = '../twilioClient/twilio.html';
});

// Btn click for ambulance
btn[1].addEventListener('click', () => {
  alert("You are calling for Ambulance");
});

btn[2].addEventListener('click', () => {
  alert("You are calling to Fire Station");
});

btn[3].addEventListener('click', () => {
  alert("You are calling to Women Helpline Center");
});

btn[4].addEventListener('click', () => {
  alert("You are calling to Railway Enquiry Center");
});

btn[5].addEventListener('click', () => {
  alert("You are calling to Antiragging Helpline Center");
});