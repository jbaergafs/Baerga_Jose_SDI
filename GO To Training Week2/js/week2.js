/*
Jose Baerga
SDI Section #1
GoTo Training Week #2
9-6-2015
 */


//alert("Test to see if connected")

//Create an age calculator

//Ask the user for their name
var name= prompt("Let's figure out how old you " +
    "are !\nPlease type in your name.");

//Use the variable and sya hello
alert("Welcome "+name+"!");

//Ask the user what year they were born
var yearBorn = prompt("What year werew you born?");

//console.log the answer to check it
console.log(yearBorn);

//Calculate their age

//we need to know the current year
//Hardcoded - means type in a specifyc value.
var currentYear = 2015;

//figure out age
var age = currentYear - yearBorn-1;

//alert the user with their age
alert(name+" you are "+age+" years old");


