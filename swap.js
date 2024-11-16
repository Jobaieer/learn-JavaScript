document.write("Problem: 01");
document.write("<br/>");
let num1 = 10;
let num2 = 20;

document.write("Before Swapping: num1 = " + num1 + ", num2 = " + num2);
document.write("<br/>");
let temporary;

temporary = num2; //temp=20 & num2=0
num2 = num1; //num2=10
num1 = temporary; //num1=20 because temp=20

document.write("After Swapping: num1 = " + num1 + ", num2 = " + num2);
