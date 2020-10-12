var name = "name";
var cognome = "cognome"
var colore = "colore";

// nome
name = prompt("Come ti chiami?", "nome inserito");
var spanName = document.getElementById("nome");
spanName.innerHTML = name;
console.log(name);

// cognome
cognome = prompt("Quale è il tuo cognome?", "cognome inserito");
var spanCognome = document.getElementById("cognome");
spanCognome.innerHTML = cognome;
console.log(cognome);

// colore
colore = prompt("Quale è il tuo colore preferito?", "colore inserito");
var spanColore= document.getElementById("colore");
spanColore.innerHTML = colore;
console.log(colore);

// password generata
var password = name + cognome + colore + "20";
var spanPassword= document.getElementById("password");
spanPassword.innerHTML = password;
console.log(password);
