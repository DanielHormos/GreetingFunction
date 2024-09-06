const prompt = require('prompt-sync')();

function greet(namePassedIn, dateOfCourseStart) {
  var today = new Date();
  var dateToStart = new Date(dateOfCourseStart);
  console.log(today.getDate());
  var days = dateToStart.getDate() - today.getDate();
  return 'Welcome to SALT, ' + namePassedIn  +  '\nToday it is ' + days + ' days left until the course starts';
}

// Main program
const name = prompt('What is your name? ');
const dateOfCourseStart = prompt('When does the course start? ')
const greeting = greet(name, dateOfCourseStart);
console.log(greeting);

module.exports.greet = greet;