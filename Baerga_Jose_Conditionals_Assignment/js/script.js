
 /*
Jose Baerga
SDI Section #1
Title _ Baerga Jose_Conditional_Assignment
Date - 09/17/2015
 */

 //We are going to distribute commercial trucks on the highway truck stop by line and
 // by weight, Maximum weight is 200,000 ponds and minimum is 175 pound
 // Line # 1 is for truck equal or over 200,000 pounds , Line # 2 is for truck equal or less than 175,000.

// lets found out how much is the trucks weight

//variable of truckWeight


alert("Let's Find out what is the weight of each of the 4 truck ");
 var truckWeight = [truck1 = 16500, truck2 = 200000, truck3 = 175000, truck4 = 230000];
  console.log(truckWeight);

 var truckNumber = ("The weight of truck # 1 is  "+truck1+" "+"the weight of truck # 2 is "+truck2+" "+"\nthe weight of truck # 3 is "
     +truck3+" "+"the weight of truck # 4 is "+truck4);

 //Let see the print on console

 alert(truckNumber);
 console.log(truckNumber);


 //Variable of maxWeight = 200,000   minWeight = 175,000
 alert("If a truck is equal or more of the maximum weight of \n200,000 pound go to line # 1 \nif the truck is less or equal of minimum weight of \n175,000 pound  then go to line # 2 \nLets found out");
 console.log("If a truck is equal or more of the maximum weight of \n200,000 pound go to line # 1 \nif the truck is less or equal of minimum weight of \n175,000 pound  then go to line # 2 \nLets found out")
 var maxWeight = 200000;
 var minWeight = 175000;
 var truckLine;
 // Condition statement

 //if statement of truck #1

 if (truck1 >= maxWeight){
  //print in console what truck is going to lane 1
   alert(truckLine ="Truck #1 please go to line # 1");
  console.log("Please go to lane # 1");
  //print in console what truck go to lane 2
 } else if (truck1 <= minWeight){
  //print in console what truck is going to lane 1
    alert(truckLine ="Truck # 1 please go to line # 2");
  console.log(truckLine);
 }

 //if statement of truck #2

 if (truck2 >= maxWeight){
  //print in console what truck is going to lane 1
  alert(truckLine ="Truck # 2 please go to line # 1");
  console.log(truckLine);
  //print in console what truck go to lane 2
 } else if (truck2 <= minWeight) {
  //print in console what truck is going to lane 1
  alert(truckLine = "Truck # 2 please go to line # 2");
  console.log(truckLine);
 }

 //if statement of truck #3

 if (truck3 >= maxWeight){
  //print in console what truck is going to lane 1
  alert(truckLine ="Truck # 3 please go to line # 1");
  console.log(truckLine);
  //print in console what truck go to lane 2
 } else if (truck3 <= minWeight){
  //print in console what truck is going to lane 1
  alert(truckLine ="Truck # 3 please go to line # 2");
  console.log(truckLine);
 }

 //if statement of truck #4

 if (truck4 >= maxWeight){
  //print in console what truck is going to lane 1
  alert(truckLine ="Truck # 4 please go to line # 1");
  console.log(truckLine);
  //print in console what truck go to lane 2
 } else if (truck4 <= minWeight){
  //print in console what truck is going to lane 1
  alert(truckLine ="Truck # 4 please go to line # 2");
  console.log(truckLine);
 }

