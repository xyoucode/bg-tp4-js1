"use strict"; // Mode strict (slide XX)

/* ============================================================
   TP4 - JavaScript - Exercice 1
   Chaque bouton appelle une fonction (f1 ... f6)
   Sortie uniquement via console.log()
   NB : remplacer "XX" par le numéro de slide correspondant du cours
   ============================================================ */

// Déclaration de variables avec const (slide XX)
const nom = "John";      // Type String (slide XX)
const prenom = "Doe";    // Type String (slide XX)
const age = 30;          // Type Number (slide XX)
const note = 15;         // Type Number (slide XX)
const pi = 3.14;         // Type Number décimal (slide XX)

// f1 : affiche le nom
function f1() {
    console.log(nom); // Affichage console (slide XX)
}

// f2 : affiche le prénom
function f2() {
    console.log(prenom);
}

// f3 : affiche nom & prénom séparés par un tiret
function f3() {
    // Concaténation de chaînes avec les template literals (slide XX)
    console.log(`${nom}-${prenom}`);
}

// f4 : affiche l'âge
function f4() {
    console.log(age);
}

// f5 : affiche la note
function f5() {
    console.log(note);
}

// f6 : affiche la valeur de Pi
function f6() {
    console.log(pi);
}

// Association des boutons aux fonctions via les événements (slide XX)
// getElementById : sélection d'un élément du DOM (slide XX)
document.getElementById("btnNom").addEventListener("click", f1);
document.getElementById("btnPrenom").addEventListener("click", f2);
document.getElementById("btnNomPrenom").addEventListener("click", f3);
document.getElementById("btnAge").addEventListener("click", f4);
document.getElementById("btnNote").addEventListener("click", f5);
document.getElementById("btnPi").addEventListener("click", f6);
