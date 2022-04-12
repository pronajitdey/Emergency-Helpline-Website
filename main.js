console.log("This is Alphas Emergency Helpline Website");

let btn = document.getElementsByTagName('button');
//console.log(btn);

// Btn click for police station
btn[0].addEventListener('click', () => {
  if (confirm("Dial 100       Or call to National Emergency Helpline")) {
    location.href = '../twilioClient/twilio.html';
  }
});

// Btn click for ambulance
btn[1].addEventListener('click', () => {
  if (confirm("Dial 102       Or call to National Emergency Helpline")) {
    location.href = '../twilioClient/twilio.html';
  }
});

// Btn click for fire station
btn[2].addEventListener('click', () => {
  if (confirm("Dial 101       Or call to National Emergency Helpline")) {
    location.href = '../twilioClient/twilio.html';
  }
});

// Btn click for women helpline center
btn[3].addEventListener('click', () => {
  if (confirm("Dial 1091        Or call to National Emergency Helpline")) {
    location.href = '../twilioClient/twilio.html';
  }
});

// Btn click for railway enquiry center
btn[4].addEventListener('click', () => {
  if (confirm("Dial 131       Or call to National Emergency Helpline")) {
    location.href = '../twilioClient/twilio.html';
  }
});

// Btn click for anti-ragging helpline center
btn[5].addEventListener('click', () => {
  if (confirm("Dial 1800 1805 522       Or call to National Emergency Helpline")) {
    location.href = '../twilioClient/twilio.html';
  }
});