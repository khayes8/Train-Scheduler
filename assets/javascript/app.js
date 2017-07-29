// Initialize Firebase
var config = {
  apiKey: "AIzaSyAcyc27GhjPkN8no1DCsKRHsElxiVOuadA",
  authDomain: "train-scheduler-e13cc.firebaseapp.com",
  databaseURL: "https://train-scheduler-e13cc.firebaseio.com",
  projectId: "train-scheduler-e13cc",
  storageBucket: "train-scheduler-e13cc.appspot.com",
  messagingSenderId: "458574691219"
};
firebase.initializeApp(config);

var database = firebase.database();

var trainTime = "";
var destination = "";
var frequency = 0;
var nextArrival = "";
var minutesAway = 0;

// function storeInput (){

// });

$(".submit").on("click", function(){
event.preventDefault();
// console.log("hi");
trainTime = $("#trainInput").val().trim();
destination = $("#destinationInput").val().trim();
frequency = $("#frequencyInput").val().trim();
nextArrival = $("#nextarrivalInput").val().trim();
minutesAway = $("#minutesawayInput").val().trim();


console.log(trainTime);
console.log(destination);
console.log(frequency);
console.log(nextArrival);
console.log(minutesAway);

database.ref().push({
traintime: trainTime,
destination: destination,
frequency: frequency,
nextarrival: nextArrival,
minutesaway: minutesAway,
dateAdded: firebase.database.ServerValue.TIMESTAMP
});

});



database.ref().on("child_added", function(childSnapshot){
    
// Log everything that’s coming out of snapshot


console.log(childSnapshot.val().traintime);
console.log(childSnapshot.val().destination);
console.log(childSnapshot.val().frequency);
console.log(childSnapshot.val().nextarrival);
console.log(childSnapshot.val().minutesaway);

// $(“#full-member-list”).append(“<div class=‘well’><span id= ‘name’>”

// childSnapshot.val().name +
// “</span><span id=‘email’> ” +  childSnapshot.val().email +
// “</span><span id=‘age’> ” + childSnapshot.val().age +
// “</span><span id=‘comment’> ” + childSnapshot.val().comment +“</span></div>“;
});

// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot) {
console.log(childSnapshot.val());

// Store everything into a variable.
var tTime = childSnapshot.val().traintime;
var tDst = childSnapshot.val().destination;
var tFrq = childSnapshot.val().frequency;
var tRt = childSnapshot.val().nextarrival;
var tmin = childSnapshot.val().minutesaway;

// Employee Info
console.log(tTime);
console.log(tDst);
console.log(tFrq);
console.log(tRt);

// Prettify the employee start
// var empStartPretty = moment.unix(empStart).format("MM/DD/YY");
// // Calculate the months worked using hardcore math
// // To calculate the months worked
// var empMonths = moment().diff(moment.unix(empStart, "X"), "months");
// console.log(empMonths);
// // Calculate the total billed rate
// var empBilled = empMonths * empRate;
// console.log(empBilled);
// Add each train's data into the table
$("tbody").append("<tr> <td>" + tTime + "</td> <td>" + tDst + "</td> <td>" +
tFrq + "</td> <td>" + tRt + "</td> <td>" + tmin + "</td> </tr>");
});
