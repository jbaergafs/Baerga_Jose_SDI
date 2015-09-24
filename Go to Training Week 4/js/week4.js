
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

 //parse int variable
 //minNum=parseInt(minNum);
 //console.log(minNum);
 //Validate the prompt is not blank and it is a number
 while(minNum==="" || isNaN(minNum)){
  //re-prompt the
  if(minNum===""){
   minNum = prompt("Please do not leave blank " +
       " \nWhat is the min number");
  }else if (isNaN(minNum)){

   minNum = prompt("Please do not leave blank only use numbers." +
       " \nWhat is the min number");
  }
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

 //Prompt the user for a max number
var maxNumber = prompt("What is the max number");

 //Validate directly after the prompt
 while(maxNumber==="" || isNaN(maxNumber)){
  maxNumber = prompt("Please do not leave blank and only use numbers. " +
      "\nWhat is the max number");
 }

 //What if I wanted to validate words
 //Ask a yes or no question
 var happy = prompt("Are you happy today?");
//convert to all lowercase
 happy = happy.toLowerCase();
 while(happy !="yes" && happy !="no" && happy !="maybe"){
  //
  happy = prompt("Please only use yes or no. \nAre " +
          "you happy today?");
 }
 