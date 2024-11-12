// Fieldset 1
export const dataFormF1 = [

    {
        id: 0,
        label: "Nom",
        input: {
            type: 'text',
            name: "nom",
            placeholder: "Ajouter votre nom",
        },
    },
    {
        id: 1,
        label: "Prénom",
        input: {
            type: 'text',
            name: "prenom",
            placeholder: "Ajouter votre prénom",
        }
    }

]


export const dataFormF2 = [
    {
        id: 0,
        label: "Oui",
        input: {
            type: 'radio',
            name: "recipient",
            value: true,
        },
    },
    {
        id: 1,
        label: "Non",
        input: {
            type: 'radio',
            name: "recipient",
            value:false,
        },
    }
]


// export const dataFormF3 = [
//     {
//         id: 0,
//         label: "Oui",
//         input: {
//             type: 'radio',
//             name: "recipient",
//             value: true,
//         },
//     },
//     {
//         id: 1,
//         label: "Non",
//         input: {
//             type: 'radio',
//             name: "recipient",
//             value:false,
//         },
//     }
// ]