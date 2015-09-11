/**
 * Created by josebaerga on 9/10/15.
 * SDI Class Section 01
 * Week 2 Expression_Assignment
 * instructor: Eric Silvay
 */

/*
 * We are going to calculate how many miles do a peron walk a day and how many steps need to walk
 * on a desired distance.
 */,

// found out how many steps a person walk in a day asuming that the person know that information

var stepsWlk = prompt("Let found out how many miles do you walk today \n Pleas enter the steps that you walk today "); //prompt the stepswalks today
console.log(stepsWlk);//print to console.log the steps walks today.

//If an average person walk a mile is  2000 steps a day using this as reference for calculation

var stepAvrg = 2000;

// How many miles a person walk from average

var milesWalk = stepsWlk / stepAvrg;

//Console.log of miles walk

alert("You walk " + " " + milesWalk + " " + "miles Today");
console.log("You walk " + " " + milesWalk + " " + "miles Today");

//Lets found out how many steps per a distance that the person want to walk

var milesToWalk = prompt("Lets found out how many steps you need for a distance \n that you want to walk, please enter the miles ");//prompt for the miles want to walk
console.log("Lets found out ho many steps you need for a distance \n that you want to walk, please enter the miles " + milesToWalk);//print on console.log the miles want to walk

//Lets calculate how many steps that person need

var stpsNeed = milesToWalk * stepAvrg;

// This is how many miles need to walk

alert("You need to walk" + " " + stpsNeed + " " + "steps to get to your goal "); //show to user the amount of steps result
console.log("You need to walk" + " " + stpsNeed + " " + "steps to get to your goal ");//print on console.log the amount of steps




