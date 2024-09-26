// import { createContext, useContext, useState } from "react";
// import { UserContext } from "./UserContext";

// export const StoryContext = createContext();

// // let user = [];
// let msg = null;

// // const ApplyUserData = () => {
// //     const userData = useContext(UserContext);
// //     user.pop();
// //     user.push(userData);

// //     if (user.nomInterlocuteur === null) {
// //         msg = "la personne chargée du recrutement ou des relations écoles";
// //     }
// //     else {
// //         msg = `Mme/Mr ${user.nomInterlocuteur}`;
// //     }

// //     return user
// // }

// // const ApplyStoryContext = (index) => {
// //     const [storyContext,setStoryContext] = useState( {} );

// //     storyData.forEach( e => {
// //         if (e.id === index) {
// //             console.log(e);
// //         }
// //     });

// // }
// const Userr = useContext(UserContext);


// // const useUser = () =>  {

// //     if (useUser.nomInterlocuteur === null) {
// //         msg = "la personne chargée du recrutement ou des relations écoles";
// //     }
// //     else {
// //         msg = `Mme/Mr ${useUser.nomInterlocuteur}`;
// //     }
    
// //     return useContext(UserContext);

// // };

// // useUser;

// // ApplyUserData()

// console.log({ Userr })

// const storyData = [

//     {
//         id: 0,
//         title: `Bonjour, ${useUser.prenom} ${useUser.nom} étudiante à l'EPSI, je cherche à joindre ${msg}, s'il vous plait.`,
//         choiceOne: { text: "Oui, je vous passe le service.", target: "/etape5" }, // HOURA 
//         choiceTwo: { text: "C'est à quel sujet ?", target: "/etape1" }, // Go to 1
//         choiceThree: { text: "Il n'est pas disponible pour le moment.", target: "/etape3" }, // Go to 3
//     },
//     // Cas si demande le sujet
//     {
//         id: 1,
//         title: "Je souhaite faire le point avec cette personne sur une offre en cours",
//         choiceOne: { text: "Je ne comprend pas, vous êtes une école, une entreprise ? Vous avec déjà eu un premier contact ? ", target: "/etape2" }, // Go to 2
//         choiceTwo: { text: "Il n'est pas disponible pour le moment.", target: "/etape3" }, // Go to 3
//         choiceThree: { text: null, target: "/" },
//     },

//     // Cas si demande plus d'info
//     {
//         id: 2,
//         title: `Je suis étudiant(e) en ${useUser.cursus}  et votre entreprise m'intéresse pour effectuer mon ${useUser.contrat} et je souhaite ${useUser.motif}`,
//         choiceOne: { text: "Je vous laisse dans un premier temps nous envoyer un mail.", target: "/etape4" }, // Go to 4
//         choiceTwo: { text: null, target: "/" },
//         choiceThree: { text: null, target: "/" },
//     },
//     // Cas si pas dispo
//     {
//         id: 3,
//         title: "A quel moment puis je le/la rappeler ?",
//         choiceOne: { text: "Prise de note, Fin , merci retour", target: "/" }, // Je vous remercie pour votre accueil, bonne fin de journée
//         choiceTwo: { text: "Ne veux pas répondre", target: "/" },
//         choiceThree: { text: null, target: "/" },
//     },

//     {
//         id: 4,
//         title: "Très bien, je vous écoute pour l'adresse mail.",
//         choiceOne: { text: "Retour", target: "/" },
//         choiceTwo: { text: null, target: "/" },
//         choiceThree: { text: null, target: "/" },
//     },

//     {
//         id: 5,
//         title: "BRAVO",
//         choiceOne: { text: "Retour", target: "/" },
//         choiceTwo: { text: null, target: "/" },
//         choiceThree: { text: null, target: "/" },
//     }

// ]


// // const chooseStoryData = (index) => {
// //     storyData.find(item => item.id === 0)

// // };


// // console.log(chooseStoryData());


// export const StoryDataProvider = ({ children }) => {
    
//     const [story] = useState(storyData);

//     return (
//         <StoryContext.Provider value={{ story}}>
//             {children}
//         </StoryContext.Provider>
//     )
// }