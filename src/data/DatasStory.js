// // import { useContext } from "react";
// import { userData } from "./DataUser"
// // import { UserContext } from "../context/UserContext";



// // console.log(userData)

// let msg = null;

// let us = [];


// function CreateStory() {

//     const user = us.push(useContext(UserContext));

//     // let nomInterlocuteur = userData.nomInterlocuteur;



//     if (user.nomInterlocuteur === null) {
//         msg = "la personne chargée du recrutement ou des relations écoles";
//     }
//     else {
//         msg = `Mme/Mr ${user.nomInterlocuteur}`;
//     }

//     return (us, msg)


// }

// // 

// export const data = () => {

//     CreateStory();
//     return [

//         {
//             id: 0,
//             title: `Bonjour, ${us.prenom} ${userData.nom} étudiante à l'EPSI, je cherche à joindre ${msg}, s'il vous plait.`,
//             choiceOne: { text: "Oui, je vous passe le service.", target: "/etape5" }, // HOURA 
//             choiceTwo: { text: "C'est à quel sujet ?", target: "/etape1" }, // Go to 1
//             choiceThree: { text: "Il n'est pas disponible pour le moment.", target: "/etape3" }, // Go to 3
//         },


//         // Cas si demande le sujet
//         {
//             id: 1,
//             title: "Je souhaite faire le point avec cette personne sur une offre en cours",
//             choiceOne: { text: "Je ne comprend pas, vous êtes une école, une entreprise ? Vous avec déjà eu un premier contact ? ", target: "/etape2" }, // Go to 2
//             choiceTwo: { text: "Il n'est pas disponible pour le moment.", target: "/etape3" }, // Go to 3
//             choiceThree: { text: null, target: "/" },
//         },

//         // Cas si demande plus d'info
//         {
//             id: 2,
//             title: `Je suis étudiant(e) en ${userData.cursus}  et votre entreprise m'intéresse pour effectuer mon ${userData.contrat} et je souhaite ${userData.motif}`,
//             choiceOne: { text: "Je vous laisse dans un premier temps nous envoyer un mail.", target: "/etape4" }, // Go to 4
//             choiceTwo: { text: null, target: "/" },
//             choiceThree: { text: null, target: "/" },
//         },
//         // Cas si pas dispo
//         {
//             id: 3,
//             title: "A quel moment puis je le/la rappeler ?",
//             choiceOne: { text: "Prise de note, Fin , merci retour", target: "/" }, // Je vous remercie pour votre accueil, bonne fin de journée
//             choiceTwo: { text: "Ne veux pas répondre", target: "/" },
//             choiceThree: { text: null, target: "/" },
//         },

//         {
//             id: 4,
//             title: "Très bien, je vous écoute pour l'adresse mail.",
//             choiceOne: { text: "Retour", target: "/" },
//             choiceTwo: { text: null, target: "/" },
//             choiceThree: { text: null, target: "/" },
//         },

//         {
//             id: 5,
//             title: "BRAVO",
//             choiceOne: { text: "Retour", target: "/" },
//             choiceTwo: { text: null, target: "/" },
//             choiceThree: { text: null, target: "/" },
//         }

//     ]
// } 