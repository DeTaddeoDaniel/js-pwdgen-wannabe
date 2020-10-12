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
