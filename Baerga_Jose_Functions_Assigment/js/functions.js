
 /*
Jose Baerga
SDI Section #1
Title : Baerga_Jose_Functions_Assigment
Date : 09/24/2015
 */


 // We are going to ask 4 peoples of how many gallons of milk they drink in
 //a mont and we are going to calculate how much they drink in an spesific amount of years and how much they spend
 // we are going to use a formula galons drink = gallonsPerMoth X 12 moths and multiply by the years that we will drink
 // and also know how much they will spend.


//Ask the user hom many gallons they drink per moth in a Variable gallonsPerMoth
 var gallonsPerMoth = prompt("let's found out how may gallons of milk you drink in a moth " +
     "\nplease enter the amount how many gallons you drink: ");

 //We want o ensure that the user enter numbers and not letters
 while(gallonsPerMoth==="" ||isNaN(gallonsPerMoth)) {

  //Lets re-prompt the variable
  if (gallonsPerMoth === "") {
   gallonsPerMoth = prompt("Please don't leave the space blank!" +
       "\nust enter how much milk you drink do not enter letters");
  } else if (isNaN(gallonsPerMoth)) {

   gallonsPerMoth = prompt("Please only enter number of gallons \ndo not enter letters");

   //let print on console how much galons of milk per moth
   console.log(gallonsPerMoth);
  }

 }

 //Ask the user hom many gallons they drink per moth in a Variable gallonsPerMoth
 var payPerGallon = prompt("let's found out how muchyou pay for gallons of milk in a moth " +
     "\nplease enter the amount how many gallons you drink: ");

 //We want o ensure that the user enter numbers and not letters
 while(payPerGallon==="" ||isNaN(payPerGallon)) {

  //Lets re-prompt the variable
  if (payPerGallon === "") {
   payPerGallon = prompt("Please don't leave the space blank!  " +
       "\nJust enter how much you pay ");
  } else if (isNaN(payPerGallon)) {

   payPerGallon = prompt("Please dont enter letters  \nenter how much you pay");

   //let print on console how much galons of milk per moth
   console.log(payPerGallon);
  }

 }

 //What type of milk you drink

 var typeOfMilk = prompt("What type of milk you drink? \n lowfat, whole or light?");
 //Made all the answers go on lower case
 typeOfMilk = typeOfMilk.toLowerCase();
 while(typeOfMilk !="light" && typeOfMilk !="whole" && typeOfMilk !="lowfat"){
  typeOfMilk = prompt("Please only use light, whole or lowfat as your answer. \nWhat type of milk you drink?");
  console.log("Type of milk is"+" "+typeOfMilk);
 }

 //Let's prepare our function for How much milk you consume and pay in 1 year
 var returnMilk = milkYear(gallonsPerMoth);
 var returnPay = yearPay(payPerGallon);
 alert("The amount of milk in a moth is"+" "+gallonsPerMoth+" gallons and you pay per gallon is $"+payPerGallon+" " +
     " \nin one year you drink "+returnMilk+" gallons and pay is $"+returnPay);
 console.log("The amount of milk in a moth is"+" "+gallonsPerMoth+" gallons and you pay per gallon is $"+payPerGallon+" " +
     " \nin one year you drink "+returnMilk+" gallons and pay is $"+returnPay);

 // So the formula is yearOfMilk = gallonsOfMilk * 12 and multiply that with payPerGallon and give you hom much you spend in a year

 function milkYear(milk){
  var totalMilk = Number(milk) * 12;
  return totalMilk;

 }
function yearPay(pay){
 var totalPay = Number(pay) * returnMilk;
 return totalPay;
}

 //print out the results

