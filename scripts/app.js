// Display current date and time
var $dateAndTime = luxon.DateTime.local().toLocaleString({ 
  weekday: 'long', month: 'long', day: '2-digit', hour: '2-digit', minute: '2-digit' });

$('#currentDay').text(function() {
  return $dateAndTime;
})

// Functions to set and get local storage
// 9am time slot
$("#nineStorage").click(function() {
  var $nineContent = $('#9am').val();
  localStorage.setItem("nine", $nineContent);
})

var retrieveStorage = function() {
  $('#9am').val(localStorage.getItem("nine"));
}
retrieveStorage();

// 10am time slot
$("#tenStorage").click(function() {
  var $tenContent = $('#10am').val();
  localStorage.setItem("ten", $tenContent);
})

var retrieveStorage = function() {
  $('#10am').val(localStorage.getItem("ten"));
}
retrieveStorage();

// 11am time slot
$("#elevenStorage").click(function() {
  var $elevenContent = $('#11am').val();
  localStorage.setItem("eleven", $elevenContent);
})

var retrieveStorage = function() {
  $('#11am').val(localStorage.getItem("eleven"));
}
retrieveStorage();

// 12pm time slot
$("#twelveStorage").click(function() {
  var $twelveContent = $('#12pm').val();
  localStorage.setItem("twelve", $twelveContent);
})

var retrieveStorage = function() {
  $('#12pm').val(localStorage.getItem("twelve"));
}
retrieveStorage();

// 1pm time slot
$("#oneStorage").click(function() {
  var $oneContent = $('#1pm').val();
  localStorage.setItem("one", $oneContent);
})

var retrieveStorage = function() {
  $('#1pm').val(localStorage.getItem("one"));
}
retrieveStorage();

// 2pm time slot
$("#twoStorage").click(function() {
  var $twoContent = $('#2pm').val();
  localStorage.setItem("two", $twoContent);
})

var retrieveStorage = function() {
  $('#2pm').val(localStorage.getItem("two"));
}
retrieveStorage();

// 3pm time slot
$("#threeStorage").click(function() {
  var $threeContent = $('#3pm').val();
  localStorage.setItem("three", $threeContent);
})

var retrieveStorage = function() {
  $('#3pm').val(localStorage.getItem("three"));
}
retrieveStorage();

// 4pm time slot
$("#fourStorage").click(function() {
  var $fourContent = $('#4pm').val();
  localStorage.setItem("four", $fourContent);
})

var retrieveStorage = function() {
  $('#4pm').val(localStorage.getItem("four"));
}
retrieveStorage();

// 5pm time slot
$("#fiveStorage").click(function() {
  var $fiveContent = $('#5pm').val();
  localStorage.setItem("five", $fiveContent);
})

var retrieveStorage = function() {
  $('#5pm').val(localStorage.getItem("five"));
}
retrieveStorage();

// Check if the current time equals one of the hours in the planner
var currentTime = function() {  
  var $timeSlice = $dateAndTime.slice(-5);
  var $time = $timeSlice.charAt(0) + $timeSlice.charAt(1);
  switch($time) {
    case "09":
      $("#9am").css("background-color", "#BC243C");
      break;
    case "10":
      $("#10am").css("background-color", "#BC243C");
      break;
    case "11":
      $("#11am").css("background-color", "#BC243C");
      break;
    case "12":
      $("#12pm").css("background-color", "#BC243C");
      break;
    case "13":
      $("#1pm").css("background-color", "#BC243C");
      break;
    case "14":
      $("#2pm").css("background-color", "#BC243C");
      break;
    case "15":
      $("#3pm").css("background-color", "#BC243C");
      break;
    case "16":
      $("#4pm").css("background-color", "#BC243C");
      break;
    case "17":
      $("#5pm").css("background-color", "#BC243C");
      break;
  }
}
currentTime();



// var currentTime = function() {  
//   var $time = $dateAndTime.slice(-5);
//   if ($time.charAt(0) === '0' && $time.charAt(1) === '9') {
//     $("#9am").css("background-color", "#BC243C");
//   } else if ($time.charAt(0) === '1' && $time.charAt(1) === '0') {
//     $("#10am").css("background-color", "#BC243C");
//   } else if ($time.charAt(0) === '1' && $time.charAt(1) === '1') {
//     $("#11am").css("background-color", "#BC243C");
//   } else if ($time.charAt(0) === '1' && $time.charAt(1) === '2') {
//     $("#12pm").css("background-color", "#BC243C");
//   } else if ($time.charAt(0) === '1' && $time.charAt(1) === '3') {
//     $("#1pm").css("background-color", "#BC243C");
//   } else if ($time.charAt(0) === '1' && $time.charAt(1) === '4') {
//     $("#2pm").css("background-color", "#BC243C");
//   } else if ($time.charAt(0) === '1' && $time.charAt(1) === '5') {
//     $("#3pm").css("background-color", "#BC243C");
//   } else if ($time.charAt(0) === '1' && $time.charAt(1) === '6') {
//     $("#4pm").css("background-color", "#BC243C");
//   } else if ($time.charAt(0) === '2' && $time.charAt(1) === '2') {
//     $("#5pm").css("background-color", "#BC243C");
//   }
// }
// currentTime();