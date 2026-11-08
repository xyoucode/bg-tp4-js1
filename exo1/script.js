"use strict"; // Mode strict, signale les variables non déclarées (slide 52)

// Déclaration de constantes avec const (slides 38 et 52)
const nom = "John";     // Type primitif String (slide 38)
const prenom = "Doe";   // Type primitif String (slide 38)
const age = 30;         // Type primitif number, entier (slide 38)
const note = 15;        // Type primitif number (slide 38)
const pi = 3.14;        // Type primitif number, réel (slide 38)

// Déclaration d'une fonction sans paramètres (slide 46)
// f1 : affiche le nom
function f1() {
    console.log(nom); // Affichage dans la console (slide 34)
}

// f2 : affiche le prénom
function f2() {
    console.log(prenom); // Affichage dans la console (slide 34)
}

// f3 : affiche nom et prénom séparés par un tiret
function f3() {
    // Affichage formaté avec les backticks (template literal, slide 38)
    console.log(`${nom}-${prenom}`);
}

// f4 : affiche l'âge
function f4() {
    console.log(age); // Affichage dans la console (slide 34)
}

// f5 : affiche la note
function f5() {
    console.log(note); // Affichage dans la console (slide 34)
}

// f6 : affiche la valeur de pi
function f6() {
    console.log(pi); // Affichage dans la console (slide 34)
}
