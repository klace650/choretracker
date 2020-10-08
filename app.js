'use strict'
// ...........................................................
// GLOBALS
let userList = [];
let choreList = [];
let date = new Date();
let day = date.getDay();

// 0 SUNDAY
// 1 MONDAY
// 2 TUESDAY
// 3 WEDNESDAY
// 4 THURSDAY
// 5 FRIDAY
// 6 SATURDAY

// USERS
// 
let klace = new User('Klace');
let joelle = new User('Joelle');

// ...........................................................
// CHORES

let sweep = new Chore('Sweep', 0, 30, 0);
let dishes = new Chore('Dishes', 0, 30, 0);
let vacuum = new Chore('Vacuum', 5, 20, 0);
let unloadDish = new Chore('Unload Dishwasher', 1, 15, 0);
let loadDish = new Chore('Load Dishwasher', 1, 15, 0);
let tidyKitchen = new Chore('Tidy Kitchen', 0, 20, 0);
let laundry = new Chore ('Laundry', 6, 90, 0);
let cleanKitchen = new Chore('Clean Kitchen', 4, 30, 0);
let cleanFridge = new Chore('Clean Out Fridge', 7, 20, 0);
let takeCompost = new Chore('Take out Compost', 7, 10, 0);
let takeTrash = new Chore('Take out Trash', 7, 20, 0);
let curbCompost = new Chore ('Put out Compost', 7, 10, 0);
let curbRecycle = new Chore ('Put out Recycling', 14, 10, 0);

// ...........................................................
// CONSTRUCTOR FUNCTIONS
function User(name){
  this.name = name;
  userList.push(this);
}
// 
function Chore(name, repeats, duration, starts){
  this.name = name;
  this.repeats = repeats;
  this.duration = duration; 
  this.starts = starts;
  choreList.push(this);
};
// ...........................................................
// 
function assignChores(){
  
  let assignedUser = /* NEEDS TO ITERATE */
  let assignChore = choreList[0].name;
  
  let userChoreList = 
  console.log(assignChore , assignedUser);
  // 
}
assignChores();

// ...........................................................
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////


// TEST LOGS
console.log()
// console.log(choreList[5]);
// Displays individual chore details at index
// console.log(day);
// Displays number of current date

// ...........................................................
// ...........................................................
// ...........................................................
// ...........................................................
// ...........................................................


// ...........................................................
// EVENT HANDLERS
//
// function newChoreSubmit(event){
  //   // handles when user clicks submit on newChore form
  //   event.preventDefault();
  //   var name = (event.target.name.value);
  //   var frequency = parseInt(event.target.frequency.value);
  //   var startDate = event.target.startDate.value;
  //   var newChore = new AddChore(name,startDate,frequency);
  //   console.log(newChore);
  
  // }
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
    // form.addEventListener('submit', newChoreSubmit);
    // form.addEventListener('submit', handleSubmit);
    // ...........................................................