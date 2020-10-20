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
// let wild = new User ('Wild')
// let test = new User('Test')

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

// let sweep = new Chore('Sweep', 0, 30, 0);
// let dishes = new Chore('Dishes', 0, 30, 0);
// let vacuum = new Chore('Vacuum', 5, 20, 0);
// let unloadDish = new Chore('Unload Dishwasher', 1, 15, 0);
// let loadDish = new Chore('Load Dishwasher', 1, 15, 0);
// let tidyKitchen = new Chore('Tidy Kitchen', 0, 20, 0);
// let laundry = new Chore ('Laundry', 6, 90, 0);
// let cleanKitchen = new Chore('Clean Kitchen', 4, 30, 0);
// let cleanFridge = new Chore('Clean Out Fridge', 7, 20, 0);
// let takeCompost = new Chore('Take out Compost', 7, 10, 0);
// let takeTrash = new Chore('Take out Trash', 7, 20, 0);
// let curbCompost = new Chore ('Put out Compost', 7, 10, 0);
// let curbRecycle = new Chore ('Put out Recycling', 14, 10, 0);

///////////////////////////////////////////////////////////////
// WORK SPACE WORK SPACE WORK SPACE WORK SPACE WORK SPACE

choreList.forEach(item => {
  $('li').append(pickUser(name));
});

function pickUser(){
  let x = Math.floor(Math.random() * userList.length);
  console.log(userList[x]);
};
pickUser();










// function sortChores (){
//   // ORDERS DURATIONS OF CHORES BY LOWEST TO HIGHEST
//   let unsorted = [];
//   choreList.forEach( chore => {
//     unsorted.push(chore.duration);
//   });
//   let sorted = unsorted.sort();
//   return sorted;
// }
// 
///////////////////////////////////////////////////////////////
// ...........................................................
// CONSTRUCTOR FUNCTIONS

function User(name){
  this.name = name;
  userList.push(this);
}
function Chore(name, repeats, duration, starts){
  this.name = name;
  this.repeats = repeats;
  this.duration = duration; 
  this.starts = starts;
  choreList.push(this);
  $('#choreList').append(`<li>${this.name}</li>`);
};

// ...........................................................
// EVENT HANDLERS
//
$('#submit').on('click', function(e){
  e.preventDefault();
  console.log('yeet');
});
// ...........................................................
// EVENT LISTENERS
// 


// ...........................................................
// ...........................................................
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////



// TEST LOGS

// - Logs the duration of all chore times.
// console.log(assignChores());

// - Displays individual chore details at index
// console.log(choreList[5]);

// - Displays number of current date
// console.log(day);

// ...........................................................
// ...........................................................
// ...........................................................
// ...........................................................
// ...........................................................


    