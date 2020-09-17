// function logSubmit(event) {
//   log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
//   event.preventDefault();
//   console.log(input1)
// }

// var form = document.getElementById('form');
// console.log(form)

// form.addEventListener('submit', logSubmit);

var users = [];
var chores = [];
var currentDate = new Date();

function AddUser (name, pin){
  this.name = name;
  this.pin = pin;
  users.push(this);
}

function AddChore (name, startDate, frequency){
  this.name = name;
  this.startDate = startDate;
  // startDate defined as days from current date.
  this.frequency = frequency;
  // frequency defined as every X day from start day ex: startDate + 1day = scheduled day / chore occurs every 1 day after start date.
  chores.push(this);
}

new AddUser('Klace', 666);
new AddChore ('Sweep', 0, 1);

// console.log(new Date());