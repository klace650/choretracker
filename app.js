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
// 7 EVERYDAY

// - Displays number of current date
// console.log(day);

// USERS
// 
let klace = new User('Klace');
let joelle = new User('Joelle');

// CHORES
// 
// ------------might need to parse
new Chore('sweep');
new Chore('dishes');
new Chore('vacuum');
new Chore('unload');
new Chore('load');
new Chore('tidy');
new Chore ('laundry');
new Chore('kitchen');
new Chore('fridge');
new Chore('compost');
new Chore('landfill');
new Chore ('recycling');
new Chore ('curb');

// ...........................................................
// CONSTRUCTOR FUNCTIONS

function User(name){
  this.name = name;
  userList.push(this);
};
function Chore(name, des, start, doEvery){
  this.name = name;
  this.des = des;
  this.start = start;
  this.doEvery = doEvery;
  choreList.push(this);
  $('#choreList').append(`<li>${this.name}</li>`);
};
///////////////////////////////////////////////////////////////
// WORK SPACE WORK SPACE WORK SPACE WORK SPACE WORK SPACE
  $('li').append(`<input type="checkbox" id="${this.name}box">`);


///////////////////////////////////////////////////////////////
// ...........................................................
// EVENT HANDLERS

document.getElementById('submit').addEventListener('click', addChore);

function addChore (event){
  event.preventDefault();
  let input = choreName.value
  console.log(input);
}




// ...........................................................
// EVENT LISTENERS
// 


// ...........................................................
// ...........................................................
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////



// ...........................................................
// ...........................................................
// ...........................................................
// ...........................................................
// ...........................................................


    