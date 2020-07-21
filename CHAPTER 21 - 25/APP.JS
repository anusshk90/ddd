//  Chapter 21 - 25


//Task 1
// var firstName = window.prompt("Enter Your First Name","first name");
// var lastName = window.prompt("Enter Your Last Name","last name");
// var fullName = firstName + " " + lastName;
// window.alert("Hello! " + fullName); 


//Task 2
// var favouritePhone = window.prompt("Enter Your Favourite Phone", "my favourite phone is");
// var len = favouritePhone.length;
// document.write("My Favourite Phone Is " + favouritePhone);
// document.write("<br>Length Of String Is: " + len);


//Task 3
// var word = "Pakistan";
// document.write("String is " + word + "<br>");
// for (var i = 0; i < word.length; i++) {
//     if (word.slice(i, i + 1) === "n") {
//         document.write("Index of 'n' is " + i);
//     }
// }


//Task 4
// var word1 = "Hello World";
// document.write("String " + word1 + "<br>");
// var find = word1.lastIndexOf("l");
// document.write("Last Index Is " + find);


//Task 5
// var word = "Pakistani";
// document.write("String Is " + word + "<br>");
// document.write("Character at Index 3 is " + word[3]);


//Task 6
// var firstName = window.prompt("Enter Your First Name","first name");
// var lastName = window.prompt("Enter Your Last Name","last name");
// var fullName = firstName.concat(lastName);
// window.alert("Hello! " + fullName); 


//Task 7
// var city = "karachi";
// document.write("Before: " + city + "<br>");
// for (var i = 0; i < city.length; i++) {
//     if (city.slice(i, i + 5) === "Hyder") {
//         city = city.slice(0, i) + "Islam" + city.slice(i + 5);
//         document.write("After Replacement " + city);
//     }
// }


//Task 8
// var message = "amjad and anas are best player. They play cricket and football together.";
// document.write("Current Message : " + message + "<br>");
// for (var i = 0; i < message.length; i++) {
//     if (message.slice(i, i + 3) === "and") {
//         message = message.slice(0, i) + "&" + message.slice(i + 3);

//     }
// }
// document.write("After Replacement : " + message);


//Task 9
// var string = "472";
// console.log(string);
// var number = parseInt(string);
// console.log("Value: " +number);


//Task 10
// var user = window.prompt("Enter Some Thing In Lower Case", "Enter Here");
// var upperCase = user.toUpperCase();
// window.alert(upperCase);


//Task 11
// var user = window.prompt("Enter Some Thing", "Enter Here");
// var firstChar = user.slice(0,1);
// var rem = user.slice(1);
// firstChar = firstChar.toUpperCase();
// user = firstChar.concat(rem);
// window.alert(user);


//Task 12
// var mul;
// var num = 35.36;
// var cal = num.toString();
// var store;
// for (var i = 0; i < cal.length; i++) {
//     if (cal.slice(i, i + 1) === ".") {
//         store = cal.slice(i + 1);
//     }
// }
// var temp = store.length;
// temp = Math.pow(10, temp);
// num *= temp;
// document.write("Result = " + num);


//Task 13
// var input = window.prompt("Ener Something", "Enter Here!");
// for(var i =0;i<input.length;i++){
//     if(input.slice(i,i+1)=== "@" ||input.slice(i,i+1)=== ","||input.slice(i,i+1)=== "!"||input.slice(i,i+1)=== "."){
//         window.alert("Please Enter a valid user Name...");
//     }
// }


//Task 14
// var A = ["cake", "apple pie", "pizza", "chips", "zinger"];
// var order = window.prompt("Welcome to ABC Bakery, What do you want to order Sir/ma'am", "Enter Here");
// var orderr = order.toLowerCase();
// var temp = 0;
// for (var i = 0; i < A.length; i++) {
//     if(orderr === A[i]){
//         window.alert(order + " is avaliable at index " + i + " in our Bakery");
//         break;
//     }
//     temp++
// }

// if(temp === 5){
//     window.alert("We are Sorry! " + order + " is not avaliable in our Bakery");
// }

//Task 15
// var password = window.prompt("Enter Password!", "enter here!");
// if (password.slice(0, 1) <= 48 && password.slice(0, 1) <= 57) {
//     window.alert("Password Can not begin with a number");
//     window.alert("Please Enter A Valid Password..");
// }
// else if (password.length < 6) {
//     window.alert("Password Must be greater than 6");
// }
// else {
//     window.alert("Welcome!");
// }


//Task 16
// var university = "NED usniversity";
// for (var i = 0; i < university.length; i++) {
//     document.write(university[i] + "<br>")
// }


//Task 17
// var userInput = window.prompt("Enter Here!");
// document.write("User Input = " + userInput + "<br>");
// document.write("Last Character Of Input = " + userInput[userInput.length -1]);


//Task 18
// var string = "The quick brown fox jumps over the lazy dog";
// document.write("String : " + string + "<br>");
// var value = 0;
// for (var i = 0; i < string.length; i++) {
//     if (string.slice(i, i + 3) === "the" || string.slice(i, i + 3) === "The") {
//         value++;
//     }
// }
// if(value >= 2){
//     document.write("There are " + value + " Occurrence(s) of word 'the'");
// }
// else{
//     document.write("There is " + value + " Occurrence of word 'the'");
// }

