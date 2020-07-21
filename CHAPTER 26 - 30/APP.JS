//  Chapter 26 - 30



//Task 1
// var inputNumber = window.prompt("Enter Positive Integer","Enter Here!");
// document.write("Number : " + inputNumber + "<br>");
// document.write("Round Off : " + Math.round(inputNumber) + "<br>");
// document.write("Floor Value : " + Math.floor(inputNumber) + "<br>");
// document.write("Ceil Value : " + Math.ceil(inputNumber));


//Task 2
// var inputNegativeNumber = window.prompt("Enter Negative Integer","Enter Here!");
// document.write("Number : " + inputNegativeNumber + "<br>");
// document.write("Round Off : " + Math.round(inputNegativeNumber) + "<br>");
// document.write("Floor Value : " + Math.floor(inputNegativeNumber) + "<br>");
// document.write("Ceil Value : " + Math.ceil(inputNegativeNumber));


//Task 3
// var absoluteValue = window.prompt("Enter Value");
// document.write("The absolute value of " + absoluteValue + " is " + Math.abs(absoluteValue));


//Task 4
// var generateRandom = parseInt((Math.random() * 6) + 1);
// document.write("Random Dice Number Is : " + generateRandom);


//Task 5
// var toss = parseInt((Math.random() * 2) + 1);
// document.write(toss + "<br>");
// switch (toss) {
//     case 1:
//         document.write("Random coin Value : Tails");
//         break;
//     case 2:
//         document.write("Random coin Value : Heads");
//         break;
// }


//Task 6
// var numbers = parseInt((Math.random() * 100) + 1);
// document.write("Random numbers between 1 and 100 : " + numbers);


//Task 7
// var weight = window.prompt("Enter Weight");
// var store;
// for (var i = 0; i < weight.length; i++) {
//     if (weight.slice(i, i + 3) === "kgs") {
//         store = Number(weight.split("kgs",1));
//         document.write("The Weight Of User Is " + store + " Kilograms");
//         break;
//     }
//     else if (weight.slice(i, i + 2) === "kg") {
//         store = weight.split("kg", 1);
//         document.write("The Weight Of User Is " + store + " Kilograms");
//         break;
//     }
//     else if (weight.slice(i, i + 9) === "kilograms" || weight.slice(i, i + 8) === "kilogram") {
//         store = weight.split("kilograms", 1);
//         store = weight.split("kilogram", 1);
//         document.write("The Weight Of User Is " + store + " Kilograms");
//         break;
//     }
// }


//Task 8
// var secretNumber = parseInt((Math.random() * 10) + 1);
// var guess = Number(window.prompt("Guess a number between 1 - 10","Try your luck"));
// if(guess === secretNumber){
//     window.alert("Congratulations!!!");
// }
// else{
//     window.alert("Try Again!");
// }