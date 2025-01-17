# IPL-Social

## Auteur
Topet Alexandre alexandre.topet@student.vinci.be

## Github URL
https://github.com/alexandre-topet-vinci/IPL-Social.git


## Description
La fonction vérifie si une chaîne de caractères est un mot de passe valide selon les critères suivants :

- Longueur minimale : Le mot de passe doit contenir au moins 8 caractères.
- Caractère spécial obligatoire : Il doit inclure au moins un caractère spécial.
- Présence d'un chiffre : Il doit contenir au moins un chiffre.
- Restriction sur une chaîne interdite : Le mot de passe ne peut pas contenir la chaîne de caractères "IPL", quelle que soit la casse.

## Execution de la commande de test
npm run test

## Exemples d'utilisations

// Exemples de mots de passe à valider :
const motsDePasse = [
    "Exemple@123", // Valide
    "MotDePasse",  // Invalide (pas de caractère spécial, pas de chiffre)
    "ipl12345@",   // Invalide (contient "IPL")
    "Valide1!",    // Valide
    "Short1!",     // Invalide (moins de 8 caractères)
];

// Test de chaque mot de passe
motsDePasse.forEach((motDePasse) => {
    const valide = validatePassword(motDePasse);
    console.log(`Le mot de passe "${motDePasse}" est ${valide ? "valide" : "invalide"}.`);
});