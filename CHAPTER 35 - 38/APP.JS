//  Chapter 35 - 38


//Task 1
// function date() {
//     var currentDate = new Date();
//     document.write(currentDate);
// }
// date();

//Task 2
// function greet(f, l) {
//     var conact = f + " " + l;
//     window.alert("Hello " + conact);
// }
// var firstnAme = window.prompt("Enter Your First Name:");
// var lastnAme = window.prompt("Enter Your Last Name:");
// greet(firstnAme,lastnAme);


//Task 3
// function addTwo(int1, int2) {
//     return int1 + int2;
// }
// var num1 = Number(window.prompt("Enter First Number"));
// var num2 = Number(window.prompt("Enter Second Number"));
// var result = addTwo(num1, num2);
// window.alert("Sum Of " + num1 + " and " + num2 + " Is : " + result);


//Task 4
// function calculator(num1, operator, num2) {
//     if (operator === "+") {
//         return num1 + num2;
//     }
//     else if (operator === "-") {
//         return num1 - num2;
//     }
//     else if (operator === "*") {
//         return num1 * num2;
//     }
//     else if (operator === "/") {
//         return num1 / num2;
//     }
//     else if (operator === "%") {
//         return num1 % num2;
//     }
//     else {
//         return "Invalid";
//     }
// }
// var int1 = Number(window.prompt("Enter First Number"));
// var ope = window.prompt("Enter Operator Number");
// var int2 = Number(window.prompt("Enter Second Number"));
// var cal = calculator(int1, ope, int2);
// window.alert(int1 + " " + ope + " " + int2 + " = " + cal);


//Task 5
// function square(num) {
//     return Math.pow(num, 2);
// }
// var user = window.prompt("Enter Number");
// var ans = square(user);
// window.alert("Square Of " + user + " is : " + ans);


//Task 6
// function factorial(num) {
//     var store = 1
//     for (var i = 1; i <= num; i++) {
//         store *= i
//     }
//     document.write("The Factorial Of " + num + " is : " + store);
// }
// var user = Number(window.prompt("Enter Number"));
// factorial(user);


//Task 7
// function counting(first, last) {
//     for (var i = first; i <= last; i++) {
//         document.write(i + " ");
//     }
// }

// var start = Number(window.prompt("Enter Start Number"));
// var end = Number(window.prompt("Enter Last Number"));
// counting(start, end);



//Task 8
// function calculateHypotenuse(b, p) {
//     function calculateSquare(n) {
//         return Math.pow(n, 2);
//     }
//     return calculateSquare(b) + calculateSquare(p);
// }
// var base = Number(window.prompt("Enter Base"));
// var perpendicular = Number(window.prompt("Enter Perpendicular"));
// var calcu = calculateHypotenuse(base, perpendicular);
// document.write("Hypotenuse Is : " + calcu);



//Task 9
// function areaOfReactangle(val1, val2) {
//     var A = val1 * val2;
//     window.alert("Area Of Reactangle Is : " + A);
// }
// var height = 23;
// var width = 81;
// areaOfReactangle(3, 8); // as value
// areaOfReactangle(height, width); // as Variable


//Task 10
// function palindrome(str, num) {
//     var temp = "";
//     for (var i = num; i >= 0; i--) {
//         temp = temp + str[i]
//     }
//     if(temp === str){
//         document.write(str + " Is Palindrome");
//     }
//     else{
//         document.write(str + " Is Not Palindrome");
//     }
// }
// var pal = window.prompt("Enter Word");
// len = pal.length - 1;
// palindrome(pal, len);


//Task 11
// function Upper(string = "") {
//     var split = string.toLowerCase().split(" ");
//     for (var i = 0; i < split.length; i++) {
//         split[i] = split[i].charAt(0).toUpperCase() + split[i].substring(1);
//     }
//     string = split.join(" ");
//     document.write(string);
// }
// var str = "the quick brown fox";
// Upper(str);


//Task 12
// function longest(str = "") {
//     var long = str.split(" ");
//     longestWord = 0;
//     store = "";
//     for (var i = 0; i < long.length; i++) {
//         if (long[i].length > longestWord) {
//             longestWord = long[i].length;
//             store = long[i]
//         }
//     }
//     document.write(store);
// }
// longest("Web Development Tutorial");


//Task 13
// function Occurence(string = "", letter = "") {
//     var val = 0;
//     for (var i = 0; i < string.length; i++) {
//         if (string.slice(i, i + 1) === letter) {
//             val++;
//         }
//     }
//     document.write(letter + " appears " + val + " times");
// }

// Occurence("muhammad", "m")


//Task 14
// function calcCircumference(radius) {
//     var circumference = 2 * Math.PI * radius;
//     document.write("The Circumference Of Circle Is " + circumference.toFixed(2) + "<br>");
// }
// function calcArea(radius) {
//     var area = (Math.PI * Math.pow(radius,2));
//     document.write("The Area Of Circle Is " + area.toFixed(2));
// }
// calcCircumference(5);
// calcArea(4);