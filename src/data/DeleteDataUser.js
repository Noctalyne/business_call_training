import { redirect } from "react-router-dom";

export default function DeleteDataUser() {

    let user = { nom: null, prenom: null, genderInterlocuteur: null, nomInterlocuteur: null, cursus: null, contrat: null, motif: null };

    const handleOnDelete = e => {
        localStorage.removeItem("user");
        localStorage.setItem("user", JSON.stringify(user));
        // redirect("/")
    }

    return (
        <>
            <button onClick={handleOnDelete}>Réinitialiser les donées utilisateur</button>
        </>
    )

}