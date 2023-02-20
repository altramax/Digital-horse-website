const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const phoneNumber = document.getElementById("phone-number");
const email = document.getElementById("email");
const route = document.getElementById("route");
const pickup = document.getElementById("pickup");
const days = document.querySelectorAll("checkbox");
const stopPoint = document.getElementById("stop-point");

const firstAsterisk = document.getElementById("firstname-asterisk");
const lastAsterisk = document.getElementById("lastname-asterisk");
const phoneAsterisk = document.getElementById("phonenumber-asterisk");
const emailAsterisk = document.getElementById("email-asterisk");
const routeAsterisk = document.getElementById("route-asterisk");
const pickupAsterisk = document.getElementById("pickup-asterisk");
const chooseDayAsterisk = document.getElementById("chooseday-asterisk");
const stopPointAsterisk = document.getElementById("stoppoint-Asterisk");

const submit = document.getElementById("submit");

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
asteriskColor(phoneNumber, phoneAsterisk);
asteriskColor(route, routeAsterisk);
asteriskColor(pickup, pickupAsterisk);
asteriskColor(stopPoint, stopPointAsterisk);

email.addEventListener("input", function () {
    if (email.value?.includes("@")){
      emailAsterisk.style.color = "#00FF00";
    } else {
      emailAsterisk.style.color = "#FF0000";
    }
  });

  phoneNumber.addEventListener("input", function(){
    let morp = phoneNumber.value.slice(1)
    

    // phoneNumber.value ="+234" + morp;
    // console.log(morp);



  })






// firstName.addEventListener("input", function(e){

//     if(firstName.value.length > 0){
//         firstAsterisk.style.color = "#00FF00"
//     }else{
//         firstAsterisk.style.color = "#FF0000"
//     }
// })

// submit.addEventListener("click", function(){
//     // asterisks verification
//     if(firstName.value){
//       firstAsterisk.style.color = "#00FF00";
//     }

// })

//  function sub (){

//      form.action ="https://formsubmit.co/izyyope@gmail.com";
//  }

// submit.addEventListener('click', function(e){

//     e.preventDefault();

// })
