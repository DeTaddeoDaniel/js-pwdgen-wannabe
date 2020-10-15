var name = "user";
var surname = "surname"
var color = "color";
var password = "";

// name
name = prompt("What is your name?");
console.log("name: " + name);

// surname
surname = prompt("What is your surname?");
console.log ("surname: " + surname)

// color
color = prompt("What is like color?");
console.log("color: " + color);

// generate password
password = name + surname + color + "20";
console.log("password: " + password);

// add element page
var elementPassword = document.getElementById("passwordGenerate");
elementPassword.innerHTML = password;

var elementUser = document.getElementById("helloUser");
elementUser.innerHTML = "Hi " + name + "!" ;

// animation
var animation = document.getElementById('seeAnimation');
console.log(animation);
