import { createContext, useState } from "react";

export const UserContext = createContext();

const userData =
// TODO : A changer ici celon le cas
{
    // nom: "Dilmamode",
    // prenom: "Yasmine",
    // // nomInterlocuteur: "John Doe", 
    // nomInterlocuteur: null,
    // cursus: "EISI",
    // contrat: "alternance",
    // motif: "savoir où en est ma candidature"

    nom: null,
    prenom: null,
    nomInterlocuteur: null,
    cursus: null,
    contrat: null,
    motif: null,
}

export const UserDataProvider = ({children}) => {
    const [user, setUser] = useState(userData);

    return (
        <UserContext.Provider value={{ user, setUser}}>
            {children}    
        </UserContext.Provider>
    )
}