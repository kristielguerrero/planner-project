moment().format("dddd, MMMM Do");
$("#currentDay").text(moment().format("dddd, MMMM Do"));

var timeBlockList = $(".time-block");
console.log(timeBlockList);

timeBlockList.each(function () {
  console.log($(this).attr("id"));
  var timeBlockHour = $(this).attr("id");
  var currentTime = moment().hour();
  if (timeBlockHour < currentTime) {
    console.log("less than current time");
    $(this).children("textarea").addClass("past");
  } else if (timeBlockHour > currentTime) {
    console.log("greater than current time");
    $(this).children("textarea").addClass("present");
  } else {
    console.log("is equal");
    $(this).children("textarea").addClass("future");
  }
});

console.log(moment().hour());
