/**
 * Created by josebaerga on 9/10/15.
 * SDI Class Section 01
 * Week 2 Assignment - Expression _worksheet
 * instructor: Eric Silvay
 */

//Expressions_worksheet - Dog Years .

//Variables of calculating when the dog born and how many human years.

//finding how many human years are when the dog born to Actual year.

//variable for yearDogBorn, actualYear and humanYears.

//Asking for the year that the dog born.
var yearDogBorn = prompt("Let see how old is your dog \n Pleas enter the year that your dog born ");
console.log(yearDogBorn);

//asking of the year that we are calculating for.

var actualYear = prompt("Please enter the year that you are living now ");
console.log(actualYear);

//Calculating the human years.

var humanYears = actualYear - yearDogBorn;
alert("The Human years are" + " " + humanYears);
console.log("The Human years are" + " " + humanYears);

//Calculating Dog Age (dogAge) by multiply humanYears by 7.

var dogYear = humanYears * 7;

//print out the result of the dog years .

console.log("Your Dog would be " + " " + dogYear + " " + "by" + " " + actualYear); //print on console the results of dogYears.
alert("Your Dog would be " + " " + dogYear + " " + "by" + " " + actualYear); // Prompt the message of dogYears.




