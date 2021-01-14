

// Display current date and time
var $dateAndTime = luxon.DateTime.local().toLocaleString({ 
  weekday: 'long', month: 'long', day: '2-digit', hour: '2-digit', minute: '2-digit' });

$('#currentDay').text(function() {
  return $dateAndTime;
})

// Functions to set and get local storage
$("#nineStorage").click(function() {
  var $nineConent = $('#9am').val();
  localStorage.setItem("nine", $nineConent);
})

var retrieveStorage = function() {
  $('#9am').val(localStorage.getItem("nine"));
}

retrieveStorage();

// var nineAM = document.getElementById('9am');
// var tenAM = document.getElementById('10am');
// var elevenAM = document.getElementById('11am');
// var twelveAM = document.getElementById('12pm');
// var onePM = document.getElementById('1pm');
// var twoPM = document.getElementById('2pm');
// var threePM = document.getElementById('3pm');
// var fourPM = document.getElementById('4pm');
// var fivePM = document.getElementById('5pm');

// var nineStorage = document.getElementById('nineStorage');
// nineStorage.addEventListener("click", function() {
//   var nineContent = nineAM.value;  
//   localStorage.setItem("nine", nineContent);
// });


// var tenStorage = document.getElementById('tenStorage');
// var getTen = function() {
//   var tenContent = tenAM.textContent;
//   localStorage.setItem("ten", tenContent);
// }
// tenStorage.addEventListener("click", getTen);

// var elevenStorage = document.getElementById('elevenStorage');
// var getEleven = function() {
//   var elevenContent = elevenAM.textContent;
//   localStorage.setItem("eleven", elevenContent);
// }
// elevenStorage.addEventListener("click", getEleven);

// var twelveStorage = document.getElementById('twelveStorage');
// var getTwelve = function() {
//   var twelveContent = twelveAM.textContent;
//   localStorage.setItem("twelve", twelveContent);
// }
// twelveStorage.addEventListener("click", getTwelve);

// var oneStorage = document.getElementById('oneStorage');
// var getOne = function() {
//   var oneContent = oneAM.textContent;
//   localStorage.setItem("one", oneContent);
// }
// oneStorage.addEventListener("click", getOne);

// var twoStorage = document.getElementById('twoStorage');
// var getTwo = function() {
//   var twoContent = twoAM.textContent;
//   localStorage.setItem("two", twoContent);
// }
// twoStorage.addEventListener("click", getTwo);

// var threeStorage = document.getElementById('threeStorage');
// var getThree = function() {
//   var threeContent = threeAM.textContent;
//   localStorage.setItem("three", threeContent);
// }
// threeStorage.addEventListener("click", getThree);

// var fourStorage = document.getElementById('fourStorage');
// var getFour = function() {
//   var fourContent = fourAM.textContent;
//   localStorage.setItem("four", fourContent);
// }
// fourStorage.addEventListener("click", getFour);

// var fiveStorage = document.getElementById('fiveStorage');
// var getFive = function() {
//   var fiveContent = fiveAM.textContent;
//   localStorage.setItem("five", fiveContent);
// }
// fiveStorage.addEventListener("click", getFive);