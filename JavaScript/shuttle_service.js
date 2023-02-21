const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const phoneNumber = document.getElementById("phone-number");
const email = document.getElementById("email");
const route = document.getElementById("route");
const pickup = document.getElementById("pickup");
const days = document.querySelectorAll(".checkbox");
const stopPoint = document.getElementById("stop-point");

const firstAsterisk = document.getElementById("firstname-asterisk");
const lastAsterisk = document.getElementById("lastname-asterisk");
const phoneAsterisk = document.getElementById("phonenumber-asterisk");
const emailAsterisk = document.getElementById("email-asterisk");
const routeAsterisk = document.getElementById("route-asterisk");
const pickupAsterisk = document.getElementById("pickup-asterisk");
const checkboxAsterisk = document.getElementById("chooseday-asterisk");
const stopPointAsterisk = document.getElementById("stoppoint-Asterisk");

const submit = document.getElementById("submit");

function init(){
    firstName.value = "";
    lastName.value = "";
    phoneNumber.value = "";
    email.value = "";
    route.value = "";
    pickup.value = "";
    days.forEach(day => day.checked = false); 
    stopPoint.value = "";
}
init()

// to change asterisk color
function asteriskColor(element, asteriskName) {
  element.addEventListener("input", function () {
    if (element.value.length > 0) {
      asteriskName.style.color = "#00FF00";
    } else {
      asteriskName.style.color = "#FF0000";
    }
  });
}

asteriskColor(firstName, firstAsterisk);
asteriskColor(lastName, lastAsterisk);
asteriskColor(route, routeAsterisk);
asteriskColor(pickup, pickupAsterisk);
asteriskColor(stopPoint, stopPointAsterisk);

// change Email Asterisk color
email.addEventListener("input", function () {
  if (email.value?.includes("@")) {
    emailAsterisk.style.color = "#00FF00";
  } else {
    emailAsterisk.style.color = "#FF0000";
  }
});

// phone Number validation
phoneNumber.addEventListener("input", function (e) {
  e.target.value = e.target.value.replace(/[^\d]/g, "").trim();

//   to change color 
  phoneNumber.addEventListener("input", function () {
    
    
    if ( phoneNumber.value.length > 0 && phoneNumber.value.length < 15 ) {
      phoneAsterisk.style.color = "#00FF00";
    } else {
     phoneAsterisk.style.color = "#FF0000";
    }
  });

//   to validate
 
  
});

// to get the selected days from the checkboxes and change asterisk color
let daysChoosen = [];
days.forEach((day) => {
  day.addEventListener("change", function (e) {
    if (e.target.checked) {
      daysChoosen.push(day.name);
      checkboxAsterisk.style.color = "#00FF00";
    } else {
      for (let da of daysChoosen) {
        if (da === day.name) {
          let count = daysChoosen.indexOf(da);
          daysChoosen = daysChoosen.filter((ay) => ay !== daysChoosen[count]);
          daysChoosen.length === 0
            ? (checkboxAsterisk.style.color = "#FF0000")
            : "";
        }
      }
    }
  });
});

// To Submit
submit.addEventListener("click", function (e) {
    e.preventDefault();
  if (
    firstName.value.length > 0 &&
    lastName.value.length > 0 &&
    phoneNumber.value.length > 0 &&
    email.value.includes("@") &&
    route.value.length > 0 &&
    pickup.value.length > 0 &&
    daysChoosen.length > 0 &&
    stopPoint.value.length > 0
  ) {
    
    console.log("checked out");
    init();
  }
});
