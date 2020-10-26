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
new User('Klace');
new User('Joelle');
new User('Guest');
new User('Wild');

// CHORES
// 
// ------------might need to parse
new Chore('sweep',[]);
new Chore('dishes',[]);
new Chore('vacuum',[]);
new Chore('unload',[]);
new Chore('load',[]);
new Chore('tidy',[]);
new Chore ('laundry',[]);
new Chore('kitchen',[]);
new Chore('fridge',[]);
new Chore('compost',[]);
new Chore('landfill',[]);
new Chore ('recycling',[]);
new Chore ('curb',[]);

// ...........................................................
// CONSTRUCTOR FUNCTIONS

function User(name, myChores){
  this.name = name;
  this.myChores = myChores;
  userList.push(this);
};
function Chore(name, assigned){
  this.name = name;
  this.assigned = [];

  choreList.push(this);

// Appends a new li item after each instantiation of new Chore.
  $('#choreList').append(`<li>${this.name}</li>`);

// Appends the checkbox at the end of the chore name.
  $('li').last().append(`<input type="checkbox" id=bibs>`);

};

////////////////////////////////////////////////////////////////////////
// WORK SPACE WORK SPACE WORK SPACE WORK SPACE WORK SPACE WORK SPACE //


let test = choreList.filter((element, index)=>{
  return index %2 === 0;
});
console.log(test);



// WORK SPACE WORK SPACE WORK SPACE WORK SPACE WORK SPACE WORK SPACE //
//////////////////////////////////////////////////////////////////////


// ...........................................................
// EVENT LISTENERS
// 
document.getElementById('submit').addEventListener('click', addChore);
// document.getElementById('#bibs').addEventListener('click', choreDone);
// ...........................................................

// EVENT HANDLERS
function addChore (event){
  event.preventDefault();
  new Chore(choreName.value);
}


function choreDone(){
  document.getElementById('li').checked = true;
    console.log('OH YIS');
}
// choreDone();
// ...........................................................