// Initialisation et export des données utilisateur
export const user = JSON.parse(localStorage.getItem("user"));

if (!user) {
    let localeUser = { nom: null, prenom: null, recipient: false, genderInterlocuteur: null, nomInterlocuteur: null, cursus: null, contrat: null, motif: null };
    localStorage.setItem("user", JSON.stringify(localeUser))
}



// Initialisation du texte celon les donnéess

let msg = null;

if (!user.genderInterlocuteur && !user.nomInterlocuteur) {
    msg = "la personne chargée du recrutement ou des relations écoles";
}
else if (user.genderInterlocuteur && user.nomInterlocuteur) {
    msg = `${user.genderInterlocuteur} ${user.nomInterlocuteur}`;
}


// Export des données finales d'affichage
export const data = [
    {
        id: 0,
        title: `Bonjour, ${user.prenom} ${user.nom} étudiante à l'EPSI, je cherche à joindre ${msg}, s'il vous plait.`,
        choiceOne: { text: "Oui, je vous passe le service.", target: "/etape5", style: "great" }, // HOURA 
        choiceTwo: { text: "C'est à quel sujet ?", target: "/etape1", style: "good" }, // Go to 1
        choiceThree: { text: "Il n'est pas disponible pour le moment.", target: "/etape3", style: "bad" }, // Go to 3
    },


    // Cas si demande le sujet
    {
        id: 1,
        title: "Je souhaite faire le point avec cette personne sur une offre en cours",
        choiceOne: { text: "Je ne comprend pas, vous êtes une école, une entreprise ? Vous avec déjà eu un premier contact ? ", target: "/etape2" , style: "good"  }, // Go to 2
        choiceTwo: { text: "Il n'est pas disponible pour le moment.", target: "/etape3" , style: "bad"}, // Go to 3
        choiceThree: { text: null, target: "/" },
    },

    // Cas si demande plus d'info
    {
        id: 2,
        title: `Je suis étudiant(e) en ${user.cursus}  et votre entreprise m'intéresse pour effectuer mon ${user.contrat} et je souhaite ${user.motif}`,
        choiceOne: { text: "Je vous laisse dans un premier temps nous envoyer un mail.", target: "/etape4", style: "good" }, // Go to 4
        choiceTwo: { text: null, target: "/" },
        choiceThree: { text: null, target: "/" },
    },
    // Cas si pas dispo
    {
        id: 3,
        title: "A quel moment puis je le/la rappeler ?",
        choiceOne: { text: "Prise de note, Fin , merci retour", target: "/" , style: "good" }, // Je vous remercie pour votre accueil, bonne fin de journée
        choiceTwo: { text: "Ne veux pas répondre", target: "/", style: "bad"  },
        choiceThree: { text: null, target: "/" },
    },

    {
        id: 4,
        title: "Très bien, je vous écoute pour l'adresse mail.",
        choiceOne: { text: "Retour", target: "/etape0", style: "neutral"  },
        choiceTwo: { text: null, target: "/" },
        choiceThree: { text: null, target: "/" },
    },

    {
        id: 5,
        title: "BRAVO",
        choiceOne: { text: "Modifier mes informations", target: "/etape0", style: "neutral" },
        choiceTwo: { text: "Recommencer", target: "/etape0", style: "neutral" },
        choiceThree: { text: null, target: "/" },
    }

]
