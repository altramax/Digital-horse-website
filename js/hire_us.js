const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const phoneNumber = document.getElementById("phone-number");
const email = document.getElementById("email");
const billing = document.getElementById("billing-address");
const rental = document.getElementById("rental-purpose");
const vehicle = document.getElementById("chooseVehicle");
const vehicleCount = document.getElementById("vehicle-count");
const startDate = document.getElementById("start-date");
const endDate = document.getElementById("end-date");
const pickupTime = document.getElementById("pickup-time");
const pickup = document.getElementById("pickup");
const dropOff = document.getElementById("dropoff");
const addInfo = document.getElementById("additional");
const successModal = document.getElementById("success-modal");
const failedModal = document.getElementById("failed-modal");
const overlay = document.getElementById("overlay");
const BtnSuccess = document.getElementById("success-button");
const BtnFailed = document.getElementById("Failed-button");

const firstAsterisk = document.getElementById("firstname-asterisk");
const lastAsterisk = document.getElementById("lastname-asterisk");
const phoneAsterisk = document.getElementById("phonenumber-asterisk");
const emailAsterisk = document.getElementById("email-asterisk");
const billingAsterisk = document.getElementById("billing-asterisk");
const rentalAsterisk = document.getElementById("rental-asterisk");
const vehicleAsterisk = document.getElementById("vehicle-asterisk");
const vehicleCountAsterisk = document.getElementById("vehicle-count-asterisk");
const startDateAsterisk = document.getElementById("startdate-asterisk");
const enddateAstrisk = document.getElementById("enddate-asterisk");
const pickupTimeAsterisk = document.getElementById("pickup-time-asterisk");
const pickupAsterisk = document.getElementById("pick-up-asterisk");
const dropoffAstrisk = document.getElementById("dropoff-asterisk");
const addinfoAsterisk = document.getElementById("additional-asterisk");

const submit = document.getElementById("submit");

// starting condition
function init() {
  firstName.value = "";
  lastName.value = "";
  phoneNumber.value = "";
  email.value = "";
  billing.value = "";
  rental.value = "";
  vehicle.value = "";
  vehicleCount.value = "";
  pickup.value = "";
  dropOff.value = "";
  addInfo.value = "";
  startDate.value = "";
  endDate.value = "";
  pickupTime.value = "";
}

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
asteriskColor(billing, billingAsterisk);
asteriskColor(pickup, pickupAsterisk);
asteriskColor(rental, rentalAsterisk);
asteriskColor(vehicle, vehicleAsterisk);
asteriskColor(pickup, pickupAsterisk);
asteriskColor(dropOff, dropoffAstrisk);
asteriskColor(addInfo, addinfoAsterisk);
asteriskColor(startDate, startDateAsterisk);
asteriskColor(endDate,enddateAstrisk);
asteriskColor(pickup, pickupTimeAsterisk);

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

  phoneNumber.addEventListener("input", function () {
    if (phoneNumber.value.length > 9 && phoneNumber.value.length < 15) {
      phoneAsterisk.style.color = "#00FF00";
    } else {
      phoneAsterisk.style.color = "#FF0000";
    }
  });
});

// Email validation
if (email.value?.includes("@")) {
  emailAsterisk.style.color = "#00FF00";
} else {
  emailAsterisk.style.color = "#FF0000";
}

//  vehicle count
vehicleCount.addEventListener("input", function (e) {
  e.target.value = e.target.value.replace(/[^\d]/g, "").trim();

  //   to change color
  vehicleCount.addEventListener("input", function () {
    if (vehicleCount.value.length > 0) {
      vehicleCountAsterisk.style.color = "#00FF00";
    } else {
      vehicleCountAsterisk.style.color = "#FF0000";
    }
  });
});



// // date
// const currentTime = setInterval(() => {
//   let time = new Date();
//   let currentHour = time.getHours();
//   let CurrentMonth = time.getMonth() + 1;
//   let CurrentDayinmonth = time.getDate();
//   let CurrentYear = time.getFullYear();
//   //   console.log( dayinmonth, month, year);

//  console.log(time > startDate.value);

// //   let startDay = startDate.value.split("-");
// //   console.log(startDay);
// //   let choosenStartDay = startDay[2];
// //   let choosenStartMonth = startDay[1];
// //   let choosenStartYear = startDay[0];
// //   console.log(choosenStartMonth, choosenStartDay, choosenStartYear);

// //   let endDay = endDate.value.split("-");
// //   console.log(endDay);
// //   let choosenEndDay = endDay[2];
// //   let choosenEndMonth = endDay[1];
// //   let choosenEndYear = endDay[0];
// //   console.log(choosenEndMonth, choosenEndDay, choosenEndYear);

// // //   validate start date 
// //   if (
// //     choosenStartDay < choosenEndDay &&
// //     choosenStartMonth <= choosenEndMonth &&
// //     choosenStartYear <= choosenEndDay
// //   ) {
// //   }



// }, 1000);

// To Submit
submit.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    firstName.value.length > 1 &&
    lastName.value.length > 1 &&
    phoneNumber.value.length > 10 &&
    phoneNumber.value.length < 15 &&
    email.value.includes("@") &&
    billing.value.length > 1 &&
    rental.value.length > 1 &&
    vehicle.length > 1 &&
    vehicleCount.value.length > 0 &&
    pickup.value.length > 1 &&
    dropOff.value.length > 1 &&
    addInfo.value.length > 1
  ) {
    // console.log(pickupTime.value);
    // console.log(endDate.value);
    // console.log(startDate.value);
    // console.log("checked out");
    successModal.classList.remove("hidden")
    overlay.classList.remove("hidden")
    init();
  } else {
    failedModal.classList.remove("hidden")
    overlay.classList.remove("hidden")
  }
});

BtnFailed.addEventListener("click",function(){
  failedModal.classList.add("hidden")
    overlay.classList.add("hidden")   
})

BtnSuccess.addEventListener("click",function(){
  successModal.classList.add("hidden")
    overlay.classList.add("hidden")   
    window.location.href = "../index.html"
})

