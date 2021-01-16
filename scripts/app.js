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

// Check if the current time equals one of the hours in the planner using a function
// Run switch statement to add a class with background colour to the text area elements
var currentTime = function() {  
  var $timeSlice = $dateAndTime.slice(-5);
  var $time = $timeSlice.charAt(0) + $timeSlice.charAt(1);
  switch($time) {
    case "01": case "02": case "03": case "04": case "05": case "06": case "07": case "08":
      $("textarea").addClass("future");
      break;
    case "09":
      $(".text-box").not("#9am").addClass("future");
      $("#9am").addClass("present");
      break;
    case "10":
      $(".text-box").not("#10am").addClass("past")
      $("#10am").addClass("present");
      $("#11am, #12pm, #1pm, #2pm, #3pm, #4pm, #5pm").addClass("future");
      break;
    case "11":
      $(".text-box").not("#11am").addClass("past")
      $("#11am").addClass("present");
      $("#12pm, #1pm, #2pm, #3pm, #4pm, #5pm").addClass("future");
      break;
    case "12":
      $(".text-box").not("#12pm").addClass("past")
      $("#12pm").addClass("present");
      $("#1pm, #2pm, #3pm, #4pm, #5pm").addClass("future");
      break;
    case "13":
      $(".text-box").not("#1pm").addClass("past")
      $("#1pm").addClass("present");
      $("#2pm, #3pm, #4pm, #5pm").addClass("future");
      break;
    case "14":
      $(".text-box").not("#2pm").addClass("past")
      $("#2pm").addClass("present");
      $("#3pm, #4pm, #5pm").addClass("future");
      break;
    case "15":
      $(".text-box").not("#3pm").addClass("past")
      $("#3pm").addClass("present");
      $("#4pm, #5pm").addClass("future");
      break;
    case "16":
      $(".text-box").not("#4pm").addClass("past")
      $("#4pm").addClass("present");
      $("#5pm").addClass("future");
      break;
    case "17":
      $(".text-box").not("#5pm").addClass("past");
      $("#5pm").addClass("present");
      break;
    default:
      $("textarea").addClass("past");
  }
}
currentTime();