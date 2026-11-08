"use strict"; // Mode strict, signale les variables non déclarées (slide 52)



// f1 : affiche les éléments d'un tableau
function f1() { // Déclaration d'une fonction (slide 46)
    // Déclaration d'un tableau de chaînes de caractères (slide 39)
    const etudiants = ["Etudiant1", "Etudiant2", "Etudiant3"];

    // Boucle for...of pour parcourir le tableau (slide 45)
    for (const etudiant of etudiants) {
        console.log(etudiant); // Affichage dans la console (slide 34)
    }
}

// f2 : affiche un objet
function f2() { // Déclaration d'une fonction (slide 46)
    // Déclaration d'un objet avec ses propriétés (slide 40)
    const etudiant = {
        nom: "John",
        prenom: "DOE",
        age: 30
    };

    console.log(etudiant); // Affichage de l'objet dans la console (slides 34 et 40)
}

// f3 : affiche un tableau d'objets
function f3() { // Déclaration d'une fonction (slide 46)
    // Déclaration d'un tableau d'objets (slide 41)
    const etudiants = [
        { nom: "nom1", prenom: "prenom1", age: 21 },
        { nom: "nom2", prenom: "prenom2", age: 22 },
        { nom: "nom3", prenom: "prenom3", age: 23 }
    ];

    // Boucle for...of pour parcourir le tableau d'objets (slide 45)
    for (const etudiant of etudiants) {
        // Accès aux propriétés d'un objet avec le point (slide 40)
        // et affichage formaté avec les backticks (slide 38)
        console.log(`${etudiant.nom}-${etudiant.prenom}-${etudiant.age}`);
    }
}
