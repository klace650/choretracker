// ...........................................................
// GLOBALS
var users = [];
var chores = [];
var currentDate = new Date();

// ...........................................................
// FUNCTIONS
// 
//
// Adds users details into global user array
function AddUser (name, pin){
  this.name = name;
  this.pin = pin;
  users.push(this);
}
//
// Adds chores details into global user array
function AddChore (name, startDate, frequency){
  this.name = name;
  this.startDate = startDate;
  // startDate defined as days from current date.
  this.frequency = frequency;
  // frequency defined as every X day from start day ex: startDate + 1day = scheduled day / chore occurs every 1 day after start date.
  chores.push(this);
}
// 
// ...........................................................
// FORMS





// ...........................................................
// USERS
new AddUser('Klace', 666);
new AddUser('Joelle', 555);

// ...........................................................
// CHORES
new AddChore ('Sweep', 0, 1);
new AddChore ('Dishes', 0, 1);

// ...........................................................
// TEST LOGS
console.log(new Date());
console.log(users);
console.log(chores);
// ...........................................................
// ...........................................................
// ...........................................................
// ...........................................................
// ...........................................................
// ...........................................................
// ...........................................................
// ...........................................................
// ...........................................................