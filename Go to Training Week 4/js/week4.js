
 /*
Jose Baerga
SDI Section #1
Title : Go To Training Week 4
Date : 09/23/2015
 */

 //alert("Test to see if connected");

 //Create a file that will give us a random number betwen two number

 //Ask the user for the minimum number

 var minNum = prompt("Let's find a number between two numbers \nWhat is the min number");

 //Validate the prompt is not blank and it is a number
 while(minNum==="" || isNaN(minNum)){
  //re-prompt the
  minNum = prompt("Please do not leave blank only use numbers. \nWhat is the min number");

 }
 /*
 Basic structure of a while loop

 //Declare a variable
 var num = prompt("Type in a number");

 while(x < 6 ){ //condition to test

   //Some sort of change to the variable we in our condition to test.
   x++;
 }

   */