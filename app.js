'use strict'
// ...........................................................
// GLOBALS
var users = [];
var chores = [];
var currentDate = new Date();

var form = document.getElementById('newChore');

// ...........................................................
// CONSTRUCTOR FUNCTIONS
// 
// Adds users details into global user array
function AddUser (name, pin){
  this.name = name;
  this.pin = pin;
  users.push(this);
}
// Adds chores details into global user array
function AddChore (name, startDate, frequency){  
  this.name = name;
  // name of the chore
  this.startDate = startDate;
  // startDate defined as days from current date.
  this.frequency = frequency;
  // frequency defined as every X day from start day ex: startDate + 1day = scheduled day / chore occurs every 1 day after start date.
  chores.push(this);
}
// ...........................................................
// RENDER
//
// AddChore.prototype.renderChoreList=function(){
//   var choreUL = document.getElementById('choreList');
//   var choreLI = document.createElement('li');
//   choreLI.textContent = chores;
//   choreUL.appendChild(choreLI);
// }
// renderChoreList();
// 
// 
// ...........................................................
// FORMS
// 
getElementById('choreList')


// ...........................................................
// USERS
new AddUser('Klace', 666);
new AddUser('Joelle', 555);

// ...........................................................
// CHORES
new AddChore ('Sweep', 0, 1);
new AddChore ('Dishes', 0, 1);
new AddChore ('Laundry', 0, 7);
new AddChore ('Vacuum', 0, 3);

// ...........................................................
// TEST LOGS
console.log(new Date());
console.log(chores);
console.log(chores[3]);
// console.log(users);
// ...........................................................
// ...........................................................
// ...........................................................
// ...........................................................
// ...........................................................
// ...........................................................


// ...........................................................
// EVENT HANDLERS

function newChoreSubmit(event){
  // handles when user clicks submit on newChore form
  event.preventDefault();
  var name = (event.target.name.value);
  var frequency = parseInt(event.target.frequency.value);
  var startDate = event.target.startDate.value;
  var newChore = new AddChore(name, startDate, frequency);
  console.log(newChore);
  
}
// function handleSubmit(event){
//   event.preventDefault
//   var name = event.target.name.value;
//   var pin = parseInt(event.target.pin.value);
//   var newUser = new AddUser(name,pin);
//   console.log(newUser);
// }
// ...........................................................
// EVENT LISTENERS
// 
form.addEventListener('submit', newChoreSubmit);
// form.addEventListener('submit', handleSubmit);
// ...........................................................