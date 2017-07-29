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

$(".submit").on("click", function(storeInput){
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
