
 /*
Jose Baerga
SDI Section #1
Title : Go To Training Week 3 - gototrainingweek3.js
Date : 09/15/2015
 */
//Creat an array of fruits names and the sort it

//Array - variable that holds multiple variables
// Index # of an array always starts with 0!!

 var bowlOfFruit = ["apple", "banana", "pear", "peach", "pear", "Kiwi", "Strawberrys", "pear", "pear"];


//See whole array
 console.log(bowlOfFruit);

 //Console.log the banana
 console.log(bowlOfFruit[1]);
 //How many items are in an array?

 //lenght property - access this by using dot syntax
 //Fancy term for use a period
 console.log(bowlOfFruit.length);

//Count the number of pears in our fruit bowl

//Creat a variable that will keep track of many pears there are

 var totalNumPears = 0;

 //Test each item in the array and check if it is a pear
 //Basic structure of a conditional
 // If(condition to test){code that will run if true}

 //"7" == 7 - true
 //"7" === 7 - true
 //"7" = 7 - false
 // promt always return strings!!

 if(bowlOfFruit[0]==="pear"){
      //This code will run if true
      //Add 1 to the total number of pears
  console.log("This item is a pear !");
  totalNumPears++; //totalNumPears = totalNumPears + 1;
 } else {
  console.log("This fruit is not a pear!")
 }

 if(bowlOfFruit[1]==="pear"){
  //This code will run if true
  //Add 1 to the total number of pears
  console.log("This item is a pear !");
  totalNumPears++; //totalNumPears = totalNumPears + 1;
 } else {
  console.log("This fruit is not a pear!")
 }

 if(bowlOfFruit[2]==="pear"){
  //This code will run if true
  //Add 1 to the total number of pears
  console.log("This item is a pear !");
  totalNumPears++; //totalNumPears = totalNumPears + 1;
 } else {
  console.log("This fruit is not a pear!")
 }

 if(bowlOfFruit[3]==="pear"){
  //This code will run if true
  //Add 1 to the total number of pears
  console.log("This item is a pear !");
  totalNumPears++; //totalNumPears = totalNumPears + 1;
 } else {
  console.log("This fruit is not a pear!")
 }

 console.log("There are "+totalNumPears+ " pear in the fruit bowl");


 //Create another variable to track pears
 var pearNumber = 0;

 //Create a loop for repetitive code.

 //For Loop Structure
 //for(initializing a counting variable; condition to test;
 // incrementing of change){ code to run for each time we loop}

 for(var i =0; i<bowlOfFruit.length; i++){
  console.log("Inside the loop, i ="+i)
  console.log(bowlOfFruit[i]);
  //Test if the array item is pear
  if(bowlOfFruit[i]==="pear"){
     console.log("Found a pear!");
     pearNumber++;
  }else{
     console.log("Fruit is not a pear");
  }
 }

console.log("The total number of pear in the bowl is "+pearNumber);
