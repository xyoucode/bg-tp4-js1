"use strict"; // Mode strict, signale les variables non déclarées (slide 52)

// Données Students : tableau d'objets (slide 41)
// Format de chaque ligne : (id, nom, prenom, moyenne, autre)
const Students = [
    { id: 1000, nom: "JOHN",   prenom: "DOE",     moyenne: 14, autre: 5 },
    { id: 2000, nom: "BOB",    prenom: "CARLTON", moyenne: 7,  autre: 1 },
    { id: 3000, nom: "RAYANE", prenom: "SMITH",   moyenne: 13, autre: 3 }
];

// Fonction B : un seul paramètre float, retourne un booléen (slide 46)
function B(moyenne) {
    // Opérateur relationnel >= (slide 42) : true si la moyenne est au moins 10
    return moyenne >= 10;
}

// Fonction A : parcourt les étudiants et appelle B (slide 46)
function A() {
    // Boucle for...of pour parcourir le tableau d'objets (slide 45)
    for (const student of Students) {
        // Notation ternaire selon le booléen retourné par B (slide 43)
        const decision = B(student.moyenne) ? "ADMIS" : "AJOURNÉ";
        // Affichage formaté avec les backticks (slide 38), un résultat par ligne
        console.log(`${student.id}: ${decision}`);
    }
}
