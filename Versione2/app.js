var name = "user";
var cognome = "cognome"
var color = "color";
var password = "";

// nome
name = prompt("What is your name?");
console.log("name: " + name);

// cognome
cognome = prompt("What is your surname?");
console.log ("surname: " + cognome)

// colore
color = prompt("Quale è il tuo color preferito?");
console.log("color: " + color);

// password generata
password = name + cognome + color + "20";
console.log("password: " + password);

// inserimento della pagina
var elementPassword = document.getElementById("passwordGenerate");
elementPassword.innerHTML = password;

var elementUser = document.getElementById("helloUser");
elementUser.innerHTML = "Hi " + name + "!" ;

// animazione
var animation = document.getElementById('seeAnimation');
console.log(animation);
