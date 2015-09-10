/**
 * Created by josebaerga on 9/10/15.
 * SDI Class Section 01
 * Week 2 Assignment - Expression _worksheet
 * instructor: Eric Silvay
 */

//Expressions_worksheet - Slice of Pie part 1 .

//Variables of calculating How many Slice Per person eat in the party.

//finding how many slice of pizza by divided the pizzas ordered by People in hte party.

//variable for pizzasOrder, peopleParty and slicePizza.

//Asking how many Pizzas they order for the party (pizzasOrder)
var pizzasOrder = prompt("How many pizzas that they order for the party \n Please enter the amount of pizza's ");
console.log(pizzasOrder);

//Asking for the amount of pleople thet eat pizza at the party.

var peopleParty = prompt("Please enter the year that you are living now ");
console.log(peopleParty);

//Calculating how many slices of pizza they ate.

var slicePizza = (pizzasOrder / peopleParty) * pizzasOrder;
alert("Each person ate " + " " + slicePizza + " " + "slices at the party");
console.log("Each person ate " + " " + slicePizza + " " + "slices at the party");




